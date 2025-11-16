'use client'

import { ChapterContent as ChapterContentType } from '@/data/chapters'
import { getEventsByChapter, chapters } from '@/data/timeline'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ExternalLink, Youtube } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import FractionalReserve from '@/components/Infographics/FractionalReserve'
import FederalReserveStructure from '@/components/Infographics/FederalReserveStructure'
import BoomBustCycle from '@/components/Infographics/BoomBustCycle'
import JosephEnslavement from '@/components/Infographics/JosephEnslavement'
import CurrencyDebasement from '@/components/Infographics/CurrencyDebasement'
import CentralBankingCartel from '@/components/Infographics/CentralBankingCartel'
import PetrodollarSystem from '@/components/Infographics/PetrodollarSystem'
import MarkOfBeast from '@/components/Infographics/MarkOfBeast'
import TallyStickSystem from '@/components/Infographics/TallyStickSystem'
import DutchEastIndia from '@/components/Infographics/DutchEastIndia'
import PhoenixProphecy from '@/components/Infographics/PhoenixProphecy'

interface ChapterContentProps {
  chapter: ChapterContentType
}

// Helper function to render infographics
function renderInfographic(type: string) {
  switch(type) {
    case 'fractional-reserve':
      return <FractionalReserve />
    case 'federal-reserve-structure':
      return <FederalReserveStructure />
    case 'boom-bust-cycle':
      return <BoomBustCycle />
    case 'joseph-enslavement':
      return <JosephEnslavement />
    case 'currency-debasement':
      return <CurrencyDebasement />
    case 'central-banking-cartel':
      return <CentralBankingCartel />
    case 'petrodollar-system':
      return <PetrodollarSystem />
    case 'mark-of-beast':
      return <MarkOfBeast />
    case 'tally-stick-system':
      return <TallyStickSystem />
    case 'dutch-east-india':
      return <DutchEastIndia />
    case 'phoenix-prophecy':
      return <PhoenixProphecy />
    default:
      return null
  }
}

