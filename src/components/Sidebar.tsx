import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import Box, { BoxProps } from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ListItemContent from "@mui/joy/ListItemContent";

import Collapse from "@mui/material/Collapse";

import FolderOpenIcon from "@mui/icons-material/FolderOpen";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";
import Sheet from "@mui/joy/Sheet";

export default function Navigation(props: BoxProps) {
  const location = useLocation();

  const [firstSectionOpen, setFirstSectionOpen] = React.useState(true);
  const [secondSectionOpen, setSecondSectionOpen] = React.useState(true);

  return (
    <Box
      component="nav"
      className="Navigation"
      {...props}
      sx={[
        {
          p: 2,
          bgcolor: "background.componentBg",
          borderRight: "1px solid",
          borderColor: "divider",
          display: {
            xs: "none",
            sm: "initial",
          },
          overflow: "auto",
        },
        ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
      ]}
    >
      <List
        size="sm"
        sx={{
          "--List-item-radius": "8px",
        }}
      >
        <ListItem nested sx={{ p: 0 }}>
          <Box
            sx={{
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              id="nav-list-browse"
              textColor="neutral.500"
              fontWeight={700}
              sx={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: ".1rem",
              }}
            >
              Browse
            </Typography>
            <IconButton
              size="sm"
              variant="plain"
              color="primary"
              sx={{
                "--IconButton-size": "24px",
                transform: firstSectionOpen ? "rotate(0deg)" : "rotate(270deg)",
              }}
              onClick={() => setFirstSectionOpen(!firstSectionOpen)}
            >
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          <Collapse in={firstSectionOpen}>
            <List
              aria-labelledby="nav-list-browse"
              sx={{
                "& .JoyListItemButton-root": { p: "8px" },
              }}
            >
              <Link to={`/dashboard/files`} style={{ textDecoration: "none" }}>
                <ListItem>
                  <ListItemButton
                    variant={
                      location.pathname.includes("files") ? "soft" : "plain"
                    }
                    color={
                      location.pathname.includes("files")
                        ? "primary"
                        : "neutral"
                    }
                  >
                    <ListItemDecorator sx={{ color: "inherit" }}>
                      <FolderOpenIcon fontSize="small" />
                    </ListItemDecorator>
                    <ListItemContent>My files</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/dashboard/media" style={{ textDecoration: "none" }}>
                <ListItem>
                  <ListItemButton
                    variant={
                      location.pathname.includes("media") ? "soft" : "plain"
                    }
                    color={
                      location.pathname.includes("media")
                        ? "primary"
                        : "neutral"
                    }
                  >
                    <ListItemDecorator sx={{ color: "inherit" }}>
                      <ShareOutlinedIcon fontSize="small" />
                    </ListItemDecorator>
                    <ListItemContent>Media</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>

              <Link to="/dashboard/trash" style={{ textDecoration: "none" }}>
                <ListItem>
                  <ListItemButton
                    variant={
                      location.pathname.includes("trash") ? "soft" : "plain"
                    }
                    color={
                      location.pathname.includes("trash")
                        ? "primary"
                        : "neutral"
                    }
                  >
                    <ListItemDecorator sx={{ color: "inherit" }}>
                      <DeleteRoundedIcon fontSize="small" />
                    </ListItemDecorator>
                    <ListItemContent>Trash</ListItemContent>
                  </ListItemButton>
                </ListItem>
              </Link>
            </List>
          </Collapse>
        </ListItem>
        <ListItem nested sx={{ p: "10px 0" }}>
          <Box
            sx={{
              mb: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              id="nav-list-browse"
              textColor="neutral.500"
              fontWeight={700}
              sx={{
                fontSize: "10px",
                textTransform: "uppercase",
                letterSpacing: ".1rem",
              }}
            >
              Tags
            </Typography>
            <IconButton
              size="sm"
              variant="plain"
              color="primary"
              sx={{
                "--IconButton-size": "24px",
                transform: secondSectionOpen
                  ? "rotate(0deg)"
                  : "rotate(270deg)",
              }}
              onClick={() => setSecondSectionOpen(!secondSectionOpen)}
            >
              <KeyboardArrowDownRoundedIcon fontSize="small" color="primary" />
            </IconButton>
          </Box>
          <Collapse in={secondSectionOpen}>
            <List
              aria-labelledby="nav-list-tags"
              size="sm"
              sx={{
                "--List-decorator-size": "32px",
                "& .JoyListItemButton-root": { p: "8px" },
              }}
            >
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "99px",
                        bgcolor: "primary.300",
                      }}
                    />
                  </ListItemDecorator>
                  <ListItemContent>Personal</ListItemContent>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "99px",
                        bgcolor: "danger.400",
                      }}
                    />
                  </ListItemDecorator>
                  <ListItemContent>Work</ListItemContent>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "99px",
                        bgcolor: "warning.500",
                      }}
                    />
                  </ListItemDecorator>
                  <ListItemContent>Travels</ListItemContent>
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  <ListItemDecorator>
                    <Box
                      sx={{
                        width: "10px",
                        height: "10px",
                        borderRadius: "99px",
                        bgcolor: "success.400",
                      }}
                    />
                  </ListItemDecorator>
                  <ListItemContent>Concert tickets</ListItemContent>
                </ListItemButton>
              </ListItem>
            </List>
          </Collapse>
        </ListItem>
      </List>
    </Box>
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
        <Navigation />
      </Sheet>
    </Box>
  );
}
