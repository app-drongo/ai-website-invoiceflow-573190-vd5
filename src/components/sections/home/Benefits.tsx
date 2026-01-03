'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, Rocket, Code, Users, BarChart3 } from 'lucide-react';

const DEFAULT_BENEFITS = {
  title: 'Why Choose Our Platform',
  subtitle: 'Built for modern teams who demand excellence',
  benefits: [
    {
      title: 'Lightning Fast Performance',
      description:
        'Deploy in seconds, not minutes. Our optimized infrastructure ensures your applications run at peak performance with 99.9% uptime.',
      metric: '10x Faster',
    },
    {
      title: 'Enterprise Security',
      description:
        'Bank-grade encryption, SOC 2 compliance, and advanced threat protection keep your data safe and your business compliant.',
      metric: 'Zero Breaches',
    },
    {
      title: 'Seamless Scaling',
      description:
        'From startup to enterprise, our platform grows with you. Auto-scaling infrastructure handles traffic spikes effortlessly.',
      metric: 'Auto-Scale',
    },
    {
      title: 'Developer Experience',
      description:
        'Intuitive APIs, comprehensive documentation, and powerful CLI tools make integration a breeze for your development team.',
      metric: '5min Setup',
    },
    {
      title: '24/7 Expert Support',
      description:
        'Our dedicated support team is available around the clock to help you succeed. Get answers from real engineers, not bots.',
      metric: '< 1hr Response',
    },
    {
      title: 'Advanced Analytics',
      description:
        'Real-time insights and detailed analytics help you make data-driven decisions and optimize your application performance.',
      metric: 'Real-time Data',
    },
  ],
} as const;

type BenefitsProps = Partial<typeof DEFAULT_BENEFITS>;

export default function Benefits(props: BenefitsProps) {
  const config = { ...DEFAULT_BENEFITS, ...props };

  return (
    <section id="benefits" className="bg-background text-foreground py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.benefits.map((benefit, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 group"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0 p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    {idx === 0 && <Zap className="h-6 w-6 text-primary" />}
                    {idx === 1 && <Shield className="h-6 w-6 text-primary" />}
                    {idx === 2 && <Rocket className="h-6 w-6 text-primary" />}
                    {idx === 3 && <Code className="h-6 w-6 text-primary" />}
                    {idx === 4 && <Users className="h-6 w-6 text-primary" />}
                    {idx === 5 && <BarChart3 className="h-6 w-6 text-primary" />}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold">
                        <span data-editable={`benefits[${idx}].title`}>{benefit.title}</span>
                      </h3>
                      <Badge variant="secondary" className="text-xs font-medium">
                        <span data-editable={`benefits[${idx}].metric`}>{benefit.metric}</span>
                      </Badge>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      <span data-editable={`benefits[${idx}].description`}>
                        {benefit.description}
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full text-sm text-muted-foreground">
            <Shield className="h-4 w-4" />
            <span>Trusted by 10,000+ companies worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
