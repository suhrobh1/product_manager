import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { navigate} from '@reach/router';
import ProductComponent from './ProductComponent';
import Delete from './Delete';

const Update = (props) => {

    const {id} = props;
    const[product, setProduct] = useState();
    const[loaded, setLoaded]= useState(false);

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data);
                setLoaded(true);
            })
            .catch((err) => console.log(err));
    }, [])

    const updateHandler = (product) => {
        axios.put(`http://localhost:8000/api/products/${id}`, product)
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (

        <div>
            <h2>Product Update</h2>
            {
                loaded && (
                        <> <ProductComponent
                            onSubmitProp = {updateHandler}
                            initialTitle = {product.title}
                            initialPrice = {product.price}
                            initialDescription = {product.description}
                          />
                            <div style={{display: "flex", justifyContent:"center"}}>
                                <Delete productId = {product._id} successCallback = {()=> navigate('/')} />
                            </div>
                        </>
                )
            }
           
            
        </div>
    )
}
export default Update;