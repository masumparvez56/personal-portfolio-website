import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../assets/profile.png';
import { motion } from "framer-motion";
import { LuSparkles } from 'react-icons/lu';

const Home = () => {
    return (
        <section
            id="hero"
            className="min-h-screen text-white pt-4 md:pt-24 px-4 md:px-8"
        >
            <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center">

                {/* ==== LEFT SIDE ==== */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    className="space-y-7 max-w-2xl">

                    <span className="inline-flex items-center gap-2 rounded-full border border-purple-800 px-5 py-1 bg-[#13203f] text-base md:text-lg font-medium">
                        <LuSparkles /> Welcome to my portfolio!
                    </span>

                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 leading-tight">
                        Hi, I'm{" "}
                        {/* <span className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight text-slate-400">Md. Masum Parvez</span> */}
                    </h1>

                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight text-slate-400">
                        Md. Masum Parvez
                    </h2>

                    <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2 text-[#8245ec] leading-tight">
                        <span className="text-white">I am a </span>
                        <ReactTypingEffect
                            className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400"
                            text={[
                                'Fullstack Developer',
                                'Frontend Developer',
                                'Backend Developer',
                            ]}
                            speed={100}
                            eraseSpeed={50}
                            typingDelay={500}
                            eraseDelay={2000}
                            cursorRenderer={(cursor) => (
                                <span className="text-[#8245ec]">{cursor}</span>
                            )}
                        />
                    </h3>

                    <p className="text-base md:text-lg text-gray-400 mb-6 mt-6 leading-relaxed">
                        Passionate about building real-world projects that solve real problems.
                        With <br /> a strong focus on JavaScript and UI/UX, I bring your ideas to life
                        through <br /> clean code and thoughtful design.
                    </p>

                    <a
                        href="https://drive.google.com/file/d/1vtNM_XEzCKBQdDcH_pNLcTx2TgpUg9ig/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-white py-3 px-7 rounded-full mt-2 text-lg font-bold transition duration-300 transform hover:scale-105"
                        style={{
                            background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                            boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
                        }}
                    >
                        DOWNLOAD CV
                    </a>
                </motion.div>

                {/* ==== RIGHT SIDE (Image Section) ==== */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="relative flex items-center justify-center w-64 h-64 md:w-[420px] md:h-[420px] md:mt-12 mb-5"
                >
                    {/* Glowing Background */}
                    <motion.div
                        animate={{
                            scale: [1, 1.05, 1],
                            opacity: [0.25, 0.5, 0.25],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                        }}
                        className="absolute w-full h-full rounded-full 
            bg-linear-to-br from-purple-500 via-indigo-600 to-purple-500 blur-2xl"
                    />

                    {/* Outer Border Circle */}
                    <div className="absolute w-full h-full rounded-full 
          border-8 border-transparent 
          bg-linear-to-tr from-purple-700 to-indigo-700 p-1" />

                    {/* Profile Image */}
                    <img
                        src={profileImage}
                        alt="Profile"
                        className="relative z-10 w-full h-full object-cover 
            rounded-full border-4 border-[#1e293b] shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Home;