import Wallpaper from '../assets/images/wallpaper.jpg'
import Widget from '../assets/images/widget.jpg'
import AppDock from '../components/AppDock/AppDock'
import './RightHomeScreen.css'

function HomeScreen() {

    return (
        <div className="right-homescreen">
            <img className="wallpaper" src={Wallpaper} alt="Wallpaper" />
            <img className="widget" src={Widget} alt="Widget" />
            <AppDock />
        </div>
    )
}

export default HomeScreen