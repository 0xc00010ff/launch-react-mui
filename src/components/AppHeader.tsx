import Box from "@mui/joy/Box";
import IconButton from "@mui/joy/IconButton";
import TextField from "@mui/joy/TextField";
import Typography from "@mui/joy/Typography";

// Icons import
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import FindInPageRoundedIcon from "@mui/icons-material/FindInPageRounded";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import MenuIcon from "@mui/icons-material/Menu";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

// custom
import ColorSchemeToggle from "./ColorSchemeToggle";
import Menu from "./Menu";

interface AppHeaderProps {
  onDrawerClick?: (open: boolean) => void;
}

export default function AppHeader(props: AppHeaderProps = {}) {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 1.5,
        }}
      >
        <IconButton
          variant="outlined"
          size="sm"
          onClick={() => props.onDrawerClick && props.onDrawerClick(true)}
          sx={{ display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <IconButton
          size="sm"
          variant="solid"
          sx={{ display: { xs: "none", sm: "inline-flex" } }}
        >
          <FindInPageRoundedIcon />
        </IconButton>
        <Typography component="h1" fontWeight="xl">
          NotesApp
        </Typography>
      </Box>
      <TextField
        size="sm"
        placeholder="Search anything…"
        startDecorator={<SearchRoundedIcon color="primary" />}
        endDecorator={
          <IconButton variant="outlined" size="sm" color="neutral">
            <Typography fontWeight="lg" fontSize="sm" textColor="text.tertiary">
              /
            </Typography>
          </IconButton>
        }
        sx={{
          flexBasis: "500px",
          display: {
            xs: "none",
            sm: "flex",
          },
        }}
      />
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5 }}>
        <IconButton
          size="sm"
          variant="outlined"
          color="primary"
          sx={{ display: { xs: "inline-flex", sm: "none" } }}
        >
          <SearchRoundedIcon />
        </IconButton>
        <IconButton
          size="sm"
          variant="outlined"
          color="primary"
          component="a"
          href="/blog/first-look-at-joy/"
        >
          <BookRoundedIcon />
        </IconButton>
        <Menu
          id="app-selector"
          control={
            <IconButton
              size="sm"
              variant="outlined"
              color="primary"
              aria-label="Apps"
            >
              <GridViewRoundedIcon />
            </IconButton>
          }
          menus={[
            {
              label: "Email",
              href: "/joy-ui/getting-started/templates/email/",
            },
            {
              label: "Team",
              href: "/joy-ui/getting-started/templates/team/",
            },
            {
              label: "Files",
              active: true,
              href: "/joy-ui/getting-started/templates/files/",
              "aria-current": "page",
            },
          ]}
        />
        <ColorSchemeToggle />
      </Box>
    </>
  );
}
