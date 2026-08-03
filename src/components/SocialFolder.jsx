import MessengerIcon from '../icons/messenger-icon.png'



function SocialFolder() {

    return (
        <>
        <div className="social-folder">

            <a href="https://www.messenger.com" target="_blank" rel="noreferrer" >
                <img
                    className="app-icon messenger-icon"
                    src={MessengerIcon}
                    alt="Messenger" 
                />
            </a>

            {/* <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
                <img 
                src={YouTubeIcon} 
                alt=""
                />
            </a> */}

        </div>

        <p className="social-folder-label">Social</p>
        </>
    )
}

export default SocialFolder