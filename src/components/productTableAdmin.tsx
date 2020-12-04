import React, { useEffect } from 'react';
import apiClient from "../scripts/app/client";
import { ItemsObject } from '../scripts/app/client/client';
import { Table, Button, Navbar, Card } from 'react-bootstrap';
import { GetUserIdToken } from '../utils/firebase';
import ProductForm from './productForm';
import ProductEditForm from './productEditForm';
import IsAuthed from '../scripts/globalState';

export default function ProductTableAdmin() {
  // GetUserIdToken().then(res => console.log(res)) // This is the function for getting the users UID from firebase
  const [products, setProducts] = React.useState<ItemsObject[]>();
  const [largeID, setLargeID] = React.useState<number>();
  let { token } = IsAuthed.useContainer();
  const [modalVisible, setModalVisible] = React.useState(false)
  const [editModalVisible, setEditModalVisible] = React.useState(false)
  const [itemToEdit, setItemToEdit] = React.useState<ItemsObject>();

  const getProducts = async () => {
    try {
      const results = await apiClient.itemsAll();
      if (results) {
        setProducts(results);
      }
    } catch (error) { }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const deleteProducts = (itemID: number | undefined, index: number) => {
    apiClient.delete(token, itemID)
    const newProducts = products?.filter((item) => item.itemID !== itemID);
    setProducts(newProducts)
  };

  React.useEffect(() => {
    if (products !== undefined) {
      setLargeID(products !== undefined ? products.length : 0)
    }
  }, [products]) // run when products changes


  return (
    <><table className="table table-striped table-dark">
      <thead>
        <tr>
          <th>Id #</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Stock Count</th>
          <th>Admin Edit</th>
          <th>Admin Delete</th>
        </tr>
      </thead>
      <tbody>
        {
          products !== undefined &&
          products.map(({ name, itemID, description, price, stockCount, imageURL }, index) => (<tr key={index}>
            <td>{itemID}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{price}</td>
            <td>{stockCount}</td>
            <td>
              <button type="button" className="btn btn-primary" onClick={() => {
                const item = itemToEdit ?? new ItemsObject();
                item.name = name;
                item.itemID = itemID;
                item.description = description;
                item.price = price;
                item.stockCount = stockCount;
                item.imageURL = imageURL;
                setItemToEdit(item)
                setEditModalVisible(true)
              }}>Edit Item</button>
            </td>
            <td>
              <button type="button" className="btn btn-primary" onClick={() => deleteProducts(itemID, index)}>Delete Item</button>
            </td>
          </tr>)
          )}
        <tr>
          <td colSpan={7}>
            <button type="button" className="btn btn-primary" onClick={() => setModalVisible(true)}>New Item</button>
          </td>
        </tr>
      </tbody>

    </table>
      <ProductForm
        newID={largeID as number}
        onSubmit={() => { getProducts() }}
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      ></ProductForm>

      <ProductEditForm
        onSubmit={() => { getProducts() }}
        setEditModalVisible={setEditModalVisible}
        editModalVisible={editModalVisible}
        editItem={itemToEdit}
      ></ProductEditForm>
    </>

  )

};