
import { useState } from "react";
import { Phone, Mail, MapPin, Send, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 93453 55312",
      href: "tel:+919345355312",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Mail,
      label: "Email",
      value: "balaji022212@gmail.com",
      href: "mailto:balaji022212@gmail.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: ExternalLink,
      label: "LinkedIn",
      value: "balaji021203",
      href: "https://linkedin.com/in/balaji021203",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Coimbatore, Tamil Nadu, India",
      href: "#",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <section id="contact" className="py-20 px-4 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-float delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm mb-6">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            Let's Connect
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="bg-gradient-to-r from-teal-400 to-green-400 bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-gray-400">
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm">📞</span>
                </div>
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.label === "LinkedIn" ? "_blank" : undefined}
                    rel={contact.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 hover:scale-[1.02]"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-r ${contact.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg`}>
                      <contact.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm font-medium">{contact.label}</p>
                      <p className="text-white font-medium group-hover:text-teal-400 transition-colors duration-200">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-800/30 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Send className="w-4 h-4 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white">Send a Message</h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500/20 h-12 rounded-xl backdrop-blur-sm"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500/20 h-12 rounded-xl backdrop-blur-sm"
                />
              </div>
              
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-700/50 border-slate-600/50 text-white placeholder-gray-400 focus:border-teal-500 focus:ring-teal-500/20 resize-none rounded-xl backdrop-blur-sm"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white py-4 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/25 font-semibold text-lg"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700/50">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 mb-2">
                © 2024 Balaji S. All rights reserved.
              </p>
              <p className="text-sm text-gray-500">
                Built with passion for innovation and excellence
              </p>
            </div>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg font-semibold"
              >
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="border-2 border-teal-400/50 text-teal-400 hover:bg-teal-400/10 hover:border-teal-400 px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm font-semibold"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
