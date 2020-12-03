import React from "react";
import { Form, Button, Modal } from "react-bootstrap";
import apiClient from "../scripts/app/client";
import { ItemsObject } from '../scripts/app/client/client';
import IsAuthed from "../scripts/globalState";

interface IIDHandlerProps {
    editModalVisible: boolean
    editItem: ItemsObject | undefined
    onSubmit: () => void
    setEditModalVisible: (show: boolean) => void;

}
const ProductEditForm = (props: IIDHandlerProps) => {
    // const results =  apiClient.create();
    const [newItem, setNewItem] = React.useState<ItemsObject>();
    let { token } = IsAuthed.useContainer();
    return (
        <>
            <Modal
                show={props.editModalVisible}
            >
                <Modal.Header>
                    <Modal.Title>Create New Item</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form
                        onSubmit={() => {
                            apiClient.update(props.editItem?.itemID,
                                newItem?.name ? newItem.name : props.editItem?.name,
                                newItem?.stockCount ? newItem?.stockCount : props.editItem?.stockCount,
                                newItem?.price ? newItem.price : props.editItem?.price,
                                newItem?.description ? newItem.description : props.editItem?.description,
                                token).then(() => { setTimeout(() => { props.onSubmit() }, 1000) });
                        }}
                    >
                        <Form.Group controlId="formBasicID">
                            <Form.Control type="number" defaultValue={props.editItem?.itemID} disabled={true} />
                        </Form.Group>
                        <Form.Group controlId="formBasicName">
                            <Form.Control type="name" defaultValue={props.editItem?.name} onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.name = i.target.value;
                                setNewItem(item);
                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicDescription">
                            <Form.Control type="description" defaultValue={props.editItem?.description} onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.description = i.target.value;
                                setNewItem(item);
                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPrice">
                            <Form.Control type="price" defaultValue={props.editItem?.price} onChange={(i) => {
                                const item = newItem ?? new ItemsObject();
                                item.price = Number.parseFloat(i.target.value);
                                setNewItem(item);
                            }} />
                        </Form.Group>

                        <Form.Group controlId="formBasicStock">
                            <Form.Control type="stock" defaultValue={props.editItem?.stockCount} onChange={(i) => {
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
                    <Button variant="secondary" onClick={() => { props.setEditModalVisible(false) }} >Close</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
};
export default ProductEditForm;