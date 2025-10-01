import React from "react";

const Blogs: {
    id: number;
    title: string;
    excerpt: string;
    content: React.ReactNode;
    date: string;
    readTime: string;
    category: string;
    image: string;
    featured: boolean;
    slug: string;
}[] = [
        {
            id: 1,
            title: "Blog - Ideation of Thoughts",
            excerpt: "An introduction to my blogging journey, exploring what a blog is and the value of sharing knowledge simply and transparently with others.",
            content: (
                <>
                    <p>Hey! This is my first Blog.</p>
                    <p>And I want to start my blogging journey with my own style having transparency in my thoughts. So let's first understand what does Blog mean?</p>
                    <p className="mt-5">So, a blog is content by which a person shares his/her knowledge with many people. It's basically sharing your Ideas, Knowledge and Thoughts that you have with a large community that can help them.</p>
                    <p className="mt-5">We all have proficiency in one field or another. Sharing our ideas in articles or blogs can help others who want to know more about that field. Blogs can range from a simple idea-"How to plant an excellent seed?" to a complex solution like- "What should be the specifications of my motherboard to install Intel i9 13th gen processor with DDR5 RAM?" So it's basically information in the form of conversation. It's better if we keep Blog in a Simple and understandable manner. So that Readers can enjoy the content and get relevant answers.</p>
                    <p className="mt-5">Following the same Ideology, ending this Blog here. Let's meet in the next Blog with another great content!</p>
                </>
            ),
            date: "July 13, 2023",
            readTime: "1 min read",
            category: "Life",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
            featured: false,
            slug: "what-does-a-blog-mean"
        },
        {
            id: 2,
            title: "Stepping Out of My Comfort Zone",
            excerpt: "A personal reflection on stepping out of my comfort zone, embracing new habits, and overcoming hesitation to pursue personal growth and well-being.",
            content: (
                <>
                    <p>For me, the past year has been about exploring new things. Be it hitting the gym, having a morning walk, watching movies or having healthy exercise. I did everything that I felt was right for me. It&apos;s been a time of personal growth and an opportunity to pave my own path, even if it meant being the first in my family.</p>
                    <p className="mt-5">But today, I found myself facing a familiar struggle.</p>
                    <p className="mt-5">For the past few days, I have been practising yoga daily morning. But I hesitate to practice in front of my family members, especially in front of my father. It&apos;s Strange, isn&apos;t it? We all encounter moments like these.</p>
                    <p className="mt-5">And it&apos;s normal.</p>
                    <p className="mt-5">It&apos;s so because we are venturing into something new which is out of our comfort zone, doing something new, Right?</p>
                    <p className="mt-5">We need to be confident with what we do. Of course, if something is wrong, then hesitation is justified. But when it comes to the activities that enhance our well-being, we must embrace them wholeheartedly. Like... doing exercise!</p>
                    <p className="mt-5">As I conclude this blog, I leave you with this thought: we should never allow fear or hesitation to hold us back from exploring new frontiers; let&apos;s break free from all the confines.</p>
                    <p className="mt-5">Stay tuned for more creative ideas and inspiration. Let&apos;s embark on this incredible journey together!</p>
                </>
            ),
            date: "July 16, 2023",
            readTime: "2 min read",
            category: "Life",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
            featured: false,
            slug: "stepping-out-of-my-comfort-zone"
        },
        {
            id: 3,
            title: "5G Revolution: Paving the Way for a Limitless Future",
            excerpt: "Explore how 5G is revolutionizing technology in India, enabling innovations like autonomous vehicles, VR, smart cities, and ultra-fast connectivity for a limitless future.",
            content: (
                <>
                    <p>&quot;IoT, Autonomous Vehicles, Virtual Reality, Remote Healthcare, Smart Cities, 4K Streaming.&quot;</p>
                    <p className="mt-5">After the launch of 5G in India, there is a sudden hype in the tech world. It feels like the future has become a reality. Autonomous vehicles, virtual and augmented games, and how can we forget the live 3D streaming of cricket in Airtel&apos;s 5G prototype!</p>
                    <p className="mt-5">Hi! This is me, your friend Piyush. Today&apos;s blog is dedicated to 5G, the fifth generation of networking.</p>
                    <p className="mt-5">5G is basically the successor of the 4G network. Upgrading to peak download speeds of up to 10Gbps, the 5G network comes with multiple capabilities like low latency (as low as 1 millisecond), improved coverage, and enhanced reliability.</p>
                    <p className="mt-5">But do we need the 5G network? Well, the simple answer is yes, for upgrading industries and technology. Although 4G offers good speeds of 100Mbps and decent latency, 5G&apos;s ultra-low latency, enhanced capacity, and network-slicing technology win the race. It opens doors to using virtual reality (VR) and augmented reality (AR) devices not just for gaming and entertainment but also for remote healthcare and robotic surgery purposes. In simple terms, 5G is more advanced than 4G and can turn our futuristic ideas into reality.</p>
                    <p className="mt-5">Get ready to ride the wave of 5G innovation and witness a future beyond imagination! Stay tuned for more exciting tech updates and join me on this thrilling journey of technological revolution.</p>
                </>
            ),
            date: "July 17, 2023",
            readTime: "1 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
            featured: true,
            slug: "5g-revolution-paving-the-way-for-a-limitless-future"
        },
        {
            id: 4,
            title: "Network upgradation for a new generation technology?",
            excerpt: "Discover how 5G networks are upgraded, from expanding infrastructure and frequency bands to enabling high-speed, low-latency connectivity with advanced technologies like MIMO and updated software protocols.",
            content: (
                <>
                    <p>Welcome to this new tech blog dedicated to the upgradation of networks. Have you ever wondered what it takes for a network to upgrade? How is a network developed for its new generation? Let&apos;s explore it out.</p>
                    <p className="mt-5">5G comes with tons of advanced features like high-speed data transfer, ultra-low latency, and MIMO (Multiple Input - Multiple Output) technology.</p>
                    <p className="mt-5">To implement these technologies, we need to increase the capacity of networks, both in terms of software and hardware.</p>
                    <p className="mt-5">The process involves increasing the number of cell towers and base stations. This upgrade provides broader network coverage and the ability to transfer data at high frequencies. After this, we need to upgrade the core network and backhaul-transport network. 5G technology involves the exchange of data at very high speeds, up to 10 Gbps. Transferring this data wirelessly is only possible at high frequencies, so auctions are done to register and use the frequency bands in the public domain. Additionally, some bands are optimised for reuse.</p>
                    <p className="mt-5">Now, after increasing the area of coverage and frequency for transferring data, there is a need to install new antennas with increased capacity to transfer data via multiple channels, enabling the use of MIMO technology. We also need to upgrade the software protocols and Radio Access Network (RAN) to provide full support for 5G applications.</p>
                    <p className="mt-5">With all these upgrades and some formal changes, a network infrastructure for 5G networks is built. This involves upgrading the infrastructure, core network, and software technology. That&apos;s all about the 5G network upgrades.</p>
                </>
            ),
            date: "July 18, 2023",
            readTime: "2 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=600&h=400&fit=crop",
            featured: false,
            slug: "network-upgradation-for-a-new-generation-technology"
        },
        {
            id: 5,
            title: "Open Source Software and Community",
            excerpt: "Exploring the world of open source software, its licenses, impact, and how communities drive global innovation.",
            content: (
                <>
                    <p>&quot;Open Source,&quot; &quot;Linux,&quot; &quot;GitHub,&quot; and &quot;Contributors&quot; – these words have become buzzwords in the tech world nowadays. We are living in the modern era of software development, where the fundamental idea of the Internet—connecting the world—has been carried forward by open-source contributions and communities.</p>
                    <p className="mt-5">Did you know? Millions of developers collaborate daily to build software that powers the Internet, AI, cloud computing, and much more! Ever wondered how Android, Linux, and Python are all open-source projects? Amazing, right?</p>
                    <p className="mt-5">Let’s dive into the world of Open Source and discover how it’s shaping the global tech community.</p>
                    <h3 className="mt-5 font-semibold">What is Open Source Software (OSS)?</h3>
                    <p className="mt-5">Open-Source Software (OSS) is like a group project—everyone can see it, change it, and sometimes mess up your whole work! Just kidding. 😆</p>
                    <p className="mt-5">OSS means the source code is <strong>publicly available</strong> and can be modified by anyone. However, major changes usually require the <strong>author’s approval</strong>.</p>
                    <h3 className="mt-5 font-semibold">Common Open Source Licenses</h3>
                    <p className="mt-5">Open-source projects follow specific licenses that define their usage rights. Some of the most popular ones include:</p>
                    <ul className="list-disc list-inside mt-3">
                        <li>MIT License – Permissive and widely used</li>
                        <li>Apache License – Allows modifications with attribution</li>
                        <li>GNU GPL – Requires derivative works to remain open-source</li>
                        <li>BSD License – Flexible and business-friendly</li>
                    </ul>
                    <p className="mt-5">The maintainers or organisations host the projects on platforms like GitHub and GitLab, where developers collaborate, report issues, and discuss improvements through mailing lists, forums, and chat groups.</p>
                    <ul className="list-disc list-inside mt-3">
                        <li>This whole ecosystem creates transparency among organisations and users.</li>
                        <li>The competitive environment sets meritocracy, encouraging participation and attracting new contributors to challenge and win the game!</li>
                    </ul>
                    <h3 className="mt-5 font-semibold">Open Source Impact on Our Daily Lives</h3>
                    <p className="mt-5">Open Source has given rise to mega projects that impact our daily lives. Linux OS, VS Code, Git, TensorFlow, PyTorch, Go, JavaScript – all of these are built by the open-source community. Operating systems, Programming languages, Development tools, AI, and Data science, Open source has impacted the whole software industry giving the advantages of:</p>
                    <ul className="list-disc list-inside mt-3">
                        <li>Innovation</li>
                        <li>Security</li>
                        <li>Cost-effectiveness</li>
                    </ul>
                    <p className="mt-5">&quot;Open Source is like a treasure chest that never runs empty&quot;. It’s a free platform where individuals can showcase their skills, contribute to projects, and even win various community competitions like FOSS Overflow, C4GT and GSoC, ultimately gaining both merit and, yeah, money too! Who doesn’t need that? Maybe for building your ultimate PC setup. 😉</p>
                    <p className="mt-5">Open Source is the future of software development. It’s open to the world, bringing the ideas together from across the globe. Push your ideas too and start contributing today!</p>
                </>
            ),
            date: "Jan 20, 2025",
            readTime: "2 min read",
            category: "Development",
            image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop",
            featured: false,
            slug: "open-source-software-and-community"
        },
        {
            id: 6,
            title: "Robotics & Automation: Shaping Our Future",
            excerpt: "Exploring trends in robotics, AI, and automation from NVIDIA, Tesla, and CES 2025 highlights.",
            content: (
                <>
                    <p>"Robots," "Automation," "AI" – these terms are no longer confined to science fiction. We're in an era where machines not only assist us, but are becoming integral to our lives. Let us explore the latest trends in robotics and automation, highlight innovations from industry leaders and recent showcases like CES 2025.</p>

                    <h2 className="mt-5 font-semibold">Humanoid Robots</h2>
                    <p>Imagine a world where robots walk among us, performing tasks with human-like perfection. Sounds futuristic, right?</p>
                    <p>NVIDIA, renowned for its AI advancements, is accelerating humanoid robotics development. They have introduced the Isaac GR00T blueprint, a collection of robot foundation models, data pipelines, and simulation frameworks to encourage next-generation humanoid robot development. This initiative aims to supercharge the creation of general-purpose humanoid robots, making them more adaptable and efficient. [1]</p>
                    <p>Elon Musk's Tesla is not far behind. At CES 2025 [2], Musk announced plans to produce 500,000 humanoid robots within the next three years, envisioning a future with 20–30 billion robots worldwide. This vision underlines a potential era of unbounded economic growth and automation-driven human life, giving industry leaders the chance to grow more and pushing human skills to higher levels.</p>

                    <h2 className="mt-5 font-semibold">Innovations at CES 2025</h2>
                    <p>The Consumer Electronics Show (CES) 2025 was a playground for the latest in robotics and automation.</p>

                    <h3 className="mt-3 font-medium">NVIDIA's Cosmos AI</h3>
                    <p>NVIDIA unveiled Cosmos, a family of AI models designed to help humanoid robots and self-driving cars navigate the world. Trained on extensive human activity footage, Cosmos powers robots to better understand and interact with their environment, enhancing their functionality in real-world scenarios.</p>

                    <h3 className="mt-3 font-medium">Unitree Robotics</h3>
                    <p>Unitree Robotics became a key highlight of the show with their advanced humanoid robots. Their booth was a hotspot, attracting audiences to witness the future of robotics. These robots showcased impressive mobility and adaptability, aiming at a future where such machines become part of daily life. [3]</p>

                    <h2 className="mt-5 font-semibold">The Future</h2>
                    <p>Advancements in robotics and automation are not just about creating machines but also about redefining our interaction and adaptability with technology. As these innovations continue to evolve, they promise to bring unpredictable changes to industries and daily life. A key driver of this progress is the development of the semiconductor industry and the growth of GPUs enabling human–machine adaptation.</p>
                    <p>The era of robotics and automation is upon us. Whether you're a tech enthusiast or a casual observer, now is the time to engage, learn, and even contribute to this exciting field. Grab the skills, and adapt to the future — otherwise the machines will adapt your life!</p>

                    <h3 className="mt-5 font-medium">References</h3>
                    <ul className="list-disc ml-5">
                        <li>[1] NVIDIA Announces Isaac GR00T Blueprint to Accelerate Humanoid Robotics Development. NVIDIA Blog</li>
                        <li>[2] Elon Musk’s Vision: 30 Billion Robots and a New Economic Dawn. Wall Street Pit</li>
                        <li>[3] CES 2025 recap: Noteworthy robots at this year’s show. The Robot Report</li>
                    </ul>
                </>
            ),
            date: "Feb 9, 2025",
            readTime: "4 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
            featured: false,
            slug: "robotics-and-automation-shaping-our-future"
        },
        {
            id: 7,
            title: "The Solar Panel Business: A Bright Opportunity in India",
            excerpt: "Exploring India’s untapped solar potential, business opportunities, subsidies, and the future of clean energy.",
            content: (
                <>
                    <p>With the rising global demand for clean energy, India stands at the forefront of this transition, and solar power is leading the charge.</p>
                    <p>Elon Musk once famously said that just a small area of solar panels in Nevada could power the entire United States. In India, Shri Prime Minister Modi has emphasized how solar energy can generate passive income for families, making it an attractive investment. But how can the average Indian home or entrepreneur tap into this massive opportunity? Let&apos;s dive deep into it.</p>
                    <p>India is a solar powerhouse. Being a tropical country, it receives more sunlight than most nations, from the Northeast to the deserts of Rajasthan. Yet, only 1% of Indian urban homes have installed solar panels. India has around 10 crore independent urban homes, but only 10 lakh have adopted solar energy. That’s 99% untapped potential! [1]</p>
                    <p>In fact, installing solar in India is far more beneficial than in Germany, where one in every eight homes already uses it—despite receiving far less sunlight than India.</p>

                    <h2 className="mt-5 font-semibold">The Business Opportunity</h2>
                    <p>The world wants to reduce its dependence on China for solar panels, creating a big opportunity for Indian manufacturers to reduce the cost gap and dominate the market. The Indian government is actively subsidising rooftop solar, making it cheaper and encouraging homeowners to invest. Families can now get up to ₹78,000 in direct subsidies under the PM Surya Ghar Muft Bijli Yojana. [2]</p>
                    <ul className="list-disc ml-5 mt-3">
                        <li>Institutions and companies can break even within 3 to 5 years, after which they enjoy free electricity for over two decades.</li>
                        <li>A solar panel system covers its own cost in 3 to 5 years and after that, homeowners can enjoy 22+ years of free electricity! [1]</li>
                        <li>Solar Power is the cheapest source of energy. With new panel technologies, solar power now costs just ₹2 to ₹2.5 per unit, much cheaper than traditional electricity. [1]</li>
                    </ul>
                    <p className="mt-3">With EV adoption increasing, extreme heat waves, and a rising economy, India’s electricity demand is set to skyrocket. More homes will need ACs, EV chargers, and high-power appliances—making solar a necessity, not a luxury.</p>

                    <h2 className="mt-5 font-semibold">The Solar Grid: Decentralizing India’s Power Supply</h2>
                    <p>India&apos;s power grid was built over 50 years ago, at a time when electricity consumption was much lower. Over the decades, as India&apos;s population, industries, and technology have expanded, so has the demand for electricity. But the grid infrastructure hasn’t developed with the same speed.</p>
                    <p>When people install rooftop solar panels, they generate electricity right where it&apos;s needed, reducing dependence on centralised power plants. This leads to the concept of decentralised energy production, favoured by Net Metering.</p>
                    <p><strong>With Net Metering, homeowners don’t just consume electricity; they also generate and supply it back to the grid:</strong></p>
                    <ul className="list-disc ml-5 mt-3">
                        <li><strong>During the Day:</strong> Solar panels generate electricity. Some powers the home instantly, while extra energy is sent to the grid.</li>
                        <li><strong>At Night:</strong> Homes pull electricity back from the grid to power appliances.</li>
                        <li><strong>The Benefit:</strong> The electricity bill reflects only the "net" amount—the difference between what is supplied and what is consumed.</li>
                    </ul>
                    <p className="mt-3">This is how rooftop solar empowers Indian households—not just reducing bills but also earning money from excess generation.</p>

                    <h2 className="mt-5 font-semibold">The Future of Solar in India</h2>
                    <ul className="list-disc ml-5 mt-3">
                        <li>India aims to reach 2 lakh solar-powered homes per month, but it’s still at 50,000–60,000—meaning massive growth potential. [1]</li>
                        <li>The price of solar panels in India is around ₹22 per watt, but with innovation and increased production, it could drop to ₹12–13 per watt soon.</li>
                        <li>The investment community is extremely bullish on solar, seeing it as the future of energy.</li>
                    </ul>
                    <p className="mt-3">The solar revolution is happening right now. Whether you’re a homeowner looking for savings, or an entrepreneur seeking a new venture, solar energy is a great opportunity for building a business.</p>

                    <h3 className="mt-5 font-medium">References</h3>
                    <ul className="list-disc ml-5">
                        <li>[1] YouTube: <a href="https://youtu.be/gPO3mRmSzH0?si=1lafvcVnJv95VSvA" target="_blank">https://youtu.be/gPO3mRmSzH0?si=1lafvcVnJv95VSvA</a></li>
                        <li>[2] PM Surya Ghar Muft Bijli Yojana: <a href="https://www.pmsuryaghar.gov.in/" target="_blank">https://www.pmsuryaghar.gov.in/</a></li>
                        <li>[3] CES 2025: Solar Panel Advancements & Market Trends</li>
                    </ul>
                </>
            ),
            date: "Feb 21, 2025",
            readTime: "6 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop",
            featured: false,
            slug: "the-solar-panel-business-a-bright-opportunity-in-india"
        },
    ];

export default Blogs;
