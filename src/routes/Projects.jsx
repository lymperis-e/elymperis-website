import ProjectItem from '../components/Projects/ProjectItem'

import TerriaMock from "/img/projects/terria_mock.png"
import GeeMock from "/img/projects/gee_mock.png"

function Projects() {


    document.body.style.backgroundColor = "antiquewhite";


    return (
        <>
            <div id="project-container">


                <h1
                    style={{
                        borderBottom: "1px solid rgba(0, 0, 0, 0.47)",
                        marginBottom: "8px",
                        marginTop: "200px"
                    }}
                >
                    &lt;/&gt; FEATURED PROJECTS

                </h1>

                <ProjectItem title="OpenGreekGeodata" mockup={TerriaMock} descr="A one-stop-shop for greek geodata sources, based on TerriaJS" link="http://data.elymperis.com"/>
                <ProjectItem title="GEE Django" mockup={GeeMock} descr="" link="http://earth.elymperis.com"/>


            </div>


        </>
    )
}

export default Projects