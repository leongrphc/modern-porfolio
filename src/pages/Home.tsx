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
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-6 text-center">
                Merhaba, Ben <span className="animate-gradient">Mustafa Özkan</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
                Web tasarım ve grafik tasarım alanında deneyimli, şimdi de C++ ve Python 
                ile yazılım geliştirme öğrenen tutkulu bir yaratıcıyım. Adobe Creative Suite 
                ve web teknolojilerinde uzmanken, algoritma ve programlama dünyasını keşfediyorum.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link to="/projects">
                <Button size="lg" className="group">
                  Projelerimi İncele
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <a 
                  href="/cv-mustafa-ozkan.pdf" 
                  download="Mustafa-Ozkan-CV.pdf"
                  className="flex items-center"
                >
                  <Download className="mr-2 h-4 w-4" />
                  CV İndir
                </a>
              </Button>
              <Link to="/contact">
                <Button variant="secondary" size="lg">
                  İletişime Geç
                </Button>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center space-x-6">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="GitHub (güncelleme bekliyor)"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="LinkedIn (güncelleme bekliyor)"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:admin@mustafaozkan.com.tr"
                className="text-muted-foreground hover:text-foreground transition-colors"
                title="Email"
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
            <div className="space-y-2 hover:scale-105 hover:bg-muted/50 p-4 rounded-lg transition-all duration-300 cursor-pointer">
              <h3 className="text-3xl font-bold text-primary">3+</h3>
              <p className="text-muted-foreground">Yıl Tasarım Deneyimi</p>
            </div>
            <div className="space-y-2 hover:scale-105 hover:bg-muted/50 p-4 rounded-lg transition-all duration-300 cursor-pointer">
              <h3 className="text-3xl font-bold text-primary">C++</h3>
              <p className="text-muted-foreground">Öğreniyorum</p>
            </div>
            <div className="space-y-2 hover:scale-105 hover:bg-muted/50 p-4 rounded-lg transition-all duration-300 cursor-pointer">
              <h3 className="text-3xl font-bold text-primary">Python</h3>
              <p className="text-muted-foreground">Gelişiyorum</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};