import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route,Redirect } from 'react-router-dom';
import useAuth from './../AuthProvider/UseAuth';

const PrivatRoute = ({children,...rest}) => {
    const {user,isloading}=useAuth();
    
    if(isloading){
        return <Spinner animation="border" variant="warning" />

    }
    return (
        <Route
        {...rest}
        render={({location})=>
        user.displayName ? children : <Redirect to={{
            pathname: "/login",
            state: { from: location }
          }}>
              
          </Redirect>
    }
        >
            
        </Route>
    );
};

export default PrivatRoute;