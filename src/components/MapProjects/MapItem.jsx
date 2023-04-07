import "./MapItem.css";
import GithubButton from "../Custom/GithubButton";

function MapItem(props) {
  function changeBackground(e) {
    document.querySelector("#project-container").style.backgroundColor =
      "rgb(123, 123, 121)";
  }
  function restoreBackground(e) {
    document.querySelector("#project-container").style.backgroundColor =
      "#fffef5";
  }

  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <a href={props.link} target="_blank">
            <img
              src={props.mockup}
              className="bw-img max-w-m rounded-lg shadow-2xl"
              height="400"
              onMouseEnter={changeBackground}
              onMouseLeave={restoreBackground}
            ></img>
          </a>

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

export default MapItem;
