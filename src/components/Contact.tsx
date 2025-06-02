
import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
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
    // Here you would typically send the form data to a backend
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

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-teal-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-400">
            Let's discuss your next project and bring your ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a
                  href="tel:+919345355312"
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                    <Phone className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+91 93453 55312</p>
                  </div>
                </a>

                <a
                  href="mailto:balaji022212@gmail.com"
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                    <Mail className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">balaji022212@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/balaji021203"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-teal-500/50 transition-colors group"
                >
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center group-hover:bg-teal-500/30 transition-colors">
                    <span className="text-teal-400 font-bold">in</span>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">LinkedIn</p>
                    <p className="text-white font-medium">balaji021203</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                  <div className="w-12 h-12 bg-teal-500/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Coimbatore, Tamil Nadu, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-teal-500"
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
                  className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-teal-500"
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
                  className="bg-slate-800/50 border-slate-700 text-white placeholder-gray-400 focus:border-teal-500 resize-none"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-lg transition-colors duration-200"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-700 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">
              © 2024 Balaji S. All rights reserved.
            </p>
            <div className="flex gap-4">
              <a
                href="#contact"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                Hire Me
              </a>
              <a
                href="/resume.pdf"
                download
                className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-6 py-2 rounded-lg transition-colors duration-200"
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
