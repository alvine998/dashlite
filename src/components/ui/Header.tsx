import { BiBell } from "react-icons/bi";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header className="bg-white shadow px-4 py-2 flex justify-between items-center lg:hidden">
      <button
        onClick={toggleSidebar}
        className="text-gray-700 focus:outline-none z-[999]"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      <h1 className="text-lg font-bold">Dashlite</h1>
    </header>
  );
};

export default Header;
