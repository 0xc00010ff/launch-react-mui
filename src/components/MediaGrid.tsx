import AspectRatio from "@mui/joy/AspectRatio";
import Avatar from "@mui/joy/Avatar";
import AvatarGroup from "@mui/joy/AvatarGroup";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardCover from "@mui/joy/CardCover";
import CardOverflow from "@mui/joy/CardOverflow";
import IconButton from "@mui/joy/IconButton";
import List from "@mui/joy/List";
import ListDivider from "@mui/joy/ListDivider";
import ListItem from "@mui/joy/ListItem";
import ListItemButton from "@mui/joy/ListItemButton";
import ListItemContent from "@mui/joy/ListItemContent";
import Sheet from "@mui/joy/Sheet";
import Typography from "@mui/joy/Typography";

// Icons import
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import FolderOpenIcon from "@mui/icons-material/FolderOpen";

// custom

export default function MediaGrid() {
  return (
    <>
      <Sheet
        variant="outlined"
        sx={{
          display: { xs: "inherit", sm: "none" },
          borderRadius: "sm",
          bgcolor: "background.componentBg",
          overflow: "auto",
          "& > *": {
            "&:nth-child(n):not(:nth-last-child(-n+4))": {
              borderBottom: "1px solid",
              borderColor: "divider",
            },
          },
        }}
      >
        <List
          aria-labelledby="table-in-list"
          sx={{
            "& .JoyListItemButton-root": { p: "0px" },
          }}
        >
          <ListItem>
            <ListItemButton variant="soft" sx={{ bgcolor: "transparent" }}>
              <ListItemContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    level="body2"
                    startDecorator={<FolderOpenIcon color="primary" />}
                    sx={{ alignItems: "flex-start" }}
                  >
                    Travel pictures
                  </Typography>
                  <Typography level="body2" sx={{ color: "success.600" }}>
                    987.5MB
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
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
                  <Typography level="body2">21 October 2011, 3PM</Typography>
                </Box>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
          <ListDivider sx={{ m: 0 }} />
          <ListItem>
            <ListItemButton variant="soft" sx={{ bgcolor: "transparent" }}>
              <ListItemContent sx={{ p: 2 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Typography
                    level="body2"
                    startDecorator={<FolderOpenIcon color="primary" />}
                    sx={{ alignItems: "flex-start" }}
                  >
                    Important documents
                  </Typography>
                  <Typography level="body2" sx={{ color: "success.600" }}>
                    123.3KB
                  </Typography>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mt: 2,
                  }}
                >
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
                  <Typography level="body2">26 May 2010, 7PM</Typography>
                </Box>
              </ListItemContent>
            </ListItemButton>
          </ListItem>
        </List>
      </Sheet>
      <Card
        variant="outlined"
        sx={{
          "--Card-radius": (theme) => theme.vars.radius.sm,
          bgcolor: "background.componentBg",
          boxShadow: "none",
        }}
      >
        <CardOverflow
          sx={{
            borderBottom: "1px solid",
            borderColor: "neutral.outlinedBorder",
          }}
        >
          <AspectRatio ratio="16/9" color="primary">
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "primary.plainColor",
              }}
            >
              .zip
            </Typography>
          </AspectRatio>
        </CardOverflow>
        <Box sx={{ pt: 2, display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <Typography>photos-travel.zip</Typography>
            <Typography level="body3" mt={0.5}>
              Added 25 May 2011
            </Typography>
          </Box>
          <IconButton variant="plain" color="neutral">
            <EditOutlinedIcon />
          </IconButton>
        </Box>
      </Card>
      <Card
        sx={{
          "--Card-radius": (theme) => theme.vars.radius.sm,
          boxShadow: "none",
        }}
      >
        <CardCover>
          <img
            alt=""
            src="https://images.unsplash.com/photo-1534067783941-51c9c23ecefd?auto=format&fit=crop&w=774"
          />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.12))",
          }}
        />
        <CardContent
          sx={{
            mt: "auto",
            flexGrow: 0,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box sx={{ flex: 1 }}>
            <Typography textColor="#fff">torres-del-paine.png</Typography>
            <Typography
              level="body3"
              mt={0.5}
              textColor="rgba(255,255,255,0.72)"
            >
              Added 5 Aug 2016
            </Typography>
          </Box>
          <IconButton variant="plain" color="neutral" sx={{ color: "#fff" }}>
            <EditOutlinedIcon />
          </IconButton>
        </CardContent>
      </Card>
      <Card
        variant="outlined"
        sx={{
          "--Card-radius": (theme) => theme.vars.radius.sm,
          bgcolor: "background.componentBg",
          boxShadow: "none",
        }}
      >
        <CardOverflow
          sx={{
            borderBottom: "1px solid",
            borderColor: "neutral.outlinedBorder",
          }}
        >
          <AspectRatio ratio="16/9" color="primary">
            <Typography
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "primary.plainColor",
              }}
            >
              .zip
            </Typography>
          </AspectRatio>
        </CardOverflow>
        <Box sx={{ pt: 2, display: "flex", alignItems: "center" }}>
          <Box sx={{ flex: 1 }}>
            <Typography>platform_ios.zip</Typography>
            <Typography level="body3" mt={0.5}>
              Added 26 May 2011
            </Typography>
          </Box>
          <IconButton variant="plain" color="neutral">
            <EditOutlinedIcon />
          </IconButton>
        </Box>
      </Card>
    </>
  );
}
