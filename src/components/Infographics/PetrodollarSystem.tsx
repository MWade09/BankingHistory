'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Fuel, DollarSign, Shield, TrendingUp, AlertTriangle } from 'lucide-react'

interface SystemStage {
  id: number
  title: string
  year: string
  description: string
  result: string
  color: string
}

const stages: SystemStage[] = [
  {
    id: 1,
    title: 'Gold Standard Era',
    year: '1944-1971',
    description: 'Bretton Woods: 44 nations pegged currencies to US dollar at $35/oz gold. US held 2/3 of world\'s gold. Dollar was "as good as gold" because convertible.',
    result: 'System worked until US overspent on Vietnam War and social programs. Nations demanded gold back.',
    color: 'amber'
  },
  {
    id: 2,
    title: 'Nixon Closes Gold Window',
    year: 'August 15, 1971',
    description: 'Nixon "temporarily" suspended dollar-gold convertibility. US lost 50% of gold reserves from 1959-1971. World currencies tied to dollar, dollar tied to NOTHING.',
    result: 'Dollar no longer backed by anything tangible. Needed replacement to maintain reserve status.',
    color: 'red'
  },
  {
    id: 3,
    title: 'Oil Crisis Opportunity',
    year: '1973',
    description: 'OPEC oil embargo created crisis. Oil prices quadrupled. Global economy dependent on Middle East oil but dollar had no backing.',
    result: 'Crisis created opportunity for new dollar backing mechanism.',
    color: 'orange'
  },
  {
    id: 4,
    title: 'Kissinger\'s Deal',
    year: '1974-1975',
    description: 'Henry Kissinger made Saudi King Faisal "an offer he couldn\'t refuse": US military protection + oil purchases in exchange for selling oil EXCLUSIVELY in US dollars.',
    result: 'Saudi Arabia accepted. Rest of OPEC followed. Dollar went from gold standard to oil standard.',
    color: 'green'
  },
  {
    id: 5,
    title: 'Petrodollar System Born',
    year: '1975-Present',
    description: 'Any nation buying oil must first acquire US dollars. Creates artificial worldwide demand for dollars. US can print unlimited currency knowing global demand guaranteed.',
    result: 'Financial imperialism: US exports inflation to world, maintains reserve currency despite no gold backing.',
    color: 'blue'
  }
]

