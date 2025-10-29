import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Shirt, Gift, Calendar, Palette, Package, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Shirt,
      title: 'Custom Apparel',
      description: 'Premium quality custom t-shirts, hoodies, caps, and uniforms. Perfect for teams, events, or corporate branding.',
      features: ['Screen printing', 'Embroidery', 'DTG printing', 'Heat transfer']
    },
    {
      icon: Gift,
      title: 'Corporate Gifts',
      description: 'Thoughtfully curated corporate gifts and promotional items that leave a lasting impression on clients and employees.',
      features: ['Branded merchandise', 'Gift sets', 'Executive gifts', 'Promotional items']
    },
    {
      icon: Calendar,
      title: 'Event Merchandise',
      description: 'Complete merchandise solutions for conferences, festivals, sports events, and special occasions.',
      features: ['Event swag bags', 'Branded materials', 'Signage', 'Giveaways']
    },
    {
      icon: Palette,
      title: 'Brand Design',
      description: 'Professional design services to create or refresh your brand identity with logos, graphics, and marketing materials.',
      features: ['Logo design', 'Brand guidelines', 'Marketing collateral', 'Print design']
    },
    {
      icon: Package,
      title: 'Bulk Orders',
      description: 'Competitive pricing on large quantity orders with consistent quality and reliable delivery timelines.',
      features: ['Volume discounts', 'Flexible payment', 'Quality assurance', 'Nationwide delivery']
    },
    {
      icon: Sparkles,
      title: 'Custom Solutions',
      description: 'Unique, tailored merchandise solutions for special projects. If you can imagine it, we can create it.',
      features: ['Bespoke designs', 'Premium materials', 'Expert consultation', 'Creative freedom']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From custom apparel to corporate gifts, we deliver premium merchandise solutions that elevate your brand
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle>{service.title}</CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create something amazing together
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
