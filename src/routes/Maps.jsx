import { useEffect } from 'react'
import MapItem from '../components/MapProjects/MapItem'


import AthensHistoric from "/maps/athens_downtown.webp"
import Mesolongi from "/maps/mesolongi.webp"
import Trikala from "/maps/trikala.webp"
import AthensTopo from "/maps/athens_topo.webp"
import Patraic from "/maps/patraic.webp"
import Ioannina from "/maps/ioannina.webp"
import Olympus from "/maps/olympus.webp"



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


                <MapItem title="Athens Historic Downtown" mockup={AthensHistoric} descr="" link="/maps/athens_downtown.webp" />
                <MapItem title="Mesolongi, Negative Map" mockup={Mesolongi} descr="" link="/maps/mesolongi.webp" />
                <MapItem title="Patraic Gulf, Sentinel2 + SRTM" mockup={Patraic} descr="" link="/maps/patraic.webp" />
                <MapItem title="Topographic Map of Olympus/Ossa" mockup={Olympus} descr="" link="/maps/olympus.webp" />
                <MapItem title="Street Lights of Trikala" mockup={Trikala} descr="" link="/maps/trikala.webp" />
                <MapItem title="Topographic & Street Map of Athens" mockup={AthensTopo} descr="" link="/maps/athens_topo.webp" />
                <MapItem title="Ioannina Topographic Map, rendered in Blender" mockup={Ioannina} descr="" link="/maps/ioannina.webp" />
                





            </div>


        </>
    )
}

export default Maps