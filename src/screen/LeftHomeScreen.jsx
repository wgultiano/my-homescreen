import Wallpaper from '../assets/images/wallpaper.jpg'
import MeteoredIcon from '../assets/icons/meteored-icon.png'
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



        </div>

        </>
    )

}

export default LeftHomeScreen