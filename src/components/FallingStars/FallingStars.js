import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";

export const FallingStars = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    return null;
  }, []);

  return (
      <Particles
      options={{
        particles: {
          color: { value: "#FFA500" }, 
          number: { value: 20 },
          opacity: { min: 0.3, max: 1 },
          shape: {
            type: 'star', 
          },
          size: { value: { min: 1, max: 4 } },
          move: {
            direction: 'top', 
            enable: true,
            speed: { min: 1, max: 1 },
            straight: false,
            outMode: 'out', 
          },
        },
      }}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};
