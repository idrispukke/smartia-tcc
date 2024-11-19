import Link from "next/link"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"

interface RowsProps {
    nome: string,
    planos: string[],
    features: string[],
    link: string
}

const getBadgeColor = (uso: string) => {
    switch (uso) {
        case 'Textos':
            return 'bg-blue-500';      // Azul para Textos
        case 'Imagens':
            return 'bg-green-500';     // Verde para Imagens
        case 'Artigos':
            return 'bg-yellow-500';    // Amarelo para Artigos
        case 'Links':
            return 'bg-indigo-500';    // Azul escuro para Links
        case 'Vídeos':
            return 'bg-red-500';       // Vermelho para Vídeos
        case 'Fotos':
            return 'bg-pink-500';      // Rosa para Fotos
        case 'Áudios':
            return 'bg-purple-500';    // Roxo para Áudios
        default:
            return 'bg-gray-500';      // Cor cinza como fallback
    };
}

export default function RowTable({ link, nome, planos, features }: RowsProps) {
    return (
        <Card className="w-full mt-2 bg-[#1a1b23] border-none text-white">
            <CardContent className="p-1 ">
                <div className="flex items-center justify-between space-x-4">
                    <div className="flex-shrink-0 w-1/5">
                        <h2 className=" ml-3 text-xl font-semibold">{nome}</h2>
                    </div>
                    <div className="flex-shrink-0 w-1/5">
                        <ul className=" text-sm text-muted-foreground">
                            {planos.map((plan, index) => (
                                <li className="text-white" key={index}>{plan}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex-grow w-1/5">
                        <div className="grid grid-cols-2 gap-1">
                            {features.map((feature, index) => (
                                <Badge key={index} className={`text-sm ${getBadgeColor(feature)}`}>
                                    {feature}
                                </Badge>
                            ))}
                        </div>
                    </div>
                    <div className="flex-shrink-0 w-1/5">
                        <Button className="w-full" asChild>
                            <Link href={link}>Learn More</Link>
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

