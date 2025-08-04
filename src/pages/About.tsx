import { Code, BookOpen, Award, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollReveal } from '@/components/ScrollReveal';

export const About = () => {
  const skills = [
    { 
      category: 'Web Geliştirme', 
      items: [
        { name: 'HTML', level: 90 },
        { name: 'CSS', level: 85 },
        { name: 'JavaScript', level: 75 },
        { name: 'PHP', level: 70 },
        { name: 'Git/GitHub', level: 80 }
      ]
    },
    { 
      category: 'Grafik Tasarım', 
      items: [
        { name: 'Adobe Illustrator', level: 95 },
        { name: 'Adobe Photoshop', level: 90 },
        { name: 'Adobe XD', level: 85 },
        { name: 'Adobe InDesign', level: 80 },
        { name: 'UI/UX Design', level: 85 }
      ]
    },
    { 
      category: 'Programlama (Öğrenme Süreci)', 
      items: [
        { name: 'C++', level: 80 },
        { name: 'Python', level: 80 },
        { name: 'Algoritma & Veri Yapıları', level: 75 },
        { name: 'Problem Çözme', level: 80 },
        { name: 'Öğrenme Motivasyonu', level: 95 }
      ]
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Hakkımda</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Uzun yıllardır tasarım yapan, şimdi yazılım dünyasında yeni ufuklar keşfeden 
            hibrit bir yaratıcı. Tasarım deneyimimi programlama ile birleştirerek benzersiz çözümler üretiyorum.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Bio & Skills */}
          <div className="space-y-8">
            {/* Bio Section */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="space-y-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Tutkum</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Web tasarım ve grafik tasarım alanında 6+ yıldır aktif olarak çalışıyorum. 
                Kullanıcı deneyimini ön planda tutan, modern ve görsel açıdan etkileyici 
                tasarımlar yaratmak en büyük tutkum.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                HTML, CSS, JavaScript konularında deneyimli olmakla birlikte, 
                Adobe Creative Suite ürünlerinde uzmanlaşmış durumdayım. 
                Özellikle web arayüz tasarımı, sosyal medya görselleri ve marka kimliği 
                oluşturma konularında derinlemesine bilgiye sahibim.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Farklı sektörlerden müşterilerle çalışmayı, yaratıcı çözümler sunmayı 
                ve projelerimi GitHub üzerinden açık kaynak olarak paylaşmayı seviyorum.
              </p>
              </div>
            </ScrollReveal>

            {/* Skills Section */}
            <ScrollReveal direction="left" delay={0.4}>
              <div>
              <div className="flex items-center space-x-2 mb-6">
                <Code className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Teknik Yetenekler</h2>
              </div>
              <div className="space-y-4">
                {skills.map((skillGroup) => (
                  <Card key={skillGroup.category} className="hover:shadow-md transition-all duration-200">
                    <CardContent className="p-4">
                      <h3 className="font-semibold mb-3">{skillGroup.category}</h3>
                      <div className="space-y-3">
                        {skillGroup.items.map((skill) => (
                          <div key={skill.name} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <span className="text-sm font-medium">{skill.name}</span>
                              <span className="text-xs text-muted-foreground">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                              <div 
                                className="h-full bg-gradient-to-r from-primary to-primary-glow rounded-full transition-all duration-1000 ease-out hover:shadow-lg"
                                style={{ width: `${skill.level}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column - Education & Achievements */}
          <div className="space-y-8">
            <ScrollReveal direction="right" delay={0.3}>
              <div>
              <div className="flex items-center space-x-2 mb-4">
                <BookOpen className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Eğitim</h2>
              </div>
              <Card className="hover:shadow-md hover:scale-105 transition-all duration-200">
                <CardContent className="p-6">
                  <h3 className="font-semibold mb-1">Bilgisayar Programcılığı</h3>
                  <p className="text-muted-foreground text-sm mb-2">Kocaeli Üniversitesi</p>
                  <p className="text-muted-foreground text-sm">Devam Ediyor • GPA: 3.37/4.0</p>
                </CardContent>
              </Card>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.5}>
              <div>
              <div className="flex items-center space-x-2 mb-4">
                <Award className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold">Sertifikalar</h2>
              </div>
              <div className="space-y-3">
                <Card className="hover:shadow-md hover:scale-105 transition-all duration-200">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm">Flutter ile Mobil Uygulama Geliştirme</h3>
                    <p className="text-muted-foreground text-xs">BTK Akademi</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md hover:scale-105 transition-all duration-200">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm">Algoritma Programlama ve Veri Yapıları</h3>
                    <p className="text-muted-foreground text-xs">BTK Akademi</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md hover:scale-105 transition-all duration-200">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm">İleri Düzey Python Programlama</h3>
                    <p className="text-muted-foreground text-xs">BTK Akademi</p>
                  </CardContent>
                </Card>
                <Card className="hover:shadow-md hover:scale-105 transition-all duration-200">
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-sm">HTML5 ile Web Geliştirme</h3>
                    <p className="text-muted-foreground text-xs">BTK Akademi</p>
                  </CardContent>
                </Card>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
};