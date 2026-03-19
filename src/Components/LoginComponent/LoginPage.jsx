import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { validateUser } from "../../Services/LoginService";
import '../../DisplayView.css'; 

const LoginPage = () => {
    const navigate = useNavigate();
    const [errors, setErrors] = useState({});
    const [flag, setFlag] = useState(true);
    const [loading, setLoading] = useState(false);
    const [loginData, setLoginData] = useState({ username: "", password: "" });

    const onChangeHandler = (event) => {
        setFlag(true);
        const { name, value } = event.target;
        setLoginData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: "" }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        let tempErrors = {};
        if (!loginData.username.trim()) tempErrors.username = "User Name is required";
        if (!loginData.password.trim()) tempErrors.password = "Password is required";

        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
            return;
        }

        setLoading(true);
        try {
            const response = await validateUser(loginData.username, loginData.password);
            const role = String(response.data);
            const routes = { "Admin": "/admin-menu", "Manager": "/manager-menu", "Vendor": "/vendor-menu" };

            if (routes[role]) navigate(routes[role]);
            else setFlag(false);
        } catch (error) {
            setFlag(false);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="glass-body">
            {/* Animated Background Shapes */}
            <div className="shape blob-1"></div>
            <div className="shape blob-2"></div>
            <div className="shape blob-3"></div>

            <div className="glass-container">
                {/* Left Panel: Welcome */}
                <div className="glass-left-panel">
                    <div className="welcome-inner">
                        <h1 className="fade-in">WELCOME</h1>
                        <h3 className="fade-in-delay-1">INVENTORY SYSTEM</h3>
                        <p className="fade-in-delay-2">
                            A seamless experience for managing your business assets in real-time.
                        </p>
                    </div>
                    {/* Decorative internal glass circles */}
                    <div className="inner-circle ic-1"></div>
                    <div className="inner-circle ic-2"></div>
                </div>

                {/* Right Panel: Sign In */}
                <div className="glass-right-panel">
                    <div className="signin-header">
                        <h2>Sign in</h2>
                        <p>Access your dashboard</p>
                    </div>

                    <form onSubmit={handleLogin} className="glass-form">
                        <div className="glass-input-group">
                            <input
                                type="text"
                                name="username"
                                placeholder="User Name"
                                value={loginData.username}
                                onChange={onChangeHandler}
                                className={errors.username ? "glass-input-err" : ""}
                            />
                        </div>
                        {errors.username && <span className="glass-err-msg">{errors.username}</span>}

                        <div className="glass-input-group">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={loginData.password}
                                onChange={onChangeHandler}
                                className={errors.password ? "glass-input-err" : ""}
                            />
                        </div>
                        {errors.password && <span className="glass-err-msg">{errors.password}</span>}

                        {!flag && <div className="glass-alert">Invalid credentials</div>}

                        <button type="submit" className="glass-btn-primary" disabled={loading}>
                            {loading ? "Verifying..." : "Sign In"}
                        </button>
                    </form>

                    <div className="glass-divider"><span>OR</span></div>

                    <button type="button" className="glass-btn-secondary" onClick={() => navigate('/register')}>
                        Register New User
                    </button>
                    
                    <p className="glass-footer-text">
                        Don't have an account? <b onClick={() => navigate('/register')}>Sign Up</b>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;