import { Link, useLocation } from "react-router-dom";
import { Menu, X, Zap, LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { auth, googleProvider } from "@/lib/firebase";
import {
  getRedirectResult,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  type User,
} from "firebase/auth";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "Simulations", path: "/simulations" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Regulations", path: "/regulations" },
    { name: "Challenges", path: "/challenges" },
    { name: "Resources", path: "/resources" },
    { name: "Community", path: "/community" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  // Handle result if we used redirect sign-in (e.g., when popup is blocked)
  useEffect(() => {
    getRedirectResult(auth).catch((err) => {
      // Swallow redirect errors to avoid noisy logs in UI
      console.warn("Redirect sign-in failed", err);
    });
  }, []);

  const handleSignIn = async () => {
    try {
      console.log("Starting Google sign-in...");
      console.log("Firebase config:", {
        apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? "✅ Set" : "❌ Missing",
        authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ? "✅ Set" : "❌ Missing",
        projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ? "✅ Set" : "❌ Missing"
      });
      
      // Try popup first with timeout
      const signInPromise = signInWithPopup(auth, googleProvider);
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error('Sign-in timeout')), 30000)
      );
      
      const result = await Promise.race([signInPromise, timeoutPromise]);
      console.log("Sign-in successful:", result);
      
    } catch (error: any) {
      console.error("Sign-in error:", error);
      
      // Handle specific error cases
      if (error.message === 'Sign-in timeout') {
        alert("Sign-in is taking too long. Please try again.");
        return;
      }
      
      if (error.code === 'auth/popup-blocked') {
        console.log("Popup blocked, trying redirect...");
        try {
          await signInWithRedirect(auth, googleProvider);
          return;
        } catch (redirectError) {
          console.error("Redirect also failed:", redirectError);
          alert("Please allow popups for this site or try again.");
        }
      } else if (error.code === 'auth/popup-closed-by-user') {
        console.log("User closed popup");
        return;
      } else if (error.code === 'auth/cancelled-popup-request') {
        console.log("Popup request cancelled");
        return;
      } else if (error.code === 'auth/network-request-failed') {
        alert("Network error. Please check your internet connection and try again.");
      } else if (error.code === 'auth/too-many-requests') {
        alert("Too many failed attempts. Please try again later.");
      } else if (error.code === 'auth/operation-not-allowed') {
        alert("Google sign-in is not enabled. Please contact support.");
      } else {
        console.error("Other sign-in error:", error);
        alert(`Sign-in failed: ${error.message || 'Unknown error'}. Please try again.`);
      }
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Sign-out failed", error);
    }
  };

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-border/50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:animate-glow-pulse">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-heading font-bold gradient-text hidden sm:block">
              FinXplore
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} to={item.path}>
                <Button
                  variant={isActive(item.path) ? "default" : "ghost"}
                  size="sm"
                  className={isActive(item.path) ? "bg-primary text-primary-foreground" : ""}
                >
                  {item.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* Auth / Profile */}
          <div className="hidden lg:flex items-center gap-2">
            {currentUser ? (
              <>
                <Link to="/profile">
                  <Button variant="outline" size="sm" className="gap-2">
                    {currentUser.photoURL ? (
                      <img
                        src={currentUser.photoURL}
                        alt={currentUser.displayName ?? "User"}
                        className="w-6 h-6 rounded-full"
                      />
                    ) : (
                      <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center text-xs font-bold">
                        {(currentUser.displayName ?? "U").slice(0, 1).toUpperCase()}
                      </div>
                    )}
                    <span className="hidden xl:inline">{currentUser.displayName ?? "Profile"}</span>
                  </Button>
                </Link>
                <Button variant="ghost" size="sm" onClick={handleSignOut} className="gap-2">
                  <LogOut className="w-4 h-4" />
                  <span className="hidden xl:inline">Sign out</span>
                </Button>
              </>
            ) : (
              <Button size="sm" onClick={handleSignIn} className="gap-2">
                <LogIn className="w-4 h-4" />
                Sign in / Sign up
              </Button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 hover:bg-muted rounded-lg"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 animate-slide-up">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {currentUser ? (
              <>
                <Link
                  to="/profile"
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 rounded-lg hover:bg-muted"
                >
                  Profile
                </Link>
                <button
                  onClick={() => {
                    handleSignOut();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 rounded-lg hover:bg-muted"
                >
                  Sign out
                </button>
              </>
            ) : (
              <button
                onClick={() => {
                  handleSignIn();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-4 py-2 rounded-lg bg-primary text-primary-foreground"
              >
                Sign in / Sign up
              </button>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
