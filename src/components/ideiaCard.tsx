'use client'

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Card, CardContent } from "@/components/ui/card"
import { Lightbulb } from 'lucide-react'

interface IdeasDisplayProps {
     ideas: string[]
}

export default function IdeasDisplay({ ideas = [] }: IdeasDisplayProps) {
     return (
          <Card className="w-full max-w-md bg-gray-800 border-none text-white">
               <CardContent className="p-4">
                    <div className="flex items-center mb-2">
                         <Lightbulb className="w-4 h-4 mr-2 text-yellow-400" />
                         <h3 className="text-sm font-semibold">Ideas</h3>
                    </div>
                    <ScrollArea className="h-24 w-full rounded-md border border-gray-700">
                         {ideas.length > 0 ? (
                              <ul className="space-y-2 p-2">
                                   {ideas.map((idea, index) => (
                                        <li key={index} className="flex items-start">
                                             <span className="inline-block w-4 h-4 mr-2 text-xs text-gray-400">{index + 1}.</span>
                                             <p className="text-sm">{idea}</p>
                                        </li>
                                   ))}
                              </ul>
                         ) : (
                              <p className="text-gray-400 text-sm p-2">No ideas available</p>
                         )}
                         <ScrollBar />
                    </ScrollArea>
               </CardContent>
          </Card>
     )
}