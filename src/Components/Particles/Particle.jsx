import { useCallback } from "react";
import Particles from "react-tsparticles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim";

const Particle = () => {
    const particlesInit = useCallback(async engine => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadFull(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
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
    fpsLimit: 120,

   
  "particles": {
    "number": {
      "value": 58,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "bubble",
      "stroke": {
        "width": 0,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
    //   "image": {
    //     "src": "img/github.svg",
    //     "width": 100,
    //     "height": 100
    //   }
    },
    "opacity": {
      "value": 0.2244776885211732,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 4.008530152163807,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 128.27296486924183,
      "color": "#fff",
      "opacity": 0.4,
      "width": 2.0844356791251797
    },
    "move": {
      "enable": true,
      "speed": 3.206824121731046,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 641.3648243462092
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 80,
        "duration": 2,
        "opacity": 8,
        "speed": 3,
        "color":"#fff"
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
      
    
}}

        />
    );
};

export default Particle;



// import React from 'react'
// import Particles from 'react-particles-js'

// function Particle() {
//   return (
//     <div>
//         <Particles
//     params={{
// 	    "particles": {
// 	        "number": {
// 	            "value": 160,
// 	            "density": {
// 	                "enable": false
// 	            }
// 	        },
// 	        "size": {
// 	            "value": 3,
// 	            "random": true,
// 	            "anim": {
// 	                "speed": 4,
// 	                "size_min": 0.3
// 	            }
// 	        },
// 	        "line_linked": {
// 	            "enable": false
// 	        },
// 	        "move": {
// 	            "random": true,
// 	            "speed": 1,
// 	            "direction": "top",
// 	            "out_mode": "out"
// 	        }
// 	    },
// 	    "interactivity": {
// 	        "events": {
// 	            "onhover": {
// 	                "enable": true,
// 	                "mode": "bubble"
// 	            },
// 	            "onclick": {
// 	                "enable": true,
// 	                "mode": "repulse"
// 	            }
// 	        },
// 	        "modes": {
// 	            "bubble": {
// 	                "distance": 250,
// 	                "duration": 2,
// 	                "size": 0,
// 	                "opacity": 0
// 	            },
// 	            "repulse": {
// 	                "distance": 400,
// 	                "duration": 4
// 	            }
// 	        }
// 	    }
// 	}} />

//     </div>
//   )
// }

// export default Particle