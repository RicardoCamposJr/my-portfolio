"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          time: new Date().toLocaleString(),
        },
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string
      );

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast("Ocorreu um erro ao enviar sua mensagem.", { type: "error" });
      console.error("Erro ao enviar email:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitSuccess(false), 3000);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "rickoliver001@hotmail.com",
      link: "mailto:rickoliver001@hotmail.com",
    },
    {
      icon: Phone,
      title: "Telefone",
      content: "+55 (75) 98182-6826",
      link: "tel:+5575981826826",
    },
  ];

  // Detecta se é mobile (abaixo de 768px)
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);
    checkMobile(); // roda na montagem
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="contact" className="py-20 bg-dark/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-primary">&lt;</span> Contato{" "}
            <span className="text-primary">/&gt;</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Tem um projeto em mente? Vamos conversar! Preencha o formulário
            abaixo ou entre em contato através de um dos canais disponíveis.
          </p>
        </motion.div>

        <div
          className={
            isMobile
              ? "gap-8 md:gap-12 w-4/5 mx-auto flex-col justify-center"
              : "grid md:grid-cols-3 gap-8 md:gap-12 w-4/5 mx-auto"
          }
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-1 space-y-8 mb-8"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 p-4 bg-dark/80 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-primary/50 transition-colors duration-300"
              >
                <div className="bg-primary/20 p-3 rounded-full">
                  <info.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{info.title}</h3>
                  <p className="text-gray-300 text-sm">{info.content}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <form
              onSubmit={handleSubmit}
              className="bg-dark/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark/90 border border-gray-700 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-dark/90 border border-gray-700 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-dark/90 border border-gray-700 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full bg-dark/90 border border-gray-700 rounded-md px-4 py-2 text-black focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent resize-none"
                ></textarea>
              </div>
              <div className="flex justify-end">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-md transition-colors duration-300 inline-flex items-center gap-2 ${
                    isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  {isSubmitting ? (
                    "Enviando..."
                  ) : (
                    <>
                      Enviar Mensagem <Send size={16} />
                    </>
                  )}
                </motion.button>
              </div>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 bg-green-500/20 border border-green-500/50 rounded-md text-green-400 text-sm"
                >
                  Mensagem enviada com sucesso! Entrarei em contato em breve.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
