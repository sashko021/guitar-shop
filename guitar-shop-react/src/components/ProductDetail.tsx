import React, {useEffect, useState} from "react"
import {useParams} from "react-router-dom"


function ProductDetail() {
    const {productId} = useParams()
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch('MOCK_DATA.json')
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(productId);
                setProduct(data.find((item) => item.id === productId))
            }).catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <h1>{product.name}</h1>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
        </div>
    )
}

export default ProductDetail