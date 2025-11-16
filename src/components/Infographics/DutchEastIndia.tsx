'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Sword, Scale, Coins, Users, Ship, Crown, Skull, TrendingUp } from 'lucide-react'

export default function DutchEastIndia() {
  const [selectedSection, setSelectedSection] = useState<string>('powers')

  const sections = [
    { id: 'powers', label: 'Corporate Powers', icon: Crown, color: 'text-red-400' },
    { id: 'stock', label: 'Stock Market Born', icon: TrendingUp, color: 'text-green-400' },
    { id: 'atrocities', label: 'Corporate Crimes', icon: Skull, color: 'text-purple-400' }
  ]

  const content = {
    powers: {
      title: 'Unprecedented Corporate Powers (1602)',
      subtitle: 'The VOC (Dutch East India Company) was granted powers no corporation has today',
      powers: [
        {
          icon: Sword,
          title: 'Wage War',
          description: 'Could raise armies, build forts, and conduct military operations',
          example: 'Conquered entire Indonesian islands through military force'
        },
        {
          icon: Scale,
          title: 'Execute Prisoners',
          description: 'Had full judicial authority including death penalty',
          example: 'Company courts could try, convict, and execute anyone in their territories'
        },
        {
          icon: Coins,
          title: 'Coin Money',
          description: 'Minted its own currency in territories under control',
          example: 'VOC ducats circulated throughout Asia as accepted currency'
        },
        {
          icon: Users,
          title: 'Negotiate Treaties',
          description: 'Made binding treaties with foreign nations as sovereign entity',
          example: 'Signed trade agreements with China, Japan, India without Dutch government'
        },
        {
          icon: Ship,
          title: 'Establish Colonies',
          description: 'Could claim land and establish settlements in company name',
          example: 'Founded Cape Town, Batavia (Jakarta), and dozens of trading posts'
        },
        {
          icon: Crown,
          title: 'Government Functions',
          description: 'Tax collection, law enforcement, infrastructure - all corporate controlled',
          example: 'VOC governed territories larger than many European nations'
        }
      ]
    },
    stock: {
      title: 'Birth of the Stock Exchange',
      subtitle: 'VOC created modern financial markets through continuous tradable shares',
      innovations: [
        {
          year: '1602',
          innovation: 'First IPO in History',
          description: 'VOC raised capital by selling shares to 1,143 initial investors. Anyone could buy in - from merchants to widows.',
          significance: 'Created the concept of public ownership and raising capital from the masses.'
        },
        {
          year: '1602',
          innovation: 'Amsterdam Stock Exchange',
          description: 'World\'s first official stock exchange opened specifically to trade VOC shares daily.',
          significance: 'Shares could be bought and sold continuously, not just at voyage end like previous ventures.'
        },
        {
          year: '1609',
          innovation: 'Short Selling Invented',
          description: 'Speculators began selling shares they didn\'t own, betting on price declines.',
          significance: 'Created market manipulation tactics still used today to profit from crashes.'
        },
        {
          year: '1610',
          innovation: 'Options Trading',
          description: 'Merchants developed contracts to buy/sell shares at future dates for set prices.',
          significance: 'Birth of derivatives - financial instruments separated from underlying assets.'
        }
      ],
      valuation: {
        title: 'Largest Corporation in History',
        modern: '$7.9 Trillion (adjusted for inflation)',
        comparison: 'Larger than Apple, Microsoft, Amazon, Google, and Tesla COMBINED',
        duration: 'Operated for 198 years (1602-1800) - longer than USA has existed'
      }
    },
    atrocities: {
      title: 'Corporate Crimes Against Humanity',
      subtitle: 'When profit motive combines with government power, evil follows',
      crimes: [
        {
          location: 'Banda Islands',
          crime: 'Genocide for Nutmeg Monopoly',
          details: 'Murdered 90% of population (14,000+ people) to control nutmeg trade. Enslaved survivors.',
          year: '1621',
          severity: 'GENOCIDE'
        },
        {
          location: 'Indonesia',
          crime: 'Slavery and Forced Labor',
          details: 'Enslaved entire populations for spice cultivation. Families torn apart, brutal working conditions.',
          year: '1600s-1800s',
          severity: 'CRIMES AGAINST HUMANITY'
        },
        {
          location: 'China',
          crime: 'Opium Trade Promotion',
          details: 'Collaborated in opium smuggling to China, addicting millions, leading to Opium Wars.',
          year: '1700s',
          severity: 'DRUG TRAFFICKING'
        },
        {
          location: 'Global',
          crime: 'Price Manipulation via Artificial Scarcity',
          details: 'Burned spice supplies to keep prices high. Destroyed crops to maintain monopoly.',
          year: '1600s-1700s',
          severity: 'ECONOMIC WARFARE'
        },
        {
          location: 'South Africa',
          crime: 'Colonial Exploitation',
          details: 'Displaced indigenous Khoisan people. Established apartheid foundations.',
          year: '1652+',
          severity: 'ETHNIC CLEANSING'
        }
      ]
    }
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 to-slate-800 rounded-xl p-6 border-2 border-orange-600/30 shadow-2xl">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-white mb-2">
          Dutch East India Company (VOC)
        </h3>
        <p className="text-slate-300 text-sm">
          First mega-corporation: When business becomes government, atrocity becomes policy
        </p>
      </div>

      {/* Section Tabs */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {sections.map((section) => {
          const Icon = section.icon
          const isSelected = selectedSection === section.id
          return (
            <button
              key={section.id}
              onClick={() => setSelectedSection(section.id)}
              className={`p-3 rounded-lg border-2 transition-all ${
                isSelected
                  ? 'bg-slate-700 border-orange-600/50'
                  : 'bg-slate-800/50 border-slate-700 hover:border-slate-600'
              }`}
            >
              <Icon className={`w-6 h-6 mx-auto mb-2 ${isSelected ? section.color : 'text-slate-400'}`} />
              <p className={`text-xs font-medium ${isSelected ? 'text-white' : 'text-slate-400'}`}>
                {section.label}
              </p>
            </button>
          )
        })}
      </div>

      {/* Content Display */}
      <Card className="bg-slate-800/50 border-slate-700 p-6">
        {selectedSection === 'powers' && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-white mb-1">{content.powers.title}</h4>
              <p className="text-slate-400 text-sm">{content.powers.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {content.powers.powers.map((power, index) => {
                const Icon = power.icon
                return (
                  <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-red-600/30">
                    <div className="flex items-start gap-3 mb-2">
                      <Icon className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <h5 className="text-white font-semibold mb-1">{power.title}</h5>
                        <p className="text-slate-300 text-sm mb-2">{power.description}</p>
                        <p className="text-red-200 text-xs italic bg-red-900/20 rounded p-2">
                          Example: {power.example}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {selectedSection === 'stock' && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-white mb-1">{content.stock.title}</h4>
              <p className="text-slate-400 text-sm">{content.stock.subtitle}</p>
            </div>

            <div className="space-y-4">
              {content.stock.innovations.map((item, index) => (
                <div key={index} className="bg-slate-900/50 rounded-lg p-4 border border-green-600/30">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-green-600/20 text-green-300 border-green-600/40 flex-shrink-0">
                      {item.year}
                    </Badge>
                    <div className="flex-1">
                      <h5 className="text-white font-semibold mb-1">{item.innovation}</h5>
                      <p className="text-slate-300 text-sm mb-2">{item.description}</p>
                      <div className="bg-green-900/20 rounded p-2">
                        <p className="text-green-200 text-xs">
                          <span className="font-semibold">Significance:</span> {item.significance}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-green-900/30 to-emerald-900/30 rounded-lg p-4 border-2 border-green-700/40">
              <h5 className="text-green-300 font-bold mb-3 text-lg">{content.stock.valuation.title}</h5>
              <div className="space-y-2">
                <p className="text-white text-2xl font-bold">{content.stock.valuation.modern}</p>
                <p className="text-green-200 text-sm">{content.stock.valuation.comparison}</p>
                <p className="text-slate-300 text-xs italic">{content.stock.valuation.duration}</p>
              </div>
            </div>
          </div>
        )}

        {selectedSection === 'atrocities' && (
          <div className="space-y-6">
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-white mb-1">{content.atrocities.title}</h4>
              <p className="text-slate-400 text-sm">{content.atrocities.subtitle}</p>
            </div>

            <div className="space-y-3">
              {content.atrocities.crimes.map((crime, index) => (
                <div key={index} className="bg-slate-900/50 rounded-lg p-4 border-2 border-purple-600/30">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h5 className="text-white font-bold">{crime.location}</h5>
                      <p className="text-purple-300 text-sm font-semibold">{crime.crime}</p>
                    </div>
                    <Badge className={`text-xs ${
                      crime.severity === 'GENOCIDE' ? 'bg-red-600/30 text-red-200 border-red-600/50' :
                      crime.severity === 'CRIMES AGAINST HUMANITY' ? 'bg-orange-600/30 text-orange-200 border-orange-600/50' :
                      'bg-purple-600/30 text-purple-200 border-purple-600/50'
                    }`}>
                      {crime.severity}
                    </Badge>
                  </div>
                  <p className="text-slate-300 text-sm mb-2">{crime.details}</p>
                  <p className="text-slate-500 text-xs">{crime.year}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </Card>

      {/* Biblical Warning */}
      <div className="mt-6 bg-gradient-to-r from-yellow-900/20 to-amber-900/20 rounded-lg p-4 border border-yellow-700/30">
        <p className="text-yellow-200 text-sm font-semibold mb-2">Biblical Warning:</p>
        <p className="text-slate-300 text-sm italic mb-2">
          &ldquo;For the love of money is the root of all evil&rdquo; - 1 Timothy 6:10
        </p>
        <p className="text-slate-400 text-xs">
          The VOC demonstrates what happens when profit becomes the only motive: genocide, slavery, and oppression become acceptable business practices. Modern mega-corporations (BlackRock, Vanguard, Goldman Sachs) wield similar power over nations but through financial control rather than military force. Same evil, different methods.
        </p>
      </div>
    </div>
  )
}
