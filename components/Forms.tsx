import React, { useState, useCallback } from 'react';
import { FormType, FormData } from '../types';
import { supabase } from '../lib/supabase';

interface FormProps {
  type: FormType;
  onSubmit: (data: FormData) => void;
  initialService?: string;
}

const Forms: React.FC<FormProps> = ({ type, onSubmit, initialService }) => {
  const [formData, setFormData] = useState<FormData>({ 
    name: '', 
    eventType: initialService || '' 
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Format data for the leads table
      const leadData = {
        name: formData.name,
        email: formData.email || null,
        phone: formData.phone || null,
        event_type: type === 'servicos' ? formData.eventType : type,
        message: formData.message || null
      };

      // Determine which table to insert into
      let tableName = 'servicos';
      if (type === 'newsletter') tableName = 'newsletter';
      if (type === 'workshop') tableName = 'workshop_fff';

      const { error: supabaseError } = await supabase
        .from(tableName)
        .insert([leadData]);

      if (supabaseError) {
        throw supabaseError;
      }

      setSubmitted(true);
      onSubmit(formData);
    } catch (err: unknown) {
      console.error('Erro ao enviar formulário:', err);
      setError('Ocorreu um erro ao enviar sua mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, type, onSubmit]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, []);

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

      <div>
        <label className={labelClasses}>Telefone / WhatsApp</label>
        <input required name="phone" type="tel" className={inputClasses} onChange={handleChange} placeholder="(XX) XXXXX-XXXX" />
      </div>

      {type === 'servicos' && (
        <>
          <div>
            <label className={labelClasses}>Serviço de Interesse</label>
            <select name="eventType" className={inputClasses} onChange={handleChange} defaultValue={initialService || ""}>
              <option value="" disabled>Selecione um serviço</option>
              <option value="Palestra / Roda de Conversa">Palestra / Roda de Conversa</option>
              <option value="Oficina / Workshop">Oficina / Workshop</option>
              <option value="Mentoria">Mentoria</option>
              <option value="Assessoria">Assessoria</option>
              <option value="Show">Show</option>
              <option value="Workshow">Workshow</option>
              <option value="Saiba mais sobre Fornologia">Saiba mais sobre Fornologia</option>
            </select>
          </div>
          <div>
            <label className={labelClasses}>Tema / Detalhes</label>
            <textarea name="message" rows={4} className={inputClasses} onChange={handleChange} placeholder="Conte mais sobre o que você precisa..."></textarea>
          </div>
        </>
      )}

      {type === 'workshop' && (
        <>
          <div>
            <label className={labelClasses}>Por que você quer participar?</label>
            <textarea required name="message" rows={4} className={inputClasses} onChange={handleChange} placeholder="Conte um pouco sobre sua expectativa..."></textarea>
          </div>
        </>
      )}

      {error && (
        <div className="mt-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500 text-sm">
          {error}
        </div>
      )}

      <button 
        type="submit" 
        className={`${btnClasses} ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Enviando...' : 'Enviar'}
      </button>
    </form>
  );
};

export default Forms;