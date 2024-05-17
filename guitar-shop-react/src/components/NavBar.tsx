import React from "react";
import style from "./NavBar.module.css"
function NavBar  ()  {
    return (
        <div className={style.sidenav}>
            <a>About</a>
            <a>Clients</a>
            <a>Contact</a>
            <a>Shop</a>
        </div>
);
}
export default NavBar;