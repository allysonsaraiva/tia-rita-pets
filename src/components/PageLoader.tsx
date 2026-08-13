import React, { useEffect, useState } from 'react';
import { Loader2 } from 'lucide-react';

interface PageLoaderProps {
  progress: number;
  isLoaded: boolean;
}

export const PageLoader: React.FC<PageLoaderProps> = ({ isLoaded }) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (!isLoaded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [isLoaded]);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-100 bg-[#1A1412] text-white flex items-center justify-center transition-opacity duration-500 ease-in-out ${
        isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      <Loader2 className="w-10 h-10 text-[#C85A70] animate-spin" />
    </div>
  );
};

export default PageLoader;
