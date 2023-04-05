import { Outlet } from 'react-router-dom'
import Footer from '../pages/footer/Footer'
import NavBar from './NavBar'

const SharedLayout = ({childern}) => {
  return (
    <div>
    <NavBar />
    <Outlet />
    {/* <Footer /> */}
    </div>
  )
}

export default SharedLayout