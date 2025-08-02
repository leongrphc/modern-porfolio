import { useState, useEffect } from 'react';
import { ExternalLink, Github, Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

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

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
      toast({
        title: 'Hata',
        description: 'Projeler yüklenirken bir hata oluştu.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="flex items-center space-x-2">
          <Loader2 className="h-6 w-6 animate-spin" />
          <span>Projeler yükleniyor...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Projelerim</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Geliştirdiğim projeler ve kullandığım teknolojiler
          </p>
        </div>

        {/* Projects Grid */}
        {projects.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Henüz proje eklenmemiş.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
      {/* Project Image */}
      <div className="aspect-video overflow-hidden bg-muted">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-muted-foreground">
            Görsel Yok
          </div>
        )}
      </div>

      <CardHeader>
        <CardTitle className="text-xl">{project.title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-muted-foreground text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex space-x-2 pt-2">
          {project.live_url && (
            <Button
              size="sm"
              variant="outline"
              asChild
              className="flex-1"
            >
              <a
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
          {project.github_url && (
            <Button
              size="sm"
              variant="outline"
              asChild
              className="flex-1"
            >
              <a
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-1" />
                GitHub
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};