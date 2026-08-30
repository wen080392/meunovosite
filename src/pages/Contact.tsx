import { useState } from 'react';
import SEO from '../components/SEO';
import LeadForm from '../components/LeadForm/LeadForm';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(_data: any) {
    setSubmitted(true);
  }

  return (
    <>
      <SEO
        title="Contato"
        description="Entre em contato com a Vibe Tech. Fale conosco sobre seu projeto de sistema web, automação ou inteligência artificial."
      />

      <section className="page-hero" id="contact-hero">
        <div className="container">
          <span className="tag">Contato</span>
          <h1>
            Vamos conversar sobre seu <span className="text-gradient">projeto</span>
          </h1>
          <p className="page-hero__subtitle">
            Conte-nos sobre sua necessidade e nossa equipe entrará em contato rapidamente.
          </p>
        </div>
      </section>

      <section className="section" id="contact-section">
        <div className="container container--narrow">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-wrapper">
              {!submitted ? (
                <>
                  <h2>Envie sua mensagem</h2>
                  <p>Preencha o formulário e retornaremos em até 24 horas.</p>
                  <LeadForm
                    source="contact"
                    onSubmit={handleSubmit}
                    submitLabel="Enviar mensagem"
                  />
                </>
              ) : (
                <div className="contact-success">
                  <span className="contact-success__icon">🎉</span>
                  <h2>Mensagem enviada!</h2>
                  <p>Nossa equipe entrará em contato em breve.</p>
                </div>
              )}
            </div>

            {/* Quick contacts */}
            <div className="contact-info">
              <h3>Ou fale diretamente</h3>

              <a
                href="https://wa.me/5598985170034?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20Vibe%20Tech"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel"
                id="contact-whatsapp"
              >
                <span className="contact-channel__icon">💬</span>
                <div>
                  <span className="contact-channel__label">WhatsApp</span>
                  <span className="contact-channel__value">Resposta rápida</span>
                </div>
              </a>

              <a
                href="mailto:vibetechvibe92@gmail.com"
                className="contact-channel"
                id="contact-email"
              >
                <span className="contact-channel__icon">📧</span>
                <div>
                  <span className="contact-channel__label">E-mail</span>
                  <span className="contact-channel__value">vibetechvibe92@gmail.com</span>
                </div>
              </a>

              <a
                href="https://instagram.com/vibe_tech92"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-channel"
                id="contact-instagram"
              >
                <span className="contact-channel__icon">📷</span>
                <div>
                  <span className="contact-channel__label">Instagram</span>
                  <span className="contact-channel__value">@vibe_tech92</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
