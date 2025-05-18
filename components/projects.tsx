"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("Todos")

  const projects = [
    {
      id: 1,
      title: "E-commerce Moderno",
      description: "Plataforma de e-commerce completa com pagamentos, carrinho e painel administrativo.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Next.js", "Node.js", "MongoDB"],
      category: "Full Stack",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Dashboard Analytics",
      description: "Dashboard interativo para visualização de dados e métricas de negócios.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "TypeScript", "Express"],
      category: "Frontend",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "API de Gestão",
      description: "API RESTful para sistema de gestão empresarial com autenticação JWT.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["Node.js", "Express", "PostgreSQL"],
      category: "Backend",
      demoLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "App de Finanças",
      description: "Aplicativo para controle financeiro pessoal com gráficos e relatórios.",
      image: "/placeholder.svg?height=400&width=600",
      tags: ["React", "Firebase", "Tailwind"],
      category: "Full Stack",
      demoLink: "#",
      githubLink: "#",
    },
  ]

  const filters = ["Todos", "Frontend", "Backend", "Full Stack"]

  const filteredProjects =
    activeFilter === "Todos" ? projects : projects.filter((project) => project.category === activeFilter)

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Projetos <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Confira alguns dos meus projetos mais recentes. Cada projeto representa um desafio único que me ajudou a
            aprimorar minhas habilidades.
          </p>
        </motion.div>

        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-md transition-colors duration-300 ${
                activeFilter === filter ? "bg-primary text-white" : "bg-dark/80 text-gray-300 hover:bg-primary/20"
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={item}
              className="bg-dark/80 backdrop-blur-sm rounded-lg overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{project.title}</h3>
                  <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">{project.category}</span>
                </div>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs bg-dark/90 text-gray-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <Github size={16} /> Código
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
