import { useSelector } from "react-redux";
import Box from "@mui/material/Box";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { btnStyle } from "../styles/globasStyles";
import EditIcon from "@mui/icons-material/Edit";
import useUserCall from "../hooks/useUserCall";

const UsersTable = ({ handleOpen, setInfo }) => {
  const { users } = useSelector((state) => state.user);
  const { deleteUserFunction } = useUserCall();

  const columns = [
    { field: "id", headerName: "# ID", headerAling: "center", flex: 2 },
    {
      field: "username",
      headerName: "User Name",
      headerAling: "center",
      flex: 1.5,
    },
    {
      field: "first_name",
      headerName: "Firts Name",
      headerAling: "center",
      flex: 1,
    },
    {
      field: "last_name",
      headerName: "Last Name",
      headerAling: "center",
      flex: 1,
      color: "red",
    },
    { field: "email", headerName: "Email", headerAling: "center", flex: 2 },
    {
      field: "is_superadmin",
      type: "boolean",
      headerName: "Admin",
      headerAling: "center",
      flex: 0.5,
    },
    {
      field: "is_staff",
      type: "boolean",
      headerName: "Staff",
      headerAling: "center",
      flex: 0.5,
    },
    {
      field: "is_active",
      headerName: "Active",
      headerAling: "center",
      type: "boolean",
      flex: 0.5,
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
            const user = users?.filter((item) => item.id == id);
            setInfo({
              username: user[0]?.username,
              email: user[0]?.email,
              first_name: user[0]?.first_name,
              last_name: user[0]?.last_name,
              is_active: user[0]?.is_active,
              is_staff: user[0]?.is_staff,
              _id: user[0]?._id,
            });
            handleOpen();
          }}
          label="Delete"
          sx={btnStyle}
        />,
        <GridActionsCellItem
          icon={<DeleteForeverIcon />}
          onClick={() => {
            deleteUserFunction(id);
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
        rows={users}
        columns={columns}
        pageSizeOptions={[10, 20, 50, 100]}
        disableRowSelectionOnClick
        slots={{ toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default UsersTable;
