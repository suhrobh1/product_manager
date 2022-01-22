import ProductComponent from "../components/ProductComponent";
import DisplayAll from "../components/DisplayAll";
import React, {useState} from 'react';
import axios from "axios";


const Home = () => {

    const [products, setProducts] = useState([]);

    const deleteHandler = (idBelow) =>{
        axios.delete(`http://localhost:8000/api/products/${idBelow}`)
            .then((res) =>{
                console.log(res)
                setProducts(products.filter((product) => product._id !== idBelow))
            })
            .catch((err) => console.log(err))
    }

    return(
        <div>
            <ProductComponent 
            path = "/products/"  
            products = {products}
            setProducts = {setProducts}
            />
            <DisplayAll
            path = "/products/"
            products = {products}
            setProducts = {setProducts}
            deleteHandler={deleteHandler} 
            />
        </div>
    )
}
export default Home;