'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollText, Coins, Shield, TrendingUp, AlertTriangle, Lightbulb } from 'lucide-react'

export default function TallyStickSystem() {
  const [selectedFeature, setSelectedFeature] = useState<string>('how-it-works')

  const features = [
    {
      id: 'how-it-works',
      icon: ScrollText,
      title: 'How Tally Sticks Worked',
      color: 'text-amber-400',
      bgColor: 'bg-amber-600/20',
      borderColor: 'border-amber-600/30'
    },
    {
      id: 'advantages',
      icon: Shield,
      title: 'Revolutionary Advantages',
      color: 'text-green-400',
      bgColor: 'bg-green-600/20',
      borderColor: 'border-green-600/30'
    },
    {
      id: 'modern-lesson',
      icon: Lightbulb,
      title: 'Modern Lesson',
      color: 'text-blue-400',
      bgColor: 'bg-blue-600/20',
      borderColor: 'border-blue-600/30'
    }
  ]

  const content = {
    'how-it-works': {
      steps: [
        {
          number: 1,
          title: 'Split the Stick',
          description: 'A wooden stick was notched to represent the amount of debt or tax owed, then split lengthwise down the middle.'
        },
        {
          number: 2,
          title: 'Two Identical Records',
          description: 'Both halves contained identical notches - impossible to forge because the grain pattern was unique and had to match perfectly.'
        },
        {
          number: 3,
          title: 'Stock and Foil',
          description: 'The debtor kept the "stock" (origin of "stockholder"). The creditor kept the "foil" as proof of the debt.'
        },
        {
          number: 4,
          title: 'Verification',
          description: 'When debt was paid, both pieces were brought together. If notches and grain matched perfectly, the debt was legitimate.'
        }
      ],
      insight: 'Tally sticks were in use in England for over 700 years (1100-1826 AD). The Bank of England was literally built on a system that didn\'t need gold, silver, or paper - just honest record-keeping.'
    },
    'advantages': {
      benefits: [
        {
          icon: Shield,
          title: 'Impossible to Counterfeit',
          description: 'Wood grain is unique like a fingerprint. Both halves had to match perfectly, making forgery impossible with medieval technology.',
          importance: 'HIGH'
        },
        {
          icon: Coins,
          title: 'No Precious Metals Needed',
          description: 'Proved currency doesn\'t require gold/silver backing - just credible record-keeping and community trust.',
          importance: 'CRITICAL'
        },
        {
          icon: ScrollText,
          title: 'Decentralized Verification',
          description: 'Both parties held proof. No central authority needed to validate the transaction - peer-to-peer system.',
          importance: 'HIGH'
        },
        {
          icon: TrendingUp,
          title: 'Circulated as Currency',
          description: 'Tally sticks could be traded like money. Tax obligations became a medium of exchange without government printing.',
          importance: 'MEDIUM'
        }
      ]
    },
    'modern-lesson': {
      principles: [
        {
          title: 'Currency is Record-Keeping',
          explanation: 'Tally sticks prove money is fundamentally just a ledger system - a record of who owes what to whom. Modern digital currencies are the same concept: entries in a database.',
          modern: 'Today: Bitcoin, bank accounts, credit cards - all are ledger entries, not physical objects.'
        },
        {
          title: 'Trust Matters More Than Metal',
          explanation: 'England\'s economy functioned for 700 years on wooden sticks because the system was trusted and couldn\'t be manipulated. Gold backing isn\'t necessary if the system has integrity.',
          modern: 'Today: Central banks create trillions from nothing BECAUSE trust was transferred from commodity backing to institutional authority.'
        },
        {
          title: 'Centralization Creates Corruption',
          explanation: 'Tally sticks were peer-to-peer with dual verification. When systems centralize (central banks controlling ledgers), manipulation becomes possible.',
          modern: 'Today: Federal Reserve controls the ledger. They can create unlimited money, but you can\'t audit or verify their records like you could with tally sticks.'
        }
      ],
      warning: 'In 1834, the British government decided to burn centuries of old tally sticks in the furnaces beneath the Houses of Parliament. The fire got out of control and burned down most of Parliament. Symbolic: destroying honest money led to burning down the government itself.'
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border-2 border-amber-600/30 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          English Tally Stick System (1100-1826 AD)
        </h3>
        <p className="text-slate-300 text-sm">
          Wooden sticks proving currency is record-keeping, not commodity
        </p>
      </div>

      {/* Feature Selection */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {features.map((feature) => {
          const Icon = feature.icon
          const isSelected = selectedFeature === feature.id
          return (
            <button
              key={feature.id}
              onClick={() => setSelectedFeature(feature.id)}
              className={`p-3 rounded-lg border-2 transition-all ${
                isSelected
                  ? `${feature.bgColor} ${feature.borderColor}`
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${isSelected ? feature.color : 'text-slate-400'}`} />
              <p className={`text-xs font-medium ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                {feature.title}
              </p>
            </button>
          )
        })}
      </div>

      {/* Content Display */}
      <Card className="bg-slate-800/50 border-slate-700 p-6">
        {selectedFeature === 'how-it-works' && (
          <div className="space-y-6">
            <div className="grid gap-4">
              {content['how-it-works'].steps.map((step) => (
                <div key={step.number} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-600/20 border-2 border-amber-600/50 flex items-center justify-center">
                    <span className="text-amber-400 font-bold">{step.number}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-white font-semibold mb-1">{step.title}</h4>
                    <p className="text-slate-300 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-amber-900/30 to-yellow-900/30 rounded-lg p-4 border border-amber-700/40">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <p className="text-amber-200 text-sm leading-relaxed">
                  {content['how-it-works'].insight}
                </p>
              </div>
            </div>
          </div>
        )}

        {selectedFeature === 'advantages' && (
          <div className="space-y-4">
            {content.advantages.benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-slate-600">
                  <div className="flex items-start gap-3 mb-2">
                    <Icon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-white font-semibold">{benefit.title}</h4>
                        <Badge className={`text-xs ${
                          benefit.importance === 'CRITICAL' ? 'bg-red-600/20 text-red-300 border-red-600/40' :
                          benefit.importance === 'HIGH' ? 'bg-orange-600/20 text-orange-300 border-orange-600/40' :
                          'bg-blue-600/20 text-blue-300 border-blue-600/40'
                        }`}>
                          {benefit.importance}
                        </Badge>
                      </div>
                      <p className="text-slate-300 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {selectedFeature === 'modern-lesson' && (
          <div className="space-y-6">
            {content['modern-lesson'].principles.map((principle, index) => (
              <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-blue-600/30">
                <h4 className="text-blue-400 font-semibold mb-2 text-lg">{principle.title}</h4>
                <p className="text-slate-300 text-sm mb-3 leading-relaxed">{principle.explanation}</p>
                <div className="bg-blue-900/20 rounded p-3 border border-blue-700/30">
                  <p className="text-blue-200 text-xs">
                    <span className="font-semibold">Modern Application:</span> {principle.modern}
                  </p>
                </div>
              </div>
            ))}

            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-4 border-2 border-red-700/40">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-200 font-semibold mb-2">Historical Irony:</p>
                  <p className="text-red-200/90 text-sm leading-relaxed">
                    {content['modern-lesson'].warning}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Biblical Connection */}
      <div className="mt-6 bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-lg p-4 border border-yellow-700/30">
        <p className="text-yellow-200 text-sm font-semibold mb-2">Biblical Principle:</p>
        <p className="text-slate-300 text-sm italic mb-2">
          &ldquo;Shall I count them pure with the wicked balances, and with the bag of deceitful weights?&rdquo; - Micah 6:11
        </p>
        <p className="text-slate-400 text-xs">
          Tally sticks were honest weights and measures - impossible to manipulate. Modern digital ledgers controlled by central banks are &ldquo;deceitful weights&rdquo; because they can be altered at will, creating money from nothing and stealing through inflation.
        </p>
      </div>
    </div>
  )
}
