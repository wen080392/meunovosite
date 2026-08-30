import { useState } from 'react';
import SEO from '../components/SEO';
import StepIndicator from '../components/StepIndicator/StepIndicator';
import LeadForm from '../components/LeadForm/LeadForm';
import { calculatorSteps, calculateEstimate } from '../data/siteData';
import type { CalculatorAnswers } from '../types';
import './Calculator.css';

export default function Calculator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<CalculatorAnswers>>({});
  const [showResult, setShowResult] = useState(false);
  const [showLeadForm, setShowLeadForm] = useState(false);

  const totalSteps = calculatorSteps.length;
  const isLastStep = currentStep === totalSteps - 1;

  function handleSelect(value: string) {
    const step = calculatorSteps[currentStep];
    const newAnswers = { ...answers, [step.key]: value };
    setAnswers(newAnswers);

    if (isLastStep) {
      setShowResult(true);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  }

  function handleBack() {
    if (showLeadForm) {
      setShowLeadForm(false);
    } else if (showResult) {
      setShowResult(false);
    } else if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  }

  function handleLeadSubmit(_data: any) {
    // Lead is saved by the LeadForm component
  }

  const estimate = showResult ? calculateEstimate(answers as CalculatorAnswers) : null;

  return (
    <>
      <SEO
        title="Calculadora de Investimento"
        description="Descubra quanto custa seu projeto de sistema web, automação ou inteligência artificial. Calculadora gratuita com estimativa personalizada."
      />

      <section className="page-hero" id="calculator-hero">
        <div className="container">
          <span className="tag tag--cyan">Gratuito</span>
          <h1>
            Calculadora de <span className="text-gradient">Investimento</span>
          </h1>
          <p className="page-hero__subtitle">
            Responda 5 perguntas rápidas e receba uma estimativa do investimento para seu projeto.
          </p>
        </div>
      </section>

      <section className="section calculator-section" id="calculator-form">
        <div className="container container--narrow">
          {!showLeadForm && (
            <StepIndicator
              currentStep={showResult ? totalSteps : currentStep}
              totalSteps={totalSteps}
            />
          )}

          {/* Question Steps */}
          {!showResult && !showLeadForm && (
            <div className="calculator-step animate-fade-in" key={currentStep}>
              <div className="calculator-step__header">
                <span className="calculator-step__number">
                  Pergunta {currentStep + 1} de {totalSteps}
                </span>
                <h2 className="calculator-step__question">
                  {calculatorSteps[currentStep].question}
                </h2>
              </div>

              <div className="calculator-options">
                {calculatorSteps[currentStep].options.map((option) => (
                  <button
                    key={option.value}
                    className={`calculator-option ${
                      answers[calculatorSteps[currentStep].key] === option.value
                        ? 'calculator-option--selected'
                        : ''
                    }`}
                    onClick={() => handleSelect(option.value)}
                    id={`calc-option-${option.value}`}
                  >
                    <span className="calculator-option__label">{option.label}</span>
                    <span className="calculator-option__check">
                      {answers[calculatorSteps[currentStep].key] === option.value ? '✓' : ''}
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

          {/* Result */}
          {showResult && !showLeadForm && estimate && (
            <div className="calculator-result animate-fade-in-up" id="calculator-result">
              <div className="calculator-result__card">
                <div className="calculator-result__glow" aria-hidden="true"></div>
                <div className="calculator-result__content">
                  <span className="tag tag--green">Estimativa gerada</span>
                  <h2>Seu projeto está estimado entre</h2>
                  <div className="calculator-result__range">
                    <span className="calculator-result__price text-gradient">
                      R$ {estimate.min.toLocaleString('pt-BR')}
                    </span>
                    <span className="calculator-result__separator">e</span>
                    <span className="calculator-result__price text-gradient">
                      R$ {estimate.max.toLocaleString('pt-BR')}
                    </span>
                  </div>
                  <p className="calculator-result__disclaimer">
                    <strong>Estimativa inicial</strong> — o valor final depende da análise técnica do projeto.
                  </p>
                  <div className="calculator-result__actions">
                    <button
                      className="btn btn--primary btn--large"
                      onClick={() => setShowLeadForm(true)}
                      id="calc-get-estimate"
                    >
                      Receber diagnóstico gratuito
                    </button>
                    <button className="btn btn--ghost" onClick={handleBack}>
                      ← Refazer cálculo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Lead Form */}
          {showLeadForm && (
            <div className="calculator-lead animate-fade-in-up" id="calculator-lead-form">
              <h2>Receba sua estimativa detalhada</h2>
              <p>Preencha seus dados e nossa equipe entrará em contato com uma análise personalizada.</p>
              <LeadForm
                source="calculator"
                onSubmit={handleLeadSubmit}
                extraData={{
                  calculatorData: answers as CalculatorAnswers,
                  estimatedRange: estimate ? `R$ ${estimate.min.toLocaleString('pt-BR')} - R$ ${estimate.max.toLocaleString('pt-BR')}` : undefined,
                }}
                submitLabel="Receber minha estimativa"
              />
              <button className="btn btn--ghost calculator-back" onClick={handleBack}>
                ← Voltar
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
