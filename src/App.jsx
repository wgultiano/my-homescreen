import Homescreen from "./tracks/Homescreen"
import GoogleFolder from "./components/GoogleFolder"
import SocialFolder from "./components/SocialFolder"
import ToolsFolder from "./components/ToolsFolder"
import DailyUsedFolder from "./components/DailyUsedFolder"
import HomescreenApp from "./tracks/HomescreenApp"


function App() {

  return (
    <>
    <Homescreen />
    <GoogleFolder />
    <SocialFolder />
    <ToolsFolder />
    <DailyUsedFolder />
    <HomescreenApp />
    </>
  )
}

export default App
