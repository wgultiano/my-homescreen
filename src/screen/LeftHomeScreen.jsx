import Wallpaper from '../assets/images/wallpaper.jpg'
import AppDock from '../components/AppDock/AppDock'
import './LeftHomeScreen.css'


function LeftHomeScreen () {
    return (
        <div className="left-homescreen">
            <img className="wallpaper" src={Wallpaper} alt="Wallpaper" />
            <AppDock />
        </div>
    )

}

export default LeftHomeScreen