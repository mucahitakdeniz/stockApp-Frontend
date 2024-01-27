import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useDispatch } from "react-redux";
import {
  fetchFail,
  fetchStart,
  getStockSuccess,
  getProdCatBrandsSuccess,
  getProdSalesBrandsSuccess,
  getProdFirmBrandsPruchasesSuccess,
  getSalesPurchasesSuccess,
} from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCall = () => {
  const { axiosWithToken } = useAxios();
  const dispatch = useDispatch();

  const getStockFunction = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken.get(`/${url}`);
      dispatch(getStockSuccess({ url, data }));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };
  const getProdCatBrands = async (url) => {
    dispatch(fetchStart());
    try {
      const [products, categories, brands] = await Promise.all([
        axiosWithToken.get(`/products`),
        axiosWithToken.get(`/categories`),
        axiosWithToken.get(`/brands`),
      ]);
      dispatch(
        getProdCatBrandsSuccess([
          products?.data,
          categories?.data,
          brands?.data,
        ])
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };
  const getProdSalesBrands = async (url) => {
    dispatch(fetchStart());
    try {
      const [products, sales, brands] = await Promise.all([
        axiosWithToken.get(`/products`),
        axiosWithToken.get(`/sales`),
        axiosWithToken.get(`/brands`),
      ]);
      dispatch(
        getProdSalesBrandsSuccess([products?.data, sales?.data, brands?.data])
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };
  const getSalesPurchases = async () => {
    dispatch(fetchStart());
    try {
      const [sales, purchases] = await Promise.all([
        axiosWithToken.get(`/sales`),
        axiosWithToken.get(`/purchases`),
      ]);
      dispatch(getSalesPurchasesSuccess([sales?.data, purchases?.data]));
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };
  const getProdFirmBrandsPruchases = async (url) => {
    dispatch(fetchStart());
    try {
      const [products, firms, brands, purchases] = await Promise.all([
        axiosWithToken.get(`/products`),
        axiosWithToken.get(`/firms`),
        axiosWithToken.get(`/brands`),
        axiosWithToken.get(`/purchases`),
      ]);
      dispatch(
        getProdFirmBrandsPruchasesSuccess([
          products?.data,
          firms?.data,
          brands?.data,
          purchases?.data,
        ])
      );
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(
        error?.response?.data?.message || "Something went wrong"
      );
    }
  };
  const deleteStockFunction = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get.delete(`/${url}/${id}`);
      toastSuccessNotify("Deletion successful");

      getStockFunction(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      toastErrorNotify(error?.response?.data?.message || "Delete failed");
    }
  };
  const createStockFunction = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get.post(`/${url}/`, info);
      toastSuccessNotify("Creation process successful");

      getStockFunction(url);
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      const errorMessage = error?.response?.data?.message?.includes("E11000")
        ? "Warning: This company/product has been created before"
        : error?.response?.data?.message;

      toastErrorNotify(errorMessage);
    }
  };
  const updateStockFunction = async (url, info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get.put(`/${url}/${info._id}`, info);
      getStockFunction(url);
      toastSuccessNotify("Update process successful");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
      const errorMessage = error?.response?.data?.message?.includes("E11000")
        ? "Warning: This company/product has been created before"
        : error?.response?.data?.message;
      toastErrorNotify(errorMessage);
    }
  };

  return {
    getStockFunction,
    deleteStockFunction,
    createStockFunction,
    updateStockFunction,
    getProdCatBrands,
    getProdSalesBrands,
    getProdFirmBrandsPruchases,
    getSalesPurchases,
  };
};

export default useStockCall;
