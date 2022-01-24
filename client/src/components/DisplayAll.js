import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Delete from './Delete';

const DisplayAll = (props) => {

    const {removeFromDom, products, setProducts} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products`)
            .then((res) => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
        }, [])

    return(
        <div className=' d-flex flex-column align-items-center mx-auto'>
            <div className='w-75 pt-1 bg-secondary '></div>
            <h1 className='mt-4'> All Products: </h1>
            {
                products.map((product, index) =>{

                    return(
                        <div key = {index}>
                        <Link className='text-body ' to={`/products/${product._id}`}><h6>{product.title}</h6></Link>
                        <div  style={{display: "flex", justifyContent:"space-between", width: "9em"}} >
                            <Link to ={`/products/update/${product._id}`}><button>Update</button></Link>
                            <Delete productId = {product._id} successCallback={() => removeFromDom(product._id)}/>
                        </div>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default DisplayAll;