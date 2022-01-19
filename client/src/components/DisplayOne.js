import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './DisplayOne.css';

const DisplayOne = (props) =>{

    const [product, setProduct] = useState({});

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
    }, [])

    return(

        <div className='main'>
            <p className = 'title'>{product.title}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}

export default DisplayOne;