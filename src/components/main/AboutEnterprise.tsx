import aboutEnterprise from '@/assets/img/aboutEnterprise.png'
import Link from 'next/link'

export default function AboutEnterprise() {
     return (
          <section className="flex flex-col items-center justify-center h-screen"
               style={{
                    backgroundImage: `url(${aboutEnterprise.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
               }}>
               <div className="relative z-10 flex flex-col items-center max-w-2xl px-4 space-y-4">
                    <h2 className="text-4xl font-bold">Sobre a empresa</h2>
                    <p className="text-lg w-[67%] text-center">Uma empresa totalmente dedicada e apaixonada pelos nossos clientes!</p>

                    {/* Bloco de Descrição com Fundo Semi-transparente */}
                    <div className="bg-black bg-opacity-60 rounded-xl p-6 text-lg leading-relaxed shadow-lg">
                         <p>
                              A empresa Smart.ia se dedica com um compromisso inabalável com a qualidade e a inovação. Ela não apenas atende às expectativas dos seus clientes, mas frequentemente as supera. Desde sua fundação em 2024, tem sido sinônimo de integridade, dedicação e inovação, contando com uma equipe excepcional.
                         </p>
                    </div>

                    <Link
                         href="/ferramenta"
                         className=" py-2 px-6 text-3xl bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg hover:from-blue-600 hover:to-cyan-500 "
                    >
                         Saiba Mais 
                    </Link>
               </div>
          </section >
     )
}