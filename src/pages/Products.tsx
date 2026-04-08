import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Package, CheckCircle, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '@/data/index';
import { Product } from '@/lib/index';
import { ProductCard } from '@/components/Cards';
import { IMAGES } from '@/assets/images';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib/index';

const PRODUCT_CATEGORIES = [
  { id: 'pp-band', name: 'PP Band' },
  { id: 'pe-tape', name: 'PE Tying Tape' },
  { id: 'polyester-band', name: 'Polyester Band' },
  { id: 'hand-roll', name: 'Hand Roll' },
  { id: 'printed-band', name: 'Printed Band' },
  { id: 'conductive-band', name: 'Conductive Band' },
];

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.STRAPPING_PACKAGING_1}
            alt="Products Background"
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
              <Package className="w-3 h-3 mr-1" />
              Product Catalog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Premium Strapping Solutions
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover our comprehensive range of PP Band, PE Tying Tape, and specialized strapping products. Trusted by industry leaders for over 50 years.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search products by name or description..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-background border-border"
                />
              </div>
              <Button variant="outline" className="h-12 px-6">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedCategory === 'all' ? 'default' : 'outline'}
                onClick={() => setSelectedCategory('all')}
                className="rounded-full"
              >
                All Products
              </Button>
              {PRODUCT_CATEGORIES.map((category: { id: string; name: string }) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? 'default' : 'outline'}
                  onClick={() => setSelectedCategory(category.id)}
                  className="rounded-full"
                >
                  {category.name}
                </Button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItem}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProducts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <Package className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h3 className="text-2xl font-semibold mb-2">No products found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search or filter criteria
              </p>
              <Button onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}>
                Clear Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="max-w-4xl mx-auto"
          >
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                      <CheckCircle className="w-3 h-3 mr-1" />
                      Quality Guarantee
                    </Badge>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Why Choose KIC Products?
                    </h2>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Virgin Korean resin for consistent quality</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">ISO 9001 & RoHS certified manufacturing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">50+ years of manufacturing excellence</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Custom solutions with MOQ 500kg</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">Exported to 20+ countries worldwide</span>
                      </li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
                      <h3 className="font-semibold mb-2">Custom Manufacturing</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Need custom colors, sizes, or printing? We offer tailored solutions for your specific requirements.
                      </p>
                      <Link to={ROUTE_PATHS.CONTACT}>
                        <Button className="w-full">
                          Request Custom Quote
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
                      <h3 className="font-semibold mb-2">Technical Support</h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        Our team provides expert guidance on product selection and application.
                      </p>
                      <Link to={ROUTE_PATHS.CONTACT}>
                        <Button variant="outline" className="w-full">
                          Contact Support
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={springPresets.gentle}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Order?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              All products are available on RFQ basis. Contact us for pricing, samples, and technical specifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTE_PATHS.CONTACT}>
                <Button size="lg" className="w-full sm:w-auto">
                  Request Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link to={ROUTE_PATHS.INDUSTRIES}>
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  View Industries
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
