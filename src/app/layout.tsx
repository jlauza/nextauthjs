import AuthProvider from "./context/AuthProvider";
import { Inter } from "next/font/google";
import { createTheme, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/code-highlight/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prototype",
  description: "Prototype app.",
};

const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "teal",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MantineProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </MantineProvider>
  );
}
