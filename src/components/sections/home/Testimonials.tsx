'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Quote, Star } from 'lucide-react';
import Image from 'next/image';

const DEFAULT_TESTIMONIALS = {
  title: 'What Our Customers Say',
  subtitle: "Don't just take our word for it - hear from some of our satisfied customers",
  testimonials: [
    {
      name: 'Sarah Chen',
      role: 'CTO at TechFlow',
      company: 'TechFlow',
      content:
        'This platform has completely transformed how we handle our deployments. The unified approach saves us hours every week and eliminates the complexity we used to face.',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&q=80',
      avatarAlt: 'Sarah Chen profile photo',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Lead Developer',
      company: 'InnovateLabs',
      content:
        "The seamless integration and intuitive interface made adoption effortless for our entire team. We've seen a 40% improvement in deployment speed since switching.",
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&q=80',
      avatarAlt: 'Marcus Rodriguez profile photo',
    },
    {
      name: 'Emily Watson',
      role: 'DevOps Engineer',
      company: 'CloudScale',
      content:
        'Finally, a solution that actually delivers on its promises. The reliability and performance improvements have been game-changing for our infrastructure management.',
      rating: 5,
      avatarUrl:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&q=80',
      avatarAlt: 'Emily Watson profile photo',
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
        className={`h-4 w-4 ${i < rating ? 'text-primary fill-primary' : 'text-muted-foreground'}`}
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
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
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

                {/* Testimonial Content */}
                <blockquote className="text-foreground mb-6 leading-relaxed">
                  <span data-editable={`testimonials[${idx}].content`}>
                    "{testimonial.content}"
                  </span>
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={testimonial.avatarUrl}
                      alt={testimonial.avatarAlt}
                      data-editable-src={`testimonials[${idx}].avatarUrl`}
                    />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name
                        .split(' ')
                        .map(n => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">
                      <span data-editable={`testimonials[${idx}].name`}>{testimonial.name}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      <span data-editable={`testimonials[${idx}].role`}>{testimonial.role}</span>
                      {testimonial.company && (
                        <>
                          {' at '}
                          <span data-editable={`testimonials[${idx}].company`}>
                            {testimonial.company}
                          </span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 text-muted-foreground">
            <div className="flex gap-1">
              {Array.from({ length: 5 }, (_, i) => (
                <Star key={i} className="h-4 w-4 text-primary fill-primary" />
              ))}
            </div>
            <span className="text-sm font-medium">Trusted by 1000+ developers worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}
