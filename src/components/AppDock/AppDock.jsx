import PhoneIcon from '../../assets/icons/phone-icon.png'
import MessagesIcon from '../../assets/icons/messages-icon.png'
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

            </div>
        </>
    )
}

export default AppDock