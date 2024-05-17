import {useEffect,useState} from "react"
import style from './Product.module.css'
import {Link} from "react-router-dom";

function Product () {
    const [photos,setPhoto] = useState([]);
    useEffect(() => {
        fetch('MOCK_DATA.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(data);
                setPhoto(data);
            });
    }, []);
    return (
        <div className={style.display}>
            {photos.map((photo) => (
                <Link to={'/products/'} className={style.link}>
                <div className={style.products}>
                    <img className={style.img} key={photo.id} src={photo.image}/>
                    <div className={style.paragraph}>
                        <p>{photo.description}</p>
                        <p>{photo.name}</p>
                        <p className={style.price}>{photo.price}</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    );
};

export default Product;