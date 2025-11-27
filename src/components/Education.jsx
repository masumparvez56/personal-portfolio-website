import React from 'react';
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";


const Education = () => {
    return (
        <section
             id="education"
             className="pt-20 pb-10 md:py-20 px-4 md:px-8 bg-skills-gradient clip-path-custom"
           >
             {/* Section Title */}
           <div className="max-w-5xl mb-16 md:mb-20 mx-auto">
                 <h2 className="text-2xl md:text-4xl font-bold mb-2 text-center text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">Education</h2>
                 <div className="h-1 w-32 md:w-48 mx-auto bg-linear-to-r from-purple-400 to-cyan-400 rounded-full animate-pulse mb-4"></div>
                 <p className="text-gray-300 md:text-lg text-center mb-6 md:mb-12">
                   My academic journey and educational background
                 </p>
         
                 <div className="space-y-8">
         
                   {/* BSC */}
                   <div data-aos="fade-up" className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl p-6 shadow-md border border-[#334155] flex flex-col md:flex-row justify-between gap-6 transition-transform duration-300 hover:shadow-indigo-800 hover:border-indigo-800">
                     <div>
                       <h3 className="text-xl md:text-2xl text-white font-semibold mb-1">Bachelor of Science in Computer Science & Engineering</h3>
                       <p className="text-blue-400 mb-4 md:text-lg font-semibold">Eastern University</p>
                       <div className="flex gap-4">
                         <div className="w-1 bg-linear-to-b from-purple-600 to-indigo-800 rounded-full"></div>
                         <div>
                           <p className="font-semibold mb-2 text-white md:text-lg">Key Highlights:</p>
                           <ul className="space-y-2 text-gray-300">
                             <li className="flex items-start gap-2">
                               <span className="w-2 h-2 mt-2 rounded-full bg-linear-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                               Major in Software Engineering
                             </li>
                             <li className="flex items-start gap-2">
                               <span className="w-2 h-2 mt-2 rounded-full bg-linear-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                               Focused on building scalable web applications 
                             </li>
                             <li className="flex items-start gap-2">
                               <span className="w-2 h-2 mt-2 rounded-full bg-linear-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                               Gaining hands-on experience with the MERN stack
                             </li>
                           </ul>
                         </div>
                       </div>
                     </div>
                     <div className="flex flex-col items-start md:items-end space-y-2 text-gray-400">
                       <div className="flex items-center gap-2">
                         <FaCalendarAlt className="text-purple-500" /> 2019 - 2024
                       </div>
                       <div className="flex items-center gap-2">
                         <FaMapMarkerAlt className="text-cyan-500" />Road 6, Block B, Ashulia Model Town Khagan, Birulia, Savar, Dhaka
                       </div>
                     </div>
                   </div>
         
                   {/* HSC */}
                   <div data-aos="fade-up" className="bg-[#1e293b]/50 backdrop-blur-md rounded-2xl p-6 shadow-md border border-[#334155] flex flex-col md:flex-row justify-between gap-6 transition-transform duration-300 hover:shadow-indigo-800 hover:border-indigo-800">
                     <div>
                       <h3 className="text-xl md:text-2xl text-white font-semibold mb-1">Higher Secondary Certificate (HSC)</h3>
                       <p className="text-blue-400 mb-4 md:text-lg font-semibold">Pubail Adarsha University College</p>
                       <div className="flex gap-4">
                         <div className="w-1 bg-linear-to-b from-purple-600 to-indigo-800 rounded-full"></div>
                         <div>
                           <p className="font-semibold text-white mb-2 md:text-lg">Key Highlights:</p>
                           <ul className="space-y-2 text-gray-300">
                             <li className="flex items-start gap-2">
                               <span className="w-2 h-2 mt-2 rounded-full bg-linear-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                               Overcame obstacles to achieve academic milestones
                             </li>
                             <li className="flex items-start gap-2">
                               <span className="w-2 h-2 mt-2 rounded-full bg-linear-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                               Completed studies despite facing academic challenges
                             </li>
                             <li className="flex items-start gap-2">
                               <span className="w-2 h-2 mt-2 rounded-full bg-linear-to-r from-purple-400 to-indigo-400 animate-pulse"></span>
                               Took part in several science competitions to improve skills and knowledge
                             </li>
                           </ul>
                         </div>
                       </div>
                     </div>
                     <div className="flex flex-col items-start md:items-end space-y-2 text-gray-400">
                       <div className="flex items-center gap-2">
                         <FaCalendarAlt className="text-purple-500" /> 2016 - 2019
                       </div>
                       <div className="flex items-center gap-2">
                         <FaMapMarkerAlt className="text-cyan-500" />Pubail, Gazipur, Bangladesh
                       </div>
                     </div>
                   </div>
         
                 </div>
               </div>
           </section>
    );
};

export default Education;