import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <div>
            <div className='return'>
                <Link to='/' className='returnButton'>Return</Link>
            </div>
            <div className='Login'>
                <div className='LoginTitle'>
                    <h1>Login</h1>
                </div>
                <div className='LoginForm'>
                    <form>
                        <div className='LoginFormInput'>
                            <label>Email</label>
                            <input type='text' placeholder='Email'/>
                            <label>Username</label>
                            <input type='text' placeholder='Username'/>
                            <label>Password</label>
                            <input type='password' placeholder='Password'/>
                            <button>Login</button>
                        </div>
                    </form>
                </div>
                </div>
        </div>
    )
}
export default Login;