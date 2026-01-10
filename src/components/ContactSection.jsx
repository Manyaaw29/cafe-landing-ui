import React from "react";
import { CONTACT } from "../constants";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactSection = () => {
  const icons = {
    address: <MapPin className="w-6 h-6 stroke-[1.25]" />,
    phone: <Phone className="w-6 h-6 stroke-[1.25]" />,
    email: <Mail className="w-6 h-6 stroke-[1.25]" />,
    hours: <Clock className="w-6 h-6 stroke-[1.25]" />,
  };

  return (
    <section id="contact" className="container mx-auto px-4 py-24">
      <h2 className="heading-font mb-8 text-center text-5xl tracking-tighter lg:text-6xl">
        Visit Us
      </h2>

      <p className="text-center text-neutral-400 mb-12 text-lg">
        We'd love to see you—a quiet cup and your corner, ready when you are.
      </p>

      <div className="max-w-3xl mx-auto">
        {CONTACT.map((detail) => (
          <div
            key={detail.key}
            className="group flex flex-col md:flex-row items-center justify-center gap-4 py-8 border-b border-neutral-800 last:border-0"
          >
            <div className="text-neutral-500 transition-colors duration-300 group-hover:text-neutral-300">
              {icons[detail.key]}
            </div>

            <p className="text-center md:text-left text-xl lg:text-2xl text-neutral-300 tracking-tight">
              {detail.value}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
