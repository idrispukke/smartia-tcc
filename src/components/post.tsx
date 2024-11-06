'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Copy, MessageSquare, Hash } from 'lucide-react'
import { useToast } from "@/components/ui/toaster"

interface PostGeneratorProps {
     title: string
     idea: string
     caption: string
     option: number
     hashtags: string[]
}

export default function PostGenerator({ title, idea, option, caption, hashtags }: PostGeneratorProps) {
     const { toast } = useToast()
     const [copied, setCopied] = useState<'idea' | 'caption' | 'hashtags' | null>(null)

     const copyText = (text: string, type: 'idea' | 'caption' | 'hashtags') => {
          navigator.clipboard.writeText(text).then(() => {
               toast({
                    description: `${type.charAt(0).toUpperCase() + type.slice(1)} copied to clipboard!`,
               })
               setCopied(type)
               setTimeout(() => setCopied(null), 2000)
          }, (err) => {
               console.error('Could not copy text: ', err)
               toast({
                    description: `Failed to copy ${type}.`,
                    variant: "destructive"
               })
          })
     }

     return (
          <Card className="w-[90%] bg-gray-800 border-none text-white">
               <CardHeader>
                    <CardTitle className="text-white/30 text-sm">Opção {option}</CardTitle>
                    <CardTitle className="text-lg font-bold">{title}</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                    {/* Ideia */}
                    <div>
                         <div className="flex items-center justify-between mb-2">
                              <h3 className="text-sm font-semibold flex items-center">
                                   <MessageSquare className="w-4 h-4 mr-2 text-blue-400" />
                                   Ideia
                              </h3>
                              <Button
                                   variant="ghost"
                                   size="sm"
                                   className={`text-white hover:text-blue-300 p-1 h-auto ${copied === 'idea' ? 'text-blue-300' : ''}`}
                                   onClick={() => copyText(idea, 'idea')}
                              >
                                   <Copy className="h-4 w-4" />
                                   <span className="sr-only">Copy Idea</span>
                              </Button>
                         </div>
                         <div className=" w-full rounded-md border border-gray-700">
                              <p className="text-sm p-2">{idea}</p>
                         </div>
                    </div>

                    {/* Legenda */}
                    <div>
                         <div className="flex items-center justify-between mb-2">
                              <h3 className="text-sm font-semibold">Legenda</h3>
                              <Button
                                   variant="ghost"
                                   size="sm"
                                   className={`text-white hover:text-teal-300 p-1 h-auto ${copied === 'caption' ? 'text-teal-300' : ''}`}
                                   onClick={() => copyText(caption, 'caption')}
                              >
                                   <Copy className="h-4 w-4" />
                                   <span className="sr-only">Copy Caption</span>
                              </Button>
                         </div>
                         <div className="h-24 w-full rounded-md border border-gray-700">
                              <p className="text-sm p-2">{caption}</p>
                         </div>
                    </div>

                    {/* Hashtags */}
                    <div>
                         <div className="flex items-center justify-between mb-2">
                              <h3 className="text-sm font-semibold flex items-center">
                                   <Hash className="w-4 h-4 mr-2 text-purple-400" />
                                   Hashtags
                              </h3>
                              <Button
                                   variant="ghost"
                                   size="sm"
                                   className={`text-white hover:text-purple-300 p-1 h-auto ${copied === 'hashtags' ? 'text-purple-300' : ''}`}
                                   onClick={() => copyText(hashtags.join(' '), 'hashtags')}
                              >
                                   <Copy className="h-4 w-4" />
                                   <span className="sr-only">Copy Hashtags</span>
                              </Button>
                         </div>
                         <ScrollArea className="h-24 w-full rounded-md border border-gray-700 p-2">
                              <p className="text-sm">{hashtags.map(tag => `${tag}`).join(' ')}</p>
                         </ScrollArea>
                    </div>
               </CardContent>
          </Card>
     )
}
