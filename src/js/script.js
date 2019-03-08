import 'waypoints/lib/noframework.waypoints.min.js'



const sections = document.querySelectorAll('.section');

sections.forEach( section => {
  const waypoint = new Waypoint({
  element: section,
  handler: function() {
    section.classList.add('section--reached');
  },
  offset: '30%'
  })
});


