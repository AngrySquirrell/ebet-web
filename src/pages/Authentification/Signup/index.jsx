import './Signup.css';
import { Link } from 'react-router-dom';

function Signup() {
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
          <form action="http://109.205.56.69:4000/register" method="POST">
            <div>
              <label htmlFor="username">username</label>
              <input name="username" id="username" />
            </div>
            <div>
              <label htmlFor="password">password</label>
              <input name="password" id="password" type="password"/>
            </div>
            <div>
              <label htmlFor="confirm_password">confirm password</label>
              <input name="confirm_password" id="confirm_password" type="password" />
            </div>
            <div>
              <button>Register</button>
            </div>
          </form>
          <Link to='/login' className='loginButton'>Already have an account ?</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;