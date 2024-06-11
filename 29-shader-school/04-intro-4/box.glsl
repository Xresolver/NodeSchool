bool inBox(highp vec2 lo, highp vec2 hi, highp vec2 p) {

  //Test if the point p is inside the box bounded by [lo, hi]
  bvec2 loGThi = greaterThan(lo, hi);
  bvec2 loGTp = greaterThan(lo, p);
  bvec2 hiGTp = greaterThan(hi, p);

  if(loGThi.x && loGTp.x && !hiGTp.x)
  {
    if(loGThi.y && loGTp.y && !hiGTp.y)
      return true;
    else if (!loGThi.y && !loGTp.y && hiGTp.y)
      return true;
    else
      return false;
  }
  else if(!loGThi.x && !loGTp.x && hiGTp.x)
  {
    if(loGThi.y && loGTp.y && !hiGTp.y)
      return true;
    else if (!loGThi.y && !loGTp.y && hiGTp.y)
      return true;
    else
      return false;
  }
  else
    return false;

}


//Do not change this line or the name of the above function
#pragma glslify: export(inBox)
