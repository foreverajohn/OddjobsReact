import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import NavItem from 'reactstrap/lib/NavItem';

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar dark sticky="top" expand="sm">
                    <div className="container-fluid">
                        <Nav className="mx-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <i className="fa fa-pencil"></i> Post
                                </NavLink>
                            </NavItem>  
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    <NavbarBrand href="/"><h2>Oddjobs</h2></NavbarBrand>
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/home ">
                                    <i className="fa fa-sign-in"></i> Login
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
            </div>
        );
    }
}

export default Header;

