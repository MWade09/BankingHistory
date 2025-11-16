'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Flame, Coins, Calendar, Target, Shield, AlertTriangle, BookOpen } from 'lucide-react'

export default function PhoenixProphecy() {
  const [selectedTab, setSelectedTab] = useState<string>('symbolism')

  const tabs = [
    { id: 'symbolism', label: 'Phoenix Symbolism', icon: Flame, color: 'text-orange-400' },
    { id: 'timeline', label: '2018 Prophecy', icon: Calendar, color: 'text-blue-400' },
    { id: 'resistance', label: 'How to Resist', icon: Shield, color: 'text-green-400' }
  ]

  const content = {
    symbolism: {
      title: 'The Phoenix: Satan\'s Bird',
      subtitle: 'January 1988 Economist Magazine Cover (Rothschild Publication)',
      elements: [
        {
          icon: Flame,
          element: 'Phoenix Rising from Ashes',
          meaning: 'New World Order financial system rising from destruction of current fiat currencies',
          occult: 'Phoenix is Lucifer\'s symbol: Destroyed and reborn through fire. "Order out of Chaos" - Masonic motto.'
        },
        {
          icon: Coins,
          element: 'Burning Fiat Currencies',
          meaning: 'Dollars, pounds, yen, francs shown burning beneath the phoenix',
          occult: 'Deliberate destruction of national currencies to force global digital money'
        },
        {
          icon: Coins,
          element: 'Gold Coin with "2018"',
          meaning: 'Target year for new system implementation around phoenix neck',
          occult: 'Year 2018 has passed - proves they are powerful but NOT all-powerful'
        },
        {
          icon: Target,
          element: 'Phi (Φ) Symbol',
          meaning: 'Greek letter representing golden ratio AND digital binary (1 and 0)',
          occult: 'Fusion of gold with digital: CBDCs backed by gold but fully programmable/controlled'
        }
      ],
      revelation: {
        title: 'This is Not Hidden Knowledge',
        details: 'Elite publish their plans openly on magazine covers sold worldwide. Most people see it and think nothing of it. This is "hidden in plain sight" - occult principle of karmic disclosure.'
      }
    },
    timeline: {
      title: 'The 2018 Prophecy: What Happened?',
      subtitle: 'Economist predicted 2018 as transformation year - but it didn\'t happen as planned',
      events: [
        {
          year: '1988',
          event: 'Phoenix Cover Published',
          significance: 'Rothschild-owned Economist shows phoenix with 2018 date',
          status: 'REVEALED'
        },
        {
          year: '2008',
          event: 'Financial Crisis',
          significance: 'Planned collapse to justify more control. "Never let a crisis go to waste."',
          status: 'EXECUTED'
        },
        {
          year: '2018',
          event: 'Prophecy Year Arrives',
          significance: 'Expected: Global currency reset. Actual: System limps along with money printing.',
          status: 'DELAYED'
        },
        {
          year: '2020',
          event: 'COVID-19 Acceleration',
          significance: 'Pandemic used to fast-track digital control, CBDC preparation, social credit conditioning',
          status: 'EXECUTED'
        },
        {
          year: '2024',
          event: 'CBDC Rollout',
          significance: '130+ countries (98% of GDP) developing CBDCs. Infrastructure being built NOW.',
          status: 'IN PROGRESS'
        },
        {
          year: '2025+',
          event: 'The Convergence',
          significance: 'Digital ID + CBDCs + Social Credit = Complete control system (Mark of Beast infrastructure)',
          status: 'IMMINENT'
        }
      ],
      hopeful: {
        title: 'Why 2018 Passed: They Are Not God',
        explanation: 'The fact that 2018 came and went without their complete victory proves a critical truth: The New World Order is POWERFUL but NOT ALL-POWERFUL. Their timeline can be disrupted through:',
        methods: [
          'Prayer and repentance',
          'Mass awakening and resistance',
          'Divine intervention',
          'Exposure of their plans',
          'Refusal to comply with digital systems'
        ]
      }
    },
    resistance: {
      title: 'Practical Steps to Resist the System',
      subtitle: 'You are not powerless - every act of resistance matters',
      spiritual: [
        {
          action: 'Accept Jesus Christ',
          why: 'This is ultimately a spiritual battle. Without Christ, you fight alone against principalities and powers.',
          verse: 'Ephesians 6:12 - "We wrestle not against flesh and blood, but against principalities, against powers"'
        },
        {
          action: 'Prayer and Fasting',
          why: 'Spiritual weapons for spiritual warfare. Prayer changes things and delays judgment.',
          verse: '2 Chronicles 7:14 - "If my people...humble themselves and pray...I will heal their land"'
        }
      ],
      practical: [
        {
          category: 'Financial',
          steps: [
            'Hold physical gold and silver (not paper contracts)',
            'Reduce dependence on banking system',
            'Support local businesses with cash',
            'Build community networks for barter/trade',
            'Get out of debt as much as possible'
          ]
        },
        {
          category: 'Digital',
          steps: [
            'Resist digital ID requirements',
            'Use cash whenever possible',
            'Question and delay CBDC adoption',
            'Maintain privacy - don\'t volunteer all data',
            'Support parallel economy systems'
          ]
        },
        {
          category: 'Community',
          steps: [
            'Build relationships with like-minded people',
            'Share this information with others',
            'Support freedom-minded businesses',
            'Participate in local governance',
            'Prepare for supply chain disruptions'
          ]
        }
      ],
      warning: {
        title: 'Time is Short But Not Over',
        message: 'The window for preparation is closing but hasn\'t shut. The elite broadcast their plans expecting compliance. Your refusal to comply disrupts their timeline. Most importantly: Get right with God through Jesus Christ. The financial system will collapse, but your soul is eternal.'
      }
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-red-950/20 to-slate-900 rounded-xl p-6 border-2 border-red-600/40 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          The Economist Phoenix Prophecy (1988)
        </h3>
        <p className="text-slate-300 text-sm">
          Rothschild magazine predicted 2018 transformation - it was delayed, not defeated
        </p>
      </div>

      {/* Tab Selection */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isSelected = selectedTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`p-3 rounded-lg border-2 transition-all ${
                isSelected
                  ? 'bg-slate-700 border-orange-600/50'
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${isSelected ? tab.color : 'text-slate-400'}`} />
              <p className={`text-xs font-medium ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                {tab.label}
              </p>
            </button>
          )
        })}
      </div>

      {/* Content */}
      <Card className="bg-slate-800/50 border-slate-700 p-6">
        {selectedTab === 'symbolism' && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-white mb-1">{content.symbolism.title}</h4>
              <p className="text-slate-400 text-sm">{content.symbolism.subtitle}</p>
            </div>

            <div className="space-y-4">
              {content.symbolism.elements.map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-orange-600/30">
                    <div className="flex items-start gap-3">
                      <Icon className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <h5 className="text-white font-semibold mb-1">{item.element}</h5>
                        <p className="text-slate-300 text-sm mb-2">{item.meaning}</p>
                        <div className="bg-red-900/20 rounded p-2 border border-red-700/30">
                          <p className="text-red-200 text-xs">
                            <span className="font-semibold">Occult Meaning:</span> {item.occult}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="bg-gradient-to-r from-yellow-900/30 to-amber-900/30 rounded-lg p-4 border-2 border-yellow-700/40">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-yellow-300 font-bold mb-2">{content.symbolism.revelation.title}</h5>
                  <p className="text-yellow-200/90 text-sm">{content.symbolism.revelation.details}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'timeline' && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-white mb-1">{content.timeline.title}</h4>
              <p className="text-slate-400 text-sm">{content.timeline.subtitle}</p>
            </div>

            <div className="space-y-3">
              {content.timeline.events.map((event, index) => (
                <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-blue-600/30">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <Badge className="bg-blue-600/20 text-blue-300 border-blue-600/40">
                        {event.year}
                      </Badge>
                      <h5 className="text-white font-semibold">{event.event}</h5>
                    </div>
                    <Badge className={`text-xs ${
                      event.status === 'EXECUTED' ? 'bg-red-600/20 text-red-300 border-red-600/40' :
                      event.status === 'IN PROGRESS' ? 'bg-orange-600/20 text-orange-300 border-orange-600/40' :
                      event.status === 'IMMINENT' ? 'bg-purple-600/20 text-purple-300 border-purple-600/40' :
                      event.status === 'DELAYED' ? 'bg-green-600/20 text-green-300 border-green-600/40' :
                      'bg-slate-600/20 text-slate-300 border-slate-600/40'
                    }`}>
                      {event.status}
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm">{event.significance}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-4 border-2 border-green-700/40">
              <div className="flex items-start gap-3">
                <Shield className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h5 className="text-green-300 font-bold mb-2">{content.timeline.hopeful.title}</h5>
                  <p className="text-green-200 text-sm mb-3">{content.timeline.hopeful.explanation}</p>
                  <ul className="space-y-1">
                    {content.timeline.hopeful.methods.map((method, idx) => (
                      <li key={idx} className="text-green-200/90 text-sm flex items-start gap-2">
                        <span className="text-green-400">•</span>
                        <span>{method}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedTab === 'resistance' && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-white mb-1">{content.resistance.title}</h4>
              <p className="text-slate-400 text-sm">{content.resistance.subtitle}</p>
            </div>

            {/* Spiritual */}
            <div>
              <h5 className="text-yellow-300 font-bold mb-3 flex items-center gap-2">
                <BookOpen className="w-5 h-5" />
                Spiritual Foundation (MOST IMPORTANT)
              </h5>
              <div className="space-y-3">
                {content.resistance.spiritual.map((item, index) => (
                  <div key={index} className="bg-yellow-900/20 rounded-lg p-4 border border-yellow-700/30">
                    <h6 className="text-white font-semibold mb-1">{item.action}</h6>
                    <p className="text-slate-300 text-sm mb-2">{item.why}</p>
                    <p className="text-yellow-200 text-xs italic bg-yellow-900/30 rounded p-2">
                      {item.verse}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Practical */}
            <div>
              <h5 className="text-green-300 font-bold mb-3 flex items-center gap-2">
                <Target className="w-5 h-5" />
                Practical Actions
              </h5>
              <div className="grid md:grid-cols-3 gap-4">
                {content.resistance.practical.map((section, index) => (
                  <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-green-600/30">
                    <h6 className="text-green-400 font-semibold mb-3">{section.category}</h6>
                    <ul className="space-y-2">
                      {section.steps.map((step, idx) => (
                        <li key={idx} className="text-slate-300 text-xs flex items-start gap-2">
                          <span className="text-green-400 flex-shrink-0">✓</span>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg p-4 border-2 border-red-700/40">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5 animate-pulse" />
                <div>
                  <h5 className="text-red-300 font-bold mb-2">{content.resistance.warning.title}</h5>
                  <p className="text-red-200/90 text-sm">{content.resistance.warning.message}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </Card>

      {/* Biblical Foundation */}
      <div className="mt-6 bg-gradient-to-r from-purple-900/20 to-pink-900/20 rounded-lg p-4 border border-purple-700/30">
        <p className="text-purple-200 text-sm font-semibold mb-2">Revelation 13:16-17:</p>
        <p className="text-slate-300 text-sm italic mb-2">
          &ldquo;And he causeth all, both small and great, rich and poor, free and bond, to receive a mark in their right hand, or in their foreheads: And that no man might buy or sell, save he that had the mark, or the name of the beast, or the number of his name.&rdquo;
        </p>
        <p className="text-slate-400 text-xs">
          The phoenix rising from burning fiat currencies represents the final beast system. CBDCs provide the technological infrastructure for Revelation 13. This is not conspiracy theory - it is biblical prophecy being fulfilled before our eyes. Choose wisely.
        </p>
      </div>
    </div>
  )
}
