import Wallpaper from '../assets/images/wallpaper.jpg'
import MeteoredIcon from '../assets/icons/meteored-icon.png'
import AIGalleryIcon from '../assets/icons/ai-gallery-icon.png'
import KeepNotesIcon from '../assets/icons/keep-notes-icon.png'
import PalmStoreIcon from '../assets/icons/palm-store-icon.png'
import GoogleCalendarIcon from '../assets/icons/google-calendar-icon.png'
import AppDock from '../components/AppDock/AppDock'
import './LeftHomeScreen.css'


function LeftHomeScreen () {
    return (
        <>
        <div className="left-homescreen">
            <img className="wallpaper" src={Wallpaper} alt="Wallpaper" />
            <AppDock />
        </div>

        <div className="left-app-grid">
            <a href="https://www.meteored.com/" target="_blank" rel="noreferrer">
                <img
                    className="app-icon meteored-icon"
                    src={MeteoredIcon}
                    alt="Meteored"
                />
                <p className="meteored-label">Meteored</p>
            </a>

            <a href="">
                <img
                    className="app-icon ai-gallery-icon"
                    src={AIGalleryIcon}
                    alt="AI Gallery"
                />
                <p className="ai-gallery-label">AI Gallery</p>
            </a>

            <a href="https://keep.google.com/" target="_blank" rel="noreferrer">
                <img 
                    className="app-icon keep-notes-icon"
                    src={KeepNotesIcon}
                    alt="Keep Notes"
                />
                <p className="keep-notes-label">Keep Notes</p>
            </a>

            <a href="https://www.palmplaystore.com/" target="_blank" rel="noreferrer">
                <img
                    className="app-icon palm-store-icon"
                    src={PalmStoreIcon}
                    alt="Palm Store"
                />
                <p className="palm-store-label">Palm Store</p>
            </a>

            <a href="https://calendar.google.com/" target="_blank" rel="noreferrer">
                <img
                    className="app-icon google-calendar-icon"
                    src={GoogleCalendarIcon}
                    alt="Google Calendar"
                />
                <p className="google-calendar-label">Calendar</p>
            </a>
            
        </div>

        </>
    )

}

export default LeftHomeScreen