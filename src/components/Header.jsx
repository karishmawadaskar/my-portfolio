import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">My Portfolio</h1>
      <nav className="space-x-8 ">
        <Link to="/" className="hover:underline">Home</Link>
          <Link to="/projects" className="hover:underline">Projects</Link>
        <Link to="/contact" className="hover:underline">Contact</Link>
        <Link to="/feedback" className="hover:underline">Feedback</Link>
      </nav>
    </header>
  );
}
