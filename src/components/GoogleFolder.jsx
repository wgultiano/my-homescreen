import GoogleIcon from '../icons/google-icon.png'

function GoogleFolder() {

    const app = [
        { name: "Google", icon: GoogleIcon, link: "https://www.google.com" }
    ]

    return (
        <div className="google-folder">
            {app.map((item) => (
                <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="google-link"
                >
                    <img src={item.icon} alt={`${item.name} icon`} className="google-icon" />
                </a>
            ))}
        </div>
    )
}

export default GoogleFolder