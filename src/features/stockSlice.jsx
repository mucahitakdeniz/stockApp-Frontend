import { createSlice } from "@reduxjs/toolkit";

const stockSlice = createSlice({
  name: "stock",

  initialState: {
    loading: false,
    error: false,
    sales: [],
    firms: [],
    purchases: [],
    products: [],
    brands: [],
    categories: [],
  },
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
      state.error = false;
    },
    getStockSuccess: (state, { payload }) => {
      state.loading = false;
      state[payload.url] = payload.data;
    },
    getProdCatBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.categories = payload[1];
      state.brands = payload[2];
    },
    getProdSalesBrandsSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.sales = payload[1];
      state.brands = payload[2];
    },
    getSalesPurchasesSuccess: (state, { payload }) => {
      state.loading = false;
      state.sales = payload[0];
      state.purchases = payload[1];
    },
    getProdFirmBrandsPruchasesSuccess: (state, { payload }) => {
      state.loading = false;
      state.products = payload[0];
      state.firms = payload[1];
      state.brands = payload[2];
      state.purchases = payload[3];
    },

    fetchFail: (state) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  fetchStart,
  getStockSuccess,
  fetchFail,
  getProdCatBrandsSuccess,
  getProdSalesBrandsSuccess,
  getProdFirmBrandsPruchasesSuccess,
  getSalesPurchasesSuccess,
} = stockSlice.actions;
export default stockSlice.reducer;
