import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 650);
    return () => window.clearTimeout(timeout);
  }, []);
  if (!visible) return null;
  return (
    <div className="preloader" aria-label="Loading Atelier">
      <span className="preloader-mark">A.</span>
      <span className="preloader-line" />
    </div>
  );
}
