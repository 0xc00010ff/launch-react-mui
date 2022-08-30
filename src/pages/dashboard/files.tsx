import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";
import { Link, useLocation } from "react-router-dom";

import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import List from "@mui/joy/List";
import ListItemButton from "@mui/joy/ListItemButton";

const fakeData = [
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
  { title: crypto.randomUUID().substring(0, 13) },
];

export default function Files() {
  const location = useLocation();
  return (
    <Box
      sx={{
        p: 2,
        overflow: "auto",
      }}
    >
      <Sheet
        variant="outlined"
        sx={{
          gridArea: "master",
          borderRadius: "sm",
          bgcolor: "background.componentBg",
          display: "flex",
          flexDirection: "column",
          "& > *": {
            p: 2,
            "&:nth-child(n):not(:nth-last-child(-n+4))": {
              borderBottom: "1px solid",
              borderColor: "divider",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            borderBottom: "1px solid",
            borderColor: "divider",
          }}
        >
          <Typography level="body3" fontWeight="md" noWrap>
            Folder name
          </Typography>
          <Typography level="body3" fontWeight="md" noWrap>
            Date modified
          </Typography>
          <Typography level="body3" fontWeight="md" noWrap>
            Size
          </Typography>
          <Typography level="body3" fontWeight="md" noWrap>
            Users
          </Typography>
        </Box>

        <List
          sx={{
            width: "100%",
            p: 0,
            "& > *": {
              "&:nth-child(n):not(:nth-last-child(-n+4))": {
                borderBottom: "1px solid",
                borderColor: "divider",
              },
            },
          }}
        >
          {fakeData.map((data) => (
            <Link to={data.title} style={{ textDecoration: "none" }}>
              <ListItemButton
                variant={
                  location.pathname.includes(data.title) ? "soft" : "plain"
                }
                color={
                  location.pathname.includes(data.title) ? "primary" : "neutral"
                }
                sx={[
                  {
                    p: 2,
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr 1fr",
                  },
                  // (theme) => ({
                  //   "&:hover": {
                  //     ...theme.variants.outlinedHover.neutral,
                  //     cursor: "pointer",
                  //   },
                  //   "&:active": theme.variants.softHover.neutral,
                  //   cursor: "pointer",
                  // }),
                ]}
              >
                <Typography
                  level="body2"
                  startDecorator={<FolderOpenIcon color="primary" />}
                  sx={{ alignItems: "flex-start" }}
                >
                  {data.title}
                </Typography>
                <Typography level="body2">26 May 2010, 7PM</Typography>
                <Typography level="body2" sx={{ color: "success.600" }}>
                  123.3KB
                </Typography>
                <Box>
                  <AvatarGroup
                    size="sm"
                    sx={{
                      "--AvatarGroup-gap": "-8px",
                      "--Avatar-size": "24px",
                    }}
                  >
                    <Avatar
                      src="https://i.pravatar.cc/24?img=6"
                      srcSet="https://i.pravatar.cc/48?img=6 2x"
                    />
                    <Avatar
                      src="https://i.pravatar.cc/24?img=7"
                      srcSet="https://i.pravatar.cc/48?img=7 2x"
                    />
                    <Avatar
                      src="https://i.pravatar.cc/24?img=8"
                      srcSet="https://i.pravatar.cc/48?img=8 2x"
                    />
                    <Avatar
                      src="https://i.pravatar.cc/24?img=9"
                      srcSet="https://i.pravatar.cc/48?img=9 2x"
                    />
                  </AvatarGroup>
                </Box>
              </ListItemButton>
            </Link>
          ))}
        </List>
      </Sheet>
    </Box>
  );
}
