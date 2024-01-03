import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export const FallingStars = () => {

   const particleColors = ["#FFA500", "#0000CD"];

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    return null;
  }, []);

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * particleColors.length);
    return particleColors[randomIndex];
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        particles: {
          number: {
        value: 100, // Кількість частинок (зірок)
        density: {
          enable: true,
          value_area: 800,
        },
          },
      shape: {
        type: 'star', // Форма частинок
        stroke: {
          width: 2,
           color: getRandomColor(),        
        },
        polygon: {
          nb_sides: 5, // Кількість сторін зірки
        },
      },
      size: {
        value: 4, // Розмір частинок (зірок)
        random: true,
        anim: {
          enable: true,
          speed: 4,
          size_min: 0.1,
          sync: false,
        },
          },
          opacity: {
            value: 0.8, // Прозорість частинок (зірок)
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.1,
              sync: false,
            },
          },
          move: {
            direction: 'bottom', 
            enable: true,
            speed: { min: 1, max: 1 },
            straight: false, 
            outMode: 'out', 
          },
        },
      }}      
    />
  );
};
