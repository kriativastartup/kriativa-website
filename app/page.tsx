"use client";

import { Check, ChevronRight, Globe, MonitorDot, Proportions, Sparkle, SquareKanban } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FormSheet from "@/components/app-components/form-sheet";

const navbarItemsLinks = [
  { name: "Início", href: "#" },
  { name: "Quem Somos", href: "#" },
  { name: "Serviços", href: "#" },
  { name: "Como Trabalhamos", href: "#" },
]

const processSteps = [
  { step: "Entendimento", description: "Analisamos sua ideia e objetivos" },
  { step: "Planejamento", description: "Definimos a melhor solução" },
  { step: "Desenvolvimento", description: "Criamos com qualidade e foco no detalhe" },
  { step: "Entrega", description: "Solução testada e pronta para uso" },
];

const whyChooseUsItems = [
  {
    title: "Comunicação clara e constante", description: "Mantemos você informado em cada etapa do projeto com transparência e responsabilidade",
    img: "/images/use1.jpg"
  },
  {
    title: "Compromisso com prazos", description: "Entregamos seus projetos dentro do prazo estabelecido, sem comprometer a qualidade",
    img: "/images/use2_.jpg"
  },
  {
    title: "Design moderno e funcional", description: "Criamos interfaces intuitivas e visualmente atraentes que proporcionam excelente experiência ao usuário",
    img: "/images/use3.jpg"
  },
  {
    title: "Suporte e acompanhamento contínuo", description: "Oferecemos suporte técnico e acompanhamento pós-lançamento para garantir o sucesso contínuo",
    img: "/images/use4.jpg"
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
    bg: "bg-purple-500"
  },
  {
    image: "/images/app_mobile.png",
    label: "Aplicativos Móveis",
    icon: Proportions,
    bg: "bg-indigo-500"
  },
  {
    image: "/images/desktop_app.png",
    label: "Sistemas Desktop",
    icon: MonitorDot,
    bg: "bg-green-700"
  },
]

