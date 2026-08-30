import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { sendLeadEmail } from './mailer';

dotenv.config();

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Simple in-memory rate limiter (no extra dependencies)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 60_000; // 1 minute
const RATE_LIMIT_MAX = 10; // max requests per window

app.use('/api', (req, res, next) => {
  const ip = req.ip || req.socket.remoteAddress || 'unknown';
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    return next();
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return res.status(429).json({ error: 'Muitas requisições. Tente novamente em 1 minuto.' });
  }

  entry.count++;
  next();
});

// Rota básica de teste
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Vibe Tech API is running' });
});

// Rota de Contato Simples
app.post('/api/leads', async (req, res) => {
  try {
    const { name, company, whatsapp, email, source } = req.body;

    const lead = await prisma.lead.create({
      data: {
        name,
        company,
        whatsapp,
        email,
        source: source || 'contact',
      },
    });

    // Dispara e-mail para notificar a nova lead
    await sendLeadEmail(lead, 'contact');

    res.status(201).json({ success: true, leadId: lead.id });
  } catch (error: any) {
    console.error('Erro ao salvar lead:', error);
    res.status(500).json({ success: false, error: 'Erro interno no servidor', details: error.message || String(error) });
  }
});

// Rota da Calculadora
app.post('/api/calculator', async (req, res) => {
  try {
    const { name, company, whatsapp, email, source, calculatorData, estimatedRange } = req.body;
    
    // Parse range to ints (e.g. "R$ 3.000 – R$ 5.000")
    // Simple fallback logic if parsing fails
    let estimatedMin = 0;
    let estimatedMax = 0;

    const lead = await prisma.lead.create({
      data: {
        name,
        company,
        whatsapp,
        email,
        source: source || 'calculator',
        calculatorResult: {
          create: {
            projectType: calculatorData.projectType,
            projectSize: calculatorData.projectSize,
            aiRequired: calculatorData.aiRequired,
            integrations: calculatorData.integrations,
            mobile: calculatorData.mobile,
            estimatedMin,
            estimatedMax,
          }
        }
      },
    });
    // Envia o e-mail de notificação com os dados enriquecidos
    await sendLeadEmail({ ...lead, calculatorData }, 'calculator');

    res.status(201).json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error('Erro ao salvar lead da calculadora:', error);
    res.status(500).json({ success: false, error: 'Erro interno no servidor' });
  }
});

// Rota do Diagnóstico
app.post('/api/diagnostic', async (req, res) => {
  try {
    const { name, company, whatsapp, email, source, diagnosticData } = req.body;

    // Em um cenário real, recalcularíamos o score aqui no backend por segurança,
    // mas para a Fase 2 estamos apenas persistindo as respostas brutas por enquanto.
    const lead = await prisma.lead.create({
      data: {
        name,
        company,
        whatsapp,
        email,
        source: source || 'diagnostic',
        diagnosticResult: {
          create: {
            repetitiveTasks: diagnosticData.repetitiveTasks,
            customerContact: diagnosticData.customerContact,
            spreadsheets: diagnosticData.spreadsheets,
            systemsIntegration: diagnosticData.systemsIntegration,
            aiUsage: diagnosticData.aiUsage,
            mainProblem: diagnosticData.mainProblem,
            totalScore: 0, // A ser calculado
            automationOpportunities: 0 // A ser calculado
          }
        }
      },
    });

    // Envia o e-mail com os resultados do diagnóstico
    await sendLeadEmail({ ...lead, diagnosticData }, 'diagnostic');

    res.status(201).json({ success: true, leadId: lead.id });
  } catch (error) {
    console.error('Erro ao salvar lead do diagnóstico:', error);
    res.status(500).json({ success: false, error: 'Erro interno no servidor' });
  }
});

// GET /api/leads/:id - Busca o resultado de uma lead pelo ID para compartilhar link (Fase 2)
app.get('/api/leads/:id', async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validar se o id é um número para evitar erros no BD
    const leadId = parseInt(id, 10);
    if (isNaN(leadId)) {
      return res.status(400).json({ success: false, error: 'ID inválido' });
    }

    const lead = await prisma.lead.findUnique({
      where: { id: leadId },
      include: {
        calculatorResult: true,
        diagnosticResult: true
      }
    });

    if (!lead) {
      return res.status(404).json({ success: false, error: 'Lead não encontrada' });
    }

    res.json({ success: true, lead });
  } catch (error) {
    console.error('Erro ao buscar lead:', error);
    res.status(500).json({ success: false, error: 'Erro interno no servidor' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Servidor rodando na porta ${PORT}`);
});
