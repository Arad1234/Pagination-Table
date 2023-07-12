import { fetchPostsQuery } from "../../react-query/queries/posts.queries";
import { useParams } from "react-router-dom";
import PostCard from "../../components/UI/PostCard/PostCard";
import { Box, Input } from "@mui/material";
import { useState } from "react";

const Posts = () => {
  const { userId } = useParams();
  const {
    data: allPosts,
    isLoading,
    isError,
    refetch,
  } = fetchPostsQuery(Number(userId));

  const [searchQuery, setSearchQuery] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  // Filtering the posts on every render.
  const filteredPosts = allPosts?.filter((post) =>
    post.title.includes(searchQuery)
  );
  if (isError) {
    return (
      <div>
        <p>Error has occured, you can try to fetch again</p>
        <button onClick={() => refetch()}>Fetch</button>
      </div>
    );
  }
  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
            gap: "20px",
          }}
        >
          <Input
            sx={{
              border: "1px solid gray",
              padding: "0px 0px 0px 10px ",
              fontSize: "20px",
              margin: "20px",
            }}
            onChange={handleInputChange}
            placeholder="Search by title..."
          />
          {filteredPosts!.map((post) => {
            return (
              <PostCard
                key={post.id}
                title={post.title}
                body={post.body}
                postId={post.id}
                userId={Number(userId)}
              />
            );
          })}
        </Box>
      )}
    </div>
  );
};

export default Posts;
