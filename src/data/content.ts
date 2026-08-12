import { Breed, Testimonial, FAQItem, BusinessInfo } from '../types';

export const businessInfo: BusinessInfo = {
  name: 'Tia Rita Pets',
  tagline: 'Puro amor...',
  subTagline: 'No Tia Rita Pets somos apaixonados por nossos amiguinhos de quatro patas. Nossa missão é ajudar as pessoas a encontrar o complemento perfeito para suas famílias.',
  phoneDisplay: '(85) 99222-5335',
  phoneRaw: '5585992225335',
  email: 'tiaritapets@gmail.com',
  address: {
    street: 'Rua Carlos Vasconcelos, 1481 B',
    neighborhood: 'Meireles',
    cityState: 'Fortaleza - CE',
    cep: '60115-170',
    full: 'Rua Carlos Vasconcelos, 1481 B - Meireles, Fortaleza - CE, 60115-170',
  },
  googleMapsUrl: 'https://maps.app.goo.gl/NX8fA2DFTpKRDxAd7',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.357077598858!2d-38.5085!3d-3.7346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c749911e3b6a9f%3A0x1d2e3f4a5b6c7d8e!2sRua%20Carlos%20Vasconcelos%2C%201481B%20-%20Meireles%2C%20Fortaleza%20-%20CE%2C%2060115-170!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
  hours: 'Todos os dias, das 08h às 22h (inclusive sábados, domingos e feriados)',
  rating: 4.9,
  reviewCount: 115,
  social: {
    instagram: '@tiaritapets',
    instagramUrl: 'https://www.instagram.com/tiaritapets',
    facebook: 'Tia Rita Pets',
    facebookUrl: 'https://www.facebook.com/tiaritapets',
  },
};

export const aboutStory = {
  title: 'Nossa História',
  subtitle: 'Dedicação, amor e responsabilidade na criação de cães de pequeno porte em Fortaleza.',
  paragraphs: [
    'Olá, somos o Tia Rita Pets! Somos um canil em Fortaleza/CE especializado em raças de pequeno porte, como: Spitz Alemão, Chihuahua, Maltês e Yorkshire.',
    'Há anos nos dedicamos à criação responsável de cães e nosso principal foco é tornar a transição do nosso lar amoroso para o seu a mais simples, segura e acolhedora possível.',
    'Quando começamos a criar estes animais maravilhosos, originalmente não estava em nossos planos nos tornarmos criadores de cães profissionais — apenas queríamos um animal de estimação para o nosso lar. Logo nos apaixonamos, e acrescentamos o segundo, depois o terceiro, e assim por diante...',
    'Depois de adquirir muito conhecimento sobre o processo de criação, decidimos fazer a nossa parte para preservá-lo, o que levou ao nascimento do nosso negócio. Nosso dia a dia é cheio de amor, alegria e emoção!',
    'Nosso trabalho, além da criação dos animais e da evolução do padrão da raça, também envolve formar os novos tutores e garantir que esses seres preciosos tenham todo o amor, cuidado e atenção que merecem.',
  ],
  highlights: [
    { label: 'Criação Responsável', description: 'Foco no bem-estar, saúde e evolução do padrão de cada raça.' },
    { label: 'Ambiente Familiar', description: 'Canil higiênico e acolhedor mantido com regras rígidas de cuidado.' },
    { label: 'Suporte aos Tutores', description: 'Acompanhamento e orientações completas pré e pós-venda.' },
  ],
};

export const breedsData: Breed[] = [
  {
    id: 'spitz',
    name: 'Spitz Alemão',
    popularName: 'Lulu da Pomerânia',
    description: 'Conhecido por sua pelagem exuberante, inteligência viva e temperamento afetuoso. É um excelente companheiro para apartamentos e famílias.',
    temperament: ['Divertido', 'Inteligente', 'Leal', 'Alerta'],
    size: 'Porte Pequeno / Anão',
    image: '/images/spitz.png',
    badge: 'Mais procurado',
  },
  {
    id: 'chihuahua',
    name: 'Chihuahua',
    popularName: 'Pelo Curto & Longo',
    description: 'Uma das menores e mais corajosas raças do mundo. Gigantes em personalidade, extremamente apegados aos tutores e muito carinhosos.',
    temperament: ['Corajoso', 'Carinhoso', 'Esperto', 'Apegado'],
    size: 'Porte Toy / Micro',
    image: '/images/chihuahua.png',
    badge: 'Especialidade da casa',
  },
  {
    id: 'maltes',
    name: 'Maltês',
    popularName: 'Pelo de Seda White',
    description: 'Famosos pela pelagem branca impecável, docilidade incomparável e elegância. Cães calmos, dóceis e excelentes para crianças.',
    temperament: ['Dócil', 'Brincalhão', 'Gentil', 'Afetuoso'],
    size: 'Porte Pequeno',
    image: '/images/maltes.png',
  },
  {
    id: 'yorkshire',
    name: 'Yorkshire Terrier',
    popularName: 'Yorkie',
    description: 'Cheios de energia, elegantes e super inteligentes. Ideais para quem busca um companheiro ativo, amoroso e adaptável.',
    temperament: ['Vibrante', 'Inteligente', 'Protetor', 'Carinhoso'],
    size: 'Porte Pequeno / Toy',
    image: '/images/yorkshire.png',
  },
];

