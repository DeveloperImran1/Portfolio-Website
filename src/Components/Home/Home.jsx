// import { FaFacebookF, FaGithub, FaLinkedin, FaMessage } from "react-icons/fa6";
// import resume from "../../assets/Resume (Front-end Webdeveloper).pdf"
// import { Link } from "react-router-dom";
// import ParticleConfig from "../Particle/Particle";



// // import { useCallback } from "react";
// // import Particles from "react-particles";
// // // import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
// // import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.
// // import ParticleConfig from "../Particle/Particle";






// export default function Home() {
//   // const particlesInit = useCallback(async engine => {
//   //   console.log(engine);
//   //   // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
//   //   // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
//   //   // starting from v2 you can add only the features you need reducing the bundle size
//   //   //await loadFull(engine);
//   //   await loadSlim(engine);
//   // }, []);

//   // const particlesLoaded = useCallback(async container => {
//   //   await console.log(container);
//   // }, []);

//   return (
//     <div id="home" className="flex flex-col justify-center items-center gap-2 mx-auto mt-[70px] h-[100vh] min-w-[calc(100vw-220px)] relative" >
//       <img className="w-[150px] h-[150px] z-10 rounded-full" src="https://i.ibb.co/C5j8rL3/Blue-Modern-Facebook-Profile-Picture.png" alt="Profile Image" />
//       <span className="text-[40px] font-bold text-center flex justify-center items-center gap-3 mt-3 z-10">Hi  <img className="" src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Hi.gif" width="35" />  </span>
//       <div className="wrapper  absolute top-[25%]">
//         <svg className="svg">
//           <text x="50%" y="50%" dy=".35em" text-anchor="middle">
//             I am Imran
//           </text>
//         </svg>
//       </div>
//       <h1 className="text-2xl font-bold text-center mt-[50px] z-10">Front-End Web Developer</h1>
//       <p className="mb-3 md:w-[50%] mx-auto text-center">
//         Front-end web developer with expertise in React, Tailwind CSS, and smooth user experience design, performance optimization, and intuitive interfaces for seamless web interactions
//       </p>
//       <div className="grid grid-flow-col gap-4 " >


//         <Link to="https://www.facebook.com/DeveloperImran1" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
//           <FaFacebookF className=" text-blue-600 hover:text-[#076aa5] text-[16px]  "></FaFacebookF>
//         </Link>
//         <Link to="https://www.linkedin.com/in/developerimran1122/" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
//           <FaLinkedin className=" text-blue-600 hover:text-[#076aa5] text-[16px]  "></FaLinkedin>
//         </Link>
//         <Link to="https://github.com/DeveloperImran1" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)]  duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
//           <FaGithub className=" text-blue-600 hover:text-[#076aa5] text-[16px]  "></FaGithub>
//         </Link>
//         {/* <a href="tel:+8801311710894" className="border p-2 border-blue-500  rounded-full hover:bg-blue-500">
//                         <FaPhoneAlt  className=" text-blue-600  hover:text-white text-[16px]  "></FaPhoneAlt>
//                     </a> */}

//       </div>
//       <div className="flex gap-3 mt-3" >
//         <a href={resume} download="Resume">
//           <button className="animate-button text-[17px] box-border border-4 border-sky-900 w-[130px] h-9 rounded-lg bg-sky-600 text-white relative group"><span className="pr-8">Resume</span><span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300"><svg viewBox="0 0 24 24" fill="none" className="w-8 inline mx-auto" xmlns="http://www.w3.org/2000/svg"><g strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg></span></button>
//         </a>
//         <a href="#contact">
//           {/* <button className=" text-[17px] box-border border-2 border-sky-900 w-[130px] h-9 rounded-lg bg-sky-600 text-white  duration-200 hover:bg-sky-500 hover:text-white">Button</button> */}
//           <button id="" className="text-[17px] animate-button box-border border-2 border-sky-900 w-[130px] h-9 rounded-lg bg-sky-600 text-white duration-200 hover:bg-sky-500 hover:text-white">
//             Hire Me
//           </button>
//         </a>
//       </div>

