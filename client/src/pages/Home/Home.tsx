import React, { useState } from "react";
import Table from "../../components/Table-UI/Table/Table";
import {
  fetchUsersQuery,
  usersCountQuery,
} from "../../react-query/queries/users.queries";
import "./Home.scss";
import { USERS_PER_PAGE } from "../../utils/constants";
import PaginationPages from "../../components/PaginationPages/PaginationPages";

const Home = () => {
  const [page, setPage] = useState<number>(1);
  const [order, setOrder] = useState<"asc" | "desc">("asc");

  const { data: usersCount } = usersCountQuery();
  const { data, isLoading, refetch, isError } = fetchUsersQuery({
    page: page,
    limit: USERS_PER_PAGE,
    order: order,
  });

  if (isError) {
    return (
      <div>
        <p>Error has occured, you can try to fetch again</p>
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
          <PaginationPages
            numOfPages={Math.ceil(usersCount / USERS_PER_PAGE)}
            currentPage={page}
            setPage={setPage}
          />
          <div className="buttons">
            <button
              disabled={page === 1}
              onClick={() => setPage((prevPage) => prevPage - 1)}
            >
              Prev Page
            </button>
            <button
              disabled={page === Math.ceil(usersCount / USERS_PER_PAGE)}
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
