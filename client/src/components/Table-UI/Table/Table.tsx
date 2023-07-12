import { UserRelevantData } from "../../../types/index";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import "./Table.scss";
import TableColumns from "../Table-columns/TableColumns";
import { Box } from "@mui/material";
import axiosClient from "../../../axiosClient";

interface Props {
  users: UserRelevantData[];
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
}

const Table = ({ users, order, setOrder }: Props) => {
  const fromattedUsers = users.map((user) => {
    const { city, street, suite, zipcode } = user.address;
    const formattedAddress = `${street}, ${suite}, ${city}, ${zipcode}`;
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: formattedAddress,
    };
  });

  const handleRowClick = async (params: GridRowParams) => {
    const response = await axiosClient.get("/posts", {
      params: { userId: params.id },
    });
    console.log(response);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        // onColumnOrderChange={() => setOrder(order === "asc" ? "desc" : "asc")}
        hideFooter
        columns={TableColumns()}
        onRowClick={handleRowClick}
        rows={fromattedUsers}
        getRowClassName={() => "rows-class"}
      />
    </Box>
  );
};

export default Table;
