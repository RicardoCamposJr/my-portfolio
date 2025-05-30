import Link from "next/link";
import { Github, Linkedin, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/RicardoCamposJr",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ricardocamposdeoliveirajr",
      label: "LinkedIn",
    },
  ];

  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center w-4/5 mx-auto">
          <div className="mb-4 md:mb-0 flex flex-col items-center justify-center text-center md:items-start md:justify-start md:text-left">
            <Link href="/#home" className="text-xl font-bold text-primary">
              Dev<span className="text-white">Portfolio</span>
            </Link>
            <p className="text-gray-400 text-sm mt-2">
              &copy; {currentYear} Todos os direitos reservados.
            </p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
