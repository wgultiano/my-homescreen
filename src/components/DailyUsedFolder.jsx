import FilesIcon from '../icons/files-icon.png'
import MusicIcon from '../icons/music-icon.png'
// import ArcPlayerIcon from '../icons/arc-player-icon.png'


function DailyUsedFolder() {
    return (
        <>
            <div className="daily-used-folder">

                <a href="https://files.google.com/" target="_blank" rel="noreferrer">
                    <img
                        className="app-icon daily-used-folder-icon"
                        src={FilesIcon}
                        alt="Files"
                    />
                </a>
                
                <a href="">
                    <img
                        className="app-icon daily-used-folder-icon"
                        src={MusicIcon}
                        alt="Music"
                    />
                </a>

                {/* <a href="">
                    <img
                        className="app-icon daily-used-folder-icon"
                        src={ArcPlayerIcon}
                        alt="Arc Player"
                    />
                </a> */}

            </div>
            <p className="daily-used-folder-label">Daily Used</p>
        </>


    )

}

export default DailyUsedFolder