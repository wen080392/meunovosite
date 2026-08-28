import type { ServiceItem, ProblemItem, PortfolioProject, CalculatorStep, DiagnosticStep, CalculatorAnswers } from '../types';

/* ============================================
   SERVICES DATA
   ============================================ */
export const services: ServiceItem[] = [
  {
    id: 'sistemas-web',
    icon: '🖥️',
    title: 'Sistemas Web',
    description: 'Plataformas, portais, painéis administrativos e sistemas de gestão personalizados para sua operação.',
    slug: '/servicos/sistemas-web',
    features: [
      'Plataformas web sob medida',
      'Painéis administrativos',
      'Sistemas de gestão interna',
      'Portais para clientes',
      'Dashboards de indicadores',
      'ERPs e CRMs personalizados',
    ],
    problems: [
      'Operações controladas por planilhas',
      'Falta de visão unificada do negócio',
      'Processos manuais e lentos',
      'Dados espalhados em vários lugares',
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'automacao',
    icon: '⚙️',
    title: 'Automação',
    description: 'Automatização de tarefas e processos empresariais para eliminar trabalho repetitivo e reduzir erros.',
    slug: '/servicos/automacao',
    features: [
      'Automação de processos internos',
      'Integração entre sistemas',
      'Workflows inteligentes',
      'Automação de relatórios',
      'Notificações automáticas',
      'Robôs de processamento',
    ],
    problems: [
      'Tarefas repetitivas consomem tempo da equipe',
      'Erros humanos em processos manuais',
      'Falta de integração entre ferramentas',
      'Relatórios manuais demorados',
    ],
    technologies: ['Python', 'Node.js', 'APIs REST', 'Webhooks', 'n8n', 'AWS Lambda'],
  },
  {
    id: 'inteligencia-artificial',
    icon: '🤖',
    title: 'Inteligência Artificial',
    description: 'Chatbots, agentes de IA, análise de dados e automação inteligente para transformar sua operação.',
    slug: '/servicos/inteligencia-artificial',
    features: [
      'Chatbots inteligentes',
      'Agentes de IA autônomos',
      'Análise preditiva de dados',
      'Processamento de linguagem natural',
      'Classificação automática',
      'Recomendação inteligente',
    ],
    problems: [
      'Atendimento manual sobrecarregado',
      'Decisões baseadas em intuição',
      'Grande volume de dados sem análise',
      'Falta de personalização no atendimento',
    ],
    technologies: ['Python', 'OpenAI', 'LangChain', 'FastAPI', 'TensorFlow', 'AWS'],
  },
  {
    id: 'aplicativos',
    icon: '📱',
    title: 'Aplicativos',
    description: 'Aplicações móveis para Android e iOS que conectam sua empresa aos seus clientes.',
    slug: '/servicos/aplicativos',
    features: [
      'Apps nativos Android e iOS',
      'Apps híbridos multiplataforma',
      'PWAs progressivos',
      'Integração com sistemas existentes',
      'Push notifications',
      'Offline-first',
    ],
    problems: [
      'Clientes sem acesso mobile ao serviço',
      'Processos que dependem de presença física',
      'Comunicação fragmentada com clientes',
      'Concorrentes já possuem aplicativo',
    ],
    technologies: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'AWS'],
  },
  {
    id: 'integracoes',
    icon: '🔗',
    title: 'Integrações',
    description: 'APIs, pagamentos, CRMs, ERPs, WhatsApp e outras plataformas conectadas ao seu sistema.',
    slug: '/servicos/integracoes',
    features: [
      'APIs RESTful e GraphQL',
      'Integração com gateways de pagamento',
      'Conexão com CRMs e ERPs',
      'WhatsApp Business API',
      'Webhooks e eventos',
      'Sincronização de dados',
    ],
    problems: [
      'Sistemas isolados que não conversam',
      'Dados duplicados entre plataformas',
      'Processo manual de transferência de informações',
      'Falta de visão unificada do cliente',
    ],
    technologies: ['Node.js', 'Python', 'REST APIs', 'GraphQL', 'Webhooks', 'AWS'],
  },
  {
    id: 'cloud-seguranca',
    icon: '☁️',
    title: 'Cloud & Segurança',
    description: 'Infraestrutura na nuvem, monitoramento, DevSecOps e proteção para suas aplicações.',
    slug: '/servicos/cloud-seguranca',
    features: [
      'Infraestrutura como código',
      'Monitoramento 24/7',
      'Análise de vulnerabilidades',
      'CI/CD pipelines',
      'Backup e disaster recovery',
      'Compliance e auditorias',
    ],
    problems: [
      'Infraestrutura frágil e sem monitoramento',
      'Falhas de segurança desconhecidas',
      'Deploy manual e propenso a erros',
      'Sem plano de recuperação de desastres',
    ],
    technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
  },
];

