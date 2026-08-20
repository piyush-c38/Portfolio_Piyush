import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MarkdownContent from "@/components/MarkdownContent";
import {
    getServiceBySlug,
    getServiceCaseStudyBySlug,
    getServiceProjectBySlug,
} from "@/lib/content";

const pageVariants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.3,
        },
    },
};

const CaseStudy = () => {
    const { service, case_study } = useParams<{
        service: string;
        case_study: string;
    }>();

    const currentService = getServiceBySlug(service);
    const currentProject = getServiceProjectBySlug(service, case_study);
    const currentCaseStudy = getServiceCaseStudyBySlug(service, case_study);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }, [service, case_study]);

    if (!currentService || !currentProject || !currentCaseStudy) {
        return (
            <div className="min-h-screen bg-white">
                <Navbar />
                <main className="pt-40 py-20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
                        <p className="text-gray-600 mb-8">
                            The case study you&apos;re looking for doesn&apos;t exist yet for this project.
                        </p>
                        <Link
                            to={currentService ? `/services/${currentService.slug}` : "/services"}
                            className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors"
                        >
                            <ArrowLeft size={16} className="mr-2" />
                            Back to Services
                        </Link>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    const { title, subtitle, chapters } = currentCaseStudy;
    const heroImage = chapters[0]?.image ?? currentProject.image;

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            <motion.main
                className="flex-1 pt-20"
                variants={pageVariants}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <section className="relative h-[80svh] overflow-hidden">
                    <img
                        src={heroImage}
                        alt={`${title} hero`}
                        width={1600}
                        height={1067}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70" />
                    <div className="px-10 absolute inset-0 container-full flex flex-col justify-end pb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                            className="max-w-3xl"
                        >
                            <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-white/70 mb-5">
                                {currentProject.title}
                            </p>
                            <h1 className="font-serif text-5xl md:text-7xl text-white leading-[0.95] mb-6">
                                {title}
                            </h1>
                            <p className="text-base md:text-lg text-white/80 leading-relaxed max-w-lg mb-4">
                                {subtitle}
                            </p>
                        </motion.div>
                    </div>
                </section>

                {chapters.map((chapter, index) => (
                    <section
                        key={`${chapter.label}-${index}`}
                        className={`px-10 py-16 md:py-28 ${index % 2 === 1 ? "bg-[#f2efe8]" : ""}`}
                    >
                        <div className="container-narrow md:px-14 lg:px-20">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] as const }}
                            >
                                <p className="text-[11px] font-semibold tracking-[0.3em] uppercase text-[#a65e3f] mb-4">
                                    {String(index + 1).padStart(2, "0")} - {chapter.label}
                                </p>
                                <h2 className="font-serif text-3xl md:text-5xl text-foreground leading-[1.05] mb-6">
                                    {chapter.heading}
                                </h2>
                                <MarkdownContent
                                    className="prose prose-neutral max-w-3xl text-muted-foreground text-base md:text-lg leading-relaxed"
                                    content={chapter.body}
                                    preserveLineBreaks={false}
                                />
                            </motion.div>
                        </div>

                        {chapter.image && (
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-80px" }}
                                transition={{
                                    duration: 0.9,
                                    delay: 0.1,
                                    ease: [0.25, 0.46, 0.45, 0.94] as const,
                                }}
                                className="container-full mt-12 md:mt-16"
                            >
                                <div className="relative aspect-[16/9] overflow-hidden group">
                                    <img
                                        src={chapter.image}
                                        alt={`${title} - ${chapter.heading}`}
                                        loading="lazy"
                                        width={1600}
                                        height={1067}
                                        className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </section>
                ))}
            </motion.main>
            <Footer />
        </div>
    );
};

export default CaseStudy;
