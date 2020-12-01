import React from 'react';
import ProductTable from './productTable';
import ProductTableAdmin from './productTableAdmin';
import "firebase/auth";
import { FirebaseAuthConsumer } from '@react-firebase/auth';
import IsAuthed from '../scripts/globalState';




export default function ProductTableController() {
    let { isAdmin } = IsAuthed.useContainer();

    return (
        <FirebaseAuthConsumer>
            {({ isSignedIn }) => {
                console.log({ isSignedIn }, { isAdmin })

                return (
                    isSignedIn && isAdmin ?
                        <ProductTableAdmin /> : <ProductTable />)
            }}

        </FirebaseAuthConsumer>
    )
};