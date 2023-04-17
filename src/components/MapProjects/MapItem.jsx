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

  const title = props.title ? props.title : "";
  const subtitle = props.subtitle ? <h3 className="">{props.subtitle}</h3> : "";

  return (
    <>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row">
          <a href={props.link} target="_blank">
            <img
              src={props.mockup}
              className="bw-img max-w-m rounded-lg shadow-2xl"
              height="400"
              /*onMouseEnter={changeBackground}
              onMouseLeave={restoreBackground}*/
            ></img>
          </a>

          <div>
            <h1 className=" max-w-xs">{props.title}</h1>
            {subtitle}
            <p className="py-6 max-w-sm">{props.descr}</p>

            <div className="flex items-center">
              <a className="btn btn-primary btn-outline" href={props.link} target="_blank">
                More
              </a>

            </div>
          </div>
        </div>
      </div>
      <hr className="w-12/12 h-px my-8 bg-primary border-1 border-primary dark:bg-base-200" />


    </>
  );
}

export default MapItem;
