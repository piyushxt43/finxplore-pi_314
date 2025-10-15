import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { auth, db } from "@/lib/firebase";
import { doc, getDoc, setDoc, serverTimestamp } from "firebase/firestore";
import { useToast } from "@/hooks/use-toast";

const Onboarding = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [focusArea, setFocusArea] = useState("stocks");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (!user) {
      navigate("/");
      return;
    }
    // Prefill display name if available
    if (user.displayName && !name) setName(user.displayName);
    // If profile already exists, skip
    const checkProfile = async () => {
      const ref = doc(db, "profiles", user.uid);
      const snap = await getDoc(ref);
      if (snap.exists()) {
        navigate("/profile");
      }
    };
    checkProfile();
  }, [navigate, name]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (!user) return;
    setLoading(true);
    setError(null);
    try {
      const ref = doc(db, "profiles", user.uid);
      await setDoc(ref, {
        uid: user.uid,
        name: name.trim(),
        age: age ? Number(age) : null,
        focusArea,
        email: user.email ?? null,
        photoURL: user.photoURL ?? null,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }, { merge: true });
      // Confirm write is visible before navigating to avoid redirect flicker
      const snap = await getDoc(ref);
      if (!snap.exists()) {
        // small retry
        await new Promise((r) => setTimeout(r, 200));
      }
      toast({ title: "Profile saved", description: "Welcome to your dashboard." });
      navigate("/");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-xl mx-auto px-4 py-12">
      <div className="glass-card p-8 rounded-xl">
        <h1 className="text-2xl font-heading font-bold mb-6">Complete your profile</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="age">Age</Label>
            <Input id="age" type="number" min="10" max="100" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="focus">Primary interest</Label>
            <select
              id="focus"
              value={focusArea}
              onChange={(e) => setFocusArea(e.target.value)}
              className="w-full h-10 px-3 rounded-md border border-input bg-background"
            >
              <option value="stocks">Stocks</option>
              <option value="crypto">Crypto</option>
              <option value="forex">Forex</option>
              <option value="options">Options</option>
            </select>
          </div>
          {error && <div className="text-sm text-destructive">{error}</div>}
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Saving..." : "Save and continue"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Onboarding;


