'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap, Shield, Rocket, Globe, Clock } from 'lucide-react';

const DEFAULT_BENEFITS = {
  title: 'Why Choose Our Platform',
  subtitle: 'Everything you need to scale your SaaS business efficiently',
  benefits: [
    {
      title: 'Lightning Fast Deployment',
      description:
        'Deploy your applications in seconds, not hours. Our optimized infrastructure ensures rapid time-to-market.',
      category: 'Performance',
    },
    {
      title: 'Enterprise Security',
      description:
        'Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.',
      category: 'Security',
    },
    {
      title: 'Global Scale',
      description:
        'Automatically scale across 15+ regions worldwide with 99.99% uptime SLA and edge optimization.',
      category: 'Infrastructure',
    },
    {
      title: 'Real-time Analytics',
      description:
        'Get instant insights with comprehensive monitoring, alerting, and performance analytics dashboard.',
      category: 'Analytics',
    },
    {
      title: '24/7 Expert Support',
      description:
        'Round-the-clock technical support from our team of DevOps experts and solution architects.',
      category: 'Support',
    },
    {
      title: 'Cost Optimization',
      description:
        'Intelligent resource allocation and auto-scaling reduce infrastructure costs by up to 40%.',
      category: 'Efficiency',
    },
  ],
} as const;

type BenefitsProps = Partial<typeof DEFAULT_BENEFITS>;

export default function Benefits(props: BenefitsProps) {
  const config = { ...DEFAULT_BENEFITS, ...props };

  const getCategoryColor = (category: string) => {
    const colors = {
      Performance: 'bg-primary/10 text-primary border-primary/20',
      Security: 'bg-destructive/10 text-destructive border-destructive/20',
      Infrastructure: 'bg-accent text-accent-foreground border-accent',
      Analytics: 'bg-secondary text-secondary-foreground border-secondary',
      Support: 'bg-muted text-muted-foreground border-muted',
      Efficiency: 'bg-primary/10 text-primary border-primary/20',
    };
    return colors[category as keyof typeof colors] || 'bg-muted text-muted-foreground border-muted';
  };

  return (
    <section id="benefits" className="bg-background text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.benefits.map((benefit, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className="mb-6 text-primary">
                  {idx === 0 && <Zap className="h-10 w-10" />}
                  {idx === 1 && <Shield className="h-10 w-10" />}
                  {idx === 2 && <Globe className="h-10 w-10" />}
                  {idx === 3 && <CheckCircle className="h-10 w-10" />}
                  {idx === 4 && <Clock className="h-10 w-10" />}
                  {idx === 5 && <Rocket className="h-10 w-10" />}
                </div>

                {/* Category Badge */}
                <Badge variant="outline" className={`mb-4 ${getCategoryColor(benefit.category)}`}>
                  <span data-editable={`benefits[${idx}].category`}>{benefit.category}</span>
                </Badge>

                {/* Title */}
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  <span data-editable={`benefits[${idx}].title`}>{benefit.title}</span>
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`benefits[${idx}].description`}>{benefit.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
            <CheckCircle className="h-4 w-4 text-primary" />
            <span>Trusted by 10,000+ developers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
