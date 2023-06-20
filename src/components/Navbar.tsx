import { ReactComponent as Logo } from '@assets/logo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openProfile, setOpenProfile] = useState(false);

  const links = [
    {
      name: 'Início',
      to: '/home',
    },
    {
      name: 'Agendar Horário',
      to: '/new-booking',
    },
  ];

  return (
    <div className="w-full mx-auto bg-white border-b 2xl:max-w-7xl z-50">
      <div className="flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className=" flex flex-row items-center justify-between lg:justify-start">
          <a
            className="text-lg tracking-tight  text-black uppercase focus:outline-none focus:ring lg:text-2xl"
            href="/"
          >
            <span className="lg:text-lg uppercase focus:ring-0 flex items-center gap-2">
              <Logo />
              windstatic
            </span>
          </a>
          <button
            type="button"
            onClick={() => setOpenMenu((state) => !state)}
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              {openMenu ? (
                <path
                  className="inline-flex"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  className="inline-flex"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
            <span className="sr-only">Menu</span>
          </button>
        </div>
        <nav className="hidden flex-grow md:pb-0 md:flex md:justify-end md:flex-row items-center">
          {links.map((link) => (
            <Link
              aria-label={link.name}
              className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto"
              onClick={() => setOpenMenu(false)}
              to={link.to}
              key={link.to}
            >
              {link.name}
            </Link>
          ))}

          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            <div
              className="relative flex-shrink-0 ml-5"
              onBlur={() => setOpenProfile(false)}
            >
              <div>
                <button
                  onClick={() => setOpenProfile((state) => !state)}
                  type="button"
                  className="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  id="user-menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="object-cover w-8 h-8 rounded-full"
                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                    alt=""
                  />
                </button>
              </div>

              {openProfile && (
                <div
                  className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex={-1}
                >
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-500"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-0"
                  >
                    Your Profile
                  </Link>

                  <Link
                    to="/settings"
                    className="block px-4 py-2 text-sm text-gray-500"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-1"
                  >
                    Settings
                  </Link>

                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-sm text-gray-500"
                    role="menuitem"
                    tabIndex={-1}
                    id="user-menu-item-2"
                  >
                    Sign out
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
        {openMenu && (
          <nav className=" absolute w-full p-4 left-0 top-16 bg-white flex flex-col items-center flex-grow md:hidden">
            {links.map((link) => (
              <Link
                aria-label={link.name}
                className="px-2 py-2 text-sm text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 lg:ml-auto"
                onClick={() => setOpenMenu(false)}
                to={link.to}
                key={link.to}
              >
                {link.name}
              </Link>
            ))}

            <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
              <div
                className="relative flex-shrink-0 mt-4"
                onBlur={() => setOpenProfile(false)}
              >
                <div>
                  <button
                    onClick={() => setOpenProfile((state) => !state)}
                    type="button"
                    className="flex bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="object-cover w-8 h-8 rounded-full"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"
                      alt=""
                    />
                  </button>
                </div>

                {openProfile && (
                  <div
                    className="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="user-menu-button"
                    tabIndex={-1}
                  >
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-500"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-0"
                    >
                      Your Profile
                    </Link>

                    <Link
                      to="/settings"
                      className="block px-4 py-2 text-sm text-gray-500"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-1"
                    >
                      Settings
                    </Link>

                    <Link
                      to="/logout"
                      className="block px-4 py-2 text-sm text-gray-500"
                      role="menuitem"
                      tabIndex={-1}
                      id="user-menu-item-2"
                    >
                      Sign out
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </div>
  );
}
