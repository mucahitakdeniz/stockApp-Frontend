import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globasStyles";
import { FormControl, MenuItem, TextField } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

const SaleModal = ({ handleClose, open, info, setInfo }) => {
  const { products } = useSelector((state) => state.stock);
  const { brands } = useSelector((state) => state.stock);
  const { createStockFunction, updateStockFunction } = useStockCall();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      updateStockFunction("sales",info);
    } else {
      createStockFunction("sales", info);
    }
    handleClose();
  };

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          component="form"
          onSubmit={handleSubmit}
        >
          <FormControl fullWidth>
            <InputLabel id="brand">Brands</InputLabel>
            <Select
              labelId="brand_id"
              id="brand_id"
              name="brand_id"
              value={info?.brand_id || ""}
              label="brand_id"
              onChange={handleChange}
            >
              {brands.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="products">Products</InputLabel>
            <Select
              labelId="product_id"
              id="product_id"
              name="product_id"
              value={info?.product_id || ""}
              label="product_id"
              onChange={handleChange}
            >
              {products.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            label="Quantity"
            name="quantity"
            id="quantity"
            type="number"
            variant="outlined"
            value={info?.quantity}
            onChange={handleChange}
            required
          />
          <TextField
            label="Price"
            name="price"
            id="price"
            type="number"
            variant="outlined"
            value={info?.price}
            onChange={handleChange}
            required
          />

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default SaleModal;
