import { FirebaseAuthConsumer } from "@react-firebase/auth";
import React from "react";
import { Button, Navbar, NavDropdown } from "react-bootstrap";
import IsAuthed from "../scripts/globalState";
import { SignInWithGoogle, SignOut } from "../utils/firebase";

const Nav = () => {
    const { tryGetToken } = IsAuthed.useContainer();

    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">
                Home
    </Navbar.Brand>
            <Navbar.Brand href="#items">
                Items
    </Navbar.Brand>
            <Navbar.Brand href="#orders">
                Orders
    </Navbar.Brand>
            <Navbar.Brand href="#basket">
                Basket
    </Navbar.Brand>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            <FirebaseAuthConsumer>
                {({ isSignedIn }) => {
                    return (isSignedIn ? <Button onClick={() => {
                        SignOut().then(() => { tryGetToken(); });
                    }}>Log out</Button> : <Button onClick={() => SignInWithGoogle().then(() => { tryGetToken(); })}>Login</Button>)
                }}
            </FirebaseAuthConsumer>


        </Navbar>
    )
}

export default Nav;