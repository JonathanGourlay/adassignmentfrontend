import { FirebaseAuthConsumer } from "@react-firebase/auth";
import React from "react";
import { Button, Navbar, NavDropdown } from "react-bootstrap";
import IsAuthed from "../scripts/globalState";
import { SignInWithGoogle, SignOut } from "../utils/firebase";

const Nav = () => {
    const { tryGetToken, setBasketModalVisible, basketModalVisible, setOrderModalVisible, orderModalVisible, isAdmin } = IsAuthed.useContainer();
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand>
                Home
    </Navbar.Brand>

            <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                    return (
                        isSignedIn ?
                            <Button
                                variant="dark"
                                style={
                                    { marginLeft: 20, marginRight: 20 }
                                }
                                onClick={() => {
                                    setOrderModalVisible(true)
                                }}>
                                Orders
            </Button> : null)
                }}
            </FirebaseAuthConsumer>


            <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                    return (
                        !isAdmin ?
                            <Button
                                variant="dark"
                                style={
                                    { marginLeft: 20, marginRight: 20 }
                                }
                                onClick={() => {
                                    setBasketModalVisible(true)
                                }}>
                                Basket
        </Button> : null)
                }}
            </FirebaseAuthConsumer>

            <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                    return (isSignedIn ? <Button variant="dark" onClick={() => {
                        SignOut().then(() => { tryGetToken(); });
                    }}>Log out</Button> : <Button variant="dark" onClick={() => SignInWithGoogle().then(() => { tryGetToken(); })}>Login</Button>)
                }}
            </FirebaseAuthConsumer>


        </Navbar>
    )
}

export default Nav;