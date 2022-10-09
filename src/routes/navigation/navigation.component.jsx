import {Outlet,Link} from 'react-router-dom';
import {ReactComponent as CompanyLogo} from '../../assests/crown.svg';
import "./navigation.style.scss"
const Navigation=()=>{
    return(
        <>
        <div className='navigation'>
            <Link className='logo-container' to="/">
                <CompanyLogo className='logo'/>
            </Link>
            <Link className='nav-links-container'>
                <Link className='nav-link' to="/shop">
                    Shop
                </Link>
                <Link className='nav-link' to="/signin">
                    Sign In
                </Link>
                
            </Link>
        </div>
        <Outlet/>
        </>
    )
}

export default Navigation;