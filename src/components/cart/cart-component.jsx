import {ReactComponent as shoppingBag} from '../../assets/shopping-bag.svg'
import './cart-component.scss'
export  const CartIcon = ()=>{
    return(
        <div className='cart-icon-container'>
           <shoppingBag className="shopping-icon"/>
           <span className='item-count'>0</span>
        </div>
    )
} 