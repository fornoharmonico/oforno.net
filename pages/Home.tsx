import React, { useState, useCallback } from 'react';
import Header from '../components/Header';
import Modal from '../components/Modal';
import Forms from '../components/Forms';
import EmbedCard from '../components/EmbedCard';
import { TIMELINE_DATA, NAV_ITEMS } from '../constants';
import { FormType } from '../types';
import { Play, BookOpen, ChevronDown, Music, Rocket, Users, Mic, Briefcase, MessageSquare, Video, Calendar, MapPin, X } from '../components/Icons';

const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<FormType>('newsletter');
  const [modalTitle, setModalTitle] = useState('');
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const openModal = useCallback((type: FormType, title: string) => {
    setModalType(type);
    setModalTitle(title);
    setModalOpen(true);
  }, []);

  const handleFooterNavClick = useCallback((e: React.MouseEvent, item: { external?: boolean; action?: boolean; href?: string }) => {
    if (item.external) return;

    e.preventDefault();

    if (item.action) {
      openModal('newsletter', 'Newsletter');
      return;
    }

    if (item.href) {
      const element = document.querySelector(item.href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [openModal]);

  return (
    <div className="min-h-screen bg-background text-primary overflow-x-hidden font-sans selection:bg-primary selection:text-background">
      <Header onNewsletterClick={() => openModal('newsletter', 'Newsletter')} />

      {/* 1. HERO SECTION */}
      <section id="hero" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 flex justify-end pointer-events-none">
          <div className="w-full md:w-3/4 lg:w-[55%] h-full relative">
            {/* Gradient to fade the left edge smoothly into the background */}
            <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-background to-transparent z-10"></div>
            <img 
              src="https://i.postimg.cc/4dCphfs1/PEDRO-LAGO-PERFIL.png" 
              alt="" 
              className="w-full h-full object-cover object-[0%_25%] md:object-[50%_25%] opacity-60 contrast-125 grayscale"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-background/60 to-background z-0 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background z-0 pointer-events-none"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
          <h2 className="text-xs md:text-sm font-sans font-medium tracking-[0.2em] text-muted uppercase animate-fade-in-up">
            O Forno: o jornal da jornada • por Pedro Lago
          </h2>
          
          <div className="space-y-8 flex flex-col items-center">
            <img 
              src="https://i.postimg.cc/RhpFKdKb/LOGO-FORNO-branco-sem-fundo.png" 
              alt="O Forno" 
              className="h-32 md:h-48 lg:h-64 w-auto object-contain opacity-90 block [.light_&]:hidden"
            />
            <img 
              src="https://i.postimg.cc/Dzh21XJr/logo-forno-sem-fundo.png" 
              alt="O Forno" 
              className="h-32 md:h-48 lg:h-64 w-auto object-contain opacity-90 hidden [.light_&]:block"
            />
            <p className="text-xs md:text-sm font-sans font-medium tracking-widest text-muted uppercase -mt-4">
              Desincubadora de Projetos & Escola de Planejamento e Gestão
            </p>
            <p className="text-xl md:text-2xl font-sans font-light text-secondary tracking-wide">
              Desde 1988, construindo futuros <br/>
              desejáveis, possíveis e viáveis, <br/>
              ainda que improváveis.
            </p>
          </div>
          
          <div className="pt-8">
            <button 
              onClick={() => {
                const element = document.getElementById('quem-somos');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-sans text-sm font-bold uppercase tracking-widest text-background transition-all duration-300 hover:opacity-80 hover:scale-105"
            >
              <span className="mr-2">Confira o que tem n'O Forno</span>
              <Rocket size={16} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        
        <a href="#quem-somos" onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById('quem-somos');
          if (element) element.scrollIntoView({ behavior: 'smooth' });
        }} className="absolute bottom-12 animate-bounce text-muted hover:text-primary transition-colors">
          <ChevronDown size={24} strokeWidth={1} />
        </a>
      </section>

      {/* QUEM SOU EU & O QUE É O FORNO */}
      <section id="quem-somos" className="py-24 border-t border-border-dark/50 bg-surface2">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl mx-auto text-center mb-20">
             <p className="text-2xl md:text-3xl text-primary font-serif italic leading-relaxed">
              "E não sabendo que era impossível, fui lá e fiz!"
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Quem Sou Eu */}
            <div>
              <h2 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-muted mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-border"></span>
                Quem Sou Eu
              </h2>
              <div className="flex items-center gap-6 mb-6">
                <img 
                  src="https://i.postimg.cc/4dCphfs1/PEDRO-LAGO-PERFIL.png" 
                  alt="Pedro Lago" 
                  loading="lazy"
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-2 border-border"
                  referrerPolicy="no-referrer"
                />
                <h3 className="text-3xl md:text-4xl font-serif italic text-primary">Pedro Lago</h3>
              </div>
              <div className="space-y-4 text-secondary font-light leading-relaxed">
                <p>
                  Sou o Pedro, filho de Lis Beth e Leon Lago, companheiro da Géssica e pai da Bárbara. Poeta, músico, compositor e gestor cultural, há mais de uma década venho idealizando, viabilizando e realizando dezenas de projetos sociocriativos, artísticos e culturais com a ajuda da Fornologia: a metodologia de planejamento e gestão de projetos que criamos para ajudar pessoas, empresas e organizações a "tirar seus projetos d'O Forno".
                </p>
              </div>
            </div>

            {/* O que é O Forno */}
            <div>
              <h2 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-muted mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-border"></span>
                O que é O Forno
              </h2>
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 shrink-0">
                  <img 
                    src="https://i.postimg.cc/RhpFKdKb/LOGO-FORNO-branco-sem-fundo.png" 
                    alt="O Forno" 
                    loading="lazy"
                    className="w-full h-full object-contain block [.light_&]:hidden"
                    referrerPolicy="no-referrer"
                  />
                  <img 
                    src="https://i.postimg.cc/Dzh21XJr/logo-forno-sem-fundo.png" 
                    alt="O Forno" 
                    loading="lazy"
                    className="w-full h-full object-contain hidden [.light_&]:block"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h3 className="text-3xl md:text-4xl font-serif italic text-primary">Formidável Fábrica de Futuros</h3>
              </div>
              <div className="space-y-4 text-secondary font-light leading-relaxed">
                <p>
                  O Forno é mais do que uma produtora; é uma desincubadora de projetos e uma escola de planejamento e gestão cultural. Nosso propósito é descomplicar o planejamento e a gestão de projetos, oferecendo metodologia, tecnologia e suporte desde a concepção da ideia até a sua execução. Auxiliamos pessoas, empresas e organizações a realizar seus sonhos e projetos gerando resultados e impactos mensuráveis.
                </p>
              </div>
            </div>

          </div>

          <div className="mt-32 mb-12 relative">
            <span className="font-sans text-xs font-semibold text-muted tracking-[0.2em] uppercase absolute -top-8 left-0">O SONHO</span>
            <h2 className="text-[120px] md:text-[200px] font-sans font-bold text-primary opacity-[0.03] absolute -left-4 -top-20 md:-top-32 select-none pointer-events-none leading-none">2026</h2>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-12 relative z-10 text-primary">Feliz Plano Novo</h2>
            
            {/* Vision / Mission / Dream Grid */}
            <div className="grid md:grid-cols-3 gap-8 mb-16 relative z-10">
              <div className="bg-surface border border-border p-8 rounded-xl hover:border-border-hover transition-colors duration-300">
                <h3 className="text-xl font-serif italic text-primary mb-4">Sonho</h3>
                <p className="text-secondary font-light text-sm leading-relaxed">
                  O sonho é antigo: transformar cultura em desenvolvimento ajudando pessoas, empresas e organizações a tirar seus projetos do Forno.
                </p>
              </div>
              
              <div className="bg-surface border border-border p-8 rounded-xl hover:border-border-hover transition-colors duration-300">
                <h3 className="text-xl font-serif italic text-primary mb-4">Missão</h3>
                <p className="text-secondary font-light text-sm leading-relaxed">
                  Nossa missão é descomplicar o planejamento estratégico e a gestão de projetos.
                </p>
              </div>

              <div className="bg-surface border border-border p-8 rounded-xl hover:border-border-hover transition-colors duration-300">
                <h3 className="text-xl font-serif italic text-primary mb-4">Visão</h3>
                <p className="text-secondary font-light text-sm leading-relaxed">
                  Nossa visão de futuro é consolidar O Forno como referência regional em inovação e produção cultural no Campo das Vertentes.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* WORKSHOP FFF CTA */}
      <section className="py-24 border-t border-border-dark/50 bg-gradient-to-b from-surface2 to-surface2">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-surface border border-border rounded-2xl p-8 md:p-16 relative overflow-hidden group">
            {/* Background accent */}
            <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
              <Rocket size={200} strokeWidth={0.5} />
            </div>
            
            <div className="relative z-10 max-w-3xl mx-auto text-center mb-16">
              <div className="inline-block px-3 py-1 border border-primary border-opacity-20 text-primary font-sans font-bold text-[10px] uppercase tracking-widest mb-6 rounded-full">
                Workshop Ao Vivo • Abril/2026
              </div>
              <h2 className="text-4xl md:text-5xl font-serif italic text-primary mb-6">
                FFF - Formidável Fábrica de Futuros
              </h2>
              <p className="text-secondary text-lg leading-relaxed font-light mb-8">
                Como transformar um sonho ou uma ideia em um plano bem estruturado? Como viabilizar este plano, transformando intenção em ação? Conheça a Fornologia - a arte e ciência de tirar projetos do Forno! Vamos descomplicar o planejamento e gestão de seus projetos. Faça sua inscrição para fazer parte da próxima turma do workshop "Formidável Fábrica de Futuros"
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-10">
                <div className="flex items-center gap-3 text-secondary bg-background border border-border px-6 py-3 rounded-xl">
                  <Calendar size={18} className="text-primary" />
                  <span className="font-sans text-sm tracking-wide">7 a 9 de abril, das 19 as 22 horas.</span>
                </div>
                <div className="flex items-center gap-3 text-secondary bg-background border border-border px-6 py-3 rounded-xl">
                  <MapPin size={18} className="text-primary" />
                  <span className="font-sans text-sm tracking-wide">Ao vivo e online por video-conferência.</span>
                </div>
              </div>

              <button 
                onClick={() => openModal('workshop', 'Inscrição: Workshop FFF')}
                className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-primary text-background font-sans text-sm font-bold uppercase tracking-widest hover:opacity-80 hover:scale-105 transition-all duration-300"
              >
                Inscrever-me
              </button>
            </div>

            {/* Ementa do Curso */}
            <div className="relative z-10">
              <h3 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-muted mb-8 text-center">
                Ementa do Curso
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {/* Módulo 1 */}
                <div className="bg-background border border-border p-6 rounded-xl hover:border-border-hover transition-colors">
                  <h4 className="text-primary font-serif italic text-xl mb-3">Módulo 1: Sonhar</h4>
                  <p className="text-muted font-light text-sm leading-relaxed">
                    Neste módulo, inspirados pelo Dragon Dreaming, vamos aprender a transformar um sonho individual em um projeto que resolve uma dor/realiza um sonho coletivo.
                  </p>
                </div>
                {/* Módulo 2 */}
                <div className="bg-background border border-border p-6 rounded-xl hover:border-border-hover transition-colors">
                  <h4 className="text-primary font-serif italic text-xl mb-3">Módulo 2: Diagnosticar</h4>
                  <p className="text-muted font-light text-sm leading-relaxed">
                    Neste módulo, inspirados pela Fluxonomia 4D, vamos aprender a fazer um diagnóstico do nosso projeto nas 4 dimensões (cultural, social, ambiental e financeira).
                  </p>
                </div>
                {/* Módulo 3 */}
                <div className="bg-background border border-border p-6 rounded-xl hover:border-border-hover transition-colors">
                  <h4 className="text-primary font-serif italic text-xl mb-3">Módulo 3: Planejar</h4>
                  <p className="text-muted font-light text-sm leading-relaxed">
                    Neste módulo, inspirados pelo TEvEP, vamos aprender a elaborar o escopo, o cronograma e o orçamento do projeto.
                  </p>
                </div>
                {/* Módulo 4 */}
                <div className="bg-background border border-border p-6 rounded-xl hover:border-border-hover transition-colors">
                  <h4 className="text-primary font-serif italic text-xl mb-3">Módulo 4: Captar</h4>
                  <p className="text-muted font-light text-sm leading-relaxed">
                    Neste módulo, vamos aprender a criar um plano de cotas e mergulhar nas estratégias de captação de recursos existentes que podem nos ajudar a viabilizar o projeto.
                  </p>
                </div>
                {/* Módulo 5 */}
                <div className="bg-background border border-border p-6 rounded-xl hover:border-border-hover transition-colors">
                  <h4 className="text-primary font-serif italic text-xl mb-3">Módulo 5: Gerir</h4>
                  <p className="text-muted font-light text-sm leading-relaxed">
                    Mãos na massa! É hora de aprendermos algumas estratégias e melhores práticas na gestão dos recursos e das pessoas.
                  </p>
                </div>
                {/* Módulo 6 */}
                <div className="bg-background border border-border p-6 rounded-xl hover:border-border-hover transition-colors">
                  <h4 className="text-primary font-serif italic text-xl mb-3">Módulo 6: Liderar</h4>
                  <p className="text-muted font-light text-sm leading-relaxed">
                    Neste módulo, vamos aprender a ensinar. Como podemos compartilhar esse conhecimento e transformar nosso time em um time de especialistas em planejamento e gestão de projetos?
                  </p>
                </div>
                {/* Módulo 7 */}
                <div className="bg-background border border-border p-6 rounded-xl hover:border-border-hover transition-colors md:col-span-2 lg:col-span-3 lg:max-w-md lg:mx-auto w-full">
                  <h4 className="text-primary font-serif italic text-xl mb-3">Módulo 7: Celebrar</h4>
                  <p className="text-muted font-light text-sm leading-relaxed">
                    Vamos conhecer um pouco melhor os projetos elaborados pelos participantes durante o workshop.
                  </p>
                </div>
              </div>

              {/* Bônus */}
              <div className="mt-20 mb-16 max-w-4xl mx-auto">
                <h3 className="text-sm font-sans font-bold uppercase tracking-[0.2em] text-muted mb-8 text-center">
                  Bônus Exclusivos
                </h3>
                <p className="text-primary font-serif italic text-xl mb-8 text-center">
                  Ao se inscrever, você recebe:
                </p>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-background border border-border p-6 rounded-xl hover:border-border-hover transition-colors">
                    <h4 className="text-primary font-serif italic text-lg mb-3">Material Didático</h4>
                    <p className="text-muted font-light text-sm leading-relaxed">
                      E-book que explica a metodologia detalhadamente para você revisar quando quiser.
                    </p>
                  </div>
                  <div className="bg-background border border-border p-6 rounded-xl hover:border-border-hover transition-colors">
                    <h4 className="text-primary font-serif italic text-lg mb-3">Caixa de Ferramentas</h4>
                    <p className="text-muted font-light text-sm leading-relaxed">
                      Acesso a uma lista de apps e ferramentas com Inteligência Artificial que podem ser úteis no seu dia-a-dia e facilitar tanto sua vida pessoal quanto profissional.
                    </p>
                  </div>
                  <div className="bg-background border border-border p-6 rounded-xl hover:border-border-hover transition-colors">
                    <h4 className="text-primary font-serif italic text-lg mb-3">Assistente Pessoal (IA)</h4>
                    <p className="text-muted font-light text-sm leading-relaxed">
                      Um meta-prompt para você personalizar e criar o seu assistente pessoal pra utilizar na sua ferramenta de IA preferida (GPT, Claude, Gemini, Grok, entre outras).
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <button 
                  onClick={() => openModal('workshop', 'Inscrição: Workshop FFF')}
                  className="inline-flex items-center justify-center h-14 px-10 rounded-full bg-transparent border border-primary text-primary font-sans text-sm font-bold uppercase tracking-widest hover:bg-primary hover:text-background hover:scale-105 transition-all duration-300"
                >
                  Garantir Minha Vaga
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. 2026: FELIZ PLANO NOVO */}
      <section id="plan2026" className="py-32 border-t border-border-dark/50 bg-surface2">
        <div className="container mx-auto px-6 max-w-6xl">
          {/* Fornologia Block */}
          <div className="border-y border-border py-12 md:py-20 mb-24">
            <div className="text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12 mb-12">
              <div className="max-w-2xl">
                <h3 className="text-4xl font-serif italic mb-6">Fornologia: O Método</h3>
                <p className="text-secondary text-lg leading-relaxed font-light">
                  A arte e a ciência da Fornologia, a teoria e a prática de tirar projetos do Forno, transformando sonhos em projetos, intenções em ações. Inspirada no DragonDreaming, no TEvEP e na Fluxonomia 4D, mixados, masterizados e calibrados em mais de 12 anos de pesquisa, ação e experimentação!
                </p>
              </div>
              <button 
                onClick={() => openModal('servicos', 'Saiba mais sobre Fornologia')}
                className="px-8 py-4 border border-primary text-primary font-sans font-bold text-xs uppercase tracking-widest hover:bg-primary hover:text-background transition-all whitespace-nowrap"
              >
                Conheça o Método
              </button>
            </div>
            
            <div className="w-full">
              <EmbedCard 
                type="youtube" 
                directLink="https://www.youtube.com/watch?v=Vr9LC2iR20g"
                title="Fornologia: O Método"
              />
            </div>
          </div>

          {/* NOSSOS SERVIÇOS (Moved here) */}
          <div id="contact" className="mb-32 pt-12 border-t border-border">
            <div className="mb-16 text-center">
               <h2 className="text-5xl md:text-6xl font-serif font-medium text-primary">Nossos serviços:</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-px bg-border border border-border overflow-hidden">
              
              {/* 1. Palestra / Roda de Conversa */}
              <button 
                onClick={() => openModal('servicos', 'Palestra / Roda de Conversa')}
                className="group bg-background hover:bg-surface p-12 text-left transition-colors duration-300 flex flex-col justify-between h-80"
              >
                <Mic size={32} strokeWidth={1} className="text-muted group-hover:text-yellow-500 transition-colors" />
                <div>
                  <h3 className="text-3xl font-serif italic mb-4 text-primary">Palestra / Roda de Conversa</h3>
                  <p className="text-muted font-light group-hover:text-secondary">Convide Pedro para uma roda de conversa ou palestra sobre gestão de projetos: "Descomplicando o planejamento com a Fornologia: a arte e a ciência de tirar projetos do Forno."</p>
                </div>
              </button>

              {/* 2. Oficina / Workshop */}
              <button 
                onClick={() => openModal('servicos', 'Oficina / Workshop')}
                className="group bg-background hover:bg-surface p-12 text-left transition-colors duration-300 flex flex-col justify-between h-80"
              >
                <BookOpen size={32} strokeWidth={1} className="text-muted group-hover:text-pink-500 transition-colors" />
                <div>
                  <h3 className="text-3xl font-serif italic mb-4 text-primary">Oficina / Workshop</h3>
                  <p className="text-muted font-light group-hover:text-secondary">Participe da próxima edição da Formidável Fábrica de Futuros. Um minicurso intensivo de planejamento estratégico que une arte e ciência; teoria e prática; sonho e projeto, intenção e ação.</p>
                </div>
              </button>

              {/* 3. Mentoria */}
              <button 
                onClick={() => openModal('servicos', 'Mentoria')}
                className="group bg-background hover:bg-surface p-12 text-left transition-colors duration-300 flex flex-col justify-between h-80"
              >
                <Users size={32} strokeWidth={1} className="text-muted group-hover:text-blue-500 transition-colors" />
                <div>
                  <h3 className="text-3xl font-serif italic mb-4 text-primary">Mentoria</h3>
                  <p className="text-muted font-light group-hover:text-secondary">Contrate nosso acompanhamento personalizado e conte com o apoio da nossa metodologia e tecnologia de planejamento e gestão da vida pessoal e profissional. Seja para gerir a vida pessoal, a carreira ou um projeto específico, a Fornologia pode te ajudar.</p>
                </div>
              </button>

              {/* 4. Assessoria */}
              <button 
                onClick={() => openModal('servicos', 'Assessoria')}
                className="group bg-background hover:bg-surface p-12 text-left transition-colors duration-300 flex flex-col justify-between h-80"
              >
                <Briefcase size={32} strokeWidth={1} className="text-muted group-hover:text-purple-500 transition-colors" />
                <div>
                  <h3 className="text-3xl font-serif italic mb-4 text-primary">Assessoria</h3>
                  <p className="text-muted font-light group-hover:text-secondary">Contrate nossos serviços de planejamento estratégico, elaboração de projetos, captação de recursos ou assessoria de comunicação integrada. Conte com mais de uma década de experiências idealizando, viabilizando e realizando projetos sociocriativos.</p>
                </div>
              </button>

              {/* 5. Show */}
              <button 
                onClick={() => openModal('servicos', 'Show')}
                className="group bg-background hover:bg-surface p-12 text-left transition-colors duration-300 flex flex-col justify-between h-80"
              >
                <Music size={32} strokeWidth={1} className="text-muted group-hover:text-green-500 transition-colors" />
                <div>
                  <h3 className="text-3xl font-serif italic mb-4 text-primary">Show</h3>
                  <p className="text-muted font-light group-hover:text-secondary">Uma apresentação intimista que mistura voz, violão, poesia e canção, Pedro apresenta as composições do álbum Ode à Felicidade, mescladas com Uaikais (haikais mineiros) e clássicos da MPB. No repertório, canções de mestres que o influenciam como Gilberto Gil, Djavan, Marcelo Camelo e Luis Tatit.</p>
                </div>
              </button>

              {/* 6. Workshow */}
              <button 
                onClick={() => openModal('servicos', 'Workshow')}
                className="group bg-background hover:bg-surface p-12 text-left transition-colors duration-300 flex flex-col justify-between h-80"
              >
                <Play size={32} strokeWidth={1} className="text-muted group-hover:text-red-500 transition-colors" />
                <div>
                  <h3 className="text-3xl font-serif italic mb-4 text-primary">Workshow</h3>
                  <p className="text-muted font-light group-hover:text-secondary">O workshow é um combo. Oferece em uma mesma experiência a palestra, o workshop e o show. Inspirado no conceito de Ócio Criativo (De Masi), a intenção é que os participantes não saibam se estão aprendendo, trabalhando ou se divertindo.</p>
                </div>
              </button>
            </div>

            <div className="mt-20 text-center">
               <a 
                href="https://wa.me/5532998344329"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex h-16 items-center justify-center overflow-hidden rounded-full bg-primary px-10 font-sans font-bold text-base text-background transition-all duration-300 hover:opacity-80 hover:scale-105"
              >
                <span className="mr-3">Fale Conosco</span>
                <Rocket size={20} className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="mb-24 relative">
            <div className="text-lg text-secondary font-light max-w-4xl ml-1 leading-relaxed border-l-2 border-border pl-6 py-2">
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-2">
                Prospectiva 2026 & Retrospectiva 2025-1988:
              </h3>
              <p className="text-muted font-sans text-sm uppercase tracking-widest font-medium">
                O que faremos, o que estamos fazendo e o que fizemos até aqui?
              </p>
              
              <h3 className="mt-12 font-sans text-sm font-bold tracking-[0.2em] text-muted uppercase">
                Lançamentos
              </h3>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24 mb-24">
            {/* Music & Videos Column */}
            <div className="space-y-8">
              {/* Header: Música */}
              <h3 className="text-sm font-sans font-semibold uppercase tracking-widest flex items-center gap-3 text-secondary border-b border-border pb-4">
                <Music size={18} /> Música
              </h3>
              
              {/* Highlight Album Block */}
              <div className="bg-surface border border-border p-8 rounded-xl relative group overflow-hidden hover:border-border-hover transition-all duration-500">
                <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
                    <Music size={80} strokeWidth={0.5} />
                </div>
                <div className="relative z-10">
                    <span className="inline-block mb-3 px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold uppercase tracking-widest border border-green-500/20 rounded-md">Álbum Disponível</span>
                    <h4 className="text-3xl font-serif italic text-primary mb-2">Ode à Felicidade</h4>
                    <p className="text-secondary font-light mb-6 text-sm leading-relaxed max-w-sm">
                      Gravado em 2023 na Alemanha com a "Pedra, Barro e Madeira Tribo" (@pbmtribus), o álbum é fruto do encontro e amizade entre Pedro Lago e Felix Rieder, com participações especiais de Tom Rieder nos sopros, Alex Zotz no baixo e Noah Allmann no piano.
                    </p>
                    <a 
                        href="https://oforno.bandcamp.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary border-b border-primary border-opacity-30 hover:border-primary pb-1 transition-all text-xs font-bold uppercase tracking-widest group-hover:pl-2"
                    >
                        <Play size={12} fill="currentColor" /> Ouça no Bandcamp
                    </a>
                </div>
              </div>

              {/* Sub-header: Videoclipes */}
              <h3 className="text-sm font-sans font-semibold uppercase tracking-widest flex items-center gap-3 text-secondary border-b border-border pb-4 mt-8">
                <Video size={18} /> Videoclipes
              </h3>

              <div className="space-y-10">
                 <div className="group">
                    <EmbedCard 
                      type="youtube" 
                      directLink="https://www.youtube.com/watch?v=oyMXcx1rM9o"
                      title="Ode à Matematica"
                    />
                    <div className="mt-4 border-l border-border pl-4 transition-all group-hover:border-primary">
                      <div className="flex items-baseline justify-between mb-2">
                        <h4 className="font-serif text-2xl italic">Ode à Matemática</h4>
                      </div>
                      <p className="text-sm text-secondary font-light">
                        Essa canção é dedicada a todos que têm um amor não correspondido... com a Matemática!
                      </p>
                    </div>
                 </div>
                 
                 <div className="group">
                    <EmbedCard 
                      type="youtube" 
                      directLink="https://www.youtube.com/watch?v=OgNK8z7EGN4"
                      title="Ciclos da Vida"
                    />
                    <div className="mt-4 border-l border-border pl-4 transition-all group-hover:border-primary">
                      <h4 className="font-serif text-2xl italic mb-2">Ciclos da Vida</h4>
                      <p className="text-sm text-secondary font-light">
                        Essa canção é uma viagem pelos ciclos da vida de trás para frente.
                      </p>
                    </div>
                 </div>
              </div>
            </div>

            {/* Book Release */}
            <div className="bg-surface border border-border p-10 flex flex-col justify-between hover:border-border-hover transition-colors duration-500">
              <div>
                <div className="flex items-start justify-between mb-8">
                  <BookOpen size={32} strokeWidth={1} className="text-primary" />
                  <span className="font-sans text-[10px] font-bold border border-primary border-opacity-20 px-2 py-1 rounded-full text-secondary tracking-widest">LIVRO</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif mb-4">Haikai, Uai!</h3>
                <p className="text-muted mb-8 font-sans text-sm font-medium uppercase tracking-wide">Um trem que liga Minas ao Japão</p>
                
                {/* Book Cover Mockup */}
                <div className="aspect-[3/4] relative group perspective-1000 mb-8">
                  <div className="w-full h-full bg-[#f0f0eb] relative shadow-2xl overflow-hidden flex flex-col items-center justify-between p-6 transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-1 cursor-pointer">
                    
                    {/* Spine Shadow */}
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-black/10 to-transparent z-10"></div>
                    {/* Texture overlay */}
                    <div className="absolute inset-0 bg-black/10 opacity-20 mix-blend-multiply pointer-events-none"></div>

                    {/* Top: Author */}
                    <div className="w-full text-center pt-4 z-10">
                      <p className="font-sans text-[10px] tracking-[0.25em] uppercase text-muted font-semibold">Pedro Lago</p>
                    </div>

                    {/* Middle: Title & Graphic */}
                    <div className="flex flex-col items-center justify-center z-10 w-full">
                       {/* Japan Sun / Minas Triangle Reference */}
                       <div className="relative w-16 h-16 mb-4">
                          <div className="absolute inset-0 bg-red-700 rounded-full mix-blend-multiply opacity-90"></div>
                          {/* Abstract Triangle cutout */}
                          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[20px] border-b-[#f0f0eb]"></div>
                       </div>
                       
                       <h2 className="font-serif text-5xl text-background leading-[0.85] text-center tracking-tight mb-2">
                         Haikai,<br/>
                         <span className="italic font-light text-muted">Uai!</span>
                       </h2>
                    </div>

                    {/* Bottom: Subtitle */}
                    <div className="w-full text-center pb-4 z-10">
                      <div className="w-8 h-[1px] bg-red-700 mx-auto mb-3"></div>
                      <p className="font-sans text-[9px] font-bold tracking-widest uppercase text-muted leading-relaxed">
                        Um trem que liga<br/>Minas ao Japão
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-secondary mb-8 leading-relaxed font-light">
                  "Um encontro da forma fixa e da arte poética japonesa com o jeitinho mineiro de ser e ver a vida. O projeto para a impressão e publicação está em fase de captação de recursos. Você pode registrar seu interesse, receber uma degustação (alerta de spoiler) e ser um dos primeiros a saber quando o livro for oficialmente publicado."
                </p>
              </div>
              <button 
                onClick={() => openModal('newsletter', 'Pré-Registro: Haikai, Uai!')}
                className="w-full bg-primary text-background hover:opacity-80 font-sans font-bold text-xs uppercase tracking-widest py-4 transition-colors"
              >
                Registrar interesse
              </button>
            </div>
          </div>

          {/* InovaSons Video Block */}
          <div className="mb-24">
             <div className="group">
                <EmbedCard 
                  type="youtube" 
                  directLink="https://www.youtube.com/watch?v=HjWeQGqm_Xg"
                  title="Show: Pedra, Barro e Madeira Trio"
                />
                <div className="mt-6 border-l border-border pl-4 transition-all group-hover:border-primary">
                  <h4 className="font-serif text-2xl italic mb-2 text-primary">Show: Pedra, Barro e Madeira Trio</h4>
                  <p className="text-secondary font-light leading-relaxed">
                    Em 15 de agosto de 2025, o InovaSons das Gerais reuniu compositores locais para uma mostra das composições autorais que brotam das Vertentes. O evento foi produzido pel'O Forno em parceria com o El Nino Estudio Lab! Criativo, com o apoio da Secretaria de Cultura e Turismo de São João del Rei, no Teatro Municipal da cidade, graças aos recursos da Lei Aldir Blanc 2!
                  </p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. 2025: RETROSPECTIVA + LISTA DE PROJETOS */}
      <section id="retro2025" className="py-32">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="mb-24 relative">
             <span className="font-sans text-xs font-semibold text-muted tracking-[0.2em] uppercase absolute -top-8 left-0">OS PROJETOS</span>
            <h2 className="text-[120px] md:text-[200px] font-sans font-bold text-primary opacity-[0.03] absolute -left-4 -top-20 md:-top-32 select-none pointer-events-none leading-none">2026</h2>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-4 relative z-10 text-primary">Prospectiva 2026</h2>
            <p className="text-lg text-secondary font-light ml-1">Nossos sonhos, planos e projetos pra 2026</p>
          </div>

          <div className="grid gap-16">
            
            {/* NEW PROJECTS LIST */}
            <div className="border-l-2 border-border pl-8 md:pl-12 py-4">
              <h3 className="text-2xl font-serif text-primary mb-6">O que vem por aí...</h3>
              <ul className="space-y-4 text-secondary font-light text-lg md:text-xl">
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-muted rounded-full mt-2.5 shrink-0"></span> <span>Formidável Fábrica de Futuros nas escolas (workshop)</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-muted rounded-full mt-2.5 shrink-0"></span> <span>Haikai, Uai! Um trem que liga Minas ao Japão (literatura)</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-muted rounded-full mt-2.5 shrink-0"></span> <span>InovaSons das Gerais - 2ª edição (evento musical)</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-muted rounded-full mt-2.5 shrink-0"></span> <span>FEMAVE: Festival de Música Autoral das Vertentes - 3ª edição</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-muted rounded-full mt-2.5 shrink-0"></span> <span>MUSIK-Expedition 2026 - 9ª edição: Festival e programa de Intercâmbio Brasil-Alemanha</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-muted rounded-full mt-2.5 shrink-0"></span> <span>FACES Vertentes: Forum de Arte Cultura e Economia Solidária - 3ª edição</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-muted rounded-full mt-2.5 shrink-0"></span> <span>Cine no Muro - 16ª edição | Cinema mudo com trilha sonora ao vivo</span></li>
                <li className="flex items-start gap-3"><span className="w-1.5 h-1.5 bg-muted rounded-full mt-2.5 shrink-0"></span> <span>OLLMM: Oscar Large Language Model Medeiros (pesquisa em IA aplicada a literatura) e Prêmio Oscar Medeiros Jr. de Literatura</span></li>
              </ul>
              <button 
                onClick={() => openModal('newsletter', 'Newsletter')}
                className="mt-8 text-sm font-sans font-bold text-primary border-b border-primary pb-1 hover:opacity-70 transition-opacity uppercase tracking-widest"
              >
                Fique por dentro das novidades (Newsletter)
              </button>
            </div>

            {/* JAAAS IA Card */}
            <div className="bg-surface border border-border overflow-hidden hover:border-gold/50 transition-all duration-700 group relative">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Rocket size={120} strokeWidth={0.5} />
              </div>
              
              <div className="p-10 md:p-16 grid md:grid-cols-2 gap-16 items-center relative z-10">
                <div className="order-2 md:order-1">
                  <div className="inline-block px-3 py-1 border border-gold/30 text-gold font-sans font-bold text-[10px] uppercase tracking-widest mb-8">
                    Inovação & IA (2025)
                  </div>
                  <h3 className="text-5xl md:text-6xl font-serif mb-6 group-hover:text-gold transition-colors">JAAAS IA</h3>
                  <p className="text-secondary text-lg mb-10 leading-relaxed font-light">
                    Em 2025, desenvolvi um novo ofício (gerente da Pousada Refúgio Tiradentes) e com isso desbloqueei uma nova habilidade (engenheiro de prompts e designer de soluções com IA). Criei o Joaquim, meu assistente pessoal, e a start-up JAAAS, Joaquim Agents As A Service, cuja missão é democratizar o acesso à IA para o micro e pequeno empreendedor. A eficiência da I.A. com a inteligência mineira!
                  </p>
                  <div className="flex flex-wrap gap-6">
                    <a 
                      href="https://coruscating-crepe-c0f8ff.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gold hover:bg-gold/80 text-primary px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest transition-colors inline-block"
                    >
                      Explore a plataforma
                    </a>
                    <a 
                      href="https://wa.me/5532988223023?text=Ol%C3%A1%20Joaquim!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-8 py-4 border border-border-hover hover:border-primary transition-colors text-secondary hover:text-primary font-sans font-bold text-xs uppercase tracking-widest"
                    >
                      <MessageSquare size={14} /> Fale com Joaquim (WhatsApp)
                    </a>
                  </div>
                </div>
                <div className="order-1 md:order-2 flex justify-center">
                  <img 
                    src="https://i.postimg.cc/4dz4c3yk/jaas-sa-(1).png" 
                    alt="JAAAS IA" 
                    loading="lazy"
                    className="w-64 h-64 object-contain cursor-pointer hover:scale-110 transition-transform duration-500"
                    onClick={() => setSelectedImage("https://i.postimg.cc/4dz4c3yk/jaas-sa-(1).png")}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TIMELINE 1988-2024 */}
      <section id="timeline" className="py-32 border-t border-border-dark bg-surface2">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-24">
             <span className="font-sans text-xs font-semibold text-muted tracking-[0.2em] uppercase block mb-4">AS AÇÕES</span>
             <h2 className="text-5xl md:text-6xl font-serif font-medium text-primary mb-6">12 Trabalhos de Pedro</h2>
             <p className="text-secondary font-light">Da chegada de Bárbara e criação do Joaquim (2025) ao nascimento de Pedro (1988) - 38 anos de jornada</p>
          </div>
          
          <div className="relative border-l border-border ml-4 md:ml-24 space-y-24">
            {TIMELINE_DATA.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-16 group">
                {/* Dot */}
                <div className={`absolute -left-[5px] top-3 w-2.5 h-2.5 rounded-full ring-4 ring-surface2 transition-colors duration-500 ${
                    item.type === 'personal' ? 'bg-pink-500' : 
                    item.type === 'education' || item.type === 'career' ? 'bg-gold' : 'bg-accent group-hover:bg-primary'
                }`}></div>
                
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                    <span className="text-4xl md:text-5xl font-sans font-light text-muted group-hover:text-muted transition-colors">{item.year}</span>
                    <h3 className="text-3xl md:text-4xl font-serif italic text-primary opacity-90">{item.title}</h3>
                  </div>
                  
                  <p className="text-lg text-secondary max-w-2xl leading-relaxed font-light border-l border-border pl-6 py-2 whitespace-pre-wrap">
                    {item.description}
                  </p>
                  
                  {(item.embedType || (item.link && item.link !== '#')) && (
                    <div className="max-w-2xl mt-8 opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                        <EmbedCard 
                        type={item.embedType}
                        url={item.embedUrl}
                        directLink={item.link}
                        title={item.title}
                        customThumbnail={item.customThumbnail}
                        customLinkLabel={item.customLinkLabel}
                        customEmbedTitle={item.customEmbedTitle}
                        onImageClick={setSelectedImage}
                        />
                    </div>
                  )}
                </div>
              </div>
            ))}

             {/* MINIBIO */}
             <div className="relative pl-12 md:pl-16 pt-20">
                <div className="absolute -left-[5px] top-24 w-2.5 h-2.5 bg-primary rounded-full ring-4 ring-surface2"></div>
                <h3 className="text-sm font-sans font-bold uppercase tracking-widest text-muted mb-6">Minibio</h3>
                <div className="bg-surface border border-border p-8 md:p-10 rounded-xl relative overflow-hidden group hover:border-border-hover transition-colors duration-500">
                    <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                        <Users size={100} strokeWidth={0.5} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-start">
                      <img 
                        src="https://i.postimg.cc/4dCphfs1/PEDRO-LAGO-PERFIL.png" 
                        alt="Pedro Lago" 
                        loading="lazy"
                        className="w-32 h-32 md:w-48 md:h-48 rounded-2xl object-cover border border-border shadow-xl shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div>
                        <h4 className="text-3xl font-serif italic mb-4 text-primary">Pedro Lago</h4>
                        <p className="text-secondary leading-relaxed font-light text-lg mb-6">
                          Pedro Lago é produtor cultural, compositor, violonista e poeta graduado em Comunicação Social com ênfase em Jornalismo Cultural pela UFSJ em 2022. Especialista em planejamento e gestão de projetos, fundador d'O Forno (des-incubadora de projetos) e criador da Fornologia, metodologia que descomplica o planejamento e a gestão de projetos sociocriativos.
                        </p>
                        <p className="text-secondary leading-relaxed font-light text-lg mb-6">
                          Em 12 anos de atividade, O Forno Harmônico já idealizou, realizou e apoiou dezenas de eventos artísticos, culturais e formativos. A missão d'O Forno é ajudar pessoas e empresas a tirar ideias do papel, sonhos da cabeça e projetos do Forno.
                        </p>
                      </div>
                    </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* IMPRENSA */}
      <section id="imprensa" className="py-32 bg-surface2">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="mb-24 relative">
            <span className="font-sans text-xs font-semibold text-muted tracking-[0.2em] uppercase absolute -top-8 left-0">CONTATO OFICIAL</span>
            <h2 className="text-[120px] md:text-[200px] font-sans font-bold text-primary opacity-[0.03] absolute -left-4 -top-20 md:-top-32 select-none pointer-events-none leading-none">MÍDIA</h2>
            <h2 className="text-5xl md:text-7xl font-serif italic mb-4 relative z-10 text-primary">Imprensa</h2>
            <p className="text-lg text-secondary font-light ml-1">Meios de contato oficial com O Forno e clipping na mídia.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16">
            {/* Contatos */}
            <div>
              <h3 className="text-2xl font-serif text-primary mb-8 border-b border-border pb-4">O Forno</h3>
              <ul className="space-y-6 text-secondary font-light text-lg">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                  <strong>Whatsapp:</strong> <a href="https://wa.me/5532998344329" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">+55 32 998344329</a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                  <strong>E-mail:</strong> <a href="mailto:oforno.net@gmail.com" className="hover:text-primary transition-colors">oforno.net@gmail.com</a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                  <strong>Instagram O Forno:</strong> <a href="https://www.instagram.com/fornoharmonico" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@fornoharmonico</a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                  <strong>YouTube:</strong> <a href="https://www.youtube.com/@oforno/videos" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@oforno</a>
                </li>
              </ul>

              <h3 className="text-2xl font-serif text-primary mb-8 mt-16 border-b border-border pb-4">Pedro Lago</h3>
              <ul className="space-y-6 text-secondary font-light text-lg">
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                  <strong>Instagram pessoal:</strong> <a href="https://www.instagram.com/pedrolagopedro" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@pedrolagopedro</a>
                </li>
                <li className="flex items-center gap-4">
                  <span className="w-1.5 h-1.5 bg-muted rounded-full"></span>
                  <strong>E-mail pessoal:</strong> <a href="mailto:emaildopedrolago@gmail.com" className="hover:text-primary transition-colors">emaildopedrolago@gmail.com</a>
                </li>
              </ul>
            </div>

            {/* Clipping */}
            <div>
              <h3 className="text-2xl font-serif text-primary mb-8 border-b border-border pb-4">Coletânea de Reportagens na mídia</h3>
              <div className="space-y-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                {[
                  { title: "Festival de Música das Vertentes 2021 abre inscrições", link: "https://globoplay.globo.com/v/9489220/" },
                  { title: "Minas Arte em Casa - Grupo Forno Harmônico homenageia poeta Oscar José Medeiros Jr. (17.09.2020)", link: "https://www.almg.gov.br/acompanhe/noticias/arquivos/2020/09/10_release_minas_arte_em_casa_setima_semana.html" },
                  { title: "Semana cultural terá música espanhola e homenagem a poeta (10.09.2020)", link: "https://www.almg.gov.br/acompanhe/noticias/arquivos/2020/09/10_release_minas_arte_em_casa_setima_semana.html" },
                  { title: "“Critt na Quarentena” discute impacto nas empresas causado pelo novo coronavírus (08.09.2020)", link: "https://www2.ufjf.br/noticias/2020/09/08/critt-na-quarentena-discute-impacto-nas-empresas-causado-pelo-novo-coronavirus/" },
                  { title: "Laboratório de Arte Pública da UFSJ tem novo site (14.07.2020)", link: "https://www.ufsj.edu.br/noticias_ler.php?codigo_noticia=8063" },
                  { title: "Studio Dialeto realiza 2° Encontro de Empreendedorismo Sustentável (06.06.2020)", link: "http://www.studiodialeto.com.br/studio-dialeto-realiza-2-encontro-de-empreendedorismo-sustentavel-de-juiz-de-fora-online/" },
                  { title: "CONCERTO ENCERRA MUSIK EXPEDITION (31.08.2019)", link: "https://www.portalamirt.com.br/gazeta-sjdr/concerto-encerra-musik-expedition-2/" },
                  { title: "MUSIK-EXPEDITION BUSCA COLABORAÇÕES PARA REALIZAR FESTIVAL DE MÚSICA (04.08.2019)", link: "https://www.portalamirt.com.br/gazeta-sjdr/musik-expedition-busca-colaboracoes-para-realizar-festival-de-musica/" },
                  { title: "Inverno Cultural da UFSJ terá nove dias de programação gratuita (08.07.2019)", link: "https://www.acessa.com/cultura/arquivo/noticias/2019/07/08-inverno-cultural-ufsj-tera-nove-dias-programacao-gratuita/" },
                  { title: "Inverno Cultural UFSJ lança programação 2019 (05.07.2019)", link: "http://guiadasvertentes.com.br/index.php?secao=ver_noticia&id_noticia=938" },
                  { title: "Inverno Cultural UFSJ 2019", link: "https://www.minasgerais.com.br/pt/eventos/sao-joao-del-rei/inverno-cultural-ufsj-2019" },
                  { title: "Palestra: Planejamento e Gestão de Projetos para o II CIRCUITO DE VIOLÃO DAS VERTENTES (31.10.2018)", link: "https://assoviovertentes.wordpress.com/2018/10/31/alteracao-na-programacao-ultima-semana-ii-circuito-de-violao-das-vertentes/" },
                  { title: "MUSIK-Expedition 2018 começa nesta segunda feira (05.08.2018)", link: "http://jornalismo.ufsj.edu.br/van/musik-expedition-2018-comeca-nesta-segunda-feira/" },
                  { title: "“Felicidade Sem Domínio”, o poeta e violonista Pedro Lago, também conhecido como palhaço Sinhé, faz uma apresentação que mistura música, poesia e contação de histórias (25.05.2018)", link: "https://www.hojeemdia.com.br/esportes/rock-chopp-e-food-trucks-o-encerramento-do-1%C2%BA-torneio-de-t%C3%AAnis-intercondom%C3%ADnios-1.624580/tenis-1.624587" },
                  { title: "Cine no Muro 8ª ed. São João del Rei (06.04.2017)", link: "https://saojoaodelreitransparente.com.br/events/view/6581" },
                  { title: "Semana da Economia Colaborativa acontece em SJDR (09.05.2016)", link: "https://jornalismo.ufsj.edu.br/van/semana-da-economia-colaborativa-acontece-em-sjdr/" },
                  { title: "G1: Festival Musik Expedition começa em São João del Rei (2016)", link: "http://g1.globo.com/minas-gerais/videos/t/todos-os-videos/v/festival-musik-expedition-comeca-em-sao-joao-del-rei/5241369/" },
                  { title: "Planejamento e discussão de projetos – Pedro Lago (26/04/2016)", link: "http://www.arteesustentabilidade.com/inicio/planejamento-e-discussao-de-projetos-pedro-lago" },
                  { title: "Economia criativa na pauta de sábado do Centro Cultural (14.04.2016)", link: "https://ufsj.edu.br/noticias_ler.php?codigo_noticia=5692" },
                  { title: "Conselheiro Lafaiete vai ter atividades culturais em julho (29.06.2015)", link: "https://www.em.com.br/app/noticia/especiais/festivais-de-inverno/2015/06/29/noticia_festivais_de_inverno,663029/programacao-conselheiro-lafaiete.shtml" },
                  { title: "São João del-Rei quer ser reconhecida como Cidade Criativa da Música (11.03.2015)", link: "https://www.jornaldaslajes.com.br/integra/sao-joao-del-rei-quer-ser-reconhecida-como-cidade-criativa-da-musica/1595/" },
                  { title: "Anunciados finalistas do Concurso de Marchinha de São João del Rei (28.02.2014)", link: "http://g1.globo.com/mg/zona-da-mata/carnaval/2014/noticia/2014/02/anunciados-finalistas-do-concurso-de-marchinha-de-sao-joao-del-rei.html" },
                  { title: "Criatividade e Desenvolvimento: a cidade e suas vocações com Pedro Lago (16.07.2014)", link: "https://setelagoas.com.br/noticias/cidade/25686-oficinas-do-27o-inverno-cultural-tem-prazo-de-inscricoes-prorrogado-ate-a-proxima-quinta-dia-17" },
                  { title: "Pão de Queijo on the Road se apresenta na Festa da Música de Niterói (10.09.2011)", link: "http://www.gazetanit.com.br/6/festa.htm" },
                  { title: "Pão de Queijo on the Road participa do Festival Wouldstop III em (27.06.2011)", link: "http://absintomuitorock.blogspot.com/2011/06/ultima-seletiva-do-wouldstop-iii.html?m=0" },
                  { title: "Pão de Queijo on the Road se apresenta na Edição Nacional do IV BH Indie Music (28.09.2010)", link: "http://ivbhindiemusic.blogspot.com/2010/09/matriz-de-30set-02out-edicao-nacional.html" }
                ].map((item, idx) => (
                  <a 
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                  >
                    <h4 className="text-secondary group-hover:text-primary transition-colors font-sans text-sm md:text-base leading-relaxed">{item.title}</h4>
                    <span className="text-muted text-xs font-mono mt-1 block truncate group-hover:text-gold transition-colors">{item.link}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border-dark bg-background py-16">
        <div className="container mx-auto px-6 max-w-6xl text-center flex flex-col items-center">
           <img 
             src="https://i.postimg.cc/RhpFKdKb/LOGO-FORNO-branco-sem-fundo.png" 
             alt="O Forno" 
             loading="lazy"
             className="h-16 md:h-24 w-auto object-contain opacity-50 mb-10 hover:opacity-100 transition-opacity block [.light_&]:hidden"
           />
           <img 
             src="https://i.postimg.cc/Dzh21XJr/logo-forno-sem-fundo.png" 
             alt="O Forno" 
             loading="lazy"
             className="h-16 md:h-24 w-auto object-contain opacity-50 mb-10 hover:opacity-100 transition-opacity hidden [.light_&]:block"
           />
           <div className="flex flex-wrap justify-center gap-6 mb-8 text-xs font-sans font-bold tracking-widest text-muted uppercase">
             {NAV_ITEMS.map(item => (
                <a key={item.label} href={item.href} onClick={(e) => handleFooterNavClick(e, item)} className="hover:text-primary transition-colors">
                    {item.label}
                </a>
             ))}
           </div>
           <p className="text-muted font-sans text-sm mb-2">
             ❤️ feito com amor e Fornologia ❤️
           </p>
           <p className="text-muted text-xs font-light">
             inspirado no Dragon Dreaming, no TEvEP e na Fluxonomia<br/>
             Arte, metodologia e tecnologia do interior das Minas Gerais para o mundo!
           </p>
        </div>
      </footer>

      <Modal 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)}
        title={modalTitle}
      >
        <Forms 
          type={modalType} 
          initialService={modalTitle}
          onSubmit={() => {
            // Optional: close modal automatically after a delay
            // setTimeout(() => setModalOpen(false), 3000);
          }} 
        />
      </Modal>

      {/* Fullscreen Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-white opacity-70 hover:opacity-100 bg-black/50 hover:bg-black/80 rounded-full px-4 py-2 transition-all flex items-center gap-2"
            onClick={() => setSelectedImage(null)}
          >
            <X size={20} />
            <span className="font-sans text-sm font-bold uppercase tracking-widest">Fechar</span>
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen" 
            loading="lazy"
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
};

export default Home;