import React, { useEffect } from 'react';
import apiClient from "../scripts/app/client";
import { ItemsObject } from '../scripts/app/client/client';
import { Table, Button, Navbar, Card } from 'react-bootstrap';
import { GetUserIdToken } from '../utils/firebase';
import ProductForm from './productForm';

export default function ProductTableAdmin() {
  GetUserIdToken().then(res => console.log(res)) // This is the function for getting the users UID from firebase
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
    <><table className="table table-striped table-dark">
      <thead>
        <tr>
          <th>Id #</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock Count</th>
          <th>Admin Edit Value</th>
        </tr>
      </thead>
      <tbody>
        {products !== undefined &&
          products.map(({ name, itemID, description, price, stockCount }, index) => (<tr key={index}>
            <td>{itemID}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{stockCount}</td>
            <td>
              <button type="button" className="btn btn-primary">Primary</button>
            </td>
          </tr>)
          )}
      </tbody>

    </table>
      <ProductForm></ProductForm></>

  )

};