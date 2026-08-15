import FilesIcon from '../icons/files-icon.png'


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

            </div>
            <p className="daily-used-folder-label">Daily Used</p>
        </>


    )

}

export default DailyUsedFolder