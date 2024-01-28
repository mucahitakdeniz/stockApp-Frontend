import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
const Loading = () => {
  const { loading } = useSelector((state) => state.stock);
  const [loadingState, setloadingState] = useState(false);
  useEffect(() => {
    if (loading !== loadingState) {
      setloadingState(loading);
    }
  }, [loading, loadingState]);

  if (loadingState) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        width="100vw"
        height="100vh"
        position="fixed"
        top={0}
        left={0}
        zIndex={9999}
      >
        <Typography variant="h1" color="lightseagreen">
          Loading ...
        </Typography>
      </Box>
    );
  } else {
    return null;
  }
};

export default Loading;
