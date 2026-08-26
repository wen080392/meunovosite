export interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  description: string;
  slug: string;
  features: string[];
  problems: string[];
  technologies: string[];
}

export interface ProblemItem {
  icon: string;
  title: string;
  description: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  problem: string;
  solution: string;
  stack: string[];
  result: string;
  image?: string;
}

export interface CalculatorAnswers {
  projectType: string;
  projectSize: string;
  aiRequired: string;
  integrations: string;
  mobile: string;
}

export interface DiagnosticAnswers {
  repetitiveTasks: string;
  customerContact: string;
  spreadsheets: string;
  systemsIntegration: string;
  aiUsage: string;
  mainProblem: string;
}

export interface LeadData {
  name: string;
  company: string;
  whatsapp: string;
  email: string;
  source: 'calculator' | 'diagnostic' | 'contact' | 'cta';
  calculatorData?: CalculatorAnswers;
  diagnosticData?: DiagnosticAnswers;
  estimatedRange?: string;
}

export interface CalculatorOption {
  label: string;
  value: string;
  weight: number;
}

export interface CalculatorStep {
  question: string;
  key: keyof CalculatorAnswers;
  options: CalculatorOption[];
}

export interface DiagnosticOption {
  label: string;
  value: string;
  score: number;
}

export interface DiagnosticStep {
  area: string;
  question: string;
  key: keyof DiagnosticAnswers;
  options: DiagnosticOption[];
}
