import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { AuthProvider } from "./context/AuthContext"

const App = () => {
  return (
    <>
    <AuthProvider>
      <Navbar/>
      <main className="primary-font min-h-screen px-4 py-6 mx-auto max-w-screen-2xl ">
        <Outlet/>
      </main>
      <Footer/>
    </AuthProvider>
    </>
  )
}

export default App