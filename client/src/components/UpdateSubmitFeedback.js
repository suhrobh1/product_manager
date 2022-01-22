import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from '@reach/router';



const UpdateSubmitFeedback = (props) => {

    const {id} = props;
    const [product, setProduct] = useState([]);

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                console.log(res.data);
                setProduct(res.data);
            })
            .catch((err) => console.log(err));
    }, [id])




    return(
        <div>
            <h3>Success!</h3>
            <div>
                <h5>Here are your changes:</h5>
                <p>Title:<span> {product.title}</span> </p>
                <p>Price:<span> {product.price}</span> </p>
                <p>Description: <span> {product.description}</span></p>
                <Link to={`/`}><button>Back to Main</button></Link>
            </div>
        </div>
    )
}
export default UpdateSubmitFeedback;