import React, { useEffect, useState } from "react";
import Link from "next/link";

const Header: React.FC = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="flex-1 flex justify-start">
        <Link href="/" className="text-lg font-semibold hover:underline">
          홈
        </Link>

        <nav className="flex-1 flex justify-center">
          <ul className="flex space-x-20">
            <li className="relative" onMouseEnter={() => setSubMenuOpen(true)}>
              <Link href="/category1/menu1">카테고리 1</Link>
              {isSubMenuOpen && (
                <ul
                  className="absolute left-0 bg-gray-700 text-white rounded-lg mt-2 w-48 transition-opacity duration-300 opacity-100"
                  onMouseLeave={() => setSubMenuOpen(false)}
                >
                  <li>
                    <Link
                      href="/category1/menu1"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      메뉴 1
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/category1/menu2"
                      className="block px-4 py-2 hover:bg-gray-600"
                    >
                      메뉴 2
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="relative" onMouseEnter={() => setSubMenuOpen(true)}>
              <Link href={"/category2"}>카테고리 2</Link>
            </li>
            <li className="relative" onMouseEnter={() => setSubMenuOpen(true)}>
              <Link href="/caregory3">카테고리 3</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
