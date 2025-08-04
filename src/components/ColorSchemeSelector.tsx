import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/contexts/ThemeContext';

const colorSchemes = [
  {
    id: 'default' as const,
    name: 'Varsayılan',
    emoji: '🟣',
    description: 'Mor tema',
    colors: {
      primary: '#8B5CF6',
      secondary: '#A78BFA'
    }
  },
  {
    id: 'orange' as const,
    name: 'Turuncu-Siyah',
    emoji: '🟠',
    description: 'Ateşli turuncu',
    colors: {
      primary: '#F97316',
      secondary: '#FB923C'
    }
  },
  {
    id: 'blue' as const,
    name: 'Mavi',
    emoji: '🔵',
    description: 'Okyanus mavisi',
    colors: {
      primary: '#0EA5E9',
      secondary: '#38BDF8'
    }
  }
];

export const ColorSchemeSelector = () => {
  const { colorScheme, setColorScheme } = useTheme();
  const currentScheme = colorSchemes.find(scheme => scheme.id === colorScheme) || colorSchemes[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-9 w-9 relative group"
          title="Renk temasını değiştir"
        >
          <Palette className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="absolute -top-1 -right-1 text-xs">
            {currentScheme.emoji}
          </span>
          <span className="sr-only">Renk temasını değiştir</span>
        </Button>
      </DropdownMenuTrigger>
      
      <DropdownMenuContent align="end" className="w-48">
        {colorSchemes.map((scheme) => (
          <DropdownMenuItem
            key={scheme.id}
            onClick={() => setColorScheme(scheme.id)}
            className={`cursor-pointer group flex items-center gap-3 p-3 ${
              colorScheme === scheme.id ? 'bg-accent' : ''
            }`}
          >
            <div className="flex items-center gap-3 flex-1">
              <span className="text-lg">{scheme.emoji}</span>
              <div className="flex-1">
                <div className="font-medium">{scheme.name}</div>
                <div className="text-xs text-muted-foreground">{scheme.description}</div>
              </div>
            </div>
            
            {/* Renk önizlemesi */}
            <div className="flex gap-1">
              <div 
                className="w-3 h-3 rounded-full border border-border"
                style={{ backgroundColor: scheme.colors.primary }}
              />
              <div 
                className="w-3 h-3 rounded-full border border-border"
                style={{ backgroundColor: scheme.colors.secondary }}
              />
            </div>
            
            {/* Seçili işareti */}
            {colorScheme === scheme.id && (
              <div className="w-2 h-2 rounded-full bg-primary ml-2" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};