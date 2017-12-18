var vec3 = require('gl-vec3');

module.exports = function(numberOfPoints) {
  var output = [];
  var scratch = [0, 0, 0];
  for (var i = 0; i < numberOfPoints; i++) {
    var x = (Math.random() - 0.5) * 2;
    var y = (Math.random() - 0.5) * 2;
    var z = (Math.random() - 0.5) * 2;
    var point = [x, y, z];
    vec3.normalize(point, point);
    output.push(point);
  }

  return output;
}
