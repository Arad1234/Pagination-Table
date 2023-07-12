import { fetchUsersQuery } from "../../react-query/queries/users.queries";

const Home = () => {
  const { data, isLoading } = fetchUsersQuery();
  console.log(data);
  return <div>{isLoading ? <h1>Loading...</h1> : data.users[0].name}</div>;
};

export default Home;
