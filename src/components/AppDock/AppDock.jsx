import PhoneIcon from '../../assets/icons/phone-icon.png'
import MessagesIcon from '../../assets/icons/messages-icon.png'
import ChromeIcon from '../../assets/icons/chrome-icon.png'
import ContactsIcon from '../../assets/icons/contacts-icon.png'
import CameraIcon from '../../assets/icons/camera-icon.png'
import './AppDock.css'


function AppDock () {
    return (
        <>
            <div className="app-dock">

                <a href="">
                    <img
                        className="app-icon phone-icon"
                        src={PhoneIcon}
                        alt="Phone"
                    />
                </a>

                <a href="">
                    <img
                        className="app-icon messages-icon"
                        src={MessagesIcon}
                        alt="Messages"
                    
                    />
                </a>

                <a href="https://www.google.com/chrome" target="_blank" rel="noreferrer">
                    <img
                        className="app-icon chrome-icon"
                        src={ChromeIcon}
                        alt="Chrome"
                    />
                </a>

                <a href="">
                    <img
                        className="app-icon contacts-icon"
                        src={ContactsIcon}
                        alt="Contacts"
                    />
                </a>

                <a href="">
                    <img
                        className="app-icon camera-icon"
                        src={CameraIcon}
                        alt="Camera"
                    />
                </a>

            </div>
        </>
    )
}

export default AppDock