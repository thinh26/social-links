"use client";
import { createTheme, type Theme } from "@mui/material/styles";

const theme: Theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
  typography: {
    fontFamily: "var(--font-notoSans)",
  },
});

export default theme;
