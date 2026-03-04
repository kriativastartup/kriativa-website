"use client";
import Link from "next/dist/client/link";
import Image from "next/image";
import React, { useEffect } from "react";

const termsData = [
  {
    title: "1. Aceitação dos Termos",
    description:
      "Ao aceder e utilizar os serviços da Kriativuz, o utilizador declara que leu, compreendeu e concorda com os presentes Termos de Serviço. Caso não concorde com qualquer condição aqui descrita, deverá cessar imediatamente a utilização dos nossos serviços.",
  },
  {
    title: "2. Serviços Prestados",
    description:
      "A Kriativuz presta serviços de desenvolvimento de software (web, mobile e desktop), infraestrutura IT, cloud computing, além de desenvolver e manter produtos próprios digitais. Os serviços podem ser actualizados ou modificados para melhoria contínua.",
  },
  {
    title: "3. Responsabilidades do Utilizador",
    description:
      "O utilizador compromete-se a utilizar os serviços de forma lícita, ética e responsável, não praticando actividades que possam comprometer a segurança, integridade ou funcionamento dos sistemas.",
  },
  {
    title: "4. Propriedade Intelectual",
    description:
      "Todo o conteúdo, software, marcas, design e documentação pertencem à Kriativuz, salvo indicação em contrário. É proibida a reprodução, distribuição ou exploração sem autorização prévia e por escrito.",
  },
  {
    title: "5. Limitação de Responsabilidade",
    description:
      "A Kriativuz não será responsável por danos indirectos, interrupções causadas por terceiros ou uso indevido dos sistemas. Os serviços são fornecidos conforme disponibilidade técnica.",
  },
  {
    title: "6. Pagamentos e Contratos",
    description:
      "Serviços contratados serão regidos por contrato específico. O não cumprimento de obrigações financeiras poderá resultar na suspensão ou cancelamento do serviço.",
  },
  {
    title: "7. Cancelamento ou Suspensão",
    description:
      "A Kriativuz poderá suspender ou encerrar contas que violem estes termos ou pratiquem actividades ilegais.",
  },
  {
    title: "8. Alterações aos Termos",
    description:
      "Estes Termos podem ser actualizados periodicamente. A continuação do uso dos serviços implica aceitação das alterações.",
  },
];

export default function Terms() {
  const [scrolled, setScrolled] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <header
        className={`flex fixed top-0 left-0 right-0 px-10 py-4 bg-white ${
          scrolled && "border-b"
        } border-gray-200 items-center justify-center`}
      >
        <Link href={"/"}>
          <Image
            src="/icons/logo_color.svg"
            alt="Kriativuz Logo"
            width={150}
            height={0}
            className="size-10 object-contain"
          />
        </Link>
      </header>

      <main className="px-10 pt-28 pb-20">
        <header>
          <h1 className="text-center font-semibold text-5xl">
            Termos de Serviço
          </h1>
          <p className="text-center text-sm text-gray-500 mt-2">
            Última actualização: Dezembro de 2026
          </p>
        </header>

        <section className="max-w-5xl pt-10 w-full mx-auto">
          <div className="grid grid-cols-1 gap-5">
            <p>
              Estes Termos de Serviço regulam a utilização dos serviços
              prestados pela Kriativuz, empresa angolana especializada em
              desenvolvimento de software, infraestrutura IT e cloud computing.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-10">
            {termsData.map((item, index) => (
              <div
                key={index}
                className="border-t flex-col gap-5 py-4 flex justify-between border-gray-200"
              >
                <h2 className="font-semibold">{item.title}</h2>
                <div className="max-w-full">
                  <p className="text-sm text-zinc-900">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-10 text-sm text-gray-700">
            <p className="text-black">
              Para questões relacionadas com estes termos
            </p>
            <br />
            comercial@kriativuz.com
          </div>
        </section>
      </main>
    </div>
  );
}
