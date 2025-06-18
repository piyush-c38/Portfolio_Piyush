import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SocialIcons from "@/components/SocialIcons";
import Timeline from "@/components/Timeline";

const PROFILE = {
  img: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder; replace with your image
  name: "Piyush Chandrakar",
  tagline: "Full-Stack Product Developer",
  techKeyWords: ["Java", "Python", "JavaScript","TypeScript", "React", "React Native", "NextJS", "NodeJS","ExpressJS", "MongoDB", "Firebase", "Tensorflow", "PyTorch","SciKit-Learn", "Git Hub", "Bit Bucket", "Jira", "Mosquitto", "Docker"],
};

const ABOUT_ME = `
Hi, I’m Piyush — a curious tech enthusiast who thrives on innovation and continuous growth. I believe in becoming the best version of myself and living life to the fullest, both professionally and personally.

For me, experience matters the most. 
With hands-on experience as a Software Developer, Product Engineer, and Treasurer, I bring a unique blend of technical expertise and strategic thinking. This journey has given me deep insight into how the world of product development, finance, and team building work together to drive meaningful results.

I’m skilled in Application Development, Coding & Problem Solving, Team Building, User Experience, Market & Tech Trend Analysis.

In addition to my professional pursuits, I enjoy jamming to music, playing badminton, and spending quality time with my family and friends.
`;

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
          <aside className="md:w-1/3 w-full md:max-w-xs flex flex-col items-center md:items-start bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4 md:mb-0">
            <Avatar className="h-28 w-28 mx-auto mb-4 shadow">
              <AvatarImage src={PROFILE.img} alt={PROFILE.name} />
            </Avatar>
            <div className="text-center md:text-left w-full">
              <h2 className="text-lg font-semibold mb-1">{PROFILE.name}</h2>
              <div className="text-black/80 text-sm italic mb-2">{PROFILE.tagline}</div>
              <h2 className="text-lg font-semibold mt-8 mb-2">Tech Key Words</h2>
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
                {ABOUT_ME.split("\n").map((line, i) =>
                  line.trim() === "" ? <br key={i} /> : <p key={i}>{line}</p>
                )}
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
