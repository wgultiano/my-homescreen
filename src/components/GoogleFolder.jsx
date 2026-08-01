import GoogleIcon from '../icons/google-go-icon.png'
import GmailIcon from '../icons/gmail-icon.png'
import MapIcon from '../icons/google-map-icon.png'
import GdriveIcon from '../icons/gdrive-icon.png'
import YTMusicIcon from '../icons/yt-music-icon.png'
import GoogleTVIcon from '../icons/google-tv-icon.png'

function GoogleFolder() {
    return (
        <>
        <div className="google-folder">

            <a href="https://www.google.com" target="_blank" rel="noreferrer">
                <img
                    className="app-icon google-icon"
                    src={GoogleIcon}
                    alt="Google"
                />
            </a>

            <a href="https://www.gmail.com" target="_blank" rel="noreferrer">
                <img
                    className="app-icon gmail-icon"
                    src={GmailIcon}
                    alt="Gmail"
                />
            </a>

            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
                <img
                    className="app-icon map-icon"
                    src={MapIcon}
                    alt="Map"
                />
            </a>

            <a href="https://drive.google.com" target="_blank" rel="noreferrer">
                <img
                    className="app-icon gdrive-icon"
                    src={GdriveIcon}
                    alt="Gdrive"
                />
            </a>

            <a href="https://music.youtube.com" target="_blank" rel="noreferrer">
                <img className="app-icon yt-music-icon"
                     src={YTMusicIcon} 
                     alt="YT Music" 
                />
            </a>

            <a href="https://tv.google.com" target="_blank" rel="noreferrer">
                <img className="app-icon google-tv-icon"
                src={GoogleTVIcon} 
                alt="Google TV" 
                />
            </a>

            

        </div>

        <p className="google-folder-label">Google</p>
        </>
    )
}

export default GoogleFolder