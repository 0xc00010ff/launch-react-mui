import React from "react";
import ReactDOM from "react-dom/client";
import { CssVarsProvider, StyledEngineProvider } from "@mui/joy/styles";
import { GlobalStyles } from "@mui/system";
import type { Theme } from "@mui/joy/styles";
import App from "./App";
import ThemeStyles from "./components/ThemeStyles";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <CssVarsProvider disableTransitionOnChange theme={ThemeStyles}>
        <GlobalStyles<Theme>
          styles={(theme: Theme) => ({
            body: {
              margin: 0,
              fontFamily: theme.vars.fontFamily.body,
            },
            MuiLink: {
              styleOverrides: {
                root: {
                  textDecoration: "none",
                },
              },
            },
          })}
        />
        <App />
      </CssVarsProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
