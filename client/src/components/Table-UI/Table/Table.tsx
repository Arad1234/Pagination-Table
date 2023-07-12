import React from "react";
import { UserRelevantData } from "../../../../../types/index";
import { DataGrid } from "@mui/x-data-grid";
import "./Table.scss";
import TableColumns from "../Table-columns/TableColumns";

interface TableProps {
  users: UserRelevantData[];
}

const Table = ({ users }: TableProps) => {
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

  return (
    <DataGrid
      sx={{}}
      columns={TableColumns()}
      rows={fromattedUsers}
      getRowClassName={(params) => "rows-class"}
    />
  );
  // return (
  //   <table>
  //     <thead>
  //       <tr>
  //         <th>Full name</th>
  //         <th>Email Address</th>
  //         <th>Address</th>
  //       </tr>
  //     </thead>
  //     <tbody>
  //       {users.map((user) => {
  //         const { street, suite, city, zipcode } = user.address;
  //         const addressFormat = `${street}, ${suite}, ${city}, ${zipcode}`;
  //         return (
  //           <tr
  //             onClick={() => navigate(`${URLS.USERS_URL}/${user.id}`)}
  //             key={user.id}
  //           >
  //             <td>{user.name}</td>
  //             <td>{user.email}</td>
  //             <td>
  //               <span className="adress">{addressFormat}</span>
  //             </td>
  //           </tr>
  //         );
  //       })}
  //     </tbody>
  //   </table>
  // );
};

export default Table;
