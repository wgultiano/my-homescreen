import PhoneIcon from '../../assets/icons/phone-icon.png'
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

            </div>
        </>
    )
}

export default AppDock