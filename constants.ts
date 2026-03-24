import { TimelineItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'O SONHO', href: '#hero' },
  { label: 'OS PROJETOS', href: '#retro2025' },
  { label: 'AS AÇÕES', href: '#timeline' },
  { label: 'AGENDA', href: '#plan2026' },
  { label: 'NEWSLETTER', href: '#', action: true },
  { label: 'CONTATO', href: '#contact' },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2025',
    title: 'JAAAS IA',
    description: 'Em 2025, desenvolvi um novo ofício (gerente da Pousada Refúgio Tiradentes) e com isso desbloqueei uma nova habilidade. Criei o Joaquim e a start-up JAAAS: Joaquim Agents As A Service, para democratizar o acesso à IA para o micro e pequeno empreendedor da hotelaria.',
    link: 'https://coruscating-crepe-c0f8ff.netlify.app/',
    type: 'project',
    embedType: 'website',
  },
  {
    year: '2025',
    title: 'Nascimento de Bárbara',
    description: 'Aos 45 do segundo tempo... Sem dúvidas, o projeto mais gratificante e desafiador. Com a paternidade, assumi nova identidade (pai), novo ofício (gestor de Pousada) e nova profissão (engenheiro de prompts).',
    link: '#',
    type: 'personal',
    embedType: 'image',
    customThumbnail: 'https://i.postimg.cc/Gm1Tb73P/LAR-7590.jpg'
  },
  {
    year: '2024',
    title: 'Requiem Verdi 150 anos',
    description: 'Um marco monumental na minha vida e carreira: cantar junto com 900 músicos na Filarmônica de Berlim. Uma celebração histórica dos 150 anos do Requiem de Verdi.',
    link: 'https://academy.choralspace.org/programs/verdi2024?cid=3778994&permalink=verdi_requiem-e9e750',
    type: 'music',
    embedType: 'website',
    customThumbnail: 'https://alpha.uscreencdn.com/video_thumbnails/3TtB-Ex8QMEy2A.jpg?key1=kCwT+mddWR4DQMlzq821h5bgLW2RWbZ5Amkh06jVBQklfx29KjGE329XOP3Pppvf&key2=a8966d419c9a0edf68cb4e14978bd141',
    customLinkLabel: 'ASSISTIR CONCERTO'
  },
  {
    year: '2023',
    title: 'Ode a Felicidade',
    description: 'Gravado em 2023, fruto da amizade entre Pedro Lago e Felix Rieder, que reuniu seus amigos do JazzClub Koblenz para formar a "Pedra, Barro e Madeira Tribo". Uma parceria transatlântica.',
    link: 'https://oforno.bandcamp.com/',
    type: 'music',
    embedType: 'website',
    customLinkLabel: 'OUVIR NO BANDCAMP',
    customEmbedTitle: 'PEDRA, BARRO E MADEIRA TRIBO APRESENTA ODE À FELICIDADE'
  },
  {
    year: '2022',
    title: 'Graduação UFSJ',
    description: 'Bacharelado em Comunicação Social com ênfase em Jornalismo Cultural. Seis anos de formação acadêmica sistematizando a prática cultural.',
    link: '#',
    type: 'education'
  },
  {
    year: '2022',
    title: 'UTI 3S',
    description: 'Unidade de Treinamento Intensivo do Terceiro Setor. Diagnóstico e treinamento intensivo em gestão de projetos com 36 lideranças de 13 associações comunitárias.',
    link: 'https://www.youtube.com/watch?v=OKSGBaGtRZk&t=710s&pp=ygUFdXRpM3M%3D', 
    type: 'education',
    embedType: 'youtube'
  },
  {
    year: '2022',
    title: 'FACES del Rei',
    description: 'Fórum de Arte, Cultura e Economia Solidária. Articulou mais de 150 trabalhadores da cultura e fortaleceu a economia criativa nas Vertentes.',
    link: 'https://sites.google.com/view/facesvertentes/',
    type: 'project',
    embedType: 'website'
  },
  {
    year: '2020',
    title: 'Os Carmins...',
    description: 'Homenagem poética a Oscar Medeiros Jr. Premiado pela Assembleia de Minas, o curta mantém a poesia viva e pulsante.',
    link: 'https://www.youtube.com/watch?v=z9_vzlMXIGM',
    type: 'video',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/z9_vzlMXIGM'
  },
  {
    year: '2019/2021',
    title: 'FEMAVe Festival',
    description: 'Sucesso de público e crítica: 18 mil acessos e 40 mil votos populares. A música autoral das Vertentes pedindo passagem.',
    link: 'https://femave.art.br/',
    type: 'project',
    embedType: 'vimeo',
    embedUrl: 'https://player.vimeo.com/video/562081789?badge=0&autopause=0&player_id=0&app_id=58479'
  },
  {
    year: '2019',
    title: 'LAP! Arte Pública',
    description: 'Resposta criativa à pandemia (PIE-COVID). Um laboratório digital de arte e cultura co-fundado para tempos de isolamento.',
    link: 'https://www.youtube.com/playlist?list=PLOD27QZDEohuGq2nKRD1FdokQkKlJNr-W',
    type: 'education',
    embedType: 'youtube'
  },
  {
    year: '2018',
    title: 'Visita Virtual 360º - Museu Naval',
    description: 'Fui responsável pela narração do projeto de virtualização em 360 graus do Museu Naval, no Rio de Janeiro, trabalhando junto ao time da ERA Virtual, pioneira na região em virtualização de espaços culturais.',
    link: 'https://www.eravirtual.org/museu-naval/',
    type: 'project',
    embedType: 'website',
    customThumbnail: 'https://i.postimg.cc/ZqH4YNv1/thumb-museu-naval-visita-virtual-era.png',
    customLinkLabel: 'Fazer Tour Virtual'
  },
  {
    year: '2016-2019',
    title: 'MUSIK-Expedition',
    description: 'Da UFSJ para Koblenz-Landau. 4 expedições no Brasil, 2 na Alemanha. Intercâmbio cultural que construiu pontes transatlânticas.',
    link: 'https://www.youtube.com/watch?v=Wn1BnmKkHLQ',
    type: 'music',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/Wn1BnmKkHLQ'
  },
  {
    year: '2017',
    title: 'Um dia de cão guia',
    description: 'Inspirados pela disciplina \'Documentário\' do curso de Comunicação Social (Jornalismo), fizemos este documentário ficcional e experimental sobre a rotina de um vira-lata vagando e zelando pelos pontos turísticos de São João del-Rei.\n\nRoteiro e direção de fotografia: Pedro Lago\nTrilha sonora: Smoke that fire - Freakaz',
    link: 'https://www.youtube.com/watch?v=M-FqAKXAbp4',
    type: 'video',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/M-FqAKXAbp4'
  },
  {
    year: '2016',
    title: 'Início da Graduação',
    description: 'Ingresso no curso de Comunicação Social na UFSJ. O início de uma jornada acadêmica paralela aos projetos culturais.',
    link: '#',
    type: 'education'
  },
  {
    year: '2016',
    title: 'Fluxonomia 4D',
    description: 'Fui um dos pioneiros da turma 0 da formação piloto em Fluxonomia 4D, formando um grupo de estudos na garagem d\'O Forno. Aprendendo a gerir projetos sustentáveis e construir futuros desejáveis nas 4 dimensões.',
    link: 'https://laladeheinzelin.com.br/',
    type: 'education',
    embedType: 'website'
  },
  {
    year: '2015',
    title: 'LIS! SocioCriativa',
    description: 'Laboratório de Inteligência SocioCriativa. Diagnóstico preciso da economia criativa, turismo e artesanato em São João del-Rei.',
    link: 'https://sjdrlis2015.wordpress.com/',
    type: 'project',
    embedType: 'website'
  },
  {
    year: '2013-Hoje',
    title: 'Cine no Muro',
    description: '15 edições de cinema mudo com trilha ao vivo. Dos muros do cemitério à tríplice fronteira, ocupando a cidade com arte.',
    link: 'https://www.youtube.com/watch?v=zsA5G7visTM',
    type: 'project',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/zsA5G7visTM'
  },
  {
    year: '2013',
    title: 'O Forno Harmônico',
    description: 'Nasce a (des)incubadora. A missão: tirar sonhos da cabeça e projetos do papel. O início de uma década de gestão cultural.',
    link: 'https://www.youtube.com/watch?v=LAztfKepVDc',
    type: 'project',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/LAztfKepVDc'
  },
  {
    year: '2013',
    title: 'Exoneração da Caixa',
    description: 'O salto sem rede de segurança. Pedro deixa o funcionalismo público para empreender na economia criativa.',
    link: '#',
    type: 'career'
  },
  {
    year: '2009-2013',
    title: 'Caixa Econômica',
    description: 'Atuação no setor de habitação social. Experiência fundamental no terceiro setor e políticas públicas.',
    link: '#',
    type: 'career'
  },
  {
    year: '2009-2011',
    title: 'Pão de Queijo on The Road',
    description: 'Rock com sotaque e queijo. A primeira banda independente, o EP "Na Estrada" e o início de tudo nos palcos de BH e Niterói.',
    link: 'https://soundcloud.com/paodequeijoontheroad',
    type: 'music',
    embedType: 'soundcloud'
  },
  {
    year: '2006-2009',
    title: 'Prefeitura de BH',
    description: 'Secretaria Municipal de Educação. O primeiro contato formal com a gestão pública.',
    link: '#',
    type: 'career'
  },
  {
    year: '1998',
    title: 'Transição MG',
    description: 'Mudança de Niterói para São João del-Rei. Quando tinha 10 anos, nos mudamos para o interior de Minas Gerais onde pude me reaproximar da minha familia e redescobrir o que era infância.',
    link: '#',
    type: 'personal'
  },
  {
    year: '1988',
    title: 'Nascimento',
    description: 'No bairro Estrela Dalva, Belo Horizonte, filho de Leon e Elisabeth. Logo após meu nascimento meus pais se separam e me mudo com minha mãe para Niterói.',
    link: '#',
    type: 'personal'
  }
];