import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configuração do transportador de e-mail (usando Gmail como padrão para facilidade)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || 'vibetechvibe92@gmail.com',
    pass: process.env.SMTP_PASS || '', // Deve ser preenchido via App Passwords do Google
  },
});

export const sendLeadEmail = async (leadData: any, type: 'contact' | 'calculator' | 'diagnostic') => {
  // Se não houver senha configurada, apenas ignoramos para não quebrar a aplicação (modo dev)
  if (!process.env.SMTP_PASS) {
    console.warn('⚠️ SMTP_PASS não configurado. E-mail não enviado para:', leadData.name);
    return;
  }

  const subjectMap = {
    contact: 'Nova Lead: Contato pelo Site',
    calculator: 'Nova Lead: Estimativa na Calculadora',
    diagnostic: 'Nova Lead: Diagnóstico Finalizado',
  };

  const subject = `[Vibe Tech] ${subjectMap[type]} - ${leadData.name}`;

  let htmlContent = `
    <h2>Você recebeu uma nova lead pela Vibe Tech!</h2>
    <p><strong>Nome:</strong> ${leadData.name}</p>
    <p><strong>E-mail:</strong> ${leadData.email}</p>
    <p><strong>WhatsApp:</strong> ${leadData.whatsapp}</p>
    <p><strong>Empresa:</strong> ${leadData.company || 'Não informado'}</p>
    <p><strong>Origem:</strong> ${leadData.source}</p>
  `;

  if (type === 'calculator' && leadData.calculatorData) {
    htmlContent += `
      <h3>Dados da Calculadora:</h3>
      <ul>
        <li>Tipo de Projeto: ${leadData.calculatorData.projectType}</li>
        <li>Tamanho: ${leadData.calculatorData.projectSize}</li>
        <li>Precisa de IA?: ${leadData.calculatorData.aiRequired ? 'Sim' : 'Não'}</li>
        <li>Integrações: ${leadData.calculatorData.integrations ? 'Sim' : 'Não'}</li>
        <li>App Mobile: ${leadData.calculatorData.mobile ? 'Sim' : 'Não'}</li>
      </ul>
    `;
  }

  if (type === 'diagnostic' && leadData.diagnosticData) {
    htmlContent += `
      <h3>Dados do Diagnóstico:</h3>
      <ul>
        <li>Tarefas Repetitivas: ${leadData.diagnosticData.repetitiveTasks}</li>
        <li>Contato Cliente: ${leadData.diagnosticData.customerContact}</li>
        <li>Planilhas: ${leadData.diagnosticData.spreadsheets}</li>
        <li>Score Final Calculado: ${leadData.diagnosticData.score}% (Automação Sugerida)</li>
      </ul>
    `;
  }

  try {
    await transporter.sendMail({
      from: `"Vibe Tech Notificações" <${process.env.SMTP_USER || 'vibetechvibe92@gmail.com'}>`,
      to: 'vibetechvibe92@gmail.com', // Envia para o próprio e-mail administrativo
      subject: subject,
      html: htmlContent,
    });
    console.log(`✅ E-mail enviado com sucesso para a lead ${leadData.name}`);
  } catch (error) {
    console.error('❌ Erro ao enviar e-mail da lead:', error);
  }
};
