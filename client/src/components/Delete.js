import axios from "axios";
import React from 'react';


const Delete = (props) => {
    
    const { productId, successCallback} = props;

    const deleteProduct = (e) =>{

        axios.delete(`http://localhost:8000/api/products/${productId}`)
            .then((res) =>{
                console.log(res);
                successCallback();
            })
            .catch((err) => console.log(err));
    }
    return (
        <div>
            <button onClick={deleteProduct}> 
                Delete
            </button>
        </div>
    )
}
export default Delete;