/* ============================================
   PROBLEMS DATA (Home)
   ============================================ */
export const problems: ProblemItem[] = [
  {
    icon: '🔄',
    title: 'Processos repetitivos',
    description: 'Equipe gasta horas em tarefas que poderiam ser automatizadas.',
  },
  {
    icon: '📊',
    title: 'Planilhas descontroladas',
    description: 'Dados espalhados em dezenas de planilhas sem padronização.',
  },
  {
    icon: '🔌',
    title: 'Sistemas que não conversam',
    description: 'Informações duplicadas e processos manuais entre sistemas.',
  },
  {
    icon: '💬',
    title: 'Atendimento manual',
    description: 'Clientes esperando respostas que poderiam ser automáticas.',
  },
  {
    icon: '📉',
    title: 'Falta de indicadores',
    description: 'Decisões baseadas em intuição, sem dados em tempo real.',
  },
  {
    icon: '🏗️',
    title: 'Difícil de escalar',
    description: 'Operação que não acompanha o crescimento da empresa.',
  },
];

/* ============================================
   PORTFOLIO DATA
   ============================================ */
export const portfolio: PortfolioProject[] = [
  {
    id: 'cryptoarb-pro',
    title: 'CryptoArb Pro',
    problem: 'Necessidade de processamento e monitoramento de oportunidades de arbitragem de criptomoedas em tempo real, com alta performance e baixa latência.',
    solution: 'Sistema de processamento e monitoramento de alto desempenho que identifica e rastreia oportunidades de arbitragem automaticamente entre múltiplas exchanges.',
    stack: ['Java', 'AWS', 'APIs REST', 'Processamento de dados', 'WebSocket', 'Redis'],
    result: 'Redução de 95% no tempo de identificação de oportunidades e automação completa do fluxo operacional.',
  },
  {
    id: 'cloudguardian',
    title: 'CloudGuardian',
    problem: 'Empresas precisam identificar riscos de segurança e problemas de infraestrutura em suas aplicações cloud, mas não possuem visibilidade ou ferramentas adequadas.',
    solution: 'Plataforma DevSecOps completa que analisa, monitora e reporta vulnerabilidades e problemas de infraestrutura em tempo real, com dashboards e alertas automáticos.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Docker', 'AWS', 'Terraform'],
    result: 'Centralização do monitoramento, maior visibilidade operacional e prevenção ativa contra vulnerabilidades em nuvem.',
  },
  {
    id: 'vibe-tech',
    title: 'Vibe Tech',
    problem: 'Necessidade de uma plataforma comercial B2B que não apenas apresente serviços, mas também qualifique leads, estime projetos e capture oportunidades de forma automatizada.',
    solution: 'Site comercial com funil integrado: calculadora de investimento, diagnóstico empresarial e captura inteligente de leads — construído com a mesma tecnologia que vendemos.',
    stack: ['React', 'TypeScript', 'Vite', 'CSS3', 'React Router'],
    result: 'Aumento na geração de leads qualificados em 300% e previsibilidade no fluxo comercial de serviços.',
  },
];

/* ============================================
   CALCULATOR STEPS
   ============================================ */
