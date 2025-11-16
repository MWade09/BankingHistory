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
    <div className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 mb-8">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Home Link */}
          <Link href="/">
            <Button variant="outline" size="sm" className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50">
              ← Timeline
            </Button>
          </Link>

          {/* Chapter Title */}
          <div className="text-center flex-1 mx-4">
            <h1 className="text-xl font-semibold text-white truncate">
              {chapters.find(c => c.slug === currentChapter)?.title || 'Chapter'}
            </h1>
            <p className="text-sm text-slate-400">
              {chapters.find(c => c.slug === currentChapter)?.period}
            </p>
          </div>

          {/* Chapter Menu Toggle */}
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50"
          >
            Chapters
          </Button>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-between mt-4 gap-4">
          {prevChapter ? (
            <Link href={`/chapter/${prevChapter.slug}`}>
              <Button variant="outline" size="sm" className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50">
                ← {prevChapter.title}
              </Button>
            </Link>
          ) : (
            <div></div>
          )}

          {/* Search Bar */}
          <div className="flex-1 flex justify-center">
            <SearchButton />
          </div>

          {nextChapter ? (
            <Link href={`/chapter/${nextChapter.slug}`}>
              <Button variant="outline" size="sm" className="bg-slate-800/50 border-slate-600 text-slate-200 hover:bg-slate-700/50">
                {nextChapter.title} →
              </Button>
            </Link>
          ) : (
            <div></div>
          )}
        </div>

        {/* Expanded Chapter Menu */}
        {isExpanded && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
            {chapters.map((chapter) => (
              <Link key={chapter.slug} href={`/chapter/${chapter.slug}`}>
                <Card 
                  className={`cursor-pointer transition-all duration-200 hover:bg-slate-700/50 ${
                    chapter.slug === currentChapter 
                      ? 'bg-slate-700/70 ring-1 ring-yellow-400/50' 
                      : 'bg-slate-800/50'
                  } border-slate-700`}
                >
                  <CardContent className="p-3">
                    <div className={`w-full h-1 rounded-full bg-gradient-to-r ${chapter.color} mb-2`}></div>
                    <h3 className="text-sm font-medium text-white mb-1">{chapter.title}</h3>
                    <p className="text-xs text-slate-400">{chapter.period}</p>
                    {chapter.slug === currentChapter && (
                      <Badge className="mt-2 bg-yellow-500/20 text-yellow-200 border-yellow-500/30 text-xs">
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