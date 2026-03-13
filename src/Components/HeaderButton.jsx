import { Link } from "react-router-dom";

function HeaderButton({ text }) {
  return (
    <Link to="/search">
      <button className="transition-colors absolute bottom-12 left-1/2 -translate-x-1/2 transform rounded-full border-2 border-white bg-black/50 px-6 py-2 text-lg font-semibold text-white duration-300 hover:cursor-pointer hover:bg-white hover:text-black lg:top-1/3 lg:left-20 lg:mt-55 lg:h-fit lg:transform-none lg:translate-0 lg:px-8 lg:py-3 lg:text-xl">
        {text}
      </button>
    </Link>
  );
}

export default HeaderButton;
