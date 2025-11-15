'use client'

import { useState, useRef, useEffect } from 'react'
import { timelineEvents, chapters } from '@/data/timeline'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent mb-4">
          The Illusion of Money
        </h1>
        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
          An interactive journey through monetary history, revealing the patterns of financial manipulation 
          from ancient biblical times to modern central banking
        </p>
      </div>

      {/* Chapter Navigation */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Historical Chapters</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {chapters.map((chapter) => (
            <Link key={chapter.slug} href={`/chapter/${chapter.slug}`}>
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 cursor-pointer h-full">
                <CardHeader className="pb-3">
                  <div className={`w-full h-2 rounded-full bg-gradient-to-r ${chapter.color} mb-3`}></div>
                  <CardTitle className="text-white text-lg">{chapter.title}</CardTitle>
                  <CardDescription className="text-slate-400">{chapter.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-slate-300">{chapter.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      {/* Interactive Timeline */}
      <div className="relative" ref={timelineRef}>
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Interactive Timeline</h2>
        
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-yellow-400 via-amber-500 to-orange-600 rounded-full opacity-30"></div>

        {/* Timeline Events */}
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              data-index={index}
              className={`timeline-item relative pl-20 transition-all duration-700 ${
                visibleEvents.has(index) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {/* Timeline Dot */}
              <div 
                className={`absolute left-6 top-4 rounded-full bg-gradient-to-r ${
                  event.significance === 'high' ? 'from-yellow-400 to-amber-500' :
                  event.significance === 'medium' ? 'from-amber-500 to-orange-500' :
                  'from-orange-500 to-red-500'
                } ${getSignificanceSize(event.significance)} shadow-lg`}
              ></div>

              {/* Event Card */}
              <Card 
                className={`bg-slate-800/70 border-slate-700 hover:bg-slate-700/70 transition-all duration-300 cursor-pointer ${
                  selectedEvent?.title === event.title ? 'ring-2 ring-yellow-400 bg-slate-700/70' : ''
                }`}
                onClick={() => setSelectedEvent(selectedEvent?.title === event.title ? null : event)}
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-white text-lg flex items-center gap-3">
                      <span className="text-yellow-400 font-mono text-sm">
                        {event.year < 0 ? `${Math.abs(event.year)} BC` : `${event.year} AD`}
                      </span>
                      {event.title}
                    </CardTitle>
                    <Badge className={getCategoryColor(event.category)}>
                      {event.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 mb-3">{event.description}</p>
                  <div className="flex items-center justify-between">
                    <Link href={`/chapter/${event.chapter}`}>
                      <Button variant="outline" size="sm" className="bg-slate-700/50 border-slate-600 text-slate-200 hover:bg-slate-600/50">
                        Read Chapter
                      </Button>
                    </Link>
                    <Badge variant={event.significance === 'high' ? 'destructive' : event.significance === 'medium' ? 'secondary' : 'outline'}>
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
      <div className="mt-16 text-center bg-slate-800/50 rounded-lg p-8 border border-slate-700">
        <h3 className="text-2xl font-bold text-white mb-4">Ready to Explore?</h3>
        <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
          Dive deep into any historical period to understand how monetary manipulation has shaped our world 
          and continues to fulfill biblical prophecy.
        </p>
        <Link href="/chapter/ancient-foundations">
          <Button className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold px-8 py-3 hover:from-yellow-400 hover:to-amber-400">
            Start with Ancient Foundations
          </Button>
        </Link>
      </div>
    </div>
  )
}