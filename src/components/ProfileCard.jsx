import Social from './Social'
import './ProfileCard.css'

import { useEffect } from 'react'

function Profile() {



    return (
        <>
            <div className="mx-5  text-current justify-normal">

                <div >
                    <h1 className="funky font-bold ml-auto z-20" >Efstathios Lymperis</h1>
                </div>

                <p>Software Engineer <a href="https://www.getmap.eu" target="_blank">@Geospatial Enabling Technologies</a></p>
                <p>MSc Geoinformatics </p>
            </div>

            <div className='flex flex-row flex-wrap mx-5 my-7'>
                <h4 className="badge badge-primary badge-outline mx-1 my-1" >Fullstack Development</h4>
                <h4 className="badge badge-primary badge-outline mx-1 my-1" >Digital Map Design </h4>
                <h4 className="badge badge-primary badge-outline mx-1 my-1" >Data Analysis</h4>
                <h4 className="badge badge-primary badge-outline mx-1 my-1" >Geospatial systems</h4>
            </div>



            <div className="">
                <h5 className="typewriter" >📍 Thessaloniki & Athens, GR</h5>
            </div>
            <Social />
        </>


    )
}


export default Profile