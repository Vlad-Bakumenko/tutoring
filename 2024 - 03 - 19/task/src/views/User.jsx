import { useParams } from "react-router-dom";
import { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import { useNavigate } from "react-router-dom";

function User() {
  const { id } = useParams();
  const { state, dispatch, loggedInUser } = useContext(UsersContext);
  const navigate = useNavigate();

  return (
    <>
      {loggedInUser ? (
        <>
          <p>Welcome {loggedInUser.name}</p>
          <p>
            {" "}
            You are user {id} of {state.users.length}
          </p>
          <button
            onClick={() => {
              dispatch({ type: "logout" });
              navigate("/");
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <p>Unauthorized</p>
      )}
    </>
  );
}

export default User;
