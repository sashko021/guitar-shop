import style from './Acount.module.css'

function Acount() {
    return (
        <div>
            <img className={style.icon} src="icon.png"/>
            <a href="" className={style.account}>My Account</a>
            <div>
                <a href="http://localhost:5173/login" className={style.sign}>Sign In</a>

                <a href="" className={style.wish}>Wishlist</a>
            </div>
        </div>
    )
}

export default Acount;