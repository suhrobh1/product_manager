import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { useNavigate } from '@reach/router';


const Update = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const {id} = props;
    let nav = useNavigate();

    useEffect (() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch((err) => console.log(err));
    }, [])

    const updateHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/${id}`, {title, price, description})
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
        nav(`/products/update/submit/${id}`, {replace:true})
    }

    return (

        <div>
            <h2>Product Update</h2>
            <form onSubmit={updateHandler}>
                <div>
                    <label>Title: </label>
                    <input type = "text" value ={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div>
                    <label> Price: </label>
                    <input type = "text" value ={price} onChange={(e) => setPrice(e.target.value)}/>
                </div>
                <div>
                    <label> Description: </label>
                    <input type = "text" value ={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
               <input type = "submit"/>
            </form>



        </div>
    )
}
export default Update;