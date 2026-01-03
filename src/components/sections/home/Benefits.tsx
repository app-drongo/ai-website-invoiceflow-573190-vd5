'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Shield, Zap, Clock, DollarSign, BarChart3 } from 'lucide-react';

const DEFAULT_BENEFITS = {
  title: 'Transform Your Financial Operations',
  subtitle: 'Experience the power of intelligent automation that grows with your business',
  primaryBenefits: [
    {
      title: 'Boost Revenue Growth',
      description:
        'Accelerate cash flow with automated invoicing and smart payment reminders that reduce collection time by up to 60%',
      metric: '60% faster payments',
    },
    {
      title: 'Bulletproof Security',
      description:
        'Enterprise-grade encryption and compliance standards protect your financial data with bank-level security protocols',
      metric: 'Bank-level security',
    },
    {
      title: 'Lightning Performance',
      description:
        'Process thousands of invoices in seconds with our optimized infrastructure that scales seamlessly with your growth',
      metric: '10x faster processing',
    },
  ],
  secondaryBenefits: [
    {
      title: 'Save 15+ Hours Weekly',
      description: 'Eliminate manual data entry and repetitive tasks',
    },
    {
      title: 'Reduce Errors by 95%',
      description: 'Smart validation prevents costly mistakes',
    },
    {
      title: 'Real-time Analytics',
      description: 'Make data-driven decisions with live insights',
    },
  ],
} as const;

type BenefitsProps = Partial<typeof DEFAULT_BENEFITS>;

export default function Benefits(props: BenefitsProps) {
  const config = { ...DEFAULT_BENEFITS, ...props };

  return (
    <section id="benefits" className="bg-muted/30 text-foreground py-20 lg:py-28">
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

        {/* Primary Benefits Grid */}
        <div className="grid gap-8 lg:gap-12 md:grid-cols-3 mb-16 lg:mb-20">
          {config.primaryBenefits.map((benefit, idx) => (
            <Card
              key={idx}
              className="bg-card border-border hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary mb-4 group-hover:bg-primary/20 transition-colors">
                    {idx === 0 && <TrendingUp className="h-7 w-7" />}
                    {idx === 1 && <Shield className="h-7 w-7" />}
                    {idx === 2 && <Zap className="h-7 w-7" />}
                  </div>
                  <Badge variant="secondary" className="mb-4 text-xs font-medium">
                    <span data-editable={`primaryBenefits[${idx}].metric`}>{benefit.metric}</span>
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-4 text-card-foreground">
                  <span data-editable={`primaryBenefits[${idx}].title`}>{benefit.title}</span>
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`primaryBenefits[${idx}].description`}>
                    {benefit.description}
                  </span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Secondary Benefits */}
        <div className="bg-card rounded-2xl border border-border p-8 lg:p-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {config.secondaryBenefits.map((benefit, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                  {idx === 0 && <Clock className="h-5 w-5" />}
                  {idx === 1 && <DollarSign className="h-5 w-5" />}
                  {idx === 2 && <BarChart3 className="h-5 w-5" />}
                </div>
                <div>
                  <h4 className="font-semibold text-card-foreground mb-2">
                    <span data-editable={`secondaryBenefits[${idx}].title`}>{benefit.title}</span>
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    <span data-editable={`secondaryBenefits[${idx}].description`}>
                      {benefit.description}
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
