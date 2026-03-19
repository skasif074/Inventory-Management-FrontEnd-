import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logoutUser } from '../../Services/LoginService';
import { useNavigate } from 'react-router-dom';
import '../../DisplayView.css';

const AdminMenu = () => {
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
            {/* Background Blobs for Glass Effect */}
            <div className="shape blob-1"></div>
            <div className="shape blob-2"></div>

            <div className="dashboard-container">
                {/* Modern Glass Navbar */}
                <Navbar expand="lg" className="glass-navbar">
                    <div className="container-fluid">
                        <Navbar.Brand href="#home" className="navbar-brand-glass">IMS ADMIN</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="SKU Management" id="sku-nav">
                                    <NavDropdown.Item onClick={() => navigate('/sku-list')}>SKU List</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate('/sku-entry')}>SKU Addition</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Products" id="product-nav">
                                    <NavDropdown.Item onClick={() => navigate('/product-entry')}>Product Addition</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => navigate('/product-list')}>Product List</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item>All Products Analysis</NavDropdown.Item>
                                    <NavDropdown.Item>Single Product Demand</NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Reports" id="report-nav">
                                    <NavDropdown.Item>Out Transaction Report</NavDropdown.Item>
                                    <NavDropdown.Item>In Transaction Report</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link onClick={() => navigate('/user-details')}>Users</Nav.Link>
                            </Nav>
                            <Nav>
                                <button className="logout-glass-btn" onClick={handleLogout}>
                                    Logout
                                </button>
                            </Nav>
                        </Navbar.Collapse>
                    </div>
                </Navbar>

                {/* Dashboard Content */}
                <div className="dashboard-content fade-in">
                    <div className="welcome-section">
                        <h1>Welcome back, <span>Admin</span></h1>
                        <p>What would you like to manage today?</p>
                    </div>

                    <div className="quick-stats">
                        <div className="stat-card" onClick={() => navigate('/sku-list')}>
                            <span className="stat-icon">📦</span>
                            <h4>SKU List</h4>
                            <p>View all Stock Keeping Units</p>
                        </div>
                        <div className="stat-card" onClick={() => navigate('/product-list')}>
                            <span className="stat-icon">🏷️</span>
                            <h4>Products</h4>
                            <p>Manage inventory items</p>
                        </div>
                        <div className="stat-card">
                            <span className="stat-icon">📊</span>
                            <h4>Reports</h4>
                            <p>Check transaction history</p>
                        </div>
                        <div className="stat-card">
                            <span className="stat-icon">👥</span>
                            <h4>Users</h4>
                            <p>Manage system access</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminMenu;