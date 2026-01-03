'use client';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import Image from 'next/image';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_FOOTER = {
  companyName: 'InvoiceFlow',
  tagline: 'Streamline your finances. Automate your invoicing. Grow your business effortlessly.',
  logoUrl:
    'https://pub-60de11c8c43b49ea9bd786eb6273aa91.r2.dev/6c3a27c0f3cad490965c666e1421a90d.svg',
  logoAlt: 'InvoiceFlow Logo',

  productLinks: [
    { title: 'Features', href: '/features' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Integrations', href: '/integrations' },
  ],

  companyLinks: [
    { title: 'About Us', href: '/about' },
    { title: 'Careers', href: '/careers' },
    { title: 'Contact', href: '/contact' },
  ],

  supportLinks: [
    { title: 'Help Center', href: '/help' },
    { title: 'Documentation', href: '/docs' },
    { title: 'API Reference', href: '/api' },
  ],

  legalLinks: [
    { title: 'Privacy Policy', href: '/privacy' },
    { title: 'Terms of Service', href: '/terms' },
    { title: 'Cookie Policy', href: '/cookies' },
  ],

  contactInfo: {
    email: 'hello@invoiceflow.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business Ave, Suite 100, San Francisco, CA 94105',
  },

  socialLinks: [
    { platform: 'Twitter', href: 'https://twitter.com/invoiceflow' },
    { platform: 'LinkedIn', href: 'https://linkedin.com/company/invoiceflow' },
    { platform: 'Facebook', href: 'https://facebook.com/invoiceflow' },
  ],

  copyright: '© 2024 InvoiceFlow. All rights reserved.',
  newsletterTitle: 'Stay Updated',
  newsletterDescription: 'Get the latest updates on new features and financial insights.',
  newsletterPlaceholder: 'Enter your email',
  newsletterButtonText: 'Subscribe',
} as const;

type FooterProps = Partial<typeof DEFAULT_FOOTER>;

export default function Footer(props: FooterProps) {
  const config = { ...DEFAULT_FOOTER, ...props };
  const navigate = useSmartNavigation();

  const handleLinkClick = (href: string) => {
    navigate(href);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
  };

  return (
    <footer id="footer" className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-5">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center mb-4">
                <Image
                  src={config.logoUrl}
                  alt={config.logoAlt}
                  width={120}
                  height={48}
                  className="h-10 md:h-12 w-auto object-contain"
                  data-editable-src="logoUrl"
                />
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                <span data-editable="tagline">{config.tagline}</span>
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 text-primary" />
                  <span data-editable="contactInfo.email">{config.contactInfo.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 text-primary" />
                  <span data-editable="contactInfo.phone">{config.contactInfo.phone}</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary mt-0.5" />
                  <span data-editable="contactInfo.address">{config.contactInfo.address}</span>
                </div>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Product</h3>
              <ul className="space-y-3">
                {config.productLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`productLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`productLinks[${idx}].title`}>{link.title}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {config.companyLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`companyLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`companyLinks[${idx}].title`}>{link.title}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Support</h3>
              <ul className="space-y-3">
                {config.supportLinks.map((link, idx) => (
                  <li key={idx}>
                    <Button
                      variant="ghost"
                      className="h-auto p-0 text-muted-foreground hover:text-foreground justify-start"
                      onClick={() => handleLinkClick(link.href)}
                      data-editable-href={`supportLinks[${idx}].href`}
                      data-href={link.href}
                    >
                      <span data-editable={`supportLinks[${idx}].title`}>{link.title}</span>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border" />

        {/* Bottom Footer */}
        <div className="py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground">
              <span data-editable="copyright">{config.copyright}</span>
            </p>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              {config.legalLinks.map((link, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  className="h-auto p-0 text-sm text-muted-foreground hover:text-foreground"
                  onClick={() => handleLinkClick(link.href)}
                  data-editable-href={`legalLinks[${idx}].href`}
                  data-href={link.href}
                >
                  <span data-editable={`legalLinks[${idx}].title`}>{link.title}</span>
                </Button>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {config.socialLinks.map((social, idx) => (
                <Button
                  key={idx}
                  variant="ghost"
                  size="sm"
                  className="h-9 w-9 p-0 text-muted-foreground hover:text-foreground hover:bg-accent"
                  onClick={() => handleLinkClick(social.href)}
                  data-editable-href={`socialLinks[${idx}].href`}
                  data-href={social.href}
                >
                  {idx === 0 && <Twitter className="h-4 w-4" />}
                  {idx === 1 && <Linkedin className="h-4 w-4" />}
                  {idx === 2 && <Facebook className="h-4 w-4" />}
                  <span className="sr-only">
                    <span data-editable={`socialLinks[${idx}].platform`}>{social.platform}</span>
                  </span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
