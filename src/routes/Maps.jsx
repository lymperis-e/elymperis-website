import { useEffect } from 'react'
import ProjectItem from '../components/Projects/ProjectItem'


import AthensHistoric from "/maps/athens_downtown.jpg"
import Mesolongi from "/maps/mesolongi.jpg"
import Trikala from "/maps/trikala.jpg"
import AthensTopo from "/maps/athens_topo.jpg"
import Patraic from "/maps/patraic.jpg"
import Ioannina from "/maps/ioannina.png"
import Olympus from "/maps/olympus.jpg"



function Maps() {


    useEffect(() => {
        document.querySelector('#project-container').style.backgroundColor = '#fffef5'
    })


    return (
        <>
            <div id="project-container">


                <h1 className="section-title funky">
                    CARTOGRAPHIC GALLERY
                </h1>

                <p>
                    I make a <h3 className="funky" style={{ display: 'inline' }}>lot</h3> of maps. If you 'd like to see a full resolution version don't hesitate to contact me (<a href="mailto:geo.elymperis@gmail.com" role="button">geo.elymperis@gmail.com</a>). <br></br>
                    P.S.: I currently do not have them online, as most of them are at the 300Mb  league
                </p>


                <ProjectItem title="Athens Historic Downtown" mockup={AthensHistoric} descr="" link="/maps/athens_downtown.jpg" />
                <ProjectItem title="Mesolongi, Negative Map" mockup={Mesolongi} descr="" link="/maps/mesolongi.jpg" />
                <ProjectItem title="Patraic Gulf, Sentinel2 + SRTM" mockup={Patraic} descr="" link="/maps/patraic.jpg" />
                <ProjectItem title="Topographic Map of Olympus/Ossa" mockup={Olympus} descr="" link="/maps/olympus.jpg" />
                <ProjectItem title="Street Lights of Trikala" mockup={Trikala} descr="" link="/maps/trikala.jpg" />
                <ProjectItem title="Topographic & Street Map of Athens" mockup={AthensTopo} descr="" link="/maps/athens_topo.jpg" />
                <ProjectItem title="Ioannina Topographic Map, rendered in Blender" mockup={Ioannina} descr="" link="/maps/ioannina.png" />
                





            </div>


        </>
    )
}

export default Maps