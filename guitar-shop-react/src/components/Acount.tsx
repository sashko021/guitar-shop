import style from './Acount.module.css'
import {useCookies} from "react-cookie";

function Acount() {
    const [cookies, setCookie] = useCookies(['user']);
    console.log(cookies,setCookie);
    const user=cookies.user
    return (
        <div>
            <p className={style.account}>{user?user:'My Account'}</p>
            <div>
                {user ? <a href="/login\" className={style.sign}>Logout</a> : <a href="/login\" className={style.sign}>Sign In</a>}
                <a href="" className={style.wish}>Wishlist</a>
            </div>
        </div>
    )
}
// {user?user:'My Account'}
// if user{return user} else return my account
export default Acount;