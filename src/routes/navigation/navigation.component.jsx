import {Outlet,Link} from 'react-router-dom';
import {ReactComponent as CompanyLogo} from '../../assests/crown.svg';
const Navigation=()=>{
    return(
        <>
        <div className='navigation'>
            <Link className='logo-container' to="/">
                <CompanyLogo className='logo'/>
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