import './StepIndicator.css';

interface StepIndicatorProps {
  currentStep: number;
  totalSteps: number;
  labels?: string[];
}

export default function StepIndicator({ currentStep, totalSteps, labels }: StepIndicatorProps) {
  const progress = ((currentStep) / totalSteps) * 100;

  return (
    <div className="step-indicator" id="step-indicator">
      <div className="step-indicator__bar">
        <div
          className="step-indicator__fill"
          style={{ width: `${progress}%` }}
        />
      </div>
      <div className="step-indicator__steps">
        {Array.from({ length: totalSteps }, (_, i) => (
          <div
            key={i}
            className={`step-indicator__step ${
              i < currentStep
                ? 'step-indicator__step--done'
                : i === currentStep
                ? 'step-indicator__step--active'
                : ''
            }`}
          >
            <div className="step-indicator__dot">
              {i < currentStep ? '✓' : i + 1}
            </div>
            {labels && labels[i] && (
              <span className="step-indicator__label">{labels[i]}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
