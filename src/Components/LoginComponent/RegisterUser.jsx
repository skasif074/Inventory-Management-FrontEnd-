import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerNewUser } from "../../Services/LoginService";
import '../../DisplayView.css';

const RegisterUser = () => {
    let navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [flag, setFlag] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [inventoryUser, setInventoryUser] = useState({
        username: "",
        password: "",
        personalName: "",
        email: "",
        role: "",
    });

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    useEffect(() => {
        setFlag(false);
    }, []);

    const onChangeHandler = (event) => {
        setFlag(false);
        const { name, value } = event.target;
        setInventoryUser(values => ({ ...values, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const handleValidation = (event) => {
        event.preventDefault();
        let tempErrors = {};
        let isValid = true;

        if (!inventoryUser.username.trim()) { tempErrors.username = "Required"; isValid = false; }
        if (!inventoryUser.personalName.trim()) { tempErrors.personalName = "Required"; isValid = false; }
        
        if (!inventoryUser.email.trim()) { 
            tempErrors.email = "Required"; isValid = false; 
        } else if (!emailPattern.test(inventoryUser.email)) {
            tempErrors.email = "Invalid format"; isValid = false;
        }

        if (!inventoryUser.password.trim()) {
            tempErrors.password = "Required"; isValid = false;
        } else if (inventoryUser.password.length < 5 || inventoryUser.password.length > 10) {
            tempErrors.password = "5-10 chars"; isValid = false;
        }

        if (inventoryUser.password !== confirmPassword) {
            tempErrors.confirmPassword = "Mismatch"; isValid = false;
        }

        if (!inventoryUser.role.trim()) { tempErrors.role = "Required"; isValid = false; }

        setErrors(tempErrors);
        if (isValid) {
            registerNewUser(inventoryUser).then(() => setFlag(true));
        }
    };

    return (
        <div className="glass-body">
            {/* Background Animations */}
            <div className="shape blob-1"></div>
            <div className="shape blob-2"></div>
            <div className="shape blob-3"></div>

            <div className="glass-container register-wide">
                {/* Left Panel */}
                <div className="glass-left-panel">
                    <div className="welcome-inner">
                        <h1 className="fade-in">JOIN US</h1>
                        <h3 className="fade-in-delay-1">START MANAGING</h3>
                        <p className="fade-in-delay-2">
                            Create your account to access the Inventory Management System and streamline your workflow today.
                        </p>
                    </div>
                    <div className="inner-circle ic-1"></div>
                </div>

                {/* Right Panel: Form */}
                <div className="glass-right-panel">
                    <div className="signin-header">
                        <h2>Register</h2>
                        <p>Fill in the details to get started</p>
                    </div>

                    <form className="glass-form-grid" onSubmit={handleValidation}>
                        <div className="glass-input-group">
                            <label>Full Name</label>
                            <input type="text" name="personalName" placeholder=" " value={inventoryUser.personalName} onChange={onChangeHandler} className={errors.personalName ? "glass-input-err" : ""} />
                            {errors.personalName && <span className="glass-err-msg">{errors.personalName}</span>}
                        </div>

                        <div className="glass-input-group">
                            <label>Email Address</label>
                            <input type="email" name="email" placeholder=" " value={inventoryUser.email} onChange={onChangeHandler} className={errors.email ? "glass-input-err" : ""} />
                            {errors.email && <span className="glass-err-msg">{errors.email}</span>}
                        </div>

                        <div className="glass-input-group">
                            <label>Username</label>
                            <input type="text" name="username" placeholder=" " value={inventoryUser.username} onChange={onChangeHandler} className={errors.username ? "glass-input-err" : ""} />
                            {errors.username && <span className="glass-err-msg">{errors.username}</span>}
                        </div>

                        <div className="glass-input-group">
                            <label>Role</label>
                            <select name="role" value={inventoryUser.role} onChange={onChangeHandler} className={errors.role ? "glass-input-err" : ""}>
                                <option value="">Select Role</option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                                <option value="Vendor">Vendor</option>
                            </select>
                            {errors.role && <span className="glass-err-msg">{errors.role}</span>}
                        </div>

                        <div className="glass-input-group">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="••••••••" value={inventoryUser.password} onChange={onChangeHandler} className={errors.password ? "glass-input-err" : ""} />
                            {errors.password && <span className="glass-err-msg">{errors.password}</span>}
                        </div>

                        <div className="glass-input-group">
                            <label>Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder="••••••••" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className={errors.confirmPassword ? "glass-input-err" : ""} />
                            {errors.confirmPassword && <span className="glass-err-msg">{errors.confirmPassword}</span>}
                        </div>

                        <div className="form-full-width">
                            {flag ? (
                                <div className="glass-success-box">
                                    <p>Account Created Successfully!</p>
                                    <button type="button" className="glass-btn-primary" onClick={() => navigate('/')}>Go to Login</button>
                                </div>
                            ) : (
                                <button type="submit" className="glass-btn-primary">Create Account</button>
                            )}
                        </div>
                    </form>

                    <p className="glass-footer-text">
                        Already have an account? <b onClick={() => navigate('/')}>Sign In</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterUser;