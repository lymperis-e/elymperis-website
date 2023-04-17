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

    return (
        <>
            <div className='mx-3'>

                <div>
                    <h1 className="section-title funky font-bold text-center md:text-left">
                        CARTOGRAPHIC GALLERY
                    </h1>

                    <p>
                        I make a <h3 className="funky" style={{ display: 'inline' }}>lot</h3> of maps. If you 'd like to see a full resolution version don't hesitate to contact me (<a href="mailto:geo.elymperis@gmail.com" role="button">geo.elymperis@gmail.com</a>). <br></br>
                        P.S.: I currently do not have them online, as most of them are at the 300Mb  league
                    </p>
                </div>



                <MapItem title="Athens" mockup={AthensHistoric} subtitle="Historic Downtown" descr="" link="/maps/athens_downtown.webp" />
                <MapItem title="Mesolongi, Negative Map" mockup={Mesolongi} descr="" link="/maps/mesolongi.webp" />
                <MapItem title="Patraic Gulf" mockup={Patraic} subtitle="Sentinel2 + SRTM" descr="" link="/maps/patraic.webp" />
                <MapItem title="Olympus/Ossa" mockup={Olympus} subtitle="Topographic Map" descr="" link="/maps/olympus.webp" />
                <MapItem title="Street Lights" mockup={Trikala} subtitle="of Trikala city, Thessaly" descr="" link="/maps/trikala.webp" />
                <MapItem title="Athens" mockup={AthensTopo} subtitle="Topographic & Street Map" descr="" link="/maps/athens_topo.webp" />
                <MapItem title="Ioannina" mockup={Ioannina} subtitle=" Topographic Map, rendered in Blender" descr="" link="/maps/ioannina.webp" />






            </div>


        </>
    )
}

export default Maps