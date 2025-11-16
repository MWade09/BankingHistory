'use client'

import { useState, useEffect } from 'react'
import { Search, X, BookOpen, Calendar, User, AlertCircle } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { chapterContents, type ChapterContent, type ChapterSection, type KeyFigure } from '@/data/chapters'
import { timelineEvents, type TimelineEvent } from '@/data/timeline'
import Link from 'next/link'

interface SearchResult {
  type: 'chapter' | 'section' | 'quote' | 'timeline' | 'figure'
  title: string
  description: string
  chapter: string
  chapterTitle: string
  relevance: number
  url: string
  context?: string
}

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)

  // Perform search
  useEffect(() => {
    if (query.length < 2) {
      setResults([])
      return
    }

    setIsSearching(true)
    const searchResults: SearchResult[] = []
    const lowerQuery = query.toLowerCase()

    // Search chapters
    chapterContents.forEach((chapter: ChapterContent) => {
      // Search chapter title and introduction
      if (chapter.title.toLowerCase().includes(lowerQuery) || 
          chapter.introduction.toLowerCase().includes(lowerQuery)) {
        const relevance = chapter.title.toLowerCase().includes(lowerQuery) ? 10 : 5
        searchResults.push({
          type: 'chapter',
          title: chapter.title,
          description: chapter.introduction.substring(0, 200) + '...',
          chapter: chapter.slug,
          chapterTitle: chapter.title,
          relevance,
          url: `/chapter/${chapter.slug}`
        })
      }

      // Search sections
      chapter.sections.forEach((section: ChapterSection) => {
        const titleMatch = section.title.toLowerCase().includes(lowerQuery)
        const contentMatch = section.content.toLowerCase().includes(lowerQuery)
        const significanceMatch = section.significance?.toLowerCase().includes(lowerQuery)

        if (titleMatch || contentMatch || significanceMatch) {
          const relevance = titleMatch ? 8 : contentMatch ? 6 : 4
          
          // Extract context around the match
          let context = ''
          if (contentMatch) {
            const index = section.content.toLowerCase().indexOf(lowerQuery)
            const start = Math.max(0, index - 50)
            const end = Math.min(section.content.length, index + lowerQuery.length + 100)
            context = '...' + section.content.substring(start, end) + '...'
          }

          searchResults.push({
            type: 'section',
            title: section.title,
            description: context || section.content.substring(0, 150) + '...',
            chapter: chapter.slug,
            chapterTitle: chapter.title,
            relevance,
            url: `/chapter/${chapter.slug}#${section.title.toLowerCase().replace(/\s+/g, '-')}`,
            context
          })
        }

        // Search quotes
        section.quotes?.forEach((quote: string) => {
          if (quote.toLowerCase().includes(lowerQuery)) {
            searchResults.push({
              type: 'quote',
              title: section.title,
              description: quote.substring(0, 200) + (quote.length > 200 ? '...' : ''),
              chapter: chapter.slug,
              chapterTitle: chapter.title,
              relevance: 7,
              url: `/chapter/${chapter.slug}#${section.title.toLowerCase().replace(/\s+/g, '-')}`,
              context: quote
            })
          }
        })

        // Search details
        section.details?.forEach((detail: string) => {
          if (detail.toLowerCase().includes(lowerQuery)) {
            searchResults.push({
              type: 'section',
              title: section.title,
              description: detail,
              chapter: chapter.slug,
              chapterTitle: chapter.title,
              relevance: 5,
              url: `/chapter/${chapter.slug}#${section.title.toLowerCase().replace(/\s+/g, '-')}`,
              context: detail
            })
          }
        })
      })

      // Search key figures
      chapter.keyFigures?.forEach((figure: KeyFigure) => {
        if (figure.name.toLowerCase().includes(lowerQuery) || 
            figure.description.toLowerCase().includes(lowerQuery)) {
          searchResults.push({
            type: 'figure',
            title: figure.name,
            description: figure.description.substring(0, 200) + '...',
            chapter: chapter.slug,
            chapterTitle: chapter.title,
            relevance: 6,
            url: `/chapter/${chapter.slug}#key-figures`
          })
        }
      })
    })

    // Search timeline events
    timelineEvents.forEach((event: TimelineEvent) => {
      if (event.title.toLowerCase().includes(lowerQuery) || 
          event.description.toLowerCase().includes(lowerQuery)) {
        const relevance = event.title.toLowerCase().includes(lowerQuery) ? 7 : 5
        searchResults.push({
          type: 'timeline',
          title: `${event.year}: ${event.title}`,
          description: event.description,
          chapter: event.chapter,
          chapterTitle: chapterContents.find((c: ChapterContent) => c.slug === event.chapter)?.title || '',
          relevance,
          url: `/chapter/${event.chapter}#timeline`
        })
      }
    })

    // Sort by relevance and limit results
    const sortedResults = searchResults
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, 50)

    setResults(sortedResults)
    setIsSearching(false)
  }, [query])

  const handleClearSearch = () => {
    setQuery('')
    setResults([])
  }

  const handleResultClick = () => {
    onOpenChange(false)
    setQuery('')
    setResults([])
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'chapter':
        return <BookOpen className="w-4 h-4" />
      case 'timeline':
        return <Calendar className="w-4 h-4" />
      case 'figure':
        return <User className="w-4 h-4" />
      case 'quote':
        return <AlertCircle className="w-4 h-4" />
      default:
        return <Search className="w-4 h-4" />
    }
  }

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'chapter':
        return 'bg-amber-600/20 text-amber-400 border-amber-600/30'
      case 'timeline':
        return 'bg-blue-600/20 text-blue-400 border-blue-600/30'
      case 'figure':
        return 'bg-purple-600/20 text-purple-400 border-purple-600/30'
      case 'quote':
        return 'bg-green-600/20 text-green-400 border-green-600/30'
      default:
        return 'bg-slate-600/20 text-slate-400 border-slate-600/30'
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl max-h-[85vh] p-0 gap-0">
        <DialogHeader className="p-6 pb-4 border-b border-slate-700">
          <DialogTitle className="text-2xl font-bold text-amber-400">
            Search Banking History
          </DialogTitle>
        </DialogHeader>

        <div className="p-6 pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search chapters, quotes, timeline events, key figures..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-10 pr-10 h-12 text-lg bg-slate-800 border-slate-600 text-white placeholder:text-slate-400 focus:border-amber-500"
              autoFocus
            />
            {query && (
              <Button
                variant="ghost"
                size="sm"
                onClick={handleClearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </Button>
            )}
          </div>

          {query.length > 0 && query.length < 2 && (
            <p className="mt-3 text-sm text-slate-400">
              Type at least 2 characters to search...
            </p>
          )}

          {query.length >= 2 && results.length === 0 && !isSearching && (
            <div className="mt-6 text-center py-8">
              <Search className="w-12 h-12 text-slate-600 mx-auto mb-3" />
              <p className="text-slate-400">No results found for &quot;{query}&quot;</p>
              <p className="text-sm text-slate-500 mt-1">
                Try different keywords or browse chapters directly
              </p>
            </div>
          )}
        </div>

        {results.length > 0 && (
          <ScrollArea className="max-h-[500px] px-6 pb-6">
            <div className="space-y-3">
              <p className="text-sm text-slate-400 mb-3">
                Found {results.length} result{results.length !== 1 ? 's' : ''}
              </p>
              
              {results.map((result, index) => (
                <Link
                  key={index}
                  href={result.url}
                  onClick={handleResultClick}
                  className="block p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700 hover:border-amber-600/50 transition-all group"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 text-slate-400 group-hover:text-amber-400 transition-colors">
                      {getTypeIcon(result.type)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge 
                          variant="outline" 
                          className={`text-xs ${getTypeBadgeColor(result.type)}`}
                        >
                          {result.type}
                        </Badge>
                        <span className="text-xs text-slate-500">
                          {result.chapterTitle}
                        </span>
                      </div>
                      
                      <h3 className="font-semibold text-white group-hover:text-amber-400 transition-colors mb-1 line-clamp-1">
                        {result.title}
                      </h3>
                      
                      <p className="text-sm text-slate-400 line-clamp-2">
                        {result.description}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </ScrollArea>
        )}

        <div className="p-4 border-t border-slate-700 bg-slate-800/50">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>Press ESC to close</span>
            <span>Enter to navigate</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
