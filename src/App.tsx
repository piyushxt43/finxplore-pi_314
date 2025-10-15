import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Learn from "./pages/Learn";
import ModuleDetail from "./pages/ModuleDetail";
import Simulations from "./pages/Simulations";
import SimulationDetail from "./pages/SimulationDetail";
import Leaderboard from "./pages/Leaderboard";
import Regulations from "./pages/Regulations";
import Profile from "./pages/Profile";
import Challenges from "./pages/Challenges";
import Resources from "./pages/Resources";
import Community from "./pages/Community";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";
import { useEffect } from "react";
import { auth } from "./lib/firebase";
import { useUserProfile } from "./hooks/use-user-profile";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const navigate = useNavigate();
  const { profile, user, loading } = useUserProfile();

  useEffect(() => {
    if (loading) return;
    if (!user) return; // not signed in, don't force onboarding
    const path = window.location.pathname;
    if (!profile && path !== "/onboarding") {
      navigate("/onboarding", { replace: true });
    }
  }, [navigate, loading, user, profile]);

  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/learn" element={<Learn />} />
      <Route path="/learn/:moduleId" element={<ModuleDetail />} />
      <Route path="/simulations" element={<Simulations />} />
      <Route path="/simulations/:simulationId" element={<SimulationDetail />} />
      <Route path="/leaderboard" element={<Leaderboard />} />
      <Route path="/regulations" element={<Regulations />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/challenges" element={<Challenges />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/community" element={<Community />} />
      <Route path="/onboarding" element={<Onboarding />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-background font-body">
          <Navigation />
          <AppRoutes />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
