import { motion } from 'framer-motion';
import { Award, Leaf, CheckCircle, Zap, Factory, Globe, Users, TrendingUp } from 'lucide-react';
import { COMPANY_INFO } from '@/lib/index';
import { COMPANY_HISTORY, CERTIFICATIONS, GLOBAL_PRESENCE, MANUFACTURING_CAPABILITIES } from '@/data/index';
import { IMAGES } from '@/assets/images';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function About() {
  const certificationIcons = {
    award: Award,
    leaf: Leaf,
    'check-circle': CheckCircle,
    zap: Zap,
  };

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.CORPORATE_BUILDING_1}
            alt="KIC Corporation"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              About KIC Corporation
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              {COMPANY_INFO.mission}
            </p>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Factory className="w-5 h-5 text-primary" />
                <span>Est. {COMPANY_INFO.established}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-primary" />
                <span>20+ Countries</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span>3rd Generation</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Over 50 years of excellence in manufacturing polypropylene strapping solutions
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2 hidden md:block" />

              {COMPANY_HISTORY.map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={staggerItem}
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                  }`}
                >
                  <div className="md:w-1/2">
                    <div
                      className={`bg-card border border-border rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 ${
                        item.milestone ? 'border-primary/50 bg-primary/5' : ''
                      }`}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="text-3xl font-bold text-primary">{item.year}</span>
                        {item.milestone && (
                          <TrendingUp className="w-5 h-5 text-primary" />
                        )}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 top-8 w-4 h-4 bg-primary rounded-full -translate-x-1/2 border-4 border-background hidden md:block" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide our commitment to excellence
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {COMPANY_INFO.values.map((value, index) => (
                <motion.div
                  key={value}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Certifications & Standards</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Committed to quality, safety, and environmental responsibility
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CERTIFICATIONS.map((cert) => {
                const Icon = certificationIcons[cert.icon as keyof typeof certificationIcons];
                return (
                  <motion.div
                    key={cert.name}
                    variants={staggerItem}
                    className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                  >
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{cert.name}</h3>
                    <p className="text-sm text-muted-foreground mb-2">{cert.description}</p>
                    <p className="text-xs text-muted-foreground">Since {cert.year}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Manufacturing Excellence</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                State-of-the-art facilities delivering consistent quality
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {MANUFACTURING_CAPABILITIES.map((capability) => (
                <motion.div
                  key={capability.title}
                  variants={staggerItem}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-200 hover:shadow-lg"
                >
                  <h3 className="text-sm font-medium text-muted-foreground mb-2">
                    {capability.title}
                  </h3>
                  <p className="text-3xl font-bold text-primary mb-2">{capability.value}</p>
                  <p className="text-sm text-muted-foreground">{capability.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={staggerItem} className="grid md:grid-cols-2 gap-8">
              <div className="relative rounded-2xl overflow-hidden h-80">
                <img
                  src={IMAGES.INDUSTRIAL_FACTORY_1}
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Production Facility</h3>
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-80">
                <img
                  src={IMAGES.INDUSTRIAL_FACTORY_2}
                  alt="Quality Control"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6">
                  <h3 className="text-2xl font-bold text-white">Quality Assurance</h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={staggerItem} className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Global Presence</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Serving customers across 20+ countries worldwide
              </p>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="bg-card border border-border rounded-2xl p-8"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {GLOBAL_PRESENCE.map((country) => (
                  <div
                    key={country}
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Globe className="w-4 h-4" />
                    <span>{country}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div variants={staggerItem}>
              <h2 className="text-4xl font-bold mb-6">Leadership</h2>
              <div className="bg-card border border-border rounded-2xl p-12">
                <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{COMPANY_INFO.ceo}</h3>
                <p className="text-lg text-muted-foreground mb-6">Chief Executive Officer</p>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Leading KIC Corporation into its third generation, continuing the legacy of
                  quality excellence while embracing innovation and digital transformation for
                  global growth.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
