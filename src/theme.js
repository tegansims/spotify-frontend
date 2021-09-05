const theme = {
  fonts: {
    body: "spotify-circular, Helvetica, Arial, sans-serif",
    heading: "\"Avenir Next\", sans-serif",
    monospace: "Menlo, monospace",
  },
  fontSizes: [12, 14, 18, 24, 36, 48],
  colors: {
    text: "#fff",
    background: "#282C34",
    primary: "#1DB954",
    secondary: "#2941AB"
  },
  buttons: {
    primary: {
      color: "secondary",
      bg: "accent",
      borderRadius: 25,
      "&:hover": {
        color: "text",
        cursor: "pointer"
      },
      "&:disabled": {
        color: "#bbb",
        cursor: "default"
      },

    },
    secondary: {
      color: "text",
      bg: "secondary",
    },
  }
};

export default theme;
