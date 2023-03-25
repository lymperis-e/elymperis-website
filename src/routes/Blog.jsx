import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../components/Blog/BlogPost";

function Blog() {

  // Switch to monochrome-bg on component mount
  useEffect(() => {
    document.querySelector("#blog-container").style.backgroundColor =
      "#fffef5";
  });

  const { slug } = useParams();

  return (
    <div id="blog-container">
      <BlogPost post_md={slug} />
    </div>
  );
}

export default Blog;
