import style from './Cart.module.css'

function Cart() {
    return (
        <div>
            <img className={style.cart} src="cart.png"/>
            <a href="" className={style.basket}>My Basket</a>
        </div>
    )
}

export default Cart;