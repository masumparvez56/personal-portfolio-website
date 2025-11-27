import React, { useRef } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const subject = form.subject.value.trim();
        const message = form.message.value.trim();

        if (!name || !email || !subject || !message) {
            toast.error("All fields are required! Please complete the form before submitting.", {
                position: "top-center",
                autoClose: 3000,
                theme: "colored",
            });
            return;
        }

        emailjs
            .sendForm(
                "service_nlhqptj",     
                "template_lp5qmo9",
                formRef.current,
                "b1KX6oXoM-tXWV8an"      
            )
            .then(() => {
                toast.success("Message Sent! Your message was sent successfully.", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                });
                form.reset();
            })
            .catch((error) => {
                toast.error("Something went wrong! Unable to send message at the moment.", {
                    position: "top-right",
                    autoClose: 3000,
                    theme: "colored",
                });
                console.error(error);
            });
    };

    return (
        <section id="contact" className=" text-gray-300 pt-20 pb-16 md:py-20 px-4 md:px-8">
            <ToastContainer />
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-4xl font-bold text-white">
                        Get In <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Touch</span>
                    </h2>
                    <div className="h-1 w-40 md:w-56 mx-auto bg-linear-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mt-2 mb-5"></div>
                    <p className="text-gray-300 md:text-lg max-w-xl mx-auto">
                        Feel free to reach out for collaborations or just a friendly hello
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Left Contact Info */}
                    <div data-aos="fade-up" className="space-y-6 md:mt-12">
                        <h3 className="text-2xl md:text-4xl font-semibold">Contact Information</h3>
                        <p className="text-gray-400 max-w-lg">
                            I'm open for new opportunities and collaborations. If you're hiring or have a project in mind, feel free to reach out.
                        </p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <FaEnvelope className="text-purple-400 text-xl animate-pulse" />
                                <div>
                                    <h4 className="font-semibold text-white">Email</h4>
                                    <p>parvezmasum581@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaPhoneAlt className="text-purple-400 text-xl animate-pulse" />
                                <div>
                                    <h4 className="font-semibold text-white">Phone</h4>
                                    <p>+8801799131169</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <FaMapMarkerAlt className="text-purple-400 text-xl animate-pulse" />
                                <div>
                                    <h4 className="font-semibold text-white">Location</h4>
                                    <p>Kaligonj, Gazipur, Dhaka</p>
                                </div>
                            </div>
                        </div>

                      
                    </div>

                    {/* Right Contact Form */}
                    <form data-aos="fade-up" ref={formRef}
                        onSubmit={handleSubmit} className="bg-[#0d081f]/70 p-6 rounded-xl shadow-md space-y-6">
                        <h3 className="text-xl font-semibold mb-3 text-white">Connect With Me : </h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className="w-full px-4 py-2 rounded-md bg-[#131025]/40 border border-gray-600 focus:border-cyan-400 focus:outline-none transition"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-2 rounded-md bg-[#141e36]/40 border border-gray-600 focus:border-purple-400 focus:outline-none transition"
                            />
                        </div>
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            className="w-full px-4 py-2 rounded-md bg-[#141e36]/40 border border-gray-600 focus:border-purple-400 focus:outline-none transition"
                        />
                        <textarea
                            name="message"
                            placeholder="Your Message"
                            rows="5"
                            className="w-full px-4 py-0.5 rounded-md bg-[#141e36]/40 border border-gray-600 focus:border-cyan-400 focus:outline-none transition"
                        ></textarea>
                        <button
                            type="submit"
                            className="w-full py-3 flex items-center justify-center gap-2 rounded-md bg-linear-to-r from-purple-600 to-pink-400 text-white font-medium cursor-pointer hover:opacity-80 transition"
                        >
                            Send Message <FaPaperPlane className="text-sm" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
