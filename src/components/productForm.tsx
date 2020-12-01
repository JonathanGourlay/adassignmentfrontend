import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import apiClient from "../scripts/app/client";

const ProductForm = () => {

    // const results =  apiClient.create();

    return (
        <><Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Create New Item</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group controlId="formBasicName">
                        <Form.Control type="name" placeholder="Item Name" />
                    </Form.Group>

                    <Form.Group controlId="formBasicDescription">
                        <Form.Control type="description" placeholder="Description" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPrice">
                        <Form.Control type="price" placeholder="Price" />
                    </Form.Group>

                    <Form.Group controlId="formBasicStock">
                        <Form.Control type="stock" placeholder="Stock Count" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
            </Modal.Footer>
        </Modal.Dialog>
        </>
    )
};
export default ProductForm;