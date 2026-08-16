import MessengerIcon from '../icons/messenger-icon.png'
import YouTubeIcon from '../icons/youtube-icon.png'
import TikTokIcon from '../icons/tiktok-icon.png'
import FacebookIcon from '../icons/facebook-icon.png'



function SocialFolder() {

    return (
        <>
            <div className="social-folder">

                <a href="https://www.messenger.com" target="_blank" rel="noreferrer" >
                    <img
                        className="app-icon messenger-icon"
                        src={MessengerIcon}
                        alt="Messenger"
                    />
                </a>

                <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                    <img
                        className="app-icon youtube-icon"
                        src={YouTubeIcon}
                        alt="YouTube"
                    />
                </a>

                <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
                    <img
                        className="app-icon tiktok-icon"
                        src={TikTokIcon}
                        alt="TikTok"
                    />
                </a>

                <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                    <img
                        className="app-icon facebook-icon"
                        src={FacebookIcon}
                        alt="Facebook"
                    />
                </a>

            </div>
            <p className="social-folder-label">Social</p>
        </>

    )
}

export default SocialFolder