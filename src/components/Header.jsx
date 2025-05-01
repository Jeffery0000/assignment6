import './Header.css';
import logoImage from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();

    return (
        <div className="header">
            <div className="title">
                <h1>Stream City</h1>
                <img className="logo-image" src={logoImage} alt="Logo Image" />
            </div>
            <div className="login-buttons">
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/register")}>Register</button>
            </div>
        </div>
    );
}

export default Header;