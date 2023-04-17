import { useEffect } from "react";
import ProjectItem from "../components/Projects/ProjectItem";

import TerriaMock from "/img/projects/opengreekdata.webp";
import GreekDataQMock from "/img/projects/greek_data.webp";
import GeeMock from "/img/projects/gee_mock.webp";
import FrostMock from "/img/projects/frost.webp";
import WatershedPlugin from "/img/projects/watershed.webp";
import InAthensMock from "/img/projects/stories-athens.webp"
import RemoteDbMock from "/img/projects/remote_db.webp"
function Projects() {


  return (
    <>
      <div id="prose mx-3" className="bg-base-100">
        <h1 className="section-title funky font-bold text-center md:text-left">&lt;/&gt; FEATURED PROJECTS</h1>

        <ProjectItem
          title="Open Greek Geodata"
          img={TerriaMock}
          mockup={true}
          descr="A one-stop-shop for greek geodata sources. This project unifies a multitude of government & research-funded sources of geodata related to Greece, and serving them through a lightly customized version of the amazing TerriaJS SDI Portal."
          link="http://data.elymperis.com"
          source_code={"https://github.com/lymperis-e/greek-open-data-portal"}
          tags={["TerriaJS", "React", "NodeJS"]}
        />

        <ProjectItem
          title="in-Athens Storymaps"
          img={InAthensMock}
          mockup={true}
          descr="A storymap app built from scratch with Vite, MapLibre & PMTiles, for the in-Athens project. Developed for Geospatial Enabling Technologies, all rights reserved"
          link="/blog/in_athens"
          tags={["Vite", "MapLibre", "PMTiles"]}
        />

        <ProjectItem
          title="GreekData QGIS Plugin"
          img={GreekDataQMock}
          descr="Integrate open geodata from public authorities of Greece into QGIS"
          link="https://plugins.qgis.org/plugins/grdata/"
          source_code={"https://github.com/lymperis-e/Greek-Data-QGIS-Plugin"}
          tags={["QGIS", "Python", "PyQt5","OGC Web Services"]}
        />

        <ProjectItem
          title="Frost Alerts"
          img={FrostMock}
          mockup={true}
          descr="Alpha version of my current professional project. A frost alerting system for the Ministry of Agriculture of Greece. All rights belong to Geospatial Enabling Technologies and the Ministry of Agriculture"
          link="http://frost.minagric.gr"
          source_code={false}
          tags={["PostgeSQL", "Python", "GDAL", "Vector Tiles", "Meteo", "GRIB"]}
        />

        <ProjectItem
          title="QGIS Remote DB Plugin"
          img={RemoteDbMock}
          descr="A simple plugin to manage SSH connections to remote database servers from QGIS."
          link="/blog/remote_db"
          source_code={"https://github.com/lymperis-e/qgis_remote_db_plugin"}
          tags={["QGIS", "Python", "PyQt5"]}
        />

        <ProjectItem
          title="Earth Engine App"
          mockup={false}
          img={GeeMock}
          descr="A Proof-Of-Concept application. It enables the calculation of some simple indices from Landsat-8 imagery, by calling Google Earth Engine in the backend. It was developed as a curricular project for a course at the National Technical University of Athens. "
          link="http://earth.elymperis.com"
          source_code={false}
          tags={["Google Earth Engine", "Django", "LeafletJS"]}
        />

        <ProjectItem
          title="Watershed Analysis Toolbox"
          img={WatershedPlugin}
          descr="A QGIS plugin to automate a great deal of processes required for hydrological analysis, as they are required by Greek law. It includes 4 main modules which perform several tasks, from watershed and drainage delineation to Curve Number estimation and ICN curve parameters generation."
          link="https://plugins.qgis.org/plugins/geomelwatershed-master/"
          source_code={
            "https://github.com/lymperis-e/Geomeletitiki-Watershed-Analysis-Toolbox---QGIS-Plugin-"
          }
          tags={["QGIS", "Python", "PyQt5", "SAGA GIS", "Hydrology", "Optimiser"]}
        />
      </div>
    </>
  );
}

export default Projects;
