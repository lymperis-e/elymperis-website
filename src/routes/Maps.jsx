import ProjectItem from '../components/Projects/ProjectItem'

import Mesolongi from "/maps/mesolongi.jpg"
import Trikala from "/maps/trikala.jpg"
import AthensTopo from "/maps/athens_topo.jpg"
import Patraic from "/maps/patraic.jpg"
import Ioannina from "/maps/ioannina.png"
import Olympus from "/maps/olympus.jpg"



function Maps() {


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
                    &lt;/&gt; CARTOGRAPHIC GALLERY

                </h1>

                <ProjectItem title="Mesolongi, Negative Map" mockup={Mesolongi} descr="" link="/maps/mesolongi.jpg"/>
                <ProjectItem title="Street Lights of Trikala" mockup={Trikala} descr="" link="/maps/trikala.jpg"/>
                <ProjectItem title="Topographic & Street Map of Athens" mockup={AthensTopo} descr="" link="/maps/athens_topo.jpg"/>
                <ProjectItem title="Patraic Gulf, Sentinel2 + SRTM" mockup={Patraic} descr="" link="/maps/patraic.jpg"/>
                <ProjectItem title="Ioannina Topographic Map, rendered in Blender" mockup={Ioannina} descr="" link="/maps/ioannina.png"/>
                <ProjectItem title="Topographic Map of Olympus/Ossa" mockup={Olympus} descr="" link="/maps/olympus.jpg"/>





            </div>


        </>
    )
}

export default Maps