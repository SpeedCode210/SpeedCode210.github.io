import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faFlask, faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="w-full py-10">
      <div className="mx-auto w-fit text-center md:text-left md:flex items-center lg:max-w-300 mb-12">
        <img
          className="w-60 rounded-full border-6 border-teal-700 ml-auto mr-auto md:mr-4"
          src="/raouf.jpg"
          alt="Raouf Ould Ali"
        />
        <div>
          <h1 className="text-4xl font-semibold text-slate-700">Raouf Ould Ali</h1>
          <p className="text-lg text-teal-700">Artificial Intelligence Student @ ENSIA</p>
          <p className="text-slate-800 mt-2">
            Hey there! I'm Raouf. I am passionate about software development, mathematics, and the evolving world of AI.
            Currently, I'm exploring the intersection of <strong>Quantum Computing</strong> and <strong>Machine Learning</strong>,
            with a strong interest in the theoretical foundations that will shape future technology.
            <br /><br />
            Outside of coding and studying, I enjoy coaching students for Science Olympiads, exploring geometry and astronomy, and capturing moments of the world through my camera lens.            <br /><br />
            The <img className="h-3 inline" src="/speedcode.png" alt="SpeedCode Logo" /> logo comes from my nickname, <strong>SpeedCode</strong>.
            (I also use it to sign math proofs, right next to Q.E.D)
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 md:max-w-350 mx-auto px-4">
        {/* Interests Section */}
        <div className="border-4 border-slate-600 rounded-2xl p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-700 mb-4 flex items-center">
            <FontAwesomeIcon icon={faFlask} className="mr-3 text-teal-600" /> Areas of Interest
          </h2>
          <ul className="list-disc list-inside text-slate-700 space-y-2">
            <li><strong>Mathematics:</strong> Pure mathematics and high-level theoretical problem-solving.</li>
            <li><strong>AI & Machine Learning:</strong> Majoring in AI with a focus on algorithmic efficiency.</li>
            <li><strong>Quantum Computing:</strong> Exploring QML and Optimization algorithms.</li>
            <li><strong>Competitive Programming:</strong> Mastering complex data structures and logic.</li>
          </ul>
        </div>

        {/* Languages Section */}
        <div className="border-4 border-slate-600 rounded-2xl p-6 bg-white shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-700 mb-6 flex items-center">
            <FontAwesomeIcon icon={faLanguage} className="mr-3 text-teal-600" /> Languages
          </h2>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            {["French", "English", "Arabic", "Kabyle"].map((lang) => (
              <span
                key={lang}
                className="px-5 py-2 bg-slate-100 border-2 border-slate-600 text-slate-700 font-bold rounded-full hover:bg-teal-600 hover:text-white hover:border-teal-600 transition-all duration-300 cursor-default"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-center text-3xl font-semibold text-slate-700">Technologies I've worked with</h2>
        <div className="flex flex-wrap lg:max-w-3/4 mx-auto items-center justify-center m-4 text-teal-600 gap-4">
          {["python", "cplusplus", "csharp", "typescript", "azuresqldatabase", "latex", "react", "tailwindcss", "nextjs", "unity", "git", "docker", "linux"].map((tech) => (
            <div key={tech} title={tech.toUpperCase()} className="text-6xl hover:scale-110 transition-transform duration-200">
              <i className={`devicon-${tech}-plain`}></i>
            </div>
          ))}
        </div>
      </div>

      <h2 className="text-center text-3xl font-semibold text-slate-700 mt-16">Get in touch</h2>
      <div className="text-center mt-6 text-slate-700 text-lg space-y-2">
        <p><FontAwesomeIcon icon={faEnvelope} className="mr-2" /> <a className="hover:text-teal-600 transition-colors" href="mailto:raouf.ouldali.aoi@gmail.com">raouf.ouldali.aoi@gmail.com</a></p>
        <p><FontAwesomeIcon icon={faLinkedin} className="mr-2" /> <a className="hover:text-teal-600 transition-colors" href="https://www.linkedin.com/in/raoufouldali/" target="_blank" rel="noreferrer">linkedin.com/in/raoufouldali</a></p>
        <p><FontAwesomeIcon icon={faChartSimple} className="mr-2" /> <a className="hover:text-teal-600 transition-colors" href="https://codeforces.com/profile/speedcode/" target="_blank" rel="noreferrer">codeforces.com/profile/speedcode</a></p>
        <p><FontAwesomeIcon icon={faGithub} className="mr-2" /> <a className="hover:text-teal-600 transition-colors" href="https://github.com/SpeedCode210" target="_blank" rel="noreferrer">github.com/SpeedCode210</a></p>
      </div>
    </div>
  );
}