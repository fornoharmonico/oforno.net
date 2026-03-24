import React, { useState } from 'react';
import { FormType, FormData } from '../types';

interface FormProps {
  type: FormType;
  onSubmit: (data: FormData) => void;
}

const Forms: React.FC<FormProps> = ({ type, onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({ name: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setTimeout(() => {
      setSubmitted(true);
      onSubmit(formData);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
          ✓
        </div>
        <h3 className="text-xl font-bold text-primary mb-2">Mensagem enviada!</h3>
        <p className="text-secondary">Entraremos em contato em breve.</p>
      </div>
    );
  }

  const inputClasses = "w-full bg-surface3 border border-border-hover rounded-lg px-4 py-3 text-primary focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all";
  const labelClasses = "block text-xs uppercase tracking-wider text-muted mb-2 mt-4";
  const btnClasses = "w-full mt-8 bg-primary text-background font-bold py-3 rounded-lg hover:opacity-80 transition-colors";

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label className={labelClasses}>Nome Completo</label>
        <input required name="name" type="text" className={inputClasses} onChange={handleChange} placeholder="Seu nome" />
      </div>

      <div>
        <label className={labelClasses}>Email</label>
        <input required name="email" type="email" className={inputClasses} onChange={handleChange} placeholder="seu@email.com" />
      </div>

      {type === 'project' && (
        <>
          <div>
            <label className={labelClasses}>Nome do Projeto</label>
            <input required name="projectDetails" type="text" className={inputClasses} onChange={handleChange} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClasses}>Prazo Estimado</label>
              <input name="date" type="text" className={inputClasses} onChange={handleChange} placeholder="ex: 3 meses" />
            </div>
            <div>
              <label className={labelClasses}>Orçamento Estimado</label>
              <input name="budget" type="text" className={inputClasses} onChange={handleChange} placeholder="R$" />
            </div>
          </div>
          <div>
            <label className={labelClasses}>Detalhes</label>
            <textarea name="message" rows={4} className={inputClasses} onChange={handleChange} placeholder="Conte mais sobre sua ideia..."></textarea>
          </div>
        </>
      )}

      {type === 'talk' && (
        <>
          <div>
            <label className={labelClasses}>Tipo de Evento</label>
            <select name="eventType" className={inputClasses} onChange={handleChange}>
              <option value="palestra">Palestra</option>
              <option value="oficina">Oficina</option>
              <option value="consultoria">Consultoria</option>
            </select>
          </div>
          <div>
            <label className={labelClasses}>Tema de Interesse</label>
            <input name="message" type="text" className={inputClasses} onChange={handleChange} placeholder="ex: Economia Criativa, IA..." />
          </div>
        </>
      )}

      {type === 'jaaas' && (
        <>
          <div>
            <label className={labelClasses}>Seu Negócio</label>
            <input required name="businessType" type="text" className={inputClasses} onChange={handleChange} placeholder="ex: Padaria, Artesanato..." />
          </div>
          <div>
            <label className={labelClasses}>Maior Desafio Atual</label>
            <textarea name="challenge" rows={3} className={inputClasses} onChange={handleChange} placeholder="O que mais te atrapalha hoje?"></textarea>
          </div>
          <div>
            <label className={labelClasses}>WhatsApp</label>
            <input required name="phone" type="tel" className={inputClasses} onChange={handleChange} placeholder="(XX) XXXXX-XXXX" />
          </div>
        </>
      )}

      {type === 'newsletter' && (
        <>
          <div>
            <label className={labelClasses}>Interesse</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2 text-secondary">
                <input type="checkbox" name="interest_book" className="rounded bg-border" /> Livro
              </label>
              <label className="flex items-center gap-2 text-secondary">
                <input type="checkbox" name="interest_news" className="rounded bg-border" /> Newsletter
              </label>
            </div>
          </div>
        </>
      )}

      <button type="submit" className={btnClasses}>
        Enviar
      </button>
    </form>
  );
};

export default Forms;