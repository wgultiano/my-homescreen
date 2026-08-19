import Wallpaper from '../assets/images/wallpaper.jpg'
import Widget from '../assets/images/widget.jpg'
import './RightHomeScreen.css'

function HomeScreen() {

    return (
        <div className="right-homescreen">
            <img className="wallpaper" src={Wallpaper} alt="Wallpaper" />
            <img className="widget" src={Widget} alt="Widget" />
        </div>
    )
}

export default HomeScreen