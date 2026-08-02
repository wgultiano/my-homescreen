import GoogleIcon from '../icons/google-go-icon.png'
import GmailIcon from '../icons/gmail-icon.png'
import MapIcon from '../icons/google-map-icon.png'
import GdriveIcon from '../icons/gdrive-icon.png'
import YTMusicIcon from '../icons/yt-music-icon.png'
import GoogleTVIcon from '../icons/google-tv-icon.png'
import GoogleMeetIcon from '../icons/google-meet-icon.png'
import GooglePhotosIcon from '../icons/google-photos-icon.png'
import GoogleAssistantIcon from '../icons/google-assistant-icon.png'

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

            <a href="https://mail.google.com" target="_blank" rel="noreferrer">
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

            <a href="https://meet.google.com" target="_blank" rel="noreferrer">
                <img className="app-icon google-meet-icon"
                     src={GoogleMeetIcon}
                     alt="Google Meet"
                />
            </a>

            <a href="https://photos.google.com" target="_blank" rel="noreferrer">
                <img className="app-icon google-photos-icon"
                     src={GooglePhotosIcon}
                     alt="Google Photos"
                />
            </a>

            <a href="https://assistant.google.com" target="_blank" rel="noreferrer">
                <img className="app-icon google-assistant-icon"
                     src={GoogleAssistantIcon}
                     alt="Google Assistant"
                />
            </a>

        </div>

        <p className="google-folder-label">Google</p>
        </>
    )
}

export default GoogleFolder