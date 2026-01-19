import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Code() {
  return (
    <div className="py-10 text-slate-700">
      <div className="md:max-w-350 mx-auto">
        <h1 className="text-center text-3xl font-semibold text-slate-700 mb-1">My Experience as a Developer</h1>

        <p className="text-slate-600 mb-10 mt-2">I am a passionate builder and problem solver. My journey started with game development and evolved into building tools for the scientific community, educational platforms, and participating in high-level algorithmic challenges.</p>

        {/* --- 2025 --- */}
        <h2 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-slate-200">2025</h2>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">ALMO 2025 Website</h2>
            Official website for the second edition of the Algerian Math Olympiad.
            <p className="text-sm text-slate-500 mt-1">Technologies: HTML, CSS</p>
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://github.com/SpeedCode210/ALMO2025_Website"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">NAOI 2025 Website</h2>
            A modern web presence for the North African Olympiad in Informatics 2025.
            <p className="text-sm text-slate-500 mt-1">Technologies: React</p>
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://github.com/SpeedCode210/naoi2025-website"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">AOI Resources Website</h2>
            A comprehensive resource hub for Algerian high schoolers interested in Competitive Programming.
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://github.com/algerianoi/Resources-Website"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">A2SV Remote Education</h2>
            Participated in an intensive training program focused on Data Structures, Algorithms, and Software Engineering. Solved 300+ LeetCode/Codeforces problems and built a full-stack project.
          </div>
        </div>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">Mini-CNC Drawing Machine</h2>
            Developed a functional mini-CNC machine as part of <strong>GDG-ENSIA</strong> club. The project involved 3D printing components, assembling mechanical axes, and programming firmware to translate digital coordinates into physical motion.
            <p className="text-sm text-slate-500 mt-1">Technologies: Arduino, G-Code, 3D Printing, Robotics</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-slate-200">2024</h2>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">Cebuella</h2>
            A specialized web platform designed for managing and tracking the progress of Olympiad students.
            <p className="text-sm text-slate-500 mt-1">Technologies: ASP.NET, C#</p>
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://github.com/SpeedCode210/Cebuella"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-slate-200">2023</h2>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">Revision Planner</h2>
            Mobile application utilizing spaced repetition and the forgetting curve to optimize lesson revision schedules.
            <p className="text-sm text-slate-500 mt-1">Technologies: C# MAUI</p>
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://github.com/SpeedCode210/RevisionPlanner"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-slate-200">2022</h2>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">Astrare</h2>
            A desktop tool to help amateur astronomers prepare for stargazing nights.
            <p className="text-sm text-slate-500 mt-1">Technologies: C#, AvaloniaUI</p>
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://github.com/SpeedCode210/Astrare"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">LSAM</h2>
            CLI tool designed to automate the creation of systemd services for Linux applications. I made this tool to help me manage applications on a LXC server which wasn't compatible with Docker.
            <p className="text-sm text-slate-500 mt-1">Technologies: C++</p>
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://github.com/SpeedCode210/lsam"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">BejaiaCovid</h2>
            Automation tool and chatbot for reporting real-time COVID-19 statistics in the Bejaia region.
            <p className="text-sm text-slate-500 mt-1">Technologies: C#</p>
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://github.com/SpeedCode210/BejaiaCovid"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-slate-200">2021</h2>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">STNMI (Score Transcriber for Non-Midi Instruments)</h2>
            Software that processes audio input in real time to generate music sheets.
            <p className="text-sm text-slate-500 mt-1">Technologies: C#, WPF</p>
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://github.com/SpeedCode210/STNMI"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">SmartInstaller</h2>
            A customizable software installer built for Windows applications.
            <p className="text-sm text-slate-500 mt-1">Technologies: C#, WPF</p>
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://github.com/SpeedCode210/SmartInstaller">
            <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
          </a>
        </div>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">TetraSwap</h2>
            An original puzzle game.
            <p className="text-sm text-slate-500 mt-1">Technologies: C#, Unity</p>
          </div>
          <div className="flex flex-col gap-2">
            <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl w-max flex items-center border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://eclipium.github.io/en/tetraswap/"><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon></a>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4 border-b-2 border-slate-200">2020</h2>

        <div className="border-slate-700 border-4 rounded-2xl p-4 my-2 flex justify-between">
          <div>
            <h2 className="text-xl font-semibold">Hieroctive</h2>
            Educational memory game designed to help users learn hieroglyphics.
            <p className="text-sm text-slate-500 mt-1">Technologies: C#, Unity</p>
          </div>
          <a target='_blank' className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl mt-2 w-max flex items-center my-auto border-teal-600 hover:bg-teal-600 hover:text-slate-100 duration-200 transition-colors" href="https://eclipium.github.io/en/hieroctive/"><FontAwesomeIcon icon={faGlobe}></FontAwesomeIcon></a>
        </div>
      </div>
    </div>
  );
}