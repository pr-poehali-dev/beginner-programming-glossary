
import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictionary";
import Lessons from "./pages/Lessons";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const welcomed = localStorage.getItem('welcomed');
    const welcomeTimestamp = localStorage.getItem('welcomeTimestamp');
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    
    if (!welcomed || !welcomeTimestamp || (now - parseInt(welcomeTimestamp)) > oneDay) {
      setShowWelcome(true);
      localStorage.removeItem('welcomed');
      localStorage.removeItem('welcomeTimestamp');
    }
    setIsChecking(false);
  }, []);

  if (isChecking) {
    return null;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {showWelcome ? (
              <>
                <Route path="/" element={<Welcome />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home />} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/lessons" element={<Lessons />} />
                <Route path="*" element={<NotFound />} />
              </>
            )}
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;