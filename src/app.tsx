import { CssVarsProvider, StyledEngineProvider } from "@mui/joy/styles";
import { GlobalStyles } from "@mui/system";
import type { Theme } from "@mui/joy/styles";
import Pages from "./pages";
import ThemeOverrides from "./components/ThemeOverrides";

export default function App() {
  return (
    <StyledEngineProvider injectFirst>
      <CssVarsProvider disableTransitionOnChange theme={ThemeOverrides}>
        <GlobalStyles<Theme>
          styles={(theme: Theme) => ({
            body: {
              margin: 0,
              fontFamily: theme.vars.fontFamily.body,
            },
          })}
        />
        <Pages />
      </CssVarsProvider>
    </StyledEngineProvider>
  );
}
