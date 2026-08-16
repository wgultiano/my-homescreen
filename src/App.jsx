import Homescreen from "./Homescreen/Homescreen"
import GoogleFolder from "./components/Google/GoogleFolder"
import SocialFolder from "./components/Social/SocialFolder"
import ToolsFolder from "./components/Tools/ToolsFolder"
import DailyUsedFolder from "./components/DailyUsed/DailyUsedFolder"
import HomescreenApp from "./components/HomescreenApp/HomescreenApp"
import AppDock from './components/AppDock/AppDock'


function App() {

  return (
    <>
    <Homescreen />
    <GoogleFolder />
    <SocialFolder />
    <ToolsFolder />
    <DailyUsedFolder />
    <HomescreenApp />
    <AppDock />
    </>
  )
}

export default App
