'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Home, Wheat, Users, Crown } from 'lucide-react';

export default function JosephEnslavementInfographic() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      stage: 'Pre-Crisis',
      title: 'People Have Wealth',
      icon: Users,
      color: 'emerald',
      peopleHave: ['Money (silver/gold)', 'Livestock (animals)', 'Land (property)', 'Freedom'],
      pharaohHas: ['Political power only'],
      quote: 'The people are free and prosperous before the crisis.',
    },
    {
      stage: 'Step 1',
      title: 'Famine Begins - Exchange Money for Food',
      icon: DollarSign,
      color: 'amber',
      peopleHave: ['Livestock', 'Land', 'Freedom'],
      pharaohHas: ['Political power', 'ALL THE MONEY'],
      quote: 'Genesis 47:14 - "Joseph collected all the money in Egypt and Canaan in payment for grain."',
      action: 'Joseph sells stored grain but NEVER recirculates the money back to the people.',
    },
    {
      stage: 'Step 2',
      title: 'Money Gone - Exchange Livestock for Food',
      icon: Wheat,
      color: 'amber',
      peopleHave: ['Land', 'Freedom'],
      pharaohHas: ['Political power', 'All the money', 'ALL THE LIVESTOCK'],
      quote: 'Genesis 47:17 - "They brought their livestock to Joseph... he gave them food in exchange."',
      action: 'Intentional currency failure - no money circulates, forcing barter.',
    },
    {
      stage: 'Step 3',
      title: 'Livestock Gone - Exchange Land for Food',
      icon: Home,
      color: 'orange',
      peopleHave: ['Freedom (temporarily)'],
      pharaohHas: ['Political power', 'All the money', 'All the livestock', 'ALL THE LAND'],
      quote: 'Genesis 47:20 - "Joseph bought all the land in Egypt for Pharaoh. The land became Pharaoh\'s."',
      action: 'Real wealth (productive assets) now owned by elite.',
    },
    {
      stage: 'Step 4',
      title: 'Everything Gone - Surrender Themselves as Slaves',
      icon: Crown,
      color: 'red',
      peopleHave: ['NOTHING - Complete slavery'],
      pharaohHas: ['EVERYTHING - Absolute ownership'],
      quote: 'Genesis 47:19 - "Buy us and our land... and we with our land will be in bondage to Pharaoh."',
      action: 'Progressive enslavement complete. The people voluntarily surrender freedom to survive.',
    },
  ];

  const currentStep = steps[step];
  const Icon = currentStep.icon;

  return (
    <Card className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-purple-500/20">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-purple-400 mb-2">
            Joseph&apos;s Progressive Enslavement System
          </h3>
          <p className="text-slate-300 text-sm">
            Genesis 47: Biblical Template for Using Crisis to Concentrate Wealth and Power
          </p>
        </div>

        {/* Timeline Progress */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setStep(idx)}
                className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${
                  idx === step
                    ? 'border-purple-400 bg-purple-500 scale-110'
                    : idx < step
                    ? 'border-purple-600 bg-purple-950'
                    : 'border-slate-600 bg-slate-900'
                }`}
              >
                <span className={`text-sm font-bold ${
                  idx <= step ? 'text-white' : 'text-slate-500'
                }`}>
                  {idx === 0 ? '0' : idx}
                </span>
              </button>
            ))}
          </div>
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-slate-700 -z-10" />
          <div
            className="absolute top-6 left-0 h-0.5 bg-purple-500 -z-10 transition-all duration-500"
            style={{ width: `${(step / (steps.length - 1)) * 100}%` }}
          />
        </div>

        {/* Current Stage */}
        <div className={`bg-slate-950/50 rounded-lg p-6 border-2 transition-colors ${
          currentStep.color === 'emerald' ? 'border-emerald-500/30' :
          currentStep.color === 'amber' ? 'border-amber-500/30' :
          currentStep.color === 'orange' ? 'border-orange-500/30' :
          'border-red-500/30'
        }`}>
          <div className="flex items-center gap-4 mb-6">
            <div className={`p-3 rounded-lg ${
              currentStep.color === 'emerald' ? 'bg-emerald-950/50' :
              currentStep.color === 'amber' ? 'bg-amber-950/50' :
              currentStep.color === 'orange' ? 'bg-orange-950/50' :
              'bg-red-950/50'
            }`}>
              <Icon className={`w-8 h-8 ${
                currentStep.color === 'emerald' ? 'text-emerald-400' :
                currentStep.color === 'amber' ? 'text-amber-400' :
                currentStep.color === 'orange' ? 'text-orange-400' :
                'text-red-400'
              }`} />
            </div>
            <div className="flex-1">
              <div className="text-sm text-slate-400 font-semibold">{currentStep.stage}</div>
              <h4 className={`text-xl font-bold ${
                currentStep.color === 'emerald' ? 'text-emerald-400' :
                currentStep.color === 'amber' ? 'text-amber-400' :
                currentStep.color === 'orange' ? 'text-orange-400' :
                'text-red-400'
              }`}>
                {currentStep.title}
              </h4>
            </div>
          </div>

          {/* Wealth Distribution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* The People */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-blue-400" />
                <h5 className="font-bold text-blue-400">The People Have:</h5>
              </div>
              <div className="space-y-2">
                {currentStep.peopleHave.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border ${
                      item.includes('NOTHING') || item.includes('slavery')
                        ? 'bg-red-950/30 border-red-500/30 text-red-400'
                        : 'bg-slate-900 border-slate-700 text-slate-300'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Pharaoh */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Crown className="w-5 h-5 text-amber-400" />
                <h5 className="font-bold text-amber-400">Pharaoh Has:</h5>
              </div>
              <div className="space-y-2">
                {currentStep.pharaohHas.map((item, idx) => (
                  <div
                    key={idx}
                    className={`p-3 rounded-lg border ${
                      item.includes('ALL') || item.includes('EVERYTHING')
                        ? 'bg-amber-950/30 border-amber-500/30 text-amber-400 font-bold'
                        : 'bg-slate-900 border-slate-700 text-slate-300'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Action Taken */}
          {currentStep.action && (
            <div className="p-4 bg-purple-950/20 border border-purple-500/30 rounded-lg mb-4">
              <h5 className="text-purple-400 font-bold mb-2">What Happened:</h5>
              <p className="text-slate-300 text-sm">{currentStep.action}</p>
            </div>
          )}

          {/* Biblical Quote */}
          <div className="p-4 bg-slate-900/50 border border-slate-700 rounded-lg">
            <p className="text-slate-300 text-sm italic">{currentStep.quote}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4">
          <Button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            variant="outline"
            className="border-purple-500/30 hover:bg-purple-500/10"
          >
            Previous Stage
          </Button>
          <span className="text-slate-400 text-sm">
            {currentStep.stage}
          </span>
          <Button
            onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
            disabled={step === steps.length - 1}
            variant="outline"
            className="border-purple-500/30 hover:bg-purple-500/10"
          >
            Next Stage
          </Button>
        </div>

        {/* Modern Application */}
        <div className="p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
          <h5 className="text-red-400 font-bold mb-3">Modern Applications of This Pattern:</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="p-3 bg-slate-950/50 rounded border border-slate-700">
              <h6 className="text-amber-400 font-semibold text-sm mb-1">2008 Financial Crisis</h6>
              <p className="text-slate-300 text-xs">
                People lost money (savings), then property (homes foreclosed), while banks consolidated 
                all assets with bailout funds. Progressive wealth transfer following Joseph&apos;s template.
              </p>
            </div>
            <div className="p-3 bg-slate-950/50 rounded border border-slate-700">
              <h6 className="text-amber-400 font-semibold text-sm mb-1">COVID-19 Lockdowns</h6>
              <p className="text-slate-300 text-xs">
                Small businesses destroyed, people lost income (money), then savings, then homes. 
                Meanwhile corporations gained trillions. Crisis used for wealth concentration.
              </p>
            </div>
          </div>
          <p className="text-slate-400 text-xs mt-3">
            Every major crisis follows Genesis 47&apos;s pattern: Extract money, then property, then livestock 
            (businesses), then land, then freedom itself. This 4,000-year-old template still operates today.
          </p>
        </div>

        {/* Key Lesson */}
        <div className="p-4 bg-purple-950/20 border border-purple-500/30 rounded-lg">
          <h5 className="text-purple-400 font-bold mb-2">The Key Lesson:</h5>
          <p className="text-slate-300 text-sm">
            Crisis is the preferred mechanism for concentrating wealth and power. The progression is always 
            the same: money first, then tangible assets, then freedom. People voluntarily surrender 
            everything to survive immediate emergency, not recognizing they&apos;re trading temporary relief 
            for permanent bondage.
          </p>
        </div>
      </div>
    </Card>
  );
}
