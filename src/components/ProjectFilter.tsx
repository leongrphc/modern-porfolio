import { useState, useMemo } from 'react';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Search, Filter, X } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image_url: string;
  live_url?: string;
  github_url?: string;
  created_at: string;
}

interface ProjectFilterProps {
  projects: Project[];
  onFilteredProjectsChange: (projects: Project[]) => void;
}

export const ProjectFilter = ({ projects, onFilteredProjectsChange }: ProjectFilterProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTech, setSelectedTech] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Get all unique technologies
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => techs.add(tech));
    });
    return Array.from(techs).sort();
  }, [projects]);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesTech = selectedTech.length === 0 || 
                         selectedTech.some(tech => project.technologies.includes(tech));
      
      return matchesSearch && matchesTech;
    });
  }, [projects, searchTerm, selectedTech]);

  // Update parent component when filtered projects change
  useMemo(() => {
    onFilteredProjectsChange(filteredProjects);
  }, [filteredProjects, onFilteredProjectsChange]);

  const toggleTechnology = (tech: string) => {
    setSelectedTech(prev => 
      prev.includes(tech) 
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedTech([]);
  };

  const hasActiveFilters = searchTerm.length > 0 || selectedTech.length > 0;

  return (
    <div className="space-y-4 mb-8">
      {/* Search and Filter Toggle */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Projelerde ara..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center gap-2"
          >
            <Filter className="h-4 w-4" />
            Filtrele
            {selectedTech.length > 0 && (
              <Badge variant="secondary" className="ml-1">
                {selectedTech.length}
              </Badge>
            )}
          </Button>
          
          {hasActiveFilters && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="flex items-center gap-2"
            >
              <X className="h-4 w-4" />
              Temizle
            </Button>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="text-sm text-muted-foreground">
        {filteredProjects.length} proje bulundu
        {hasActiveFilters && ` (${projects.length} toplam)`}
      </div>

      {/* Technology Filters */}
      {isFilterOpen && (
        <div className="p-4 border rounded-lg bg-muted/30 space-y-3">
          <h4 className="font-medium text-sm">Teknolojiye göre filtrele:</h4>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map(tech => (
              <Badge
                key={tech}
                variant={selectedTech.includes(tech) ? 'default' : 'outline'}
                className="cursor-pointer hover:scale-105 transition-transform"
                onClick={() => toggleTechnology(tech)}
              >
                {tech}
                {selectedTech.includes(tech) && (
                  <X className="ml-1 h-3 w-3" />
                )}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};