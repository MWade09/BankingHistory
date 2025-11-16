'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Building2, Users, TrendingUp, TrendingDown } from 'lucide-react';

export default function FractionalReserveInfographic() {
  const [step, setStep] = useState(0);

  const steps = [
    {
      title: 'Step 1: Initial Deposit',
      description: 'Customer deposits $1,000 in gold at the bank',
      visual: {
        deposit: 1000,
        reserves: 1000,
        loans: 0,
        receipts: 1000,
      },
    },
    {
      title: 'Step 2: Fractional Reserve Discovery',
      description: 'Bank realizes only 10% of receipts are redeemed at once',
      visual: {
        deposit: 1000,
        reserves: 1000,
        loans: 0,
        receipts: 1000,
        potential: 9000,
      },
    },
    {
      title: 'Step 3: Money Creation Begins',
      description: 'Bank issues $9,000 in additional receipts backed by the same $1,000 in gold',
      visual: {
        deposit: 1000,
        reserves: 1000,
        loans: 9000,
        receipts: 10000,
      },
    },
    {
      title: 'Step 4: The Fraud',
      description: '$10,000 in receipts circulate, but only $1,000 in actual gold exists',
      visual: {
        deposit: 1000,
        reserves: 1000,
        loans: 9000,
        receipts: 10000,
        fraud: true,
      },
    },
    {
      title: 'Step 5: Interest Extracted',
      description: 'Bank charges interest on the $9,000 created from nothing',
      visual: {
        deposit: 1000,
        reserves: 1000,
        loans: 9000,
        receipts: 10000,
        interest: 450,
      },
    },
  ];

  const currentStep = steps[step];

  return (
    <Card className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-amber-500/20">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-amber-400 mb-2">
            How Fractional Reserve Banking Works
          </h3>
          <p className="text-slate-300 text-sm">
            The Medieval Goldsmith Discovery That Enslaved the World
          </p>
        </div>

        {/* Step Indicator */}
        <div className="flex justify-center gap-2 mb-6">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setStep(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === step
                  ? 'bg-amber-400 w-8'
                  : index < step
                  ? 'bg-amber-600'
                  : 'bg-slate-600'
              }`}
              aria-label={`Go to step ${index + 1}`}
            />
          ))}
        </div>

        {/* Visual Representation */}
        <div className="bg-slate-950/50 rounded-lg p-6 min-h-[300px] border border-amber-500/10">
          <h4 className="text-xl font-bold text-amber-300 mb-4">
            {currentStep.title}
          </h4>
          <p className="text-slate-300 mb-6">{currentStep.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column: Bank Assets */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-emerald-400">
                <Building2 className="w-6 h-6" />
                <div className="flex-1">
                  <div className="text-sm text-slate-400">Actual Gold in Vault</div>
                  <div className="text-2xl font-bold">
                    ${currentStep.visual.reserves.toLocaleString()}
                  </div>
                </div>
              </div>

              {currentStep.visual.potential && (
                <div className="flex items-center gap-3 text-orange-400 animate-pulse">
                  <TrendingUp className="w-6 h-6" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-400">Potential to Create</div>
                    <div className="text-2xl font-bold">
                      ${currentStep.visual.potential.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}

              {currentStep.visual.loans > 0 && (
                <div className="flex items-center gap-3 text-red-400">
                  <DollarSign className="w-6 h-6" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-400">Created from Nothing</div>
                    <div className="text-2xl font-bold">
                      ${currentStep.visual.loans.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Circulation */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-blue-400">
                <Users className="w-6 h-6" />
                <div className="flex-1">
                  <div className="text-sm text-slate-400">Total Receipts Circulating</div>
                  <div className="text-2xl font-bold">
                    ${currentStep.visual.receipts.toLocaleString()}
                  </div>
                </div>
              </div>

              {currentStep.visual.interest && (
                <div className="flex items-center gap-3 text-amber-400">
                  <TrendingUp className="w-6 h-6" />
                  <div className="flex-1">
                    <div className="text-sm text-slate-400">Annual Interest Earned (5%)</div>
                    <div className="text-2xl font-bold">
                      ${currentStep.visual.interest.toLocaleString()}
                    </div>
                  </div>
                </div>
              )}

              {currentStep.visual.fraud && (
                <div className="mt-6 p-4 bg-red-950/30 border border-red-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-red-400 font-bold mb-2">
                    <TrendingDown className="w-5 h-5" />
                    THE FRAUD
                  </div>
                  <p className="text-slate-300 text-sm">
                    10 people believe they each have $1,000 backed by gold. But only $1,000 in 
                    actual gold exists. If everyone demands their gold simultaneously (bank run), 
                    9 out of 10 people get nothing.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Reserve Ratio Visualization */}
          {currentStep.visual.loans > 0 && (
            <div className="mt-6">
              <div className="text-sm text-slate-400 mb-2">Reserve Ratio: 10%</div>
              <div className="relative h-8 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="absolute h-full bg-gradient-to-r from-emerald-500 to-emerald-600"
                  style={{ width: '10%' }}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    Real Gold
                  </span>
                </div>
                <div
                  className="absolute h-full bg-gradient-to-r from-red-500 to-red-600 left-[10%]"
                  style={{ width: '90%' }}
                >
                  <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white">
                    Created from Nothing (Fraud)
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-4">
          <Button
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            variant="outline"
            className="border-amber-500/30 hover:bg-amber-500/10"
          >
            Previous
          </Button>
          <span className="text-slate-400 text-sm">
            Step {step + 1} of {steps.length}
          </span>
          <Button
            onClick={() => setStep(Math.min(steps.length - 1, step + 1))}
            disabled={step === steps.length - 1}
            variant="outline"
            className="border-amber-500/30 hover:bg-amber-500/10"
          >
            Next
          </Button>
        </div>

        {/* Key Insight */}
        <div className="mt-6 p-4 bg-amber-950/20 border border-amber-500/30 rounded-lg">
          <h5 className="text-amber-400 font-bold mb-2">Biblical Truth:</h5>
          <p className="text-slate-300 text-sm">
            &ldquo;Do not have two differing weights in your bag, one heavy and one light... 
            for the Lord detests anyone who does these things, anyone who deals dishonestly.&rdquo; 
            <span className="text-amber-400 font-semibold"> - Deuteronomy 25:13-16</span>
          </p>
          <p className="text-slate-400 text-xs mt-2">
            Fractional reserve banking is the ultimate dishonest weight - issuing 10 receipts 
            for every 1 unit of gold held. This is the fraud God detests.
          </p>
        </div>
      </div>
    </Card>
  );
}
