import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css'; 

const DisplayAll = (props) => {

    const {products, setProducts} = props;

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

        const deleteHandler = (idBelow) =>{
            axios.delete(`http://localhost:8000/api/products/${idBelow}`)
                .then((res) =>{
                    console.log(res)
                    setProducts(products.filter((product) => product._id != idBelow))
                })
                .catch((err) => console.log(err))
        }

    return(
        <div className=' d-flex flex-column align-items-center mx-auto'>
            <div className='w-75 pt-1 bg-secondary '></div>
            <h1 className='mt-4'> All Products: </h1>
            {
                products.map((product, index) =>{

                    return(
                        <div key = {index}>
                        <Link className='text-body ' to={`/products/${product._id}`}><h6>{product.title}</h6></Link>
                        <Link to ={`/products/update/${product._id}`}><button>Update</button></Link>
                        <button onClick={(e) => deleteHandler(product._id)}> Delete</button>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default DisplayAll;