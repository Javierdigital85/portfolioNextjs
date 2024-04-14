import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import dotenv from "dotenv";
dotenv.config();

export default function Home() {
  const resend = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto py-4 px-12">
        <Header />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
