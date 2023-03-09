import DummyData from "@/components/DummyData";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <section>
      <main className="w-screen h-screen" style={{ backgroundImage: "url(../background1.webp)", backgroundSize: "cover" }} >
        <Navbar />
        {/* Or this can be used in layout to display Navbar on all the Pages */}
      </main>
      <DummyData />
    </section>
  )
}
