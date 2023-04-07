import React from "react";
import GitHubLogo from "/img/github_dark.webp";

function GithubButton(props) {
  return (
    <div className="row">
      <a
        href={props.source_code}
        target="_blank"
        role="button"
        style={{ margin: "auto" }}
      >
        <img
          className="opacity-60 hover:opacity-100 transition duration-500 ease-in-out"
          src={GitHubLogo}
          width="50"
          height="50"
        ></img>
      </a>
    </div>
  );
}

export default GithubButton;
