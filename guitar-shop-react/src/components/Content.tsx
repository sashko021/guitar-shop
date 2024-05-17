// import {useEffect,useState} from "react"
import Product from "./Product.tsx";

function Content() {
    // const [data,setData] = useState([])
    // const getData=()=>{
    //     fetch('MOCK_DATA.json'
    //         ,{
    //             headers : {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             }
    //         }
    //     )
    //         .then(function(response){
    //             console.log(response)
    //             return response.json();
    //         })
    //         .then(function(myJson) {
    //             console.log(myJson);
    //             setData(myJson);
    //         });
    // }
    // useEffect(()=>{
    //     getData()
    // },[])

    return (
        <div>
            <Product></Product>
        </div>
    )
}

export default Content;