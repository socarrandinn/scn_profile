'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    // Detectar elementos interactivos
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactiveElements = ['BUTTON', 'A', '[role="button"]'];
      
      if (target.closest(interactiveElements.join(', '))) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const related = e.relatedTarget as HTMLElement;
      const interactiveElements = ['BUTTON', 'A', '[role="button"]'];
      
      const isInteractive = target.closest(interactiveElements.join(', '));
      const stillInside = related?.closest(interactiveElements.join(', '));

      if (isInteractive && !stillInside) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <motion.div
      className={cn('cursor', isHovered && 'cursor-zoom')}
      animate={{
        x: position.x - 15,
        y: position.y - 15,
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
    />
  );
};

export default Cursor;