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
    }
  ];

export default Blogs;