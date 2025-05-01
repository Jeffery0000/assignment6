import './LoginView.css';
import { useNavigate } from 'react-router-dom';

function LoginView() {
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        navigate('/movies');
    };

    return (
        <div className='login'>
            <h1 className='login-title'>Login</h1>
            <form className='login-form' onSubmit={handleLogin}>
                <label className='form-label' htmlFor="email">Email</label>
                <input id='email' type='email' name='email' className='form-input' required />
                <label htmlFor="password" className='form-label'>Password</label>
                <input id="password" type='password' name="password" className='form-input' required />
                <button type='submit' className='submit-button'>Login</button>
            </form>
        </div>
    );
}

export default LoginView;