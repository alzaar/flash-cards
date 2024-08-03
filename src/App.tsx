import Container from "@mui/material/Container";
import { makeStyles } from "@material-ui/core/styles";

import Form from "./components/FlashCardForm";
import Dialogue from "./components/Dialogue";
import Flashcards from "./components/Flashcards";
import NavigationMenu from "./components/NavigationMenu";
import { ModalStateProvider } from "./contexts/ModalStateContext";
import { FlashCardContextProvider } from "./contexts/FlashCardContext";

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
    <FlashCardContextProvider>
      <ModalStateProvider>
        <Container className={classes.appContainer}>
          <NavigationMenu />
          <Flashcards />
          <Dialogue>
            <Form />
          </Dialogue>
        </Container>
      </ModalStateProvider>
    </FlashCardContextProvider>
  );
}
