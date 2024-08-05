import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useModalStateDispatch } from "../hooks/modalHooks";

const useStyles = makeStyles({
  box: {
    top: 0,
    left: 0,
    position: "absolute",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "58%",
  },
});

export default function SimpleBottomNavigation() {
  const dispatch = useModalStateDispatch();
  const classes = useStyles();
  return (
    <>
      <Box className={classes.box}>
        <BottomNavigation showLabels>
          <BottomNavigationAction
            onClick={() =>
              dispatch({
                type: "open",
                payload: { open: true },
              })
            }
            label="New Flashcard"
            icon={<AddCircleIcon />}
          />
        </BottomNavigation>
        <Typography
          variant="h1"
          sx={{
            fontSize: "140",
            fontWeight: "400",
            fontStyle: "normal",
            color: "#5CA4A9",
          }}
          color="text.secondary"
          gutterBottom
        >
          Twister
        </Typography>
      </Box>
    </>
  );
}
