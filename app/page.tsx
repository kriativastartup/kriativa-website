"use client";

import { Check, ChevronRight, Globe, Instagram, Linkedin, MonitorDot, Proportions, Sparkle, SquareKanban } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FormSheet from "@/components/app-components/form-sheet";
import { imagesSlice, navbarItemsLinks, processSteps, solutionsItems, whyChooseUsItems } from "./main";

export default function Home() {

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<"websites" | "mobile_apps" | "desktop_apps">("websites");

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagesSlice.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const current = imagesSlice[index];
  const Icon = current.icon;

  return (
    <div>
      <header>
        <FormSheet open={open} onOpenChange={setOpen}
          service={selectedService}
        />
        <motion.div
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}

          className="flex fixed top-0 left-0 bg-white z-50 w-full items-center justify-around py-3 border-b border-gray-200">
          <nav className="pot:max-w-[85%] pot:px-0 py-2 px-6 mx-auto w-full flex items-center justify-between">
            <div className="flex items-end gap-16">
              <Image
                src="/icons/simple_color_1.svg"
                alt="Kriativa Logo"
                width={150}
                height={50}
                className="h-auto w-32  object-contain"
              />
              <div className="pot:flex hidden items-center justify-center gap-14">
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
              <button className="px-4 pot:inline-flex hidden bg-white text-black  border-gray-200 text-[14px] font-airblight font-semibold py-2.5 rounded-full">
                Contacte-nos
              </button>
              <button
                onClick={() => setOpen(true)}
                className="px-4 pot:inline-flex hidden transition-all hover:bg-pallete-1/80 bg-pallete-1 text-white text-[14px] font-airblight font-semibold py-2.5 rounded-full">
                Solicitar Orçamento
              </button>
            </div>
          </nav>
        </motion.div>

        <section className="pot:max-w-[85%] pot:px-0 px-6 mx-auto grid gap-14 items-center justify-center grid-cols-1 pot:grid-cols-[63%_32%] mt-32 pot:mt-48">
          <div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{
                once: false
              }}
            >
              <button
                onClick={() => setOpen(true)}
                className="flex items-center text-pallete-7 mb-6 border border-pallete-7/10 text-[15px] font-airb-med justify-center bg-pallete-6/40 rounded-full px-4 py-2">
                <Sparkle className="inline-block mr-1" size={16} />
                Solicite um orçamento gratuito
                <ChevronRight className="inline-block ml-1" size={16} />
              </button>
            </motion.div>
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{
                once: false
              }}
              className="pot:text-6xl ret:text-5xl text-4xl font-bold">
              Transformamos ideias em soluções digitais de alto impacto
            </motion.h1>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{
                once: false
              }}
              className="max-w-3xl pt-7">
              <p className="font-airb-med text-zinc-600 text-lg pot:text-xl">
                Criamos websites, aplicativos mobile e sistemas desktop pensados para performance, design e crescimento do seu negócio.
                Impulsione sua presença digital conosco agora e hoje!
              </p>
            </motion.div>
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{
                once: false
              }}
              className="flex mt-10 flex-wrap items-center gap-4">
              <button
                onClick={() => setOpen(true)}
                className="px-5 ret:w-auto w-full text-white transition-all hover:bg-pallete-1/80 text-md flex items-center justify-center font-airblight bg-pallete-1  font-semibold py-3 rounded-full">
                <SquareKanban className="inline-block me-2" size={16} />
                Idealize seu projeto
              </button>
              <button className="px-5 ret:w-auto w-full text-black transition-all hover:bg-gray-100 text-md font-airblight border border-gray-200  font-semibold py-3 rounded-full">
                Enviar mensagem
              </button>
            </motion.div>
          </div>
          <section className="relative   w-full">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={current.image}
                initial={{ x: -80, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 80, opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="relative flex items-center pot:items-start pot:justify-start justify-center flex-col w-full"
              >
                <div className="relative w-full pot:w-[24rem] h-100 pot:h-120">
                  <Image
                    src={current.image}
                    alt={current.label}
                    fill
                    className="pot:object-cover rounded-2xl"
                    sizes="384px"
                  />
                </div>
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className={`px-4 py-3 rounded-full pot:absolute pot:bottom-36 pot:mt-0 mt-3  pot:-left-28 ${current.bg}`}
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

      <main className="pot:mt-20 mt-28">
        <section className="relative  w-full pot:h-dvh overflow-hidden">
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
          <div className="absolute inset-0 bg-linear-to-b from-black pot:from-black/80 via-black/60 pot:via-black/30 to-black/90" />
          <section className="relative z-10 flex flex-col gap-20 h-full items-end justify-between max-w-[85%] mx-auto py-14">
            <header className="w-full flex items-center justify-between gap-4">
              <motion.h6
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{
                  once: false
                }}
                className="text-white whitespace-nowrap font-semibold">
                SOBRE NÓS
              </motion.h6>
              <motion.hr
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{
                  once: false
                }}

                className="w-full border-white/20" />
            </header>
            <div className="w-full flex gap-20 flex-wrap items-start justify-between">
              <div className="max-w-xl">
                <motion.h3
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{
                    once: false
                  }}
                  className="pot:text-5xl ret:text-4xl text-3xl font-semibold text-white">
                  <span className="text-pallete-2">
                    Kriativuz</span>, sua parceira em inovação digital.
                </motion.h3>
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{
                    once: false
                  }}
                >
                  <h6 className="text-white mt-4 mb-2 text-md">
                    Somos uma empresa focada no desenvolvimento de soluções digitais modernas, funcionais e seguras. Ajudamos marcas e negócios a
                    fortalecerem a sua presença digital através de tecnologia bem aplicada.
                  </h6>
                  <button
                    onClick={() => setOpen(true)}
                    className="px-5 mt-9 transition-all hover:bg-pallete-2/80 text-white  text-md flex items-center justify-center font-airblight bg-pallete-2  font-semibold py-3 rounded-full">
                    Solicite um Orçamento
                  </button>
                </motion.div>
              </div>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{
                  once: false
                }}
                className="">
                <header className="">
                  <h4 className="font-semibold text-white text-xl ret:text-2xl">
                    Somos diferentes, somos Kriativuz.
                  </h4>
                </header>
                <div className="mt-5 flex items-start flex-col gap-4">
                  {
                    solutionsItems.map((item, index) => (
                      <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                        viewport={{
                          once: false
                        }}
                        key={index}
                        className=" flex items-center justify-center rounded-full">
                        <Check className="inline-block me-2 text-pallete-1" size={16} />
                        <h6 className="text-white font-medium text-lg">{item.title}</h6>
                      </motion.div>
                    ))
                  }
                </div>
              </motion.div>
            </div>
          </section>
        </section>

        <section className="mt-36">
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{
              once: false
            }}
            className="max-w-xl mx-auto text-center">
            <h3
              className="pot:text-5xl text-4xl font-bold text-gray-900">
              Serviços
            </h3>
          </motion.header>
          <div className="max-w-6xl pot:px-0 px-5 mb-20 mx-auto mt-14 grid ret:grid-cols-2 grid-cols-1 pot:grid-cols-3 gap-5">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{
                once: false
              }}
              className="h-104 overflow-hidden flex flex-col justify-between  rounded-2xl border border-gray-200">
              <header className="p-6">
                <div className="flex items-center justify-between">
                  <span>
                    <Globe className="inline-block me-2 text-pallete-1 size-7" size={18} />
                  </span>
                  <button
                    onClick={() => {
                      setSelectedService('websites')
                      setOpen(true)
                    }}
                    className="px-4 transition-all hover:bg-pallete-1/80  text-white  text-md flex items-center justify-center font-airblight bg-pallete-1  font-semibold py-2 rounded-full">
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
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{
                once: false
              }}
              className="h-104 overflow-hidden flex flex-col justify-between  rounded-2xl border border-gray-200">
              <header className="p-6">
                <div className="flex items-center justify-between">
                  <span>
                    <Proportions className="inline-block me-2 text-pallete-1 size-7" size={18} />
                  </span>
                  <button
                    onClick={() => {
                      setSelectedService('mobile_apps')
                      setOpen(true)
                    }}
                    className="px-4  text-white transition-all hover:bg-pallete-1/80 text-md flex items-center justify-center font-airblight bg-pallete-1  font-semibold py-2 rounded-full">
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
            </motion.div>
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1 }}
              viewport={{
                once: false
              }}
              className="h-104 overflow-hidden flex flex-col justify-between  rounded-2xl border border-gray-200">
              <header className="p-6">
                <div className="flex items-center justify-between">
                  <span>
                    <MonitorDot className="inline-block me-2 text-pallete-1 size-7" size={18} />
                  </span>
                  <button
                    onClick={() => {
                      setOpen(true)
                      setSelectedService('desktop_apps')
                    }}
                    className="px-4  text-white transition-all hover:bg-pallete-1/80  text-md flex items-center justify-center font-airblight bg-pallete-1  font-semibold py-2 rounded-full">
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
            </motion.div>
          </div>
        </section>

        <section
          style={{
            backgroundImage: `url('/images/back_ope2.jpg')`
          }}
          className="pot:max-w-[85%] w-[95%] overflow-hidden rounded-3xl pot:h-96 bg-cover bg-center my-36 mx-auto">
          <div className="w-full p-10 pot:p-14 gap-10  h-full backdrop-blur-lg rounded-4xl flex flex-wrap justify-between items-center">
            <header className="pot:max-w-xl w-full">
              <motion.h5
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{
                  once: false
                }}
                className="pot:text-5xl text-3xl ret:text-4xl text-white whitespace-nowrap font-semibold">
                Processo de<br />  Desenvolvimento
              </motion.h5>
              <motion.h6
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{
                  once: false
                }}
                className="pot:text-lg text-white mt-4">
                Criamos soluções digitais através de um processo estruturado e eficiente, garantindo qualidade e satisfação em cada etapa.
              </motion.h6>
            </header>
            <footer className="grid grid-cols-1 ret:grid-cols-2 gap-5 pot:grid-cols-3">
              {
                processSteps.map((item, index) => (
                  <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                    viewport={{
                      once: false
                    }}
                    key={index} className="flex items-center pb-4 border-white/15 pot:justify-between border-b gap-6">
                    <div className="pot:inline-flex hidden" />
                    <div className="flex flex-col pot:text-end pot:items-end">
                      <h4 className="font-semibold text-white text-xl">
                        {item.step}
                      </h4>
                      <p className="text-white/80 mt-1 text-[15px]">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))
              }
            </footer>
          </div>

        </section>
        <section className="mt-48 pot:max-w-[85%] pot:px-0 px-5 grid grid-cols-1 mx-auto w-full">
          <motion.header
            initial={{ y: -20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{
              once: false
            }}
            className="pot:px-14 text-center mx-auto  max-w-5xl">
            <h5 className="pot:text-5xl text-3xl ret:text-4xl font-bold ">
              Escolha a inovação. Escolha a Kriativuz.
            </h5>
          </motion.header>
          <div className="grid w-full ret:grid-cols-2 grid-cols-1 pot:grid-cols-4 gap-3 my-16 max-w-[95%] mx-auto">
            {
              whyChooseUsItems.map((item, index) => (
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  viewport={{
                    once: false
                  }}
                  className=" p-6 bg-white shadow-2xl flex flex-col justify-between rounded-3xl shadow-gray-200 border border-gray-200" key={index}>
                  <motion.header
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{
                      once: false
                    }}
                    className="border-t pt-4 border-gray-200 mt-3">
                    <h6 className="text-lg font-semibold">
                      {
                        item.title
                      }
                    </h6>
                    <p className="text-zinc-700 text-[14px] pt-3">
                      {item.description}
                    </p>
                  </motion.header>

                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    viewport={{
                      once: false
                    }}
                    className="mt-5 flex flex-col items-end justify-end h-80 rounded-lg bg-cover bg-center"
                    style={{
                      backgroundImage: `url('${item.img}')`
                    }}
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      viewport={{
                        once: false
                      }}
                      className="bg-white px-6 py-2 rounded-tl-xl">
                      <h6 className="font-semibold text-xl text-pallete-1">
                        {
                          index + 1 < 10 ? `0${index + 1}` : index + 1
                        }
                      </h6>
                    </motion.div>
                  </motion.div>
                </motion.div>
              ))
            }
          </div>
        </section>
      </main>

      <footer className="bg-gray-100 pt-6 rounded-base mt-16 shadow-xs">
        <div className="w-full pot:max-w-[85%] pot:p-4 p-10 mx-auto  md:py-8">
          <div className="flex items-center flex-wrap gap-10 justify-between">
            <div className="flex pot:items-end gap-x-10 gap-y-3 pot:flex-row flex-col">
              <Link href="https://kriativuz.com/" className="flex items-center mb-4 pot:mb-0 space-x-3 rtl:space-x-reverse">
                <Image
                  src="/icons/simple_color_1.svg"
                  alt="Kriativa Logo"
                  width={150}
                  height={50}
                  className="h-auto w-32  object-contain"
                />
              </Link>
              <div className="flex items-end gap-5">
                <Link href="#" className="text-pallete-1 hover:text-pallete-3 transition-all">
                  <Linkedin className="size-6" />
                </Link>
                <Link href="#" className="text-pallete-1 hover:text-pallete-3 transition-all">
                  <Instagram className="size-5" />
                </Link>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-6 mb-6 text-sm font-medium text-body sm:mb-0">
              <li>
                <Link href={'/'} className="hover:underline font-semibold me-4 md:me-6 transition-all text-zinc-700 hover:text-black">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href={'/'} className="hover:underline font-semibold  me-4 md:me-6 transition-all text-zinc-700 hover:text-black">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:underline font-semibold text-zinc-700  text-[14px] transition-all hover:text-black">
                  Solicitar Orçamento
                </Link>
              </li>

            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="w-full flex flex-wrap gap-8 items-center justify-between">
            <span className="block text-sm text-body sm:text-center">© 2025
              <Link href="/" className="hover:underline">
                Kriativuz
              </Link>.
              Todos os direitos reservados.
            </span>
            <div className="flex items-center gap-10 justify-end">
              <Link href="#" className="hover:underline font-semibold text-zinc-700 text-[14px] transition-all hover:text-black">
                Termos de Serviço
              </Link>
              <Link href="#" className="hover:underline font-semibold text-zinc-700 text-[14px] transition-all hover:text-black">Contacte-nos</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
