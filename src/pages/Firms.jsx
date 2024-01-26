import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Cards from "../components/Cards";
import { Box } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import BasicModal from "../components/BasicModal";

const Firms = () => {
  const { getStockFunction } = useStockCall();
  const { firms } = useSelector((state) => state.stock);
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    Image: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      phone: "",
      address: "",
      Image: "",
    });
  };

  useEffect(() => {
    getStockFunction("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Firms
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{mb:4}}>
        New Firm
      </Button>
      <BasicModal
        open={open}
        handleClose={handleClose}
        setInfo={setInfo}
        info={info}
        url={"firms"}
      />
      <Box>
        <Cards
          data={firms}
          url={"firms"}
          handleOpen={handleOpen}
          setInfo={setInfo}
          info={info}
        />
      </Box>
    </div>
  );
};

export default Firms;
