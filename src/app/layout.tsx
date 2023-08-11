import type { Metadata } from "next";
import Header from "./components/header/Header";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import './i18n';


export const metadata: Metadata = {
  title: "Felipe Montaña",
  description: "Portafolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html style={{ height: "95%" }}>
      <body style={{ background: "#00223A", height: "100%", margin: "0" }}>
          <Header />
          {children}
      </body>
    </html>
  );
}
