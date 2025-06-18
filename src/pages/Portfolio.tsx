import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SocialIcons from "@/components/SocialIcons";
import Timeline from "@/components/Timeline";
import { Link } from "react-router-dom";

const PROFILE = {
  img: "data/dp.png", // Placeholder; replace with your image
  name: "Piyush Chandrakar",
  tagline: "Full-Stack Product Developer",
  techKeyWords: ["Java", "Python", "JavaScript", "TypeScript", "React", "React Native", "NextJS", "NodeJS", "ExpressJS", "MongoDB", "Firebase", "Tensorflow", "PyTorch", "SciKit-Learn", "Git Hub", "Bit Bucket", "Jira", "Mosquitto", "Docker"],
};

const handleReachOut = ()=>{
  window.scrollTo({top:document.body.scrollHeight, left:0, behavior:"smooth"});
}

const ABOUT_ME = (<>
  <p>Hi, I’m Piyush — an experienced developer.</p>
  <p className="mt-4">For me, product planning and the final produced product matter the most. I believe in teamwork and enjoy innovating with like-minded friends.</p>
  <p className="mt-4">
    Currently, I am working with 506 Army Base Workshop to develop a productivity monitoring Dev-IoT system, focusing on industrial automation. My previous work at{" "}
    <a
      href="https://github.com/piyush-c38/TracExpert_T"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline hover:text-blue-800"
    >
      IIT Indore
    </a>{" "}
    gave me valuable experience in app development, delivering successful industry management software.
  </p>
  <p className="mt-4">
    To be precise, I’m skilled in application development, coding & problem solving, team building, and market & tech trend analysis. In addition to my professional pursuits, I enjoy jamming to music, playing badminton, and spending quality time with my family and friends.
  </p>
  <p className="mt-4">
    <a
      href="#"
      onClick={handleReachOut}
      className="text-blue-600 underline hover:text-blue-800"
    >
      Reach out 
    </a>{" "}
    if you have any interesting ideas to collaborate on!</p>
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
                  to="https://drive.google.com/file/d/1hdIRK0R1IA5SWNT6mGVz5s8Di7IvOZFw/view?usp=sharing"
                  target="_blank"
                  className="text-[14px] sm:text-s font-bold text-white bg-slate-800 px-6 py-2 rounded-full m-1"
                >
                  My Resume: PDFv
                </Link>
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
            <div className="w-full flex justify-center md:justify-start mt-2">
              <SocialIcons />
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
              <h2 className="text-2xl font-semibold mb-3">My Work Experience</h2>
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
