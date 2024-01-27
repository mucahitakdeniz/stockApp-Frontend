import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingGif from "../components/LoadingGif";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.auth);
  const { loading: loadingUser } = useSelector((state) => state.auth);

  const { loading } = useSelector((state) => state.stock);
  const gif = loading ? loading : loadingUser;
  return (
    <>
      {gif && <LoadingGif />}
      {currentUser ? <Outlet /> : <Navigate to="/" />}
    </>
  );
};

export default PrivateRouter;