//       <div className="  flex flex-col items-center justify-center gap-2 mt-[30px] md:mt-[60px] cursor-pointer "  >
//         <a>Scrool Down</a>
//         <a href="#skills" className="animate-button">

//           <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8.467 8.467" id="scroll-down"><path d="m -67.557504,132.58035 c -1.101718,0 -1.997778,0.89559 -1.997778,1.99731 v 3.41374 c 0,1.10172 0.89606,1.9973 1.997778,1.9973 h 1.463101 c 1.101719,0 1.997302,-0.89558 1.997302,-1.9973 v -3.41374 c 0,-1.10172 -0.895583,-1.99731 -1.997302,-1.99731 z m 0,0.58325 h 1.463101 c 0.788968,0 1.414061,0.62509 1.414061,1.41406 v 3.41374 c 0,0.78896 -0.625093,1.41453 -1.414061,1.41453 h -1.463101 c -0.788969,0 -1.414537,-0.62557 -1.414537,-1.41453 v -3.41374 c 0,-0.78897 0.625568,-1.41406 1.414537,-1.41406 z m 0.727028,0.0571 a 0.24379519,0.24379519 0 0 0 -0.239487,0.24662 v 0.5204 h -0.325662 l 0.570385,1.01651 0.113316,-0.2014 0.458975,-0.81511 h -0.329472 v -0.5204 a 0.24379519,0.24379519 0 0 0 -0.248055,-0.24662 z m -1.725917,2.08967 a 0.24411119,0.24411119 0 0 0 0.02333,0.48754 h 3.413744 a 0.24383083,0.24383083 0 1 0 0,-0.48754 h -3.413743 a 0.24379519,0.24379519 0 0 0 -0.02333,0 z" color="#000" overflow="visible" transform="translate(71.06 -132.051)" ></path></svg>
//         </a>
//       </div>

//       <div className="w-full absolute top-0 left-0 h-[400px]" >
//         <ParticleConfig></ParticleConfig>
//       </div>



//     </div>
//   )
// }



