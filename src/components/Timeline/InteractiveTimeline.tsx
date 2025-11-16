'use client'

import { useState, useRef, useEffect } from 'react'
import { timelineEvents, chapters } from '@/data/timeline'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'

export default function InteractiveTimeline() {
  const [selectedEvent, setSelectedEvent] = useState<typeof timelineEvents[0] | null>(null)
  const [visibleEvents, setVisibleEvents] = useState(new Set<number>())
  const timelineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setVisibleEvents(prev => new Set(prev).add(index))
          }
        })
      },
      { threshold: 0.3 }
    )

    const timelineItems = document.querySelectorAll('.timeline-item')
    timelineItems.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'biblical': return 'bg-yellow-500/20 text-yellow-200 border-yellow-500/30'
      case 'financial': return 'bg-red-500/20 text-red-200 border-red-500/30'
      case 'political': return 'bg-blue-500/20 text-blue-200 border-blue-500/30'
      case 'prophetic': return 'bg-purple-500/20 text-purple-200 border-purple-500/30'
      default: return 'bg-gray-500/20 text-gray-200 border-gray-500/30'
    }
  }

  const getSignificanceSize = (significance: string) => {
    switch (significance) {
      case 'high': return 'w-6 h-6'
      case 'medium': return 'w-4 h-4'
      case 'low': return 'w-3 h-3'
      default: return 'w-4 h-4'
    }
  }

  return (
    <div className="relative">
      {/* Timeline Header */}
      <div className="text-center mb-8 md:mb-12 px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent mb-3 md:mb-4 leading-tight">
          The Illusion of Money
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto px-2">
          An interactive journey through monetary history, revealing the patterns of financial manipulation 
          from ancient biblical times to modern central banking
        </p>
      </div>

      {/* Chapter Navigation */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 md:mb-6 text-center px-4">Historical Chapters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-7xl mx-auto px-4">
          {chapters.map((chapter) => (
            <Link key={chapter.slug} href={`/chapter/${chapter.slug}`}>
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer h-full group active:scale-[0.98]">
                <CardHeader className="pb-2 md:pb-3">
                  {/* Chapter visual header with optional image or gradient fallback */}
                  <div className={`relative w-full h-20 sm:h-24 rounded-lg overflow-hidden mb-2 md:mb-3 ${!chapter.image ? `bg-gradient-to-br ${chapter.color}` : ''}`}>
                    {chapter.image ? (
                      <Image
                        src={chapter.image}
                        alt={chapter.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 group-active:bg-black/30 transition-all"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-white/90 text-4xl sm:text-5xl font-bold drop-shadow-lg">
                            {chapter.title.split(' ')[0].charAt(0)}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <CardTitle className="text-white text-base sm:text-lg leading-tight">{chapter.title}</CardTitle>
                  <CardDescription className="text-slate-400 text-xs sm:text-sm">{chapter.period}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-3">{chapter.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="relative px-4" ref={timelineRef}>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-6 md:mb-8 text-center">Interactive Timeline</h2>
        
        {/* Timeline Line */}
        <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 sm:w-1 bg-gradient-to-b from-yellow-400 via-amber-500 to-orange-600 rounded-full opacity-30"></div>

        {/* Timeline Events */}
        <div className="space-y-6 md:space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item relative pl-12 sm:pl-16 md:pl-20 transition-all duration-700 ${
                visibleEvents.has(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {/* Timeline Dot */}
              <div 
                className={`absolute left-4 sm:left-6 top-3 sm:top-4 rounded-full bg-gradient-to-r ${
                  event.significance === 'high' ? 'from-yellow-400 to-amber-500' :
                  event.significance === 'medium' ? 'from-amber-500 to-orange-500' :
                  'from-orange-500 to-red-500'
                } ${getSignificanceSize(event.significance)} shadow-lg`}
              ></div>

              {/* Event Card */}
              <Card 
                className={`bg-slate-800/70 border-slate-700 hover:bg-slate-700/70 active:bg-slate-700/70 transition-all duration-300 cursor-pointer ${
                  selectedEvent?.title === event.title ? 'ring-2 ring-yellow-400 bg-slate-700/70' : ''
                }`}
                onClick={() => setSelectedEvent(selectedEvent?.title === event.title ? null : event)}
              >
                <CardHeader className="pb-2 md:pb-3">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <CardTitle className="text-white text-base sm:text-lg flex flex-col sm:flex-row sm:items-center gap-2">
                      <span className="text-yellow-400 font-mono text-xs sm:text-sm font-semibold">
                        {event.year < 0 ? `${Math.abs(event.year)} BC` : `${event.year} AD`}
                      </span>
                      <span className="leading-tight">{event.title}</span>
                    </CardTitle>
                    <Badge className={`${getCategoryColor(event.category)} text-xs whitespace-nowrap self-start sm:self-auto`}>
                      {event.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-300 text-sm sm:text-base mb-3 leading-relaxed">{event.description}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0">
                    <Link href={`/chapter/${event.chapter}`}>
                      <Button variant="outline" size="sm" className="w-full sm:w-auto bg-slate-700/50 border-slate-600 text-slate-200 hover:bg-slate-600/50 text-xs sm:text-sm">
                        Read Chapter
                      </Button>
                    </Link>
                    <Badge variant={event.significance === 'high' ? 'destructive' : event.significance === 'medium' ? 'secondary' : 'outline'} className="text-xs self-start sm:self-auto">
                      {event.significance} impact
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-12 md:mt-16 text-center bg-slate-800/50 rounded-lg p-6 md:p-8 border border-slate-700 mx-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">Ready to Explore?</h3>
        <p className="text-sm sm:text-base text-slate-300 mb-4 md:mb-6 max-w-2xl mx-auto px-2">
          Dive deep into any historical period to understand how monetary manipulation has shaped our world 
          and continues to fulfill biblical prophecy.
        </p>
        <Link href="/chapter/ancient-foundations">
          <Button className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold px-6 sm:px-8 py-2 sm:py-3 hover:from-yellow-400 hover:to-amber-400 text-sm sm:text-base">
            Start with Ancient Foundations
          </Button>
        </Link>
      </div>
    </div>
  )
}