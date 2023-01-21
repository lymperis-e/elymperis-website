import BioCard from '../components/BioCard'


function Bio() {

    document.body.style.backgroundImage = "url(/img/bg.jpeg)";
    document.body.backgroundRepeat= "no-repeat"
    document.body.backgroundSize= "cover"

    return (
        <>
            <BioCard/>
        </>
    )
}

export default Bio