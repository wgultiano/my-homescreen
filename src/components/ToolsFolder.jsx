import Calculator from '../icons/calculator-icon.png'
import GitHubIcon from '../icons/github-icon.png'
import ChatGPTIcon from '../icons/chatgpt-icon.png'



function ToolsFolder() {
    return (
        <>
            <div className="tools-folder">

                <a href="https://calculator.apps.chrome/" target="_blank" rel="noreferrer">
                    <img 
                        className="app-icon tools-folder-icon" 
                        src={Calculator}
                        alt="Calculator"
                    />
                </a>

                <a href="https://github.com/" target="_blank" rel="noreferrer">
                    <img 
                        className="app-icon tools-folder-icon" 
                        src={GitHubIcon}
                        alt="GitHub"
                    />
                </a>

                <a href="https://chatgpt.com/" target="_blank" rel="noreferrer">
                    <img
                        className="app-icon tools-folder-icon"
                        src={ChatGPTIcon}
                        alt="ChatGPT"
                    />
                </a>

            </div>

            <p className="tools-folder-label">Tools</p>
        </>
    )
}

export default ToolsFolder