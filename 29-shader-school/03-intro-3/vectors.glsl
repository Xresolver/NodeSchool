precision highp float; 

vec2 func(vec2 a, vec2 b) {

  //TODO: Implement the exercise here

  return normalize(length(b) * a + length(a) * b);
}

//Do not change this line
#pragma glslify: export(func)