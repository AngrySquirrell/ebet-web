import './Signup.css';

function Signup() {
  return (
      <form action="http://109.205.56.69:4000/register" method="POST">
        <div>
          <label htmlFor="username">username</label>
          <input name="username" id="username"/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input name="password" id="password"/>
        </div>
          <div>
              <label htmlFor="confirm_password">confirm password</label>
              <input name="confirm_password" id="confirm_password"/>
          </div>
        <div>
          <button>Login</button>
        </div>
      </form>
  );
}

export default Signup;