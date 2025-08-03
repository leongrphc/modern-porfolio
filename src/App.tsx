import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";
import { MouseFollower } from "@/components/MouseFollower";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";
import { Contact } from "./pages/Contact";
import { YouTubeAnalyzer } from "./pages/YouTubeAnalyzer";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/youtube-analyzer" element={<YouTubeAnalyzer />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <CommandPalette />
      <MouseFollower />
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
