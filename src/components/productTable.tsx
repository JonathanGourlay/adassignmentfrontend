import React, { useEffect } from 'react';
import apiClient from "../scripts/app/client/";
import { ItemsObject } from '../scripts/app/client/client';
import { Table, Button, Navbar, Card, Container, Row, Col } from 'react-bootstrap';
import { GetUserIdToken } from '../utils/firebase';
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import IsAuthed from '../scripts/globalState';
import Basket from './Basket';

export default function ProductTable() {
  //GetUserIdToken().then(res => console.log(res)) // This is the function for getting the users UID from firebase
  const [products, setProducts] = React.useState<ItemsObject[]>();
  const [basket, setBasket] = React.useState<ItemsObject[]>();
  let { setBasketModalVisible, basketModalVisible } = IsAuthed.useContainer();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const results = await apiClient.itemsAll();
        if (results) {
          setProducts(results);
        }
      } catch (error) { }
    };
    getProducts();
  }, []);


  return (
    <Container fluid={true}>
      <Row md={5}>
        {products !== undefined &&
          products.map(({ name, itemID, description, price, stockCount, imageURL }, index) =>
            (
              <Col>
                <Card
                  bg={'info'}
                  text={'light'}
                  border={'dark'}
                  style={{ width: '14rem', marginTop: 40, objectFit: 'cover' }}>
                  <Card.Header></Card.Header>
                  <Card.Img variant="top" src={imageURL} style={{ height: '8rem', objectFit: 'cover', width: '10rem', alignSelf: 'center', marginTop: '1rem' }} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                      {description}

                    </Card.Text>
                    <Card.Text>{"£" + price}</Card.Text>
                    <Button variant="primary" onClick={(i) => {
                      const item = new ItemsObject();
                      item.name = name;
                      item.itemID = itemID;
                      item.description = description;
                      item.price = price;
                      item.stockCount = stockCount;
                      item.imageURL = imageURL;
                      const list = basket || [];
                      list.push(item)
                      setBasket(list);
                    }}>Add To Basket</Button>
                  </Card.Body>
                  <Card.Footer className="text-muted"></Card.Footer>
                </Card>
              </Col>
            )
          )
        }
      </Row>
      <Basket
        setBasketModalVisible={setBasketModalVisible}
        basketModalVisible={basketModalVisible}
        basket={basket}
      ></Basket>
    </Container>

  )

};