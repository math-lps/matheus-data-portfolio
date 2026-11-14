// All portfolio copy lives here. Edit this file to personalise the site.

export const profile = {
  name: 'Matheus Augusto Lopes',
  title: 'Analista de Dados | Business Intelligence | SQL | Power BI',
  intro:
  'Profissional em transição de carreira para Análise de Dados e Business Intelligence, com experiência nas áreas administrativa, operacional e de transportes. Desenvolvo projetos práticos utilizando SQL, MySQL, Power BI, DAX e Excel, aplicando conhecimentos em tratamento, modelagem, análise e visualização de dados para apoiar a tomada de decisões.',
  // Foto profissional exibida na seção inicial.
  photo: '/img/matheus-perfil.jpg',
  linkedin: 'https://www.linkedin.com/in/matheus-augusto-lopes/',
  github: 'https://github.com/math-lps',
}

// Faixa de tecnologias exibida na parte inferior da seção inicial.
export const heroTechnologies = [
  'SQL',
  'MySQL',
  'Power BI',
  'Excel',
  'DAX',
  'ETL',
]

export const about = {
  paragraphs: [
    'Sou profissional com experiência nas áreas administrativa, operacional e de transportes, atualmente direcionando minha carreira para Análise de Dados e Business Intelligence.',
    'Tenho desenvolvido conhecimentos em SQL, MySQL, Power BI e Excel, aplicando essas ferramentas em projetos práticos que envolvem tratamento, modelagem, análise e visualização de dados.',
    'Minha experiência profissional anterior contribuiu para desenvolver organização, capacidade analítica e compreensão de processos. Busco uma oportunidade na área de dados para aplicar essas competências, continuar evoluindo tecnicamente e transformar dados em informações úteis para a tomada de decisões.',
  ],
  technical: [
    'Tratamento de dados',
    'Análise de dados',
    'Modelagem de dados',
    'Visualização de dados',
    'Dashboards no Power BI',
    'Consultas SQL',
  ],
}

export type Project = {
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
}

// Projetos reais publicados em https://github.com/math-lps
export const projects: Project[] = [
  {
    title:
      'Painel de Acidentes por Animais Peçonhentos em Minas Gerais (2020–2025)',
    description:
      'Projeto de Business Intelligence para análise de acidentes por animais peçonhentos em Minas Gerais entre 2020 e 2025, com dados públicos do SINAN/DATASUS, processo ETL, Data Warehouse em modelo estrela e dashboards interativos.',
    image: '/img/acidentes-peconhentos-mg.png',
    technologies: ['SQL', 'MySQL', 'Power BI', 'DAX'],
    github:
      'https://github.com/math-lps/Projeto-BI-Acidentes-Animais-Peconhentos-MG',
  },
  {
    title: 'Dashboard de Vendas, Custos de Envio, Margem de Lucro e KPIs',
    description:
      'Dashboard de vendas, custos de envio, margem de lucro e indicadores de desempenho desenvolvido no Power BI, respondendo a perguntas de negócio sobre modalidades de envio, mercados e categorias de produto.',
    image: '/img/vendas-custos-margem-kpis.png',
    technologies: ['Power BI', 'Visualização de Dados'],
    github:
      'https://github.com/math-lps/Dashboard-de-Vendas-Custos-Margem-de-Lucro-e-KPIs',
  },
  {
    title: 'Dashboard Analítico de Vendas Globais',
    description:
      'Dashboard analítico de vendas globais desenvolvido em Microsoft Power BI, com análises por categoria, país, prioridade de entrega e desconto, além de filtros por ano, país e segmento.',
    image: '/img/vendas-globais.png',
    technologies: ['Power BI', 'Visualização de Dados'],
    github: 'https://github.com/math-lps/dashboard-vendas-globais-power-bi',
  },
  {
    title: 'Análise de Campanhas de Marketing',
    description:
      'Mini-projeto da Data Science Academy (DSA) desenvolvido no Power BI para analisar campanhas de marketing, perfil dos clientes, comportamento de gastos e padrões de compra por país.',
    image: '/img/campanhas-marketing.png',
    technologies: ['Power BI', 'Visualização de Dados'],
    github:
      'https://github.com/math-lps/mini-projeto-1-analise-campanhas-marketing-power-bi',
  },
]

export type Skill = {
  name: string
  summary: string
}

export const skills: Skill[] = [
  {
    name: 'SQL',
    summary: 'Consultas para extração, tratamento e análise de dados.',
  },
  {
    name: 'MySQL',
    summary: 'Criação e consulta de bancos de dados relacionais.',
  },
  {
    name: 'Power BI',
    summary: 'Modelagem de dados e criação de dashboards interativos.',
  },
  {
    name: 'Excel',
    summary: 'Organização, tratamento e análise de dados em planilhas.',
  },
  {
    name: 'Visualização de Dados',
    summary:
      'Apresentação das informações de forma clara para apoiar decisões.',
  },
  {
    name: 'DAX',
    summary:
      'Criação de medidas e cálculos para análise de indicadores no Power BI.',
  },
  {
    name: 'ETL e tratamento de dados',
    summary:
      'Extração, transformação, limpeza e preparação de dados para análise.',
  },
]
