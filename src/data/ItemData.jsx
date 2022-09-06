import { Form, Button, Table } from "react-bootstrap";
import { useState, createRef } from 'react';
import "./ItemData.css"
export default function ItemData() {
    let initialValue = [];
    const [products, setProduct] = useState(initialValue);
    const formData = createRef();
    const add = (event)=>{
        event.preventDefault();
        const newProduct = {
            product_name: formData.current.product_name.value,
            price: formData.current.price.value,
            qty: Number(formData.current.qty.value)
        }
        setProduct([...products,newProduct]);
    }
    const increQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty + 1;
        setProduct([...products])
    }
    const decreQty = (event)=>{
        const indexOfArray = event.target.value;
        products[indexOfArray].qty = products[indexOfArray].qty - 1;
        setProduct([...products])
    }
    return (
        <div>
        <div >
            <Form className="itemData" onSubmit={add} ref={formData}>
            <Form.Group className="abc" controlId="formBasicProductName">
                <Form.Label className="label">User Name:</Form.Label>
                <Form.Control className="input" type="text" placeholder="Enter User Name" name="product_name"/>
            </Form.Group>

            <Form.Group className="abc" controlId="formBasicPrice">
                <Form.Label className="label">Login ID:</Form.Label>
                <Form.Control className="input"type="number" placeholder="Login ID" name="price"/>
            </Form.Group>

            <Form.Group className="abc" controlId="formBasicQty">
                <Form.Label className="label">Password:</Form.Label>
                <Form.Control className="input" type="text" placeholder="Enter Password" name="qty"/>
            </Form.Group>
            <Button className="btn" variant="primary" type="submit">
                Login
            </Button>
            
            </Form>
            
            </div>
            {/* <div className="tableData">

    
            <Table className="table" >

            <thead>
                <tr className="head-table">
                    <th>Index</th>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Qty</th>
                    <th>Options</th>
                </tr>
            </thead>
            <tbody >
                {
                    products.map((item, index)=>{
                        return(
                            <tr className="body-table" key={index}>
                                <td>{index}</td>
                                <td>{item.product_name}</td>
                                <td>{item.price}</td>
                                <td>{item.qty}</td>
                                <td className="edit">
                                    <Button  className="add"variant="success" onClick={event=>increQty(event)} value={index}>+</Button>
                                    <Button className="sub"variant="danger" onClick={event => decreQty(event)} value={index}>-</Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </Table>
       </div> */}
        </div>


    )
}