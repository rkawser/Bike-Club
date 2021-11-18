import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
import { render } from '@testing-library/react';
import { ImProfile } from "react-icons/im";
import useAuth from './../AuthProvider/UseAuth';
import { AiOutlineLogout } from "react-icons/ai";
import { MdRateReview } from "react-icons/md";
import { FaAmazonPay,FaFirstOrder } from "react-icons/fa";
import { Link } from 'react-router-dom';

function OffCanvasExample({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
   const {user,logout}=useAuth();
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2 btn bg-success text-white">
          {name} <ImProfile/>
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              Profile
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            {user.displayName && <h4>{user.displayName}</h4>}
            <hr/>

            <Link to='/myorders'>
            <button className='btn btn-info d-block my-1 px-5'><FaFirstOrder/>My-orders</button>
            </Link>
                      
            <Link to='/payment'>
            <button className='btn btn-dark px-5'><FaAmazonPay/>Payment</button>
            </Link>

            <Link to='/review'> 
            <button className='btn btn-success my-1 d-block px-5'><MdRateReview/>Review</button>
            </Link>
          
           { user.displayName && <button className='btn btn-warning' onClick={logout}><AiOutlineLogout/>LogOut</button>}
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  export default OffCanvasExample;