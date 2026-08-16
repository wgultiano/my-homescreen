import './DailyUsedFolder.css'
import FilesIcon from '../../assets/icons/files-icon.png'
import MusicIcon from '../../assets/icons/music-icon.png'
import ArcPlayerIcon from '../../assets/icons/arc-player-icon.png'
import MihonIcon from '../../assets/icons/mihon-icon.png'
import WebtoonIcon from '../../assets/icons/webtoon-icon.png'


function DailyUsedFolder() {
    return (
        <>
            <div className="daily-used-folder">

                <a href="https://files.google.com/" target="_blank" rel="noreferrer">
                    <img
                        className="app-icon files-icon"
                        src={FilesIcon}
                        alt="Files"
                    />
                </a>
                
                <a href="">
                    <img
                        className="app-icon music-icon"
                        src={MusicIcon}
                        alt="Music"
                    />
                </a>

                <a href="">
                    <img
                        className="app-icon arc-player-icon"
                        src={ArcPlayerIcon}
                        alt="Arc Player"
                    />
                </a>

                <a href="https://mihon.app" target="_blank" rel="noreferrer">
                    <img
                        className="app-icon mihon-icon"
                        src={MihonIcon}
                        alt="Mihon"
                    />
                </a>

                <a href="https://www.webtoons.com" target="_blank" rel="noreferrer">
                    <img
                        className="app-icon webtoon-icon"
                        src={WebtoonIcon}
                        alt="Webtoon"
                    />
                </a>

            </div>
            <p className="daily-used-folder-label">Daily Used</p>
        </>


    )

}

export default DailyUsedFolder