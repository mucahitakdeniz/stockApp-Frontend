import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import loadingGif from "../assets/loading.gif";
const Loading = () => {
  const { loading } = useSelector((state) => state.auth);
  const [loadingState, setloadingState] = useState(false);
  useEffect(() => {
    if (loading !== loadingState) {
      setloadingState(loading);
    }
  }, [loading, loadingState]);

  if (loadingState) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <img src={loadingGif} alt="loading" />
      </Box>
    );
  } else {
    return null;
  }
};

export default Loading;
