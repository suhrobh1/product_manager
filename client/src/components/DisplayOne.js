import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './DisplayOne.css';
import { navigate} from '@reach/router';
import Delete from './Delete';


const DisplayOne = (props) =>{

    const [product, setProduct] = useState({});
    const [qty, setQty] =useState(0);
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

    return(

        <div className='main'>
            <p className = 'title'>{product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            {/* <div style={{display: "flex", flexDirection: "row", width: "10em",justifyContent: "space-between", alignItems:"middle"}}>
                <div>In stock: {qty}</div>
                <button onClick={()=>setQty(qty + 1)}>Add 1</button>
            </div> */}
            
            <Delete productId = {product._id} successCallback = {()=> navigate('/')} />
        </div>
    )
}

export default DisplayOne;