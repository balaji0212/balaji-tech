
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About Me", href: "#about" },
    { name: "Journey", href: "#journey" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Interests", href: "#interests" },
    { name: "Languages", href: "#languages" },
    { name: "Certifications", href: "#certifications" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-white">
            Balaji <span className="text-teal-400">S</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1 overflow-x-auto">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-gray-300 hover:text-teal-400 hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-all duration-200 whitespace-nowrap text-sm font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* Hire Me Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleNavClick("#contact")}
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-200 font-medium shadow-lg hover:shadow-teal-500/25"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-slate-700/50">
            <div className="flex flex-col space-y-2 max-h-80 overflow-y-auto">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-300 hover:text-teal-400 hover:bg-slate-800/50 px-3 py-2 rounded-lg transition-all duration-200 text-left font-medium"
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => handleNavClick("#contact")}
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg transition-all duration-200 text-center font-medium mt-4"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
