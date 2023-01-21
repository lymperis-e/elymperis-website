
import TerriaMock from "/img/projects/terria_mock.png"
import GitHubLogo from "/img/github_white.png"

import './ProjectItem.css'

function ProjectItem() {

    
    return (

        <>
            <div className="project-item">
               

                    <a href="http://data.elymperis.com" target="_blank">

                        <img src={TerriaMock}
                            className="featurette-image mx-auto rounded"
                            height="400"></img>
                    </a>

            
                
                    <div className="project-label">

                        <a className="swipe-link" href="http://data.elymperis.com" target="_blank">
                            <h2 style={{
                                fontFamily: "'Raleway', sans-serif", fontSize: "1.5rem !important"
                            }}>OpenGreekGeodata</h2>
                        </a>
                        <p>
                            A one-stop-shop for greek geodata sources, based on TerriaJS
                        </p>

                        <div className="row">
                            <a href="https://github.com/lymperis-e" target="_blank" role="button" style={{margin:"auto"}}>
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



