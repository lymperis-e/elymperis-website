
import './BioCard.css'
import TunnelImage from '/img/tunnel.webp'
import CVpdf from '/CV.pdf'

import { useEffect } from 'react'


function BioCard() {


  return (

    <div id="bio-container" className="mt-28 mb-28 md:mt-auto mb-auto">
      <div className="prose prose-md mx-10 md:mx-52" id="">

        <img id="bio-img" className="rounded" src={TunnelImage} alt="Field trip, undeground works in Pindos, near Metsovo, GR" height="200" width="200" />

        <p>Born in Thessaloniki, in 1997. Always keen on the study of the natural world, as well
          as informatics & computer programming. Studied <span className="text-warning">Geology and Earth
            Sciences</span> at the Aristotle University of Thessaloniki, graduating with honours (GPA
          8.63/10.00). Actively involved in research on <a
            href="https://www.researchgate.net/publication/340116525_A_Novel_Semi-Automated_Approach_for_Rockfall_Hazard_Assessment_from_3D_Point_Clouds_A_Post-Failure_Case_on_the_Island_of_Lesvos_Greece"
            target="_blank"><span className="text-success">remote sensing and
              automation</span></a> for rockfall modeling, monitoring and hazard assessment. <br></br> Programming
          enthusiast, FOSS advocate and active developer.

          For the past three years I have been Working as a geospatial professional, developing desktop & web solutions using open source tools, data pipelines and automatic processing workflows. I also do some geospatial analysis of my own
          and I <b>love</b> making maps (static & dynamic). 

          I am currently a full-time developer at <a href="https:www.getmap.eu" target="_blank">Geospatial Enabling Technologies</a>
        </p>

      </div>

      <a  href={CVpdf} target="_blank" className="btn btn-secondary mt-5">
        <i className="fa-solid fa-file-arrow-down"></i>
        Curriculum Vitae
      </a>
    </div>

  )
}


export default BioCard