import React from "react";
import classes from "./Blog.module.css";

function Blog(props) {
  return (
    <div className={classes.blog_column}>
      <div className={classes.img}>
        <img
          className={classes.image}
          src="https://images.unsplash.com/photo-1593642634367-d91a135587b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80"
        />
      </div>
      <div className={classes.info}>
        <p className="2xl:text-4xl xl:text-3xl lg:text-2xl md:text-xl sm:text-md text-white font-light font-sans">
          Introducing the new Bison Studio Website
        </p>
        <div className={classes.bottom}>
          <p className={classes.read}>Read More &#8599;</p>
          <p className={classes.date}>07.12.2021</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