export const calculatorSteps: CalculatorStep[] = [
  {
    question: 'O que sua empresa precisa?',
    key: 'projectType',
    options: [
      { label: '🖥️ Sistema Web', value: 'web', weight: 1.0 },
      { label: '📊 Painel / Dashboard', value: 'dashboard', weight: 0.8 },
      { label: '📱 Aplicativo Móvel', value: 'app', weight: 1.2 },
      { label: '⚙️ Automação', value: 'automation', weight: 0.7 },
      { label: '🤖 Chatbot / IA', value: 'chatbot', weight: 1.1 },
      { label: '🔗 Integração entre sistemas', value: 'integration', weight: 0.6 },
      { label: '📦 Outro', value: 'other', weight: 0.8 },
    ],
  },
  {
    question: 'Qual o tamanho do projeto?',
    key: 'projectSize',
    options: [
      { label: '🟢 Pequeno — funcionalidade específica', value: 'small', weight: 0.5 },
      { label: '🟡 Médio — sistema com múltiplas telas', value: 'medium', weight: 1.0 },
      { label: '🟠 Grande — plataforma complexa', value: 'large', weight: 1.8 },
      { label: '🔴 Empresarial — sistema crítico', value: 'enterprise', weight: 3.0 },
    ],
  },
  {
    question: 'Precisa de Inteligência Artificial?',
    key: 'aiRequired',
    options: [
      { label: '❌ Não precisa', value: 'none', weight: 0 },
      { label: '🟡 Simples — chatbot ou classificação', value: 'simple', weight: 0.5 },
      { label: '🔴 Avançada — agentes, análise preditiva', value: 'advanced', weight: 1.2 },
    ],
  },
  {
    question: 'Precisa integrar com outros sistemas?',
    key: 'integrations',
    options: [
      { label: '❌ Não', value: 'none', weight: 0 },
      { label: '1–2 sistemas', value: 'few', weight: 0.3 },
      { label: '3–5 sistemas', value: 'some', weight: 0.7 },
      { label: 'Mais de 5 sistemas', value: 'many', weight: 1.2 },
    ],
  },
  {
    question: 'Precisa de aplicativo móvel?',
    key: 'mobile',
    options: [
      { label: '❌ Não', value: 'none', weight: 0 },
      { label: '🤖 Android', value: 'android', weight: 0.6 },
      { label: '🍎 iOS', value: 'ios', weight: 0.7 },
      { label: '📱 Android + iOS', value: 'both', weight: 1.0 },
    ],
  },
];

/* ============================================
   DIAGNOSTIC STEPS
   ============================================ */
export const diagnosticSteps: DiagnosticStep[] = [
  {
    area: 'Processos',
    question: 'Quantas tarefas repetitivas sua equipe executa diariamente?',
    key: 'repetitiveTasks',
    options: [
      { label: 'Nenhuma — tudo é automatizado', value: 'none', score: 0 },
      { label: 'Poucas — menos de 5 tarefas', value: 'few', score: 1 },
      { label: 'Muitas — entre 5 e 20 tarefas', value: 'many', score: 2 },
      { label: 'Demais — mais de 20 tarefas diárias', value: 'critical', score: 3 },
    ],
  },
  {
    area: 'Atendimento',
    question: 'Como seus clientes entram em contato?',
    key: 'customerContact',
    options: [
      { label: 'Sistema automatizado (chatbot, portal)', value: 'automated', score: 0 },
      { label: 'Formulário no site + e-mail', value: 'form', score: 1 },
      { label: 'WhatsApp / telefone manual', value: 'manual', score: 2 },
      { label: 'Não temos canal organizado', value: 'none', score: 3 },
    ],
  },
  {
    area: 'Gestão',
    question: 'Você usa planilhas para controlar operações importantes?',
    key: 'spreadsheets',
    options: [
      { label: 'Não — usamos sistemas adequados', value: 'no', score: 0 },
      { label: 'Poucas planilhas complementares', value: 'few', score: 1 },
      { label: 'Sim — boa parte das operações', value: 'most', score: 2 },
      { label: 'Praticamente tudo é planilha', value: 'all', score: 3 },
    ],
  },
  {
    area: 'Sistemas',
    question: 'Seus sistemas conversam entre si?',
    key: 'systemsIntegration',
    options: [
      { label: 'Sim — totalmente integrados', value: 'integrated', score: 0 },
      { label: 'Parcialmente — alguns conectados', value: 'partial', score: 1 },
      { label: 'Não — cada um é independente', value: 'isolated', score: 2 },
      { label: 'Nem usamos sistemas integrados', value: 'none', score: 3 },
    ],
  },
  {
    area: 'IA',
    question: 'Sua empresa já utiliza inteligência artificial?',
    key: 'aiUsage',
    options: [
      { label: 'Sim — em produção com resultados', value: 'production', score: 0 },
      { label: 'Estamos testando / explorando', value: 'testing', score: 1 },
      { label: 'Ainda não, mas queremos', value: 'want', score: 2 },
      { label: 'Não sei se faz sentido para nós', value: 'unsure', score: 3 },
    ],
  },
  {
    area: 'Problema principal',
    question: 'Qual área da sua empresa precisa de mais atenção tecnológica?',
    key: 'mainProblem',
    options: [
      { label: '💰 Vendas', value: 'sales', score: 2 },
      { label: '💬 Atendimento', value: 'support', score: 2 },
      { label: '💵 Financeiro', value: 'finance', score: 2 },
      { label: '⚙️ Operação', value: 'operations', score: 2 },
      { label: '📣 Marketing', value: 'marketing', score: 2 },
      { label: '📋 Gestão', value: 'management', score: 2 },
      { label: '📦 Outro', value: 'other', score: 1 },
    ],
  },
];

