import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const Layout = () => {
    return (
        <div className='min-h-screen bg-zinc-100'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Layout