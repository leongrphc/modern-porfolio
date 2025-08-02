import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Command } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CommandItem {
  id: string;
  title: string;
  description: string;
  action: () => void;
  category: string;
}

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const commands: CommandItem[] = [
    {
      id: 'home',
      title: 'Anasayfa',
      description: 'Ana sayfaya git',
      action: () => navigate('/'),
      category: 'Sayfa'
    },
    {
      id: 'about',
      title: 'Hakkımda',
      description: 'Hakkımda sayfasına git',
      action: () => navigate('/about'),
      category: 'Sayfa'
    },
    {
      id: 'experience',
      title: 'Deneyimler',
      description: 'Deneyimler sayfasına git',
      action: () => navigate('/experience'),
      category: 'Sayfa'
    },
    {
      id: 'projects',
      title: 'Projeler',
      description: 'Projeler sayfasına git',
      action: () => navigate('/projects'),
      category: 'Sayfa'
    },
    {
      id: 'blog',
      title: 'Blog',
      description: 'Blog sayfasına git',
      action: () => navigate('/blog'),
      category: 'Sayfa'
    },
    {
      id: 'contact',
      title: 'İletişim',
      description: 'İletişim sayfasına git',
      action: () => navigate('/contact'),
      category: 'Sayfa'
    },
    {
      id: 'github',
      title: 'GitHub Profili',
      description: 'GitHub profilimi aç',
      action: () => window.open('https://github.com/leongrphc', '_blank'),
      category: 'Sosyal'
    },
    {
      id: 'linkedin',
      title: 'LinkedIn Profili',
      description: 'LinkedIn profilimi aç',
      action: () => window.open('https://www.linkedin.com/in/mozk', '_blank'),
      category: 'Sosyal'
    },
    {
      id: 'email',
      title: 'E-posta Gönder',
      description: 'Bana e-posta gönder',
      action: () => window.open('mailto:leongrphc@gmail.com'),
      category: 'İletişim'
    },
    {
      id: 'cv',
      title: 'CV İndir',
      description: 'CV dosyamı indir',
      action: () => {
        const link = document.createElement('a');
        link.href = '/cv-mustafa-ozkan.pdf';
        link.download = 'Mustafa-Ozkan-CV.pdf';
        link.click();
      },
      category: 'Dosya'
    }
  ];

  const filteredCommands = commands.filter(command =>
    command.title.toLowerCase().includes(search.toLowerCase()) ||
    command.description.toLowerCase().includes(search.toLowerCase()) ||
    command.category.toLowerCase().includes(search.toLowerCase())
  );

  const groupedCommands = filteredCommands.reduce((acc, command) => {
    const category = command.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(command);
    return acc;
  }, {} as Record<string, CommandItem[]>);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleSelect = (command: CommandItem) => {
    command.action();
    setIsOpen(false);
    setSearch('');
  };

  return (
    <>
      {/* Floating Command Palette Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary text-primary-foreground rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 z-50 flex items-center justify-center group"
        title="Command Palette (⌘K)"
      >
        <Command className="h-6 w-6 group-hover:rotate-12 transition-transform duration-200" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[600px] p-0">
          <DialogHeader className="px-6 py-4 border-b">
            <DialogTitle className="flex items-center gap-2">
              <Command className="h-5 w-5" />
              Komut Paleti
            </DialogTitle>
          </DialogHeader>
          
          <div className="px-6 py-4 border-b">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Komut ara... (⌘K)"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10"
                autoFocus
              />
            </div>
          </div>

          <ScrollArea className="max-h-[400px]">
            <div className="px-6 py-4">
              {Object.entries(groupedCommands).length === 0 ? (
                <p className="text-muted-foreground text-center py-8">
                  Hiçbir sonuç bulunamadı.
                </p>
              ) : (
                Object.entries(groupedCommands).map(([category, commands]) => (
                  <div key={category} className="mb-6 last:mb-0">
                    <h3 className="text-sm font-medium text-muted-foreground mb-2">
                      {category}
                    </h3>
                    <div className="space-y-1">
                      {commands.map((command) => (
                        <button
                          key={command.id}
                          onClick={() => handleSelect(command)}
                          className="w-full text-left px-3 py-2 rounded-md hover:bg-muted transition-colors focus:bg-muted focus:outline-none"
                        >
                          <div className="font-medium">{command.title}</div>
                          <div className="text-sm text-muted-foreground">
                            {command.description}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          <div className="px-6 py-3 border-t bg-muted/50">
            <p className="text-xs text-muted-foreground">
              Klavye kısayolu: <kbd className="px-2 py-1 bg-background rounded text-xs">⌘K</kbd> veya <kbd className="px-2 py-1 bg-background rounded text-xs">Ctrl+K</kbd>
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};