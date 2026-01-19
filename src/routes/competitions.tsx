import { faChartSimple } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Competitions() {
  const informaticsAwards = [
    { event: "IOI 2024", award: "Bronze Medal", color: "border-yellow-700 text-yellow-700" },
  ];

  const mathAwards = [
    { event: "PAMO 2024", award: "Gold Medal", color: "border-yellow-500 text-yellow-500" },
    { event: "OFM 2024", award: "Silver Medal", color: "border-gray-500 text-gray-500" },
    { event: "EMC 2023", award: "Third Prize", color: "border-yellow-700 text-yellow-700" },
    { event: "OFM 2023", award: "Bronze Medal", color: "border-yellow-700 text-yellow-700" },
    { event: "IGO 2024", award: "Bronze Ruler", color: "border-yellow-800 text-yellow-800" },
    { event: "IGO 2025", award: "Bronze Ruler", color: "border-yellow-800 text-yellow-800" },
    { event: "IMO 2024", award: "Honourable Mention", color: "border-pink-700 text-pink-700" },
    { event: "BalkanMO 2024", award: "Honourable Mention", color: "border-pink-700 text-pink-700" },
    { event: "IGO 2023", award: "Honourable Mention", color: "border-pink-700 text-pink-700" },
    { event: "IYMC 2024", award: "Gold Medal & 1st National Award", color: "border-yellow-600 text-yellow-600" },
  ];


  return (
    <div className="py-10 px-4 md:max-w-350 mx-auto">
      <h1 className="text-center text-3xl font-semibold text-slate-700 mb-2">Competitive Excellence in Mathematics & Informatics</h1>
      <p className="text-slate-600 text-center mb-10 max-w-2xl mx-auto">
        Representing Algeria on the international stage, I have competed in the most prestigious
        high school competitions in mathematics and informatics.
      </p>
      
      <div className="border-4 border-slate-700 rounded-2xl p-6 mb-12 flex flex-col md:flex-row justify-between items-center bg-white">
  <div className="flex items-center gap-5">
    {/* Large Icon with your signature teal circle style */}
    <div className="bg-teal-600 text-white p-4 rounded-xl shadow-md">
      <FontAwesomeIcon icon={faChartSimple} className="text-3xl" />
    </div>
    <div>
      <h2 className="text-2xl font-bold text-slate-700">Competitive Programming</h2>
      <p className="text-slate-600">
        Handle: <a href="https://codeforces.com/profile/speedcode" target="_blank" rel="noreferrer" className="font-mono font-bold text-teal-700 hover:text-teal-500 transition-colors underline decoration-2 underline-offset-4">speedcode</a>
      </p>
    </div>
  </div>

  <div className="text-center mt-6 md:mt-0 md:text-right border-t-2 md:border-t-0 md:border-l-2 border-slate-200 pt-4 md:pt-0 md:pl-10">
    <p className="text-xs uppercase tracking-[0.2em] text-slate-500 font-bold mb-1">Max Rating</p>
    <div className="flex flex-col items-center md:items-end">
        <p className="text-2xl font-black text-teal-700">Candidate Master</p>
        <p className="text-xl font-bold text-slate-500 tracking-tighter">1946</p>
    </div>
  </div>
</div>

      <h2 className="text-2xl font-bold text-slate-700 mb-6 border-b-2 border-slate-200 pb-2">Informatics</h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
        {informaticsAwards.map((item, i) => (
          <div key={i} className={`text-center w-full sm:w-48 border-4 p-4 rounded-2xl bg-white shadow-sm transition-transform hover:scale-105 ${item.color}`}>
            <p className="text-xl font-semibold text-slate-700">{item.event}</p>
            <p className="font-bold">{item.award}</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-slate-700 mb-6 border-b-2 border-slate-200 pb-2">Mathematics</h2>
      <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-12">
        {mathAwards.map((item, i) => (
          <div key={i} className={`text-center w-full sm:w-48 border-4 p-4 rounded-2xl bg-white shadow-sm transition-transform hover:scale-105 ${item.color}`}>
            <p className="text-xl font-semibold text-slate-700">{item.event}</p>
            <p className="font-bold">{item.award}</p>
          </div>
        ))}
      </div>

    </div>
  );
}