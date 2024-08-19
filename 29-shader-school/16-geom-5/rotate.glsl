highp mat4 rotation(highp vec3 n, highp float theta) {

  //TODO: Using Rodrigues' formula, find a matrix which performs a rotation about the axis n by theta radians

  return mat4((cos(theta) + (pow(n[0], 2.0) * (1.0 - cos(theta)))),             //x1
              ((n[2] * sin(theta)) + (n[0] * n[1] * (1.0 - cos(theta)))),       //x2
              ((n[0] * n[2] * (1.0 - cos(theta))) - (n[1] * sin(theta))),       //x3
              0,    
              ((n[0] * n[1] * (1.0 - cos(theta))) - (n[2] * sin(theta))),       //y1
              (cos(theta) + (pow(n[1], 2.0) * (1.0 - cos(theta)))),             //y2
              ((n[0] * sin(theta)) + (n[1] * n[2] * (1.0 - cos(theta)))),       //y3
              0,    
              ((n[1] * sin(theta)) + (n[0] * n[2] * (1.0 - cos(theta)))),       //z1
              ((n[1] * n[2] * (1.0 - cos(theta))) - (n[0] * sin(theta))),       //z2
              (cos(theta) + (pow(n[2], 2.0) * (1.0 - cos(theta)))),             //z3
              0,          
              0, 0, 0, 1);
}

#pragma glslify: export(rotation)