import {Outlet,Link} from 'react-router-dom';
const Navigation=()=>{
    return(
        <>
        <div className='navigation'>
            <Link className='logo-container' to="/">
                Logo
            </Link>
            <Link className='navigation-links-container'>
                <Link className='nav-link' to="/shop">
                    Shop
                </Link>
            </Link>
        </div>
        <Outlet/>
        </>
    )
}

export default Navigation;