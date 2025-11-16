'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { AlertCircle, TrendingDown, Coins } from 'lucide-react'

interface DebasementExample {
  civilization: string
  period: string
  startingContent: number
  endingContent: number
  result: string
  color: string
}

const examples: DebasementExample[] = [
  {
    civilization: 'Roman Empire',
    period: '64 AD - 268 AD',
    startingContent: 100,
    endingContent: 0.5,
    result: 'Empire collapsed, Germanic tribes conquered Rome, Dark Ages began',
    color: 'red'
  },
  {
    civilization: 'Byzantine Empire',
    period: '1042 - 1204',
    startingContent: 100,
    endingContent: 8,
    result: 'Fourth Crusade sacked Constantinople, empire never recovered',
    color: 'orange'
  },
  {
    civilization: 'Medieval France',
    period: '1285 - 1490',
    startingContent: 100,
    endingContent: 1,
    result: 'Hundred Years War devastation, peasant revolts, economic chaos',
    color: 'amber'
  },
  {
    civilization: 'Weimar Germany',
    period: '1914 - 1923',
    startingContent: 100,
    endingContent: 0.0000000001,
    result: 'Hyperinflation destroyed middle class, Hitler rose to power',
    color: 'red'
  },
  {
    civilization: 'United States',
    period: '1913 - Present',
    startingContent: 100,
    endingContent: 3,
    result: 'Ongoing: 97% purchasing power loss since Federal Reserve creation',
    color: 'purple'
  }
]

