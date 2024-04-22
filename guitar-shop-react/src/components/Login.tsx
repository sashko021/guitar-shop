import style from './Login.module.css'

function Login() {
    return (
        <div className={style.maindiv}>
            <div className={style.secdiv}>
                    <p className={style.txt}>
                        GuitarShop
                    </p>
                <input className={style.login} type="search" placeholder="Email or Username:"/>
            </div>
        </div>
    )
}

export default Login