'use client';
import { useState, useEffect, useCallback } from 'react';
import { motion, useAnimation } from 'framer-motion';
 

type Position = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
};

const NeonCursor = () => {
  const [position, setPosition] = useState<Position>({
    x: 0,
    y: 0,
    scale: 1,
    opacity: 1,
  });
  
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const trailControls = useAnimation();
  const glowControls = useAnimation();

  const handleMouseMove = useCallback((e: MouseEvent) => {
    setPosition(prev => ({
      ...prev,
      x: e.clientX,
      y: e.clientY,
    }));
  }, []);

  const handleMouseDown = () => setIsClicking(true);
  const handleMouseUp = () => setIsClicking(false);

  const handleMouseOver = useCallback((e: Event) => {
    const target = e.target as Element;
    if (target?.matches('a, button, input, [data-hover="true"]')) {
      setIsHovering(true);
      trailControls.start({
        scale: 1.5,
        borderColor: 'rgb(255, 150, 50)',
        borderWidth: '3px',
      });
      glowControls.start({
        scale: 2,
        opacity: 0.8,
      });
    }
  }, [trailControls, glowControls]);

  const handleMouseOut = useCallback(() => {
    setIsHovering(false);
    trailControls.start({
      scale: 1,
      borderColor: 'rgb(236, 101, 23)',
      borderWidth: '2px',
    });
    glowControls.start({
      scale: 1,
      opacity: 0.4,
    });
  }, [trailControls, glowControls]);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, [handleMouseMove, handleMouseOver, handleMouseOut]);

  return (
    <div className='neon-cursor-container'>
      <motion.div
        className='cursor-main'
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: isClicking ? 0.8 : isHovering ? 1.2 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 20,
          stiffness: 400,
          mass: 0.5,
        }}
      />

      <motion.div
        className='cursor-trail'
        animate={{
          x: position.x - 20,
          y: position.y - 20,
        }}
        transition={{
          type: 'spring',
          damping: 30,
          stiffness: 200,
          mass: 0.8,
        }}
      /> 
    </div>
  );
};

export default NeonCursor;