import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageSquare, Rocket } from '../components/Icons';
import Forms from '../components/Forms';

const Secret: React.FC = () => {
  const [demoActive, setDemoActive] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'bot', text: string}[]>([
    {role: 'bot', text: 'Olá! Sou Joaquim, o agente virtual d\'O Forno. Como posso ajudar seu negócio hoje?'}
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    setMessages([...messages, {role: 'user', text: inputValue}]);
    setInputValue('');
    
    setTimeout(() => {
      setMessages(prev => [...prev, {role: 'bot', text: 'Esta é uma demonstração. Para um agente real, preencha o formulário abaixo!'}]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-background text-primary flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,_rgba(37,99,235,0.15),rgba(0,0,0,0))]" />

      <div className="w-full max-w-2xl z-10">
        <div className="mb-8 text-center">
          <Link to="/" className="text-muted hover:text-primary text-sm uppercase tracking-widest mb-6 inline-block">← Voltar para O Forno</Link>
          <div className="w-20 h-20 bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-6 ring-1 ring-blue-500/50">
             <Rocket size={32} className="text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Olá, eu sou o Joaquim</h1>
          <p className="text-blue-200/60 text-lg">Agente de Inteligência Artificial para Microempreendedores</p>
        </div>

        {/* Demo Chat Interface */}
        <div className="bg-surface border border-border rounded-2xl overflow-hidden shadow-2xl mb-12">
          <div className="bg-surface3 p-4 border-b border-border flex items-center justify-between">
            <span className="text-sm font-medium flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Joaquim (Online)
            </span>
          </div>
          
          <div className="h-64 overflow-y-auto p-4 space-y-4 bg-black/50">
             {messages.map((msg, idx) => (
               <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                 <div className={`max-w-[80%] p-3 rounded-lg text-sm ${msg.role === 'user' ? 'bg-blue-600 text-primary' : 'bg-border text-neutral-200'}`}>
                   {msg.text}
                 </div>
               </div>
             ))}
          </div>

          <form onSubmit={handleSendMessage} className="p-4 bg-surface3 border-t border-border flex gap-2">
             <input 
               type="text" 
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               placeholder="Digite uma mensagem..."
               className="flex-1 bg-black border border-border-hover rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
             />
             <button type="submit" className="bg-blue-600 p-2 rounded-lg hover:bg-blue-500 transition-colors">
               <ChevronDown className="-rotate-90" />
             </button>
          </form>
        </div>

        {/* Lead Form */}
        <div className="bg-surface border border-border rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6 text-center">Criar meu Agente IA</h3>
          <Forms type="jaaas" onSubmit={(data) => console.log(data)} />
        </div>
        
        <div className="mt-8 text-center">
            <a 
              href="https://wa.me/5532988223023?text=Ol%C3%A1%20Joaquim!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Agente%20IA." 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
            >
              <MessageSquare size={16} /> Falar com Joaquim no WhatsApp
            </a>
        </div>
      </div>
    </div>
  );
};

export default Secret;