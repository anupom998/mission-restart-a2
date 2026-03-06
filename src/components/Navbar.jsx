import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  return (
    <nav className="sticky top-0 z-50">
      <div className='container px-4 lg:px-0 lg:mx-auto'>
        <div className="max-w-full flex flex-wrap justify-between items-center py-6">
          <div className="heading">
            <a href="/">CS - Ticket System</a>
          </div>

          <div className="lg:hidden block">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer focus:outline-none inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg focus:ring-2 focus:ring-purple-dark/20"
            >
              {isOpen ?
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                :
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-text-align-justify-icon lucide-text-align-justify"><path d="M3 5h18" /><path d="M3 12h18" /><path d="M3 19h18" /></svg>}
            </button>
          </div>

          <div
            className={`${isOpen ? "block" : "hidden"} w-full lg:w-auto lg:flex lg:space-x-4 mt-2 lg:mt-0 bg-opacity-50 items-center`}
          >

            <a
              className={`block py-2 px-4 text-lg text-center hover:text-blue-500 hover:font-medium hover:border-b-2 hover:border-b-indigo-500 transition duration-300`}
              href="/"
            >
              Home
            </a>
            <a
              className={`block py-2 px-4 text-lg text-center hover:text-blue-500 hover:font-medium hover:border-b-2 hover:border-b-indigo-500 transition duration-300`}
              href="/"
            >
              FAQ
            </a>
            <a
              className={`block py-2 px-4 text-lg text-center hover:text-blue-500 hover:font-medium hover:border-b-2 hover:border-b-indigo-500 transition duration-300`}
              href="/"
            >
              Changelog
            </a>
            <a
              className={`block py-2 px-4 text-lg text-center hover:text-blue-500 hover:font-medium hover:border-b-2 hover:border-b-indigo-500 transition duration-300`}
              href="/"
            >
              Blog
            </a>
            <a
              className={`block py-2 px-4 text-lg text-center hover:text-blue-500 hover:font-medium hover:border-b-2 hover:border-b-indigo-500 transition duration-300`}
              href="/"
            >
              Download
            </a>
            <a
              className={`block py-2 px-4 text-lg text-center hover:text-blue-500 hover:font-medium hover:border-b-2 hover:border-b-indigo-500 transition duration-300`}
              href="/"
            >
              Contact
            </a>

            <button className='flex w-full justify-center px-4 py-3 bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:bg-linear-to-tl transition-all duration-300 gap-2 rounded cursor-pointer text-white'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14" /><path d="M12 5v14" /></svg>
              New Ticket
            </button>

          </div>
        </div>
      </div>
      
    </nav>
  );
};

export default Navbar
