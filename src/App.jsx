import LeftHomeScreen from "./screen/LeftHomeScreen"
import RightHomeScreen from "./screen/RightHomescreen"
import GoogleFolder from "./components/Google/GoogleFolder"
import SocialFolder from "./components/Social/SocialFolder"
import ToolsFolder from "./components/Tools/ToolsFolder"
import DailyUsedFolder from "./components/DailyUsed/DailyUsedFolder"
import HomescreenApp from "./components/HomescreenApp/HomescreenApp"


function App() {

  return (
    <>
    <LeftHomeScreen />
    <RightHomeScreen />
    <GoogleFolder />
    <SocialFolder />
    <ToolsFolder />
    <DailyUsedFolder />
    <HomescreenApp />
    </>
  )
}

export default App
