bool inBox(highp vec2 lo, highp vec2 hi, highp vec2 p) {

  //Test if the point p is inside the box bounded by [lo, hi]
  bool lo_x_gt_hi_x = lo.x > hi.x;
  bool lo_y_gt_hi_y = lo.y > hi.x;
  bool lo_x_gt_p_x = lo.x > p.x;
  bool lo_y_gt_p_y = lo.y > p.y;
  bool hi_x_gt_p_x = hi.x > p.x;
  bool hi_y_gt_p_y = hi.y > p.y;

  if(lo_x_gt_hi_x && lo_x_gt_p_x && !hi_x_gt_p_x)
  {
    if(lo_y_gt_hi_y && lo_y_gt_p_y && !hi_y_gt_p_y)
      return true;
    else if (!lo_y_gt_hi_y && !lo_y_gt_p_y && hi_y_gt_p_y)
      return true;
    else
      return false;
  }
  else if(!lo_x_gt_hi_x && !lo_x_gt_p_x && hi_x_gt_p_x)
  {
    if(lo_y_gt_hi_y && lo_y_gt_p_y && !hi_y_gt_p_y)
      return true;
    else if (!lo_y_gt_hi_y && !lo_y_gt_p_y && hi_y_gt_p_y)
      return true;
    else
      return false;
  }
  else
    return false;

}


//Do not change this line or the name of the above function
#pragma glslify: export(inBox)
