import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form,  Nav, Navbar, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import OffCanvasExample from '../../DashBord/DashBord';
import useAuth from './../../AuthProvider/UseAuth';
const Header = () => {
  const {user,logout}=useAuth();
    return (
      <>     
      <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">
  <img src='/image/logo.png' className='w-50' alt=''/>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mx-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to="/home">Home</Nav.Link>
        <Nav.Link as={Link} to="service">service</Nav.Link>
        <Nav.Link href="#action2">about</Nav.Link>
        
      </Nav>
      <Form className="d-flex">
      {user.displayName && <p>{user.displayName}</p>}
        <Link to='/login'>
          <OffCanvasExample/>
       {user.displayName ? <button className='btn btn-danger'  onClick={logout}>logout</button> : <Button className='btn btn-primary' variant="outline-success">Login</Button>}
        </Link>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
      </>
    );
};

export default Header;