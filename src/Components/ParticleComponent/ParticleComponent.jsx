import React, { useCallback, useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';

function ParticleComponent() {
    const [numParticles, setNumParticles] = useState(50); // Default number of particles

    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        // Do any necessary actions after particles are loaded
    }, []);

    useEffect(() => {
        // Adjust the number of particles based on the screen width
        const updateNumParticles = () => {
            if (window.innerWidth < 768) { // Adjust as needed for your mobile breakpoint
                setNumParticles(25); // Set a lower number of particles for mobile screens
            } else {
                setNumParticles(50); // Set the default number of particles for larger screens
            }
        };

        // Call the function once to set the initial number of particles
        updateNumParticles();

        // Add event listener to dynamically adjust the number of particles when the window is resized
        window.addEventListener('resize', updateNumParticles);

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', updateNumParticles);
        };
    }, []);


    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
           options={{
    background: {
        // color: {
        //     value: "#ffffff",
        // },
    },
    fullScreen: {
        enabled: true,
        zIndex: 10,
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
    particles: {
        color: {
          value: "#fff",
        },
        collisions: {
          enable: false,
        },
        move: {
          directions: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1.5,
          straight: false,
        },
        number: {
          value: numParticles,
        },
        opacity: {
          value: 1,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 2, max: 4 },
        },
      },
      detectRetina: false,
    }}

        />
    );
};

export default ParticleComponent