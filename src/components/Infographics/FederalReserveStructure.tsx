'use client';

import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Building2, Users, DollarSign, Shield, AlertTriangle } from 'lucide-react';

export default function FederalReserveStructureInfographic() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const layers = [
    {
      id: 1,
      title: 'The Deception',
      icon: AlertTriangle,
      color: 'red',
      description: 'Name "Federal Reserve" implies government agency, but it\'s privately owned',
      details: [
        'Not federal - privately owned corporation',
        'No reserves - creates money from nothing',
        'Deceptive name makes people think it\'s part of government',
        'Similar to "Bank of England" deception in 1694',
      ],
    },
    {
      id: 2,
      title: 'Private Ownership',
      icon: Building2,
      color: 'amber',
      description: 'Owned by member banks, which are owned by shareholders',
      details: [
        'Member banks own Federal Reserve stock',
        'Shareholders of member banks are the true owners',
        'Names of ultimate shareholders kept secret',
        'Rothschilds, Rockefellers, Morgans historically identified',
        'Guaranteed 6% annual dividend by law',
      ],
    },
    {
      id: 3,
      title: 'Money Creation Power',
      icon: DollarSign,
      color: 'green',
      description: 'Creates money from nothing and loans it to government at interest',
      details: [
        'Federal Reserve creates dollars through computer entries',
        'No gold, silver, or anything backing the currency',
        'Government must borrow from Fed to spend',
        'Taxpayers pay interest on money created from nothing',
        'National debt = permanent wealth transfer to private owners',
      ],
    },
    {
      id: 4,
      title: 'Legal Protection',
      icon: Shield,
      color: 'blue',
      description: 'Special legal status protects it from government oversight',
      details: [
        'Never been audited by Congress',
        'Sets its own policy without government approval',
        'Chairman appointed but Fed operates independently',
        'Cannot be sued like private corporations',
        'Immune from Freedom of Information Act requests',
      ],
    },
    {
      id: 5,
      title: 'The Result',
      icon: Users,
      color: 'purple',
      description: 'Private entity controls nation\'s currency and economy',
      details: [
        'Controls interest rates affecting entire economy',
        'Can create booms and busts at will',
        'Enriches owners through perpetual interest payments',
        'Government becomes servant to private bankers',
        '"Borrower is servant to the lender" - Proverbs 22:7',
      ],
    },
  ];

  return (
    <Card className="p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-red-500/20">
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-red-400 mb-2">
            Federal Reserve: Private Banking Cartel
          </h3>
          <p className="text-slate-300 text-sm">
            Not Federal, No Reserves, Deceiving America Since 1913
          </p>
        </div>

        {/* Pyramid Structure */}
        <div className="relative bg-slate-950/50 rounded-lg p-8 min-h-[400px] border border-red-500/10">
          <div className="space-y-4">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const isActive = activeLayer === layer.id;
              const colorClasses = {
                red: 'border-red-500/50 bg-red-950/30 hover:border-red-400',
                amber: 'border-amber-500/50 bg-amber-950/30 hover:border-amber-400',
                green: 'border-green-500/50 bg-green-950/30 hover:border-green-400',
                blue: 'border-blue-500/50 bg-blue-950/30 hover:border-blue-400',
                purple: 'border-purple-500/50 bg-purple-950/30 hover:border-purple-400',
              };
              const iconColorClasses = {
                red: 'text-red-400',
                amber: 'text-amber-400',
                green: 'text-green-400',
                blue: 'text-blue-400',
                purple: 'text-purple-400',
              };

              return (
                <div key={layer.id} className="space-y-2">
                  <button
                    onClick={() => setActiveLayer(isActive ? null : layer.id)}
                    className={`w-full p-4 border-2 rounded-lg transition-all ${
                      colorClasses[layer.color as keyof typeof colorClasses]
                    } ${isActive ? 'ring-2 ring-offset-2 ring-offset-slate-900' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg bg-slate-900 ${
                        iconColorClasses[layer.color as keyof typeof iconColorClasses]
                      }`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1 text-left">
                        <div className="font-bold text-slate-100">{layer.title}</div>
                        <div className="text-sm text-slate-400">{layer.description}</div>
                      </div>
                      <div className={`text-2xl font-bold ${
                        iconColorClasses[layer.color as keyof typeof iconColorClasses]
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                  </button>

                  {isActive && (
                    <div className="ml-4 pl-6 border-l-2 border-slate-700 space-y-2 animate-in slide-in-from-top-2">
                      {layer.details.map((detail, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-slate-300 text-sm p-2 bg-slate-950/50 rounded"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Quote */}
        <div className="p-4 bg-red-950/20 border border-red-500/30 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-slate-300 text-sm italic mb-2">
                &ldquo;I am a most unhappy man. I have unwittingly ruined my country. A great industrial 
                nation is controlled by its system of credit... all our activities are in the hands 
                of a few men... we have come to be one of the worst ruled, one of the most completely 
                controlled and dominated Governments in the civilized world.&rdquo;
              </p>
              <p className="text-red-400 text-xs font-bold">
                - President Woodrow Wilson (signed Federal Reserve Act into law)
              </p>
            </div>
          </div>
        </div>

        {/* Action Callout */}
        <div className="p-4 bg-amber-950/20 border border-amber-500/30 rounded-lg">
          <h5 className="text-amber-400 font-bold mb-2">The Solution:</h5>
          <p className="text-slate-300 text-sm">
            End the Federal Reserve. Return to Constitutional money (gold and silver). 
            Let Congress create debt-free currency for the benefit of the people, not private bankers.
          </p>
          <p className="text-slate-400 text-xs mt-2">
            &ldquo;We have, in this country, one of the most corrupt institutions the world has ever known. 
            I refer to the Federal Reserve Board.&rdquo; - <span className="text-amber-400">Louis T. McFadden, 
            Chairman of House Banking Committee</span>
          </p>
        </div>
      </div>
    </Card>
  );
}
