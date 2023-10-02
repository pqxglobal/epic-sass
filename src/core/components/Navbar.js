import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  return (
    <div className="nav-container border-b-2 border-black">
      <Link href='/'>
        <Logo/>
      </Link>
    </div>
  ) 
}
