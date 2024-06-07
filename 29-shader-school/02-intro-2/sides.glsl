precision highp float; 

void sideLengths(
  float hypotenuse, 
  float angleInDegrees, 
  out float opposite, 
  out float adjacent) 
{
  //TODO: Calculate side lengths here
  float angleInRadians = radians(angleInDegrees);

  adjacent = hypotenuse * cos(angleInRadians);
  opposite = hypotenuse * sin(angleInRadians);

}

//Do not change this line
#pragma glslify: export(sideLengths)