import Link from "next/link"
import { TableCell, TableRow } from "./ui/table"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"

interface RowsProps {
    nome: string,
    planos: string[],
    usos: string[],
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

export default function RowTable({ link, nome, planos, usos }: RowsProps) {
    return (
        <TableRow  className="w-full bg-zinc-900 px-2 mt-1 py-2 text-center items-center">
            <TableCell className="p-2 font-thin text-sm"> {nome}</TableCell>
            <TableCell>
                {
                    planos.map((plano, index) => {
                        return (
                            <Badge
                                key={index}
                                className={`mr-1 text-xs ${plano === 'Gratuito' ? 'bg-green-500/30' : plano === 'Plano pago' ? 'bg-blue-500/30' : 'bg-slate-500'}`}
                            >
                                {plano}
                            </Badge>
                        )
                    })
                }
            </TableCell>
            <TableCell className="grid grid-cols-2 gap-1">
                {
                    usos.map((uso, index) => {
                        return (
                            <Badge key={index} className={`text-xs text-center ${getBadgeColor(uso)}`}>
                                {uso}
                            </Badge>
                        )
                    })
                }
            </TableCell>
            <TableCell>
                <Button className="text-xs py-1 px-2">
                    <Link href={link}>
                        Acessar
                    </Link>
                </Button>
            </TableCell>
        </TableRow>

    )
}

