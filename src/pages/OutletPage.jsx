import { Footer, NavBar } from '../components'
import { Outlet } from 'react-router-dom'

function OutletPage() {
  return (
    <div>
        <NavBar></NavBar>
        <Outlet></Outlet>
        <Footer />
    </div>
  )
}

export default OutletPage