import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Layout } from "@/components/Layout";
import { ROUTE_PATHS } from "@/lib/index";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import Industries from "@/pages/Industries";
import About from "@/pages/About";
import Contact from "@/pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <MotionConfig reducedMotion="user">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path={ROUTE_PATHS.HOME} element={<Home />} />
              <Route path={ROUTE_PATHS.PRODUCTS} element={<Products />} />
              <Route path={ROUTE_PATHS.INDUSTRIES} element={<Industries />} />
              <Route path={ROUTE_PATHS.ABOUT} element={<About />} />
              <Route path={ROUTE_PATHS.CONTACT} element={<Contact />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </MotionConfig>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;