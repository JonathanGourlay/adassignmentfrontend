import { stringify } from "querystring";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import apiClient from "../scripts/app/client";
import { BasketItem, BasketObject, ItemsObject } from '../scripts/app/client/client';
import IsAuthed from "../scripts/globalState";




interface IIDHandlerProps {
    orderModalVisible: boolean | undefined
    setOrderModalVisible: (show: boolean) => void;

}
const Orders = (props: IIDHandlerProps) => {
    let { token, isAdmin } = IsAuthed.useContainer();
    const [orders, setOrders] = React.useState<BasketObject[]>();

    const getOrders = async () => {
        try {
            if (token !== undefined) {
                const results = isAdmin ? await apiClient.getAdminOrders(token) : await apiClient.getOrders(token);

                console.log(results)
                if (results) {
                    setOrders(results);

                }
            }
        } catch (error) { }
    };
    React.useEffect(() => {
        getOrders();
    }, [token]);
    React.useEffect(() => {
        getOrders();
    }, [orders]);


    return (
        <>
            <Modal
                show={props.orderModalVisible}
            >
                <Modal.Header>
                    <Modal.Title>Orders</Modal.Title>
                </Modal.Header>
                <Modal.Body  >
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Order Total</th>
                                <th>Basket (Name : Quantity)</th>

                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders !== undefined &&
                                orders.map((order, index) => (
                                    <tr key={index}>
                                        <th style={{ width: 10 }}>{index}</th>
                                        <th style={{ width: 10 }}>£{order.orderTotal?.toFixed(2)}</th>
                                        <td style={{ width: '1rem' }}
                                        >
                                            {order.basketItems?.map((item) => (
                                                <>{item.name} : {item.quantity}, </>))}
                                        </td>
                                    </tr>)
                                )}
                        </tbody>
                    </table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => { props.setOrderModalVisible(false) }} >Close</Button>
                </Modal.Footer>

            </Modal>
        </>
    )
};
export default Orders;