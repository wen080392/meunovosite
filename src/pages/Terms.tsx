import SEO from '../components/SEO';
import { Link } from 'react-router-dom';

export default function Terms() {
  return (
    <>
      <SEO
        title="Termos de Uso | Vibe Tech"
        description="Termos e condições de uso das plataformas e calculadoras fornecidas pela Vibe Tech."
      />
      <div className="container" style={{ paddingTop: '120px', paddingBottom: '80px', maxWidth: '800px', margin: '0 auto', color: 'var(--text-main)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem', fontFamily: 'var(--font-heading)' }}>Termos de Uso</h1>
        <p style={{ marginBottom: '1rem', color: 'var(--text-muted)' }}>Última atualização: Agosto de 2026</p>
        
        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Aceitação</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Ao acessar o site da Vibe Tech e utilizar nossas ferramentas (como Calculadora de Projeto e Diagnóstico), você concorda em cumprir estes termos de serviço, bem como as leis e regulamentos aplicáveis.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Isenção de Responsabilidade</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Os valores e estimativas fornecidos pela nossa calculadora são apenas projeções para fins informativos. Um escopo técnico detalhado e orçamento final só são consolidados após reunião e análise de requisitos pela nossa equipe de engenharia.
        </p>

        <h2 style={{ fontSize: '1.5rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Propriedade Intelectual</h2>
        <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
          Todo o conteúdo deste site, incluindo design, textos, gráficos, logotipos e códigos fonte (exceto onde indicado), é propriedade exclusiva da Vibe Tech. A reprodução não autorizada é proibida.
        </p>
        
        <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-light)' }}>
          <Link to="/contato" className="btn btn--secondary">Dúvidas? Entre em contato</Link>
        </div>
      </div>
    </>
  );
}
