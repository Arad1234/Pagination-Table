import { GridColDef } from "@mui/x-data-grid";
import "./TableColumns.scss";
const TableColumns = () => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Full Name",
      width: 170,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "email",
      headerName: "Email Address",
      width: 170,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "address",
      headerName: "Address",
      width: 170,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
  ];

  return columns;
};

export default TableColumns;
