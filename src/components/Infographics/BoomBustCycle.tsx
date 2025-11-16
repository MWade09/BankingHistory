'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { TrendingUp, TrendingDown, DollarSign, Building2, Users, AlertCircle } from 'lucide-react';

export default function BoomBustCycleInfographic() {
  const [phase, setPhase] = useState<'boom' | 'transition' | 'bust'>('boom');

  const phases = {
    boom: {
      title: 'BOOM Phase - Credit Expansion',
      color: 'emerald',
      icon: TrendingUp,
      description: 'Bankers make credit easy and abundant',
      characteristics: [
        {
          label: 'Credit Availability',
          value: 90,
          icon: DollarSign,
          description: 'Easy loans at low interest rates',
        },
        {
          label: 'Economic Activity',
          value: 95,
          icon: Building2,
          description: 'Businesses expanding, people borrowing',
        },
        {
          label: 'Asset Prices',
          value: 85,
          icon: TrendingUp,
          description: 'Real estate and stocks rising',
        },
        {
          label: 'Public Sentiment',
          value: 90,
          icon: Users,
          description: 'Optimism, feeling wealthy',
        },
      ],
      reality: 'This prosperity is artificial - created by expanding credit from nothing. People feel rich but are going deeper into debt. Bankers are setting the trap.',
    },
    transition: {
      title: 'TRANSITION - The Trigger',
      color: 'amber',
      icon: AlertCircle,
      description: 'Bankers suddenly restrict credit and call in loans',
      characteristics: [
        {
          label: 'Credit Availability',
          value: 30,
          icon: DollarSign,
          description: 'Loans denied, credit tightens',
        },
        {
          label: 'Economic Activity',
          value: 50,
          icon: Building2,
          description: 'Businesses struggling to refinance',
        },
        {
          label: 'Asset Prices',
          value: 60,
          icon: TrendingDown,
          description: 'Prices starting to fall',
        },
        {
          label: 'Public Sentiment',
          value: 40,
          icon: Users,
          description: 'Fear beginning, panic spreading',
        },
      ],
      reality: 'The artificial boom ends when bankers decide. Those who borrowed during expansion now cannot refinance. The trap is sprung.',
    },
    bust: {
      title: 'BUST Phase - Credit Contraction',
      color: 'red',
      icon: TrendingDown,
      description: 'Foreclosures, bankruptcies, asset seizure',
      characteristics: [
        {
          label: 'Credit Availability',
          value: 10,
          icon: DollarSign,
          description: 'No credit available at any rate',
        },
        {
          label: 'Economic Activity',
          value: 20,
          icon: Building2,
          description: 'Mass bankruptcies, unemployment',
        },
        {
          label: 'Asset Prices',
          value: 25,
          icon: TrendingDown,
          description: 'Fire-sale prices, forced selling',
        },
        {
          label: 'Public Sentiment',
          value: 15,
          icon: Users,
          description: 'Desperation, survival mode',
        },
      ],
      reality: 'Bankers buy real assets (land, businesses, equipment) for pennies on the dollar with money they created from nothing. Wealth transfers from the many to the few.',
    },
  };

  const currentPhase = phases[phase];
  const Icon = currentPhase.icon;

  return (
    <Card className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-amber-500/20">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-amber-400 mb-2">
            The Boom-Bust Cycle: Manufactured Wealth Transfer
          </h3>
          <p className="text-slate-300 text-sm">
            How Bankers Create Prosperity to Seize Real Assets During Collapse
          </p>
        </div>

        {/* Phase Selector */}
        <div className="grid grid-cols-3 gap-2 p-2 bg-slate-950/50 rounded-lg">
          <Button
            onClick={() => setPhase('boom')}
            variant={phase === 'boom' ? 'default' : 'outline'}
            className={`${
              phase === 'boom'
                ? 'bg-emerald-600 hover:bg-emerald-700'
                : 'border-emerald-500/30 hover:bg-emerald-500/10'
            }`}
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            BOOM
          </Button>
          <Button
            onClick={() => setPhase('transition')}
            variant={phase === 'transition' ? 'default' : 'outline'}
            className={`${
              phase === 'transition'
                ? 'bg-amber-600 hover:bg-amber-700'
                : 'border-amber-500/30 hover:bg-amber-500/10'
            }`}
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            TRIGGER
          </Button>
          <Button
            onClick={() => setPhase('bust')}
            variant={phase === 'bust' ? 'default' : 'outline'}
            className={`${
              phase === 'bust'
                ? 'bg-red-600 hover:bg-red-700'
                : 'border-red-500/30 hover:bg-red-500/10'
            }`}
          >
            <TrendingDown className="w-4 h-4 mr-2" />
            BUST
          </Button>
        </div>

        {/* Current Phase Display */}
        <div className={`bg-slate-950/50 rounded-lg p-6 border-2 ${
          phase === 'boom' ? 'border-emerald-500/30' :
          phase === 'transition' ? 'border-amber-500/30' :
          'border-red-500/30'
        }`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-lg ${
              phase === 'boom' ? 'bg-emerald-950/50' :
              phase === 'transition' ? 'bg-amber-950/50' :
              'bg-red-950/50'
            }`}>
              <Icon className={`w-8 h-8 ${
                phase === 'boom' ? 'text-emerald-400' :
                phase === 'transition' ? 'text-amber-400' :
                'text-red-400'
              }`} />
            </div>
            <div className="flex-1">
              <h4 className={`text-xl font-bold ${
                phase === 'boom' ? 'text-emerald-400' :
                phase === 'transition' ? 'text-amber-400' :
                'text-red-400'
              }`}>
                {currentPhase.title}
              </h4>
              <p className="text-slate-300">{currentPhase.description}</p>
            </div>
          </div>

          {/* Characteristics */}
          <div className="space-y-4 mb-6">
            {currentPhase.characteristics.map((char) => {
              const CharIcon = char.icon;
              return (
                <div key={char.label} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CharIcon className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-semibold text-slate-200">
                        {char.label}
                      </span>
                    </div>
                    <span className={`text-sm font-bold ${
                      phase === 'boom' ? 'text-emerald-400' :
                      phase === 'transition' ? 'text-amber-400' :
                      'text-red-400'
                    }`}>
                      {char.value}%
                    </span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        phase === 'boom' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' :
                        phase === 'transition' ? 'bg-gradient-to-r from-amber-500 to-amber-600' :
                        'bg-gradient-to-r from-red-500 to-red-600'
                      }`}
                      style={{ width: `${char.value}%` }}
                    />
                  </div>
                  <p className="text-xs text-slate-400">{char.description}</p>
                </div>
              );
            })}
          </div>

          {/* Reality Check */}
          <div className={`p-4 rounded-lg border ${
            phase === 'boom' ? 'bg-emerald-950/20 border-emerald-500/30' :
            phase === 'transition' ? 'bg-amber-950/20 border-amber-500/30' :
            'bg-red-950/20 border-red-500/30'
          }`}>
            <div className="flex items-start gap-2">
              <AlertCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                phase === 'boom' ? 'text-emerald-400' :
                phase === 'transition' ? 'text-amber-400' :
                'text-red-400'
              }`} />
              <div>
                <h5 className={`font-bold mb-1 ${
                  phase === 'boom' ? 'text-emerald-400' :
                  phase === 'transition' ? 'text-amber-400' :
                  'text-red-400'
                }`}>
                  The Reality:
                </h5>
                <p className="text-slate-300 text-sm">{currentPhase.reality}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Historical Examples */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-950/50 border border-slate-700 rounded-lg">
            <h5 className="text-amber-400 font-bold mb-2">1893 Panic</h5>
            <p className="text-slate-300 text-xs">
              JP Morgan and Rothschild agents coordinated. Result: 15,000 businesses, 
              74 railroads, 600 banks collapsed. Morgan bought everything cheap.
            </p>
          </div>
          <div className="p-4 bg-slate-950/50 border border-slate-700 rounded-lg">
            <h5 className="text-amber-400 font-bold mb-2">1929 Crash</h5>
            <p className="text-slate-300 text-xs">
              Federal Reserve expanded credit 1920s, contracted 1929. Insiders sold at top. 
              Common people lost everything. Elite bought assets for pennies.
            </p>
          </div>
          <div className="p-4 bg-slate-950/50 border border-slate-700 rounded-lg">
            <h5 className="text-amber-400 font-bold mb-2">2008 Crisis</h5>
            <p className="text-slate-300 text-xs">
              Fed kept rates low creating housing bubble. Then raised rates, triggering collapse. 
              Banks got bailouts. People lost homes. BlackRock bought houses wholesale.
            </p>
          </div>
        </div>

        {/* Biblical Warning */}
        <div className="p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
          <h5 className="text-red-400 font-bold mb-2">Biblical Warning:</h5>
          <p className="text-slate-300 text-sm italic">
            &ldquo;Do not be one who shakes hands in pledge or puts up security for debts; if you lack 
            the means to pay, your very bed will be snatched from under you.&rdquo;
          </p>
          <p className="text-red-400 text-xs font-bold mt-1">- Proverbs 22:26-27</p>
          <p className="text-slate-400 text-xs mt-2">
            The boom-bust cycle deliberately creates debt traps. During boom, debt seems safe. 
            During bust, assets are &ldquo;snatched from under you&rdquo; exactly as the Bible warns.
          </p>
        </div>
      </div>
    </Card>
  );
}
