export const particlesConfig = {
    particles: {
      number: { 
        value: 50,
        density: { enable: true, value_area: 1000 }
      },
      size: { value: 4 },
      shape: { 
        type: "polygon",
        polygon: { nb_sides: 5 }
      },
      move: {
        enable: true,
        speed: 2.6,
        direction: "top-right",
        out_mode: "out"
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        }
      },
      modes: {
        grab: { distance: 200 }
      }
    },
    retina_detect: true
}