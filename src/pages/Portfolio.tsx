
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import SocialIcons from "@/components/SocialIcons";
import Timeline from "@/components/Timeline";

const PROFILE = {
  img: "https://randomuser.me/api/portraits/men/32.jpg", // Placeholder; replace with your image
  name: "Alex Johnson",
  tagline: "Transforming ideas into engaging visuals.",
  bio: "I'm a multidisciplinary designer focused on branding, UI/UX, and web experiences. Passionate about building products that delight users and achieve real business impact. Open to collaboration and new challenges.",
};

const ABOUT_ME = `
Hi! I'm Alex, a product and UI/UX designer passionate about building delightful user experiences. My core expertise lies in crafting visually compelling, functional, and user-centered designs for web and mobile platforms.

I value clear communication, continuous learning, and thoughtful problem-solving. Let’s connect and bring your next big idea to life!
`;

const Portfolio = () => (
  <div className="bg-white min-h-screen font-inter text-black flex flex-col">
    <Navbar />

    <main className="flex-1 w-full flex flex-col items-center pt-[80px] pb-12 px-2 sm:px-4 md:px-8">
      <div className="w-full max-w-5xl flex flex-col md:flex-row gap-12 md:gap-8">
        {/* --- Left Sidebar --- */}
        <aside className="md:w-1/3 w-full md:max-w-xs flex flex-col items-center md:items-start bg-white rounded-2xl border border-gray-100 p-6 shadow-sm mb-4 md:mb-0">
          <Avatar className="h-28 w-28 mx-auto mb-4 shadow">
            <AvatarImage src={PROFILE.img} alt={PROFILE.name} />
          </Avatar>
          <div className="text-center md:text-left w-full">
            <h2 className="text-lg font-semibold mb-1">{PROFILE.name}</h2>
            <div className="text-black/80 text-sm italic mb-2">{PROFILE.tagline}</div>
            <div className="text-black/70 text-sm mb-3">{PROFILE.bio}</div>
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
                line.trim() === "" ? <br key={i}/> : <p key={i}>{line}</p>
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
);

export default Portfolio;