export default function ChapterContent({ chapter }: ChapterContentProps) {
  const chapterEvents = getEventsByChapter(chapter.slug)
  const chapterData = chapters.find(c => c.slug === chapter.slug)

  return (
    <div className="space-y-6 md:space-y-8 px-3 sm:px-4">
      {/* Chapter Introduction */}
      <section className="bg-slate-800/50 rounded-lg overflow-hidden border border-slate-700">
        {/* Optional Header Image */}
        {chapter.headerImage && (
          <div className="relative w-full h-48 sm:h-64 md:h-100">
            <Image
              src={chapter.headerImage}
              alt={chapter.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-800 via-slate-800/50 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 text-center">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 drop-shadow-lg leading-tight">{chapter.title}</h1>
              <Badge className="bg-yellow-500/20 text-yellow-200 border-yellow-500/30 text-sm sm:text-base md:text-lg px-3 md:px-4 py-1">
                {chapter.period}
              </Badge>
            </div>
          </div>
        )}
        
        {/* Header without image (fallback to gradient) */}
        {!chapter.headerImage && chapterData && (
          <div className={`relative w-full h-36 sm:h-40 md:h-48 bg-gradient-to-br ${chapterData.color} flex items-center justify-center`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center px-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg leading-tight">{chapter.title}</h1>
              <Badge className="bg-white/20 text-white border-white/30 text-sm sm:text-base md:text-lg px-3 md:px-4 py-1 backdrop-blur-sm">
                {chapter.period}
              </Badge>
            </div>
          </div>
        )}

        {/* Introduction text */}
        <div className="p-4 sm:p-6 md:p-8">
          {chapter.videoTimestamp && (
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 mb-4 md:mb-6">
              <Youtube className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Documentary Timestamp: {chapter.videoTimestamp}</span>
            </div>
          )}
          <div className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-4xl mx-auto space-y-3 md:space-y-4">
            {chapter.introduction.split('\n\n').map((paragraph, pIndex) => (
              <p key={pIndex} className="first-letter:text-2xl sm:first-letter:text-3xl first-letter:font-bold first-letter:text-yellow-400 indent-4 sm:indent-8">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Link to NWO Truth */}
      <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-lg p-4 sm:p-6 border border-yellow-700/30">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-yellow-200 mb-2">Watch the Full Documentary</h3>
            <p className="text-slate-300 text-xs sm:text-sm">This content is based on extensive research by Leonard Ulrich</p>
          </div>
          <Link 
            href="https://nwotruth.org/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:from-yellow-400 hover:to-amber-400 transition-all text-sm sm:text-base"
          >
            Visit NWO Truth
            <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
          </Link>
        </div>
      </div>

      {/* Timeline Events for this Chapter */}
      {chapterEvents.length > 0 && (
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 md:mb-6">Key Historical Events</h2>
          <div className="grid gap-3 md:gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {chapterEvents.map((event, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-2 md:pb-3">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-400 font-mono text-xs sm:text-sm font-semibold">
                        {event.year < 0 ? `${Math.abs(event.year)} BC` : `${event.year} AD`}
                      </span>
                      <Badge 
                        className={`text-xs ${
                          event.category === 'biblical' ? 'bg-yellow-500/20 text-yellow-200 border-yellow-500/30' :
                          event.category === 'financial' ? 'bg-red-500/20 text-red-200 border-red-500/30' :
                          event.category === 'political' ? 'bg-blue-500/20 text-blue-200 border-blue-500/30' :
                          'bg-purple-500/20 text-purple-200 border-purple-500/30'
                        }`}
                      >
                        {event.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-white text-sm sm:text-base leading-tight">
                      {event.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{event.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Chapter Sections */}
      <section>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 md:mb-6">Detailed Analysis</h2>
        <div className="space-y-6 md:space-y-8">
          {chapter.sections.map((section, index) => (
            <div key={index} className="bg-slate-800/30 rounded-lg p-4 sm:p-6 border border-slate-700">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 md:mb-4 leading-tight">{section.title}</h3>
              <div className="space-y-3 md:space-y-4">
                {/* Format content with proper paragraph breaks */}
                <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-3 md:space-y-4">
                  {section.content.split('\n\n').map((paragraph, pIndex) => (
                    <p key={pIndex} className="first-letter:text-xl sm:first-letter:text-2xl first-letter:font-bold first-letter:text-yellow-400">
                      {paragraph}
                    </p>
                  ))}
                </div>
                
                {/* Section Images */}
                {section.images && section.images.length > 0 && (
                  <div className={`grid gap-3 md:gap-4 my-4 md:my-6 ${
                    section.images.length === 1 ? 'grid-cols-1' : 
                    section.images.length === 2 ? 'grid-cols-1 sm:grid-cols-2' :
                    section.images.length === 3 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' :
                    'grid-cols-1 sm:grid-cols-2'
                  }`}>
                    {section.images.map((image, imgIndex) => (
                      <figure key={imgIndex} className="bg-slate-900/50 rounded-lg p-3 md:p-4 border border-slate-600">
                        <div className="relative w-full h-48 sm:h-56 md:h-64 lg:h-80 mb-2 md:mb-3">
                          <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            className="object-contain rounded"
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
                        </div>
                        <figcaption className="text-xs sm:text-sm text-slate-400">
                          <p className="text-slate-300 mb-1 leading-tight">{image.caption}</p>
                          {image.credit && (
                            <p className="text-xs text-slate-500">Credit: {image.credit}</p>
                          )}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                )}

                {/* Section Infographic */}
                {section.infographic && (
                  <div className="my-6 md:my-8">
                    {renderInfographic(section.infographic)}
                  </div>
                )}
                
                {section.details && section.details.length > 0 && (
                  <div className="bg-slate-700/30 rounded p-3 md:p-4 border border-slate-600">
                    <h4 className="text-xs sm:text-sm font-semibold text-blue-400 mb-2 md:mb-3">Additional Details:</h4>
                    <ul className={`space-y-2 ${
                      section.details.length > 6 ? 'sm:columns-2 lg:columns-3' : 
                      section.details.length > 3 ? 'sm:columns-2' : ''
                    } gap-x-4 md:gap-x-6`}>
                      {section.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="text-slate-300 text-xs sm:text-sm mb-2 break-inside-avoid flex items-start gap-2">
                          <span className="text-blue-400 mt-1 flex-shrink-0 text-xs">•</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {section.quotes && section.quotes.length > 0 && (
                  <div className="border-l-2 sm:border-l-4 border-yellow-500/50 pl-3 sm:pl-4 bg-slate-700/30 rounded-r p-3 md:p-4">
                    <h4 className="text-xs sm:text-sm font-semibold text-yellow-400 mb-2">Key Quotes:</h4>
                    {section.quotes.map((quote, quoteIndex) => (
                      <blockquote key={quoteIndex} className="italic text-slate-300 text-xs sm:text-sm mb-2 last:mb-0">
                        &ldquo;{quote}&rdquo;
                      </blockquote>
                    ))}
                  </div>
                )}
                
                <div className="bg-amber-900/20 rounded p-3 border border-amber-700/30">
                  <h4 className="text-xs sm:text-sm font-semibold text-amber-300 mb-1">Historical Significance:</h4>
                  <p className="text-amber-200/80 text-xs sm:text-sm leading-relaxed">{section.significance}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Key Figures */}
      {chapter.keyFigures.length > 0 && (
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 md:mb-6">Key Figures</h2>
          <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
            {chapter.keyFigures.map((figure, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700">
                <CardHeader className="pb-2 md:pb-3">
                  <CardTitle className="text-white text-sm sm:text-base flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                    <span className="leading-tight">{figure.name}</span>
                    <Badge 
                      variant={figure.significance === 'high' ? 'destructive' : figure.significance === 'medium' ? 'secondary' : 'outline'}
                      className="text-xs self-start sm:self-auto"
                    >
                      {figure.significance} impact
                    </Badge>
                  </CardTitle>
                  <CardDescription className="text-slate-400 text-xs sm:text-sm">{figure.role}</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{figure.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Biblical Connections */}
      {chapter.biblicalConnections.length > 0 && (
        <section>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 md:mb-6">Biblical Connections</h2>
          <div className="grid gap-3 md:gap-4 sm:grid-cols-2">
            {chapter.biblicalConnections.map((connection, index) => (
              <Card key={index} className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 border-yellow-700/30">
                <CardContent className="p-4 sm:p-6">
                  {connection.verse && (
                    <Badge className="mb-2 md:mb-3 bg-yellow-500/20 text-yellow-200 border-yellow-500/50 text-xs">
                      {connection.verse}
                    </Badge>
                  )}
                  <h3 className="text-base sm:text-lg font-semibold text-yellow-200 mb-2 leading-tight">
                    {connection.principle}
                  </h3>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">{connection.application}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Modern Relevance */}
      <section className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-lg p-4 sm:p-6 md:p-8 border border-red-700/30">
        <h2 className="text-xl sm:text-2xl font-semibold text-red-200 mb-4 md:mb-6">Modern Relevance</h2>
        <div className="text-sm sm:text-base text-slate-300 leading-relaxed space-y-3 md:space-y-4 max-w-none">
          {chapter.modernRelevance.split('\n\n').map((paragraph, pIndex) => (
            <p key={pIndex} className="first-letter:text-xl sm:first-letter:text-2xl first-letter:font-bold first-letter:text-red-400 indent-4 sm:indent-8">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Chapter Footer */}
      <div className="text-center py-6 md:py-8">
        <Separator className="mb-4 md:mb-6 bg-slate-700" />
        <p className="text-slate-400 text-xs sm:text-sm italic px-4">
          &ldquo;There is no financial or political solution to a spiritual problem. 
          God did not send us a banker or politician. God sent us a savior.&rdquo;
        </p>
        <p className="text-yellow-400 text-xs sm:text-sm mt-2">- Leonard Alrich</p>
      </div>
    </div>
  )
}