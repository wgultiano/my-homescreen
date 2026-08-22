import Wallpaper from '../assets/images/wallpaper.jpg'
import Widget from '../assets/images/widget.jpg'
import GcashIcon from '../assets/icons/gcash-icon.png'
import ShopeeIcon from '../assets/icons/shopee-icon.png'
import AppDock from '../components/AppDock/AppDock'
import './RightHomeScreen.css'

function HomeScreen() {

    return (
        <>
            <div className="right-homescreen">
                <img className="wallpaper" src={Wallpaper} alt="Wallpaper" />
                <img className="widget" src={Widget} alt="Widget" />
                <AppDock />

                <div>
                    <a href="https://gcash.com" target="_blank" rel="noreferrer">
                        <img
                            className="app-icon gcash-icon"
                            src={GcashIcon}
                            alt="Gcash"
                        />
                    </a>
                    <p className="gcash-label">GCash</p>
                </div>

                <div>
                    <a href="https://shopee.ph" target="_blank" rel="noreferrer">
                        <img
                            className="app-icon shopee-icon"
                            src={ShopeeIcon}
                            alt="Shopee"
                        />
                    </a>
                    <p className="shopee-label">Shopee</p>
                </div>
            </div>
        </>
    )
}

export default HomeScreen