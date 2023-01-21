
import GitHubLogo from "/img/github_white.png"

import './ProjectItem.css'

function ProjectItem(props) {

    function changeBackground(e) {
        document.querySelector('#project-container').style.backgroundColor = 'rgb(123, 123, 121)'
      }
    function restoreBackground(e) {
        document.querySelector('#project-container').style.backgroundColor = '#fffef5'
      }

    return (

        <>
            <div className="project-item">
               

                    <a href={props.link} target="_blank">

                        <img src={props.mockup}
                            className="bw-img"
                            height="400" onMouseEnter={changeBackground} onMouseLeave={restoreBackground} ></img>
                    </a>

            
                
                    <div className="project-label">

                        <a className="swipe-link" href={props.link} target="_blank" >
                            <h2 style={{
                                fontFamily: "'Raleway', sans-serif", fontSize: "1.5rem !important"
                            }}>{props.title}</h2>
                        </a>
                        <p>
                            {props.descr}
                        </p>

                        <div className="row">
                            <a href="https://github.com/lymperis-e" target="_blank" role="button" style={{margin:"auto"}} >
                                <img className="rounded-circle" src={GitHubLogo} alt="Let's connect on GitHub!"  
                                    style={{ opacity: "0.6" }}  /*onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0.6'"*/
                                    width="30" height="30" ></img>
                            </a>
                            <a href="https://github.com/lymperis-e" target="_blank" role="button" style={{ margin: "auto" }}>
                                <i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </a>
                        </div>
                    </div>
             


            </div>
        </>
    )
}


export default ProjectItem



