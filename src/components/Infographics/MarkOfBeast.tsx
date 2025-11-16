'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Smartphone, Ban, Eye, Zap, AlertTriangle, ShieldAlert } from 'lucide-react'

interface ControlFeature {
  id: number
  title: string
  description: string
  example: string
  severity: 'high' | 'critical'
  implemented: 'active' | 'testing' | 'proposed'
}

const features: ControlFeature[] = [
  {
    id: 1,
    title: 'Total Transaction Surveillance',
    description: 'Every purchase tracked in real-time. Who you pay, what you buy, when, where - all permanently recorded.',
    example: 'China\'s digital yuan already tracks all transactions. No privacy possible with CBDC.',
    severity: 'high',
    implemented: 'active'
  },
  {
    id: 2,
    title: 'Programmable Money',
    description: 'Government sets rules on what you can buy, when, how much. Money expires if not spent. Spending limits enforced automatically.',
    example: 'UK proposed CBDC with ability to prevent "undesirable purchases" like fuel or meat.',
    severity: 'critical',
    implemented: 'testing'
  },
  {
    id: 3,
    title: 'Instant Freezing/Seizure',
    description: 'Assets frozen instantly without trial or warning. Bank accounts emptied remotely based on social credit or political views.',
    example: 'Canada 2022: Froze bank accounts of protesters and donors without court order.',
    severity: 'critical',
    implemented: 'active'
  },
  {
    id: 4,
    title: 'Negative Interest Rates',
    description: 'Money automatically deducted from account. Forces spending. Saves = theft. No escape by holding cash - cash being eliminated.',
    example: 'European Central Bank imposed negative rates 2014-2022. CBDC makes this inescapable.',
    severity: 'high',
    implemented: 'active'
  },
  {
    id: 5,
    title: 'Geofencing',
    description: 'Money only works in approved locations. Travel restrictions enforced financially. Can\'t spend outside designated zone.',
    example: 'China\'s system already prevents travel for low social credit scores.',
    severity: 'critical',
    implemented: 'active'
  },
  {
    id: 6,
    title: 'Social Credit Integration',
    description: 'Wrong opinions = frozen assets. Attend wrong protest = can\'t buy food. Post forbidden content = economic death.',
    example: 'China prevents 17.5 million people from buying plane tickets based on social credit.',
    severity: 'critical',
    implemented: 'active'
  },
  {
    id: 7,
    title: 'Expiring Currency',
    description: 'Money has expiration date. Must spend or lose it. No saving possible. Complete control over economic behavior.',
    example: 'IMF white paper 2023 proposed currency with demurrage (automatic decay).',
    severity: 'high',
    implemented: 'proposed'
  },
  {
    id: 8,
    title: 'No Anonymous Transactions',
    description: 'Cash eliminated. Every transaction linked to identity. No gifts, no privacy, no escape from surveillance.',
    example: 'India demonetized 86% of currency 2016. Push toward digital-only accelerating globally.',
    severity: 'critical',
    implemented: 'testing'
  }
]

