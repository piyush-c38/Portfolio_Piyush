
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <div className="bg-background min-h-screen font-inter text-foreground flex flex-col transition-colors">
    <Navbar />
    <main className="flex-1 w-full flex flex-col items-center pt-[80px] pb-10 px-4">
      <section className="w-full max-w-2xl text-center mb-8 animate-fadeinup">
        <h1 className="text-3xl sm:text-5xl font-light mb-5">A little about me</h1>
        <p className="text-base sm:text-lg text-foreground/70 mb-6">
          Hi, I’m Piyush Chandrakar – a passionate designer fascinated by the intersection
          of creativity and usability. Over the past 4+ years, I’ve shaped user experiences
          for brands, startups, and dynamic digital products.
        </p>
        <p className="text-base text-foreground/60 mb-6">
          My journey started with freelance gigs, then evolved into leading teams and guiding product visions.
          I bring empathy, technical know-how, and an eye for detail to every project – constantly learning, sharing, and building together.
        </p>
      </section>
      <section className="w-full max-w-2xl mb-10 bg-secondary rounded-xl p-6 sm:p-9 text-left text-foreground/85 shadow animate-fadeinup transition-colors">
        <h2 className="text-xl font-semibold mb-2">Tools I Use</h2>
        <ul className="list-disc list-inside text-base space-y-1">
          <li>Figma, Adobe XD, Illustrator, Photoshop</li>
          <li>Framer, Zeplin, Notion, Jira</li>
          <li>Tailwind CSS, React, HTML/CSS (for design handoff & prototypes)</li>
        </ul>
      </section>
      <section className="w-full max-w-2xl bg-muted rounded-xl p-6 text-left shadow transition-colors">
        <h2 className="text-xl font-semibold mb-2">Let’s Collaborate</h2>
        <p className="mb-2">
          Interested in working together, or want to exchange ideas about design? Don’t hesitate to reach out or book a call.
        </p>
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-2 px-5 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-black/80 dark:hover:bg-white/80 transition"
        >
          Book a Call
        </a>
      </section>
    </main>
    <Footer />
  </div>
);

export default About;

