import egglogo from '/home/user/food-card/src/assets/egg-logo.jpg'
import { useState } from 'react';
import { RiHomeLine } from "react-icons/ri";
import { LiaBlogger } from "react-icons/lia";
import { FiPhone, FiUser } from "react-icons/fi";
import { TbEggs } from "react-icons/tb";
import { LuShoppingBag } from "react-icons/lu";
import { GoHeart } from "react-icons/go";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const onToggleMenu = () => {
    setMenuOpen(!menuOpen);
  }
  return (
    <>
      <header className="mt-2">
        <nav className="flex justify-between items-center mx-8">
          <div className='max-w-screen-xl flex flex-wrap items-center'>

            <img
              src={egglogo}
              className="h-12 flex items-center space-x-3 rtl:space-x-reverse"
              alt="eggspro Logo"
            />
            <p className="text-2xl font-semibold text-yellow-500 mx-4">
              Eggspro
            </p>
          </div>
          <div
          className={`nav-links  md:static absolute bg-white z-40 md:duration-0 md:min-h-fit min-h-[60vh] top-0 md:w-auto w-full flex items-center px-5 md:translate-x-0 transform ${menuOpen ? "translate-x-96" : "translate-x-full"} ${menuOpen ? "duration-500" : ""} `}
          

              
          >
            <ul className="flex md:flex-row flex-col  md:items-center md:gap-[4vw] gap-8">
              <li className='flex items-center gap-2'>
              <RiHomeLine />
                  <a
                    href="#"
                    className="mx-1"
                    aria-current="page"
                  >
                    Home
                  </a>
              </li>
              <li className='flex items-center gap-2'>
              <TbEggs />
                  <a
                    href="#"
                    className="mx-1  "
                  >
                    Products
                  </a>
              </li>
              <li className='flex items-center md:gap-2'>
              <LiaBlogger />
                  <a
                    href="#"
                    className="mx-1"
                  >
                    Blog
                  </a>
              </li>
              <li className='flex items-center gap-2'>
              <FiPhone />
                  <a
                    href="#"
                    className="mx-1 "
                  >
                    Contact Us
                  </a>
              </li>
              
            </ul>
          </div>
          <div className="flex items-center gap-6">
            <button className="bg-[#795548] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
              LOGIN
            </button>
          
            <ion-icon
              name={menuOpen ? "close" : "menu"}
              class="text-3xl cursor-pointer md:hidden z-50"
              onClick={onToggleMenu}
            ></ion-icon>
          </div>
        </nav>
      </header>

    
           




         {/* <ul className="font-medium flex flex-col   md:flex-row gap-4">
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
          </ul>  */}
            
      

    </>
  )
}
export default Navbar