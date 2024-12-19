import Link from "next/link";
import { useRouter } from "next/router";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const router = useRouter();

  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Profile", path: "/admin/profile" },
    { name: "Settings", path: "/admin/settings" },
  ];

  return (
    <div
      className={`fixed inset-y-0 left-0 lg:h-[100vh] lg:overflow-auto z-50 w-64 bg-blue-800 text-white transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out lg:static lg:translate-x-0`}
    >
      <div className="text-center text-xl font-bold py-4 border-b border-blue-700">
        Dashlite
      </div>
      <button type="button" className="absolute top-4 right-4 lg:hidden">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleSidebar}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <nav className="flex-1">
        <ul className="mt-4">
          {menuItems.map((item) => (
            <li
              key={item.path}
              className={`px-4 py-2 hover:bg-blue-700 ${
                router.pathname === item.path ? "bg-blue-700" : ""
              }`}
            >
              <Link href={item.path} onClick={toggleSidebar}>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
