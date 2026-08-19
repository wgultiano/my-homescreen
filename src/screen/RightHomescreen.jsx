import Wallpaper from '../assets/images/wallpaper.jpg'
import Widget from '../assets/images/widget.jpg'
import './HomeScreen.css'

function HomeScreen() {

    return (
        <div className="homescreen">
            <img className="wallpaper" src={Wallpaper} alt="Wallpaper" />
            <img className="widget" src={Widget} alt="Widget" />
        </div>
    )
}

export default HomeScreen