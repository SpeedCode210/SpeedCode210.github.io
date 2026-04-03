export default function Teaching() {
  return (
    <div className="py-10 text-slate-700">
      <div className="md:max-w-350 mx-auto">
        <h1 className="text-center text-3xl font-semibold text-slate-700 mb-1">Coaching & Leadership</h1>
        <p className="text-slate-600 text-center mb-10 mt-2">
          Transitioning from a competitor to a mentor, I now dedicate my free time to building the next generation of Algerian and African talent in Science Olympiads. Through these roles, I have helped train and mentor dozens of students nationwide and across Africa for high-level international competitions.
        </p>

        {/* --- Algerian Olympiad in Informatics --- */}
        <div className="border-4 border-slate-600 rounded-2xl p-4 md:max-w-350 mx-auto mb-5">
          <a href="https://algerianoi.com" target="_blank" className="text-slate-700 font-semibold text-xl hover:text-teal-700 transition-colors">
            The Algerian Olympiad in Informatics (AOI)
            <span className="text-sm ml-4 font-normal text-slate-500 italic">2024 - Present</span>
          </a>
          <p className="text-slate-700 indent-3 mt-2">
            I am a founding member and currently serve as the <strong>Head Coach</strong>. My role involves designing the training curriculum, delivering advanced lectures on algorithms and data structures, and managing student progress. I am proud to have served as the <strong>Team Leader</strong> for the Algerian national team at both the <strong>IOI 2025</strong> and the <strong>PAIO 2025</strong>.
          </p>
          <p className="text-slate-700 indent-3 mt-2">
            I also contribute to the <strong>Algerian Olympiad in AI (AOAI)</strong> as part of the coaching team, helping students bridge the gap between competitive programming and artificial intelligence.
          </p>
        </div>

        {/* --- Algerian Mathematical Olympiad --- */}
        <div className="border-4 border-slate-600 rounded-2xl p-4 md:max-w-350 mx-auto mb-5">
          <a href="https://algerianmo.com" target="_blank" className="text-slate-700 font-semibold text-xl hover:text-teal-700 transition-colors">
            The Algerian Mathematical Olympiad (AMO)
            <span className="text-sm ml-4 font-normal text-slate-500 italic">2024 - Present</span>
          </a>
          <p className="text-slate-700 indent-3 mt-2">
            Having started my journey here, I now contribute as a lecturer and organizer. I was a key organizer for the <strong>ALMO Finals 2025</strong> and currently lead technical operations. I also represented Algeria as the <strong>Deputy Leader</strong> of the junior team at the <strong>OFM 2025</strong> and the <strong>Team Leader</strong> of the senior team at <strong>OFM 2026</strong>.
          </p>
        </div>

        {/* --- African Olympiad Academy --- */}
        <div className="border-4 border-slate-600 rounded-2xl p-4 md:max-w-350 mx-auto mb-5">
          <a href="https://www.aoa.school/" target="_blank" className="text-slate-700 font-semibold text-xl hover:text-teal-700 transition-colors">
            African Olympiad Academy (AOA)
            <span className="text-sm ml-4 font-normal text-slate-500 italic">2025 - Present</span>
          </a>
          <p className="text-slate-700 indent-3 mt-2">
            I am part of the coaching team for the <strong>"Rising Stars"</strong> online program. We provide high-level, free Olympiad training in Mathematics and Informatics to talented students across the African continent, fostering a collaborative scientific community.
          </p>
        </div>

        {/* --- Specialized Roles & Programs --- */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="border-4 border-slate-600 rounded-2xl p-4">
            <h3 className="text-slate-700 font-semibold text-xl mb-1">PAMO 2025</h3>
            <p className="text-slate-700 text-sm">
              Served as a <strong>Remote Coordinator</strong> for the Pan-African Math Olympiad, responsible for the rigorous grading and coordination of solutions from participants across various African delegations.
            </p>
          </div>

          <div className="border-4 border-slate-600 rounded-2xl p-4">
            <h3 className="text-slate-700 font-semibold text-xl mb-1">NAOI 2025</h3>
            <p className="text-slate-700 text-sm">
              Organizer for the first <strong>North African Olympiad in Informatics</strong>, which was proudly hosted by Algeria. I assisted in coordinating the competition for both regional and guest countries.
            </p>
          </div>
        </div>

        {/* --- EXCL Program --- */}
        <div className="mt-5 border-4 border-slate-600 rounded-2xl p-4 md:max-w-350 mx-auto bg-slate-50">
          <h3 className="text-slate-700 font-semibold text-xl mb-1">EXCL Program 2025</h3>
          <p className="text-slate-700">
            Selected for an intensive training program by the <strong>Global Talent Fund</strong>. While focused on mastering advanced competition mathematics, this program allowed me to exchange pedagogical strategies with world-class coaches, which I integrate into my own teaching at the AOI and AMO.
          </p>
        </div>
      </div>
    </div>
  );
}
