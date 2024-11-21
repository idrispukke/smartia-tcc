import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useMemo } from "react";
import clsx from "clsx";

interface RowsProps {
     nome: string;
     planos: string[];
     features: string[];
     link: string;
}

const badgeColorMapping: Record<string, string> = {
     Textos: 'bg-blue-500',
     Imagens: 'bg-green-500',
     Artigos: 'bg-yellow-500',
     Links: 'bg-indigo-500',
     Vídeos: 'bg-red-500',
     Fotos: 'bg-pink-500',
     Áudios: 'bg-purple-500',
};

const getBadgeColor = (feature: string) => badgeColorMapping[feature] || 'bg-gray-500';

export default function FeatureMobile({ link, nome, planos, features }: RowsProps) {
     const planosMemo = useMemo(() => planos.map((plan, index) => (
          <div key={index} className="bg-gray-950 p-1 rounded">{plan}</div>
     )), [planos]);

     const featuresMemo = useMemo(() => features.map((feature, index) => (
          <Badge key={index} className={clsx(getBadgeColor(feature), 'text-white')}>
               {feature}
          </Badge>
     )), [features]);

     return (
          <Card className="flex flex-col items-center justify-between bg-gray-800 border-none mt-5 text-white p-2 w-56 ml-11">
               <CardHeader className="flex-1 flex-col justify-center items-center">
                    <CardTitle className="text-lg font-bold">{nome}</CardTitle>
                    <div className="text-sm flex gap-2">
                         {planosMemo}
                    </div>
               </CardHeader>
               <CardContent className="grid grid-cols-2 justify-center items-center gap-3">
                    {featuresMemo}
               </CardContent>
               <Button variant="secondary" className="w-full" asChild>
                    <Link href={link} target="_blank" rel="noopener noreferrer" aria-label={`Learn more about ${nome}`}>
                         Acessar Agora
                    </Link>
               </Button>
          </Card>
     );
}
