import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, 
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import SearchToggle from './SearchToggleComponent';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            isLoginModalOpen: false,
            isPostModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
        this.toggleLoginModal = this.toggleLoginModal.bind(this);
        this.togglePostModal = this.togglePostModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleLoginModal() {
        this.setState({
            isLoginModalOpen: !this.state.isLoginModalOpen
        });
    }

    togglePostModal() {
        this.setState({
            isPostModalOpen: !this.state.isPostModalOpen
        });
    }

    handleLogin(event) {
        alert(`Username: ${this.username.value} Password: ${this.password.value} Remember: ${this.remember.checked}`);
        this.toggleLoginModal();
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark sticky="top" expand="sm">
                    <div className="container-fluid">
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" onClick={this.togglePostModal}>
                                    <i className="fa fa-pencil"></i> Post
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="mx-auto" navbar>
                            <NavItem>
                                <NavbarBrand className="mr-auto" href="/">
                                    <h2>Oddjobs</h2>
                                </NavbarBrand>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="nav-link" to="/home" onClick={this.toggleLoginModal}>
                                    <i className="fa fa-sign-in"></i> Login
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Modal isOpen={this.state.isLoginModalOpen} toggle={this.toggleLoginModal}>
                    <ModalHeader toggle={this.toggleLoginModal}>
                        <h3 className="modal-title">Login</h3>
                    </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username">Username</Label>
                                <Input type="text" id="username" name="username"
                                        innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                        innerRef={input => this.remember = input} />
                                    Remember Me
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Login</Button>
                        </Form>
                    </ModalBody>
                </Modal>
                <Modal isOpen={this.state.isPostModalOpen} toggle={this.togglePostModal}>
                    <ModalHeader toggle={this.togglePostModal}>
                        <h3 className="modal-title">Create Post</h3>
                    </ModalHeader>
                    <ModalBody>
                        <div className="container-fluid">
                            <Form>
                                <FormGroup className='form-group row'>
                                    <Label htmlFor="postTitle" className="col-3 col-form-label">Post Title</Label>
                                    <div className="col">
                                        <Input type="text" className="form-control" id="firstName" name="firstName" placeholder="An Interesting Title..." />
                                    </div>
                                </FormGroup>
                                <FormGroup className='form-group row'>
                                    <Label htmlFor="postDescription" className="col-12 col-form-label text-center">
                                        <SearchToggle />
                                    </Label>
                                    <div className="col-12 text-center">
                                        <textarea className="form-control" id="postDescription" name="postDescription" rows="4" placeholder="Keep it short though!"></textarea>
                                        <Label htmlFor="paygrade" className="col-12 col-form-label">How much are you willing to pay or charge?</Label>
                                        <Input type="number" name="paygrade" id="paygrade" className="rating hidden" data-clearable="remove" data-icon-lib="fa" data-active-icon="fa-circle" data-inactive-icon="fa-circle-o"/>
                                        <Label htmlFor="urgency" className="col-12 col-form-label">How urgent is your need?</Label>
                                        <Input type="number" name="urgency" id="urgency" className="rating hidden" data-clearable="remove" data-icon-lib="fa" data-active-icon="fa-circle" data-inactive-icon="fa-circle-o"/>
                                    </div>   
                                </FormGroup>
                                <FormGroup className='form-group row'>
                                    <div className="col text-right">
                                        <Button type="submit" value="submit" color="secondary">Cancel</Button>
                                        <Button type="submit" value="submit" color="primary">Post</Button>
                                    </div>
                                </FormGroup>
                            </Form>
                        </div>
                    </ModalBody>
                </Modal>
            </React.Fragment>
        );
    }
}

export default Header;

