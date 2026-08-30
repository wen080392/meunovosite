import { useForm } from 'react-hook-form';
import './LeadForm.css';

interface LeadFormFields {
  name: string;
  email: string;
  company?: string;
  whatsapp?: string;
}

interface LeadFormProps {
  source?: string;
  onSubmit?: (data: LeadFormFields) => void;
  submitLabel?: string;
  extraData?: Record<string, unknown>;
}

/**
 * Reusable lead capture form. Sends a POST request to `/api/leads`.
 * Accepts optional props for customization across different pages:
 * - `source`: identifies where the lead came from
 * - `onSubmit`: callback after successful submission
 * - `submitLabel`: custom button text
 * - `extraData`: additional data merged into the request body (e.g. calculator answers)
 */
export default function LeadForm({
  source = 'website',
  onSubmit,
  submitLabel = 'Solicitar Demo',
  extraData,
}: LeadFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<LeadFormFields>();

  const handleFormSubmit = async (data: LeadFormFields) => {
    try {
      const endpoint = source === 'calculator' ? '/api/calculator' : source === 'diagnostic' ? '/api/diagnostic' : '/api/leads';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source, ...extraData }),
      });
      if (!response.ok) throw new Error('Network error');
      
      const resData = await response.json();
      
      reset();
      onSubmit?.(data);

      // Se for calculadora ou diagnóstico, redirecionar para a página de resultados
      if (resData.leadId && (source === 'calculator' || source === 'diagnostic')) {
        window.location.href = `/resultado/${resData.leadId}`;
      }
    } catch (e) {
      console.error('Lead submission error:', e);
    }
  };

  return (
    <section className="lead-form" aria-labelledby="lead-form-title">
      <h2 id="lead-form-title" className="lead-form__title">
        Solicite sua demonstração grátis
      </h2>
      {isSubmitSuccessful && (
        <p className="lead-form__success">✅ Obrigado! Entraremos em contato em breve.</p>
      )}
      <form onSubmit={handleSubmit(handleFormSubmit)} className="lead-form__wrapper" noValidate>
        <div className="lead-form__group">
          <label htmlFor="lead-name">Nome *</label>
          <input
            id="lead-name"
            type="text"
            {...register('name', { required: 'Nome é obrigatório' })}
            className={errors.name ? 'input error' : 'input'}
          />
          {errors.name && <span className="error-msg">{errors.name.message}</span>}
        </div>
        <div className="lead-form__group">
          <label htmlFor="lead-email">E‑mail *</label>
          <input
            id="lead-email"
            type="email"
            {...register('email', {
              required: 'E‑mail é obrigatório',
              pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: 'E‑mail inválido' },
            })}
            className={errors.email ? 'input error' : 'input'}
          />
          {errors.email && <span className="error-msg">{errors.email.message}</span>}
        </div>
        <div className="lead-form__group">
          <label htmlFor="lead-company">Empresa (opcional)</label>
          <input id="lead-company" type="text" {...register('company')} className="input" />
        </div>
        <div className="lead-form__group">
          <label htmlFor="lead-whatsapp">WhatsApp (opcional)</label>
          <input id="lead-whatsapp" type="tel" {...register('whatsapp')} className="input" />
        </div>
        <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : submitLabel}
        </button>
      </form>
    </section>
  );
}
