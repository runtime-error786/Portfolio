import { Inter } from "next/font/google";
import Nav from "./Nav";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Portfolio",
  description: "Mustafa's Profile",
};

export default function RootLayout({ children }) {
  return (
    <>
    <Nav></Nav>
    {children}
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    </>
  );
}
