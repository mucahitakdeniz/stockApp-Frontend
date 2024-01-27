import Box from "@mui/material/Box";
import loadingGif from "../assets/loading.gif";

const LoadingGif = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <img src={loadingGif} />
    </Box>
  );
};

export default LoadingGif;
