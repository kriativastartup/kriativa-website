"use client";
import Link from "next/dist/client/link";
import Image from "next/image";
import React, { useEffect } from "react";

const aboutData = [
  {
    title: "Nossa Missão",
    description:
      "Desenvolver soluções digitais inovadoras, robustas e adaptadas à nossa realidade, que resolvam problemas reais de negócios e dos cidadãos, impulsionando a transformação digital no país.",
  },
  {
    title: "Nossa Visão",
    description:
      "Ser a principal referência em ecossistemas de tecnologia em Angola, reconhecida pela capacidade de criar produtos escaláveis que geram impacto económico e social.",
  },
  {
    title: "Nossos Valores",
    description:
      "Inovação com Propósito (tecnologia que resolve problemas reais); Resiliência Técnica (soluções offline-first, prontas para o contexto local); Transparência Total (com clientes, parceiros e na governança); Impacto Local (angolana-first, pensada para o mercado).",
  },
];

const infoData = [
  {
    title: "E-mail Comercial",
    description: "comercial@kriativuz.com",
  },
  {
    title: "E-mail de Suporte",
    description: "it.tech@kriativuz.com",
  },
  {
    title: "Telefone / WhatsApp",
    description: "+244 941 350 218",
  },
  {
    title: "Website",
    description: "https://kriativuz.com",
  },
];

export default function About() {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup (MUITO importante)
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <header
        className={`flex fixed top-0 left-0 right-0 px-10 py-4 bg-white ${scrolled && "border-b"}  border-gray-200 items-center justify-center`}
      >
        <Link href={"/"}>
          <Image
            src="/icons/logo_color.svg"
            alt="Kriativa Logo"
            width={150}
            height={0}
            className="size-10  object-contain"
          />
        </Link>
      </header>
      <main className="px-10 pt-28 pb-20">
        <header>
          <h1 className="text-center font-semibold text-5xl">Historial</h1>
        </header>
        <section className="max-w-7xl pt-10 w-full mx-auto">
          <div className="grid grid-cols-1 gap-5">
            <p>
              A Kriativuz é uma empresa angolana de tecnologia, resultado da
              fusão entre WACAPA e Kriativa, especializada em desenvolvimento de
              software, infraestrutura IT e cloud computing. Somos uma equipa
              multidisciplinar de profissionais apaixonados por tecnologia, com
              experiência em arquitectura de sistemas, desenvolvimento de
              software, gestão de infraestruturas, cloud computing,
              administração e finanças. Acreditamos que a tecnologia só faz
              sentido quando resolve problemas reais. Por isso, cada solução que
              criamos é pensada desde o início para funcionar no contexto
              angolano — com ou sem internet, com pagamentos locais, com
              interfaces intuitivas e com preços acessíveis. O nosso nome
              reflecte a nossa essência: Kriativuz é a união entre a
              criatividade (kriativ) e o universo (uz). Porque acreditamos que,
              com criatividade, podemos explorar infinitas possibilidades e
              levar inovação a todos os cantos do país. <br />
              <br /> A Kriativuz nasceu da visão e do propósito de duas empresas
              angolanas que decidiram unir forças para criar algo maior: WACAPA
              e Kriativa. A WACAPA trazia consigo uma sólida experiência em
              infraestrutura tecnológica, cloud computing e arquitectura de
              sistemas robustos. A Kriativa, por sua vez, destacava-se pela
              criatividade, inovação e capacidade de desenvolver produtos
              digitais com foco na experiência do utilizador. <br />
              <br /> Juntas, perceberam que o mercado angolano carecia de
              soluções tecnológicas verdadeiramente adaptadas à sua realidade —
              ferramentas que funcionassem com ou sem internet, que integrassem
              pagamentos locais, que falassem a língua e respeitassem a cultura
              de quem as utiliza. Foi assim que, em Dezembro de 2025, surgiu a
              Kriativuz — uma fusão de &quot;criatividade&quot; com
              &quot;universo&quot;, representando a nossa crença de que a
              tecnologia pode expandir horizontes e criar novas possibilidades,
              mesmo nos contextos mais desafiantes.
              <br />
              <br />
              Hoje, a Kriativuz é uma empresa 100% angolana, especializada em
              desenvolvimento de software, infraestrutura IT e cloud, com um
              portfólio que inclui produtos próprios como o SamoraFit, SIENA,
              KWA e SIMBU, além de serviços de desenvolvimento web, mobile e
              desktop para empresas e instituições. A nossa história é feita por
              angolanos, para angolanos. Mas o nosso olhar está sempre no futuro
              — e no cosmos de possibilidades que a tecnologia pode oferecer
            </p>
          </div>
          <div className="grid grid-cols-1 mt-10">
            {aboutData.map((item, index) => (
              <div
                key={index}
                className="border-t flex-wrap gap-5 py-3 flex justify-between border-gray-200"
              >
                <h2 className="font-semibold">{item.title}</h2>
                <div className="max-w-2xl">
                  <p className="text-sm text-zinc-900">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div>
            <header className="text-center pt-20">
              <h3 className="text-4xl font-semibold">Contactos Oficiais</h3>
            </header>
            <div className="grid grid-cols-1 mt-10">
              {infoData.map((info, index) => (
                <div
                  key={index}
                  className="border-t flex-wrap gap-5 py-3 flex justify-between border-gray-200"
                >
                  <h2 className="font-semibold">{info.title}</h2>
                  <div className="max-w-2xl">
                    <p className="text-sm text-zinc-950">{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
