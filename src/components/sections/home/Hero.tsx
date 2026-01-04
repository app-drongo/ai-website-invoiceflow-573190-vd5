'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Shield, Rocket } from 'lucide-react';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_HERO = {
  badge: '🚀 Now in Beta',
  title: 'Deploy Anywhere, Scale Everywhere',
  subtitle:
    'The unified deployment platform that connects your code to any cloud, edge, or infrastructure with zero configuration.',
  primaryCta: 'Start Deploying',
  primaryCtaHref: '/signup',
  secondaryCta: 'View Demo',
  secondaryCtaHref: '/demo',
  imageUrl: 'https://pub-60de11c8c43b49ea9bd786eb6273aa91.r2.dev/0a8f0e8338ef58a2c02d8a3edc1d034c.png',
  imageAlt: 'Modern deployment dashboard interface',
  features: [
    {
      title: 'Lightning Fast',
      description:
        'Deploy in seconds, not minutes. Our optimized pipeline gets your code live instantly.',
    },
    {
      title: 'Enterprise Security',
      description: 'Bank-grade encryption and compliance standards protect your deployments.',
    },
    {
      title: 'Auto-Scale',
      description: 'Intelligent scaling adapts to traffic spikes without manual intervention.',
    },
  ],
  stats: [
    { value: '99.9%', label: 'Uptime SLA' },
    { value: '< 30s', label: 'Deploy Time' },
    { value: '50K+', label: 'Deployments' },
  ],
} as const;

type HeroProps = Partial<typeof DEFAULT_HERO>;

export default function Hero(props: HeroProps) {
  const config = { ...DEFAULT_HERO, ...props };
  const navigate = useSmartNavigation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handlePrimaryCta = () => {
    navigate(config.primaryCtaHref);
  };

  const handleSecondaryCta = () => {
    navigate(config.secondaryCtaHref);
  };

  return (
    <section id="hero" className="relative bg-background text-foreground overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            {/* Badge */}
            <Badge variant="secondary" className="w-fit text-sm font-medium">
              <span data-editable="badge">{config.badge}</span>
            </Badge>

            {/* Title */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                <span data-editable="title">{config.title}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                <span data-editable="subtitle">{config.subtitle}</span>
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg px-8 py-6 group"
                onClick={handlePrimaryCta}
                data-editable-href="primaryCtaHref"
                data-href={config.primaryCtaHref}
              >
                <span data-editable="primaryCta">{config.primaryCta}</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6"
                onClick={handleSecondaryCta}
                data-editable-href="secondaryCtaHref"
                data-href={config.secondaryCtaHref}
              >
                <span data-editable="secondaryCta">{config.secondaryCta}</span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              {config.stats.map((stat, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-bold text-primary">
                    <span data-editable={`stats[${idx}].value`}>{stat.value}</span>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <span data-editable={`stats[${idx}].label`}>{stat.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={config.imageUrl}
                alt={config.imageAlt}
                data-editable-src="imageUrl"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Features */}
        <div
          className={`mt-20 lg:mt-32 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="grid md:grid-cols-3 gap-8">
            {config.features.map((feature, idx) => (
              <Card
                key={idx}
                className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                      {idx === 0 && <Zap className="h-6 w-6 text-primary" />}
                      {idx === 1 && <Shield className="h-6 w-6 text-primary" />}
                      {idx === 2 && <Rocket className="h-6 w-6 text-primary" />}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">
                        <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                      </h3>
                      <p className="text-muted-foreground">
                        <span data-editable={`features[${idx}].description`}>
                          {feature.description}
                        </span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
