import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, Search } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollReveal } from '@/components/ScrollReveal';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  slug: string;
  author: string;
  date: string;
  readTime: string;
  tags: string[];
  image?: string;
  category: string;
}

export const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const mockPosts: BlogPost[] = [
          {
            id: '1',
            title: 'React ve TypeScript ile Modern Web Geliştirme',
            excerpt: 'React ve TypeScript kombinasyonunu kullanarak güçlü ve tip güvenli web uygulamaları geliştirme rehberi.',
            content: '',
            slug: 'react-typescript-modern-web-development',
            author: 'Mustafa Özkan',
            date: '2024-01-15',
            readTime: '8 dk okuma',
            tags: ['React', 'TypeScript', 'Web Development'],
            image: '/placeholder.svg',
            category: 'Frontend'
          },
          {
            id: '2',
            title: 'Tailwind CSS ile Hızlı UI Geliştirme',
            excerpt: 'Tailwind CSS kullanarak hızlı ve responsive kullanıcı arayüzleri oluşturma teknikleri ve en iyi uygulamalar.',
            content: '',
            slug: 'tailwind-css-hizli-ui-gelistirme',
            author: 'Mustafa Özkan',
            date: '2024-01-10',
            readTime: '6 dk okuma',
            tags: ['CSS', 'Tailwind', 'UI/UX'],
            image: '/placeholder.svg',
            category: 'Design'
          },
          {
            id: '3',
            title: 'Figma ile Profesyonel Web Tasarımı',
            excerpt: 'Figma kullanarak profesyonel web tasarımları oluşturma, prototipleme ve geliştirici iş birliği.',
            content: '',
            slug: 'figma-profesyonel-web-tasarimi',
            author: 'Mustafa Özkan',
            date: '2024-01-05',
            readTime: '10 dk okuma',
            tags: ['Figma', 'Design', 'UI/UX', 'Prototyping'],
            image: '/placeholder.svg',
            category: 'Design'
          },
          {
            id: '4',
            title: 'JavaScript Performance Optimizasyonu',
            excerpt: 'Web uygulamalarında JavaScript performansını artırma teknikleri ve modern optimizasyon yöntemleri.',
            content: '',
            slug: 'javascript-performance-optimizasyonu',
            author: 'Mustafa Özkan',
            date: '2023-12-28',
            readTime: '12 dk okuma',
            tags: ['JavaScript', 'Performance', 'Optimization'],
            image: '/placeholder.svg',
            category: 'Frontend'
          }
        ];
        
        setPosts(mockPosts);
        setLoading(false);
      } catch (error) {
        console.error('Blog posts yüklenirken hata:', error);
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  const categories = ['all', ...Array.from(new Set(posts.map(post => post.category)))];
  
  const filteredPosts = posts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/3"></div>
            <div className="h-4 bg-muted rounded w-2/3"></div>
            <div className="grid gap-6">
              {[1, 2, 3].map((i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="h-6 bg-muted rounded w-3/4"></div>
                    <div className="h-4 bg-muted rounded w-1/2"></div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-4 bg-muted rounded w-full mb-2"></div>
                    <div className="h-4 bg-muted rounded w-5/6"></div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              Blog
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Web geliştirme, tasarım ve teknoloji hakkında düşüncelerim ve deneyimlerim.
            </p>
          </div>
        </ScrollReveal>

        {/* Search and Filters */}
        <ScrollReveal>
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Blog yazılarında ara..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="capitalize"
                  >
                    {category === 'all' ? 'Tümü' : category}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Posts */}
        <div className="space-y-6">
          {filteredPosts.length === 0 ? (
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-muted-foreground">
                  {searchTerm || selectedCategory !== 'all' 
                    ? 'Arama kriterlerinize uygun blog yazısı bulunamadı.' 
                    : 'Henüz blog yazısı bulunmuyor.'}
                </p>
              </CardContent>
            </Card>
          ) : (
            filteredPosts.map((post, index) => (
              <ScrollReveal key={post.id} delay={index * 0.1}>
                <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <Link to={`/blog/${post.slug}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline">{post.category}</Badge>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                {new Date(post.date).toLocaleDateString('tr-TR', {
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric'
                                })}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                {post.readTime}
                              </div>
                            </div>
                          </div>
                          
                          <h2 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {post.title}
                          </h2>
                          <p className="text-muted-foreground mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                              <Badge 
                                key={tag} 
                                variant="secondary"
                                className="hover:bg-primary/10 transition-colors"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors ml-4 flex-shrink-0" />
                      </div>
                    </CardHeader>
                  </Link>
                </Card>
              </ScrollReveal>
            ))
          )}
        </div>

        {/* CTA */}
        <ScrollReveal>
          <Card className="mt-12 text-center">
            <CardContent className="py-12">
              <h3 className="text-xl font-semibold mb-4">
                Yeni yazılardan haberdar olmak ister misiniz?
              </h3>
              <p className="text-muted-foreground mb-6">
                Blog yazılarımı kaçırmamak için sosyal medya hesaplarımı takip edebilirsiniz.
              </p>
              <Link to="/contact">
                <Button>
                  İletişime Geç
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
};