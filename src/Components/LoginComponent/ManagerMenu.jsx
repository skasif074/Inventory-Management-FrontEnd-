import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { logoutUser } from '../../Services/LoginService';
import { useNavigate } from 'react-router-dom';
import '../../DisplayView.css';

const ManagerMenu = () => {
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
            {/* Background Animations for Glass Theme */}
            <div className="shape blob-1"></div>
            <div className="shape blob-3"></div>

            <div className="dashboard-container">
                {/* Professional Glass Navbar */}
                <Navbar expand="lg" className="glass-navbar">
                    <div className="container-fluid">
                        <Navbar.Brand className="navbar-brand-glass">IMS MANAGER</Navbar.Brand>
                        <Navbar.Toggle aria-controls="manager-navbar-nav" />
                        <Navbar.Collapse id="manager-navbar-nav">
                            <Nav className="me-auto">
                                <NavDropdown title="SKU" id="manager-sku-nav">
                                    <NavDropdown.Item onClick={() => navigate('/sku-list')}>
                                        SKU List
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Product" id="manager-product-nav">
                                    <NavDropdown.Item onClick={() => navigate('/product-list')}>
                                        Product List
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        Product Analysis
                                    </NavDropdown.Item>
                                </NavDropdown>

                                <NavDropdown title="Reports" id="manager-report-nav">
                                    <NavDropdown.Item>Out Transaction Report</NavDropdown.Item>
                                    <NavDropdown.Item>In Transaction Report</NavDropdown.Item>
                                </NavDropdown>

                                <Nav.Link onClick={() => navigate('/user-details')}>
                                    User Details
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

                {/* Manager Dashboard Body */}
                <div className="dashboard-content fade-in">
                    <div className="welcome-section">
                        <h1>Welcome back, <span>Manager</span></h1>
                        <p>Monitor stock levels and analyze inventory reports.</p>
                    </div>

                    <div className="quick-stats">
                        <div className="stat-card" onClick={() => navigate('/product-list')}>
                            <span className="stat-icon">📦</span>
                            <h4>Inventory</h4>
                            <p>Check current stock levels</p>
                        </div>
                        <div className="stat-card">
                            <span className="stat-icon">📈</span>
                            <h4>Analysis</h4>
                            <p>Review product demand</p>
                        </div>
                        <div className="stat-card">
                            <span className="stat-icon">📜</span>
                            <h4>Reports</h4>
                            <p>Transaction summaries</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerMenu;