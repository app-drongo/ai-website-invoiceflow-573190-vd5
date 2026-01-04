'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

const DEFAULT_CONTACT = {
  title: 'Get in Touch',
  subtitle: "Ready to transform your business? Let's start the conversation.",
  description:
    'Our team is here to help you deploy, scale, and optimize your applications with confidence.',
  formTitle: 'Send us a message',
  contactMethods: [
    {
      title: 'Email Us',
      value: 'hello@unifieddeploy.com',
      description: 'Get a response within 24 hours',
    },
    {
      title: 'Call Us',
      value: '+1 (555) 123-4567',
      description: 'Mon-Fri 9AM-6PM EST',
    },
    {
      title: 'Visit Us',
      value: 'San Francisco, CA',
      description: 'Schedule an in-person meeting',
    },
  ],
  form: {
    namePlaceholder: 'Your name',
    emailPlaceholder: 'your.email@company.com',
    subjectPlaceholder: 'What can we help you with?',
    messagePlaceholder: 'Tell us about your project, timeline, and requirements...',
    submitText: 'Send Message',
    successMessage: "Thanks! We'll get back to you within 24 hours.",
  },
} as const;

type ContactProps = Partial<typeof DEFAULT_CONTACT>;

export default function Contact(props: ContactProps) {
  const config = { ...DEFAULT_CONTACT, ...props };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
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
    setFormData({ name: '', email: '', subject: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 sm:text-5xl">
              <span data-editable="title">{config.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              <span data-editable="subtitle">{config.subtitle}</span>
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <span data-editable="description">{config.description}</span>
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Methods */}
            <div className="space-y-8">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>

              <div className="space-y-6">
                {config.contactMethods.map((method, idx) => (
                  <Card
                    key={idx}
                    className="bg-card text-card-foreground border-border hover:bg-accent/50 transition-colors"
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-primary mt-1">
                          {idx === 0 && <Mail className="h-6 w-6" />}
                          {idx === 1 && <Phone className="h-6 w-6" />}
                          {idx === 2 && <MapPin className="h-6 w-6" />}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-lg mb-1">
                            <span data-editable={`contactMethods[${idx}].title`}>
                              {method.title}
                            </span>
                          </h4>
                          <p className="text-foreground font-medium mb-2">
                            <span data-editable={`contactMethods[${idx}].value`}>
                              {method.value}
                            </span>
                          </p>
                          <p className="text-muted-foreground text-sm">
                            <span data-editable={`contactMethods[${idx}].description`}>
                              {method.description}
                            </span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-card text-card-foreground border-border">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">
                    <span data-editable="formTitle">{config.formTitle}</span>
                  </h3>

                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <div className="text-primary mb-4">
                        <Mail className="h-12 w-12 mx-auto" />
                      </div>
                      <p className="text-lg font-medium text-primary">
                        <span data-editable="form.successMessage">
                          {config.form.successMessage}
                        </span>
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder={config.form.namePlaceholder}
                            required
                            className="bg-background border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder={config.form.emailPlaceholder}
                            required
                            className="bg-background border-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          value={formData.subject}
                          onChange={handleInputChange}
                          placeholder={config.form.subjectPlaceholder}
                          required
                          className="bg-background border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder={config.form.messagePlaceholder}
                          required
                          rows={6}
                          className="bg-background border-border resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground border-t-transparent" />
                            Sending...
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <Send className="h-4 w-4" />
                            <span data-editable="form.submitText">{config.form.submitText}</span>
                          </div>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
