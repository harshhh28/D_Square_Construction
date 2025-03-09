"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";

const team = [
  {
    name: "Dharmendra Gajjar",
    role: "Founder & CEO",
    image:
      "https://scontent.famd1-2.fna.fbcdn.net/v/t39.30808-6/456621691_2493017790887813_8118878257787472249_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=suomaehja1gQ7kNvgEFR3Qz&_nc_oc=AdiL2LQBCTIj93WlLX2dibOhdNkag5pBwt3qqp-KxxWeTLz7Sb_laxtfOC7JxI-dWg-s5W72qWgy5GVsJeLzmw_O&_nc_zt=23&_nc_ht=scontent.famd1-2.fna&_nc_gid=AS7KUMp-y_UHivlbKRRgai8&oh=00_AYHVh8X9swUJVsNsdsooNVqDMauvhA8xK-3AR70rbQ-pXQ&oe=67D37EB8",
    bio: "With over 30 years of experience in construction, David founded DSquare Construction with a vision to deliver excellence in every project.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "david@dsquareconstruction.com",
    },
  },
  {
    name: "Diana Square",
    role: "Chief Operations Officer",
    image: "/team/placeholder.svg",
    bio: "Diana oversees all operations, ensuring projects are delivered on time, within budget, and to the highest standards of quality.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "diana@dsquareconstruction.com",
    },
  },
  {
    name: "Michael Johnson",
    role: "Lead Architect",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Michael brings creative vision and technical expertise to every project, transforming concepts into stunning architectural realities.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "michael@dsquareconstruction.com",
    },
  },
  {
    name: "Sarah Williams",
    role: "Project Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Sarah's attention to detail and organizational skills ensure smooth project execution from start to finish.",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@dsquareconstruction.com",
    },
  },
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-muted-foreground text-lg">
            Our experienced team of professionals is dedicated to bringing your
            construction vision to life.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {team.map((member, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-card rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    <a
                      href={member.social.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}>
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.social.twitter}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Twitter`}>
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.social.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Email ${member.name}`}>
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
