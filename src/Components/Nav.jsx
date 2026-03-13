import { Link } from "react-router-dom";

function Nav({ showDarkNav }) {
  return (
    <div
      className={`fixed top-0 right-0 z-50 mx-auto w-full px-8 py-2 ${showDarkNav ? "border-b bg-white text-black" : "bg-black/10 text-white"} flex items-center justify-between transition-colors duration-100 md:px-10 lg:px-20`}
    >
      <Link
        to={"/"}
        className="bebas-neue-regular flex flex-col items-center justify-center text-xl font-black tracking-wider md:text-2xl lg:text-3xl"
      >
        <h1 className="">COMIC</h1>
        <h1 className="">CODEX</h1>
      </Link>
      <Link to="/search">
        <button
          className={`transition-colors duration-100 hover:cursor-pointer lg:text-xl`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="2.5"
            stroke="currentColor"
            className={`size-6 ${showDarkNav ? "stroke-black" : "stroke-white"}`}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </button>
      </Link>
    </div>
  );
}

export default Nav;
