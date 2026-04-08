import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ROUTE_PATHS, COMPANY_INFO, CONTACT_INFO } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { springPresets } from '@/lib/motion';

interface LayoutProps {
  children: React.ReactNode;
}

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
];

const NAV_ITEMS = [
  { path: ROUTE_PATHS.HOME, label: 'Home' },
  { path: ROUTE_PATHS.PRODUCTS, label: 'Products' },
  { path: ROUTE_PATHS.INDUSTRIES, label: 'Industries' },
  { path: ROUTE_PATHS.ABOUT, label: 'About' },
  { path: ROUTE_PATHS.CONTACT, label: 'Contact' },
];

export function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState(LANGUAGES[0]);

  const handleLanguageChange = (language: typeof LANGUAGES[0]) => {
    setCurrentLanguage(language);
    setLanguageMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to={ROUTE_PATHS.HOME} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={IMAGES.KIC_LOGO_47} alt="KIC Logo" className="h-10 w-auto" />
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-primary ${
                      isActive ? 'text-primary' : 'text-foreground'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-4">
              <div className="relative">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                  className="gap-2"
                >
                  <span>{currentLanguage.flag}</span>
                  <span>{currentLanguage.code.toUpperCase()}</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>

                <AnimatePresence>
                  {languageMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={springPresets.snappy}
                      className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg overflow-hidden"
                    >
                      {LANGUAGES.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => handleLanguageChange(lang)}
                          className="w-full px-4 py-2 text-left text-sm hover:bg-muted transition-colors flex items-center gap-3"
                        >
                          <span>{lang.flag}</span>
                          <span>{lang.name}</span>
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Button asChild size="sm">
                <Link to={ROUTE_PATHS.CONTACT}>Request Quote</Link>
              </Button>
            </div>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={springPresets.gentle}
              className="md:hidden border-t border-border bg-background"
            >
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive ? 'bg-primary text-primary-foreground' : 'hover:bg-muted'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                ))}
                <div className="border-t border-border my-2" />
                <div className="px-4 py-2">
                  <p className="text-xs text-muted-foreground mb-2">Language</p>
                  <div className="grid grid-cols-2 gap-2">
                    {LANGUAGES.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          handleLanguageChange(lang);
                          setMobileMenuOpen(false);
                        }}
                        className={`px-3 py-2 rounded-lg text-sm transition-colors flex items-center gap-2 ${
                          currentLanguage.code === lang.code
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-muted hover:bg-muted/80'
                        }`}
                      >
                        <span>{lang.flag}</span>
                        <span>{lang.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <Button asChild className="mt-2">
                  <Link to={ROUTE_PATHS.CONTACT} onClick={() => setMobileMenuOpen(false)}>
                    Request Quote
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1 pt-16">{children}</main>

      <footer className="bg-card border-t border-border mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <img src={IMAGES.KIC_LOGO_47} alt="KIC Logo" className="h-12 w-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-4">
                {COMPANY_INFO.mission}
              </p>
              <div className="flex flex-col gap-2">
                {COMPANY_INFO.certifications.map((cert) => (
                  <span key={cert} className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {cert} Certified
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <nav className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <div className="flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{CONTACT_INFO.email}</span>
                </a>
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="flex items-start gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{CONTACT_INFO.phone}</span>
                </a>
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                  <span>{CONTACT_INFO.address}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Business Hours</h3>
              <p className="text-sm text-muted-foreground mb-4">{CONTACT_INFO.businessHours}</p>
              <h4 className="font-medium text-sm mb-2">Languages Supported</h4>
              <div className="flex flex-wrap gap-2">
                {CONTACT_INFO.languages.slice(0, 4).map((lang) => (
                  <span key={lang} className="text-xs bg-muted px-2 py-1 rounded">
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Established {COMPANY_INFO.established} | 50+ Years of Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
