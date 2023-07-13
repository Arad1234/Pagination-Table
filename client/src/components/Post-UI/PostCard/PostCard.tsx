import { Box } from "@mui/material";
import Title from "../Title/Title";
import Body from "../Body/Body";
import DeleteIcon from "@mui/icons-material/Delete";
import useModal from "../../../hooks/useModal";
import { deletePostQuery } from "../../../react-query/queries/posts.queries";
import ModalComponent from "../Modal/Modal";

interface Props {
  title: string;
  body: string;
  postId: number;
  userId: number;
}

const PostCard = ({ title, body, postId, userId }: Props) => {
  // Custom hook "useModal"
  const [isOpen, openModal, closeModal] = useModal();

  const { mutate: deletePostMutation } = deletePostQuery(closeModal, userId);

  return (
    <Box sx={{ border: "1px solid gray", width: "70%", borderRadius: "10px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          gap: "10px",
        }}
      >
        <Title>{title}</Title>
        <Body>{body}</Body>
        <DeleteIcon
          sx={{
            cursor: "pointer",
            ":hover": { background: "wheat" },
            borderRadius: "20px",
            padding: "3px",
          }}
          onClick={openModal}
        />
      </Box>
      <ModalComponent
        isOpen={isOpen}
        closeModal={closeModal}
        deletePostMutation={deletePostMutation}
        postId={postId}
      />
    </Box>
  );
};

export default PostCard;