//    {/* <Particles
//             id="tsparticles"
//             init={particlesInit}
//             loaded={particlesLoaded}
//             options={{
//               autoPlay: true,
//               background: {
//                 color: {
//                   // value: "#fff"
//                 },
//                 image: "",
//                 position: "",
//                 repeat: "",
//                 size: "",
//                 opacity: 1
//               },
//               backgroundMask: {
//                 composite: "destination-out",
//                 cover: {
//                   color: {
//                     // value: "#fff"
//                   },
//                   opacity: 1
//                 },
//                 enable: false
//               },
//               clear: true,
//               defaultThemes: {},
//               delay: 0,
//               fullScreen: {
//                 enable: true,
//                 zIndex: 0
//               },
//               detectRetina: true,
//               duration: 0,
//               fpsLimit: 120,
//               interactivity: {
//                 detectsOn: "window",
//                 events: {
//                   onClick: {
//                     enable: true,
//                     mode: "push"
//                   },
//                   onDiv: {
//                     selectors: [],
//                     enable: false,
//                     mode: [],
//                     type: "circle"
//                   },
//                   onHover: {
//                     enable: true,
//                     mode: "bubble",
//                     parallax: {
//                       enable: false,
//                       force: 2,
//                       smooth: 10
//                     }
//                   },
//                   resize: {
//                     delay: 0.5,
//                     enable: true
//                   }
//                 },
//                 modes: {
//                   trail: {
//                     delay: 1,
//                     pauseOnStop: false,
//                     quantity: 1
//                   },
//                   attract: {
//                     distance: 200,
//                     duration: 0.4,
//                     easing: "ease-out-quad",
//                     factor: 1,
//                     maxSpeed: 50,
//                     speed: 1
//                   },
//                   bounce: {
//                     distance: 200
//                   },
//                   bubble: {
//                     distance: 400,
//                     duration: 2,
//                     mix: false,
//                     opacity: 0.8,
//                     size: 40,
//                     divs: {
//                       distance: 200,
//                       duration: 0.4,
//                       mix: false,
//                       selectors: []
//                     }
//                   },
//                   connect: {
//                     distance: 80,
//                     links: {
//                       opacity: 0.5
//                     },
//                     radius: 60
//                   },
//                   grab: {
//                     distance: 100,
//                     links: {
//                       blink: false,
//                       consent: false,
//                       opacity: 1
//                     }
//                   },
//                   push: {
//                     default: true,
//                     groups: [],
//                     quantity: 4
//                   },
//                   remove: {
//                     quantity: 2
//                   },
//                   repulse: {
//                     distance: 200,
//                     duration: 0.4,
//                     factor: 100,
//                     speed: 1,
//                     maxSpeed: 50,
//                     easing: "ease-out-quad",
//                     divs: {
//                       distance: 200,
//                       duration: 0.4,
//                       factor: 100,
//                       speed: 1,
//                       maxSpeed: 50,
//                       easing: "ease-out-quad",
//                       selectors: []
//                     }
//                   },
//                   slow: {
//                     factor: 3,
//                     radius: 200
//                   },
//                   light: {
//                     area: {
//                       gradient: {
//                         start: {
//                           value: "#ffffff"
//                         },
//                         stop: {
//                           value: "#000000"
//                         }
//                       },
//                       radius: 1000
//                     },
//                     shadow: {
//                       color: {
//                         value: "#000000"
//                       },
//                       length: 2000
//                     }
//                   }
//                 }
//               },
//               manualParticles: [],
//               particles: {
//                 bounce: {
//                   horizontal: {
//                     value: 1
//                   },
//                   vertical: {
//                     value: 1
//                   }
//                 },
//                 collisions: {
//                   absorb: {
//                     speed: 2
//                   },
//                   bounce: {
//                     horizontal: {
//                       value: 1
//                     },
//                     vertical: {
//                       value: 1
//                     }
//                   },
//                   enable: false,
//                   maxSpeed: 50,
//                   mode: "bounce",
//                   overlap: {
//                     enable: true,
//                     retries: 0
//                   }
//                 },
//                 color: {
//                   value: "#ffffff",
//                   animation: {
//                     h: {
//                       count: 0,
//                       enable: false,
//                       speed: 1,
//                       decay: 0,
//                       delay: 0,
//                       sync: true,
//                       offset: 0
//                     },
//                     s: {
//                       count: 0,
//                       enable: false,
//                       speed: 1,
//                       decay: 0,
//                       delay: 0,
//                       sync: true,
//                       offset: 0
//                     },
//                     l: {
//                       count: 0,
//                       enable: false,
//                       speed: 1,
//                       decay: 0,
//                       delay: 0,
//                       sync: true,
//                       offset: 0
//                     }
//                   }
//                 },
//                 effect: {
//                   close: true,
//                   fill: true,
//                   options: {},
//                   type: []
//                 },
//                 groups: {},
//                 move: {
//                   angle: {
//                     offset: 0,
//                     value: 90
//                   },
//                   attract: {
//                     distance: 200,
//                     enable: false,
//                     rotate: {
//                       x: 3000,
//                       y: 3000
//                     }
//                   },
//                   center: {
//                     x: 50,
//                     y: 50,
//                     mode: "percent",
//                     radius: 0
//                   },
//                   decay: 0,
//                   distance: {},
//                   direction: "none",
//                   drift: 0,
//                   enable: true,
//                   gravity: {
//                     acceleration: 9.81,
//                     enable: false,
//                     inverse: false,
//                     maxSpeed: 50
//                   },
//                   path: {
//                     clamp: true,
//                     delay: {
//                       value: 0
//                     },
//                     enable: false,
//                     options: {}
//                   },
//                   outModes: {
//                     default: "out",
//                     bottom: "out",
//                     left: "out",
//                     right: "out",
//                     top: "out"
//                   },
//                   random: false,
//                   size: false,
//                   speed: 2,
//                   spin: {
//                     acceleration: 0,
//                     enable: false
//                   },
//                   straight: false,
//                   trail: {
//                     enable: false,
//                     length: 10,
//                     fill: {}
//                   },
//                   vibrate: false,
//                   warp: false
//                 },
//                 number: {
//                   density: {
//                     enable: true,
//                     width: 1920,
//                     height: 1080
//                   },
//                   limit: {
//                     mode: "delete",
//                     value: 0
//                   },
//                   value: 80
//                 },
//                 opacity: {
//                   value: 1,
//                   animation: {
//                     count: 0,
//                     enable: false,
//                     speed: 2,
//                     decay: 0,
//                     delay: 0,
//                     sync: false,
//                     mode: "auto",
//                     startValue: "random",
//                     destroy: "none"
//                   }
//                 },
//                 reduceDuplicates: false,
//                 shadow: {
//                   blur: 0,
//                   color: {
//                     value: "#000"
//                   },
//                   enable: false,
//                   offset: {
//                     x: 0,
//                     y: 0
//                   }
//                 },
//                 shape: {
//                   close: true,
//                   fill: true,
//                   options: {
//                     image: [
//                       {
//                         name: "apple"
//                       },
//                       {
//                         name: "avocado"
//                       },
//                       {
//                         name: "banana"
//                       },
//                       {
//                         name: "berries"
//                       },
//                       {
//                         name: "cherry"
//                       },
//                       {
//                         name: "grapes"
//                       },
//                       {
//                         name: "lemon"
//                       },
//                       {
//                         name: "orange"
//                       },
//                       {
//                         name: "peach"
//                       },
//                       {
//                         name: "pear"
//                       },
//                       {
//                         name: "pepper"
//                       },
//                       {
//                         name: "plum"
//                       },
//                       {
//                         name: "star"
//                       },
//                       {
//                         name: "strawberry"
//                       },
//                       {
//                         name: "watermelon"
//                       },
//                       {
//                         name: "watermelon_slice"
//                       }
//                     ]
//                   },
//                   type: "image"
//                 },
//                 size: {
//                   value: 16,
//                   animation: {
//                     count: 0,
//                     enable: false,
//                     speed: 5,
//                     decay: 0,
//                     delay: 0,
//                     sync: false,
//                     mode: "auto",
//                     startValue: "random",
//                     destroy: "none"
//                   }
//                 },
//                 stroke: {
//                   width: 0
//                 },
//                 zIndex: {
//                   value: 0,
//                   opacityRate: 1,
//                   sizeRate: 1,
//                   velocityRate: 1
//                 },
//                 destroy: {
//                   bounds: {},
//                   mode: "none",
//                   split: {
//                     count: 1,
//                     factor: {
//                       value: 3
//                     },
//                     rate: {
//                       value: {
//                         min: 4,
//                         max: 9
//                       }
//                     },
//                     sizeOffset: true,
//                     particles: {}
//                   }
//                 },
//                 roll: {
//                   darken: {
//                     enable: false,
//                     value: 0
//                   },
//                   enable: false,
//                   enlighten: {
//                     enable: false,
//                     value: 0
//                   },
//                   mode: "vertical",
//                   speed: 25
//                 },
//                 tilt: {
//                   value: 0,
//                   animation: {
//                     enable: false,
//                     speed: 0,
//                     decay: 0,
//                     sync: false
//                   },
//                   direction: "clockwise",
//                   enable: false
//                 },
//                 twinkle: {
//                   lines: {
//                     enable: false,
//                     frequency: 0.05,
//                     opacity: 1
//                   },
//                   particles: {
//                     enable: false,
//                     frequency: 0.05,
//                     opacity: 1
//                   }
//                 },
//                 wobble: {
//                   distance: 5,
//                   enable: false,
//                   speed: {
//                     angle: 50,
//                     move: 10
//                   }
//                 },
//                 life: {
//                   count: 0,
//                   delay: {
//                     value: 0,
//                     sync: false
//                   },
//                   duration: {
//                     value: 0,
//                     sync: false
//                   }
//                 },
//                 rotate: {
//                   value: {
//                     min: 0,
//                     max: 360
//                   },
//                   animation: {
//                     enable: true,
//                     speed: 5,
//                     decay: 0,
//                     sync: false
//                   },
//                   direction: "random",
//                   path: false
//                 },
//                 orbit: {
//                   animation: {
//                     count: 0,
//                     enable: false,
//                     speed: 1,
//                     decay: 0,
//                     delay: 0,
//                     sync: false
//                   },
//                   enable: false,
//                   opacity: 1,
//                   rotation: {
//                     value: 45
//                   },
//                   width: 1
//                 },
//                 links: {
//                   blink: false,
//                   color: {
//                     value: "#fff"
//                   },
//                   consent: false,
//                   distance: 100,
//                   enable: false,
//                   frequency: 1,
//                   opacity: 1,
//                   shadow: {
//                     blur: 5,
//                     color: {
//                       value: "#000"
//                     },
//                     enable: false
//                   },
//                   triangles: {
//                     enable: false,
//                     frequency: 1
//                   },
//                   width: 1,
//                   warp: false
//                 },
//                 repulse: {
//                   value: 0,
//                   enabled: false,
//                   distance: 1,
//                   duration: 1,
//                   factor: 1,
//                   speed: 1
//                 }
//               },
//               pauseOnBlur: true,
//               pauseOnOutsideViewport: true,
//               responsive: [],
//               smooth: false,
//               style: {},
//               themes: [],
//               zLayers: 100,
//               name: "Images",
//               preload: [
//                 {
//                   src: "https://particles.js.org/images/fruits/apple.png",
//                   gif: false,
//                   height: 32,
//                   name: "apple",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/avocado.png",
//                   gif: false,
//                   height: 32,
//                   name: "avocado",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/banana.png",
//                   gif: false,
//                   height: 32,
//                   name: "banana",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/berries.png",
//                   gif: false,
//                   height: 32,
//                   name: "berries",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/cherry.png",
//                   gif: false,
//                   height: 32,
//                   name: "cherry",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/grapes.png",
//                   gif: false,
//                   height: 32,
//                   name: "grapes",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/lemon.png",
//                   gif: false,
//                   height: 32,
//                   name: "lemon",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/orange.png",
//                   gif: false,
//                   height: 32,
//                   name: "orange",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/peach.png",
//                   gif: false,
//                   height: 32,
//                   name: "peach",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/pear.png",
//                   gif: false,
//                   height: 32,
//                   name: "pear",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/pepper.png",
//                   gif: false,
//                   height: 32,
//                   name: "pepper",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/plum.png",
//                   gif: false,
//                   height: 32,
//                   name: "plum",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/star.png",
//                   gif: false,
//                   height: 32,
//                   name: "star",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/strawberry.png",
//                   gif: false,
//                   height: 32,
//                   name: "strawberry",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/watermelon.png",
//                   gif: false,
//                   height: 32,
//                   name: "watermelon",
//                   width: 32
//                 },
//                 {
//                   src: "https://particles.js.org/images/fruits/watermelon_slice.png",
//                   gif: false,
//                   height: 32,
//                   name: "watermelon_slice",
//                   width: 32
//                 }
//               ],
//               motion: {
//                 disable: false,
//                 reduce: {
//                   factor: 4,
//                   value: true
//                 }
//               }
//             }}
//         /> */}








