import { ChevronRight, Sparkle, SquareKanban } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navbarItemsLinks = [
  { name: "Início", href: "#" },
  { name: "Quem Somos", href: "#" },
  { name: "Serviços", href: "#" },
  { name: "Política", href: "#" },
]

export default function Home() {
  return (
    <div>
      <header>
        <nav className="flex w-full items-center justify-around py-3 border-b border-gray-200">
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

        <section className="max-w-[80%] mx-auto grid grid-cols-[60%_40%] mt-24">
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
              <p className="font-airb-med text-zinc-600 text-2xl">
                Criamos websites, aplicativos mobile e sistemas desktop pensados para performance, design e crescimento do seu negócio.
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
        </section>
      </header>
    </div>
  );
}
