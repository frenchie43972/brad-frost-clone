import Link from "next/link";
import React from "react";

// Defines two types for the Nav Links; one for the name and one for the URL path
type NavLink = {
  name: string;
  href: string;
};

// An array of objects holding a NavLink type that will hold the routes in one spot while making
// the component cleaner and easier to maintain and update as requied
const navLinks: NavLink[] = [
  {name: 'work', href: '/work'},
  {name: 'book', href: '/book'},
  {name: 'blog', href: '/blog'},
  {name: 'contact', href: '/contact'},
];

const Navbar: React.FC = () => {
// A function that take a NavLink object as a parameter and will return a Link component
// It will render the links dynamically while avoiding repeated JSX for each individual Link component
  const renderNavLink = (link: NavLink) => (
    <Link
      // A key is required by React in order to efficiently re-render list items 
      key={link.name} 
      href={link.href}
      className="hover:text-[#be6700] hover:underline underline-offset-8 decoration-black decoration-4"
    >
      {link.name}
    </Link>
  );

  return (
    <header className="absolute text-[#a29e5e] top-0 right-0 z-10 mt-1 mr-3 p-1">
      <span className="text-[8.5px] text-slate-950  ml-7">my name is</span>
      <Link className="flex flex-col hover:text-[#be6700] items-end mb-5 -mt-2" href={`/`} rel="brad home">
        <span className="">brad frost</span> 
      </Link>
      <nav className="flex flex-col items-end space-y-1.5">
        {/* Maps through navLinks and will render each dynamically, keeping the code clean */}
        {navLinks.map(renderNavLink)}
      </nav>
    </header>
  );
};


// const Navbar: React.FC = () => {
//     return (
//         <header className="absolute text-[#a29e5e] top-0 right-0 z-10 mt-1 mr-3 p-1">
//             <span className="text-[8.5px] text-slate-950  ml-7">my name is</span>
//             <Link className="flex flex-col hover:text-[#be6700] items-end mb-5 -mt-2" href={`/`} rel="brad home">
//                 {/* <span className="text-[9px] text-black  ml-5 -mb-1.5">my name is</span> */}
//               <span className="">brad frost</span> 
//             </Link>
//             <nav className="flex flex-col items-end space-y-1.5">
//               <Link className="hover:text-[#be6700] hover:underline underline-offset-8 decoration-black decoration-4" href={`/work`}>work</Link>
//               <Link className="hover:text-[#be6700] hover:underline underline-offset-8 decoration-black decoration-4" href={`/book`}>book</Link>
//               <Link className="hover:text-[#be6700] hover:underline underline-offset-8 decoration-black decoration-4" href={`/blog`}>blog</Link>
//               <Link className="hover:text-[#be6700] hover:underline underline-offset-8 decoration-black decoration-4" href={`/contact`}>contact</Link>
//             </nav>
//         </header>
        
//     );
// };

// export default Navbar;

