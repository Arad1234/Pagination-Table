import { useState } from "react";
import Table from "../../components/Table-UI/Table/Table";
import { fetchUsersQuery } from "../../react-query/queries/users.queries";
import CircularProgress from "@mui/material/CircularProgress";
import "./Home.scss";
import { USERS_PER_PAGE } from "../../utils/constants";
import PaginationPages from "../../components/PaginationPages/PaginationPages";

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
        <button onClick={() => refetch()}>Fetch</button>
      </div>
    );
  }

  return (
    <div className="container">
      {isLoading ? (
        <CircularProgress size={70} />
      ) : (
        <div className="table-pages-container">
          <Table
            users={data.users}
            order={order}
            setOrder={setOrder}
          />
          <PaginationPages
            numOfPages={data.numOfPages}
            currentPage={page}
            setPage={setPage}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
