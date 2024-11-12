'use client'

import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Copy } from 'lucide-react'
import { useToast } from "@/components/ui/toaster"

interface HashtagsComponentProps {
  hashtags?: string[]
}

export default function HashtagsComponent({ hashtags = [] }: HashtagsComponentProps) {
  const { toast } = useToast()

  const copyHashtags = () => {
    if (hashtags.length === 0) {
      toast({
        description: "No hashtags to copy.",
        variant: "destructive"
      })
      return
    }

    const hashtagString = hashtags.join(' ')
    navigator.clipboard.writeText(hashtagString).then(() => {
      toast({
        description: "Hashtags copied to clipboard!",
      })
    }, (err) => {
      console.error('Could not copy text: ', err)
      toast({
        description: "Failed to copy hashtags.",
        variant: "destructive"
      })
    })
  }

  return (
    <div className="bg-gray-800 rounded-md p-3 text-white  w-full max-w-md">
      <div className="flex items-center  justify-between mb-2">
        <h3 className="text-sm font-semibold mr-2">Hashtags</h3>
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-white hover:text-teal-300 p-1 h-auto"
          onClick={copyHashtags}
        >
          <Copy className="h-4 w-4" />
          <span className="sr-only">Copy All</span>
        </Button>
      </div>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border border-gray-700">
        <div className="flex p-4">
          {hashtags.length > 0 ? (
            hashtags.map((tag, index) => (
              <span key={index} className="bg-gray-700 px-2 py-1 rounded-md text-sm mr-2 inline-block">
                {tag}
              </span>
            ))
          ) : (
            <span className="text-gray-400">No hashtags available</span>
          )}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}