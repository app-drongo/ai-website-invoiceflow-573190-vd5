'use client';

import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, BarChart3, Clock, Users, CheckCircle } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_FEATURES = {
  title: 'Powerful Features for Modern Businesses',
  subtitle: 'Everything you need to streamline your financial operations and accelerate growth',
  features: [
    {
      title: 'Smart Invoice Automation',
      description:
        'Generate professional invoices instantly with intelligent templates and automated recurring billing that saves hours every week.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      benefits: [
        'Automated invoice generation',
        'Recurring billing setup',
        'Professional templates',
        'Payment tracking',
      ],
    },
    {
      title: 'Real-Time Financial Analytics',
      description:
        'Track cash flow, monitor payment trends, and make data-driven decisions with comprehensive financial dashboards.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&q=80',
      benefits: [
        'Live dashboard updates',
        'Cash flow monitoring',
        'Payment trend analysis',
        'Custom reporting',
      ],
    },
    {
      title: 'Advanced Security & Compliance',
      description:
        'Bank-level encryption and automated compliance reporting ensure your financial data stays protected and audit-ready.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&q=80',
      benefits: [
        'Bank-level encryption',
        'Automated compliance',
        'Audit-ready reports',
        'Data protection',
      ],
    },
    {
      title: 'Lightning-Fast Processing',
      description:
        'Process payments and generate reports in seconds, not minutes. Our optimized infrastructure handles high-volume operations seamlessly.',
      image:
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&q=80',
      benefits: [
        'Sub-second processing',
        'High-volume handling',
        'Optimized infrastructure',
        'Real-time updates',
      ],
    },
    {
      title: 'Multi-User Collaboration',
      description:
        'Enable your entire team to collaborate efficiently with role-based permissions and real-time synchronization across all devices.',
      image:
        'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&q=80',
      benefits: [
        'Role-based permissions',
        'Real-time sync',
        'Team collaboration',
        'Cross-device access',
      ],
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="features" className="bg-background text-foreground py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8">
            {config.features.map((feature, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTab(idx)}
                className={`px-4 py-3 rounded-lg font-medium text-sm sm:text-base transition-all duration-300 flex items-center gap-2 ${
                  activeTab === idx
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <div className="flex-shrink-0">
                  {idx === 0 && <Zap className="h-4 w-4" />}
                  {idx === 1 && <BarChart3 className="h-4 w-4" />}
                  {idx === 2 && <Shield className="h-4 w-4" />}
                  {idx === 3 && <Clock className="h-4 w-4" />}
                  {idx === 4 && <Users className="h-4 w-4" />}
                </div>
                <span className="hidden sm:inline">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="relative">
          {config.features.map((feature, idx) => (
            <div
              key={idx}
              className={`transition-all duration-500 ${
                activeTab === idx
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-4 absolute inset-0 pointer-events-none'
              }`}
            >
              <Card className="bg-card text-card-foreground border-border overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Content Side */}
                    <div className="p-8 lg:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                          {idx === 0 && <Zap className="h-8 w-8" />}
                          {idx === 1 && <BarChart3 className="h-8 w-8" />}
                          {idx === 2 && <Shield className="h-8 w-8" />}
                          {idx === 3 && <Clock className="h-8 w-8" />}
                          {idx === 4 && <Users className="h-8 w-8" />}
                        </div>
                        <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                          <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                        </h3>
                        <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                          <span data-editable={`features[${idx}].description`}>
                            {feature.description}
                          </span>
                        </p>
                      </div>

                      {/* Key Benefits */}
                      <div className="space-y-3">
                        <h4 className="font-semibold text-foreground mb-4">Key Benefits:</h4>
                        {feature.benefits.map((benefit, benefitIdx) => (
                          <div key={benefitIdx} className="flex items-center gap-3">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">
                              <span data-editable={`features[${idx}].benefits[${benefitIdx}]`}>
                                {benefit}
                              </span>
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-64 lg:h-auto">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover"
                        data-editable-src={`features[${idx}].image`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 lg:mt-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
            <Zap className="h-4 w-4" />
            <span className="text-sm font-medium">Built for Scale</span>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Join thousands of businesses who trust our platform to handle their financial operations
            with precision and reliability.
          </p>
        </div>
      </div>
    </section>
  );
}
