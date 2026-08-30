import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import SEO from '../components/SEO';
import './Result.css';

export default function Result() {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(`/api/leads/${id}`)
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setData(res.lead);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="result-page-loading">
        <div className="spinner"></div>
        <p>Carregando seus resultados...</p>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="result-page-error">
        <h2>Resultado não encontrado</h2>
        <p>Não foi possível carregar as informações do seu projeto.</p>
        <Link to="/" className="btn btn--primary">Voltar ao Início</Link>
      </div>
    );
  }

  const calc = data.calculatorResult;
  const diag = data.diagnosticResult;

  return (
    <>
      <SEO title="Seu Resultado - Vibe Tech" description="Resultado da sua simulação" />
      <section className="section result-page">
        <div className="container container--narrow">
          <div className="result-card animate-fade-in-up">
            <span className="tag tag--green">Salvo com sucesso</span>
            <h1>Olá, <span className="text-gradient">{data.name}</span>!</h1>
            <p className="result-subtitle">Aqui está o resumo do que preparamos para você.</p>
            
            {calc && (
              <div className="result-details">
                <h3>Sua Estimativa de Projeto</h3>
                <div className="result-price text-gradient">
                  R$ {calc.estimatedMin.toLocaleString('pt-BR')} a R$ {calc.estimatedMax.toLocaleString('pt-BR')}
                </div>
                <ul className="result-list">
                  <li><strong>Tipo de projeto:</strong> {calc.projectType}</li>
                  <li><strong>Tamanho:</strong> {calc.projectSize}</li>
                  <li><strong>Inteligência Artificial:</strong> {calc.aiRequired ? 'Sim' : 'Não'}</li>
                  <li><strong>Integrações externas:</strong> {calc.integrations ? 'Sim' : 'Não'}</li>
                </ul>
              </div>
            )}

            {diag && (
              <div className="result-details">
                <h3>Seu Diagnóstico de Automação</h3>
                <ul className="result-list">
                  <li><strong>Desafio principal:</strong> {diag.mainProblem || 'Não informado'}</li>
                  <li><strong>Contato com Cliente:</strong> {diag.customerContact}</li>
                  <li><strong>Uso de Planilhas:</strong> {diag.spreadsheets}</li>
                </ul>
              </div>
            )}

            <div className="result-actions">
               <a href={`https://wa.me/5598985170034?text=${encodeURIComponent(`Olá, gerei uma estimativa no site (ID ${data.id}) e gostaria de conversar sobre os próximos passos.`)}`} className="btn btn--primary btn--large" target="_blank" rel="noopener noreferrer">Falar com um Especialista</a>
               <p className="result-share-hint">🔗 Você pode salvar ou compartilhar o link dessa página para ver depois!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
