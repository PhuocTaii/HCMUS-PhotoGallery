import { Link, Outlet } from 'react-router-dom'
import home from '../assets/home-svgrepo-com.svg'

function MainLayout(){
    return (
        <>
            <Link to="/">
                <div className='p-5'>
                    <img src={home} alt="home" style={{width: 24, height: 24}} />
                    <a>Home</a>
                </div>
                <Outlet />
            </Link>
        </>
    )
}

export default MainLayout