import { useState } from 'react';
import SEO from '../components/SEO';
import StepIndicator from '../components/StepIndicator/StepIndicator';
import LeadForm from '../components/LeadForm/LeadForm';
import { diagnosticSteps, calculateDiagnostic } from '../data/siteData';
import type { DiagnosticAnswers } from '../types';
import './Diagnostic.css';

export default function Diagnostic() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<DiagnosticAnswers>>({});
  const [showResult, setShowResult] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const totalSteps = diagnosticSteps.length;
  const isLastStep = currentStep === totalSteps - 1;

  function handleSelect(value: string) {
    const step = diagnosticSteps[currentStep];
    const newAnswers = { ...answers, [step.key]: value };
    setAnswers(newAnswers);

    if (isLastStep) {
      setShowLeadForm(true);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  }

  function handleBack() {
    if (showResult) {
      setShowResult(false);
    } else if (showLeadForm) {
      setShowLeadForm(false);
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }

  function handleRestart() {
    setCurrentStep(0);
    setAnswers({});
    setShowResult(false);
    setShowLeadForm(false);
  }

  function handleLeadSubmit() {
    setShowLeadForm(false);
    setShowResult(true);
  }

  const result = showResult ? calculateDiagnostic(answers as DiagnosticAnswers) : null;

  return (
    <>
      <SEO
        title="Diagnóstico Empresarial Gratuito"
        description="Descubra onde sua empresa pode economizar tempo e dinheiro usando tecnologia. Diagnóstico gratuito de automação e eficiência operacional."
      />

      <section className="page-hero" id="diagnostic-hero">
        <div className="container">
          <span className="tag tag--green">Gratuito</span>
          <h1>
            Diagnóstico <span className="text-gradient">Empresarial</span>
          </h1>
          <p className="page-hero__subtitle">
            Descubra onde sua empresa pode economizar tempo e dinheiro usando tecnologia.
          </p>
        </div>
      </section>

      <section className="section diagnostic-section" id="diagnostic-form">
        <div className="container container--narrow">
          {!showResult && !showLeadForm && (
            <StepIndicator
              currentStep={currentStep}
              totalSteps={totalSteps}
              labels={diagnosticSteps.map(s => s.area)}
            />
          )}

          {/* Question Steps */}
          {!showResult && !showLeadForm && (
            <div className="diagnostic-step animate-fade-in" key={currentStep}>
              <div className="diagnostic-step__header">
                <span className="diagnostic-step__area tag">
                  {diagnosticSteps[currentStep].area}
                </span>
                <span className="diagnostic-step__count">
                  {currentStep + 1} de {totalSteps}
                </span>
                <h2 className="diagnostic-step__question">
                  {diagnosticSteps[currentStep].question}
                </h2>
              </div>

              <div className="diagnostic-options">
                {diagnosticSteps[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    className={`calculator-option ${
                      answers[diagnosticSteps[currentStep].key] === option.value
                        ? 'calculator-option--selected'
                        : ''
                    }`}
                    onClick={() => handleSelect(option.value)}
                    id={`diag-option-${option.value}`}
                  >
                    <span className="calculator-option__label">{option.label}</span>
                    <span className="calculator-option__check">
                      {answers[diagnosticSteps[currentStep].key] === option.value ? '✓' : ''}
                    </span>
                  </button>
                ))}
              </div>

              {currentStep > 0 && (
                <button className="btn btn--ghost calculator-back" onClick={handleBack}>
                  ← Voltar
                </button>
              )}
            </div>
          )}

          {/* Lead Form */}
          {showLeadForm && (
            <div className="calculator-lead animate-fade-in-up" id="diagnostic-lead-form">
              <h2>Receba seu diagnóstico detalhado</h2>
              <p>Preencha seus dados para liberar o resultado completo da sua análise de automação.</p>
              <LeadForm
                source="diagnostic"
                onSubmit={handleLeadSubmit}
                redirectToResult={false}
                extraData={{
                  diagnosticData: answers as DiagnosticAnswers,
                  totalScore: calculateDiagnostic(answers as DiagnosticAnswers).totalScore,
                  automationOpportunities: calculateDiagnostic(answers as DiagnosticAnswers).automationOpportunities,
                }}
                submitLabel="Ver meu resultado"
              />
              <button className="btn btn--ghost calculator-back" onClick={handleBack}>
                ← Voltar
              </button>
            </div>
          )}

          {/* Result */}
          {showResult && result && (
            <div className="diagnostic-result animate-fade-in-up" id="diagnostic-result">
              <div className="diagnostic-result__card">
                <div className="diagnostic-result__header">
                  <span className="tag tag--green">Diagnóstico concluído</span>
                  <h2>Resultado do seu diagnóstico</h2>
                </div>

                {/* Score */}
                <div className="diagnostic-score">
                  <div className="diagnostic-score__circle">
                    <svg viewBox="0 0 120 120">
                      <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(139,92,246,0.1)" strokeWidth="8" />
                      <circle
                        cx="60"
                        cy="60"
                        r="52"
                        fill="none"
                        stroke="url(#scoreGradient)"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${(result.totalScore / result.maxScore) * 327} 327`}
                        transform="rotate(-90 60 60)"
                        className="diagnostic-score__progress"
                      />
                      <defs>
                        <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#8b5cf6" />
                          <stop offset="100%" stopColor="#06b6d4" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="diagnostic-score__value">
                      <span className="diagnostic-score__number">{result.totalScore}</span>
                      <span className="diagnostic-score__max">/{result.maxScore}</span>
                    </div>
                  </div>
                  <p className="diagnostic-score__label">
                    Oportunidades em <strong>{result.automationOpportunities}</strong> áreas
                  </p>
                </div>

                {/* Area Breakdown */}
                <div className="diagnostic-areas">
                  {result.areas.map((area) => (
                    <div key={area.area} className="diagnostic-area">
                      <div className="diagnostic-area__header">
                        <span className="diagnostic-area__name">{area.area}</span>
                        <span className="diagnostic-area__score">{area.score}/{area.maxScore}</span>
                      </div>
                      <div className="diagnostic-area__bar">
                        <div
                          className="diagnostic-area__fill"
                          style={{ width: `${(area.score / area.maxScore) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recommendation */}
                <div className="diagnostic-recommendation">
                  <h3>Recomendação</h3>
                  <p>{result.recommendation}</p>
                </div>

                {/* Actions */}
                <div className="diagnostic-result__actions">
                  <a
                    href="https://wa.me/5598985170034?text=Ol%C3%A1%21%20Fiz%20o%20diagn%C3%B3stico%20no%20site%20da%20Vibe%20Tech%20e%20gostaria%20de%20conversar%20sobre%20as%20oportunidades%20de%20automa%C3%A7%C3%A3o."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary btn--large"
                    id="diag-whatsapp"
                  >
                    💬 Falar com especialista
                  </a>
                  <button className="btn btn--ghost" onClick={handleRestart}>
                    Refazer diagnóstico
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
