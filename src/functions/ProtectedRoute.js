import { Navigate } from "react-router-dom";
import { useSharedData } from "./SharedDataContext";

function ProtectedRoute({ children }) {
  const { isLogin } = useSharedData();

  if (!isLogin) {
    return <Navigate to="/login" replace={true}></Navigate>;
  }

  return children;
}

export default ProtectedRoute;