export default function CurrencyDebasement() {
  const [selectedExample, setSelectedExample] = useState(0)
  const example = examples[selectedExample]

  const getBarColor = (color: string) => {
    switch(color) {
      case 'red': return 'bg-red-500'
      case 'orange': return 'bg-orange-500'
      case 'amber': return 'bg-amber-500'
      case 'purple': return 'bg-purple-500'
      default: return 'bg-red-500'
    }
  }

  return (
    <Card className="bg-slate-800 border-slate-700 my-8">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <TrendingDown className="w-8 h-8 text-red-400" />
          <CardTitle className="text-2xl text-white">Currency Debasement Throughout History</CardTitle>
        </div>
        <p className="text-slate-300 text-sm">
          Every civilization that debased its currency experienced catastrophic collapse. 
          Reducing precious metal content while maintaining face value is theft from every citizen.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Example Selector */}
        <div className="flex flex-wrap gap-2">
          {examples.map((ex, idx) => (
            <Button
              key={idx}
              onClick={() => setSelectedExample(idx)}
              variant={selectedExample === idx ? "default" : "outline"}
              className={selectedExample === idx ? 
                "bg-amber-600 hover:bg-amber-700 text-white" : 
                "bg-slate-700 hover:bg-slate-600 text-slate-300 border-slate-600"
              }
              size="sm"
            >
              {ex.civilization}
            </Button>
          ))}
        </div>

        {/* Selected Example Details */}
        <div className="bg-slate-900/50 rounded-lg p-6 border border-slate-600">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-amber-400">{example.civilization}</h3>
            <Badge className="bg-slate-700 text-slate-200 border-slate-600">
              {example.period}
            </Badge>
          </div>

          {/* Visual Representation of Debasement */}
          <div className="space-y-6">
            {/* Starting Value */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">Beginning of Period - Precious Metal Content</span>
                <span className="text-lg font-bold text-green-400">{example.startingContent}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-8 overflow-hidden">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 h-full flex items-center justify-center text-xs font-bold text-slate-900"
                  style={{ width: '100%' }}
                >
                  <Coins className="w-4 h-4 mr-1" />
                  Pure Silver/Gold
                </div>
              </div>
            </div>

            {/* Debasement Arrow */}
            <div className="flex items-center justify-center">
              <div className="text-center">
                <TrendingDown className="w-12 h-12 text-red-400 mx-auto mb-2 animate-pulse" />
                <p className="text-xs text-red-300 font-semibold">SYSTEMATIC DEBASEMENT</p>
                <p className="text-xs text-slate-500 mt-1">Rulers mixed cheap copper/lead with precious metals</p>
              </div>
            </div>

            {/* Ending Value */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-slate-400">End of Period - Precious Metal Content</span>
                <span className="text-lg font-bold text-red-400">{example.endingContent}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-8 overflow-hidden relative">
                <div 
                  className={`${getBarColor(example.color)} h-full`}
                  style={{ width: `${Math.max(example.endingContent, 1)}%` }}
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center text-xs font-bold text-slate-300"
                >
                  {example.endingContent < 10 ? 'Mostly Worthless Base Metal' : 'Degraded Currency'}
                </div>
              </div>
            </div>

            {/* Loss Calculation */}
            <div className="bg-red-900/30 border border-red-700/50 rounded p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertCircle className="w-5 h-5 text-red-400" />
                <p className="text-red-200 font-semibold">Purchasing Power Lost</p>
              </div>
              <p className="text-3xl font-bold text-red-400">
                {(100 - example.endingContent).toFixed(1)}%
              </p>
              <p className="text-xs text-slate-400 mt-2">
                Citizens holding currency lost nearly everything while rulers spent the difference
              </p>
            </div>

            {/* Historical Result */}
            <div className="bg-slate-800/50 rounded p-4 border-l-4 border-amber-500">
              <p className="text-sm font-semibold text-amber-300 mb-2">Historical Consequence:</p>
              <p className="text-slate-300 text-sm">{example.result}</p>
            </div>
          </div>
        </div>

        {/* Biblical Warning */}
        <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-lg p-4 border border-yellow-700/30">
          <h4 className="text-amber-300 font-semibold mb-2 flex items-center gap-2">
            <span className="text-xl">📖</span>
            Biblical Condemnation
          </h4>
          <p className="text-slate-300 text-sm italic mb-2">
            &ldquo;Your silver has become dross, your choice wine is diluted with water. Your rulers are rebels, 
            partners with thieves; they all love bribes and chase after gifts.&rdquo;
          </p>
          <p className="text-amber-400 text-sm font-semibold">- Isaiah 1:22-23</p>
          <p className="text-slate-400 text-xs mt-3">
            God explicitly condemns currency debasement as theft and corruption. Isaiah uses debased silver 
            as metaphor for moral corruption of leaders. The Bible recognizes that monetary fraud and political 
            corruption go hand in hand.
          </p>
        </div>

        {/* Key Lesson */}
        <div className="bg-slate-900/70 rounded-lg p-4 border border-slate-600">
          <h4 className="text-white font-bold mb-2">The Pattern is Universal:</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-red-400">1.</span>
              <span>Government overspends on wars, luxuries, or welfare beyond tax revenues</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">2.</span>
              <span>Rather than reduce spending, rulers debase currency to fund deficit</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">3.</span>
              <span>Early debasement is subtle - citizens don&apos;t notice immediately</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">4.</span>
              <span>As debasement accelerates, prices rise while currency value plummets</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">5.</span>
              <span>Middle class is destroyed - savings become worthless overnight</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">6.</span>
              <span>Social chaos, violence, and political upheaval follow economic collapse</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">7.</span>
              <span>Civilization falls or is conquered by neighbors with sound money</span>
            </li>
          </ul>
        </div>

        {/* Modern Application */}
        <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-700/30">
          <h4 className="text-purple-300 font-semibold mb-2">Modern Application:</h4>
          <p className="text-slate-300 text-sm">
            The United States dollar has lost 97% of its purchasing power since the Federal Reserve was created 
            in 1913. This isn&apos;t an accident - it&apos;s systematic theft through inflation. While ancient rulers 
            physically mixed copper with silver, modern central banks create currency from nothing through digital 
            entries. The mechanism changed but the fraud remains identical: transferring wealth from citizens to 
            those who control money creation.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
