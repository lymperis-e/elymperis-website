import "./ProjectItem.css";
import { WindowMockup } from "react-daisyui";
import GithubButton from "../Custom/GithubButton";

function ProjectItem(props) {
  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          {props.mockup ? (
            <WindowMockup className="mockup-window border shadow-2xl    ">
              <img
                src={props.img}
                className="p-2 max-w-viewport md:max-w-2xl"
              ></img>
            </WindowMockup>
          ) : (
            <img
                src={props.img}
                className="max-w-viewport rounded-lg shadow-2xl md:max-w-2xl"
              ></img>
          )}

          <div>
            <h1 className="text-5xl font-bold">{props.title}</h1>
            <p className="py-6 max-w-sm">{props.descr}</p>

            <div className="flex items-center">
              <a className="btn btn-primary" href={props.link} target="_blank">
                More
              </a>

              {props.source_code && (
                <GithubButton source_code={props.source_code}></GithubButton>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectItem;
