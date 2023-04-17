import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import BlogPost from "../components/Blog/BlogPost";

function Blog() {
  const { slug } = useParams();

  return (
    <div  className="mt-20 mb-20 mx-5">
      <BlogPost post_md={slug} />
    </div>
  );
}

export default Blog;
