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
            <button className="px-5 bg-white text-black border border-gray-200 text-[15px] font-airblight font-semibold py-2.5 rounded-full">
              Contacte-nos
            </button>
            <button className="px-5 bg-pallete-1 text-white text-[15px] font-airblight font-semibold py-2.5 rounded-full">
              Solicitar Orçamento
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
}
