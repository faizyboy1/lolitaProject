import React from "react";
import { menuData } from '../../data/MenuData'
// import Button from '../button/Button'
import './Navbar.scss'
import {FaBars} from 'react-icons/fa'
import { Link } from "react-router-dom";

function Navbar(props) {
  const{isOpen,toggleHandler}=props;
  return (
    <nav className="nav">
          
           
           <FaBars onClick={toggleHandler} className="h-4 w:4 md:hidden cursor-pointer"  />
           <a href="/">
               <img className="nav__logo" src={""} href="#" alt="Lolita"/>
           </a>
           <div className="nav__itemContainer">
               {
                   menuData.map((item,index)=>(
                    <Link to={item.link} key={index} className="nav__itemContainer-links">{item.title}</Link>
                   ))
               }

           </div>
           <div className="nav__buttonContainer">
               {/* <Button btnText="Contact Me" classes="primary small"
                
                /> */}
           </div>
           
       </nav>
      // <nav class="bg-white shadow relative z-20 ">
      //   <div class="container absolute mx-auto px-6 py-3 md:flex md:justify-between md:items-center h-screen">
      //     <div class="flex justify-between items-center">
      //       <div>
      //         <a
      //           class="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700"
      //           href="#"
      //         >
      //           Brand
      //         </a>
      //       </div>

      //       {/* <!-- Mobile menu button --> */}
      //       <div class="flex md:hidden">
      //         <button
      //           type="button"
      //           class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
      //           aria-label="toggle menu"
      //         >
      //           <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
      //             <path
      //               fill-rule="evenodd"
      //               d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
      //             ></path>
      //           </svg>
      //         </button>
      //       </div>
      //     </div>

      //     {/* <!-- Mobile Menu open: "block", Menu closed: "hidden" --> */}
      //     <div class="md:flex  items-center">
      //       <div class="flex flex-col md:flex-row md:mx-6 ">
      //         <a
      //           class="my-1 text-sm text-gray-900 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
      //           href="#"
      //         >
      //           Home
      //         </a>
      //         <a
      //           class="my-1 text-sm text-gray-900 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
      //           href="#"
      //         >
      //           Shop
      //         </a>
      //         <a
      //           class="my-1 text-sm text-gray-900 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
      //           href="#"
      //         >
      //           Contact
      //         </a>
      //         <a
      //           class="my-1 text-sm text-gray-900 font-medium hover:text-indigo-500 md:mx-4 md:my-0"
      //           href="#"
      //         >
      //           About
      //         </a>
      //       </div>

      //       <div class="flex justify-center md:block">
      //         <a class="relative text-gray-900 hover:text-gray-600" href="#">
      //           <svg
      //             class="h-5 w-5"
      //             viewBox="0 0 24 24"
      //             fill="none"
      //             xmlns="http://www.w3.org/2000/svg"
      //           >
      //             <path
      //               d="M3 3H5L5.4 5M7 13H17L21 5H5.4M7 13L5.4 5M7 13L4.70711 15.2929C4.07714 15.9229 4.52331 17 5.41421 17H17M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM9 19C9 20.1046 8.10457 21 7 21C5.89543 21 5 20.1046 5 19C5 17.8954 5.89543 17 7 17C8.10457 17 9 17.8954 9 19Z"
      //               stroke="currentColor"
      //               stroke-width="2"
      //               stroke-linecap="round"
      //               stroke-linejoin="round"
      //             />
      //           </svg>

      //           <span class="absolute top-0 left-0 rounded-full bg-indigo-500 text-white p-1 text-xs"></span>
      //         </a>
      //       </div>
      //     </div>
      //   </div>

      // </nav>
    
  );
}

export default Navbar;
