import theme from "@/components/fontTheme";
import "@/styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";

export default function App({ Component, pageProps }) {
  return ( <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