/* ============================================
   CALCULATOR LOGIC
   ============================================ */
export function calculateEstimate(answers: CalculatorAnswers): { min: number; max: number } {
  const basePrice = 8000;

  const typeStep = calculatorSteps.find(s => s.key === 'projectType');
  const sizeStep = calculatorSteps.find(s => s.key === 'projectSize');
  const aiStep = calculatorSteps.find(s => s.key === 'aiRequired');
  const intStep = calculatorSteps.find(s => s.key === 'integrations');
  const mobStep = calculatorSteps.find(s => s.key === 'mobile');

  const typeWeight = typeStep?.options.find(o => o.value === answers.projectType)?.weight ?? 1;
  const sizeWeight = sizeStep?.options.find(o => o.value === answers.projectSize)?.weight ?? 1;
  const aiWeight = aiStep?.options.find(o => o.value === answers.aiRequired)?.weight ?? 0;
  const intWeight = intStep?.options.find(o => o.value === answers.integrations)?.weight ?? 0;
  const mobWeight = mobStep?.options.find(o => o.value === answers.mobile)?.weight ?? 0;

  const totalWeight = typeWeight + sizeWeight + aiWeight + intWeight + mobWeight;
  const estimated = basePrice * totalWeight;

  const min = Math.round(estimated * 0.8 / 1000) * 1000;
  const max = Math.round(estimated * 1.4 / 1000) * 1000;

  return { min: Math.max(min, 3000), max: Math.max(max, 5000) };
}

/* ============================================
   DIAGNOSTIC LOGIC
   ============================================ */
export function calculateDiagnostic(answers: DiagnosticAnswers): {
  totalScore: number;
  maxScore: number;
  areas: { area: string; score: number; maxScore: number }[];
  automationOpportunities: number;
  recommendation: string;
} {
  const areas = diagnosticSteps.map(step => {
    const selectedOption = step.options.find(o => o.value === answers[step.key]);
    const score = selectedOption?.score ?? 0;
    const maxScore = Math.max(...step.options.map(o => o.score));
    return { area: step.area, score, maxScore };
  });

  const totalScore = areas.reduce((sum, a) => sum + a.score, 0);
  const maxScore = areas.reduce((sum, a) => sum + a.maxScore, 0);
  const automationOpportunities = areas.filter(a => a.score >= 2).length;

  let recommendation: string;
  if (totalScore <= 4) {
    recommendation = 'Sua empresa já possui bom nível de automação. Podemos identificar otimizações pontuais para levar sua operação ao próximo nível.';
  } else if (totalScore <= 8) {
    recommendation = 'Há oportunidades significativas de automação e melhoria. Um projeto direcionado pode trazer ganhos rápidos de eficiência.';
  } else if (totalScore <= 12) {
    recommendation = 'Sua empresa tem grande potencial de transformação digital. Recomendamos um diagnóstico aprofundado para priorizar as melhorias.';
  } else {
    recommendation = 'A transformação digital é urgente para sua empresa. Há múltiplas áreas com oportunidades críticas de automação e melhoria.';
  }

  return { totalScore, maxScore, areas, automationOpportunities, recommendation };
}
