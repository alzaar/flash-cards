import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useModalState, useModalStateDispatch } from "../hooks/modalHooks";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props: any) {
  const { open } = useModalState();
  const dispatch = useModalStateDispatch();

  return (
    <div>
      <Modal
        open={open}
        onClose={() => dispatch({ type: "close", payload: { open: false } })}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{props.children}</Box>
      </Modal>
    </div>
  );
}
