import Navbar from "./Components/Navbar/Navbar"
import { Outlet } from "react-router-dom"
import Footer from "./Components/Footer/Footer"
import ShopContextProvider from "./Context/ShopContext"


function App() {
  
  return (
    <>
     <ShopContextProvider>
        <Navbar/>
        <Outlet/>
        <Footer/>
     </ShopContextProvider>
    </>
  )
}

export default App