// Home.js
import { FaFacebookF, FaGithub, FaLinkedin } from 'react-icons/fa';
import resume from '../../assets/Resume (Front-end Webdeveloper).pdf';
import { Link } from 'react-router-dom';
import ParticleConfig from "../Particle/Particle";

export default function Home() {
  return (
    <div id="home" className="relative flex flex-col justify-center items-center gap-2 mx-auto  lg:mt-[70px] lg:h-[100vh] min-w-[calc(100vw-220px)]">
      <div className='hidden lg:hidden'>
      <ParticleConfig />
      </div>
      <img className="w-[150px] h-[150px] z-10 rounded-full" src="https://i.ibb.co/C5j8rL3/Blue-Modern-Facebook-Profile-Picture.png" alt="Profile Image" />
      <span className="text-[40px] font-bold text-center flex justify-center items-center gap-3 mt-3 z-10">
        Hi <img className="" src="https://raw.githubusercontent.com/TheDudeThatCode/TheDudeThatCode/master/Assets/Hi.gif" width="35" />
      </span>
      <div className="wrapper absolute top-[25%]">
        <svg className="svg">
          <text x="50%" y="50%" dy=".35em" textAnchor="middle">
            I am Imran
          </text>
        </svg>
      </div>
      <h1 className="text-2xl font-bold text-center mt-[50px] z-10">Front-End Web Developer</h1>
      <p className="mb-3 md:w-[50%] mx-auto text-center">
        Front-end web developer with expertise in React, Tailwind CSS, and smooth user experience design, performance optimization, and intuitive interfaces for seamless web interactions
      </p>
      <div className="grid grid-flow-col gap-4">
        <Link to="https://www.facebook.com/DeveloperImran1" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
          <FaFacebookF className="text-blue-600 hover:text-[#076aa5] text-[16px]" />
        </Link>
        <Link to="https://www.linkedin.com/in/developerimran1122/" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
          <FaLinkedin className="text-blue-600 hover:text-[#076aa5] text-[16px]" />
        </Link>
        <Link to="https://github.com/DeveloperImran1" className="hover:text-[#076aa5] rounded-full shadow-[0px_2px_8px_0px_rgba(99,99,99,0.4)] duration-300 hover:scale-150 h-8 w-8 flex justify-center items-center">
          <FaGithub className="text-blue-600 hover:text-[#076aa5] text-[16px]" />
        </Link>
      </div>
      <div className="flex gap-3 mt-3">
        <a href={resume} download="Resume">
          <button className="animate-button text-[17px] box-border border-4 border-sky-900 w-[130px] h-9 rounded-lg bg-sky-600 text-white relative group">
            <span className="pr-8">Resume</span>
            <span className="bg-sky-900 absolute right-0 top-0 h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
              <svg viewBox="0 0 24 24" fill="none" className="w-8 inline mx-auto" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3V16M12 16L16 11.625M12 16L8 11.625" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </button>
        </a>
        
        <a href="#contact">
          <button className="text-[17px] animate-button box-border border-2 border-sky-900 w-[130px] h-9 rounded-lg bg-sky-600 text-white duration-200 hover:bg-sky-500 hover:text-white">
            Hire Me
          </button>
        </a>
      </div>
      <div className="flex flex-col items-center justify-center gap-2 mt-[30px] md:mt-[60px] cursor-pointer">
        <a>Scroll Down</a>
        <a href="#skills" className="animate-button">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 8.467 8.467" id="scroll-down">
            <path d="m -67.557504,132.58035 c -1.101718,0 -1.997778,0.89559 -1.997778,1.99731 v 3.41374 c 0,1.10172 0.89606,1.9973 1.997778,1.9973 h 1.463101 c 1.101719,0 1.997302,-0.89558 1.997302,-1.9973 v -3.41374 c 0,-1.10172 -0.895583,-1.99731 -1.997302,-1.99731 z m 0,0.58325 h 1.463101 c 0.788968,0 1.414061,0.62509 1.414061,1.41406 v 3.41374 c 0,0.78896 -0.625093,1.41453 -1.414061,1.41453 h -1.463101 c -0.788969,0 -1.414537,-0.62557 -1.414537,-1.41453 v -3.41374 c 0,-0.78897 0.625568,-1.41406 1.414537,-1.41406 z m 0.727028,0.0571 a 0.24379519,0.24379519 0 0 0 -0.239487,0.24662 v 0.5204 h -0.325662 l 0.570385,1.01651 0.113316,-0.2014 0.458975,-0.81511 h -0.329472 v -0.5204 a 0.24379519,0.24379519 0 0 0 -0.248055,-0.24662 z m -1.725917,2.08967 a 0.24411119,0.24411119 0 0 0 0.02333,0.48754 h 3.413744 a 0.24383083,0 1 0 0,-0.48754 h -3.413743 a 0.24379519,0.24379519 0 0 0 -0.02333,0 z" color="#000" overflow="visible" transform="translate(71.06 -132.051)" />
          </svg>
        </a>
      </div>


      {/* <div> */}
      <img className='h-[30px] w-[30px] hidden lg:block  rounded-full hover:animate-spin absolute top-[4%] right-[20%]' src="https://i.ibb.co/Ns0mvQf/html5.png" alt="" />
      <img className='h-[30px] w-[30px] hidden lg:block  rounded-full hover:animate-spin absolute top-[16%] left-[6%]' src="https://i.ibb.co/1GzSwm8/css3.png" alt="" />
      <img className="h-[36px] w-[36px] hidden lg:block rounded-full hover:animate-spin absolute top-[50%] right-[90%]" src="https://i.ibb.co/2ZfCjX0/tailwindcss.png" alt="" />

      <img className="h-[60px] w-[60px] rounded-full animate-spin absolute top-[-10%] left-[65%]" src="https://i.ibb.co/sW5JBYT/reactjs.png" alt="" />
      <img className="h-[50px] w-[50px] hidden lg:block rounded-full animate-spin absolute top-[6%] left-[90%]" src="https://i.ibb.co/g6D3GsT/nodejs.png" alt="" />

      <img className="h-[40px] w-[40px] rounded-full hover:animate-spin absolute -top-[9%] right-[10%]" src="https://i.ibb.co/VBJgmgv/javascript.png" alt="" />

      <img className="h-[30px] w-[30px] hidden lg:block  rounded-full hover:animate-spin absolute -top-[10%] left-[15%]" src="https://i.ibb.co/wJDDjpc/expressjs.png" alt="" />

      <img className="h-[50px] w-[50px] hidden lg:block rounded-full hover:animate-spin absolute -top-[7%] left-[35%]" src="https://i.ibb.co/WGVjtbX/mongodb.png" alt="" />
      <img className="h-[55px] w-[55px] hidden lg:block rounded-full hover:animate-spin absolute top-[10%] left-[27%]" src="https://i.ibb.co/n7KcsPK/github.png" alt="" />
     
      <img className="h-[30px] w-[30px] hidden lg:block  rounded-full hover:animate-spin absolute top-[20%] left-[85%]" src="https://i.ibb.co/gJNnM1S/git.png" alt="" />

      <img className="h-[30px] w-[30px] hidden lg:block  rounded-full hover:animate-spin absolute top-[40%] left-[75%]" src="https://i.ibb.co/sQ6mHJw/figma.png" alt="" />
      <img className="h-[30px] w-[30px] hidden lg:block  rounded-full hover:animate-spin absolute top-[30%] left-[5%]" src="https://i.ibb.co/Zd51cmf/npm.png" alt="" />

      <img className="h-[30px] w-[30px] hidden lg:block  rounded-full hover:animate-spin absolute top-[40%] left-[25%]" src="https://i.ibb.co/mG9Psfn/pixso.png" alt="" />

      <img className="h-[30px] w-[30px] hidden lg:block  rounded-full hover:animate-spin absolute top-[40%] left-[85%]" src="https://i.ibb.co/wpkXMh2/adobe-photoshop.png" alt="" />

      {/* </div> */}
    </div>
  );
}
