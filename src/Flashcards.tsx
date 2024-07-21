import React from "react";
import { makeStyles } from "@mui/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

// Arrow Icons
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

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
        <ArrowBackIosIcon />
        <ArrowForwardIosIcon />
      </CardContent>
    </Card>
  );
};

export default Flashcards;
