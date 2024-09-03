import { useContext } from "react"
import { MyContext } from "../Context/Context"
import PageOneCom from "../Components/PageOne/PageOneCom";
import PageTwoCom from "../Components/PageTwo/PageTwoCom";


const Page = () => {

  const {renderPage } = useContext(MyContext);
  return (
    <>
      {
        renderPage ? <PageTwoCom/> : <PageOneCom/>
      }
    </>
  )
}

export default Page
