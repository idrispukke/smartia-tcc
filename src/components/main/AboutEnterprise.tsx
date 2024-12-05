import aboutEnterprise from '@/assets/img/background/aboutEnterprise.png'

export default function AboutEnterprise() {
     return (
          <section className="flex flex-col items-center justify-center h-screen"
               style={{
                    backgroundImage: `url(${aboutEnterprise.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
               }}>
               <div className="relative z-10 flex flex-col items-center h-screen  pt-10 mdpt-16 pb-2  max-w-2xl px-4 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold">Sobre a empresa</h2>
                    <p className="md:text-lg  md:w-[67%] text-center">Uma empresa dedicada e apaixonada pelos nossos clientes!</p>

                    {/* Bloco de Descrição com Fundo Semi-transparente */}
                    <div className="bg-black bg-opacity-60 rounded-xl p-6 md:text-lg text-justify leading-relaxed shadow-lg">
                         <p>
                              Nossa empresa, a Smart.ia, tem um compromisso com a qualidade e a inovação. Não apenas atendemos às expectativas dos clientes, mas frequentemente as superamos. Desde nossa fundação em 2024, temos sido sinônimo de integridade, dedicação e inovação, contando com uma equipe excepcional.
                         </p>
                    </div>
               </div>
          </section >
     )
}
