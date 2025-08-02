import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ProjectFilter } from '@/components/ProjectFilter';
import { ScrollReveal } from '@/components/ScrollReveal';
import projectsData from '@/data/projects.json';

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
  // JSON dosyasından proje verilerini al
  const allProjects: Project[] = projectsData.projects;
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

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

        {/* Project Filter */}
        <ProjectFilter 
          projects={allProjects} 
          onFilteredProjectsChange={setFilteredProjects}
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.id} direction="up" delay={index * 0.1}>
              <ProjectCard project={project} />
            </ScrollReveal>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Bu kriterlere uygun proje bulunamadı.</p>
          </div>
        )}
        
        {/* GitHub Portfolio Link */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-2 text-muted-foreground mb-4">
            <Github className="h-5 w-5" />
            <span>Tüm projelerimi GitHub'da inceleyebilirsiniz</span>
          </div>
          <div>
            <Button asChild size="lg">
              <a
                href="https://github.com/leongrphc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4 mr-2" />
                GitHub Portfolyom
              </a>
            </Button>
          </div>
        </div>
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
            <Badge key={tech} variant="secondary" className="text-xs hover:bg-primary/10 hover:scale-105 transition-all duration-200 cursor-pointer">
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