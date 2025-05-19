"use client";

import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss,
  SiGit,
  SiNestjs,
  SiMysql,
  SiHtml5,
  SiJavascript,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
    { name: "Nest.js", icon: SiNestjs, color: "#EA285E" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Javascript", icon: SiJavascript, color: "#EFD81D" },
    { name: "HTML5", icon: SiHtml5, color: "#F05032" },
    { name: "MySQL", icon: SiMysql, color: "#08668E" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Git", icon: SiGit, color: "#F05032" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-20 bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Tecnologias{" "}
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estas são as principais tecnologias e ferramentas que utilizo para
            criar aplicações web modernas, escaláveis e de alta performance.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 md:gap-8 w-4/5 mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-dark/80 backdrop-blur-sm p-6 rounded-lg flex flex-col items-center justify-center border border-gray-800 hover:border-primary/50 transition-colors duration-300"
            >
              <skill.icon
                size={48}
                style={{ color: skill.color }}
                className="mb-3"
              />
              <h3 className="text-sm font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
