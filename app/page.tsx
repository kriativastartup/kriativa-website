"use client";

import { Check, ChevronRight, Globe, MonitorDot, Proportions, Sparkle, SquareKanban } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navbarItemsLinks = [
  { name: "Início", href: "#" },
  { name: "Quem Somos", href: "#" },
  { name: "Serviços", href: "#" },
  { name: "Política", href: "#" },
]

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
        <div className="flex w-full items-center justify-around py-3 border-b border-gray-200">
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
              <button className="px-4 bg-pallete-1 text-white text-[14px] font-airblight font-semibold py-2.5 rounded-full">
                Solicitar Orçamento
              </button>
            </div>
          </nav>
        </div>

        <section className="max-w-[85%] mx-auto grid gap-14 items-start grid-cols-[63%_32%] mt-24">
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
                key={index}
                initial={{ x: 80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -80, opacity: 0 }}
                transition={{
                  duration: 0.45,
                  ease: "easeInOut",
                }}
                className="relative w-full"
              >
                <Image
                  src={current.image}
                  alt={current.label}
                  width={600}
                  height={300}
                  className="rounded-2xl"
                />

                {/* Label flutuante */}
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
                    Kriativa</span>, sua parceira em inovação digital.
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
      </main>
    </div>
  );
}
