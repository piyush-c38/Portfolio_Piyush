import { useEffect } from "react";
import ReactMarkdown from "react-markdown";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SocialIcons from "@/components/SocialIcons";
import Timeline from "@/components/Timeline";
import { portfolioContent, siteContent } from "@/lib/content";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="bg-white min-h-screen font-inter text-black flex flex-col">
      <Navbar />

      <main className="flex-1 w-full flex flex-col items-center pt-[80px] pb-12 px-8 mt-20 sm:px-4 md:px-8">
        <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-8">
          <aside className="md:w-1/3 w-full md:max-w-xs flex flex-col items-center bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4 md:mb-0">
            <Avatar className="h-48 w-48 mx-auto mb-4 shadow">
              <AvatarImage
                src={portfolioContent.profile.image}
                alt={portfolioContent.profile.name}
              />
            </Avatar>
            <div className="text-center md:text-left w-full">
              <h2 className="text-center text-lg font-semibold mb-1">
                {portfolioContent.profile.name}
              </h2>
              <div className="text-center text-black/80 text-sm italic mb-2">
                {portfolioContent.profile.tagline}
              </div>
              <div className="flex justify-center">
                <a
                  href={siteContent.resume_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] sm:text-s font-bold text-white bg-slate-800 px-6 py-2 rounded-full m-1"
                >
                  My Resume: PDFv
                </a>
              </div>
              <div className="w-full flex justify-center md:justify-start mt-4">
                <SocialIcons />
              </div>
              <h2 className="text-lg font-semibold mt-8 mb-2">Tools & Technologies</h2>
              <div className="flex flex-wrap">
                {portfolioContent.profile.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[14px] sm:text-xs font-bold text-white bg-slate-800 px-2 py-1 rounded-sm m-1"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </aside>

          <section className="flex-1 flex flex-col gap-9">
            <div>
              <h2 className="text-2xl font-semibold mb-3">About Me</h2>
              <div className="prose prose-neutral prose-sm sm:prose-base max-w-none border border-gray-100 rounded-xl p-5 bg-gray-50 text-black/90">
                <ReactMarkdown>{portfolioContent.about_markdown}</ReactMarkdown>
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-3">My Works</h2>
              <Timeline items={portfolioContent.timeline} />
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
