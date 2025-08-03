import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Youtube, Play, FileText, Loader2 } from 'lucide-react';

export const YouTubeAnalyzer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState('');

  const handleAnalyze = async () => {
    if (!videoUrl) return;
    
    setIsAnalyzing(true);
    // Simulated analysis - will be implemented later
    setTimeout(() => {
      setAnalysis('Bu özellik yakında eklenecek. YouTube videolarını analiz ederek özet çıkarabileceksiniz.');
      setIsAnalyzing(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Youtube className="h-12 w-12 text-red-500 mr-4" />
            <h1 className="text-4xl font-bold">YouTube Video Analiz Aracı</h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            YouTube videolarını analiz ederek özet çıkaran yapay zeka destekli araç
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Input Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Play className="h-5 w-5" />
                Video Linki
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-4">
                <Input
                  placeholder="YouTube video linkini buraya yapıştırın..."
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  className="flex-1"
                />
                <Button 
                  onClick={handleAnalyze}
                  disabled={!videoUrl || isAnalyzing}
                  className="px-8"
                >
                  {isAnalyzing ? (
                    <>
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                      Analiz Ediliyor...
                    </>
                  ) : (
                    <>
                      <FileText className="h-4 w-4 mr-2" />
                      Analiz Et
                    </>
                  )}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Örnek: https://www.youtube.com/watch?v=VIDEO_ID
              </p>
            </CardContent>
          </Card>

          {/* Results Section */}
          {analysis && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5" />
                  Analiz Sonucu
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  value={analysis}
                  readOnly
                  className="min-h-[200px] resize-none"
                />
              </CardContent>
            </Card>
          )}

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Youtube className="h-12 w-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Video Analizi</h3>
                <p className="text-sm text-muted-foreground">
                  YouTube videolarını otomatik olarak analiz eder
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Özet Çıkarma</h3>
                <p className="text-sm text-muted-foreground">
                  Video içeriğinin ana noktalarını özetler
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Play className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Hızlı İşlem</h3>
                <p className="text-sm text-muted-foreground">
                  Saniyeler içinde analiz sonucu alın
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};