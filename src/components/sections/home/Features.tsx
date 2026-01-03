'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Zap, Shield, Rocket, Code, Globe, Lock } from 'lucide-react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FEATURES = {
  title: 'Powerful Features for Modern Teams',
  subtitle: 'Everything you need to build, deploy, and scale your applications with confidence',
  ctaText: 'Start Building',
  ctaHref: '/signup',
  features: [
    {
      title: 'Lightning Fast Deployment',
      description:
        'Deploy your applications in seconds with our optimized CI/CD pipeline and global edge network',
      badge: 'Performance',
    },
    {
      title: 'Enterprise Security',
      description:
        'Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection',
      badge: 'Security',
    },
    {
      title: 'Auto-Scaling Infrastructure',
      description:
        'Automatically scale your resources based on demand with intelligent load balancing and monitoring',
      badge: 'Scalability',
    },
    {
      title: 'Developer Experience',
      description:
        'Intuitive APIs, comprehensive documentation, and powerful debugging tools for seamless development',
      badge: 'DX',
    },
    {
      title: 'Global Edge Network',
      description:
        'Deliver content at lightning speed with our worldwide CDN and edge computing capabilities',
      badge: 'Performance',
    },
    {
      title: 'Advanced Analytics',
      description:
        'Real-time insights and detailed analytics to optimize performance and user experience',
      badge: 'Insights',
    },
  ],
} as const;

type FeaturesProps = Partial<typeof DEFAULT_FEATURES>;

export default function Features(props: FeaturesProps) {
  const config = { ...DEFAULT_FEATURES, ...props };
  const navigate = useSmartNavigation();

  const handleCTAClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <section id="features" className="bg-background text-foreground py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <Button
            size="lg"
            onClick={handleCTAClick}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <span data-editable="ctaText">{config.ctaText}</span>
          </Button>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.features.map((feature, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary/20 transition-colors">
                    {idx === 0 && <Zap className="h-6 w-6" />}
                    {idx === 1 && <Shield className="h-6 w-6" />}
                    {idx === 2 && <Rocket className="h-6 w-6" />}
                    {idx === 3 && <Code className="h-6 w-6" />}
                    {idx === 4 && <Globe className="h-6 w-6" />}
                    {idx === 5 && <Lock className="h-6 w-6" />}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    <span data-editable={`features[${idx}].badge`}>{feature.badge}</span>
                  </Badge>
                </div>
                <h3 className="text-xl font-semibold mb-2">
                  <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                </h3>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-muted-foreground leading-relaxed">
                  <span data-editable={`features[${idx}].description`}>{feature.description}</span>
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to experience the future of deployment?
          </p>
          <Button
            variant="outline"
            size="lg"
            onClick={handleCTAClick}
            data-editable-href="ctaHref"
            data-href={config.ctaHref}
            className="border-border hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <span data-editable="ctaText">{config.ctaText}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
