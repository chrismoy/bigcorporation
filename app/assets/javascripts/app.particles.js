App.Particles = {
  set: function( tag ) {

    particlesJS(tag, {
      "particles": {
        "number": {
          "value": 100,
          "density": {
            "enable": true,
            "value_area": 1000
          }
        },
        "color": {
          "value": "#009ACD"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#FFFFFF"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "src": "img/github.svg",
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.67,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 2,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 200,
          "color": "#009ACD",
          "opacity": 0.67,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 0.75,
          "direction": "right",
          "random": false,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": false,
            "mode": "grab"
          },
          "onclick": {
            "enable": false,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
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
    });
  }
}

// $(document).on('ready', function() {
//   if ($("#home").length) {
//     App.Particles.set( "home" );
//   }
// });

// $(document).on('page:load', function() {
//   if ($("#home").length) {
//     App.Particles.set( "home" );
//   }
// });
