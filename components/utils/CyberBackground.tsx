'use client';
import { useTheme } from "next-themes"
import { useEffect, useRef, useCallback } from 'react';

const DataFlowBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(null);
  const lines = useRef<Line[]>([]);
  const { theme } = useTheme()

  const goldenColor = 'hsl(45, 100%, 50%)';
  const numLines = 40

  class Line {
    x: number;
    baseHeight: number;
    thickness: number;
    speed: number;
    direction: number;  // Nuevo atributo para definir la dirección (sube o baja)
    segments: Array<{ position: number; length: number; speedMultiplier: number }>;
    phase: number;

    constructor(canvasWidth: number, canvasHeight: number) {
      this.x = Math.random() * canvasWidth;
      this.baseHeight = canvasHeight * (0.2 + Math.random() * 0.6);
      this.thickness = Math.random() * 2 + 0.5;
      this.thickness = Math.min(this.thickness, numLines);
      this.speed = (Math.random() * 0.15 + 0.1);
      this.direction = Math.random() < 0.5 ? 1 : -1;
      this.segments = [];
      this.phase = Math.random() * Math.PI * 2;

      // Crear entre 1 y 3 segmentos
      const numSegments = Math.floor(Math.random() * 3) + 1;
      for (let i = 0; i < numSegments; i++) {
        this.segments.push({
          position: Math.random() * this.baseHeight,
          length: Math.random() * 60 + 20, // Longitud de segmentos entre 20px y 80px
          speedMultiplier: Math.random() * 0.2 + 0.2 // Velocidad aún más lenta
        });
      }
    }

    update() {
      this.phase += this.speed * 0.01;

      this.segments.forEach(segment => {
        // Movimiento de los segmentos en un loop cíclico
        segment.position += Math.sin(this.phase * segment.speedMultiplier) * 0.2 * this.direction; // Ajusto la velocidad y dirección

        if (segment.position > this.baseHeight) {
          segment.position = -segment.length; // Regresa al inicio cuando pasa el límite inferior
        } else if (segment.position < -segment.length) {
          segment.position = this.baseHeight; // Regresa al inicio cuando pasa el límite superior
        }
      });
    }

    draw(ctx: CanvasRenderingContext2D) {
      if (!canvasRef.current) return;

      // Línea base
      ctx.strokeStyle = `hsla(0, 0%, 15%, ${0.3 + Math.random() * 0.1})`;
      ctx.lineWidth = this.thickness;
      ctx.beginPath();
      ctx.moveTo(this.x, canvasRef.current.height / 2 - this.baseHeight / 2);
      ctx.lineTo(this.x, canvasRef.current.height / 2 + this.baseHeight / 2);
      ctx.stroke();

      // Segmentos brillantes (Fragmentos amarillos)
      this.segments.forEach(segment => {
        ctx.strokeStyle = goldenColor;
        ctx.lineWidth = this.thickness * 1.5;
        ctx.globalAlpha = 0.3 + Math.random() * 0.3;

        ctx.beginPath();
        ctx.moveTo(
          this.x,
          canvasRef.current!.height / 2 - this.baseHeight / 2 + segment.position
        );
        ctx.lineTo(
          this.x,
          canvasRef.current!.height / 2 - this.baseHeight / 2 + segment.position + segment.length
        );
        ctx.stroke();
      });
    }
  }

  const init = useCallback(() => {
    if (!canvasRef.current) return;

    const { width, height } = canvasRef.current.getBoundingClientRect();
    canvasRef.current.width = width;
    canvasRef.current.height = height;

    lines.current = Array.from({ length: numLines }, () => (
      new Line(width, height)
    ));
  }, [Line]);

  const animate = useCallback(() => {
    if (!canvasRef.current) return;
    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = theme === 'light' ? 'oklch(1 0 0)' : 'oklch(0 0 0)'; 

    lines.current.forEach(line => {
      line.update();
      line.draw(ctx);
    });

    animationFrameId.current = requestAnimationFrame(animate);
  }, [theme]);

  const handleResize = useCallback(() => {
    init();
  }, [init]);

  useEffect(() => {
    init();
    animate();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [animate, handleResize, init]);

  return (
    <canvas
      ref={canvasRef}

      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        display: 'block',
        zIndex: -1
      }}
    />
  );
};

export default DataFlowBackground;
