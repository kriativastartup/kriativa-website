"use client";
import Link from "next/dist/client/link";
import Image from "next/image";
import React, { useEffect } from "react";

const privacyData = [
  {
    title: "1. Dados Recolhidos",
    description:
      "Podemos recolher nome, e-mail, telefone, dados empresariais, endereço IP e informações fornecidas através de formulários.",
  },
  {
    title: "2. Finalidade da Recolha",
    description:
      "Os dados são utilizados para prestação de serviços, suporte técnico, comunicação comercial e melhoria contínua dos produtos.",
  },
  {
    title: "3. Partilha de Dados",
    description:
      "Os dados poderão ser partilhados apenas com parceiros tecnológicos ou autoridades legais quando exigido por lei. Não vendemos dados pessoais.",
  },
  {
    title: "4. Segurança",
    description:
      "Adoptamos medidas técnicas e organizacionais adequadas para proteger os dados contra acesso não autorizado, perda ou divulgação indevida.",
  },
  {
    title: "5. Retenção de Dados",
    description:
      "Os dados são mantidos apenas pelo período necessário para cumprimento de obrigações contratuais ou legais.",
  },
  {
    title: "6. Direitos do Utilizador",
    description:
      "O utilizador pode solicitar acesso, correcção ou eliminação dos seus dados pessoais, bem como revogar consentimentos concedidos.",
  },
  {
    title: "7. Cookies",
    description:
      "Utilizamos cookies para melhorar a experiência de navegação e analisar o tráfego do website.",
  },
];

export default function Policy() {
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
            Política de Privacidade
          </h1>
          <p className="text-center text-sm text-gray-500 mt-2">
            Última actualização: Dezembro de 2026
          </p>
        </header>

        <section className="max-w-3xl pt-10 w-full mx-auto">
          <div className="grid grid-cols-1 gap-5">
            <p>
              Esta Política descreve como a Kriativuz recolhe, utiliza e protege
              os dados pessoais dos seus utilizadores e clientes.
            </p>
          </div>

          <div className="grid grid-cols-1 mt-10">
            {privacyData.map((item, index) => (
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
