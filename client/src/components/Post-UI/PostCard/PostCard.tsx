import { Box, Button, Modal, Typography } from "@mui/material";
import Title from "../Title/Title";
import Body from "../Body/Body";
import DeleteIcon from "@mui/icons-material/Delete";
import useModal from "../../../hooks/useModal";
import { deletePostQuery } from "../../../react-query/queries/posts.queries";

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

      <Modal
        open={isOpen}
        onClose={closeModal}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Box
          sx={{
            background: "white",
            width: "22rem",
            padding: "20px",
            borderRadius: "10px",
            border: "1px solid black",
            outline: "none",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>
            Are you sure you want to delete the post?
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: "20px",
              marginTop: "10px",
              marginBottom: 0,
            }}
          >
            <Button
              variant="contained"
              onClick={() => deletePostMutation(postId)}
            >
              Delete
            </Button>
            <Button
              variant="contained"
              onClick={closeModal}
            >
              Cancel
            </Button>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default PostCard;
