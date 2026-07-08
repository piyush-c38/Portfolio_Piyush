import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SocialIcons from "@/components/SocialIcons";
import Timeline from "@/components/Timeline";
import { Link } from "react-router-dom";
import Links from "../../public/data/link.js"

const PROFILE = {
  img: "https://res.cloudinary.com/yfhun3wh/image/upload/v1783424099/dp_anjwsa.png",
  name: "Piyush Chandrakar",
  tagline: "Full-Stack Developer",
  techKeyWords: ["Java", "Python", "JavaScript", "TypeScript", "React", "React Native", "NextJS", "NodeJS", "ExpressJS", "Typescript", "MongoDB", "Firebase", "RAG", "LLMs", "Vector Search", "Tensorflow", "PyTorch", "SciKit-Learn", "Git Hub", "Bit Bucket", "Jira", "Mosquitto", "Docker"],
};

const handleReachOut = (e) => {
  e.preventDefault();

  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const ABOUT_ME = (<>
  <p>Hey, I'm Piyush.</p>

  <p className="mt-4">
    I build AI-powered products by combining full-stack engineering with automation and intelligent workflows. Currently, I'm exploring agentic AI by building a personal assistant using n8n, Ollama, and local LLMs to automate everyday tasks.{" "}
    <a
      href="#"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
      Read about the project here.
    </a>
  </p>

  <p className="mt-4">
    Some of my side projects include:
  </p>

  <ul className="mt-2 list-disc list-inside space-y-2">
    <li>
      <a
        href="https://github.com/piyush-c38/git-insight"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        AI-powered GitHub repository analyzer
      </a>
    </li>

    <li>
      <a
        href="https://github.com/piyush-c38/Gunshot_Direction_Estimation"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Gunshot direction estimation using VGGish embeddings
      </a>
    </li>
  </ul>

  <p className="mt-4">
    From production web and mobile applications to AI and computer vision systems, I enjoy turning ideas into practical software.
  </p>

  <p className="mt-4">
    I've been fortunate to work with reputed institutions:
  </p>

  <ul className="mt-2 list-disc list-inside space-y-2">
    <li>
      <strong>AI Systems Intern:</strong> 506 Army Base Workshop
    </li>
    <li>
      <strong>App Development Intern:</strong> IIT Indore
    </li>
  </ul>

  <p className="mt-4">
    Outside of work, you'll probably find me jamming on my instruments, playing badminton, or spending quality time with family and friends.
  </p>

  <p className="mt-4">
    <a
      href="#"
      onClick={handleReachOut}
      className="text-blue-600 underline hover:text-blue-800"
    >
      Reach out
    </a>{" "}
    if you have an interesting idea to build or would like to collaborate!
  </p>
</>);

const Portfolio = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter text-black flex flex-col">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center pt-[80px] pb-12 px-8 mt-20 sm:px-4 md:px-8">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-8">
          {/* --- Left Sidebar --- */}
          <aside className="md:w-1/3 w-full md:max-w-xs flex flex-col items-center bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4 md:mb-0">
            <Avatar className="h-48 w-48 mx-auto mb-4 shadow">
              <AvatarImage src={PROFILE.img} alt={PROFILE.name} />
            </Avatar>
            <div className="text-center md:text-left w-full">
              <h2 className="text-center text-lg font-semibold mb-1">{PROFILE.name}</h2>
              <div className="text-center text-black/80 text-sm italic mb-2">{PROFILE.tagline}</div>
              <div className="flex justify-center">
                <Link
                  to={Links.resumeLink}
                  target="_blank"
                  className="text-[14px] sm:text-s font-bold text-white bg-slate-800 px-6 py-2 rounded-full m-1"
                >
                  My Resume: PDFv
                </Link>
              </div>
              <div className="w-full flex justify-center md:justify-start mt-4">
                <SocialIcons />
              </div>
              <h2 className="text-lg font-semibold mt-8 mb-2">Tools & Technologies</h2>
              <div className="flex flex-wrap">
                {PROFILE.techKeyWords.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-[14px] sm:text-xs font-bold text-white bg-slate-800 px-2 py-1 rounded-sm m-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          {/* --- Right Section --- */}
          <section className="flex-1 flex flex-col gap-9">
            {/* About Me */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">About Me</h2>
              <div className="prose prose-neutral prose-sm sm:prose-base max-w-none border border-gray-100 rounded-xl p-5 bg-gray-50 text-black/90">
                {ABOUT_ME}
              </div>
            </div>
            {/* Experience Timeline */}
            <div>
              <h2 className="text-2xl font-semibold mb-3">My Works</h2>
              <Timeline />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
};

export default Portfolio;
