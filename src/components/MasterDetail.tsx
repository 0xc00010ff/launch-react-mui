import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box, { BoxProps } from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import { Outlet } from "react-router-dom";

export default function MasterDetail(props: BoxProps) {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Outlet />
      {props.children}
    </Box>
  );
}
