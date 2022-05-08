import './Login.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div>
            <div className='return'>
                <Link to='/' className='returnButton'>Return</Link>
            </div>
            <div className='Login'>
                <div className='LoginTitle'>
                    <h1>Login</h1>
                </div>
                <div className='LoginForm'>
                    <form action="http://109.205.56.69:4000/login" method="POST">
                        <div>
                            <label htmlFor="username">username</label>
                            <input name="username" id="username" />
                        </div>
                        <div>
                            <label htmlFor="password">password</label>
                            <input name="password" id="password" type="password" />
                        </div>
                        <div>
                            <button>Login</button>
                        </div>
                    </form>
                    <Link to='/signup' className='signupButton'>Not yet a member ?</Link>
                </div>
            </div>
        </div>
    )
}
export default Login;