export default function MarkOfBeast() {
  const [selectedFeature, setSelectedFeature] = useState(0)
  const feature = features[selectedFeature]

  return (
    <Card className="bg-slate-800 border-slate-700 my-8">
      <CardHeader>
        <div className="flex items-center gap-3 mb-2">
          <ShieldAlert className="w-8 h-8 text-red-500 animate-pulse" />
          <CardTitle className="text-2xl text-white">Digital Currency Control: Mark of the Beast System</CardTitle>
        </div>
        <p className="text-slate-300 text-sm">
          Central Bank Digital Currencies (CBDCs) enable total financial control. Combined with digital ID and social credit, 
          they create the technological infrastructure for the Mark of the Beast prophesied in Revelation 13.
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Biblical Prophecy */}
        <div className="bg-gradient-to-r from-red-900/40 to-orange-900/20 rounded-lg p-5 border-2 border-red-600/50">
          <h4 className="text-red-300 font-bold mb-3 flex items-center gap-2 text-lg">
            <span className="text-2xl">📖</span>
            Revelation 13:16-17
          </h4>
          <p className="text-slate-200 italic text-sm mb-3 leading-relaxed">
            &ldquo;He causes all, both small and great, rich and poor, free and slave, to receive a mark on 
            their right hand or on their foreheads, and that no one may buy or sell except one who has 
            the mark or the name of the beast, or the number of his name.&rdquo;
          </p>
          <div className="bg-red-950/50 rounded p-3 mt-3">
            <p className="text-red-200 text-xs font-semibold mb-2">EXACT FULFILLMENT:</p>
            <ul className="text-xs text-slate-300 space-y-1">
              <li>✓ <strong>&ldquo;Causes all&rdquo;</strong> - Mandatory system, no opt-out</li>
              <li>✓ <strong>&ldquo;Small and great, rich and poor&rdquo;</strong> - Universal implementation</li>
              <li>✓ <strong>&ldquo;No one may buy or sell&rdquo;</strong> - Total economic control</li>
              <li>✓ <strong>&ldquo;Except one who has the mark&rdquo;</strong> - Compliance required for economy</li>
            </ul>
          </div>
        </div>

        {/* Feature Selector */}
        <div className="grid grid-cols-2 gap-2">
          {features.map((f, idx) => (
            <Button
              key={f.id}
              onClick={() => setSelectedFeature(idx)}
              variant={selectedFeature === idx ? "default" : "outline"}
              className={selectedFeature === idx ? 
                (f.severity === 'critical' ? 
                  "bg-red-600 hover:bg-red-700 text-white" : 
                  "bg-orange-600 hover:bg-orange-700 text-white") :
                "bg-slate-700 hover:bg-slate-600 text-slate-300 border-slate-600"
              }
              size="sm"
            >
              <span className="text-xs">{f.id}. {f.title}</span>
            </Button>
          ))}
        </div>

        {/* Selected Feature Details */}
        <div className={`rounded-lg p-5 border-2 ${
          feature.severity === 'critical' ? 
            'bg-red-900/30 border-red-600/50' : 
            'bg-orange-900/30 border-orange-600/50'
        }`}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{feature.title}</h3>
            <div className="flex gap-2">
              <Badge className={feature.severity === 'critical' ? 
                'bg-red-600 text-white' : 'bg-orange-600 text-white'
              }>
                {feature.severity === 'critical' ? '🚨 CRITICAL' : '⚠️ HIGH RISK'}
              </Badge>
              <Badge className={
                feature.implemented === 'active' ? 'bg-green-700 text-white' :
                feature.implemented === 'testing' ? 'bg-yellow-700 text-white' :
                'bg-blue-700 text-white'
              }>
                {feature.implemented === 'active' ? '✓ ACTIVE' :
                 feature.implemented === 'testing' ? '⚡ TESTING' :
                 '📋 PROPOSED'}
              </Badge>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-slate-900/50 rounded p-3">
              <h4 className="text-sm font-semibold text-red-300 mb-1">How It Works:</h4>
              <p className="text-slate-300 text-sm">{feature.description}</p>
            </div>

            <div className="bg-slate-900/50 rounded p-3">
              <h4 className="text-sm font-semibold text-amber-300 mb-1">Real Example:</h4>
              <p className="text-slate-300 text-sm">{feature.example}</p>
            </div>
          </div>
        </div>

        {/* Implementation Status */}
        <div className="bg-slate-900/50 rounded-lg p-5 border border-slate-600">
          <h4 className="text-white font-bold mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            CBDC Implementation Timeline
          </h4>
          <div className="space-y-3 text-sm">
            <div className="flex gap-3 items-start">
              <Badge className="bg-green-700 text-white flex-shrink-0">ACTIVE</Badge>
              <div>
                <p className="font-semibold text-white">Currently Operating:</p>
                <p className="text-slate-300 text-xs">China (digital yuan), Bahamas (sand dollar), Nigeria (eNaira), Jamaica (JamDex)</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Badge className="bg-yellow-700 text-white flex-shrink-0">PILOT</Badge>
              <div>
                <p className="font-semibold text-white">Testing Phase:</p>
                <p className="text-slate-300 text-xs">European Union, India, Brazil, Russia, South Korea, Sweden, Canada</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <Badge className="bg-blue-700 text-white flex-shrink-0">PLANNED</Badge>
              <div>
                <p className="font-semibold text-white">Development Stage:</p>
                <p className="text-slate-300 text-xs">United States (FedNow preparing infrastructure), United Kingdom, Australia, Japan</p>
              </div>
            </div>
          </div>
          <div className="mt-4 bg-red-950/50 rounded p-3">
            <p className="text-red-200 text-xs font-bold">
              130+ countries (98% of global GDP) actively developing CBDCs - International Monetary Fund 2024
            </p>
          </div>
        </div>

        {/* Control Mechanisms */}
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-5 h-5 text-red-400" />
              <h4 className="font-semibold text-red-300 text-sm">Surveillance</h4>
            </div>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• Every transaction tracked</li>
              <li>• Location data captured</li>
              <li>• Spending patterns analyzed</li>
              <li>• Political views inferred</li>
              <li>• No financial privacy exists</li>
            </ul>
          </div>

          <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Ban className="w-5 h-5 text-orange-400" />
              <h4 className="font-semibold text-orange-300 text-sm">Control</h4>
            </div>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• Freeze accounts instantly</li>
              <li>• Prevent specific purchases</li>
              <li>• Limit spending amounts</li>
              <li>• Force currency expiration</li>
              <li>• Enforce geofencing</li>
            </ul>
          </div>

          <div className="bg-purple-900/20 rounded-lg p-4 border border-purple-700/30">
            <div className="flex items-center gap-2 mb-2">
              <Smartphone className="w-5 h-5 text-purple-400" />
              <h4 className="font-semibold text-purple-300 text-sm">Dependency</h4>
            </div>
            <ul className="space-y-1 text-xs text-slate-300">
              <li>• Cash eliminated</li>
              <li>• Digital ID required</li>
              <li>• Smartphone mandatory</li>
              <li>• Biometric verification</li>
              <li>• Total system dependency</li>
            </ul>
          </div>
        </div>

        {/* The Spiritual Battle */}
        <div className="bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-lg p-4 border border-yellow-700/30">
          <h4 className="text-amber-300 font-semibold mb-3 flex items-center gap-2">
            <span className="text-xl">⚔️</span>
            The Choice: Convenience vs. Freedom
          </h4>
          <p className="text-slate-300 text-sm mb-3">
            The Mark of the Beast won&apos;t be forced at gunpoint initially. It will be offered as convenience, safety, 
            efficiency. Those who refuse will simply be unable to participate in the economy - exactly as Revelation 
            prophesied 2,000 years ago.
          </p>
          <div className="bg-red-950/50 rounded p-3">
            <p className="text-red-200 text-xs font-bold mb-2">WARNING FROM REVELATION 14:9-11:</p>
            <p className="text-slate-300 text-xs italic">
              &ldquo;If anyone worships the beast and its image and receives its mark on their forehead or on their hand, 
              they, too, will drink the wine of God&apos;s fury... They will be tormented with burning sulfur... 
              And the smoke of their torment will rise for ever and ever. There will be no rest day or night for 
              those who worship the beast and its image, or for anyone who receives the mark of its name.&rdquo;
            </p>
          </div>
        </div>

        {/* What To Do */}
        <div className="bg-slate-900/70 rounded-lg p-4 border-l-4 border-amber-500">
          <h4 className="text-amber-300 font-semibold mb-3">What Can You Do?</h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li className="flex gap-2">
              <span className="text-amber-400">1.</span>
              <span><strong>Understand the technology</strong> - Know what CBDCs enable before they&apos;re mandatory</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">2.</span>
              <span><strong>Use cash while possible</strong> - Support businesses that accept cash, resist cashless-only</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">3.</span>
              <span><strong>Store physical assets</strong> - Gold, silver, land - things they can&apos;t delete with keystroke</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">4.</span>
              <span><strong>Build local networks</strong> - Communities that can trade outside digital system</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">5.</span>
              <span><strong>Warn others</strong> - Most people have no idea what&apos;s coming</span>
            </li>
            <li className="flex gap-2">
              <span className="text-amber-400">6.</span>
              <span><strong>Trust in God</strong> - This is ultimately spiritual warfare. Jesus Christ is the only salvation.</span>
            </li>
          </ul>
        </div>

        {/* Final Warning */}
        <div className="bg-red-950/50 rounded-lg p-4 border-2 border-red-600/50">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-6 h-6 text-red-400 animate-pulse" />
            <h4 className="text-red-300 font-bold">FINAL WARNING</h4>
          </div>
          <p className="text-slate-200 text-sm">
            The technology for total economic control exists NOW. The infrastructure is being built NOW. The legal 
            framework is being established NOW. When the crisis comes that &ldquo;requires&rdquo; mandatory digital currency, 
            it will be too late to prepare. The choice between convenience and freedom, between compliance and faith, 
            is coming. Choose wisely. Your eternal soul depends on it.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
