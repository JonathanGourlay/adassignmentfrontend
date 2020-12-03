import React, { useEffect } from 'react';
import apiClient from "../scripts/app/client/";
import { ItemsObject } from '../scripts/app/client/client';
import { Table, Button, Navbar, Card } from 'react-bootstrap';
import { GetUserIdToken } from '../utils/firebase';
import { FirebaseAuthConsumer } from '@react-firebase/auth';

export default function ProductTable() {
  //GetUserIdToken().then(res => console.log(res)) // This is the function for getting the users UID from firebase
  const [products, setProducts] = React.useState<ItemsObject[]>();
  useEffect(() => {
    const getProducts = async () => {
      try {
        const results = await apiClient.itemsAll();
        // console.log(results);
        if (results) {
          setProducts(results);
        }
      } catch (error) { }
    };
    getProducts();
  }, []);


  return (
    <table className="table table-striped table-dark">
      <tbody>
        {products !== undefined &&
          products.map(({ name, itemID, description, price, stockCount }, index) =>
            (<td>
              <Card className="text-center">
                <Card.Header></Card.Header>
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Text>
                    {description},
                {price}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
                <Card.Footer className="text-muted"></Card.Footer>
              </Card>
            </td>
            )
          )
        }
      </tbody>
    </table>
  )

};