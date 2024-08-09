vec3 reflectPoint(vec3 p, vec3 n) {
  return p - 2.0 * dot(n, p) * n / dot(n, n);
}

highp mat4 reflection(highp vec3 n) {

  //TODO: Return a matrix that reflects all points about the plane passing through the origin with normal n
  mat3 unitMatrix = mat3(1, 0, 0,
                         0, 1, 0,
                         0, 0, 1);
  
  mat3 n_by_nT = mat3((n.x * n.x), (n.x * n.y), (n.x * n.z),
                    (n.y * n.x), (n.y * n.y), (n.y * n.z),
                    (n.z * n.x), (n.z * n.y), (n.z * n.z));

  mat3 result = unitMatrix - (2.0 * n_by_nT / ((n.x * n.x) + (n.y * n.y) + (n.z * n.z)));


  return mat4(vec4(result[0], 0), vec4(result[1], 0), vec4(result[2], 0), vec4(0,0,0,1));
}

#pragma glslify: export(reflection)
