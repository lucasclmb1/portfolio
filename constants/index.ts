import { PencilRuler, Code, BarChart } from "lucide-react";

// Skills icons mapping
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

// Social links
export const socialLinks = {
  instagram: "https://www.instagram.com/lucasclmb_/",
  linkedin: "https://www.linkedin.com/in/lucasclmb/",
  github: "https://github.com/lucasclmb1",
  whatsapp: "https://wa.me/51981677930",
};

// Skills categorization
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

// Experience data
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
