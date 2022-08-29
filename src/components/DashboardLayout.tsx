import * as React from "react";
import Box, { BoxProps } from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";

//
// |----------------------------
// |        Header             |
// |----------------------------
// |      |                    |
// |      |                    |
// |  Nav |     Main...        |
// |      |                    |
// |      |                    |
// |______|____________________|
//

export default function DashboardLayout(props: BoxProps) {
  return (
    <Box
      {...props}
      sx={[
        {
          bgcolor: "background.appBody",
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "minmax(64px, 200px) minmax(450px, 1fr)",
            md: "minmax(160px, 300px) minmax(300px, 1fr)",
          },
          gridTemplateRows: "64px minmax(0, 1fr)",
          gridTemplateAreas: `
            "header header"
            "nav main"
            "nav main"
          `,
          height: "100vh",
          width: "100vw",
          boxSizing: "border-box",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    />
  );
}

export function SideDrawer({
  onClose,
  ...props
}: BoxProps & { onClose: React.MouseEventHandler<HTMLDivElement> }) {
  return (
    <Box
      {...props}
      sx={[
        {
          position: "fixed",
          zIndex: 1200,
          width: "100%",
          height: "100%",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <Box
        role="button"
        onClick={onClose}
        sx={{
          position: "absolute",
          inset: 0,
          bgcolor: (theme) =>
            `rgba(${theme.vars.palette.neutral.darkChannel} / 0.8)`,
        }}
      />
      <Sheet
        sx={{
          minWidth: 256,
          width: "max-content",
          height: "100%",
          p: 2,
          boxShadow: "lg",
          bgcolor: "background.componentBg",
        }}
      >
        {props.children}
      </Sheet>
    </Box>
  );
}
