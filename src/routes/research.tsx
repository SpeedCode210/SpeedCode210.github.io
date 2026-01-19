import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Research() {
    return (
        <div className="py-10 text-slate-700">
            <div className="md:max-w-350 mx-auto">
                <h1 className="text-center text-3xl font-semibold text-slate-700 mb-1">Research & Academic Projects</h1>
                <p className="text-slate-600 text-center mb-10 mt-2">
                    My academic journey is driven by a fascination with the theoretical foundations of AI and Quantum Computing.
                    I focus on how quantum algorithms can solve complex optimization and classification problems.
                </p>

                <div className="border-slate-700 border-4 rounded-2xl p-4 my-4">
                    <h2 className="text-xl font-bold">
                        <a target="_blank" rel="noreferrer" href="https://www.ingenii.io/experiential-quantum-immersion-program" className="hover:text-teal-600 transition-colors">Ingenii EQIP Program</a>
                    </h2>
                    <p className="text-slate-500 text-sm mb-2 italic">Quantum Machine Learning & Optimization</p>
                    <p className="text-slate-700 indent-3">
                        Completed an online training program covering QML and Quantum Optimization techniques.
                        My hands-on project focused on applying quantum algorithms to solve the
                        Capacitated Vehicle Routing Problem with Time Windows (CVRPTW).
                    </p>
                </div>


                <div className="border-slate-700 border-4 rounded-2xl p-4 my-5">
                    <h2 className="text-xl font-bold">NHSM Summer School 2025</h2>
                    <p className="text-slate-500 text-sm mb-2 italic font-semibold">Focus: Error Correcting Codes</p>
                    <p className="text-slate-700 indent-3">
                        Participated in an intensive study of the mathematical foundations of reliable data transmission.
                        This exploration into Coding Theory is essential for both classical telecommunications and
                        ensuring fault-tolerance in quantum information theory.
                    </p>
                </div>

                <div className="border-slate-700 border-4 rounded-2xl p-4 my-4 flex justify-between items-start">
                    <div className="pr-4">
                        <h2 className="text-xl font-bold">Quantum Attention for Molecular Classification</h2>
                        <p className="text-slate-500 text-sm mb-2 italic">QPoland Global Quantum Hackathon 2025</p>
                        <p className="text-slate-700 indent-3">
                            Developed a machine learning approach for molecular classification using Quantum computing.
                            We utilized quantum attention mechanisms to enhance feature selection in chemical structures.
                        </p>
                    </div>
                    <a target="_blank" rel="noreferrer" className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl border-teal-600 hover:bg-teal-600 hover:text-white duration-200 transition-colors shrink-0" href="https://github.com/HoceiniRihab/QFennecs_QPoland-Global-Quantum-Hackathon">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>

                <div className="border-slate-700 border-4 rounded-2xl p-4 my-4 flex justify-between items-start">
                    <div className="pr-4">
                        <h2 className="text-xl font-bold">UnitaryHACK 2025</h2>
                        <p className="text-slate-500 text-sm mb-2 italic">Open Source Quantum Contributions</p>
                        <p className="text-slate-700 indent-3">
                            Successfully completed two bounties by contributing to the <strong>maximum-independent-set</strong> library of <strong>Pasqal</strong>,
                            helping optimize algorithms for neutral atom quantum processors.
                        </p>
                    </div>
                    <a target="_blank" rel="noreferrer" className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl border-teal-600 hover:bg-teal-600 hover:text-white duration-200 transition-colors shrink-0" href="https://github.com/pasqal-io/maximum-independent-set">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>

                <div className="border-slate-700 border-4 rounded-2xl p-4 my-4 flex justify-between items-start">
                    <div className="pr-4">
                        <h2 className="text-xl font-bold">THE WISER Quantum Program 2025</h2>
                        <p className="text-slate-500 text-sm mb-2 italic">Quantum PDEs & Monte Carlo Simulations</p>
                        <p className="text-slate-700 indent-3">
                            Worked on a Monte Carlo Simulation via Quantum Circuits, simulating a quantum version
                            of the Galton board to explore quantum walks and probability distributions.
                        </p>
                    </div>
                    <a target="_blank" rel="noreferrer" className="text-teal-600 text-lg font-semibold p-2 border-2 rounded-xl border-teal-600 hover:bg-teal-600 hover:text-white duration-200 transition-colors shrink-0" href="https://github.com/SpeedCode210/QuantumGaltonBoard">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>

                <div className="border-slate-700 border-4 rounded-2xl p-4 my-4">
                    <h2 className="text-xl font-bold">
                        <a target="_blank" rel="noreferrer" href="https://qworld.net/" className="hover:text-teal-600 transition-colors">QWorld Quantum Workshops</a>
                    </h2>
                    <p className="text-slate-500 text-sm mb-2 italic">Comprehensive Certification Series</p>
                    <p className="text-slate-700 indent-3">
                        Progressed through the full stack of certifications: <strong>QBronze</strong> (Foundations),
                        <strong>QSilver</strong> (Shor's & Factorization), <strong>QNickel</strong> (Oracular Algorithms),
                        <strong>QCobalt</strong> (Annealing), and the specialized <strong>QML Workshop</strong>.
                    </p>
                </div>

                <div className="border-slate-700 border-4 rounded-2xl p-4 my-4">
                    <h2 className="text-xl font-bold">
                        <a target="_blank" rel="noreferrer" href="https://lms.qureca.com/product/adequate/" className="hover:text-teal-600 transition-colors">ADEQUATE - QURECA</a>
                    </h2>
                    <p className="text-slate-700 indent-3">
                        A comprehensive course on quantum computing fundamentals and industrial applications,
                        providing a broad perspective on the current state of the quantum ecosystem.
                    </p>
                </div>
            </div>
        </div>
    );
}