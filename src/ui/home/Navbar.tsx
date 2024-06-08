import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="block sm:flex items-center h-fit bg-cyan-600 px-8 font-sans text-white py-2 py:md-0">
      <img
        src="src\assets\logo.png"
        className="h-10 inline-block me-9 sm:border-r-2 pe-4"
        alt=""
      />

      <ul className="block text-xl sm:flex h-auto gap-9 me-auto text-center">
        <li className="my-2 sm:my-0">
          <NavLink to="">About</NavLink>
        </li>
        <li className="my-2 sm:my-0">
          <NavLink to="">Discover</NavLink>
        </li>
        <li className="my-2 sm:my-0">
          <NavLink to="">Courses</NavLink>
        </li>
        <li className="my-2 sm:my-0">
          <NavLink to="">Contact</NavLink>
        </li>
      </ul>

      <div className="flex gap-3 justify-center my-4">
        <button className="py-2 px-7 rounded outline outline-2 outline-400">Login</button>
        <button className="bg-cyan-700 py-2 px-7 rounded">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;
