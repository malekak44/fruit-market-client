import React from 'react';
import './AddFruit.css';
import { Form, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddFruit = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null);


    const onSubmit = data => {
        const fruitData = {
            name: data.name,
            weight: data.weight,
            price: data.price,
            imageURL: imageURL
        };

        const url = `http://localhost:4000/addFruit`;

        if (imageURL !== null) {
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(fruitData)
            })
                .then(res => document.getElementById("saveBtn").value = "Saved");
        }
    };

    const handleImageUpload = event => {
        document.getElementById("uploadBtn").innerText = "Uploading...";
        const imageData = new FormData();
        imageData.set('key', '9bce098a4a5f02a97229060f7d0bd219');
        imageData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                document.getElementById("uploadBtn").innerText = "Image Uploaded";
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="addfruit-section">
            <div className="page-title">
                <h4>Add Fruit</h4>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <div className="addfruit-form">
                    <Row>
                        <Form.Group as={Col} controlId="name">
                            <Form.Label>Fruit Name</Form.Label>
                            <Form.Control type="text" autoComplete="off" placeholder="Enter name" {...register("name", { required: true })} />
                            {errors.name && <span className="error">Name is required.</span>}
                        </Form.Group>
                        <Form.Group as={Col} controlId="weight">
                            <Form.Label>Fruit Weight</Form.Label>
                            <Form.Control type="text" autoComplete="off" placeholder="Enter weight" {...register("weight", { required: true })} />
                            {errors.weight && <span className="error">Weight is required.</span>}
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col} controlId="price">
                            <Form.Label>Fruit Price</Form.Label>
                            <Form.Control type="text" autoComplete="off" placeholder="Enter price" {...register("price", { required: true })} />
                            {errors.price && <span className="error">Price is required.</span>}
                        </Form.Group>
                        <Form.Group as={Col} controlId="image">
                            <Form.Label>Fruit Image</Form.Label>
                            <div id="uploadBtn">Upload Image
                                <Form.Control type="file" name="image" onChange={handleImageUpload}></Form.Control>
                            </div>
                        </Form.Group>
                    </Row>
                </div>
                <Form.Control type="submit" value="Save" id="saveBtn"></Form.Control>
            </Form>
        </div>
    );
};

export default AddFruit;