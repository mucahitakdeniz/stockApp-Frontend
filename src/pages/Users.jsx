import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toastWarnNotify } from "../helper/ToastNotify";
import { Typography } from "@mui/material";
import UsersTable from "../components/UsersTable";
import { useSelector } from "react-redux";
import useUserCall from "../hooks/useUserCall";
import UserModal from "../components/UserModal";

const Users = () => {
  const { getUserFunction } = useUserCall();
  const { isAdmin } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const [info, setInfo] = useState({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    is_active: "",
    is_staff: "",
  });
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setInfo({
      username: "",
      email: "",
      first_name: "",
      last_name: "",
      is_active: "",
      is_staff: "",
    });
  };
  useEffect(() => {
    if (!isAdmin) {
      toastWarnNotify("You must admin");
      navigate("/stock");
    }
    getUserFunction();
  }, []);

  return (
    <div>
      <Typography variant="h4" color={"error"} mb={5}>
        Users
      </Typography>
      <UserModal
        info={info}
        setInfo={setInfo}
        handleClose={handleClose}
        open={open}
      />

      <UsersTable handleOpen={handleOpen} setInfo={setInfo} />
    </div>
  );
};

export default Users;
