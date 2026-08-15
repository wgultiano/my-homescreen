import Calculator from '../icons/calculator-icon.png'



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
            </div>
        </>
    )
}

export default ToolsFolder