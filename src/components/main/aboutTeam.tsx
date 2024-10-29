import aboutTeamBg from '@/assets/img/aboutTeam.png'
import Image from "next/image";
import AnaImg from "@/assets/img/member/ana.png";
import DudaImg from "@/assets/img/member/duda.png";
import HendryImg from "@/assets/img/member/hendry.png";
import KevinImg from "@/assets/img/member/kevin.png";
import RaiImg from "@/assets/img/member/rai.png";



type TeamMemberCardProps = {
     name: string;
     role: string;
     src: string;
};

function TeamMemberCard({ name, role, src }: TeamMemberCardProps) {
     return (
          <div className="relative group w-[200px] h-[260px] bg-gray-800 rounded-xl overflow-hidden transition-transform transform hover:scale-105">
               <Image
                    src={src}
                    alt={`Foto de ${name}`}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
               />
               <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white font-semibold text-lg">{name}</p>
                    <p className="text-gray-300 text-sm">{role}</p>
               </div>
          </div>
     );
}

const teamMembers = [
     { id: 1, name: "Ana Lyce", role: "CEO", src: AnaImg.src },
     { id: 2, name: "Maria Eduarda", role: "Diretora de Marketing", src: DudaImg.src },
     { id: 3, name: "Hendry Iasmin", role: "Diretora de Operações", src: HendryImg.src },
     { id: 4, name: "Keven Figueiral", role: "Diretora de Tecnologia", src: KevinImg.src },
     { id: 5, name: "Rhaiana Esquerdo", role: "Diretora de Relações", src: RaiImg.src },
];

export default function AboutTeam() {
     return (
          <section
               className="flex flex-col items-center justify-center bg-gradient-to-r  py-16 px-4 text-white"
               style={{
                    backgroundImage: `url(${aboutTeamBg.src})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
               }}
          >
               <h2 className="text-4xl font-bold mb-4">Sobre nós</h2>
               <p className="text-center text-lg mb-8 max-w-2xl">
                    Somos o time Smart.ia, estudamos juntos e decidimos criar esse projeto.
                    <strong> Clique nas imagens para saber mais.</strong>
               </p>

               <div className="flex flex-wrap justify-center gap-8">
                    {teamMembers.map((member) => (
                         <TeamMemberCard key={member.id} role={member.role} name={member.name} src={member.src} />
                    ))}
               </div>
          </section>
     );
} 