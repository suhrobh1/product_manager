import ProductComponent from "../components/ProductComponent";
import DisplayAll from "../components/DisplayAll";
import React, {useState} from 'react';


const Home = () => {

    const [products, setProducts] = useState([]);

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
            />
        </div>
    )
}
export default Home;