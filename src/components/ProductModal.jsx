import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globasStyles";
import { FormControl, MenuItem, TextField } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";

export default function ProductModal({ handleClose, open, info, setInfo }) {
  const { categories } = useSelector((state) => state.stock);
  const { brands } = useSelector((state) => state.stock);
  const { createStockFunction } = useStockCall();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createStockFunction("products", info);
    handleClose();
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
          <TextField
            label="Product Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info?.name}
            onChange={handleChange}
            required
          />
          <FormControl fullWidth>
            <InputLabel id="category_id_label">Categories</InputLabel>
            <Select
              labelId="category_id_label"
              id="category_id"
              name="category_id"
              value={info?.category_id || ""}
              label="Categories"
              onChange={handleChange}
            >
              {categories.map((item) => (
                <MenuItem key={item._id} value={item._id}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

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

          <Button variant="contained" type="submit">
            Submit
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}
