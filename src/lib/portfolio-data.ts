import cssCertificate from "@/assets/certificado-css.jpg.asset.json";
import javascriptCertificate from "@/assets/certificado-javascript.jpg.asset.json";
import logicCertificate from "@/assets/certificado-logica.jpg.asset.json";

export const profile = {
  name: "Paulo Vitor Marques de Almeida",
  shortName: "Paulo Vitor Marques",
  github: "https://github.com/paulovitormarques771-arch",
  linkedin: "https://www.linkedin.com/in/paulo-vitor-marques-4a25a528a/",
  whatsapp: "https://wa.me/5524999480606",
  email: "paulovitormarques643@gmail.com",
};
export const navigation = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "habilidades", label: "Habilidades" },
  { id: "projetos", label: "Projetos" },
  { id: "certificados", label: "Certificados" },
  { id: "formacao", label: "Formação" },
  { id: "contato", label: "Contato" },
];
export const skills = [
  { id: "js", name: "JavaScript", description: "Interatividade e experiências dinâmicas na web." },
  { id: "react", name: "React", description: "Interfaces reativas e componentes reutilizáveis para a web." },
  {
    id: "frontend",
    name: "Front-End",
    description: "Interfaces modernas, acessíveis e responsivas.",
  },
  {
    id: "logic",
    name: "Lógica de Programação",
    description: "Algoritmos e resolução de problemas.",
  },
  { id: "claude", name: "Claude Code", description: "IA aplicada ao desenvolvimento de software." },
  {
    id: "lovable",
    name: "Lovable",
    description: "Construção de aplicações com inteligência artificial.",
  },
  { id: "figma", name: "Figma", description: "Design de interfaces e prototipação." },
  { id: "git", name: "Git", description: "Versionamento e colaboração no código." },
  { id: "java", name: "Java", description: "Programação orientada a objetos." },
  { id: "spring", name: "Spring Boot", description: "Estruturação de aplicações e APIs." },
  { id: "node", name: "Node.js", description: "JavaScript além do navegador." },
  { id: "json", name: "JSON", description: "Dados estruturados e integração entre sistemas." },
];
// Example levels supplied in the brief. Edit labels and levels to reflect your knowledge.
export const mastery = [
  { name: "JavaScript", level: "Avançado" },
  { name: "Front-End", level: "Avançado" },
  { name: "HTML / CSS", level: "Avançado" },
  { name: "Git", level: "Intermediário" },
  { name: "Java", level: "Intermediário" },
  { name: "Spring Boot", level: "Intermediário" },
  { name: "Node.js", level: "Intermediário" },
  { name: "Figma", level: "Intermediário" },
  { name: "Lógica de Programação", level: "Avançado" },
];
export type Certificate = {
  id: number;
  name: string;
  institution: string;
  year: string;
  hours: string;
  image: string | null;
};
export const certificates: Certificate[] = [
  {
    id: 1,
    name: "Explorando os Fundamentos do CSS",
    institution: "DIO",
    year: "2026",
    hours: "16 horas",
    image: cssCertificate.url,
  },
  {
    id: 2,
    name: "Lógica Aplicada com Javascript",
    institution: "DIO",
    year: "2026",
    hours: "10 horas",
    image: javascriptCertificate.url,
  },
  {
    id: 3,
    name: "Introdução à Lógica de Programação",
    institution: "DIO",
    year: "2026",
    hours: "7 horas",
    image: logicCertificate.url,
  },
];
export const education = [
  {
    course: "Engenharia de Software",
    institution: "Estácio",
    period: "2º período",
    status: "Em andamento",
  },
];
export const journey = [
  "Início na programação",
  "Lógica de Programação",
  "JavaScript",
  "Desenvolvimento Front-End",
  "Git e GitHub",
  "Java & Spring Boot",
  "Node.js",
  "Ferramentas de IA",
  "Projetos próprios",
];
