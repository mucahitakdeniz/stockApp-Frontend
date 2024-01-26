import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import { useSelector } from "react-redux";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globasStyles";
import useStockCall from "../hooks/useStockCall";
import EditIcon from "@mui/icons-material/Edit";

export default function SalesTable({ handleOpen, setInfo }) {
  const { sales } = useSelector((state) => state.stock);
  const { deleteStockFunction } = useStockCall();

  const columns = [
    { field: "id", headerName: "# ID", headerAling: "center", flex: 2 },
    {
      field: "createds",
      headerName: "Date",
      flex: 2,
      headerAling: "center",
      aling: "center",
    },
    {
      field: "product_id",
      headerName: "Product",
      headerAling: "center",
      aling: "center",
      valueGetter: (params) => params.row.product_id.name,
      flex: 2,
    },
    {
      field: "brand_id",
      headerName: "Brand",
      headerAling: "center",
      aling: "center",
      valueGetter: (params) => params?.row?.brand_id?.name,
      flex: 2,
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
            const sale = sales.filter((sale) => sale.id == id);
            setInfo({
              product_id: sale[0]?.product_id?._id,
              brand_id: sale[0]?.brand_id_id?._id,
              quantity: sale[0]?.quantity,
              price: sale[0]?.price,
              _id: sale[0]?.id,
              user_id: sale[0]?.user_id,
            });
            handleOpen();
          }}
          label="Delete"
          sx={btnStyle}
        />,
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => {
            deleteStockFunction("sales", id);
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
        rows={sales}
        columns={columns}
        pageSizeOptions={[10, 20, 50, 100]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
}
