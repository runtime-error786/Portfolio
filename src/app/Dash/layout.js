import { Inter } from "next/font/google";
import Nav from "./Nav";
import CustomHead from "./Head";
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from "./Head";
import "../globals.css";
import "./g.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
    <BootstrapClient></BootstrapClient>
    <Nav></Nav>
    {children}
    </>
  );
}
