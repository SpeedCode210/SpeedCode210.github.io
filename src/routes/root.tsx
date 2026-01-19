import { faHome, faTrophy, faChalkboardTeacher, faCode, faMicroscope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink, Outlet } from "react-router-dom";

export default function Root() {
  function getNavClasses({ isActive } : {isActive: boolean}) {
    const base = "flex items-center text-md font-semibold py-3 px-4 border-b-4 transition-all duration-300 ";
    if (isActive) {
      return base + "text-teal-600 border-b-teal-600 hover:border-b-teal-500 hover:text-teal-500";
    }
    return base + "text-slate-600 border-b-transparent hover:border-b-slate-400 hover:text-slate-500";
  }

  return (
    <div className="h-screen w-screen bg-slate-50 p-6">
      <div className="border-4 border-slate-600 h-full rounded-xl flex flex-col">

        <nav className="flex justify-center w-full border-b-slate-600 border-b-4 bg-white rounded-t-lg overflow-x-auto no-scrollbar">
          <img className="w-14 my-auto mx-4 hidden md:block" src="/speedcode.png" alt="Logo" />
          
          <NavLink className={getNavClasses} to="/">
            <FontAwesomeIcon icon={faHome} />
            <span className="ml-2 hidden sm:inline">Home</span>
          </NavLink>

          <NavLink className={getNavClasses} to="/competitions">
            <FontAwesomeIcon icon={faTrophy} />
            <span className="ml-2 hidden sm:inline">Competitions</span>
          </NavLink>

          <NavLink className={getNavClasses} to="/coaching">
            <FontAwesomeIcon icon={faChalkboardTeacher} />
            <span className="ml-2 hidden sm:inline">Teaching</span>
          </NavLink>

          <NavLink className={getNavClasses} to="/research">
            <FontAwesomeIcon icon={faMicroscope} />
            <span className="ml-2 hidden sm:inline">Research</span>
          </NavLink>

          <NavLink className={getNavClasses} to="/code">
            <FontAwesomeIcon icon={faCode} />
            <span className="ml-2 hidden sm:inline">Dev</span>
          </NavLink>

          <div className="w-14 mx-4 hidden md:block"></div>
        </nav>

        <main className="overflow-y-auto h-full box-content p-4 scrollbar-thin scrollbar-thumb-slate-600 scrollbar-track-transparent">
          <div className="animate-in fade-in duration-500">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}