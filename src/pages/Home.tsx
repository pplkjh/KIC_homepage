import { motion } from 'framer-motion';
import { ArrowRight, Award, Globe, Shield, Zap, Package, Factory, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ProductCard, IndustryCard, FeatureCard } from '@/components/Cards';
import { PRODUCTS, INDUSTRIES, COMPANY_HISTORY, CERTIFICATIONS } from '@/data/index';
import { COMPANY_INFO } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 6);
  const featuredIndustries = INDUSTRIES.slice(0, 4);
  const recentHistory = COMPANY_HISTORY.filter(h => h.milestone).slice(-4);

  return (
    <div className="w-full">
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="hero-background">
          <img
            src={IMAGES.INDUSTRIAL_FACTORY_1}
            alt="KIC Manufacturing Facility"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="hero-overlay" />
        
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            className="max-w-4xl mx-auto text-center text-white"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
          >
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ ...springPresets.gentle, delay: 0.2 }}
            >
              <img
                src={IMAGES.KIC_LOGO_47}
                alt="KIC Logo"
                className="h-24 mx-auto mb-6 drop-shadow-lg"
              />
            </motion.div>
            
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springPresets.gentle, delay: 0.3 }}
              style={{ textShadow: '0 4px 8px rgba(0,0,0,0.7)' }}
            >
              World-Class Strapping Solutions
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl mb-8 text-white max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springPresets.gentle, delay: 0.4 }}
              style={{ textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}
            >
              50+ Years of Manufacturing Excellence in PP Band & PE Tying Tape
            </motion.p>
            
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ...springPresets.gentle, delay: 0.5 }}
            >
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 py-6 text-lg group"
                asChild
              >
                <a href="#contact">
                  Request Quote
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm px-8 py-6 text-lg"
                asChild
              >
                <a href="#products">View Products</a>
              </Button>
            </motion.div>
            
            <motion.div
              className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto"
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {[
                { label: 'Years of Excellence', value: '50+' },
                { label: 'Countries Served', value: '20+' },
                { label: 'Production Capacity', value: '500+ tons/mo' },
                { label: 'Market Leader', value: '#1 in Eggs' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={staggerItem}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-2" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-white font-medium" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}>{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="products" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Our Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Premium strapping solutions for every industry, manufactured with Korean virgin resin
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <Button
              size="lg"
              variant="outline"
              className="group"
              asChild
            >
              <a href="/products">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section id="industries" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading companies across diverse sectors worldwide
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredIndustries.map((industry) => (
              <motion.div key={industry.id} variants={staggerItem}>
                <IndustryCard industry={industry} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <Button
              size="lg"
              variant="outline"
              className="group"
              asChild
            >
              <a href="/industries">
                Explore All Industries
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Why Choose KIC
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Three generations of excellence, innovation, and unwavering commitment to quality
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={staggerItem}>
              <FeatureCard
                title="Quality Excellence"
                description="ISO 9001 certified manufacturing with 100% quality inspection on every roll"
                icon={<Award className="h-8 w-8 text-primary" />}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <FeatureCard
                title="Global Reach"
                description="Exporting to 20+ countries with trusted partnerships worldwide"
                icon={<Globe className="h-8 w-8 text-primary" />}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <FeatureCard
                title="Environmental Responsibility"
                description="RoHS compliant materials and sustainable manufacturing practices"
                icon={<Shield className="h-8 w-8 text-primary" />}
              />
            </motion.div>
            <motion.div variants={staggerItem}>
              <FeatureCard
                title="Innovation"
                description="Continuous R&D for advanced strapping solutions and custom applications"
                icon={<Zap className="h-8 w-8 text-primary" />}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <img
                src={IMAGES.BUSINESS_TEAM_1}
                alt="KIC Team"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                50+ Years of Excellence
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                {COMPANY_INFO.mission}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Founded in {COMPANY_INFO.established}, KIC Corporation has grown from a small family business to a global leader in strapping solutions. Now in our third generation of family leadership, we continue to uphold the values of quality, trust, and innovation that have defined us for over five decades.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                {CERTIFICATIONS.map((cert, index) => (
                  <Card key={index} className="p-4 bg-card hover:shadow-lg transition-shadow">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {cert.icon === 'award' && <Award className="h-5 w-5 text-primary" />}
                        {cert.icon === 'leaf' && <Shield className="h-5 w-5 text-primary" />}
                        {cert.icon === 'check-circle' && <Package className="h-5 w-5 text-primary" />}
                        {cert.icon === 'zap' && <Zap className="h-5 w-5 text-primary" />}
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-1">{cert.name}</h4>
                        <p className="text-xs text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <Button size="lg" className="group" asChild>
                <a href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
            </motion.div>
          </div>

          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h3 className="text-3xl font-bold mb-12 text-center text-foreground">
              Our Journey
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recentHistory.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ ...springPresets.gentle, delay: index * 0.1 }}
                >
                  <Card className="p-6 h-full bg-card hover:shadow-lg transition-shadow">
                    <div className="text-4xl font-bold text-primary mb-3">
                      {item.year}
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Request a quote for your strapping needs. Our B2B team will respond within 24 hours.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4">
                  <Package className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Custom Solutions</h3>
                <p className="text-sm opacity-80">Tailored products for your specific needs</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4">
                  <Factory className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Fast Production</h3>
                <p className="text-sm opacity-80">2-3 weeks lead time for standard orders</p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/10 rounded-full mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">Expert Support</h3>
                <p className="text-sm opacity-80">Technical assistance and training available</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-semibold px-8 py-6 text-lg group"
                asChild
              >
                <a href="/contact">
                  Request Quote (RFQ)
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
                asChild
              >
                <a href={`mailto:${COMPANY_INFO.email}`}>Email Us</a>
              </Button>
            </div>

            <div className="mt-12 pt-8 border-t border-primary-foreground/20">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="font-semibold mb-2">Contact Information</h4>
                  <p className="text-sm opacity-80 mb-1">
                    Email: {COMPANY_INFO.email}
                  </p>
                  <p className="text-sm opacity-80">
                    Phone: {COMPANY_INFO.phone}
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Business Hours</h4>
                  <p className="text-sm opacity-80">
                    Monday - Friday: 9:00 AM - 6:00 PM KST
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}