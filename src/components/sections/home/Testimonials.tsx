'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_TESTIMONIALS = {
  title: 'What Our Customers Say',
  subtitle:
    "Don't just take our word for it. Here's what real customers have to say about their experience.",
  testimonials: [
    {
      name: 'Sarah Chen',
      role: 'CTO at TechFlow',
      company: 'TechFlow',
      content:
        'This platform has completely transformed how we handle deployments. The unified approach saves us hours every week and eliminates the complexity we used to face.',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&q=80',
      avatarFallback: 'SC',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      company: 'InnovateLabs',
      content:
        'The seamless integration and intuitive interface made adoption incredibly smooth. Our team was up and running in minutes, not hours.',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&q=80',
      avatarFallback: 'MR',
    },
    {
      name: 'Emily Watson',
      role: 'DevOps Engineer',
      company: 'CloudScale',
      content:
        'Finally, a solution that understands the modern development workflow. The automation features have reduced our deployment time by 80%.',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&q=80',
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
    <section id="testimonials" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {config.testimonials.map((testimonial, idx) => (
            <Card
              key={idx}
              className="bg-card text-card-foreground border-border hover:shadow-lg transition-shadow duration-300"
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  <span data-editable={`testimonials[${idx}].content`}>
                    "{testimonial.content}"
                  </span>
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
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
                      {' at '}
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

        {/* Bottom accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
              ))}
            </div>
            <span className="text-sm font-medium">Trusted by 1000+ developers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
