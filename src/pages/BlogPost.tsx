import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
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
}

export const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Simulate loading blog post content
        const mockPosts: BlogPost[] = [
          {
            id: '1',
            title: 'React ve TypeScript ile Modern Web Geliştirme',
            excerpt: 'React ve TypeScript kombinasyonunu kullanarak güçlü ve tip güvenli web uygulamaları geliştirme rehberi.',
            content: `
# React ve TypeScript ile Modern Web Geliştirme

React ve TypeScript kombinasyonu, modern web geliştirmede en güçlü araçlardan biridir. Bu yazıda, bu iki teknolojinin birlikte nasıl kullanılacağını ve projelerinizde nasıl en iyi şekilde yararlanabileceğinizi göreceğiz.

## TypeScript Neden Önemli?

TypeScript, JavaScript'e statik tip sistemi ekler. Bu sayede:
- Kodunuz daha güvenli hale gelir
- IDE desteği artar
- Refactoring işlemleri kolaylaşır
- Takım çalışması daha verimli olur

## React ile TypeScript Kullanımı

React projelerinde TypeScript kullanmanın temel avantajları:

1. **Prop Type Safety**: Component'ların aldığı props'ların tiplerini kesin olarak belirleyebilirsiniz
2. **State Management**: useState ve diğer hook'ların tiplerini tanımlayabilirsiniz
3. **Event Handling**: Event handler'ların tiplerini belirleyebilirsiniz

\`\`\`typescript
interface Props {
  title: string;
  count: number;
  onIncrement: () => void;
}

const Counter: React.FC<Props> = ({ title, count, onIncrement }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>Count: {count}</p>
      <button onClick={onIncrement}>Increment</button>
    </div>
  );
};
\`\`\`

Bu örnek, TypeScript ile React component'ının nasıl yazılacağını gösteriyor.

## En İyi Uygulamalar

1. **Strict Mode Kullanın**: TypeScript config'inizde strict mode'u aktif edin
2. **Interface'leri Ayrı Dosyalarda Tutun**: Büyük projelerde tip tanımlarını ayrı dosyalarda toplayın
3. **Generic Tipler Kullanın**: Yeniden kullanılabilir component'lar için generic tipler kullanın

## Sonuç

React ve TypeScript kombinasyonu, modern web uygulamaları geliştirmek için mükemmel bir seçimdir. Öğrenme eğrisi biraz dik olsa da, uzun vadede size çok zaman kazandıracaktır.
            `,
            slug: 'react-typescript-modern-web-development',
            author: 'Mustafa Özkan',
            date: '2024-01-15',
            readTime: '8 dk okuma',
            tags: ['React', 'TypeScript', 'Web Development'],
            image: '/placeholder.svg'
          },
          {
            id: '2',
            title: 'Tailwind CSS ile Hızlı UI Geliştirme',
            excerpt: 'Tailwind CSS kullanarak hızlı ve responsive kullanıcı arayüzleri oluşturma teknikleri ve en iyi uygulamalar.',
            content: `
# Tailwind CSS ile Hızlı UI Geliştirme

Tailwind CSS, utility-first yaklaşımı ile web geliştirme dünyasında devrim yaratan bir CSS framework'üdür. Bu yazıda, Tailwind CSS'in avantajlarını ve nasıl etkili şekilde kullanılacağını göreceğiz.

## Neden Tailwind CSS?

Tailwind CSS'in diğer framework'lerden farkı:
- Utility-first yaklaşım
- Yüksek özelleştirme imkanı
- Küçük dosya boyutu (purge ile)
- Konsistent design system

## Temel Kullanım

\`\`\`html
<div class="bg-blue-500 text-white p-4 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
  Tailwind ile styled buton
</div>
\`\`\`

Bu örnek, Tailwind'in utility class'larını nasıl kullanacağınızı gösteriyor.

## Responsive Design

Tailwind CSS, responsive design için excellent araçlar sunar:
- \`sm:\`, \`md:\`, \`lg:\`, \`xl:\` prefix'leri
- Mobile-first yaklaşım
- Flexbox ve Grid desteği

## Sonuç

Tailwind CSS, hızlı ve tutarlı UI geliştirme için mükemmel bir araçtır.
            `,
            slug: 'tailwind-css-hizli-ui-gelistirme',
            author: 'Mustafa Özkan',
            date: '2024-01-10',
            readTime: '6 dk okuma',
            tags: ['CSS', 'Tailwind', 'UI/UX'],
            image: '/placeholder.svg'
          },

        
{
            id: '3',
            title: 'Figma ile Profesyonel Web Tasarımı',
            excerpt: 'Figma kullanarak profesyonel web tasarımları oluşturma, prototipleme ve geliştirici iş birliği.',
            content: `
test
            `,
            slug: 'figma-profesyonel-web-tasarimi',
            author: 'Mustafa Özkan',
            date: '2024-01-10',
            readTime: '6 dk okuma',
            tags: ['CSS', 'Tailwind', 'UI/UX'],
            image: '/placeholder.svg'
          }


        ];
        






        const foundPost = mockPosts.find(p => p.slug === slug);
        setPost(foundPost || null);
        setLoading(false);
      } catch (error) {
        console.error('Blog post yüklenirken hata:', error);
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        console.log('Paylaşım iptal edildi');
      }
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-8">
            <div className="h-8 bg-muted rounded w-1/4"></div>
            <div className="h-12 bg-muted rounded w-3/4"></div>
            <div className="h-4 bg-muted rounded w-1/2"></div>
            <div className="space-y-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="h-4 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Blog Yazısı Bulunamadı</h1>
          <p className="text-muted-foreground mb-8">
            Aradığınız blog yazısı mevcut değil veya kaldırılmış olabilir.
          </p>
          <Link to="/blog">
            <Button>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Blog'a Geri Dön
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <ScrollReveal>
          <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Blog'a Geri Dön
          </Link>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal>
          <div className="mb-8">
            <h1 className="text-4xl font-bold tracking-tight mb-4">
              {post.title}
            </h1>
            
            {/* Meta Info */}
            <div className="flex items-center gap-6 text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('tr-TR', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleShare}
                className="flex items-center gap-2"
              >
                <Share2 className="h-4 w-4" />
                Paylaş
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Content */}
        <ScrollReveal>
          <Card>
            <CardContent className="prose prose-lg max-w-none p-8">
              <div 
                className="whitespace-pre-wrap"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
              />
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Author Info */}
        <ScrollReveal>
          <Card className="mt-8">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-primary-foreground">MÖ</span>
                </div>
                <div>
                  <h3 className="font-semibold">{post.author}</h3>
                  <p className="text-muted-foreground">
                    Web Designer & Graphic Designer
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <Card className="mt-8 bg-gradient-to-r from-primary/5 to-primary-glow/5 border-primary/20">
            <CardContent className="text-center py-8">
              <h3 className="text-xl font-semibold mb-4">
                Bu yazıyı beğendiniz mi?
              </h3>
              <p className="text-muted-foreground mb-6">
                Daha fazla içerik için benimle iletişime geçin veya sosyal medya hesaplarımı takip edin.
              </p>
              <div className="flex justify-center gap-4">
                <Link to="/contact">
                  <Button>
                    İletişime Geç
                  </Button>
                </Link>
                <Link to="/blog">
                  <Button variant="outline">
                    Diğer Yazılar
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  );
};