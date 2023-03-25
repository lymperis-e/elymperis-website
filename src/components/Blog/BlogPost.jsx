import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useEffect, useState } from "react";

import "./Blog.css";

function BlogPost(params) {
  const [markdown, setMarkdown] = useState("");
    const [info, setInfo] = useState("");

  useEffect(() => {
    async function fetchMarkdown() {
      const response = await fetch(`/posts/${params.post_md}.md`);
      if (!response.ok) {
        setMarkdown("This page does not exist :(")
        //throw new Error("Post not found");
      }
      const data = await response.text();
      setMarkdown(data);
    }

    fetchMarkdown();
  }, []);

  return (
    <>
    <a href={info.repo_url}></a>
    <div>
      {markdown ? (
        <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
      ) : (
        <p>Loading...</p>
      )}
    </div>    
    </>

  );
}
export default BlogPost;
