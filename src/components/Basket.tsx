import React from "react";
import { Button, Modal } from "react-bootstrap";
import apiClient from "../scripts/app/client";
import { BasketItem, BasketObject, ItemsObject } from '../scripts/app/client/client';
import IsAuthed from "../scripts/globalState";

interface IIDHandlerProps {
    basketModalVisible: boolean | undefined
    basket: ItemsObject[] | undefined
    setBasketModalVisible: (show: boolean) => void;

}
const Basket = (props: IIDHandlerProps) => {
    let { token } = IsAuthed.useContainer();
    const OnOrderItemsClick = () => {
        const ItemsInBasket = new BasketObject({ basketItems: new Array<BasketItem>() });
        ItemsInBasket.token = token
        if (!props.basket || props.basket?.length === 0) return;

        props.basket.filter((basketItem, index, array) => {
            return index === array.findIndex((f) => {
                return f.itemID === basketItem.itemID && f.name === basketItem.name
            })
        }).forEach((element) => {
            ItemsInBasket.basketItems?.push(new BasketItem({ itemId: element.itemID, quantity: props.basket?.filter(x => x.itemID == element.itemID).length }))
        });
        apiClient.createOrder(ItemsInBasket)
        props.setBasketModalVisible(false)

    }
    return (
        <>
            <Modal
                show={props.basketModalVisible}
            >
                <Modal.Header>
                    <Modal.Title>Basket</Modal.Title>
                </Modal.Header>

                <Modal.Body  >


                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Description</th>
                                <th>Price</th>
                                <th>Stock Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.basket !== undefined &&
                                props.basket.map(({ name, description, price, stockCount }, index) => (<tr key={index}>
                                    <td>{name}</td>
                                    <td>{description}</td>
                                    <td>{price}</td>
                                    <td>{stockCount}</td>
                                </tr>)
                                )}
                        </tbody>

                    </table>

                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={() => OnOrderItemsClick()} >Order</Button>
                    <Button variant="secondary" onClick={() => { props.setBasketModalVisible(false) }} >Close</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
};
export default Basket;