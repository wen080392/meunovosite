import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';
import { sendLeadEmail } from './mailer';

dotenv.config();

const app = express();
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});
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
        company: company || '',
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
        company: company || '',
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
        company: company || '',
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

    const lead = await prisma.lead.findUnique({
      where: { id },
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

// Cria as tabelas automaticamente ao iniciar (garante que funcionem no Railway)
async function ensureDatabase() {
  try {
    // Habilitar extensão para gen_random_uuid()
    await prisma.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS "pgcrypto"');
    
    await prisma.$executeRawUnsafe(
      'CREATE TABLE IF NOT EXISTS "leads" ("id" TEXT NOT NULL DEFAULT gen_random_uuid()::TEXT, "name" TEXT NOT NULL, "company" TEXT NOT NULL, "whatsapp" TEXT NOT NULL, "email" TEXT NOT NULL, "source" TEXT NOT NULL, "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP, CONSTRAINT "leads_pkey" PRIMARY KEY ("id"))'
    );
    await prisma.$executeRawUnsafe(
      'CREATE TABLE IF NOT EXISTS "calculator_results" ("id" TEXT NOT NULL DEFAULT gen_random_uuid()::TEXT, "leadId" TEXT NOT NULL, "projectType" TEXT NOT NULL, "projectSize" TEXT NOT NULL, "aiRequired" TEXT NOT NULL, "integrations" TEXT NOT NULL, "mobile" TEXT NOT NULL, "estimatedMin" INTEGER NOT NULL, "estimatedMax" INTEGER NOT NULL, CONSTRAINT "calculator_results_pkey" PRIMARY KEY ("id"), CONSTRAINT "calculator_results_leadId_key" UNIQUE ("leadId"))'
    );
    await prisma.$executeRawUnsafe(
      'CREATE TABLE IF NOT EXISTS "diagnostic_results" ("id" TEXT NOT NULL DEFAULT gen_random_uuid()::TEXT, "leadId" TEXT NOT NULL, "repetitiveTasks" TEXT NOT NULL, "customerContact" TEXT NOT NULL, "spreadsheets" TEXT NOT NULL, "systemsIntegration" TEXT NOT NULL, "aiUsage" TEXT NOT NULL, "mainProblem" TEXT NOT NULL, "totalScore" INTEGER NOT NULL, "automationOpportunities" INTEGER NOT NULL, CONSTRAINT "diagnostic_results_pkey" PRIMARY KEY ("id"), CONSTRAINT "diagnostic_results_leadId_key" UNIQUE ("leadId"))'
    );
    // Add foreign keys if they don't exist (ignore error if they already do)
    try {
      await prisma.$executeRawUnsafe('ALTER TABLE "calculator_results" ADD CONSTRAINT "calculator_results_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads"("id") ON DELETE CASCADE ON UPDATE CASCADE');
    } catch (_) { /* FK already exists */ }
    try {
      await prisma.$executeRawUnsafe('ALTER TABLE "diagnostic_results" ADD CONSTRAINT "diagnostic_results_leadId_fkey" FOREIGN KEY ("leadId") REFERENCES "leads"("id") ON DELETE CASCADE ON UPDATE CASCADE');
    } catch (_) { /* FK already exists */ }
    console.log('✅ Banco de dados verificado e tabelas prontas!');
  } catch (error) {
    console.error('⚠️ Erro ao preparar banco de dados:', error);
  }
}

// Inicializa banco e depois inicia o servidor
ensureDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
  });
});
