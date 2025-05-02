import theme from "@/components/fontTheme";
import "@/styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { SessionProvider } from "next-auth/react";


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </ThemeProvider>
  );
}
