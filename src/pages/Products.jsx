import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import ProductModal from "../components/ProductModal";
import ProductTable from "../components/ProductTable";

const Products = () => {
  const { getProdCatBrands } = useStockCall();

  const [info, setInfo] = useState({
    name: "",
    category_id: "",
    brand_id: "",
  });
  const { products } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      name: "",
      category_id: "",
      brand_id: "",
    });
  };
  useEffect(() => {
   getProdCatBrands();
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={4}>
        Products
      </Typography>
      <Button variant="contained" onClick={handleOpen} sx={{ mb: 4 }}>
        New Product
      </Button>
      <ProductModal
        handleClose={handleClose}
        open={open}
        info={info}
        setInfo={setInfo}
      />
      <ProductTable />
    </div>
  );
};

export default Products;
