import LinkedInImg from '/img/linkedin_white.webp'
import GitHubImg from '/img/github_white.webp'
import RGImg from '/img/researchgate_white.webp'
import EmailImg from '/img/email.webp'
import './Social.css'

function Social(){

    return(
        <div className="fixed bottom-0 right-0">
             
    
            <div className="social-btn">
                <a href="https://www.linkedin.com/in/efstathios-lymperis-975702188/" target="_blank" role="button">
                    <img className="social-btn-img rounded-circle " src={LinkedInImg} alt="Connect on LinkedIn!" width="50"
                        height="50"></img>
                </a>

            </div>

            <div className="social-btn">
                <a href="https://github.com/lymperis-e" target="_blank" role="button">
                    <img className="social-btn-img rounded-circle " src={GitHubImg} alt="Let's connect on GitHub!" width="50"
                        height="50" ></img>
                </a>
            </div>

            <div className="social-btn">
                <a href="https://www.researchgate.net/profile/Efstathios-Lymperis" target="_blank" role="button">
                    <img className="social-btn-img rounded-circle " src={RGImg} alt="Let's connect on ResearchGate!"
                        width="50" height="50"></img>
                </a>
            </div>

            <div className="social-btn">
                <a href="mailto:geo.elymperis@gmail.com" role="button">
                    <img className="social-btn-img rounded-circle " src={EmailImg} alt="Send an email!" width="50" height="50"></img>
                </a>
            </div>


        </div>
    )
}


export default Social