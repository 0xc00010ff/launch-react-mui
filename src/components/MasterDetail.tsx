import Box, { BoxProps } from "@mui/joy/Box";

import { Outlet } from "react-router-dom";

export default function MasterDetail(props: BoxProps) {
  return (
    <Box
      sx={{
        height: "100%",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gridTemplateRows: "minmax(0, 1fr)",
        gridTemplateAreas: `
          "master detail"
        `,
      }}
    >
      {props.children}
      <Outlet />
    </Box>
  );
}
