import { Code, BookOpen, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export const About = () => {
  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'NestJS', 'PostgreSQL', 'MongoDB'] },
    { category: 'Cloud & Tools', items: ['AWS', 'Docker', 'Git', 'Supabase', 'Vercel'] },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Hakkımda</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teknoloji tutkunu bir yazılım geliştiricisi olarak, sürekli öğrenmeye 
            ve kendimi geliştirmeye odaklanıyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Tutkum</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Yazılım geliştirme dünyasında 5+ yıldır aktif olarak çalışıyorum. 
              Kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir 
              web uygulamaları geliştirmek en büyük tutkum.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Modern JavaScript ekosisteminde uzmanlaşmış olmakla birlikte, 
              full-stack geliştirme süreçlerinin her aşamasında deneyim sahibiyim. 
              Özellikle React, Node.js ve cloud teknolojileri konularında derinlemesine bilgiye sahibim.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Açık kaynak projelere katkıda bulunmayı, teknik blog yazıları yazmayı 
              ve teknoloji toplulukları ile bilgi paylaşımında bulunmayı seviyorum.
            </p>
          </div>

          {/* Education & Achievements */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Eğitim</h2>
              </div>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-1">Bilgisayar Mühendisliği</h3>
                  <p className="text-muted-foreground text-sm mb-2">İstanbul Teknik Üniversitesi</p>
                  <p className="text-muted-foreground text-sm">2015 - 2019</p>
                </CardContent>
              </Card>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Sertifikalar</h2>
              </div>
              <div className="space-y-3">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm">AWS Certified Developer</h3>
                    <p className="text-muted-foreground text-xs">Amazon Web Services</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm">React Advanced Patterns</h3>
                    <p className="text-muted-foreground text-xs">Epic React by Kent C. Dodds</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20">
          <div className="flex items-center space-x-2 mb-8 justify-center">
            <Code className="h-5 w-5 text-primary" />
            <h2 className="text-2xl font-semibold">Teknik Yetenekler</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <Card key={skillGroup.category}>
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-4 text-center">{skillGroup.category}</h3>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div
                        key={skill}
                        className="text-sm text-center py-1 px-3 bg-primary/10 text-primary rounded-full"
                      >
                        {skill}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};