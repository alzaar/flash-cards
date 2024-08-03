import Box from "@mui/material/Box";
import { makeStyles } from "@material-ui/core/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { useModalStateDispatch } from "../hooks/modalHooks";

const useStyles = makeStyles({
  box: {
    width: 70,
    top: 0,
    left: 0,
    position: "absolute",
    overflow: "hidden",
    borderRadius: 25,
  },
});

export default function SimpleBottomNavigation() {
  const dispatch = useModalStateDispatch();
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          onClick={() => dispatch({ type: "open", payload: { open: true } })}
          label="Upload"
          icon={<AddCircleIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
