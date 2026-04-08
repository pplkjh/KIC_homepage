import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Building2, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { COMPANY_INFO, CONTACT_INFO, PRODUCT_CATEGORIES, validateEmail } from '@/lib/index';
import { IMAGES } from '@/assets/images';
import { springPresets, fadeInUp, staggerContainer, staggerItem } from '@/lib/motion';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategory: 'none',
    quantity: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (formData.productCategory === 'none') newErrors.productCategory = 'Please select a product category';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      productCategory: 'none',
      quantity: '',
      message: '',
    });

    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen">
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.CORPORATE_BUILDING_1}
            alt="KIC Office"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/70" />
        </div>

        <motion.div
          className="relative z-10 text-center px-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={springPresets.gentle}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Request a quote for your strapping needs. Our B2B team is ready to assist you.
          </p>
        </motion.div>
      </section>

      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="grid lg:grid-cols-3 gap-8 mb-16"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div variants={staggerItem}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                  <CardDescription>Send us a message anytime</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                  <CardDescription>Call us during business hours</CardDescription>
                </CardHeader>
                <CardContent>
                  <a
                    href={`tel:${CONTACT_INFO.phone}`}
                    className="text-primary hover:text-accent transition-colors font-medium"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={staggerItem}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-all duration-200">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle>Business Hours</CardTitle>
                  <CardDescription>We're available</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground">{CONTACT_INFO.businessHours}</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-3xl">Request a Quote</CardTitle>
                  <CardDescription className="text-base">
                    Fill out the form below and our team will respond within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          placeholder="John Doe"
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name *</Label>
                        <Input
                          id="company"
                          value={formData.company}
                          onChange={(e) => handleInputChange('company', e.target.value)}
                          placeholder="ABC Corporation"
                          className={errors.company ? 'border-destructive' : ''}
                        />
                        {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          placeholder="john@company.com"
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          placeholder="+1 234 567 8900"
                          className={errors.phone ? 'border-destructive' : ''}
                        />
                        {errors.phone && <p className="text-sm text-destructive">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="country">Country *</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => handleInputChange('country', e.target.value)}
                        placeholder="United States"
                        className={errors.country ? 'border-destructive' : ''}
                      />
                      {errors.country && <p className="text-sm text-destructive">{errors.country}</p>}
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="productCategory">Product Category *</Label>
                        <Select
                          value={formData.productCategory}
                          onValueChange={(value) => handleInputChange('productCategory', value)}
                        >
                          <SelectTrigger className={errors.productCategory ? 'border-destructive' : ''}>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="none">Select category</SelectItem>
                            {PRODUCT_CATEGORIES.map((cat) => (
                              <SelectItem key={cat.id} value={cat.id}>
                                {cat.name}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.productCategory && <p className="text-sm text-destructive">{errors.productCategory}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quantity">Estimated Quantity</Label>
                        <Input
                          id="quantity"
                          value={formData.quantity}
                          onChange={(e) => handleInputChange('quantity', e.target.value)}
                          placeholder="e.g., 1000 rolls"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        placeholder="Please provide details about your requirements, including specifications, delivery timeline, and any special requests..."
                        rows={6}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                    </div>

                    {submitSuccess && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-primary/10 border border-primary/20 rounded-lg text-primary"
                      >
                        Thank you for your inquiry! We'll get back to you within 24 hours.
                      </motion.div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Sending...'
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Request
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={springPresets.gentle}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Company Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Address</h4>
                    <div className="flex items-start gap-3 text-muted-foreground">
                      <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-primary" />
                      <p>{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Certifications</h4>
                    <div className="flex flex-wrap gap-2">
                      {COMPANY_INFO.certifications.map((cert) => (
                        <span
                          key={cert}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {cert}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Established</h4>
                    <p className="text-muted-foreground">{COMPANY_INFO.established} - Over 50 years of excellence</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Global Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    We provide multilingual support to serve our global customer base:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {CONTACT_INFO.languages.map((lang) => (
                      <div key={lang} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-sm text-foreground">{lang}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                <CardContent className="pt-6">
                  <h4 className="font-semibold text-lg mb-3">Why Choose KIC?</h4>
                  <ul className="space-y-2">
                    {COMPANY_INFO.values.map((value) => (
                      <li key={value} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{value}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
