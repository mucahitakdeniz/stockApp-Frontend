import { fetchStart, fetchFail, getUserSuccess } from "../features/userSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";

import useAxios from "./useAxios";

const useUserCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getUserFunction = async () => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get("users");
      dispatch(getUserSuccess(data));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };
  const updateUserFunction = async (id, info) => {
    dispatch(fetchStart());
    console.log("info :", info);
    try {
      await axiosWithToken.patch(`users/${id}`, info);
      getUserFunction();
      toastSuccessNotify("User updated");
    } catch (error) {
      console.log(error);
      toastErrorNotify("Failed to update user");
      dispatch(fetchFail());
    }
  };
  const deleteUserFunction = async (id) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.delete(`/users/${id}`);
      getUserFunction();
      toastSuccessNotify("User deleted");
    } catch (error) {
      console.log(error);
      toastErrorNotify("Failed to delete user");
      dispatch(fetchFail());
    }
  };

  return { getUserFunction, deleteUserFunction, updateUserFunction };
};

export default useUserCall;
