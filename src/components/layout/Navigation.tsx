'use client';

import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSmartNavigation } from '@/hooks/useSmartNavigation';

const DEFAULT_NAVIGATION = {
  logoUrl:
    'https://pub-60de11c8c43b49ea9bd786eb6273aa91.r2.dev/6c3a27c0f3cad490965c666e1421a90d.svg',
  logoAlt: 'Company Logo',
  ctaText: 'Get Started',
  ctaHref: '#contact',
  navigationItems: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
} as const;

type NavigationProps = Partial<typeof DEFAULT_NAVIGATION>;

export default function Navigation(props: NavigationProps) {
  const config = { ...DEFAULT_NAVIGATION, ...props };
  const navigate = useSmartNavigation();
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (href: string) => {
    navigate(href);
    setIsOpen(false);
  };

  const handleCtaClick = () => {
    navigate(config.ctaHref);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center transition-opacity hover:opacity-80"
            onClick={() => navigate('/')}
          >
            <Image
              src={config.logoUrl}
              alt={config.logoAlt}
              width={120}
              height={48}
              className="h-12 md:h-14 lg:h-16 w-auto object-contain"
              data-editable-src="logoUrl"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {config.navigationItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleNavClick(item.href)}
                className="text-foreground/80 hover:text-foreground transition-colors duration-200 font-medium"
                data-editable-href={`navigationItems[${idx}].href`}
                data-href={item.href}
              >
                <span data-editable={`navigationItems[${idx}].label`}>{item.label}</span>
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Button
              onClick={handleCtaClick}
              className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
              data-editable-href="ctaHref"
              data-href={config.ctaHref}
            >
              <span data-editable="ctaText">{config.ctaText}</span>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col h-full">
                {/* Mobile Logo */}
                <div className="flex items-center justify-between pb-6 border-b border-border">
                  <Image
                    src={config.logoUrl}
                    alt={config.logoAlt}
                    width={120}
                    height={48}
                    className="h-12 w-auto object-contain"
                    data-editable-src="logoUrl"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    aria-label="Close menu"
                  >
                    <X className="h-6 w-6" />
                  </Button>
                </div>

                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4 py-6 flex-1">
                  {config.navigationItems.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-lg font-medium text-foreground/80 hover:text-foreground transition-colors duration-200 py-2"
                      data-editable-href={`navigationItems[${idx}].href`}
                      data-href={item.href}
                    >
                      <span data-editable={`navigationItems[${idx}].label`}>{item.label}</span>
                    </button>
                  ))}
                </div>

                {/* Mobile CTA */}
                <div className="pt-6 border-t border-border">
                  <Button
                    onClick={handleCtaClick}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200"
                    data-editable-href="ctaHref"
                    data-href={config.ctaHref}
                  >
                    <span data-editable="ctaText">{config.ctaText}</span>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
