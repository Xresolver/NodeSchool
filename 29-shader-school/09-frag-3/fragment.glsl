precision highp float;

uniform sampler2D texture;
uniform vec2 screenSize;

void main() {
  vec2 coord = gl_FragCoord.xy / screenSize;

  //TODO: Swap red and blue color channels of image
  vec4 color = texture2D(texture, coord);
  vec4 swappedColor = vec4(color.z, color.y, color.x, color.w);

  gl_FragColor = swappedColor;
}
