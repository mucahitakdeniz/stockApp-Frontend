import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import { Typography } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globasStyles";
import useStockCall from "../hooks/useStockCall";
import EditIcon from "@mui/icons-material/Edit";
const PurchasesTable = ({ handleOpen, setInfo }) => {
  const { purchases } = useSelector((state) => state.stock);
  const { deleteStockFunction } = useStockCall();
  const columns = [
    { field: "id", headerName: "# ID", headerAling: "center", flex: 3 },
    {
      field: "createds",
      headerName: "Date",
      flex: 1.5,
      headerAling: "center",
      aling: "center",
    },
    {
      field: "firm_id",
      headerName: "Firm",
      headerAling: "center",
      aling: "center",
      valueGetter: (params) => params?.row?.firm_id?.name,
      flex: 1.5,
    },
    {
      field: "product_id",
      headerName: "Product",
      headerAling: "center",
      aling: "center",
      valueGetter: (params) => params?.row?.product_id?.name,
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
      field: "quantity",
      headerName: "Stock",
      type: "number",
      flex: 1,
      headerAling: "center",
      aling: "center",
    },

    {
      field: "price",
      headerName: "Price",
      type: "number",
      flex: 1,
      headerAling: "center",
      aling: "center",
    },
    {
      field: "price_total",
      headerName: "Total Price",
      type: "number",
      flex: 1,
      headerAling: "center",
      aling: "center",
    },

    {
      field: "actions",
      headerName: "Actions",
      type: "actions",
      headerAling: "center",
      aling: "center",
      getActions: ({ id }) => [
        <GridActionsCellItem
          icon={<EditIcon />}
          onClick={() => {
            handleOpen();
            const purchase = purchases.filter((purchase) => purchase._id == id);
            console.log(purchase);
            setInfo({
              product_id: purchase[0]?.product_id?._id,
              firm_id: purchase[0]?.firm_id?._id,
              brand_id: purchase[0]?.brand_id?._id,
              quantity: purchase[0]?.quantity,
              price: purchase[0]?.price,
              _id: purchase[0]?.id,
              user_id: purchase[0]?.user_id,
            });
          }}
          label="Delete"
          sx={btnStyle}
        />,
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => {
            deleteStockFunction("purchases", id);
          }}
          label="Delete"
          sx={btnStyle}
        />,
      ],

      flex: 2,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        autoHeight
        rows={purchases}
        columns={columns}
        pageSizeOptions={[10, 20, 50, 100]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default PurchasesTable;
