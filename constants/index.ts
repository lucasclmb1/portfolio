import { PencilRuler, Code, BarChart } from "lucide-react";

export const skillsIcons = {
  HTML: "/icons/html.svg",
  CSS: "/icons/css.svg",
  JavaScript: "/icons/javascript.svg",
  TypeScript: "/icons/typescript.svg",
  React: "/icons/react.svg",
  NextJS: "/icons/nextjs.svg",
  NodeJS: "/icons/nodejs.svg",
  Git: "/icons/git.svg",
  LUA: "/icons/lua.svg", 
};

export const socialLinks = {
  instagram: "https://www.instagram.com/lucasclmb_/",
  linkedin: "https://www.linkedin.com/in/lucasclmb/",
  github: "https://github.com/lucasclmb1",
  whatsapp: "https://wa.me/51981677930",
};

export const skillCategories = [
  {
    icon: Code,
    title: "web",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "NodeJS"]
  },
  {
    icon: PencilRuler,
    title: "design",
    skills: ["Front-End Design", "Web Design Responsivo"]
  },
  {
    icon: BarChart,
    title: "other",
    skills: ["Git", "LUA", "React Native"]
  }
];

export const experiences = [
  {
    company: "CWI Software",
    location: "São Leopoldo, Brasil",
    period: "Fev 2020 - Presente",
    role: "Desenvolvedor Front end",
    responsibilities: [
      "Curso de estágio desenvolvendo aplicações full-stack utilizando ReactJS e Java.",
      "Construção de um projeto completo para a plataforma de vídeos de esportes radicais Canal OFF em ReactJS utilizando NextJS.",
      "Construção de um projeto completo para a empresa de internet Alloha Fibra em ReactJS utilizando NextJS.",
      "Construção de um robô de vendas utilizando Lua.",
      "Construção de uma página administrativa para manipular todos os serviços interligados.",
      "Construção de um sistema de PDV (Ponto de Venda) do zero para a Riachuelo, colaborando diretamente no desenvolvimento de interfaces e funcionalidades críticas.",
      "Integração com API-REST.",
      "Referência na área de front end para meu time e outros times parceiros.",
      "Construção de aplicações front end utilizando princípios mobile first, componentes responsivos e atomic design.",
      "Contato direto com o cliente e a equipe de design para definir a melhor experiência para o cliente.",
      "Metodologias ágeis e rotinas de controle de versionamentos nos ambientes.",
      "Avaliações e definições de protótipo.",
      "Git flow, utilizando PR's, CI/CD e revisão de código.",
      "Documentação front end utilizando Docusaurus."
    ],
    skills: [
      "Desenvolvimento de Software",
      "Desenvolvimento Web",
      "Desenvolvimento de Aplicações Web",
      "Front-End Design",
      "Web Design Responsivo",
      "HTML",
      "CSS",
      "ReactJS",
      "React Native",
      "Typescript",
      "Lua",
      "NodeJS",
      "Git",
      "Inglês"
    ]
  }
];

export const projects = [
  {
    title: "Canal OFF",
    type: "Next.js App",
    description: "Plataforma de vídeos de esportes radicais",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    image: "https://images.pexels.com/photos/1604869/pexels-photo-1604869.jpeg",
  },
  {
    title: "Alloha Fibra",
    type: "Web App",
    description: "Website para empresa de internet",
    technologies: ["React", "Next.js", "Tailwind CSS"],
    image: "https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg",
  },
  {
    title: "Riachuelo PDV",
    type: "Ponto de Venda",
    description: "Sistema de PDV para Riachuelo",
    technologies: ["React", "TypeScript", "Node.js"],
    image: "https://images.pexels.com/photos/1437866/pexels-photo-1437866.jpeg",
  },
  {
    title: "Robô de Vendas",
    type: "Automação",
    description: "Automação de processos de vendas",
    technologies: ["Lua", "JavaScript"],
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
  }
];