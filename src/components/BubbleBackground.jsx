import React, { useEffect, useRef } from "react";

const BubbleCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Handle window resize
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resizeCanvas);

    // Bubble properties
    const bubbles = [];
    const numBubbles = 20;

    class Bubble {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 50 + 20; // Radius between 5 and 15
        this.speed = Math.random() * 0.5 + 1; // Speed between 1 and 3
        this.alpha = Math.random() * 0.5 + 0.3; // Opacity between 0.3 and 0.8
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = `rgba(255, 00, 255, ${this.alpha})`; // Light blue color
        ctx.fill();
        ctx.closePath();
      }

      update() {
        this.y -= this.speed;
        if (this.y + this.radius < 0) {
          this.y = canvas.height + this.radius; // Reset to bottom
          this.x = Math.random() * canvas.width; // Random x position
        }
        this.draw();
      }
    }

    // Create bubbles
    for (let i = 0; i < numBubbles; i++) {
      bubbles.push(new Bubble());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      bubbles.forEach((bubble) => bubble.update());
      requestAnimationFrame(animate);
    };

    animate();

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 z-0" />;
};

export default BubbleCanvas;
