import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Experience = () => {
  const experiences = [
    {
      title: 'Web Designer',
      company: 'Akmanlar Business Center',
      location: 'İstanbul, Türkiye',
      period: 'Mart 2023 - Eylül 2024',
      type: 'Tam Zamanlı',
      description: 'İş merkezinde bulunan çeşitli firmalar için özgün ve kullanıcı odaklı web sitesi tasarımları oluşturdum.',
      responsibilities: [
        'Şirketlerin kurumsal kimliklerine uygun modern ve responsive tasarımlar geliştirme',
        'Kullanıcı deneyimini ön planda tutarak tasarımlar oluşturma',
        'SEO ve performans optimizasyonlarına özel dikkat gösterme',
        'Müşteri ihtiyaçları doğrultusunda özelleştirilmiş çözümler sunma',
        'Proje süreçlerini başından sonuna kadar yönetme'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'Adobe XD', 'Photoshop', 'Responsive Design']
    },
    {
      title: 'Freelance Graphic Designer',
      company: 'Fiverr.com',
      location: 'Remote, Online',
      period: 'Ocak 2021 - Ekim 2022',
      type: 'Freelance',
      description: 'Fiverr üzerinden farklı ülkelerden müşterilerle çalışarak logo, poster ve sosyal medya görselleri tasarladım.',
      responsibilities: [
        'Müşteri istekleri doğrultusunda özgün tasarımlar hazırlama',
        'Logo, poster ve sosyal medya görselleri tasarlama',
        'Projeleri eksiksiz ve zamanında teslim etme',
        'Müşteri memnuniyetini ön planda tutarak revizyon taleplerini hızla karşılama',
        'Çeşitli sektörlerden markalara yaratıcı çözümler sunma'
      ],
      technologies: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign', 'Canva', 'Brand Identity']
    },
    {
      title: 'Social Media Designer',
      company: 'İbat Ayakkabı Tekstil İnşaat Sanayi ve Ticaret Ltd. Şti.',
      location: 'İstanbul, Türkiye',
      period: 'Ocak 2018 - Ağustos 2021',
      type: 'Tam Zamanlı',
      description: 'Ayakkabı satışını desteklemek için sosyal medya görselleri, story tasarımları ve kampanya içerikleri oluşturdum.',
      responsibilities: [
        'Sosyal medya görselleri ve story tasarımları oluşturma',
        'Şirket web sitesinin kullanıcı arayüz tasarımı ve içerik güncellemeleri',
        'Logo, poster ve dijital reklam tasarımları gibi yaratıcı projelerde aktif rol alma',
        'Tasarımlarda güncel trendleri takip ederek markanın değerini yansıtan çalışmalar oluşturma',
        'Kampanya görsellerinin stratejik planlanması ve uygulanması'
      ],
      technologies: ['Adobe Photoshop', 'Adobe Illustrator', 'Social Media Design', 'Web UI Design', 'Brand Design']
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Deneyimlerim</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Farklı şirketlerde edindiğim deneyimler ve üstlendiğim sorumluluklar
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-px top-0 bottom-0 w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 md:-ml-2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${index % 2 === 0 ? 'md:pr-1/2 md:pr-8' : 'md:pl-1/2 md:pl-8'}`}>
                  <Card className="hover:shadow-lg hover:scale-105 transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="mb-4">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-xl font-semibold">{exp.title}</h3>
                          <Badge variant="secondary">{exp.type}</Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-muted-foreground mb-2">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span className="font-medium">{exp.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4">{exp.description}</p>

                      {/* Responsibilities */}
                      <div className="mb-4">
                        <h4 className="font-medium mb-2">Temel Sorumluluklar:</h4>
                        <ul className="space-y-1">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="text-sm text-muted-foreground flex items-start">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-medium mb-2">Kullanılan Teknolojiler:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs hover:bg-primary/10 hover:border-primary transition-all duration-200 cursor-pointer">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};