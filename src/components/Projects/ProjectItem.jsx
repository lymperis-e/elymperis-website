import { WindowMockup } from "react-daisyui";
import GithubButton from "../Custom/GithubButton";
import { useEffect } from "react";

function ProjectItem(props) {

  const tags = props.tags ? props.tags.map(tag =>
    <h4 className="badge badge-neutral badge-outline mx-1 my-1">
      {tag}
    </h4>
  ) : null

  return (
    <>
      <div className="hero min-h-screen border-base-300">
        <div className="hero-content flex-col lg:flex-row">
          {props.mockup ? (
            <WindowMockup className="mockup-window border border-primary shadow-2xl">
              <img
                src={props.img}
                className="p-0 m-3 max-w-viewport md:max-w-2xl rounded-lg"
              ></img>
            </WindowMockup>
          ) : (
            <img
              src={props.img}
              className="max-w-viewport rounded-lg shadow-2xl md:max-w-2xl"
            ></img>
          )}

          <div>

            <h1 className="text-5xl font-bold max-w-xs">{props.title}</h1>
            <div className="flex flex-row flex-wrap mt-3 mb-0">
              {tags}
            </div>


            <div className="bg-secondary bg-opacity-10 px-5 py-2 my-3 rounded-md">

              <p className="py-6 max-w-sm ">{props.descr}</p>

              <div className="flex items-center">
                <a className="btn btn-primary btn-sm btn-outline" href={props.link} target="_blank">
                  More
                </a>

                {props.source_code && (
                  <GithubButton source_code={props.source_code} className="ml-auto"></GithubButton>
                )}
              </div>

            </div>






          </div>



        </div>
      </div>
      <hr className="w-10/12 h-px my-8 bg-primary border-1 border-primary dark:bg-base-200" />

    </>
  );
}

export default ProjectItem;