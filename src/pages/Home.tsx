import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export const Home = () => {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6">
                Merhaba, Ben
                <span className="block text-primary bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Full Stack Developer
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Modern web teknolojileri ile yaratıcı ve etkili çözümler geliştiren 
                tutkulu bir yazılım geliştiricisiyim. React, Node.js ve cloud teknolojileri 
                konusunda uzmanım.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/projects">
                <Button size="lg" className="group">
                  Projelerimi İncele
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  İletişime Geç
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:your.email@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Background Gradient */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-full blur-3xl opacity-30"></div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">5+</h3>
              <p className="text-muted-foreground">Yıllık Deneyim</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">50+</h3>
              <p className="text-muted-foreground">Tamamlanan Proje</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-3xl font-bold text-primary">20+</h3>
              <p className="text-muted-foreground">Mutlu Müşteri</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};