import { Link, Outlet } from 'react-router-dom'
import home from '../assets/home-svgrepo-com.svg'

function MainLayout(){
    return (
        <>
            <Link to="/">
                <div className='px-5 pt-5 sticky top-0 z-50 bg-white'>
                    <img src={home} alt="home" style={{width: 24, height: 24}} />
                    <a>Home</a>
                </div>
            </Link>
            <Outlet />
        </>
    )
}

export default MainLayout