import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import ParticlesBackground from "@/components/particles-background";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <main className="min-h-screen bg-dark text-white">
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
}
