import style from './Login.module.css'
import { useState } from "react";
import { useCookies } from "react-cookie"
import {useNavigate} from "react-router-dom";
function Login() {
    const [formData, setFormData] = useState({Uname:""});
    const [cookies, setCookie] = useCookies(['user']);
    const navigate=useNavigate()
    const handleChange = (event) => {
        const {value} = event.target;
        setFormData((prevFormData) => ({...prevFormData, Uname: value}));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setCookie('user',formData.Uname,{path:`/`});
        navigate(`/`)
    };
        return (
            <div className={style.maindiv}>
                <div className={style.secdiv}>
                    <p className={style.txt}>
                        GuitarShop
                    </p>
                    <form onSubmit={handleSubmit} className={style.login}>
                        <input type="text" id="username" name="username" placeholder='Username or Email' value={formData.Uname} onChange={handleChange}/>
                        <br/>
                        <button className={style.sub} type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
    export default Login;