'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Copy, MessageSquare, Hash, ChevronLeft, ChevronRight, X } from 'lucide-react'

import {
     Accordion,
     AccordionContent,
     AccordionItem,
     AccordionTrigger,
} from "@/components/ui/accordion"
import { useToast } from '@/hooks/use-toast'
import { DialogContent, DialogHeader, DialogTitle } from './ui/dialog'

interface PostInfo {
     title: string
     idea: string
     option?: number
     caption: string
     hashtags: string[]
}


export default function PostCardMobile({ caption, hashtags, idea, option, title }: PostInfo) {
     const { toast } = useToast()
     const [copied, setCopied] = useState<'idea' | 'caption' | 'hashtags' | null>(null)


     const copyText = (text: string, type: 'idea' | 'caption' | 'hashtags') => {
          navigator.clipboard.writeText(text).then(() => {
               toast({
                    description: `${type.charAt(0).toUpperCase() + type.slice(1)} copiado para a área de transferência!`,
               })
               setCopied(type)

               setTimeout(() => setCopied(null), 2000)
          }, (err) => {
               console.error('Não foi possível copiar o texto: ', err)
               toast({
                    description: `Falha ao copiar ${type}. ${err.message}`,
                    variant: "destructive"
               })
          })
     }



     return (
          <DialogContent className="w-72 bg-gray-800 text-white border-none rounded-md">
               <DialogHeader className="mt-2">
                    <DialogTitle className=" text-lg">{title}</DialogTitle>
               </DialogHeader>
               <div className="mt-4 space-y-4">
                    <Accordion type="single" collapsible className="w-full">
                         <AccordionItem value="idea">
                              <AccordionTrigger className="text-left font-semibold">
                                   <div className="flex items-center">
                                        <MessageSquare className="w-4 h-4 mr-2 text-blue-500" />
                                        Ideia
                                   </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                   <p className="mt-2 text-sm">{idea}</p>
                                   <Button
                                        variant="outline"
                                        size="sm"
                                        className="mt-2 text-black"
                                        onClick={() => copyText(idea, 'idea')}
                                   >
                                        <Copy className="w-4 h-4 mr-2" />
                                        {copied === 'idea' ? 'Copiado!' : 'Copiar'}
                                   </Button>
                              </AccordionContent>
                         </AccordionItem>

                         <AccordionItem value="caption">
                              <AccordionTrigger className="text-left font-semibold">
                                   <div className="flex items-center">
                                        <MessageSquare className="w-4 h-4 mr-2 text-green-500" />
                                        Legenda
                                   </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                   <p className="mt-2 text-sm">{caption}</p>
                                   <Button
                                        variant="outline"
                                        size="sm"
                                        className="mt-2 text-black"
                                        onClick={() => copyText(caption, 'caption')}
                                   >
                                        <Copy className="w-4 h-4 mr-2" />
                                        {copied === 'caption' ? 'Copiado!' : 'Copiar'}
                                   </Button>
                              </AccordionContent>
                         </AccordionItem>

                         <AccordionItem value="hashtags">
                              <AccordionTrigger className="text-left font-semibold">
                                   <div className="flex items-center">
                                        <Hash className="w-4 h-4 mr-2 text-purple-500" />
                                        Hashtags
                                   </div>
                              </AccordionTrigger>
                              <AccordionContent>
                                   <div className="flex flex-wrap gap-2 mt-2">
                                        {hashtags.map((tag, index) => (
                                             <span key={index} className="bg-gray-200 px-2 py-1 rounded-full text-sm text-black">
                                                  #{tag}
                                             </span>
                                        ))}
                                   </div>
                                   <Button
                                        variant="outline"
                                        size="sm"
                                        className="mt-2 text-black"
                                        onClick={() => copyText(hashtags.map(tag => `#${tag}`).join(' '), 'hashtags')}
                                   >
                                        <Copy className="w-4 h-4 mr-2" />
                                        {copied === 'hashtags' ? 'Copiado!' : 'Copiar Todas'}
                                   </Button>
                              </AccordionContent>
                         </AccordionItem>
                    </Accordion>
               </div>
          </DialogContent>
     )
}