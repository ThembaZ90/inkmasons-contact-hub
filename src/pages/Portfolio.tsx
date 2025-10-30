import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  const projects = [
    {
      title: 'Music Festival Merchandise Collection',
      category: 'Music Festival',
      description: 'Complete merchandise line for a multi-day music festival featuring custom t-shirts, hoodies, caps, and eco-friendly tote bags with vibrant festival branding.',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      featured: true,
      tags: ['T-Shirts', 'Hoodies', 'Caps', 'Tote Bags']
    },
    {
      title: 'Corporate Conference Package',
      category: 'Corporate Event',
      description: 'Professional branded materials for a technology conference including custom polo shirts, branded notebooks, lanyards, and premium gift sets.',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
      featured: false,
      tags: ['Polo Shirts', 'Lanyards', 'Notebooks']
    },
    {
      title: 'Craft Brewery Brand Launch',
      category: 'Brand Merchandise',
      description: 'Custom apparel and drinkware collection for a local craft brewery\'s brand launch including branded t-shirts, enamel mugs, and signature glassware.',
      image: 'https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800&h=600&fit=crop',
      featured: true,
      tags: ['T-Shirts', 'Enamel Mugs', 'Caps']
    },
    {
      title: 'Desert Festival Gear Collection',
      category: 'Festival Event',
      description: 'Durable and functional merchandise for an outdoor desert festival including UV-protective bandanas, insulated water bottles, and weather-resistant apparel.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&h=600&fit=crop',
      featured: false,
      tags: ['Bandanas', 'Water Bottles', 'UV Clothing']
    },
    {
      title: 'Tech Startup Team Apparel',
      category: 'Team Merchandise',
      description: 'Modern team uniforms and casual wear for a growing technology startup including custom hoodies, branded t-shirts, and professional polo shirts.',
      image: 'https://images.unsplash.com/photo-1556745753-b2904692b3cd?w=800&h=600&fit=crop',
      featured: false,
      tags: ['Hoodies', 'T-Shirts', 'Jackets']
    },
    {
      title: 'Independent Artist Merchandise',
      category: 'Artist Merchandise',
      description: 'Limited edition merchandise collection for an independent musician including vintage-style tour t-shirts, enamel pins, and custom stickers.',
      image: 'https://images.unsplash.com/photo-1598387181032-a3103a2db5b1?w=800&h=600&fit=crop',
      featured: true,
      tags: ['Vintage Tees', 'Pins', 'Stickers']
    }
  ];

  const categories = ['All Projects', 'Music Festivals', 'Corporate Events', 'Brand Merchandise', 'Custom Apparel'];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-accent/10 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Explore our recent projects and see the quality craftsmanship we deliver to our clients
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden group hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <div className="mb-3">
                      <span className="inline-block border border-primary text-primary px-3 py-1 rounded-full text-xs font-medium">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary text-primary-foreground py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Next Project?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's bring your vision to life with quality merchandise
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">Start Your Project</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Portfolio;