export default function Home() {

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  // ⏱ Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagesSlice.length);
    }, 4000); // muda a cada 4s

    return () => clearInterval(interval);
  }, []);

  const current = imagesSlice[index];
  const Icon = current.icon;

  return (
    <div>
      <header>
        <FormSheet open={open} onOpenChange={setOpen} />
        <div className="flex fixed top-0 left-0 bg-white z-50 w-full items-center justify-around py-3 border-b border-gray-200">
          <nav className="max-w-[85%] mx-auto w-full flex items-center justify-between">
            <div className="flex items-end gap-16">
              <Image
                src="/icons/simple_color_1.svg"
                alt="Kriativa Logo"
                width={150}
                height={50}
                className="h-auto w-32  object-contain"
              />
              <div className="flex items-center justify-center gap-14">
                {
                  navbarItemsLinks.map((item) => (
                    <Link key={item.name} href={item.href} className="text-[15px] font-airblight font-semibold! text-gray-900 hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))
                }
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-4 bg-white text-black  border-gray-200 text-[14px] font-airblight font-semibold py-2.5 rounded-full">
                Contacte-nos
              </button>
              <button
                onClick={() => setOpen(true)}
                className="px-4 transition-all hover:bg-pallete-1/80 bg-pallete-1 text-white text-[14px] font-airblight font-semibold py-2.5 rounded-full">
                Solicitar Orçamento
              </button>
            </div>
          </nav>
        </div>

        <section className="max-w-[85%] mx-auto grid gap-14 items-start grid-cols-[63%_32%] mt-48">
          <div>
            <button className="flex items-center text-pallete-7 mb-6 border border-pallete-7/10 text-[15px] font-airb-med justify-center bg-pallete-6/40 rounded-full px-4 py-2">
              <Sparkle className="inline-block mr-1" size={16} />
              Solicite um orçamento gratuito
              <ChevronRight className="inline-block ml-1" size={16} />
            </button>
            <h1 className="text-6xl font-bold font-airb-med">
              Transformamos ideias em soluções digitais de alto impacto
            </h1>
            <div className="max-w-3xl pt-7">
              <p className="font-airb-med text-zinc-600 text-xl">
                Criamos websites, aplicativos mobile e sistemas desktop pensados para performance, design e crescimento do seu negócio.
                Impulsione sua presença digital conosco agora e hoje!
              </p>
            </div>
            <div className="flex mt-10 items-center gap-4">
              <button className="px-5 text-white  text-md flex items-center justify-center font-airblight bg-pallete-1  font-semibold py-3 rounded-full">
                <SquareKanban className="inline-block me-2" size={16} />
                Idealize seu projeto
              </button>
              <button className="px-5 text-black  text-md font-airblight border border-gray-200  font-semibold py-3 rounded-full">
                Falar com um Especialista
              </button>
            </div>
          </div>
          <section className="relative flex items-start justify-start">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative w-full"
              >
                <Image
                  src={current.image}
                  alt={current.label}
                  width={600}
                  height={300}
                  priority
                  className="rounded-2xl"
                />
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`px-4 py-3 rounded-full absolute bottom-32 -left-20 ${current.bg}`}
                >
                  <p className="text-white font-semibold text-[15px] flex items-center">
                    <Icon className="me-2 stroke-3" size={18} />
                    {current.label}
                  </p>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </section>
        </section>
      </header>

      <main className="mt-20">
        <section className="relative  w-full h-dvh overflow-hidden">
          {/* 🔵 BACKGROUND (ANIMADO) */}
          <div
            className="absolute inset-0 bg-cover bg-center"
          />
          <motion.img
            initial={{ scale: 1 }}
            animate={{
              scale: [1, 1.12, 1],
            }}
            transition={{
              duration: 23,
              ease: "easeInOut",
              repeat: Infinity,
            }}
            src="/images/walp.jpg" alt="Background"
            className="absolute  inset-0 object-cover w-full h-full"
          />

          {/* 🔴 OVERLAY (opcional) */}
          <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/30 to-black/90" />

          {/* 🟡 CONTEÚDO (ESTÁTICO) */}
          <section className="relative z-10 flex flex-col h-full items-end justify-between max-w-[85%] mx-auto py-14">
            <header className="w-full flex items-center justify-between gap-4">
              <h6 className="text-white whitespace-nowrap font-semibold">
                SOBRE NÓS
              </h6>
              <hr className="w-full border-white/20" />

            </header>
            <div className="w-full flex items-start justify-between">
              <div className="max-w-xl">
                <h3 className="text-5xl font-semibold text-white">
                  <span className="text-pallete-2">
                    Kriativuz</span>, sua parceira em inovação digital.
                </h3>
                <div>
                  <h6 className="text-white mt-4 mb-2 text-md">
                    Somos uma empresa focada no desenvolvimento de soluções digitais modernas, funcionais e seguras. Ajudamos marcas e negócios a
                    fortalecerem a sua presença digital através de tecnologia bem aplicada.
                  </h6>
                  <button className="px-5 mt-9 text-white  text-md flex items-center justify-center font-airblight bg-pallete-2  font-semibold py-3 rounded-full">
                    Solicite um Orçamento
                  </button>
                </div>
              </div>
              <div className="">
                <header className="">
                  <h4 className="font-semibold text-white text-2xl">
                    Somos diferentes, somos Kriativuz.
                  </h4>
                </header>
                <div className="mt-5 flex items-start flex-col gap-4">
                  {
                    solutionsItems.map((item, index) => (
                      <div
                        key={index}
                        className=" flex items-center justify-center rounded-full">
                        <Check className="inline-block me-2 text-pallete-1" size={16} />
                        <h6 className="text-white font-medium text-lg">{item.title}</h6>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="mt-36">
          <header className="max-w-xl mx-auto text-center">
            <h3 className="text-5xl font-bold text-gray-900">
              Serviços
            </h3>
          </header>
          <div className="max-w-6xl mb-20 mx-auto mt-14 grid grid-cols-3 gap-5">
            <div className="h-104 overflow-hidden flex flex-col justify-between  rounded-2xl border border-gray-200">
              <header className="p-6">
                <div className="flex items-center justify-between">
                  <span>
                    <Globe className="inline-block me-2 text-pallete-1 size-7" size={18} />
                  </span>
                  <button className="px-4  text-white  text-md flex items-center justify-center font-airblight bg-pallete-1  font-semibold py-2 rounded-full">
                    Solicitar
                  </button>
                </div>
                <h4 className="font-semibold pt-5 text-xl">
                  Desenvolvimento Web
                </h4>
                <p className="pt-4  text-zinc-500">
                  Criamos websites modernos, responsivos e otimizados para SEO que impulsionam sua presença online e engajam seus clientes.
                </p>
              </header>
              <footer className="px-5 mt-10">
                <Image
                  src="/images/website-mock.png"
                  alt="Serviço de Desenvolvimento Web"
                  width={400}
                  height={200}
                  className="rounded-b-2xl border rounded-2xl border-gray-200 shadow-2xl shadow-gray-400 object-cover w-full h-48"
                />
              </footer>
            </div>
            <div className="h-104 overflow-hidden flex flex-col justify-between  rounded-2xl border border-gray-200">
              <header className="p-6">
                <div className="flex items-center justify-between">
                  <span>
                    <Proportions className="inline-block me-2 text-pallete-1 size-7" size={18} />
                  </span>
                  <button className="px-4  text-white  text-md flex items-center justify-center font-airblight bg-pallete-1  font-semibold py-2 rounded-full">
                    Solicitar
                  </button>
                </div>
                <h4 className="font-semibold pt-5 text-xl">
                  Aplicações Móveis
                </h4>
                <p className="pt-4  text-zinc-500">
                  Criamos aplicações móveis modernas, responsivas e otimizadas para SEO que impulsionam sua presença online e engajam seus clientes.
                </p>
              </header>
              <footer className="px-5 ">
                <Image
                  src="/images/app-mock.png"
                  alt="Serviço de Desenvolvimento Web"
                  width={800}
                  height={800}
                  className="rounded-b-2xl rounded-2xl w-full -mt-7"
                />
              </footer>
            </div>
            <div className="h-104 overflow-hidden flex flex-col justify-between  rounded-2xl border border-gray-200">
              <header className="p-6">
                <div className="flex items-center justify-between">
                  <span>
                    <MonitorDot className="inline-block me-2 text-pallete-1 size-7" size={18} />
                  </span>
                  <button className="px-4  text-white  text-md flex items-center justify-center font-airblight bg-pallete-1  font-semibold py-2 rounded-full">
                    Solicitar
                  </button>
                </div>
                <h4 className="font-semibold pt-5 text-xl">
                  Sistemas Desktop
                </h4>
                <p className="pt-4  text-zinc-500">
                  Desenvolvemos sistemas desktop robustos e seguros, projetados para otimizar processos empresariais e melhorar a eficiência operacional.
                </p>
              </header>
              <footer className="px-5 mt-10">
                <Image
                  src="/images/desktop-mock.png"
                  alt="Serviço de Sistemas Desktop"
                  width={400}
                  height={200}
                  className="rounded-b-2xl border rounded-2xl border-gray-200 shadow-2xl shadow-gray-400 object-cover w-full h-48"
                />
              </footer>
            </div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url('/images/back_ope2.jpg')`
          }}
          className="max-w-[85%] overflow-hidden rounded-3xl h-96 bg-cover bg-center my-36 mx-auto">
          <div className="w-full p-14 gap-10  h-full backdrop-blur-lg rounded-4xl flex justify-between items-center">
            <header className="max-w-xl">
              <h5 className="text-5xl text-white whitespace-nowrap font-semibold">
                Processo de<br />  Desenvolvimento
              </h5>
              <h6 className="text-lg text-white mt-4">
                Criamos soluções digitais através de um processo estruturado e eficiente, garantindo qualidade e satisfação em cada etapa.
              </h6>
            </header>
            <footer className="grid grid-cols-2 gap-5">
              {
                processSteps.map((item, index) => (
                  <div key={index} className="flex items-center pb-4 border-white/15 backdrop-blur-2xl justify-between border-b gap-6">
                    <div>

                    </div>
                    <div className="flex flex-col text-end items-end">
                      <h4 className="font-semibold text-white text-xl">
                        {item.step}
                      </h4>
                      <p className="text-white/80 mt-1 text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))
              }

            </footer>
          </div>

        </section>
        <section className="mt-48 max-w-[85%] grid grid-cols-1 mx-auto w-full">
          <header className="px-14 text-center mx-auto  max-w-5xl">
            <h5 className="text-5xl font-bold ">
              Escolha a inovação. Escolha a Kriativuz.
            </h5>
            {/* <div className="max-w-3xl mx-auto">
              <p className="pt-6">
                Eleve sua presença digital até 200%
              </p>
            </div> */}
          </header>
          <div className="grid w-full grid-cols-4 gap-3 my-16 max-w-[95%] mx-auto">
            {
              whyChooseUsItems.map((item, index) => (
                <div className=" p-6 bg-white shadow-2xl flex flex-col justify-between rounded-3xl shadow-gray-200 border border-gray-200" key={index}>

                  <header className="border-t pt-4 border-gray-200 mt-3">
                    <h6 className="text-lg">
                      {
                        item.title
                      }
                    </h6>
                    <p className="text-zinc-700 text-[14px] pt-3">
                      {item.description}
                    </p>
                  </header>

                  <div className="mt-5 flex flex-col items-end justify-end h-80 rounded-lg bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${item.img}')`
                    }}
                  >
                    <div className="bg-white px-6 py-2 rounded-tl-xl">
                      <h6 className="font-semibold text-xl text-pallete-1">
                        {
                          index + 1 < 10 ? `0${index + 1}` : index + 1
                        }
                      </h6>
                    </div>
                  </div>
                </div>
              ))
            }

          </div>

        </section>
      </main>


      <footer className="bg-gray-100 pt-6 rounded-base mt-16 shadow-xs">
        <div className="w-full max-w-[85%] mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <Image
                src="/icons/simple_color_1.svg"
                alt="Kriativa Logo"
                width={150}
                height={50}
                className="h-auto w-32  object-contain"
              />
            </Link>
            <ul className="flex flex-wrap items-center gap-6 mb-6 text-sm font-medium text-body sm:mb-0">
              <li>
                <Link href={'/'} className="hover:underline  me-4 md:me-6 transition-all text-zinc-700 hover:text-black">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href={'/'} className="hover:underline  me-4 md:me-6 transition-all text-zinc-700 hover:text-black">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline text-zinc-700 font-medium text-[14px] transition-all hover:text-black">
                  Solicitar Orçamento
                </Link>
              </li>

            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="w-full flex items-center justify-between">
            <span className="block text-sm text-body sm:text-center">© 2025
              <Link href="/" className="hover:underline">
                Kriativuz
              </Link>.
              Todos os direitos reservados.
            </span>
            <div className="flex items-center gap-10 justify-end">
              <Link href="#" className="hover:underline text-zinc-700 font-medium text-[14px] transition-all hover:text-black">
                Termos de Serviço
              </Link>
              <Link href="#" className="hover:underline font-medium text-zinc-700 text-[14px] transition-all hover:text-black">Contacte-nos</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
