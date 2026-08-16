import GcashIcon from '../icons/gcash-icon.png'




function HomescreenApp() {
    return (
        <>
            <a href="https://gcash.com/" target="_blank" rel="noreferrer">
                <img
                    className="app-icon gcash-icon"
                    src={GcashIcon}
                    alt="Gcash"
                />

                <p className="gcash-label">GCash</p>
            </a>




        </>
    )
}

export default HomescreenApp