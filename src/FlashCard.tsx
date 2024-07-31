import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from "@mui/styles";
import { FlashCard as FlashCardType } from "./App";
const useStyles = makeStyles({
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#1976d2",
  },
});

export default function FlashCard({ title, details }: FlashCardType) {
  const classes = useStyles();
  return (
    <Card sx={{ minWidth: "25%" }}>
      <CardContent className={classes.cardContent}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {title}
        </Typography>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {details}
        </Typography>
      </CardContent>
    </Card>
  );
}