export const testimonialsData: Testimonial[] = [
  {
    id: '1',
    author: 'Emanuela Rocha',
    rating: 5,
    date: 'Avaliação recente no Google',
    comment: 'Tia rita pets é o melhor canil de Fortaleza, confio demais. Foi o único lugar que me senti segura em pegar meus Chihuahuas pq sei que são de qualidade. Além que a gente ver o cuidado e forma como os bichinhos são tratados, dar pra ver que tem amor. Super recomendo!',
    avatarBg: 'bg-[#C85A70]',
  },
  {
    id: '2',
    author: 'Karine Bruna',
    rating: 5,
    date: 'Avaliação recente no Google',
    comment: 'Já tenho dois bebês de lá! Tudo muito maravilhoso, agora que sou vovó estou tendo todo suporte da Luana também! Merece conhecer, é incrível, ela tem todo amor e cuidado com aquelas belezuras.',
    avatarBg: 'bg-[#D97757]',
  },
  {
    id: '3',
    author: 'Silvana Maria Muniz de Oliveira',
    rating: 5,
    date: 'Avaliação recente no Google',
    comment: 'Canil seguro, higiênico, filhotes saudáveis e bem educados. Gostei pela seriedade e zelo. Acompanhamento e orientações antes e pós venda. Tudo feito com amor.',
    avatarBg: 'bg-[#8B6B5D]',
  },
];

export const googleHighlights = [
  'O canil fica na casa da Luana, tudo extremamente limpo e com regras rígidas de higiene.',
  'Canil referência no Ceará com filhotes maravilhosos e super bem cuidados!',
  'Eu via apenas na internet e quando cheguei lá foi ainda melhor a experiência.',
];

export const badgesData = [
  {
    icon: 'ShieldCheck',
    title: '4,9 de 5 Estrelas',
    subtitle: '115+ avaliações reais no Google Maps com nota máxima de satisfação.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Empresa LGBTQ+ Friendly',
    subtitle: 'Espaço inclusivo, seguro e acolhedor para todas as famílias.',
  },
  {
    icon: 'Sparkles',
    title: 'Liderada por Mulheres',
    subtitle: 'Empreendedorismo feminino conduzido com amor, ética e responsabilidade.',
  },
  {
    icon: 'Home',
    title: 'Higiene & Zelo Máximo',
    subtitle: 'Criação ética em ambiente residencial seguro, limpo e bem estruturado.',
  },
];

export const faqData: FAQItem[] = [
  {
    id: 'visita',
    question: 'Como faço para agendar uma visita ao canil?',
    answer: 'Atendemos todos os dias das 08h às 22h (inclusive sábados, domingos e feriados). Como prezamos pela saúde e descanso dos filhotes, o atendimento é realizado mediante agendamento prévio pelo WhatsApp.',
  },
  {
    id: 'saude',
    question: 'Os filhotes são entregues vacinados e vermifugados?',
    answer: 'Sim! Todos os nossos filhotes são entregues com vacinação em dia de acordo com a idade (vacina ética V10), vermifugados, com acompanhamento veterinário e orientações de cuidados.',
  },
  {
    id: 'suporte',
    question: 'Terei suporte após levar o filhote para casa?',
    answer: 'Com certeza! Oferecemos suporte contínuo antes e pós-venda. A Luana e toda a equipe do Tia Rita Pets continuam à disposição para tirar dúvidas sobre adaptação, alimentação e cuidados gerais.',
  },
  {
    id: 'entrega',
    question: 'Vocês entregam filhotes fora de Fortaleza?',
    answer: 'Sim! Atendemos tutores de toda a região metropolitana de Fortaleza e dependendo da localidade organizamos a entrega com transporte seguro e especializado. Entre em contato via WhatsApp para consultar.',
  },
  {
    id: 'disponibilidade',
    question: 'Como consultar os filhotes disponíveis no momento?',
    answer: 'Como as ninhadas são muito disputadas e variam frequentemente, o catálogo atualizado de fotos e vídeos dos filhotes disponíveis é enviado diretamente pelo nosso WhatsApp (85 99222-5335).',
  },
];

export const getWhatsAppLink = (message?: string) => {
  const defaultMsg = 'Olá! Vim pelo site do Tia Rita Pets e gostaria de mais informações sobre os filhotes disponíveis.';
  const text = encodeURIComponent(message || defaultMsg);
  return `https://wa.me/${businessInfo.phoneRaw}?text=${text}`;
};
