import Social from './Social'
import ProfileImage from '/img/profile.jpg'
import './ProfileCard.css'

function Profile() {


    return (
        <div id="profile-card">
            <img id="profileImg" className="funky rounded-circle " src={ProfileImage} alt="profile picture" width="120" height="120"></img>

            <div id="title-pane">
                <h1 className="funky">Efstathios Lymperis</h1>
                <h4 className="typewriter" style={{fontFamily: "'Poiret One', cursive", color: "black", maxWidth: '200px'}}>GIS Engineer / Student of Geoinformatics, MSc</h4>
                <h5 style={{color: '#c16b29', fontFamily:`'Poiret One', cursive`, marginTop:'1rem', fontSize:'larger' }}>📍 Thessaloniki, GR</h5>
            </div>

            <Social/>

        </div>
    )
}


export default Profile