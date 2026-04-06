import { TimelineItem, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'O SONHO', href: '#hero' },
  { label: 'OS PROJETOS', href: '#retro2025' },
  { label: 'AS AÇÕES', href: '#contact' },
  { label: 'NEWSLETTER', href: '#', action: true },
  { label: 'CONTATO', href: 'https://wa.me/5532998344329', external: true },
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    year: '2025',
    title: 'Nascimento de Bárbara',
    description: 'Em 13 de outubro de 2025, nasceu a Bárbara, minha primeira filha! Um grande ponto de virada na minha vida.',
    link: '#',
    type: 'personal',
    embedType: 'image',
    customThumbnail: 'https://i.postimg.cc/Gm1Tb73P/LAR-7590.jpg'
  },
  {
    year: '2025',
    title: 'Show: Pedra, Barro e Madeira Trio',
    description: "Em 15 de agosto de 2025, o InovaSons das Gerais reuniu compositores locais para uma mostra das composições autorais que brotam das Vertentes. O evento foi produzido pel'O Forno em parceria com o El Nino Estudio Lab! Criativo, com o apoio da Secretaria de Cultura e Turismo de São João del Rei, no Teatro Municipal da cidade, graças aos recursos da Lei Aldir Blanc 2!",
    link: 'https://www.youtube.com/watch?v=HjWeQGqm_Xg',
    type: 'music',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/HjWeQGqm_Xg'
  },
  {
    year: '2025',
    title: 'Ode à Matemática',
    description: 'Essa canção é dedicada a todos que têm um amor não correspondido... com a Matemática!',
    link: 'https://www.youtube.com/watch?v=oyMXcx1rM9o',
    type: 'music',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/oyMXcx1rM9o'
  },
  {
    year: '2025',
    title: 'Ciclos da Vida',
    description: 'Essa canção é uma viagem pelos ciclos da vida de trás para frente.',
    link: 'https://www.youtube.com/watch?v=OgNK8z7EGN4',
    type: 'music',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/OgNK8z7EGN4'
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
    title: 'Ode à Felicidade',
    description: 'Gravado em 2023 em Koblenz (Alemanha), é o segundo album da minha carreira como músico e compositor. Do encontro com Felix Rieder e seus amigos do JazzClub Koblenz, nasceu a banda "Pedra, Barro e Madeira Tribo".',
    link: 'https://oforno.bandcamp.com/',
    type: 'music',
    embedType: 'website',
    customLinkLabel: 'OUVIR NO BANDCAMP',
    customEmbedTitle: 'PEDRA, BARRO E MADEIRA TRIBO APRESENTA ODE À FELICIDADE'
  },
  {
    year: '2022',
    title: 'Graduação UFSJ',
    description: 'Concluí o Bacharelado em Comunicação Social com ênfase em Jornalismo Cultural na Universidade Federal de São João del-Rei.',
    link: '#',
    type: 'education'
  },
  {
    year: '2022',
    title: 'UTI 3S',
    description: 'Criei a Unidade de Treinamento Intensivo do Terceiro Setor. Realizamos um profundo diagnóstico da maturidade em gestão de projetos no terceiro setor da cidade e promovemos um treinamento para 36 lideranças de 13 associações comunitárias. No video abaixo, o depoimento dos participantes ao final do treinamento.',
    link: 'https://www.youtube.com/watch?v=OKSGBaGtRZk&t=710s&pp=ygUFdXRpM3M%3D', 
    type: 'education',
    embedType: 'youtube'
  },
  {
    year: '2022',
    title: 'FACES del Rei',
    description: 'Fui idealizador e coordenador geral do FACES: O Fórum de Arte, Cultura e Economia Solidária arrticulou mais de 150 trabalhadores da cultura, promovendo um diagnóstico coletivo das oportunidades e desafios para o fortalecimento da economia criativa na cidade e região.',
    link: 'https://sites.google.com/view/facesvertentes/',
    type: 'project',
    embedType: 'website'
  },
  {
    year: '2020',
    title: 'Os Carmins...',
    description: 'Fui responsável pela direção e edição do curta "Os Carmins e as Outras Cores Vivem" em homenagem a Oscar Medeiros Junior, falecido em setembro de 2017. O curta, produzido durante a pandemia, foi premiado pela Assembleia Legislativa de Minas no prêmio Minas Arte em Casa.',
    link: 'https://www.youtube.com/watch?v=z9_vzlMXIGM',
    type: 'video',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/z9_vzlMXIGM'
  },
  {
    year: '2021',
    title: 'Fórum de Planejamento e Gestão Cultural',
    description: "Fui idealizador e coordenador geral do FPGC. O projeto foi resultado do projeto de Bolsa de Pesquisa em Produção Cultural apoiado pela Lei Aldir Blanc (14.017/2020) no âmbito dos editais da Secretaria de Cultura de Minas Gerais.",
    link: 'https://sites.google.com/view/fpgc/',
    type: 'project',
    embedType: 'website'
  },
  {
    year: '2021',
    title: 'FEMAVe Festival - 2a edição',
    description: 'Fui idealizador e coordenador geral do FEMAVE. Sucesso de público e crítica, o site do Festival de Música Autoral das Vertentes recebeu 18 mil acessos e 40 mil votos populares. A 2a edição do FEMAVE foi realizada de forma virtual durante a pandemia com o apoio a Lei Aldir Blanc, mostrou a força da música que brota da região das Vertentes.',
    link: 'https://femave.art.br/',
    type: 'project',
    embedType: 'vimeo',
    embedUrl: 'https://player.vimeo.com/video/562081789?badge=0&autopause=0&player_id=0&app_id=58479'
  },
  {
    year: '2020',
    title: 'Concurso de Marchinhas Carnavalescas',
    description: 'No final de 2020, no auge da pandemia, tive a honra de assumir o desafio da coordenação geral do Concurso de Marchinhas Carnavalescas de São João del-Rei, realizado pela ABBC del-Rei com o apoio do Conselho Municipal de Cultura e recursos da LAB1.',
    link: 'https://sites.google.com/view/cmcsjdr/',
    type: 'project',
    embedType: 'website'
  },
  {
    year: '2019',
    title: 'FEMAVe Festival - 1a edição',
    description: 'Com o apoio do COMTUR e do Fundo Municipal de Turismo, nos dias 12 e 13 de dezembro aconteceu a primeira edição do FEMAVE: Festival de Música Autoral das Vertentes no Teatro Munipal de São João del-Rei, Minas Gerais.',
    link: 'https://medium.com/@forno/femav-festival-2019-d2c1a9dbc59d',
    type: 'project',
    embedType: 'website',
    customThumbnail: 'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*qE3jtOTbkOMVW5i2qYAvqA.jpeg',
    customLinkLabel: 'LER ARTIGO'
  },
  {
    year: '2019',
    title: 'LAP! Arte Pública',
    description: 'Uma resposta criativa à pandemia (PIE-COVID), fui um dos fundadores do Laboratório (Digital) de Arte Pública, que promoveu a arte como antídoto para os danos psicológicos causados pelos tempos de isolamento.',
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
    description: 'Fui co-idealizador e coordenador de planejamento das 7 edições da MUSIK-Expedition. O festival é fruto de um programa de intercâmbio e residëncia entre Brasil e Alemanha. Graças a este projeto, foi firmado um memorando de entedimento entre a Universidade de Koblenz e a Universidade Federal de São João del-Rei. O documentário abaixo foi o objeto de meu Trabalho de Conclusão de Curso em Comunicação Social com ênfase em Jornalismo Cultural.',
    link: 'https://www.youtube.com/watch?v=Wn1BnmKkHLQ',
    type: 'music',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/Wn1BnmKkHLQ'
  },
  {
    year: '2017',
    title: 'Um dia de cão guia',
    description: 'Fui responsável pelo roteiro e direção de fotografia deste curta. Inspirados pela disciplina \'Documentário\' do curso de Comunicação Social, fizemos este minidoc ficcional e experimental sobre a rotina de um vira-lata vagando pelos pontos turísticos de São João del-Rei.',
    link: 'https://www.youtube.com/watch?v=M-FqAKXAbp4',
    type: 'video',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/M-FqAKXAbp4'
  },
  {
    year: '2016',
    title: 'Início da Graduação',
    description: 'Em 2016, ingressei no curso de Comunicação Social com ênfase em Jornalismo Cultural na Universidade Federal de São João del-Rei, interessado em aprimorar minhas habilidades de comunicação.',
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
    description: 'Laboratório de Inteligência SocioCriativa. Sob a coordenação de André Martinez, realizamos um diagnóstico colaborativo da economia criativa de São João del-Rei. Os resultados da pesquisa do LIS foram sistematizados em um blog que pode ser acessado no link abaixo.',
    link: 'https://sjdrlis2015.wordpress.com/',
    type: 'project',
    embedType: 'website'
  },
  {
    year: '2013-Hoje',
    title: 'Cine no Muro',
    description: 'Desde sua criação, em 2013, já foram realizadas mais de 15 edições do Cine no Muro. O evento propõe a ocupação criativa do espaço público com cinema ao ar livre e trilha sonora ao vivo. Um encontro entre clássicos do cinema mudo, audiovisual experimental e improvisação livre.',
    link: 'https://www.youtube.com/watch?v=zsA5G7visTM',
    type: 'project',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/zsA5G7visTM'
  },
  {
    year: '2013',
    title: 'O Forno Harmônico',
    description: 'Originalmente chamado de Forno Harmônico, o Forno nasceu em 2013 como uma produtora cultural. Com o tempo, compreendendo a conexão entre os eixos cultura e edudação o Forno foi se transformando de produtora em incubadora, desincubadora... até se tornar uma escola de planejamento e gestão cultural.',
    link: 'https://www.youtube.com/watch?v=LAztfKepVDc',
    type: 'project',
    embedType: 'youtube',
    embedUrl: 'https://www.youtube.com/embed/LAztfKepVDc'
  },
  {
    year: '2013',
    title: 'Exoneração da Caixa',
    description: 'Depois do burnout, queimei as pontes. Em busca de um trabalho com mais propósito e significado, pedi demissão de meu emprego público na Caixa Economica Federal e passei a me dedicar exclusivamente a arte e a produção cultural.',
    link: '#',
    type: 'career'
  },
  {
    year: '2009-2013',
    title: 'Caixa Econômica',
    description: 'Durante meus 4 anos na Caixa, trabalhei na área de habitação social onde adquiri uma experiência fundamental sobre como funciona o financiamento público, as finanças e o mundo corporativo.',
    link: '#',
    type: 'career'
  },
  {
    year: '2009-2011',
    title: 'Pão de Queijo on The Road',
    description: 'Com amigos de infância, fundei minha primeira banda independente, a Pão de Queijo na Estrada. Gravamos um EP ao vivo, em estúdio, com 7 composições minhas. Tocamos em muitos palcos e festivais. Foi o começo de minha carreira artística, como músico e compositor.',
    link: 'https://soundcloud.com/paodequeijoontheroad',
    type: 'music',
    embedType: 'soundcloud'
  },
  {
    year: '2006-2009',
    title: 'Prefeitura de BH',
    description: 'Meu primeiro emprego. Aos 18 anos, logo após concluir o ensino médio, passei em meu primeiro concurso e assumi um cargo na Secretaria Municipal de Educação atuando no Núcleo de Convênios para a Educação Infantil. Foi meu primeiro contato formal com a gestão pública e o terceiro setor.',
    link: '#',
    type: 'career'
  },
  {
    year: '1998',
    title: 'Transição MG',
    description: 'De Niterói para São João del-Rei. Quando completei 10 anos, fomos para o interior de Minas Gerais onde pude me reaproximar de meu pai e minha família.',
    link: '#',
    type: 'personal'
  },
  {
    year: '1988',
    title: 'Nascimento',
    description: 'No bairro Estrela Dalva, em Belo Horizonte, filho de Leon e Elisabeth. Nasci no fórceps, sem anestesia. Logo após meu nascimento meus pais se separam e me mudei com minha mãe para Niterói/RJ.',
    link: '#',
    type: 'personal'
  }
];