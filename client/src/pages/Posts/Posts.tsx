import { fetchPostsQuery } from "../../react-query/queries/posts.queries";
import { useParams } from "react-router-dom";
import PostCard from "../../components/Post-UI/PostCard/PostCard";
import { Box, Button, Typography } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";

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
      <Box>
        <Typography>Error has occured, you can try to fetch again</Typography>
        <Button
          variant="contained"
          onClick={() => refetch()}
        >
          Fetch
        </Button>
      </Box>
    );
  }

  return isLoading ? (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        width: "100vw",
      }}
    >
      <CircularProgress size={70} />
    </Box>
  ) : (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        marginTop: "200px",
        gap: "20px",
      }}
    >
      <Typography
        sx={{ position: "absolute", top: "20px" }}
        variant="h1"
      >
        Posts Page
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "left", width: "70%" }}>
        <SearchInput handleInputChange={handleInputChange} />
      </Box>

      {filteredPosts!.length > 0 ? (
        filteredPosts!.map((post) => {
          return (
            <PostCard
              key={post.id}
              title={post.title}
              body={post.body}
              postId={post.id}
              userId={Number(userId)}
            />
          );
        })
      ) : (
        <Typography variant="h2">No Posts found</Typography>
      )}
    </Box>
  );
};

export default Posts;
