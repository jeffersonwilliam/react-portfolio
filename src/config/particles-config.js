// const particlesConfig = {
//   autoPlay: true,
//   background: {
//     color: {
//       value: '#000000',
//     },
//     image: '',
//     position: '',
//     repeat: '',
//     size: '',
//     opacity: 1,
//   },
//   backgroundMask: {
//     composite: 'destination-out',
//     cover: {
//       color: {
//         value: '#fff',
//       },
//       opacity: 1,
//     },
//     enable: false,
//   },
//   fullScreen: {
//     enable: true,
//     zIndex: -1,
//   },
//   detectRetina: true,
//   duration: 0,
//   fpsLimit: 120,
//   interactivity: {
//     detectsOn: 'window',
//     events: {
//       onClick: {
//         enable: false,
//         mode: [],
//       },
//       onDiv: {
//         selectors: [],
//         enable: false,
//         mode: [],
//         type: 'circle',
//       },
//       onHover: {
//         enable: false,
//         mode: [],
//         parallax: {
//           enable: false,
//           force: 2,
//           smooth: 10,
//         },
//       },
//       resize: true,
//     },
//     modes: {
//       slow: {
//         factor: 3,
//         radius: 200,
//       },
//     },
//   },
//   manualParticles: [],
//   motion: {
//     disable: false,
//     reduce: {
//       factor: 4,
//       value: true,
//     },
//   },
//   particles: {
//     bounce: {
//       horizontal: {
//         random: {
//           enable: false,
//           minimumValue: 0.1,
//         },
//         value: 0,
//       },
//       vertical: {
//         random: {
//           enable: false,
//           minimumValue: 0.1,
//         },
//         value: 0,
//       },
//     },
//     collisions: {
//       bounce: {
//         horizontal: {
//           random: {
//             enable: false,
//             minimumValue: 0.1,
//           },
//           value: 1,
//         },
//         vertical: {
//           random: {
//             enable: false,
//             minimumValue: 0.1,
//           },
//           value: 1,
//         },
//       },
//       enable: false,
//       mode: 'bounce',
//       overlap: {
//         enable: true,
//         retries: 0,
//       },
//     },
//     color: {
//       value: ['#1E00FF', '#FF0061', '#E1FF00', '#00FF9E'],
//       animation: {
//         h: {
//           count: 0,
//           enable: true,
//           offset: 0,
//           speed: 30,
//           decay: 0,
//           sync: true,
//         },
//         s: {
//           count: 0,
//           enable: false,
//           offset: 0,
//           speed: 1,
//           decay: 0,
//           sync: true,
//         },
//         l: {
//           count: 0,
//           enable: false,
//           offset: 0,
//           speed: 1,
//           decay: 0,
//           sync: true,
//         },
//       },
//     },
//     destroy: {
//       mode: 'none',
//       split: {
//         count: 1,
//         factor: {
//           random: {
//             enable: false,
//             minimumValue: 0,
//           },
//           value: 3,
//         },
//         rate: {
//           random: {
//             enable: false,
//             minimumValue: 0,
//           },
//           value: {
//             min: 4,
//             max: 9,
//           },
//         },
//         sizeOffset: true,
//       },
//     },
//     groups: {},
//     move: {
//       angle: {
//         offset: 0,
//         value: 90,
//       },
//       attract: {
//         distance: 200,
//         enable: false,
//         rotate: {
//           x: 3000,
//           y: 3000,
//         },
//       },
//       center: {
//         x: 50,
//         y: 50,
//         radius: 0,
//       },
//       decay: 0.1,
//       distance: {},
//       direction: 'top',
//       drift: 0,
//       enable: true,
//       gravity: {
//         acceleration: 9.81,
//         enable: true,
//         inverse: false,
//         maxSpeed: 200,
//       },
//       path: {
//         clamp: true,
//         delay: {
//           random: {
//             enable: false,
//             minimumValue: 0,
//           },
//           value: 0,
//         },
//         enable: false,
//         options: {},
//       },
//       outModes: {
//         default: 'destroy',
//         bottom: 'bounce',
//         left: 'destroy',
//         right: 'destroy',
//         top: 'none',
//       },
//       random: false,
//       size: false,
//       speed: {
//         min: 50,
//         max: 150,
//       },
//       spin: {
//         acceleration: 0,
//         enable: false,
//       },
//       straight: false,
//       trail: {
//         enable: false,
//         length: 10,
//         fillColor: {
//           value: '#000000',
//         },
//       },
//       vibrate: false,
//       warp: false,
//     },
//     number: {
//       density: {
//         enable: false,
//         area: 800,
//         factor: 1000,
//       },
//       limit: 300,
//       value: 0,
//     },
//     opacity: {
//       random: {
//         enable: false,
//         minimumValue: 0.1,
//       },
//       value: 1,
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 0.3,
//         decay: 0,
//         sync: true,
//         destroy: 'min',
//         startValue: 'max',
//       },
//     },
//     reduceDuplicates: false,
//     rotate: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: {
//         min: 0,
//         max: 360,
//       },
//       animation: {
//         enable: true,
//         speed: 60,
//         decay: 0,
//         sync: false,
//       },
//       direction: 'random',
//       path: false,
//     },
//     shadow: {
//       blur: 0,
//       color: {
//         value: '#000',
//       },
//       enable: false,
//       offset: {
//         x: 0,
//         y: 0,
//       },
//     },
//     shape: {
//       options: {
//         polygon: [
//           {
//             sides: 5,
//           },
//           {
//             sides: 6,
//           },
//         ],
//         character: [
//           {
//             value: ['💩', '🤡', '🍀', '🍙'],
//           },
//         ],
//       },
//       type: [
//         'circle',
//         'square',
//         'polygon',
//         'character',
//         'character',
//         'character',
//       ],
//     },
//     size: {
//       random: {
//         enable: false,
//         minimumValue: 1,
//       },
//       value: 3,
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 5,
//         decay: 0,
//         sync: false,
//         destroy: 'none',
//         startValue: 'random',
//       },
//     },
//     stroke: {
//       width: 0,
//     },
//     zIndex: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: 0,
//       opacityRate: 1,
//       sizeRate: 1,
//       velocityRate: 1,
//     },
//     life: {
//       count: 0,
//       delay: {
//         random: {
//           enable: false,
//           minimumValue: 0,
//         },
//         value: 0,
//         sync: false,
//       },
//       duration: {
//         random: {
//           enable: false,
//           minimumValue: 0.0001,
//         },
//         value: 0,
//         sync: false,
//       },
//     },
//     roll: {
//       darken: {
//         enable: true,
//         value: 30,
//       },
//       enable: true,
//       enlighten: {
//         enable: true,
//         value: 30,
//       },
//       mode: 'vertical',
//       speed: {
//         min: 15,
//         max: 25,
//       },
//     },
//     tilt: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: {
//         min: 0,
//         max: 360,
//       },
//       animation: {
//         enable: true,
//         speed: 60,
//         decay: 0,
//         sync: false,
//       },
//       direction: 'random',
//       enable: true,
//     },
//     twinkle: {
//       lines: {
//         enable: false,
//         frequency: 0.05,
//         opacity: 1,
//       },
//       particles: {
//         enable: false,
//         frequency: 0.05,
//         opacity: 1,
//       },
//     },
//     wobble: {
//       distance: 30,
//       enable: true,
//       speed: {
//         angle: {
//           min: -15,
//           max: 15,
//         },
//         move: 10,
//       },
//     },
//     orbit: {
//       animation: {
//         count: 0,
//         enable: false,
//         speed: 1,
//         decay: 0,
//         sync: false,
//       },
//       enable: false,
//       opacity: 1,
//       rotation: {
//         random: {
//           enable: false,
//           minimumValue: 0,
//         },
//         value: 45,
//       },
//       width: 1,
//     },
//     links: {
//       blink: false,
//       color: {
//         value: '#fff',
//       },
//       consent: false,
//       distance: 100,
//       enable: false,
//       frequency: 1,
//       opacity: 1,
//       shadow: {
//         blur: 5,
//         color: {
//           value: '#000',
//         },
//         enable: false,
//       },
//       triangles: {
//         enable: false,
//         frequency: 1,
//       },
//       width: 1,
//       warp: false,
//     },
//     repulse: {
//       random: {
//         enable: false,
//         minimumValue: 0,
//       },
//       value: 0,
//       enabled: false,
//       distance: 1,
//       duration: 1,
//       factor: 1,
//       speed: 1,
//     },
//   },
//   pauseOnBlur: true,
//   pauseOnOutsideViewport: true,
//   responsive: [],
//   style: {},
//   themes: [],
//   zLayers: 100,
//   emitters: {
//     autoPlay: true,
//     fill: true,
//     life: {
//       wait: false,
//     },
//     rate: {
//       quantity: 10,
//       delay: 0.1,
//     },
//     shape: 'square',
//     startCount: 0,
//     size: {
//       mode: 'percent',
//       height: 0,
//       width: 0,
//     },
//     position: {
//       x: 50,
//       y: 100,
//     },
//   },
// };
// export default particlesConfig;
