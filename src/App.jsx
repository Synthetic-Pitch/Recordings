import './App.css'
import Header from './Components/Header/Header'
import { MyProvider } from './Context/Context'
import Page from './Page/Page'

function App() {
  
  return (
    <MyProvider>
      <Header/>
      <Page/>  
    </MyProvider>
  )
}

export default App;