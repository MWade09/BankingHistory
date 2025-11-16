'use client'

import { useState } from 'react'
import { chapters } from '@/data/timeline'
import SearchButton from '@/components/Search/SearchButton'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface ChapterNavigationProps {
  currentChapter: string
}

export default function ChapterNavigation({ currentChapter }: ChapterNavigationProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  const currentIndex = chapters.findIndex(c => c.slug === currentChapter)
  const prevChapter = currentIndex > 0 ? chapters[currentIndex - 1] : null
  const nextChapter = currentIndex < chapters.length - 1 ? chapters[currentIndex + 1] : null

  return (
    <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 mb-6 md:mb-8">
      <div className="container mx-auto px-3 sm:px-4 py-3 md:py-4">
        <div className="flex items-center justify-between gap-2">
          {/* Home Link */}
          <Link href="/">
            <Button variant="outline" size="sm" className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50 text-xs sm:text-sm px-2 sm:px-3">
              <span className="hidden xs:inline">← Timeline</span>
              <span className="xs:hidden">←</span>
            </Button>
          </Link>

          {/* Chapter Title */}
          <div className="text-center flex-1 mx-2 min-w-0">
            <h1 className="text-sm sm:text-base md:text-xl font-semibold text-white truncate">
              {chapters.find(c => c.slug === currentChapter)?.title || 'Chapter'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 hidden sm:block">
              {chapters.find(c => c.slug === currentChapter)?.period}
            </p>
          </div>

          {/* Chapter Menu Toggle */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50 text-xs sm:text-sm px-2 sm:px-3"
          >
            <span className="hidden xs:inline">Chapters</span>
            <span className="xs:hidden">☰</span>
          </Button>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-3 md:mt-4 gap-2">
          {prevChapter ? (
            <Link href={`/chapter/${prevChapter.slug}`} className="flex-1 sm:flex-none">
              <Button variant="outline" size="sm" className="w-full sm:w-auto bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50 text-xs sm:text-sm px-2 sm:px-3 truncate">
                <span className="hidden sm:inline">← {prevChapter.title}</span>
                <span className="sm:hidden">← Prev</span>
              </Button>
            </Link>
          ) : (
            <div className="flex-1 sm:flex-none"></div>
          )}

          {/* Search Bar */}
          <div className="flex-1 flex justify-center max-w-md">
            <SearchButton />
          </div>

          {nextChapter ? (
            <Link href={`/chapter/${nextChapter.slug}`} className="flex-1 sm:flex-none">
              <Button variant="outline" size="sm" className="w-full sm:w-auto bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50 text-xs sm:text-sm px-2 sm:px-3 truncate">
                <span className="hidden sm:inline">{nextChapter.title} →</span>
                <span className="sm:hidden">Next →</span>
              </Button>
            </Link>
          ) : (
            <div className="flex-1 sm:flex-none"></div>
          )}
        </div>

        {/* Expanded Chapter Menu */}
        {isExpanded && (
          <div className="mt-3 md:mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3">
            {chapters.map((chapter) => (
              <Link key={chapter.slug} href={`/chapter/${chapter.slug}`}>
                <Card 
                  className={`cursor-pointer transition-all duration-200 hover:bg-slate-700/50 active:scale-[0.98] ${
                    chapter.slug === currentChapter 
                      ? 'bg-slate-700/70 ring-1 ring-yellow-400/50' 
                      : 'bg-slate-800/50'
                  } border-slate-700`}
                >
                  <CardContent className="p-2 md:p-3">
                    <div className={`w-full h-1 rounded-full bg-gradient-to-r ${chapter.color} mb-2`}></div>
                    <h3 className="text-xs sm:text-sm font-medium text-white mb-1 leading-tight">{chapter.title}</h3>
                    <p className="text-xs text-slate-400">{chapter.period}</p>
                    {chapter.slug === currentChapter && (
                      <Badge className="mt-1 md:mt-2 bg-yellow-500/20 text-yellow-200 border-yellow-500/30 text-xs">
                        Current
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}