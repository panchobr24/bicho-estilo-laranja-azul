
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useEffect } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Header from "@/components/Header";
import Index from "./pages/Index";
import BanhoTosa from "./pages/BanhoTosa";
import ContatetNos from "./pages/ContatetNos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Header />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/banho-tosa" element={<BanhoTosa />} />
            <Route path="/contate-nos" element={<ContatetNos />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
