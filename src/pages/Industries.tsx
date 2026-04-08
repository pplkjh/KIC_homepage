import { motion } from 'framer-motion';
import { Building2, Factory, Leaf, Zap, Package, Ship, Shirt, Warehouse } from 'lucide-react';
import { INDUSTRIES } from '@/data/index';
import { IndustryCard } from '@/components/Cards';
import { IMAGES } from '@/assets/images';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

const industryIcons: Record<string, React.ReactNode> = {
  'food-beverage': <Package className="w-8 h-8" />,
  'construction': <Building2 className="w-8 h-8" />,
  'agriculture': <Leaf className="w-8 h-8" />,
  'electronics': <Zap className="w-8 h-8" />,
  'logistics': <Warehouse className="w-8 h-8" />,
  'meat-poultry': <Package className="w-8 h-8" />,
  'fishing': <Ship className="w-8 h-8" />,
  'textile': <Shirt className="w-8 h-8" />,
};

export default function Industries() {
  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.INDUSTRIAL_FACTORY_7}
            alt="Industrial manufacturing"
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
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ ...springPresets.gentle, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6"
            >
              <Factory className="w-5 h-5" />
              <span className="text-sm font-medium">Industries We Serve</span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Trusted Across Industries
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              For over 50 years, KIC has been the preferred strapping solution provider across diverse industries worldwide. From food manufacturing to electronics, our products secure what matters most.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {INDUSTRIES.map((industry) => (
              <motion.div key={industry.id} variants={staggerItem}>
                <IndustryCard industry={industry} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Why Industries Choose KIC</h2>
              <p className="text-xl text-muted-foreground">
                Decades of expertise, unwavering quality, and global reach
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-card border border-border shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Factory className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">50+ Years of Excellence</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Three generations of manufacturing expertise, serving industries since 1973 with consistent quality and innovation.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="p-8 rounded-2xl bg-card border border-border shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">ISO 9001 Certified</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Quality management system certified since 1985, ensuring every product meets international standards.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="p-8 rounded-2xl bg-card border border-border shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Leaf className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">RoHS Compliant</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Environmentally responsible manufacturing with RoHS certification for safe, sustainable products.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-8 rounded-2xl bg-card border border-border shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <Package className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold mb-3">Global Reach</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Exporting to 20+ countries worldwide, trusted by leading brands including Zespri New Zealand.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Secure Your Industry?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of businesses worldwide who trust KIC for their strapping needs. Request a quote today and experience the difference of 50+ years of excellence.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-background text-foreground rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-all"
            >
              Request a Quote
              <Package className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
