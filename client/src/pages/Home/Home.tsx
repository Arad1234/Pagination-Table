import { useState } from "react";
import Table from "../../components/Table/Table";
import { fetchUsersQuery } from "../../react-query/queries/users.queries";
import "./Home.scss";
import { USERS_PER_PAGE } from "../../utils/constants";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const { data, isLoading, refetch, isError } = fetchUsersQuery({
    page: page,
    limit: USERS_PER_PAGE,
    order: order,
  });

  if (isError) {
    return (
      <div>
        <p>Error has occured, you can try to fetch again</p>
        {/* !!!!! REFETCH DONT WORK !!!!! */}
        <button onClick={() => refetch()}>Fetch</button>
      </div>
    );
  }

  return (
    <div className="container">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className="table-button-container">
          <div>
            <Table users={data.users} />
          </div>
          <h4>Page {page}</h4>
          <div className="buttons">
            <button
              disabled={page === 1}
              onClick={() => setPage((prevPage) => prevPage - 1)}
            >
              Prev Page
            </button>
            <button
              disabled={page === 3}
              onClick={() => setPage((prevPage) => prevPage + 1)}
            >
              Next Page
            </button>
            <button onClick={() => setOrder(order === "asc" ? "desc" : "asc")}>
              {order === "asc" ? "Descending order" : "Ascending order"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
