import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Mustafa Özkan</h3>
            <p className="text-muted-foreground text-sm">
              Web tasarım ve grafik tasarım alanında deneyimli, kullanıcı odaklı çözümler geliştiren tasarımcı.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-medium">Hızlı Linkler</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Anasayfa
              </Link>
              <Link to="/about" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Hakkımda
              </Link>
              <Link to="/projects" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Projeler
              </Link>
              <Link to="/blog" className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-medium">Hizmetler</h4>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Web Tasarım</p>
              <p className="text-sm text-muted-foreground">Grafik Tasarım</p>
              <p className="text-sm text-muted-foreground">UI/UX Design</p>
              <p className="text-sm text-muted-foreground">Frontend Geliştirme</p>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-medium">İletişim</h4>
            <div className="space-y-2">
              <a href="mailto:leongrphc@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                leongrphc@gmail.com
              </a>
              <a href="tel:+905376351906" className="text-sm text-muted-foreground hover:text-foreground transition-colors block">
                +90 537 635 19 06
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex space-x-4 pt-2">
              <a
                href="https://github.com/leongrphc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mozk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:leongrphc@gmail.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 Mustafa Özkan. Tüm hakları saklıdır.
            </p>
          
          </div>
        </div>
      </div>
    </footer>
  );
};