
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "@/contexts/CartContext";
import Header from "@/components/Header";
import Index from "./pages/Index";
import Racoes from "./pages/Racoes";
import Petiscos from "./pages/Petiscos";
import Brinquedos from "./pages/Brinquedos";
import Medicamentos from "./pages/Medicamentos";
import BanhoTosa from "./pages/BanhoTosa";
import Carrinho from "./pages/Carrinho";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen bg-white">
            <Header />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/racoes" element={<Racoes />} />
              <Route path="/petiscos" element={<Petiscos />} />
              <Route path="/brinquedos" element={<Brinquedos />} />
              <Route path="/medicamentos" element={<Medicamentos />} />
              <Route path="/banho-tosa" element={<BanhoTosa />} />
              <Route path="/carrinho" element={<Carrinho />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
