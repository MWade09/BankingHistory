import InteractiveTimeline from '@/components/Timeline/InteractiveTimeline'
import SearchButton from '@/components/Search/SearchButton'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/3 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section with Video */}
      <div className="relative z-10 border-b border-slate-700 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-amber-300 to-orange-400 bg-clip-text text-transparent mb-4 md:mb-6 text-center leading-tight">
              The Illusion of Money
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 text-center mb-3 md:mb-4 px-2">
              Volume 2: New World Order, Secret Societies and Biblical Prophecy
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-400 text-center mb-6 md:mb-8 px-2">
              Research by Leonard Ulrich | Visit{' '}
              <a 
                href="https://nwotruth.org/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-yellow-400 hover:text-yellow-300 underline font-semibold transition-colors"
              >
                nwotruth.org
              </a>
              {' '}for more groundbreaking documentaries
            </p>

            {/* Search Bar */}
            <div className="flex justify-center mb-8">
              <SearchButton />
            </div>

            {/* Video Embed */}
            <Card className="bg-slate-800/50 border-slate-700 p-2 sm:p-4 mb-6 md:mb-8">
              <div className="aspect-video w-full">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/lLMgyslHR3Q"
                  title="The Illusion of Money - Volume 2"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="mt-3 md:mt-4 text-center">
                <p className="text-slate-400 text-xs sm:text-sm mb-3 px-2">
                  Watch the full documentary &quot;The Illusion of Money&quot; by Leonard Ulrich
                </p>
                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 justify-center px-4">
                  <a 
                    href="https://nwotruth.org/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button className="w-full sm:w-auto bg-gradient-to-r from-yellow-500 to-amber-500 text-black font-semibold hover:from-yellow-400 hover:to-amber-400">
                      Visit NWO Truth
                    </Button>
                  </a>
                  <a 
                    href="https://www.youtube.com/@LeonardUlrich" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto"
                  >
                    <Button variant="outline" className="w-full sm:w-auto border-slate-600 text-slate-200 hover:bg-slate-700">
                      YouTube Channel
                    </Button>
                  </a>
                </div>
              </div>
            </Card>

            {/* Introduction Text */}
            <div className="bg-slate-800/30 rounded-lg p-4 sm:p-6 border border-slate-700">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 md:mb-4">About This Documentary</h2>
              <div className="space-y-3 text-sm sm:text-base text-slate-300">
                <p>
                  This film explores three big ideas: Most evil in this world is highly coordinated and fulfilling biblical prophecy to the letter. 
                  Historical and current events are being influenced to make the appearance of the Antichrist highly probable within a generation. 
                  Though the world is not yet apocalyptic, organized evil affects us all now and must be resisted like never before.
                </p>
                <p>
                  Based on three years of research involving over two dozen books, hundreds of podcasts and newscasts, and extensive articles, 
                  this presentation concentrates on history, economics, monetary theory, and Bible prophecy.
                </p>
                <p className="font-semibold text-yellow-400 text-sm sm:text-base">
                  &quot;For the love of money is the root of all evil&quot; - 1 Timothy 6:10
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto py-8 sm:py-12">
        <InteractiveTimeline />
      </div>

      {/* Footer Quote */}
      <footer className="relative z-10 bg-slate-900/80 border-t border-slate-700 mt-12 md:mt-16">
        <div className="container mx-auto px-4 py-6 sm:py-8 text-center">
          <blockquote className="text-sm sm:text-base md:text-lg italic text-slate-300 mb-3 md:mb-4 px-2">
            &ldquo;For the love of money is the root of all evil: which while some coveted after, 
            they have erred from the faith, and pierced themselves through with many sorrows.&rdquo;
          </blockquote>
          <cite className="text-yellow-400 font-semibold text-sm sm:text-base">1 Timothy 6:10</cite>
          <div className="mt-4 md:mt-6 text-xs sm:text-sm text-slate-400 px-2">
            <p>Based on research by Leonard Alrich | The New World Order, Secret Societies and Biblical Prophecy</p>
          </div>
        </div>
      </footer>
    </main>
  )
}