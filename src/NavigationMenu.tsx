import { useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import UploadIcon from "@mui/icons-material/Upload";
interface SimpleBottomNavigationProps {
  setOpen: (trigger: boolean) => void;
  open: boolean;
}

export default function SimpleBottomNavigation({
  setOpen,
  open,
}: SimpleBottomNavigationProps) {
  const [value, setValue] = useState(0);

  return (
    <Box
      sx={{
        width: 70,
        top: 0,
        left: 0,
        position: "absolute",
        overflow: "hidden",
        borderRadius: 25,
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          onClick={() => setOpen(!open)}
          label="Upload"
          icon={<UploadIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
