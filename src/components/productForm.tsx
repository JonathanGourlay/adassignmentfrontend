import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
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
    // const results =  apiClient.create();
    const [newItem, setNewItem] = React.useState<ItemsObject>();
    const [visible, setVisible] = React.useState<boolean>();
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
                            apiClient.create(props.newID, newItem?.name, newItem?.stockCount, newItem?.price, newItem?.description, token).then(() => { setTimeout(() => { props.onSubmit() }, 1000) });
                            props.setModalVisible(false)
                        }}
                    >
                        <Form.Group controlId="formBasicID">
                            <Form.Control type="number" value={props.newID} disabled={true} />
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Control type="name" placeholder="Item Name" onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.name = i.target.value;
                                setNewItem(item);
                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Control type="description" placeholder="Description" onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.description = i.target.value;
                                setNewItem(item);
                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPrice">
                            <Form.Control type="price" placeholder="Price" onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.price = Number.parseFloat(i.target.value);
                                setNewItem(item);
                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicStock">
                            <Form.Control type="stock" placeholder="Stock Count" onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.stockCount = Number.parseInt(i.target.value);
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