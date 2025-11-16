'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Building2, Users, Shield, DollarSign, Globe, LucideIcon } from 'lucide-react'

interface BankingLayer {
  id: number
  name: string
  icon: LucideIcon
  entities: string[]
  control: string
  power: string
  color: string
}

const layers: BankingLayer[] = [
  {
    id: 1,
    name: 'Bank for International Settlements (BIS)',
    icon: Globe,
    entities: [
      'Central bank of central banks (Basel, Switzerland)',
      'Owned by 63 central banks worldwide',
      'Immune from national laws and taxation',
      'No oversight or accountability'
    ],
    control: 'Sets global banking rules and capital requirements',
    power: 'Controls all central banks globally - above national sovereignty',
    color: 'red'
  },
  {
    id: 2,
    name: 'Central Banks (Federal Reserve, ECB, BoE, BoJ)',
    icon: Building2,
    entities: [
      'Federal Reserve (USA) - Private corporation',
      'European Central Bank (EU)',
      'Bank of England (UK)',
      'Bank of Japan (Japan)',
      'People\'s Bank of China'
    ],
    control: 'Create national currency, set interest rates, control money supply',
    power: 'Coordinate global monetary policy, bailout commercial banks',
    color: 'orange'
  },
  {
    id: 3,
    name: 'International Financial Institutions',
    icon: Shield,
    entities: [
      'International Monetary Fund (IMF)',
      'World Bank',
      'Bank for International Settlements',
      'Regional development banks'
    ],
    control: 'Loan to nations with "structural adjustment" conditions',
    power: 'Control developing nations through debt and policy requirements',
    color: 'amber'
  },
  {
    id: 4,
    name: 'Mega Banks ("Too Big To Fail")',
    icon: Building2,
    entities: [
      'JP Morgan Chase',
      'Bank of America',
      'Citigroup',
      'Wells Fargo',
      'Goldman Sachs',
      'Deutsche Bank',
      'HSBC'
    ],
    control: 'Create credit through fractional reserve, derivatives trading',
    power: 'Guaranteed bailouts, above prosecution, control governments',
    color: 'blue'
  },
  {
    id: 5,
    name: 'Shadow Banking & Hedge Funds',
    icon: DollarSign,
    entities: [
      'BlackRock ($10 trillion assets)',
      'Vanguard ($8 trillion assets)',
      'State Street ($4 trillion assets)',
      'Private equity firms',
      'Hedge funds'
    ],
    control: 'Own controlling shares in most major corporations',
    power: 'Vote on corporate boards, influence all industry sectors',
    color: 'purple'
  },
  {
    id: 6,
    name: 'Citizens & Small Businesses',
    icon: Users,
    entities: [
      'Working people',
      'Small business owners',
      'Savers',
      'Retirees',
      'Students with loans'
    ],
    control: 'None - subject to all levels above',
    power: 'Provide labor, pay taxes, absorb losses when system fails',
    color: 'slate'
  }
]

