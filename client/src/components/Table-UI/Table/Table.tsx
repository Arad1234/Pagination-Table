import { UserRelevantData } from "../../../types/index";
import { DataGrid, GridRowParams } from "@mui/x-data-grid";
import "./Table.scss";
import TableColumns from "../Table-columns/TableColumns";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { URLS } from "../../../utils/constants";

interface Props {
  users: UserRelevantData[];
  order: string;
  setOrder: React.Dispatch<React.SetStateAction<"asc" | "desc">>;
}

const Table = ({ users, order, setOrder }: Props) => {
  const navigate = useNavigate();

  const formattedUsers = users.map((user) => {
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
    navigate(`${URLS.USERS_URL}/${params.id}`);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <DataGrid
        // Sort the "Full Name" column by name, indicating the sorting direction with an arrow icon.
        onSortModelChange={() => setOrder(order === "asc" ? "desc" : "asc")}
        hideFooter
        columns={TableColumns()}
        onRowClick={handleRowClick}
        rows={formattedUsers}
        getRowClassName={() => "rows-class"}
      />
    </Box>
  );
};

export default Table;
