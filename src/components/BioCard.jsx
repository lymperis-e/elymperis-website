
import './BioCard.css'
import TunnelImage from '/img/tunnel.jpg'
import CVpdf from '/CV.pdf'

import { useEffect } from 'react'


function BioCard() {


  return (

    <div id="bio-container">
      <div id="bio-card">

        <img id="bio-img" className="rounded-circle" src={TunnelImage} alt="Field trip, undeground works in Pindos, near Metsovo, GR" height="200" width="200" />

        <p className="lead">Born in Thessaloniki, in 1997. Always keen on the study of the natural world, as well
          as informatics & computer programming. Studied <span className="text-warning">Geology and Earth
            Sciences</span> at the Aristotle University of Thessaloniki, graduating with honours (GPA
          8.63/10.00). Actively involved in research on <a
            href="https://www.researchgate.net/publication/340116525_A_Novel_Semi-Automated_Approach_for_Rockfall_Hazard_Assessment_from_3D_Point_Clouds_A_Post-Failure_Case_on_the_Island_of_Lesvos_Greece"
            target="_blank"><span className="text-success">remote sensing and
              automation</span></a> for rockfall modeling, monitoring and hazard assessment. <br></br> Programming
          enthusiast, FOSS advocate and active developer, currently working as a GIS engineer and software
          developer for a surveying engineering firm in Thessaloniki.
        </p>

      </div>

      <a id="download-cv-btn" href={CVpdf} target="_blank" >
        <i className="fa-solid fa-file-arrow-down"></i>
        Curriculum Vitae
      </a>
    </div>

  )
}


export default BioCard