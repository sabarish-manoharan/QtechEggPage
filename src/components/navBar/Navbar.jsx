import egglogo from '/home/user/food-card/src/assets/egg-logo.jpg'
import { useState } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { LiaBlogger } from "react-icons/lia";
import { FiPhone, FiUser } from "react-icons/fi";
import { TbEggs } from "react-icons/tb";
import { LuShoppingBag } from "react-icons/lu";
import { GoHeart } from "react-icons/go";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between  py-2 px-2">
          <div className='max-w-screen-xl flex flex-wrap items-center'>

            <img
              src={egglogo}
              className="h-8 flex items-center space-x-3 rtl:space-x-reverse"
              alt="eggspro Logo"
            />
            <p className="text-xl font-semibold text-yellow-500 mx-2">
              Eggspro
            </p>
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5 hover:text-red-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'
              } w-full md:flex md:w-auto`}
            id="navbar-default"
          >
            <div className='max-w-screen-xl flex flex-col md:flex-row  items-center justify-center  md:justify-between bg-stone-200 md:bg-inherit'>
              
              <ul className="font-medium flex flex-col  mx-5 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
                <li className='flex items-center  md:border-0 md:hover:text-red-700'>
                  <RiHomeLine />
                  <a
                    href="#"
                    className="mx-1"
                    aria-current="page"
                  >
                    Home
                  </a>
                </li>
                <li className='flex items-center md:border-0 md:hover:text-red-700'>
                  <TbEggs />
                  <a
                    href="#"
                    className="mx-1  "
                  >
                    Products
                  </a>
                </li>
                <li className='flex items-center  md:border-0 md:hover:text-red-700'>
                  <LiaBlogger />
                  <a
                    href="#"
                    className="mx-1"
                  >
                    Blog
                  </a>
                </li>
                <li className='flex items-center  md:border-0 md:hover:text-red-700'>
                  <FiPhone />
                  <a
                    href="#"
                    className="mx-1 "
                  >
                    Contact Us
                  </a>
                </li>
              </ul>



              <ul className="font-medium flex flex-col   md:flex-row gap-4">
                <li className={`${isMenuOpen ? 'hidden' : 'block'
              } w-full md:flex md:w-auto`}>
                  <FiUser />
                </li>
                <li className={`${isMenuOpen ? 'hidden' : 'block'
              } w-full md:flex md:w-auto`}>
                  <GoHeart />
                </li>
                <li className={`${isMenuOpen ? 'block' : 'hidden'
              } w-full md:flex md:w-auto`}>
                  <LuShoppingBag />
                </li>
              </ul>
            </div>
          </div>
        </div>

      </nav>
    </>
  )
}
export default Navbar