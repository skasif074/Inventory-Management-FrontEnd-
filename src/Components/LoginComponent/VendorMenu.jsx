import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
//import DropdownButton from 'react-bootstrap/DropdownButton';
import {logoutUser} from '../../Services/LoginService';
import {useNavigate} from 'react-router-dom';


const VendorMenu = () => {

    let navigate=useNavigate();
  const handleLogout = () => {
  logoutUser().then(() => {
          localStorage.clear();
          sessionStorage.clear();
          navigate('/');
     })
  };
  return (
    <div>
      
    </div>
  )
}

export default VendorMenu
