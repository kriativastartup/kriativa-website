import { Globe, MonitorDot, Proportions } from "lucide-react";

const navbarItemsLinks = [
  { name: "Início", href: "#" },
  { name: "Quem Somos", href: "#" },
  { name: "Serviços", href: "#" },
  { name: "Como Trabalhamos", href: "#" },
];

const processSteps = [
  { step: "Entendimento", description: "Analisamos sua ideia e objetivos" },
  { step: "Planejamento", description: "Definimos a melhor solução" },
  {
    step: "Desenvolvimento",
    description: "Criamos com qualidade e foco no detalhe",
  },
  { step: "Entrega", description: "Solução testada e pronta para uso" },
];

const whyChooseUsItems = [
  {
    title: "Comunicação clara e constante",
    description:
      "Mantemos você informado em cada etapa do projeto com transparência e responsabilidade",
    img: "/images/use1.jpg",
  },
  {
    title: "Compromisso com prazos",
    description:
      "Entregamos seus projetos dentro do prazo estabelecido, sem comprometer a qualidade",
    img: "/images/use2_.jpg",
  },
  {
    title: "Design moderno e funcional",
    description:
      "Criamos interfaces intuitivas e visualmente atraentes que proporcionam excelente experiência ao usuário",
    img: "/images/use3.jpg",
  },
  {
    title: "Suporte e acompanhamento contínuo",
    description:
      "Oferecemos suporte técnico e acompanhamento pós-lançamento para garantir o sucesso contínuo",
    img: "/images/use4.jpg",
  },
];

const solutionsItems = [
  { title: "Soluções personalizadas" },
  { title: "Tecnologia atual e escalável" },
  { title: "Foco em resultados reais" },
];

const imagesSlice = [
  {
    image: "/images/web_app.png",
    label: "Websites Modernos",
    icon: Globe,
    bg: "bg-purple-500",
  },
  {
    image: "/images/app_mobile.png",
    label: "Aplicativos Móveis",
    icon: Proportions,
    bg: "bg-indigo-500",
  },
  {
    image: "/images/desktop_app.png",
    label: "Sistemas Desktop",
    icon: MonitorDot,
    bg: "bg-green-700",
  },
];

export {
  navbarItemsLinks,
  processSteps,
  whyChooseUsItems,
  solutionsItems,
  imagesSlice,
};
