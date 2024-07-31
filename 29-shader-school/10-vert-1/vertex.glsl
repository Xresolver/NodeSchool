precision highp float;

uniform float theta;

attribute vec2 position;

void main() {

  //TODO: rotate position by theta radians about the origin
  float cosa = position.x/length(position);
  float sina = position.y/length(position);

  float x = length(position) * ((cos(theta) * cosa) - (sin(theta) * sina));
  float y = length(position) * ((sin(theta) * cosa) + (cos(theta) * sina));
  
  gl_Position = vec4(x, y, 0, 1.0);
}
