import { motion } from 'framer-motion';
import { Product, Industry } from '@/lib/index';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2, Package, Factory, TrendingUp } from 'lucide-react';
import { springPresets, hoverLift } from '@/lib/motion';
import { Link } from 'react-router-dom';
import { ROUTE_PATHS } from '@/lib/index';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:border-primary/30 hover:shadow-[0_8px_30px_-6px_color-mix(in_srgb,var(--primary)_15%,transparent)]">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="secondary" className="bg-background/90 backdrop-blur-sm">
              {product.category.toUpperCase().replace('-', ' ')}
            </Badge>
          </div>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{product.name}</CardTitle>
          <CardDescription className="line-clamp-2">{product.description}</CardDescription>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Specifications</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {product.specifications.width && (
                <div>
                  <span className="text-muted-foreground">Width:</span>
                  <span className="ml-2 font-medium">{product.specifications.width}</span>
                </div>
              )}
              {product.specifications.thickness && (
                <div>
                  <span className="text-muted-foreground">Thickness:</span>
                  <span className="ml-2 font-medium">{product.specifications.thickness}</span>
                </div>
              )}
              {product.specifications.tensile && (
                <div>
                  <span className="text-muted-foreground">Tensile:</span>
                  <span className="ml-2 font-medium">{product.specifications.tensile}</span>
                </div>
              )}
              {product.specifications.length && (
                <div>
                  <span className="text-muted-foreground">Length:</span>
                  <span className="ml-2 font-medium">{product.specifications.length}</span>
                </div>
              )}
            </div>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-muted-foreground">Key Features</h4>
            <ul className="space-y-1">
              {product.features.slice(0, 3).map((feature, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        
        <CardFooter>
          <Link to={ROUTE_PATHS.CONTACT} className="w-full">
            <Button className="w-full group" variant="default">
              Request Quote
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface IndustryCardProps {
  industry: Industry;
}

export function IndustryCard({ industry }: IndustryCardProps) {
  return (
    <motion.div
      variants={hoverLift}
      initial="rest"
      whileHover="hover"
      className="h-full"
    >
      <Card className="h-full overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-all duration-200 hover:border-accent/30 hover:shadow-[0_8px_30px_-6px_color-mix(in_srgb,var(--accent)_15%,transparent)]">
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={industry.image}
            alt={industry.name}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-2xl font-bold text-white drop-shadow-lg">{industry.name}</h3>
          </div>
        </div>
        
        <CardContent className="pt-6 space-y-4">
          <p className="text-sm text-muted-foreground leading-relaxed">{industry.description}</p>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <Package className="h-4 w-4 text-primary" />
              Applications
            </h4>
            <ul className="space-y-1">
              {industry.applications.slice(0, 3).map((app, index) => (
                <li key={index} className="text-sm text-muted-foreground pl-6 relative before:content-['•'] before:absolute before:left-2 before:text-accent">
                  {app}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-2">
            <h4 className="text-sm font-medium flex items-center gap-2">
              <TrendingUp className="h-4 w-4 text-accent" />
              Benefits
            </h4>
            <ul className="space-y-1">
              {industry.benefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 mt-0.5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
        
        <CardFooter>
          <Link to={ROUTE_PATHS.INDUSTRIES} className="w-full">
            <Button variant="outline" className="w-full group">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={springPresets.gentle}
      className="h-full"
    >
      <Card className="h-full border-border/50 bg-card/30 backdrop-blur-sm transition-all duration-200 hover:border-primary/30 hover:bg-card/50 hover:shadow-[0_4px_12px_color-mix(in_srgb,var(--primary)_35%,transparent),inset_0_1px_0_rgba(255,255,255,0.1),inset_0_-1px_0_rgba(0,0,0,0.1)]">
        <CardHeader>
          <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
            {icon}
          </div>
          <CardTitle className="text-lg font-semibold">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
