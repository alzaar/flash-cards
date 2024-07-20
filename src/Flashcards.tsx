import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const useStyles = makeStyles({
  cardContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
});

const Flashcards: React.FC = () => {
  const classes = useStyles();
  return (
    <Card sx={{ minWidth: "25%" }}>
      <CardContent className={classes.cardContent}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Flashcards;
