import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { modalStyle } from "../styles/globasStyles";
import { FormControl, MenuItem, TextField, Typography } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import useUserCall from "../hooks/useUserCall";
const UserModal = ({ handleClose, open, info, setInfo }) => {
  const trueFalse = [false, true];
  const { updateUserFunction } = useUserCall();
  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateUserFunction(info._id, info);
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
            label="User Name"
            id="username"
            name="username"
            value={info?.username}
            type="text"
            variant="outlined"
            onChange={handleChange}
            required
          />
          <TextField
            label="Email"
            id="email"
            name="email"
            value={info?.email}
            type="text"
            variant="outlined"
            onChange={handleChange}
            required
          />
          <TextField
            label="First Name"
            id="first_name"
            name="first_name"
            value={info?.first_name}
            type="text"
            variant="outlined"
            onChange={handleChange}
            required
          />
          <TextField
            label="Last Name"
            id="last_name"
            name="last_name"
            value={info?.last_name}
            type="text"
            variant="outlined"
            onChange={handleChange}
            required
          />
          <FormControl fullWidth>
            <InputLabel id="active">Active</InputLabel>
            <Select
              labelId="is_active"
              id="is_active"
              name="is_active"
              value={info?.is_active}
              onChange={handleChange}
            >
              {trueFalse.map((item, i) => (
                <MenuItem key={i} value={item.toString()}>
                  {item.toString().toLocaleUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="staff">Staff</InputLabel>
            <Select
              labelId="is_staff"
              id="is_staff"
              name="is_staff"
              value={info?.is_staff}
              onChange={handleChange}
            >
              {trueFalse.map((item, i) => (
                <MenuItem key={i} value={item.toString()}>
                  {item.toString().toLocaleUpperCase()}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="admin">Admin</InputLabel>
            <Select
              labelId="is_superadmin"
              id="is_superadmin"
              name="is_superadmin"
              value={info?.is_superadmin}
              onChange={handleChange}
            >
              {trueFalse.map((item, i) => (
                <MenuItem key={i} value={item.toString()}>
                  {item.toString().toLocaleUpperCase()}
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
};

export default UserModal;
