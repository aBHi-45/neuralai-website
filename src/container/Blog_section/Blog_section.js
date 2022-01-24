import React from "react";
import Blog from "../../common/Blog/Blog";
import Line from "../../common/Line/Line";
import classes from "./Blog_section.module.css";

function Blog_section(props) {
  return (
    <div className={classes.blog}>
      <Blog />
      <Line />
      <Blog />
      <Line />
      <Blog />
      <Line />
    </div>
  );
}

export default Blog_section;
