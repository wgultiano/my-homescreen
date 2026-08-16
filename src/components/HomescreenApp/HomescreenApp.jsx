import GcashIcon from '../../assets/icons/gcash-icon.png'
import ShopeeIcon from '../../assets/icons/shopee-icon.png'
import './HomescreenApp.css'

function HomescreenApp() {
    return (
        <>
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

        </>
    )
}

export default HomescreenApp