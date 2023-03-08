import { NavbarItems } from "@/typesandArrays/NavbarItems";
import NavbarView from "@/views/navbarView";


export default function Navbar() {
  return (
    <section className="max-h-screen w-full">
      <nav className="z-50">
        <NavbarView navItem={NavbarItems} />
      </nav>
    </section>
  )
}