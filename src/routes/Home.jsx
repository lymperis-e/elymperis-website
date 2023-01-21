import ProfileCard from '../components/ProfileCard'


function Home() {

    document.body.style.backgroundImage = "url(/img/bg.jpeg)";
    document.body.backgroundRepeat= "no-repeat"
    document.body.backgroundSize= "cover"

    return (
        <>
            <ProfileCard />
        </>
    )
}

export default Home