import Container from "@mui/material/Container";
import Flashcards from "./Flashcards";

import { makeStyles } from "@material-ui/core/styles";

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
  return (
    <div>
      <Container className={classes.appContainer}>
        <Flashcards />
      </Container>
    </div>
  );
}
