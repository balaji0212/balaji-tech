
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "My Journey", href: "#journey" },
    { name: "Technical Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Featured Projects", href: "#projects" },
    { name: "Key Interests", href: "#interests" },
    { name: "Languages", href: "#languages" },
    { name: "Certifications", href: "#certifications" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-sm z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            Balaji <span className="text-teal-400">S</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-6 overflow-x-auto">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-teal-400 transition-colors duration-200 whitespace-nowrap text-sm"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4">
            <div className="flex flex-col space-y-4 max-h-80 overflow-y-auto">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
