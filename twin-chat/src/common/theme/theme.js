import { createTheme } from "@mui/material/styles";
export const theme = createTheme({
  palette: {
    primary: {
      main: "#C46236",
      dark: "#A6522d",
      contrastText: "#fff",
    },
    background: {
      main: "hsl(19, 57%, 98%)",
      dark: "#5E4E46",
    },
  },
  typography: {
    h1: {
      fontFamily: "Raleway, 'Open Sans', sans-serif",
      fontWeight: {
        regular: 400,
        medium: 500,
        bold: 600,
      },
    },
    subtitle1: {
      fontFamily: "Raleway,'Open Sans', sans-serif",
      fontWeight: {
        regular: 400,
        medium: 500,
      },
    },
    body1: {
      fontFamily: "Lato, 'Open Sans', sans-serif",
      fontWeight: 400,
    },
  },
});