export default function PetrodollarSystem() {
  const [selectedStage, setSelectedStage] = useState(4) // Start at Kissinger's Deal

  const stage = stages.find(s => s.id === selectedStage) || stages[0]

  const getColorClasses = (color: string, isSelected: boolean) => {
    if (!isSelected) return 'bg-slate-700 hover:bg-slate-600 text-slate-300 border-slate-600'
    switch(color) {
      case 'amber': return 'bg-amber-600 hover:bg-amber-700 text-white border-amber-500'
      case 'red': return 'bg-red-600 hover:bg-red-700 text-white border-red-500'
      case 'orange': return 'bg-orange-600 hover:bg-orange-700 text-white border-orange-500'
      case 'green': return 'bg-green-600 hover:bg-green-700 text-white border-green-500'
      case 'blue': return 'bg-blue-600 hover:bg-blue-700 text-white border-blue-500'
      default: return 'bg-slate-700 hover:bg-slate-600 text-slate-300 border-slate-600'
    }
  }

  const getBgGradient = (color: string) => {
    switch(color) {
      case 'amber': return 'from-amber-900/40 to-amber-800/20'
      case 'red': return 'from-red-900/40 to-red-800/20'
      case 'orange': return 'from-orange-900/40 to-orange-800/20'
      case 'green': return 'from-green-900/40 to-green-800/20'
      case 'blue': return 'from-blue-900/40 to-blue-800/20'
      default: return 'from-slate-900/40 to-slate-800/20'
    }
  }

  return (
    <Card className="bg-slate-800 border-slate-700 my-8">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Fuel className="w-8 h-8 text-amber-400" />
          <CardTitle className="text-2xl text-white">The Petrodollar System</CardTitle>
        </div>
        <p className="text-slate-300 text-sm">
          When Nixon severed the dollar from gold in 1971, the US needed a new backing mechanism. 
          Kissinger&apos;s deal with Saudi Arabia created artificial global dollar demand by forcing all oil trade through US currency.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Timeline Selector */}
        <div className="flex flex-wrap gap-2">
          {stages.map((s) => (
            <Button
              key={s.id}
              onClick={() => setSelectedStage(s.id)}
              className={getColorClasses(s.color, selectedStage === s.id)}
              size="sm"
            >
              {s.id}. {s.title}
            </Button>
          ))}
        </div>

        {/* Selected Stage Details */}
        <div className={`bg-gradient-to-r ${getBgGradient(stage.color)} rounded-lg p-6 border border-slate-600`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{stage.title}</h3>
            <Badge className="bg-slate-700 text-amber-300 border-amber-600 text-lg px-3 py-1">
              {stage.year}
            </Badge>
          </div>

          <div className="space-y-4">
            <div className="bg-slate-900/50 rounded p-4">
              <h4 className="text-sm font-semibold text-blue-300 mb-2">What Happened:</h4>
              <p className="text-slate-300 text-sm">{stage.description}</p>
            </div>

            <div className="bg-slate-900/50 rounded p-4">
              <h4 className="text-sm font-semibold text-amber-300 mb-2">Result:</h4>
              <p className="text-slate-300 text-sm">{stage.result}</p>
            </div>
          </div>
        </div>

        {/* How It Works Diagram */}
        <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-600">
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <DollarSign className="w-5 h-5 text-green-400" />
            How The Petrodollar Creates Artificial Dollar Demand
          </h4>
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="flex gap-3 items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">Japan needs oil for industry</p>
                <p className="text-slate-300 text-sm">Japan must first acquire US dollars to buy oil from Saudi Arabia or other OPEC nations.</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-3 items-start">
              <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">Japan exports products to earn dollars</p>
                <p className="text-slate-300 text-sm">Sells cars, electronics, etc. to America. Accepts payment in dollars to accumulate currency for oil purchases.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-3 items-start">
              <div className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">Saudi Arabia sells oil for dollars only</p>
                <p className="text-slate-300 text-sm">Japan uses accumulated dollars to buy oil. Saudi Arabia receives payment in dollars.</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-3 items-start">
              <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">Petrodollars recycled into US assets</p>
                <p className="text-slate-300 text-sm">Saudi Arabia invests dollars in US Treasury bonds, stocks, real estate. Money flows back to America.</p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-3 items-start">
              <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <p className="font-semibold text-white mb-1">US prints more dollars to spend</p>
                <p className="text-slate-300 text-sm">Federal Reserve creates new currency knowing global oil demand guarantees dollar acceptance. Cycle repeats.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits to US */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-900/20 rounded-lg p-4 border border-green-700/30">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-5 h-5 text-green-400" />
              <h4 className="font-semibold text-green-300">Benefits to US</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span>Print unlimited dollars, world must accept them</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span>Export inflation to other countries</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span>Fund massive military and trade deficits</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span>&ldquo;Exorbitant privilege&rdquo; of reserve currency</span>
              </li>
              <li className="flex gap-2">
                <span className="text-green-400">✓</span>
                <span>Control global finance through dollar dominance</span>
              </li>
            </ul>
          </div>

          <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
            <div className="flex items-center gap-2 mb-3">
              <AlertTriangle className="w-5 h-5 text-red-400" />
              <h4 className="font-semibold text-red-300">Consequences for World</h4>
            </div>
            <ul className="space-y-2 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="text-red-400">✗</span>
                <span>Forced to hold depreciating dollars for oil</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">✗</span>
                <span>Absorb US inflation through dollar holdings</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">✗</span>
                <span>Subject to US financial sanctions and control</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">✗</span>
                <span>Can&apos;t escape system without military threat</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-400">✗</span>
                <span>Economic imperialism through monetary policy</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Military Enforcement */}
        <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/50">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-red-400" />
            <h4 className="font-semibold text-red-300">Military Enforcement of Petrodollar</h4>
          </div>
          <p className="text-slate-300 text-sm mb-3">
            The petrodollar isn&apos;t maintained by trust - it&apos;s enforced by the world&apos;s most powerful military:
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-red-400">•</span>
              <span><strong>Iraq 2000:</strong> Saddam Hussein switched to euros for oil sales. Invaded 2003. Returned to dollars.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">•</span>
              <span><strong>Libya 2011:</strong> Gaddafi proposed gold dinar for African oil. NATO intervention. Gold disappeared.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">•</span>
              <span><strong>Iran:</strong> Attempted to sell oil in currencies other than dollars. Decades of sanctions and threats.</span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-400">•</span>
              <span><strong>Venezuela:</strong> Tried to escape petrodollar system. Economic warfare and regime change attempts.</span>
            </li>
          </ul>
        </div>

        {/* Biblical Application */}
        <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-lg p-4 border border-yellow-700/30">
          <h4 className="text-amber-300 font-semibold mb-2 flex items-center gap-2">
            <span className="text-xl">📖</span>
            Biblical Principle: Unjust Weights
          </h4>
          <p className="text-slate-300 text-sm italic mb-2">
            &ldquo;You shall do no injustice in judgment, in measurement of length, weight, or volume. 
            You shall have honest scales, honest weights.&rdquo;
          </p>
          <p className="text-amber-400 text-sm font-semibold mb-3">- Leviticus 19:35-36</p>
          <p className="text-slate-400 text-xs">
            The petrodollar system is an unjust weight - forcing the world to use a currency that the US can 
            print without limit. America exports its inflation to other nations while maintaining purchasing power 
            through oil backing. This systematic theft through monetary policy violates God&apos;s command for honest 
            measurement and fair dealing.
          </p>
        </div>

        {/* System Fragility */}
        <div className="bg-slate-900/70 rounded-lg p-4 border-l-4 border-orange-500">
          <h4 className="text-orange-300 font-semibold mb-2">The System&apos;s Fatal Weakness:</h4>
          <p className="text-slate-300 text-sm mb-2">
            The petrodollar depends entirely on Saudi Arabia and OPEC nations continuing to sell oil exclusively 
            in dollars and US military might deterring alternatives. If major oil producers switch to other currencies, 
            global dollar demand collapses. US would face hyperinflation as decades of exported inflation returns home.
          </p>
          <p className="text-slate-400 text-xs">
            China and Russia are actively building alternative systems. BRICS nations discussing oil trade in yuan. 
            Saudi Arabia making deals with China. The 50-year petrodollar system may be nearing its end.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
