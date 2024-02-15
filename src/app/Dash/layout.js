import { Inter } from "next/font/google";
import Nav from "./Nav";
import CustomHead from "./Head";
import 'bootstrap/dist/css/bootstrap.css'
import BootstrapClient from "./Head";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Portfolio",
  description: "Mustafa's Profile",
};

export default function RootLayout({ children }) {
  return (
    <>
    <BootstrapClient></BootstrapClient>
    <Nav></Nav>
    {children}
    </>
  );
}
