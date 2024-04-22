import style from './Header.module.css'
import Acount from "./Acount.tsx";
import Cart from "../Cart.tsx";

function Header() {
  return (
    <div className={style.maindiv}>
        <div className={style.container}>
            <p className={style.txt}>
                GuitarShop
            </p>
            <img className={style.logo} src="logo.png"/>
            <input type="search" placeholder="Search product"/>
            <Acount/>
            <Cart/>
        </div>
    </div>
  )
}
export default Header;