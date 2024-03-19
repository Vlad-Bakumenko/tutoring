import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";

function Login() {
  const navigate = useNavigate();
  const {state, dispatch} = useContext(UsersContext);

  useEffect(() => {
    if (state.loggedInUserId) {
      navigate(`/users/${state.loggedInUserId}`);
    }
  }, [state.loggedInUserId]);

  return (
    <>
      <h1>Login</h1>

      <form id="login">
        <label>Username</label>
        <input id="username" name="username" value={state.loginDetails.username} onChange={(e)=>dispatch({ type: "loginChange", payload: e.target })} />
        
        <label>Password</label>
        <input id="password" name="password" value={state.loginDetails.password} onChange={(e)=>dispatch({ type: "loginChange", payload: e.target })} />

        {state.formError && <p className="error">Incorrect username or password</p> }

        <button onClick={(e) => {
          e.preventDefault()         
          dispatch({ type: "loginSubmit" });
          }}>Submit</button>
      </form>
    </>
  );
}

export default Login;