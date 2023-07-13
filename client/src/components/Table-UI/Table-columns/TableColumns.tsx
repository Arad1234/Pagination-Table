import { GridColDef } from "@mui/x-data-grid";
import "./TableColumns.scss";
const TableColumns = () => {
  const columns: GridColDef[] = [
    {
      field: "name",
      headerName: "Full Name",
      width: 200,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "email",
      headerName: "Email Address",
      sortable: false,
      width: 200,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
    {
      field: "address",
      headerName: "Address",
      sortable: false,
      width: 100,
      headerAlign: "center",
      headerClassName: "table-header",
      cellClassName: "table-cell",
    },
  ];

  return columns;
};

export default TableColumns;
