import Link from "next/link";

const Sidebar = () => {
  return (
    <div>
      <div className=" bg-gray-800 text-white h-dvh px-4 pb-3 space-y-2">
        <Link href="/" className="block hover:text-blue-400">
          Home
        </Link>
        <Link href="/about" className="block hover:text-blue-400">
          About
        </Link>
        <Link href="/blog" className="block hover:text-blue-400">
          Blog
        </Link>
        <Link href="/contact" className="block hover:text-blue-400">
          Contact
        </Link>
        <Link href="/dashboard" className="block hover:text-blue-400">
          Dashboard
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
