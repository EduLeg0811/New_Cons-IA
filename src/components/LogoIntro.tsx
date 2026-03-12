import { useEffect, useState } from "react";

const LogoIntro = () => {
  const [phase, setPhase] = useState<'hidden' | 'zoom' | 'fadeout' | 'done'>('hidden');

  useEffect(() => {
    try {
      if (sessionStorage.getItem('logoIntroShown')) {
        setPhase('done');
        return;
      }
      sessionStorage.setItem('logoIntroShown', 'true');
    } catch {
      setPhase('done');
      return;
    }

    setPhase('zoom');
    const t1 = setTimeout(() => setPhase('fadeout'), 3500);
    const t2 = setTimeout(() => setPhase('done'), 4500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-opacity duration-1000 ${
        phase === 'fadeout' ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <img
        src="/icon.png"
        alt="Cons-IA"
        className="h-40 w-40 object-contain"
        style={{
          animation: phase === 'zoom' || phase === 'fadeout' ? 'logoZoom 3.5s ease-in-out forwards' : 'none',
        }}
      />
    </div>
  );
};

export default LogoIntro;
