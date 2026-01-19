import { Link, useRouteError } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center flex-col h-screen w-screen bg-blue-100">
      <h1 className="font-black text-8xl text-slate-700">404</h1>
      <p className="text-2xl font-semibold text-slate-700 mb-4">Page not found</p>
      <Link to="/" className="text-teal-700 hover:text-teal-500 transition-colors duration-300">Go to Home Page <FontAwesomeIcon icon={faHome} /></Link>
    </div>
  );
}
