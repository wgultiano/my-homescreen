import Wallpaper from '../assets/wallpaper.jpg'
import Widget from '../assets/widget.jpg'


function Homescreen() {

    return (
        <div className="homescreen">
            <img className="wallpaper" src={Wallpaper} alt="Wallpaper" />
            <img className="widget" src={Widget} alt="Widget" />
        </div>
    )
}

export default Homescreen