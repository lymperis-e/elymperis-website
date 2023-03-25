import { useEffect } from 'react'
import ProjectItem from '../components/Projects/ProjectItem'

import TerriaMock from "/img/projects/terria_mock.webp"
import GeeMock from "/img/projects/gee_mock.webp"
import FrostMock from "/img/projects/frost_mock.webp"
import WatershedPlugin from "/img/projects/watershed_toolbox.webp"

function Projects() {

    // Switch to monochrome-bg on component mount
    useEffect(() => {
        document.querySelector('#project-container').style.backgroundColor = '#fffef5'
    })

    return (
        <>
            <div id="project-container">


                <h1 className="section-title funky">
                    &lt;/&gt; FEATURED PROJECTS
                </h1>

                <ProjectItem title="OpenGreekGeodata"
                    mockup={TerriaMock}
                    descr="A one-stop-shop for greek geodata sources. This project unifies a multitude of government & research-funded sources of geodata related to Greece, and serving them through a lightly customized version of the amazing TerriaJS SDI Portal."
                    link="http://data.elymperis.com"
                    source_code={false} />

                <ProjectItem title="Frost Alerts"
                    mockup={FrostMock}
                    descr="Alpha version of my current professional project. A frost alerting system for the Ministry of Agriculture of Greece. All rights belong to Geospatial Enabling Technologies and the Ministry of Agriculture"
                    link="http://frost.minagric.gr"
                    source_code={false} />


                <ProjectItem title="Earth Engine App"
                    mockup={GeeMock}
                    descr="A Proof-Of-Concept application. It enables the calculation of some simple indices from Landsat-8 imagery, by calling Google Earth Engine in the backend. It was developed as a curricular project for a course at the National Technical University of Athens. "
                    link="http://earth.elymperis.com"
                    source_code={false} />

                <ProjectItem title="Watershed Analysis Toolbox"
                    mockup={WatershedPlugin}
                    descr="A QGIS plugin to automate a great deal of processes required for hydrological analysis, as they are required by Greek law. It includes 4 main modules which perform several tasks, from watershed and drainage delineation to Curve Number estimation and ICN curve parameters generation."
                    link="https://plugins.qgis.org/plugins/geomelwatershed-master/"
                    source_code={false} />


            </div>


        </>
    )
}

export default Projects