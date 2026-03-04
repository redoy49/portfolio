import React, { useRef, useState } from "react";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        form.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS error:", error.text);
        toast.error("Something went wrong. Try again.");
      })
      .finally(() => setLoading(false));
  };

  return (
    <section
      id="contact"
      className="w-full py-24 bg-gradient-to-b from-gray-50 to-white"
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="bg-white shadow-xl shadow-gray-100 border border-gray-100 rounded-2xl p-8 transition duration-300 hover:-translate-y-1 space-y-6 text-center">
            <p className="text-gray-600 text-lg">
              Feel free to reach out. I’m open to freelance, collaboration, or
              full-time opportunities.
            </p>

            <div className="flex items-center justify-center gap-3">
              <MdEmail className="text-[#7081C8]" size={22} />
              <a
                href="mailto:mdredoyhasan49@gmail.com"
                className="hover:text-[#7081C8] transition"
              >
                mdredoyhasan49@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaPhoneAlt className="text-[#7081C8]" size={20} />
              <a
                href="tel:+8801795580257"
                className="hover:text-[#7081C8] transition"
              >
                +880 1795 580257
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaWhatsapp className="text-[#7081C8]" size={22} />
              <a
                href="https://wa.me/8801795580257"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#7081C8] transition"
              >
                WhatsApp Me
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="bg-white shadow-xl shadow-gray-100 border border-gray-100 rounded-2xl p-8 transition duration-300 hover:-translate-y-1 space-y-6"
          >
            <h3 className="text-2xl font-semibold">
              Send Me a Message
            </h3>

            <div>
              <label className="block mb-2 font-medium">
                Your Name
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7081C8] focus:border-[#7081C8] transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Your Email
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7081C8] focus:border-[#7081C8] transition"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Your Message
              </label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#7081C8] focus:border-[#7081C8] transition"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full flex justify-center items-center gap-3 px-6 py-3 rounded-full text-white font-medium transition 
              ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-[#7081C8] hover:bg-[#5a6bb5] hover:scale-[1.02]"
              }`}
            >
              <MdEmail size={20} />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;