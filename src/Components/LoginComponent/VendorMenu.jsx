import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { logoutUser } from '../../Services/LoginService';
import { useNavigate } from 'react-router-dom';
import '../../DisplayView.css';

const VendorMenu = () => {
    let navigate = useNavigate();

    const handleLogout = () => {
        logoutUser().then(() => {
            localStorage.clear();
            sessionStorage.clear();
            navigate('/');
        });
    };

    return (
        <div className="dashboard-body">
            {/* Background Animations */}
            <div className="shape blob-2"></div>
            <div className="shape blob-3"></div>

            <div className="dashboard-container">
                {/* Glass Navbar */}
                <Navbar expand="lg" className="glass-navbar">
                    <div className="container-fluid">
                        <Navbar.Brand className="navbar-brand-glass">IMS VENDOR</Navbar.Brand>
                        <Navbar.Toggle aria-controls="vendor-navbar-nav" />
                        <Navbar.Collapse id="vendor-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link onClick={() => navigate('/user-details')}>
                                    Account Details
                                </Nav.Link>
                                <Nav.Link onClick={() => navigate('/product-list')}>
                                    My Inventory
                                </Nav.Link>
                            </Nav>
                            
                            <Nav>
                                <button className="logout-glass-btn" onClick={handleLogout}>
                                    Logout
                                </button>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>

                {/* Vendor Dashboard Content */}
                <div className="dashboard-content fade-in">
                    <div className="welcome-section">
                        <h1>Welcome back, <span>Vendor</span></h1>
                        <p>Manage your profile and track your supplied inventory items.</p>
                    </div>

                    <div className="quick-stats">
                        <div className="stat-card" onClick={() => navigate('/user-details')}>
                            <span className="stat-icon">👤</span>
                            <h4>Profile</h4>
                            <p>View your account info</p>
                        </div>
                        <div className="stat-card" onClick={() => navigate('/product-list')}>
                            <span className="stat-icon">📦</span>
                            <h4>Products</h4>
                            <p>Check your stock status</p>
                        </div>
                        <div className="stat-card">
                            <span className="stat-icon">📩</span>
                            <h4>Support</h4>
                            <p>Contact administration</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VendorMenu;