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
  subtitle:
    "Ready to streamline your invoicing? Let's discuss how our platform can transform your financial workflow.",
  formTitle: 'Send us a message',
  formSubtitle: "We'll get back to you within 24 hours",
  contactMethods: [
    {
      title: 'Email Support',
      description: 'Get help with your account or technical questions',
      value: 'support@invoiceapp.com',
    },
    {
      title: 'Sales Inquiries',
      description: 'Learn about pricing and enterprise solutions',
      value: '+1 (555) 123-4567',
    },
    {
      title: 'Office Location',
      description: 'Visit us at our headquarters',
      value: '123 Business Ave, Suite 100, San Francisco, CA 94105',
    },
  ],
  form: {
    nameLabel: 'Full Name',
    namePlaceholder: 'Enter your full name',
    emailLabel: 'Email Address',
    emailPlaceholder: 'Enter your email address',
    companyLabel: 'Company Name',
    companyPlaceholder: 'Enter your company name',
    messageLabel: 'Message',
    messagePlaceholder: 'Tell us about your invoicing needs and how we can help...',
    submitText: 'Send Message',
    privacyText: 'By submitting this form, you agree to our privacy policy and terms of service.',
  },
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

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Reset form
    setFormData({ name: '', email: '', company: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="bg-background text-foreground py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span data-editable="title">{config.title}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            <span data-editable="subtitle">{config.subtitle}</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Methods */}
          <div className="space-y-8">
            <div className="grid gap-6">
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
                        <h3 className="font-semibold text-lg mb-2">
                          <span data-editable={`contactMethods[${idx}].title`}>{method.title}</span>
                        </h3>
                        <p className="text-muted-foreground mb-3">
                          <span data-editable={`contactMethods[${idx}].description`}>
                            {method.description}
                          </span>
                        </p>
                        <p className="font-medium text-foreground">
                          <span data-editable={`contactMethods[${idx}].value`}>{method.value}</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info */}
            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Response Time</h3>
                    <p className="opacity-90">
                      We typically respond to all inquiries within 24 hours during business days.
                      For urgent technical support, please call our support line.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="bg-card text-card-foreground border-border">
              <CardContent className="p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <h3 className="text-2xl font-bold">
                      <span data-editable="formTitle">{config.formTitle}</span>
                    </h3>
                  </div>
                  <p className="text-muted-foreground">
                    <span data-editable="formSubtitle">{config.formSubtitle}</span>
                  </p>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  data-form-id="69598d5bb2f6a1bdd26b9d0d"
                >
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">
                        <span data-editable="form.nameLabel">{config.form.nameLabel}</span>
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={e => handleInputChange('name', e.target.value)}
                        placeholder={config.form.namePlaceholder}
                        required
                        className="bg-background border-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">
                        <span data-editable="form.emailLabel">{config.form.emailLabel}</span>
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={e => handleInputChange('email', e.target.value)}
                        placeholder={config.form.emailPlaceholder}
                        required
                        className="bg-background border-input"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">
                      <span data-editable="form.companyLabel">{config.form.companyLabel}</span>
                    </Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={e => handleInputChange('company', e.target.value)}
                      placeholder={config.form.companyPlaceholder}
                      className="bg-background border-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">
                      <span data-editable="form.messageLabel">{config.form.messageLabel}</span>
                    </Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={e => handleInputChange('message', e.target.value)}
                      placeholder={config.form.messagePlaceholder}
                      rows={5}
                      required
                      className="bg-background border-input resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        <span data-editable="form.submitText">{config.form.submitText}</span>
                      </div>
                    )}
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    <span data-editable="form.privacyText">{config.form.privacyText}</span>
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
