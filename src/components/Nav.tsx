import { FirebaseAuthConsumer } from "@react-firebase/auth";
import React from "react";
import { Button, Navbar, NavDropdown } from "react-bootstrap";
import IsAuthed from "../scripts/globalState";
import { SignInWithGoogle, SignOut } from "../utils/firebase";

const Nav = () => {
    const { tryGetToken, setBasketModalVisible, basketModalVisible } = IsAuthed.useContainer();
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                Home
    </Navbar.Brand>
            <Button
                variant="dark"
                style={
                    { marginLeft: 20, marginRight: 20 }
                }
                onClick={() => {
                    setBasketModalVisible(true)
                }}>
                Orders
    </Button>
            <Button
                variant="dark"
                style={
                    { marginLeft: 20, marginRight: 20 }
                }
                onClick={() => {
                    setBasketModalVisible(true)
                }}>
                Basket
    </Button>
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