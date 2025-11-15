'use client'

import { ChapterContent as ChapterContentType } from '@/data/chapters'
import { getEventsByChapter } from '@/data/timeline'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ExternalLink, Youtube } from 'lucide-react'
import Link from 'next/link'

interface ChapterContentProps {
  chapter: ChapterContentType
}

export default function ChapterContent({ chapter }: ChapterContentProps) {
  const chapterEvents = getEventsByChapter(chapter.slug)

  return (
    <div className="space-y-8">
      {/* Chapter Introduction */}
      <section className="bg-slate-800/50 rounded-lg p-8 border border-slate-700">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold text-white mb-2">{chapter.title}</h1>
          <Badge className="bg-yellow-500/20 text-yellow-200 border-yellow-500/30 text-lg px-4 py-1">
            {chapter.period}
          </Badge>
          {chapter.videoTimestamp && (
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-400">
              <Youtube className="w-4 h-4" />
              <span>Documentary Timestamp: {chapter.videoTimestamp}</span>
            </div>
          )}
        </div>
        <p className="text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto">
          {chapter.introduction}
        </p>
      </section>

      {/* Link to NWO Truth */}
      <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-lg p-6 border border-yellow-700/30">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-yellow-200 mb-2">Watch the Full Documentary</h3>
            <p className="text-slate-300 text-sm">This content is based on extensive research by Leonard Ulrich</p>
          </div>
          <Link 
            href="https://nwotruth.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold px-6 py-3 rounded-lg hover:from-yellow-400 hover:to-amber-400 transition-all"
          >
            Visit NWO Truth
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Timeline Events for this Chapter */}
      {chapterEvents.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Key Historical Events</h2>
          <div className="grid gap-4">
            {chapterEvents.map((event, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-3">
                      <span className="text-yellow-400 font-mono text-sm">
                        {event.year < 0 ? `${Math.abs(event.year)} BC` : `${event.year} AD`}
                      </span>
                      {event.title}
                    </CardTitle>
                    <Badge 
                      className={
                        event.category === 'biblical' ? 'bg-yellow-500/20 text-yellow-200 border-yellow-500/30' :
                        event.category === 'financial' ? 'bg-red-500/20 text-red-200 border-red-500/30' :
                        event.category === 'political' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30' :
                        'bg-purple-500/20 text-purple-200 border-purple-500/30'
                      }
                    >
                      {event.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Chapter Sections */}
      <section>
        <h2 className="text-2xl font-semibold text-white mb-6">Detailed Analysis</h2>
        <div className="space-y-8">
          {chapter.sections.map((section, index) => (
            <div key={index} className="bg-slate-800/30 rounded-lg p-6 border border-slate-700">
              <h3 className="text-xl font-semibold text-white mb-4">{section.title}</h3>
              <div className="space-y-4">
                <p className="text-slate-300 leading-relaxed">{section.content}</p>
                
                {section.details && section.details.length > 0 && (
                  <div className="bg-slate-700/30 rounded p-4 border border-slate-600">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Additional Details:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-slate-300 text-sm">{detail}</li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {section.quotes && section.quotes.length > 0 && (
                  <div className="border-l-4 border-yellow-500/50 pl-4 bg-slate-700/30 rounded-r p-4">
                    <h4 className="text-sm font-semibold text-yellow-400 mb-2">Key Quotes:</h4>
                    {section.quotes.map((quote, quoteIndex) => (
                      <blockquote key={quoteIndex} className="italic text-slate-300 text-sm mb-2 last:mb-0">
                        &ldquo;{quote}&rdquo;
                      </blockquote>
                    ))}
                  </div>
                )}
                
                <div className="bg-amber-900/20 rounded p-3 border border-amber-700/30">
                  <h4 className="text-sm font-semibold text-amber-300 mb-1">Historical Significance:</h4>
                  <p className="text-amber-200/80 text-sm">{section.significance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Figures */}
      {chapter.keyFigures.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Key Figures</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {chapter.keyFigures.map((figure, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-3">
                  <CardTitle className="text-white flex items-center justify-between">
                    {figure.name}
                    <Badge 
                      variant={figure.significance === 'high' ? 'destructive' : figure.significance === 'medium' ? 'secondary' : 'outline'}
                    >
                      {figure.significance} impact
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-slate-400">{figure.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm">{figure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Biblical Connections */}
      {chapter.biblicalConnections.length > 0 && (
        <section>
          <h2 className="text-2xl font-semibold text-white mb-6">Biblical Connections</h2>
          <div className="space-y-4">
            {chapter.biblicalConnections.map((connection, index) => (
              <Card key={index} className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border-yellow-700/30">
                <CardContent className="p-6">
                  {connection.verse && (
                    <Badge className="mb-3 bg-yellow-500/20 text-yellow-200 border-yellow-500/50">
                      {connection.verse}
                    </Badge>
                  )}
                  <h3 className="text-lg font-semibold text-yellow-200 mb-2">
                    {connection.principle}
                  </h3>
                  <p className="text-slate-300">{connection.application}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Modern Relevance */}
      <section className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg p-6 border border-red-700/30">
        <h2 className="text-2xl font-semibold text-red-200 mb-4">Modern Relevance</h2>
        <p className="text-slate-300 leading-relaxed">{chapter.modernRelevance}</p>
      </section>

      {/* Chapter Footer */}
      <div className="text-center py-8">
        <Separator className="mb-6 bg-slate-700" />
        <p className="text-slate-400 text-sm italic">
          &ldquo;There is no financial or political solution to a spiritual problem. 
          God did not send us a banker or politician. God sent us a savior.&rdquo;
        </p>
        <p className="text-yellow-400 text-sm mt-2">- Leonard Alrich</p>
      </div>
    </div>
  )
}