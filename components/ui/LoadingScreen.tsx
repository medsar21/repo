'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface LoadingScreenProps {
  onLoadingComplete?: () => void;
  duration?: number;
}

/**
 * LoadingScreen - Simple logo display
 * 
 * Shows the "Dima Maghrib" logo with fade in/out animation
 */

const LoadingScreen: React.FC<LoadingScreenProps> = ({ 
  onLoadingComplete,
  duration = 3000 
}) => {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsComplete(true);
      if (onLoadingComplete) {
        setTimeout(onLoadingComplete, 600);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onLoadingComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-maroc-red via-red-700 to-maroc-dark"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Logo Dima Maghrib */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative w-64 h-64 md:w-96 md:h-96"
          >
            <Image
              src="/images/logo dima maghrib.svg"
              alt="Dima Maghrib"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
