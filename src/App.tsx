import { useState } from "react";
import Container from "@mui/material/Container";
import Flashcards from "./Flashcards";

import { makeStyles } from "@material-ui/core/styles";
import Form from "./Form";
import Dialogue from "./Dialogue";
import NavigationMenu from "./NavigationMenu";

export type FlashCard = {
  title: string;
  details: string;
};

const useStyles = makeStyles({
  appContainer: {
    display: "flex !important",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    bgcolor: "lightgrey",
    minWidth: "100%",
  },
});

export default function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [flashCards, setFlashCards] = useState([]);

  return (
    <div>
      <Container className={classes.appContainer}>
        <NavigationMenu setOpen={setOpen} open={open} />
        <Flashcards flashCards={flashCards} />
        <Dialogue open={open} setOpen={setOpen}>
          <Form
            setOpen={setOpen}
            setFlashCards={setFlashCards}
            flashCards={flashCards}
          />
        </Dialogue>
      </Container>
    </div>
  );
}
