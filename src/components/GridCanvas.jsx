import { useEffect, useRef } from 'react';

export default function GridCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const vanishX = width / 2;
      const vanishY = height / 2;
      const numLines = 12;
      const speed = 0.4;

      // Animate offset (moves grid forward continuously)
      offset = (offset + speed) % 80;

      ctx.strokeStyle = 'rgba(214, 210, 189, 0.18)';
      ctx.lineWidth = 0.6;

      // ─── Perspective horizontal lines (ground/ceiling grid) ───
      for (let i = 0; i <= numLines; i++) {
        // Map i to a z depth with perspective, then animate
        const rawZ = ((i / numLines) * 600 + offset * 3) % 600;
        const perspective = 300 / (300 + rawZ);

        const y = vanishY + (height * 0.55) * (1 - perspective) * (rawZ < 300 ? 1 : -1);
        const xLeft  = vanishX - (width * 0.9) * (1 - perspective * 0.3);
        const xRight = vanishX + (width * 0.9) * (1 - perspective * 0.3);

        // Only draw lines in bottom half (floor grid)
        const lineY = vanishY + (height / 2 - vanishY) + (rawZ / 600) * (height / 2);

        // Fade lines near vanishing point (distant lines are dimmer)
        const alpha = Math.min(0.22, (rawZ / 600) * 0.28);
        ctx.strokeStyle = `rgba(214, 210, 189, ${alpha})`;

        const spreadX = (rawZ / 600) * width * 0.6;
        ctx.beginPath();
        ctx.moveTo(vanishX - spreadX, lineY);
        ctx.lineTo(vanishX + spreadX, lineY);
        ctx.stroke();
      }

      // ─── Perspective vertical lines (radiating from center) ───
      const numVertical = 16;
      for (let i = 0; i <= numVertical; i++) {
        const t = i / numVertical; // 0..1
        const endX = -width * 0.1 + t * width * 1.2;
        const endY = height;

        // Lines converge at vanishing point
        const alpha = 0.1 + Math.abs(t - 0.5) * 0.12;
        ctx.strokeStyle = `rgba(214, 210, 189, ${alpha})`;
        ctx.lineWidth = 0.5;

        ctx.beginPath();
        ctx.moveTo(vanishX + (endX - vanishX) * 0.005, vanishY); // tiny start at vp
        ctx.lineTo(endX, endY);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(animationId);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full"
      style={{ display: 'block', border: 'none' }}
    />
  );
}
