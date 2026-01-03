'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, BarChart3, Clock, Users, Smartphone } from 'lucide-react';

const DEFAULT_FEATURES = {
  title: 'Powerful Features for Modern Businesses',
  subtitle: 'Everything you need to streamline your financial operations and accelerate growth',
  features: [
    {
      title: 'Smart Invoice Automation',
      description:
        'Generate professional invoices instantly with intelligent templates and automated recurring billing that saves hours every week.',
    },
    {
      title: 'Real-Time Financial Analytics',
      description:
        'Track cash flow, monitor payment trends, and make data-driven decisions with comprehensive financial dashboards.',
    },
    {
      title: 'Advanced Security & Compliance',
      description:
        'Bank-level encryption and automated compliance reporting ensure your financial data stays protected and audit-ready.',
    },
    {
      title: 'Lightning-Fast Processing',
      description:
        'Process payments and generate reports in seconds, not minutes. Our optimized infrastructure handles high-volume operations seamlessly.',
    },
    {
      title: 'Multi-User Collaboration',
      description:
        'Enable your entire team to collaborate efficiently with role-based permissions and real-time synchronization across all devices.',
    },
    {
      title: 'Mobile-First Design',
      description:
        'Manage your finances on-the-go with our responsive mobile interface that works perfectly on any device, anywhere.',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };

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

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {idx === 0 && <Zap className="h-7 w-7" />}
                    {idx === 1 && <BarChart3 className="h-7 w-7" />}
                    {idx === 2 && <Shield className="h-7 w-7" />}
                    {idx === 3 && <Clock className="h-7 w-7" />}
                    {idx === 4 && <Users className="h-7 w-7" />}
                    {idx === 5 && <Smartphone className="h-7 w-7" />}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold leading-tight">
                    <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    <span data-editable={`features[${idx}].description`}>
                      {feature.description}
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
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
