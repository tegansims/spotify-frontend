import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "./theme";

import Home from "./features/spotify/Home";

const App = () => (
  <ThemeProvider theme={theme}>
    <Home />
  </ThemeProvider>
);

export default App;
