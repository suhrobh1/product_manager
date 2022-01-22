import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './DisplayOne.css';
import { useNavigate } from '@reach/router';



const DisplayOne = (props) =>{

    const [product, setProduct] = useState({});
    let nav = useNavigate();
    const {id} = props;


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) =>{ 
                console.log("Problem with showing details!", err);
                
            })
    }, [id])

    const deleteHandler = (idBelow) =>{
        axios.delete(`http://localhost:8000/api/products/${idBelow}`)
            .then((res) =>{
                console.log(res)
            })
            .catch((err) => console.log(err))
            nav(`/`, {replace:true})
    }

    return(

        <div className='main'>
            <p className = 'title'>{product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            <button onClick={(e) => deleteHandler(product._id)}> Delete</button>
        </div>
    )
}

export default DisplayOne;