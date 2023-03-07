import Navbar from "@/components/Navbar";
import Image from "next/image";
import { background } from "@/assets";

export default function Home() {
  return (
    <main className="w-screen">
      <Navbar />
    {/* Or this can be used in layout to display Navbar on all the Pages */}
    </main>
  )
}
