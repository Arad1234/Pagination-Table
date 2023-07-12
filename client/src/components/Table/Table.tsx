import { useNavigate } from "react-router-dom";
import { UserRelevantData } from "../../../../types/index";
import "./Table.scss";
import { URLS } from "../../utils/constants";
interface TableProps {
  users: UserRelevantData[];
}

const Table = ({ users }: TableProps) => {
  const navigate = useNavigate();
  return (
    <table>
      <thead>
        <tr>
          <th>Full name</th>
          <th>Email Address</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => {
          const { street, suite, city, zipcode } = user.address;
          const addressFormat = `${street}, ${suite}, ${city}, ${zipcode}`;
          return (
            <tr
              onClick={() => navigate(`${URLS.POSTS_URL}/${user.id}`)}
              key={user.id}
            >
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span className="adress">{addressFormat}</span>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
