
import './BioCard.css'
import TunnelImage from '/img/tunnel.webp'
import CVpdf from '/CV.pdf'
import ProfileImage from '/img/profile.webp'

import { useEffect } from 'react'


function BioCard() {


  return (

    <div className='mx-10 md:mx-52'>

      <div className='flex flex-row items-center w-full mb-5'>
        <img className="rounded-full border border-primary w-24 md:w-32" src={ProfileImage} alt="profile picture" />
        <div class="h-0.5 bg-primary w-full"></div>
        <a href={CVpdf} target="_blank" className="btn btn-primary btn-outline ml-auto rounded-full">
          <i className="fa-solid fa-file-arrow-down"></i>
          CV
        </a>
      </div>

      <div className="prose prose-md" >

        <p>Born in Thessaloniki, in 1997. Always keen on the study of the natural world, as well
          as informatics & computer programming. Studied <span className="text-primary">Geology and Earth
            Sciences</span> at the Aristotle University of Thessaloniki, graduating with honours (GPA
          8.63/10.00). Actively involved in research on <a
            href="https://www.researchgate.net/publication/340116525_A_Novel_Semi-Automated_Approach_for_Rockfall_Hazard_Assessment_from_3D_Point_Clouds_A_Post-Failure_Case_on_the_Island_of_Lesvos_Greece"
            target="_blank"><span className="text-primary">remote sensing and
              automation</span></a> for rockfall modeling, monitoring and hazard assessment. <br></br> Programming
          enthusiast, FOSS advocate and active developer.

          For the past three years I have been Working as a geospatial professional, developing desktop & web solutions using open source tools, data pipelines and automatic processing workflows. I also do some geospatial analysis of my own
          and I <b>love</b> making maps (static & dynamic).

          I am currently a full-time developer at <a href="https:www.getmap.eu" target="_blank">Geospatial Enabling Technologies</a>
        </p>

      </div>




    </div>

  )
}


export default BioCard