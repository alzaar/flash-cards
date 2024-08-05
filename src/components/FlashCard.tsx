import Card from "@mui/material/Card";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import { FlashCard as FlashCardType } from "../types/flashCardTypes";
import { useModalStateDispatch } from "../hooks/modalHooks";
import { useFlashCardDispatch } from "../hooks/flashCardHooks";

export default function FlashCard({ id, title, details }: FlashCardType) {
  const modalDispatch = useModalStateDispatch();
  const flashCardDispatch = useFlashCardDispatch();
  return (
    <Card
      sx={{
        minHeight: "20vh",
        boxShadow:
          "0px 2px 2px #d3d3d3, 1px 2px #d3d3d3, 0px -52px -34px #d3d3d3",
        borderRadius: 2,
        width: "50%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Typography
          sx={{ fontSize: 19, marginTop: 2, marginLeft: 2 }}
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <IconButton
            onClick={() =>
              flashCardDispatch({
                type: "deleteFlashCard",
                payload: id,
              })
            }
          >
            <DeleteIcon />
          </IconButton>
          <IconButton
            onClick={() =>
              modalDispatch({
                type: "open",
                payload: {
                  open: true,
                  flashCard: { id, title, details },
                },
              })
            }
          >
            <EditIcon />
          </IconButton>
        </div>
      </div>
      <CardContent>
        <Typography
          sx={{ fontSize: 14, overflowWrap: "break-word" }}
          color="text.secondary"
          gutterBottom
        >
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
}
