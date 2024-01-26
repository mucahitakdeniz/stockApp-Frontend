import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import PurchasesTable from "../components/PurchasesTable";
import PurchasesModal from "../components/PuchasesModal";

const Purchase = () => {
  const { getProdFirmBrandsPruchases } = useStockCall();
  const [info, setInfo] = useState({
    brand_id: "",
    product_id: "",
    firm_id: "",
    quantity: "",
    price: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      brand_id: "",
      product_id: "",
      firm_id: "",
      quantity: "",
      price: "",
    });
  };
  useEffect(() => {
    getProdFirmBrandsPruchases();
  }, []);
  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Purchases
      </Typography>
      <Button onClick={handleOpen} variant="contained" sx={{ mb: 4 }}>
        New Purchases
      </Button>
      <PurchasesModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
      />
      <Box>
        <PurchasesTable handleOpen={handleOpen} setInfo={setInfo} />
      </Box>
    </div>
  );
};

export default Purchase;
