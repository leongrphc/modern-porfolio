import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export const Experience = () => {
  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'TechCorp A.Ş.',
      location: 'İstanbul, Türkiye',
      period: 'Ocak 2022 - Devam Ediyor',
      type: 'Tam Zamanlı',
      description: 'E-ticaret platformları ve kurumsal web uygulamaları geliştirme süreçlerinde liderlik rolü üstlendim.',
      responsibilities: [
        'React ve TypeScript kullanarak modern web uygulamaları geliştirme',
        'Node.js ile RESTful API ve GraphQL servisleri tasarlama',
        'AWS üzerinde mikroservis mimarileri kurma ve yönetme',
        'Junior geliştiricilere mentorluk ve code review süreçlerini yönetme',
        'CI/CD pipeline kurulumu ve DevOps süreçlerinin optimizasyonu'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'PostgreSQL', 'Docker']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency XYZ',
      location: 'İstanbul, Türkiye',
      period: 'Haziran 2020 - Aralık 2021',
      type: 'Tam Zamanlı',
      description: 'Çeşitli markaların dijital varlığını güçlendiren web uygulamaları ve kampanya siteleri geliştirdim.',
      responsibilities: [
        'Vue.js ve React ile responsive web uygulamaları geliştirme',
        'UI/UX tasarımlarını pixel-perfect olarak kodlama',
        'Performance optimizasyonu ve SEO iyileştirmeleri',
        'A/B testing ve analitik entegrasyonları',
        'Müşteri sunumları ve teknik dokümantasyon hazırlama'
      ],
      technologies: ['Vue.js', 'React', 'Sass', 'Webpack', 'Firebase', 'Google Analytics']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Hub',
      location: 'Ankara, Türkiye',
      period: 'Eylül 2019 - Mayıs 2020',
      type: 'Tam Zamanlı',
      description: 'Startup ekosisteminde çeşitli projelerde yer alarak web geliştirme tecrübemi artırdım.',
      responsibilities: [
        'HTML, CSS ve JavaScript ile dinamik web siteleri oluşturma',
        'WordPress ve custom CMS entegrasyonları',
        'E-ticaret platformlarına özel modül geliştirme',
        'Mobil uyumlu tasarımlar ve cross-browser uyumluluk',
        'Veritabanı tasarımı ve optimizasyonu'
      ],
      technologies: ['JavaScript', 'PHP', 'MySQL', 'WordPress', 'Bootstrap', 'jQuery']
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
                  <Card className="hover:shadow-lg transition-shadow">
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
                            <Badge key={tech} variant="outline" className="text-xs">
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