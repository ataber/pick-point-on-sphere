var pickPoint = require('./index');
var regl = require('regl')()
var mat4 = require('gl-mat4')
var camera = require('regl-camera')(regl, {
  center: [0, 0, 0],
  theta: Math.PI / 2,
  distance: 4
})

var points = pickPoint(10000);
console.log(points)

var drawPoints = regl({
  vert: `
  precision mediump float;
  attribute vec3 position;
  uniform mat4 projection;
  uniform mat4 view;
  void main() {
    gl_PointSize = 4.0;
    gl_Position = projection * view * vec4(position, 1.0);
  }
  `
  , frag: `
  precision mediump float;
  void main() {
    gl_FragColor = vec4(vec3(0.25), 1.0);
  }
  `,
  attributes: {
    position: points
  },
  count: points.length,
  primitive: 'points'
})

regl.frame(() => {
  regl.clear({
    color: [1, 1, 1, 1],
    depth: 1
  })
  camera(() => {
    drawPoints({
      view: mat4.create()
    })
  })
})
