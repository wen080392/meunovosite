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

  // --- HTML PARA O CLIENTE (LEAD) ---
  const clientSubject = type === 'contact' 
    ? 'Recebemos seu contato - Vibe Tech' 
    : type === 'calculator' 
      ? 'Sua estimativa de projeto - Vibe Tech' 
      : 'Seu Diagnóstico de Automação - Vibe Tech';

  let clientHtmlContent = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
      <h2 style="color: #6C63FF;">Olá, ${leadData.name}!</h2>
      <p>Obrigado por se conectar com a Vibe Tech.</p>
  `;

  if (type === 'calculator' && leadData.calculatorData) {
    clientHtmlContent += `
      <p>Aqui está o resumo da estimativa do seu projeto:</p>
      <div style="background: #f4f4f9; padding: 15px; border-radius: 8px;">
        <ul style="list-style: none; padding: 0;">
          <li><strong>Tipo de Projeto:</strong> ${leadData.calculatorData.projectType}</li>
          <li><strong>Tamanho:</strong> ${leadData.calculatorData.projectSize}</li>
          <li><strong>Precisa de IA?:</strong> ${leadData.calculatorData.aiRequired ? 'Sim' : 'Não'}</li>
          <li><strong>Integrações:</strong> ${leadData.calculatorData.integrations ? 'Sim' : 'Não'}</li>
          <li><strong>App Mobile:</strong> ${leadData.calculatorData.mobile ? 'Sim' : 'Não'}</li>
        </ul>
      </div>
      <p><em>Esta é uma estimativa inicial. Nossa equipe entrará em contato em breve para uma análise técnica!</em></p>
    `;
  } else if (type === 'diagnostic' && leadData.diagnosticData) {
    clientHtmlContent += `
      <p>Aqui está o resumo do seu diagnóstico de automação:</p>
      <div style="background: #f4f4f9; padding: 15px; border-radius: 8px;">
        <p>Identificamos algumas oportunidades de automação com base nas suas respostas.</p>
        <p><strong>Nossa equipe vai analisar seus dados e entrar em contato com uma proposta de automação.</strong></p>
      </div>
    `;
  } else {
    clientHtmlContent += `<p>Recebemos sua mensagem e entraremos em contato em até 24 horas.</p>`;
  }

  clientHtmlContent += `
      <p style="margin-top: 30px;">Um abraço,<br><strong>Equipe Vibe Tech</strong></p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"Vibe Tech Notificações" <${process.env.SMTP_USER || 'vibetechvibe92@gmail.com'}>`,
      to: 'vibetechvibe92@gmail.com', // Envia para o próprio e-mail administrativo
      subject: subject,
      html: htmlContent,
    });
    console.log(`✅ E-mail ADMIN enviado para: vibetechvibe92@gmail.com`);

    // Envia o e-mail para o cliente (lead)
    if (leadData.email) {
      await transporter.sendMail({
        from: `"Vibe Tech" <${process.env.SMTP_USER || 'vibetechvibe92@gmail.com'}>`,
        to: leadData.email,
        subject: clientSubject,
        html: clientHtmlContent,
      });
      console.log(`✅ E-mail CLIENTE enviado para: ${leadData.email}`);
    }
  } catch (error) {
    console.error('❌ Erro ao enviar e-mail da lead:', error);
  }
};
