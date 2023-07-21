import Image from 'next/image'
import     '../Styles/home.css'
import NavBar from './Components/Navbar/NavBar'
import Banner from './Components/Banner/Banner'
import Menu from './Components/menu/Menu'
export default function Home() {
  return (
    <div className="home">
     <NavBar/>
     <Banner/>
     <Menu/>
    </div>
  )
}
