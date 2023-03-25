import Social from './Social'
import ProfileImage from '/img/profile.webp'
import './ProfileCard.css'

import { useEffect } from 'react'

function Profile() {

    useEffect(() => {
        document.querySelector('#profile-card').style.opacity = 1
    })

    return (
        <div id="profile-card">

            <div className="pane-head" id="head">
                <img id="profileImg" className="rounded-circle " src={ProfileImage} alt="profile picture" ></img>
                <h1 className="funky" style={{ marginLeft: 'auto', zIndex:1 }}>Efstathios Lymperis</h1>
            </div>

            <div id="title-pane">

                <h3>Software Engineer <a href="https://www.getmap.eu" target="_blank">@Geospatial Enabling Technologies</a></h3>
                <h3 style={{ fontFamily: "'Poiret One', cursive", color: "#004786 !important", maxWidth: '95vw' }}>MSc Geoinformatics </h3>

                <div className='pill-container'>
                    <h4 className="pill" style={{ fontFamily: "'Poiret One', cursive", color: "black" }}>Web Development</h4>
                    <h4 className="pill" style={{ fontFamily: "'Poiret One', cursive", color: "black" }}>Digital Map Design </h4>
                    <h4 className="pill" style={{ fontFamily: "'Poiret One', cursive", color: "black" }}>Data Analysis</h4>
                </div>

            </div>

            <div className="pane-head">
                <h5 className="typewriter" style={{ color: 'rgb(0, 0, 0)', fontFamily: `'Poiret One', cursive`, marginTop: '1rem' }}>📍 Thessaloniki & Athens, GR</h5>
                <Social />
            </div>


        </div>
    )
}


export default Profile