import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing.tsx";
import Index from "./pages/Index.tsx";
import CategoryPage from "./pages/CategoryPage.tsx";
import ComingSoon from "./pages/ComingSoon.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/todos" element={<Index />} />
          <Route path="/cat/:categoryKey" element={<CategoryPage />} />
          <Route path="/mancia" element={<ComingSoon />} />
          <Route path="/biblio-wv" element={<ComingSoon />} />
          <Route path="/biblio-verbete" element={<ComingSoon />} />
          <Route path="/ragbot" element={<ComingSoon />} />
          <Route path="/search-book" element={<ComingSoon />} />
          <Route path="/search-verb" element={<ComingSoon />} />
          <Route path="/search-ccg" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
