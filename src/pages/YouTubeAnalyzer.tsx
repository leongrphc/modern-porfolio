import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Youtube, Play, FileText, Loader2, Key } from 'lucide-react';

export const YouTubeAnalyzer = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [geminiApiKey, setGeminiApiKey] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysis, setAnalysis] = useState('');

  const handleAnalyze = async () => {
    if (!videoUrl || !geminiApiKey) return;
    
    setIsAnalyzing(true);
    setAnalysis('🚀 Video analizi başlatılıyor...\n\n⏳ Bu işlem 30-60 saniye sürebilir, lütfen bekleyin...\n\n');
    
    try {
      // Uzun süren işlem için timeout artır
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 120000); // 2 dakika timeout
      
      const response = await fetch('https://ghgskzr5.rpcld.net/webhook/c8ca5cf6-62d7-4007-8f3c-3435aaaf9b25', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          video: videoUrl,
          api_key: geminiApiKey
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.text();
      console.log('Workflow sonucu:', result);
      
      // Sonucu göster
      if (result && result.trim() !== '' && !result.includes('Workflow was started')) {
        setAnalysis(`✅ Analiz tamamlandı!\n\n${result}`);
      } else {
        setAnalysis(`⚠️ Workflow başlatıldı ancak henüz sonuç hazır değil.\n\nAlınan yanıt: ${result}\n\nN8N workflow'unuzun sonunda "Respond to Webhook" node'u eklemeyi unutmayın.`);
      }
      
    } catch (error) {
      console.error('Analiz hatası:', error);
      if (error.name === 'AbortError') {
        setAnalysis(`⏰ Timeout: İşlem çok uzun sürdü (2 dakika).\n\nVideo çok uzun olabilir veya API yavaş yanıt veriyor olabilir. Lütfen tekrar deneyin.`);
      } else {
        setAnalysis(`❌ Analiz sırasında bir hata oluştu: ${error.message}\n\nLütfen URL ve API key'inizi kontrol edip tekrar deneyin.`);
      }
    } finally {
      setIsAnalyzing(false);
    }
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
                Video Analizi
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <Input
                    placeholder="YouTube video linkini buraya yapıştırın..."
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    className="flex-1"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1 relative">
                    <Key className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="password"
                      placeholder="Gemini API Key..."
                      value={geminiApiKey}
                      onChange={(e) => setGeminiApiKey(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Button 
                    onClick={handleAnalyze}
                    disabled={!videoUrl || !geminiApiKey || isAnalyzing}
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
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground">
                  Örnek: https://www.youtube.com/watch?v=VIDEO_ID
                </p>
                <p className="text-sm text-muted-foreground">
                  Gemini API key'inizi <a href="https://makersuite.google.com/app/apikey" target="_blank" rel="noopener noreferrer" className="text-primary underline">Google AI Studio</a>'dan alabilirsiniz
                </p>
              </div>
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