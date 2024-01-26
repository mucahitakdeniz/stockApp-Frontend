import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globasStyles";
import { TextField } from "@mui/material";
import useStockCall from "../hooks/useStockCall";
export default function BasicModal({ open, handleClose, setInfo, info, url }) {
  const { createStockFunction, updateStockFunction } = useStockCall();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      updateStockFunction(url, info);
    } else {
      createStockFunction(url, info);
    }
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
            label="Firm Name"
            name="name"
            id="name"
            type="text"
            variant="outlined"
            value={info?.name}
            onChange={handleChange}
            required
          />

          {url == "firms" && (
            <TextField
              label="Address"
              name="address"
              id="address"
              type="text"
              variant="outlined"
              value={info?.address}
              onChange={handleChange}
              required
            />
          )}
          {url == "firms" && (
            <TextField
              label="Phone"
              name="phone"
              id="phone"
              type="tel"
              variant="outlined"
              value={info?.phone}
              onChange={handleChange}
              required
            />
          )}
          <TextField
            label="İmage"
            name="image"
            id="image"
            type="url"
            variant="outlined"
            value={info?.image}
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
}
