import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globasStyles";
import useStockCall from "../hooks/useStockCall";

export default function ProductTable() {
  const { products } = useSelector((state) => state.stock);
  const { deleteStockFunction } = useStockCall();
  const columns = [
    { field: "id", headerName: "# ID", headerAling: "center", flex: 2 },
    {
      field: "createds",
      headerName: "Date",
      flex: 1,
      headerAling: "center",
      aling: "center",
    },
    {
      field: "name",
      headerName: "Product Name",
      flex: 1,
      headerAling: "center",
      aling: "center",
    },

    {
      field: "stock",
      headerName: "Stock",
      type: "number",
      flex: 1,
      headerAling: "center",
      aling: "center",
    },

    {
      field: "category_id",
      headerName: "Category",
      headerAling: "center",
      aling: "center",
      valueGetter: (params) => params?.row?.category_id?.name,
      flex: 1,
    },
    {
      field: "brand_id",
      headerName: "Brand",
      headerAling: "center",
      aling: "center",
      valueGetter: (params) => params?.row?.brand_id?.name,
      flex: 1,
    },
    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      headerAling: "center",
      aling: "center",
      getActions: ({ id }) => [
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => {
            deleteStockFunction("products", id);
          }}
          label="Delete"
          sx={btnStyle}
        />,
      ],
      flex: 1,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={products}
        columns={columns}
        pageSizeOptions={[10, 20, 50, 100]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
