'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Clock, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const DEFAULT_CONTACT = {
  title: 'Get in Touch',
  subtitle: "Ready to transform your business? Let's start the conversation.",
  description:
    'Our team of experts is here to help you leverage cutting-edge technology solutions. Reach out today and discover how we can accelerate your digital transformation.',
  formTitle: 'Send us a message',
  formSubtitle: "Fill out the form below and we'll get back to you within 24 hours.",
  contactMethods: [
    {
      title: 'Email Us',
      value: 'hello@company.com',
      description: 'Send us an email anytime',
    },
    {
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 6pm',
    },
    {
      title: 'Visit Us',
      value: '123 Innovation Drive, Tech City, TC 12345',
      description: 'Our headquarters',
    },
  ],
  features: [
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical assistance',
    },
    {
      title: 'Expert Consultation',
      description: 'Strategic guidance from industry leaders',
    },
    {
      title: 'Rapid Response',
      description: 'Quick turnaround on all inquiries',
    },
  ],
  submitText: 'Send Message',
  successMessage: "Thank you! We'll be in touch soon.",
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', company: '', message: '' });

    // Reset success message after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            <span data-editable="description">{config.description}</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <Card className="bg-card text-card-foreground">
            <CardContent className="p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">
                  <span data-editable="formTitle">{config.formTitle}</span>
                </h3>
                <p className="text-muted-foreground">
                  <span data-editable="formSubtitle">{config.formSubtitle}</span>
                </p>
              </div>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="mb-4 text-primary">
                    <Send className="h-12 w-12 mx-auto" />
                  </div>
                  <p className="text-lg font-medium text-primary">
                    <span data-editable="successMessage">{config.successMessage}</span>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="mt-1"
                      placeholder="Your company name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="mt-1 min-h-[120px]"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        <span data-editable="submitText">{config.submitText}</span>
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="space-y-6">
              {config.contactMethods.map((method, idx) => (
                <div key={idx} className="flex items-start gap-4">
                  <div className="text-primary mt-1">
                    {idx === 0 && <Mail className="h-6 w-6" />}
                    {idx === 1 && <Phone className="h-6 w-6" />}
                    {idx === 2 && <MapPin className="h-6 w-6" />}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">
                      <span data-editable={`contactMethods[${idx}].title`}>{method.title}</span>
                    </h4>
                    <p className="text-foreground font-medium">
                      <span data-editable={`contactMethods[${idx}].value`}>{method.value}</span>
                    </p>
                    <p className="text-muted-foreground text-sm">
                      <span data-editable={`contactMethods[${idx}].description`}>
                        {method.description}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Features */}
            <div className="bg-muted/50 rounded-lg p-6">
              <h4 className="font-semibold mb-4">Why Choose Us</h4>
              <div className="space-y-4">
                {config.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="text-primary mt-0.5">
                      {idx === 0 && <Clock className="h-5 w-5" />}
                      {idx === 1 && <MessageSquare className="h-5 w-5" />}
                      {idx === 2 && <Send className="h-5 w-5" />}
                    </div>
                    <div>
                      <h5 className="font-medium">
                        <span data-editable={`features[${idx}].title`}>{feature.title}</span>
                      </h5>
                      <p className="text-muted-foreground text-sm">
                        <span data-editable={`features[${idx}].description`}>
                          {feature.description}
                        </span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
