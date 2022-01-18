import React, {useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const ProductComponent = () => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const submitHandler = (e) =>{
        e.preventDefault();

        axios.post("http://localhost:8000/api/products", {title, price, description})
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
            setTitle("");
            setPrice("");
            setDescription("");
    }

    const changeHandler = (e) =>{
        setTitle(e.target.value)

    }

    return(

        <div >
            <Form onSubmit={submitHandler} className=" mb-3 d-flex flex-column mx-auto w-50 align-items-center">
                <h2 className=''>Product Manager</h2>
                <Form.Group className="bg-light mb-3 d-flex w-50  align-items-center justify-content-between" controlId="formBasicTitle">
                    <Form.Label className='m-2 w-25'>Title</Form.Label>
                    <Form.Control type="text" value = {title} onChange={changeHandler} className =" m-2 w-75  "/>
                </Form.Group>

                <Form.Group className="bg-light mb-3 d-flex w-50  align-items-center justify-content-between" controlId="formBasicPrice">
                    <Form.Label className='m-2 w-25'>Price</Form.Label>
                    <Form.Control type="number" value = {price} onChange={(e) => setPrice(e.target.value)}  className =" m-2 w-75  "/>
                </Form.Group>

                <Form.Group className="bg-light mb-3 d-flex w-50  align-items-center justify-content-between" controlId="formBasicDescription">
                    <Form.Label className='w-25 m-2'>Description</Form.Label>
                    <Form.Control type="text"  value = {description} onChange={(e) => setDescription(e.target.value)} className =" m-2 w-75 "/>
                </Form.Group>

                <Button variant="primary" type="submit" className='bg-light w-25 text-black border border-light' >
                    Create
                </Button>
            </Form>

        </div>
    )

}

export default ProductComponent;