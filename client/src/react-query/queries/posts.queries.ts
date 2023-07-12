import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deletePost, fetchPosts } from "../services/posts.service";
import { Post } from "../../types";

export const fetchPostsQuery = (userId: number) => {
  return useQuery<Post[]>({
    // Whenever one of those parameters changes, the queryFn will be called again.
    queryKey: [userId],
    queryFn: () => fetchPosts(userId),
  });
};

export const deletePostQuery = (closeModal: () => void, userId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (postId: number) => deletePost(postId),
    onSuccess: (deletedPostId: string) => {
      // Here I delete data from the cache (the deleted post).
      queryClient.setQueriesData([userId], (posts: any) => {
        return posts.filter((post: Post) => post.id != Number(deletedPostId));
      });
      // Here I call all the hooks that have the [userId] as key.
      queryClient.invalidateQueries([userId]);
      closeModal();
    },
  });
};
