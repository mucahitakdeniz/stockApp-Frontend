import React, { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import BasicModal from "../components/BasicModal";

const Brands = () => {
  const { getStockFunction } = useStockCall();
  const { brands } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    Image: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      Image: "",
    });
  };

  useEffect(() => {
    getStockFunction("brands");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{mb:4}}>
        New Brands
      </Button>
      <BasicModal
        open={open}
        handleClose={handleClose}
        setInfo={setInfo}
        info={info}
        url={"brands"}
      />
      <Box>
        <Cards
          data={brands}
          url={"brands"}
          handleOpen={handleOpen}
          setInfo={setInfo}
          info={info}
        />
      </Box>
    </div>
  );
};

export default Brands;
