import Navbar from "../navbar/Navbar"
import NavTopBar from "../navbar/NavTopBar"


const Header = () => {
  return (
    <div className="fixed w-full z-50">
        <NavTopBar />
        <Navbar />
    </div>
  )
}

export default Header