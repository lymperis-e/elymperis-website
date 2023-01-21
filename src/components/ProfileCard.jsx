import Social from './Social'
import ProfileImage from '/img/profile.jpg'
import './ProfileCard.css'

import { useEffect } from 'react'

function Profile() {

    useEffect(()=>{
        document.querySelector('#profile-card').style.opacity = 1
    })

    return (
        <div id="profile-card">
            <img id="profileImg" className="funky rounded-circle " src={ProfileImage} alt="profile picture" width="120" height="120"></img>

            <div id="title-pane">
                <h1 className="funky">Efstathios Lymperis</h1>
                <h3>Developer <a className="swipe-link" href="https://www.getmap.eu" target="_blank">@Geospatial Enabling Technologies</a></h3>
                <h4 className="typewriter" style={{fontFamily: "'Poiret One', cursive", color: "black", maxWidth: '95vw'}}>GIS Engineer </h4>
                <h4 className="typewriter" style={{fontFamily: "'Poiret One', cursive", color: "black", maxWidth: '95vw'}}>Student of Geoinformatics, MSc</h4>
                <h5 style={{color: '#c16b29', fontFamily:`'Poiret One', cursive`, marginTop:'1rem', fontSize:'larger' }}>📍 Thessaloniki/Athens, GR</h5>
            </div>

            <Social/>

        </div>
    )
}


export default Profile