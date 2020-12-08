import React from 'react';
import ProductTable from './productTable';
import ProductTableAdmin from './productTableAdmin';
import "firebase/auth";
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import IsAuthed from '../scripts/globalState';




export default function ProductTableController() {
    let { isAdmin } = IsAuthed.useContainer();
    console.log(isAdmin)
    return (
        <FirebaseAuthConsumer>
            {({ isSignedIn }) => {
                return (
                    isSignedIn && isAdmin ?
                        <ProductTableAdmin /> : <ProductTable />)
            }}

        </FirebaseAuthConsumer>
    )
};