import Link from "next/link";
import "../globals.css";

export default function page()
{
    return(
        <>
         <nav className="navbar navbar-expand-lg navbar-dark  i3">
  <div className="container-fluid">
    <Link className="navbar-brand " href="/Dash" ><span className="i1 i2">Dev</span><span className="i1">Works</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link "  href="/Dash">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Experience</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">Contact us</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

        </>
    )
}