import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";

function BlogPost(params) {
  const [markdown, setMarkdown] = useState("");
  const [info, setInfo] = useState("");

  useEffect(() => {
    async function fetchMarkdown() {
      const response = await fetch(`/ntua/${params.post_md}.md`);
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
      <Helmet>
        <title>{info.title}</title>
        <meta name="description" content={info.description} />
        <meta name="keywords" content={info.keywords} />
        <meta property="og:title" content={info.title} />
        <meta property="og:description" content={info.description} />
        <meta property="og:image" content={info.image_url} />
      </Helmet>



      <div className="prose prose-md">
        <div className="">
            <a className="btn btn-ghost" href={`/ntua/${params.post_md}.md`}>
                ΛΗΨΗ
            </a>
        </div>
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
