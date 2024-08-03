import Card from "@mui/material/Card";
import { makeStyles } from "@mui/styles";
import { IconButton } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import { TextareaAutosize } from "@mui/base/TextareaAutosize";

import { FlashCard as FlashCardType } from "../types/flashCardTypes";

const useStyles = makeStyles({
  cardContent: {
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "flex-start",
    // flexDirection: "column",
    // // backgroundColor: "#1976d2",
    // borderRadius: 5,
    // boxShadow: "30px 5px 5px red",
    // height: "70%",
  },
});

type FlashCardProps = {
  deleteFlashCard: (flashCardID: string) => void;
} & FlashCardType;

export default function FlashCard({
  id,
  title,
  details,
  deleteFlashCard,
}: FlashCardProps) {
  const classes = useStyles();
  return (
    <Card
      sx={{
        minHeight: "20vh",
        boxShadow: "1px 2px 2px #D3D3D3",
        borderRadius: 2,
        width: "50%",
        margin: "auto",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "row",
        }}
      >
        <IconButton onClick={() => deleteFlashCard(id)}>
          <DeleteIcon />
        </IconButton>
        <Typography
          sx={{ fontSize: 19, marginTop: 2 }}
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>
      </div>
      <CardContent className={classes.cardContent}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
}
