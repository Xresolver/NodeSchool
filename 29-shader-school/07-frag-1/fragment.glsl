precision highp float;

#define CIRCLE_COLOR    vec4(1.0, 0.4313, 0.3411, 1.0)
#define OUTSIDE_COLOR   vec4(0.3804, 0.7647, 1.0, 1.0)

void main() 
{
  //TODO: Replace this with a function that draws a circle at (256.5,256.5) with radius 128
  vec2 center = vec2(256, 256);

  float dist = distance(gl_FragCoord.xy, center);

  if(dist < 128.0) 
    gl_FragColor = CIRCLE_COLOR;
  else 
    gl_FragColor = OUTSIDE_COLOR;
  
}