
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SERVICES = [
  {
    name: "Product Design",
    desc: "Thoughtful, iterative user experience and visual design for SaaS, web, and mobile products.",
  },
  {
    name: "Branding & Identity",
    desc: "Distinct brand identities — from logos to tone-of-voice — that create memorable first impressions.",
  },
  {
    name: "Website Design",
    desc: "Modern landing pages, responsive company websites & marketing assets optimized for engagement.",
  },
  {
    name: "Consulting & Workshops",
    desc: "Empowering teams through hands-on UX workshops, design sprints, and design system builds.",
  },
];

const Services = () => (
  <div className="bg-background min-h-screen font-inter text-foreground flex flex-col transition-colors">
    <Navbar />
    <main className="flex-1 w-full flex flex-col items-center pt-[80px] pb-12 px-4">
      <section className="w-full max-w-2xl text-center mb-8">
        <h1 className="text-3xl sm:text-5xl font-light mb-4">
          Services I Offer
        </h1>
        <p className="text-base sm:text-lg text-foreground/70 mb-7">
          Let’s bring your vision to life! Here’s how I can help:
        </p>
      </section>
      <section className="w-full max-w-2xl flex flex-col gap-7">
        {SERVICES.map(s => (
          <div
            key={s.name}
            className="bg-secondary rounded-xl border border-border shadow-sm p-5 sm:p-6 text-left group hover:shadow-md transition"
          >
            <h2 className="text-xl font-bold mb-2 group-hover:underline">{s.name}</h2>
            <p className="text-foreground/60 text-base">{s.desc}</p>
          </div>
        ))}
      </section>
      <div className="mt-10 text-center">
        <a
          href="https://calendly.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-2 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-black/80 dark:hover:bg-white/80 transition"
        >
          Request a Consultation
        </a>
      </div>
    </main>
    <Footer />
  </div>
);

export default Services;

