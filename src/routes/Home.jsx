import { useEffect } from 'react';
import ProfileCard from '../components/ProfileCard'
import coverImg from '/img/home-bg.webp'
import TerminalMock from '../components/Custom/TerminalMock';
function Home() {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${coverImg})`;
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center center'; //'0% 0%';
        document.body.style.backgroundRepeat = 'no-repeat';

        // You may want to also set other background properties, such as background-size or background-repeat
        return () => {
            document.body.style.backgroundImage = null;
        };
    }, []);

    return (
        <>
            <ProfileCard /> 
            
            {/*<TerminalMock>
            <p className="typewriter  px-5 text-emerald-200 break-normal" >Software Engineer <a href="https://www.getmap.eu" target="_blank">@Geospatial Enabling Technologies</a></p>
            </TerminalMock>*/}
        </>
    )
}

export default Home