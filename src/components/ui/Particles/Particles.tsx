import React, { useEffect, useState } from "react";
import "./Particles.css";

type Particle = {
  id: string;
  x: number;
  y: number;
  size: number;
  duration: number;
};

const Particles: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticle = () => {
      const particle: Particle = {
        id: Math.random().toString(36).substring(7),
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 5,
        duration: Math.random() * 0.5 + 0.3,
      };
      setParticles((prev) => [...prev, particle]);

      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== particle.id));
      }, particle.duration * 3000);
    };

    const interval = setInterval(createParticle, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute z-50 w-full h-full">
      {particles.map((particle) => (
        <div
          key={particle.id}
          style={{
            position: "absolute",
            top: `${particle.y}%`,
            left: `${particle.x}%`,
            width: `${particle.size}vmax`,
            height: `${particle.size}vmax`,
          }}
          className="particle"
        >
          <svg
            viewBox="0 0 45 64"
            fill="#31D0AD"
            width={`${particle.size}vmax`}
            height={`${particle.size}vmax`}
          >
            <path d="M22.625 2c0 15.834-8.557 30-20.625 30c12.068 0 20.625 14.167 20.625 30c0-15.833 8.557-30 20.625-30c-12.068 0-20.625-14.166-20.625-30" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default Particles;
