'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_TESTIMONIALS = {
  title: 'Trusted by Finance Teams Worldwide',
  subtitle:
    'See how businesses are streamlining their financial operations with our intelligent invoicing platform',
  testimonials: [
    {
      name: 'Sarah Chen',
      role: 'CFO at TechFlow Solutions',
      company: 'TechFlow Solutions',
      content:
        'This platform transformed our invoicing process completely. What used to take hours now happens automatically. Our cash flow improved by 40% within the first quarter.',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&q=80',
      avatarFallback: 'SC',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Founder & CEO',
      company: 'GrowthLab Agency',
      content:
        'The automation features are incredible. Our team can focus on growth instead of chasing payments. The professional invoices have elevated our brand perception significantly.',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&q=80',
      avatarFallback: 'MR',
    },
    {
      name: 'Emily Watson',
      role: 'Operations Director',
      company: 'Precision Manufacturing',
      content:
        "Accuracy and reliability are everything in our industry. This solution eliminated billing errors and gave us complete financial visibility. It's been a game-changer.",
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
      avatarFallback: 'EW',
    },
  ],
} as const;

type TestimonialsProps = Partial<typeof DEFAULT_TESTIMONIALS>;

export default function Testimonials(props: TestimonialsProps) {
  const config = { ...DEFAULT_TESTIMONIALS, ...props };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-500 fill-current' : 'text-muted-foreground'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="bg-muted/30 text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {config.testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-all duration-300 relative"
            >
              <CardContent className="p-8">
                <div className="absolute top-6 right-6 text-primary/20">
                  <Quote className="h-8 w-8" />
                </div>

                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                <blockquote className="text-foreground mb-6 leading-relaxed">
                  <span data-editable={`testimonials[${idx}].content`}>
                    "{testimonial.content}"
                  </span>
                </blockquote>

                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={testimonial.name}
                      data-editable-src={`testimonials[${idx}].avatarUrl`}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      <span data-editable={`testimonials[${idx}].avatarFallback`}>
                        {testimonial.avatarFallback}
                      </span>
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <div className="font-semibold text-foreground">
                      <span data-editable={`testimonials[${idx}].name`}>{testimonial.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`testimonials[${idx}].role`}>{testimonial.role}</span>
                    </div>
                    <div className="text-sm text-primary font-medium">
                      <span data-editable={`testimonials[${idx}].company`}>
                        {testimonial.company}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Join thousands of businesses who trust our platform for their financial operations
          </p>
        </div>
      </div>
    </section>
  );
}
