import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

// Inicializa o SDK do Resend com a chave fornecida via variável de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

// Endereço de remetente oficial. No Resend, para testes sem domínio validado, deve ser 'onboarding@resend.dev'
// Se o usuário tiver um domínio validado, deve ser substituído por algo como 'contato@vibetech.com.br'
const FROM_EMAIL = 'onboarding@resend.dev';

export const sendLeadEmail = async (leadData: any, type: 'contact' | 'calculator' | 'diagnostic') => {

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
    // 1. Envia o e-mail administrativo (Notificando a Vibe Tech)
    const adminResponse = await resend.emails.send({
      from: `Vibe Tech Notificações <${FROM_EMAIL}>`,
      to: 'vibetechvibe92@gmail.com',
      subject: subject,
      html: htmlContent,
    });
    console.log(`✅ E-mail ADMIN enviado via Resend:`, adminResponse);

    // 2. Envia o e-mail de resposta automática para o cliente
    if (leadData.email) {
      const clientResponse = await resend.emails.send({
        from: `Vibe Tech <${FROM_EMAIL}>`,
        to: leadData.email,
        subject: clientSubject,
        html: clientHtmlContent,
      });
      console.log(`✅ E-mail CLIENTE enviado via Resend para: ${leadData.email}`, clientResponse);
    }
  } catch (error) {
    console.error('❌ Erro ao enviar e-mail via Resend:', error);
  }
};
