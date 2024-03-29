import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";

const AuthGuard = (props) => {
  const { isAuthenticated } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to={Path.Login} />;
  }
  return (
    <>
      {props.children}
    </>
  );
}

export default AuthGuard;