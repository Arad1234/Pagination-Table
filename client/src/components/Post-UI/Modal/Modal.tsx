import { Box, Button, Modal, Typography } from "@mui/material";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  deletePostMutation: (postId: number) => void;
  postId: number;
}

const ModalComponent = ({
  isOpen,
  closeModal,
  deletePostMutation,
  postId,
}: Props) => {
  return (
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>
          Are you sure you want to delete the post?
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "30px",
            marginTop: "18px",
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
  );
};

export default ModalComponent;
