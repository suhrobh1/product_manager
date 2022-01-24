import ProductComponent from "../components/ProductComponent";
import DisplayAll from "../components/DisplayAll";
import React, {useEffect, useState} from 'react';
import axios from "axios";


const Home = () => {

    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/products`)
            .then((res) => {
                setProducts(res.data);
                setLoaded(true);
            })
            .catch((err) =>console.log(err))
    }, [])

    const createProduct = (product) =>{//adding a product
        axios.post("http://localhost:8000/api/products", product)
            .then((res) => {
                setProducts([...products, res.data]);
            })
    }

    const removeFromDom = (productId) =>{
        setProducts(products.filter((product) => productId !== product._id))
    }

    return(
        <div>
            <ProductComponent 
            path = "/products/"  
            onSubmitProp = {createProduct} //connection between createProduct function here and onSubmitProp in Form file.
            initialTitle = "" 
            initialPrice = ""
            initialDescription = ""
            />
            {
                loaded && <DisplayAll
                            path = "/products/"
                            products = {products}
                            setProducts = {setProducts}
                            removeFromDom={removeFromDom}
            />
            }
        </div>
    )
}
export default Home;