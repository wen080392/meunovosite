import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Política de Privacidade | Vibe Tech"
        description="Saiba como a Vibe Tech protege seus dados e cumpre a LGPD em todos os projetos de tecnologia."
      />
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Política de Privacidade</h1>
        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Última atualização: Agosto de 2026</p>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Introdução</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Na Vibe Tech, privacidade e segurança são prioridades. Nós nos comprometemos com a transparência do tratamento de dados pessoais dos nossos usuários e clientes, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Coleta de Dados</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Coletamos informações através dos formulários em nosso site (nome, e-mail, telefone/WhatsApp, empresa) com o objetivo exclusivo de contato comercial, elaboração de propostas (calculadora) e envio de resultados de diagnóstico.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Uso das Informações</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          As informações capturadas não serão vendidas, alugadas ou compartilhadas com terceiros sem consentimento expresso, exceto quando exigido por lei.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Segurança dos Dados</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Adotamos as melhores práticas de segurança da informação, arquitetura de sistemas e criptografia para proteger os dados armazenados em nossos servidores contra acessos não autorizados.
        </p>
        
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
          <Link to="/contato" className="btn btn--secondary">Dúvidas? Entre em contato</Link>
        </div>
      </div>
    </>
  );
}
