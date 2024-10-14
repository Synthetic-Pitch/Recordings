import "./header.css"
import clef from "../../assets/IMG/clef.png"
import { MyContext } from "../../Context/Context"
import { useContext } from "react"

const Header = () => {
  const { setRenderPage, renderPage } = useContext(MyContext);
  
  const handleChangePage = () => {
    setRenderPage(!renderPage)
  }
  
  return (
    <div className="header">
      <div className="header_clef">
        <img onClick={handleChangePage} src={clef} alt="png" />
      </div>
      <div className="header_text">
        <i>marked-</i>
      </div>
    </div>
  )
}

export default Header