export default function CentralBankingCartel() {
  const [selectedLayer, setSelectedLayer] = useState<number>(1)
  const layer = layers.find(l => l.id === selectedLayer) || layers[0]

  const getColorClasses = (color: string, isSelected: boolean) => {
    if (!isSelected) {
      return 'bg-slate-700 hover:bg-slate-600 text-slate-300 border-slate-600'
    }
    switch(color) {
      case 'red': return 'bg-red-600 hover:bg-red-700 text-white border-red-500'
      case 'orange': return 'bg-orange-600 hover:bg-orange-700 text-white border-orange-500'
      case 'amber': return 'bg-amber-600 hover:bg-amber-700 text-white border-amber-500'
      case 'blue': return 'bg-blue-600 hover:bg-blue-700 text-white border-blue-500'
      case 'purple': return 'bg-purple-600 hover:bg-purple-700 text-white border-purple-500'
      case 'slate': return 'bg-slate-600 hover:bg-slate-700 text-white border-slate-500'
      default: return 'bg-slate-700 hover:bg-slate-600 text-slate-300 border-slate-600'
    }
  }

  const getLayerBgColor = (color: string) => {
    switch(color) {
      case 'red': return 'from-red-900/40 to-red-800/20'
      case 'orange': return 'from-orange-900/40 to-orange-800/20'
      case 'amber': return 'from-amber-900/40 to-amber-800/20'
      case 'blue': return 'from-blue-900/40 to-blue-800/20'
      case 'purple': return 'from-purple-900/40 to-purple-800/20'
      case 'slate': return 'from-slate-900/40 to-slate-800/20'
      default: return 'from-slate-900/40 to-slate-800/20'
    }
  }

  const Icon = layer.icon

  return (
    <Card className="bg-slate-800 border-slate-700 my-8">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <Building2 className="w-8 h-8 text-red-400" />
          <CardTitle className="text-2xl text-white">The Central Banking Cartel</CardTitle>
        </div>
        <p className="text-slate-300 text-sm">
          Global finance is controlled by interconnected layers of institutions operating above national laws. 
          This pyramid structure concentrates power at the top while extracting wealth from the bottom.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Pyramid Visualization */}
        <div className="space-y-1">
          {layers.map((l) => {
            const widthPercent = 20 + (6 - l.id) * 13
            const isSelected = l.id === selectedLayer
            return (
              <div key={l.id} className="flex justify-center">
                <Button
                  onClick={() => setSelectedLayer(l.id)}
                  className={`${getColorClasses(l.color, isSelected)} transition-all duration-300 h-auto py-4`}
                  style={{ width: `${widthPercent}%` }}
                >
                  <span className="text-xs font-semibold text-center">
                    {l.id}. {l.name}
                  </span>
                </Button>
              </div>
            )
          })}
        </div>

        {/* Selected Layer Details */}
        <div className={`bg-gradient-to-r ${getLayerBgColor(layer.color)} rounded-lg p-6 border border-slate-600`}>
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-slate-900/50 p-3 rounded-lg">
              <Icon className="w-8 h-8 text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{layer.name}</h3>
              <Badge className={`mt-1 ${layer.color === 'slate' ? 'bg-slate-700' : 'bg-slate-800'} text-slate-200`}>
                Level {layer.id} of 6
              </Badge>
            </div>
          </div>

          {/* Entities */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-amber-300 mb-2">Key Entities:</h4>
            <ul className="space-y-1">
              {layer.entities.map((entity, idx) => (
                <li key={idx} className="text-sm text-slate-300 flex gap-2">
                  <span className="text-amber-400">•</span>
                  <span>{entity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Control */}
          <div className="mb-4 bg-slate-900/50 rounded p-3">
            <h4 className="text-sm font-semibold text-blue-300 mb-1">What They Control:</h4>
            <p className="text-sm text-slate-300">{layer.control}</p>
          </div>

          {/* Power */}
          <div className="bg-slate-900/50 rounded p-3">
            <h4 className="text-sm font-semibold text-red-300 mb-1">Their Power:</h4>
            <p className="text-sm text-slate-300">{layer.power}</p>
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-600">
          <h4 className="text-white font-bold mb-3 flex items-center gap-2">
            <span className="text-red-400">⚠️</span>
            How The Cartel Maintains Control
          </h4>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">1.</span>
              <div>
                <p className="font-semibold text-white mb-1">Create Money From Nothing</p>
                <p>Central banks create currency through digital entries. Commercial banks multiply it 10x through fractional reserve lending.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">2.</span>
              <div>
                <p className="font-semibold text-white mb-1">Loan to Governments at Interest</p>
                <p>Nations borrow their own currency from private banks and pay interest forever. National debts become unpayable by design.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">3.</span>
              <div>
                <p className="font-semibold text-white mb-1">Boom-Bust Cycles</p>
                <p>Expand credit to create boom, contract to create bust. Banks seize real assets during crashes they engineer.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">4.</span>
              <div>
                <p className="font-semibold text-white mb-1">&ldquo;Too Big To Fail&rdquo;</p>
                <p>Mega banks take unlimited risks knowing taxpayers will bail them out. Profits privatized, losses socialized.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">5.</span>
              <div>
                <p className="font-semibold text-white mb-1">Above The Law</p>
                <p>BIS immune from all national laws. Mega banks immune from prosecution (&ldquo;too big to jail&rdquo;). No accountability.</p>
              </div>
            </div>
            <div className="flex gap-3">
              <span className="text-red-400 font-bold">6.</span>
              <div>
                <p className="font-semibold text-white mb-1">Control Media & Education</p>
                <p>Banking interests fund economics departments, own media outlets. Public kept ignorant of how money really works.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Biblical Warning */}
        <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-lg p-4 border border-yellow-700/30">
          <h4 className="text-amber-300 font-semibold mb-2 flex items-center gap-2">
            <span className="text-xl">📖</span>
            Biblical Warning About Debt Slavery
          </h4>
          <p className="text-slate-300 text-sm italic mb-2">
            &ldquo;The rich rule over the poor, and the borrower is slave to the lender.&rdquo;
          </p>
          <p className="text-amber-400 text-sm font-semibold mb-3">- Proverbs 22:7</p>
          <p className="text-slate-400 text-xs">
            The entire global financial system is designed to keep nations and people in perpetual debt slavery. 
            Those who control money creation control everything. This isn&apos;t conspiracy theory - it&apos;s how 
            the system openly operates, hidden only by complexity and misdirection.
          </p>
        </div>

        {/* Key Quote */}
        <div className="bg-slate-900/70 rounded-lg p-4 border-l-4 border-red-500">
          <p className="text-slate-300 italic text-sm mb-2">
            &ldquo;Give me control of a nation&apos;s money supply, and I care not who makes its laws.&rdquo;
          </p>
          <p className="text-red-400 text-sm font-semibold">- Mayer Amschel Rothschild, Founder of Banking Dynasty</p>
          <p className="text-slate-500 text-xs mt-2">
            This quote reveals the truth: political power is subordinate to monetary control. Elections are theater 
            when the same banking cartel controls the currency regardless of which politicians are in office.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
