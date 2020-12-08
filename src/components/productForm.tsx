import React from "react";
import { Form, Button, Modal, FormFile } from "react-bootstrap";
import Feedback from "react-bootstrap/esm/Feedback";
import apiClient from "../scripts/app/client";
import { ItemsObject } from '../scripts/app/client/client';
import IsAuthed from "../scripts/globalState";


interface IIDHandlerProps {
    newID: number
    modalVisible: boolean
    onSubmit: () => void
    setModalVisible: (show: boolean) => void;

}
const ProductForm = (props: IIDHandlerProps) => {
    const [newItem, setNewItem] = React.useState<ItemsObject>();
    let { token } = IsAuthed.useContainer();
    return (
        <>
            <Modal
                show={props.modalVisible}
            >
                <Modal.Header>
                    <Modal.Title>Create New Item</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form
                        onSubmit={() => {
                            apiClient.create(props.newID, newItem?.name, newItem?.stockCount, newItem?.price, newItem?.description, newItem?.imageURL, token).then(() => { setTimeout(() => { props.onSubmit() }, 1000) });
                            props.setModalVisible(false)
                        }}
                    >
                        <Form.Group controlId="formBasicID">
                            <Form.Control type="number" value={props.newID} disabled={true} />
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Control required={true} type="name" placeholder="Item Name" onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.name = i.target.value;
                                setNewItem(item);
                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Control required={true} type="description" placeholder="Description" onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.description = i.target.value;
                                setNewItem(item);
                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPrice">
                            <Form.Control required={true} type="price" placeholder="Price" onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.price = Number.parseFloat(i.target.value);
                                setNewItem(item);
                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicStock">
                            <Form.Control required={true} type="stock" placeholder="Stock Count" onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.stockCount = Number.parseInt(i.target.value);
                                setNewItem(item);
                            }} />
                        </Form.Group>
                        <Form.Group controlId="formBasicImage">
                            <Form.Control required={true} type="url" placeholder="Image URL" onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.imageURL = i.target.value;
                                setNewItem(item);
                            }} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                </Button>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { props.setModalVisible(false) }} >Close</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
};
export default ProductForm;