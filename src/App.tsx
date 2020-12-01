import React from 'react';
import './App.css';

import firebase from "firebase/app";
import "firebase/auth";
import { FirebaseAuthProvider } from '@react-firebase/auth';
import { firebaseConfig } from './utils/firebase';
import ProductTableController from './components/productTableController';
import IsAuthed from './scripts/globalState';
import Nav from './components/Nav';

function App() {
  return (
    <FirebaseAuthProvider firebase={firebase} {...firebaseConfig}>
      <IsAuthed.Provider>
        <div className="App">
          <Nav />
          <ProductTableController></ProductTableController>
        </div>
      </IsAuthed.Provider>
    </FirebaseAuthProvider >
  );
}

export default App;
