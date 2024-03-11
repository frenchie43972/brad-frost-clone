import Link from "next/link";


const Navbar: React.FC = () => {
    return (
        <header className="absolute text-[#a29e5e] top-0 right-0 z-10 mt-2 mr-3 p-1">
            <Link className="flex flex-col items-end mb-4" href={`/`} rel="brad home">
              <span className="text-[9px] text-black  ml-5 -mb-1.5">my name is</span>
              <span className="">brad frost</span> 
            </Link>
            <nav className="flex flex-col items-end space-y-1">
              <Link href={`/work`}>work</Link>
              <Link href={`/book`}>book</Link>
              <Link href={`/blog`}>blog</Link>
              <Link href={`/contact`}>contact</Link>
            </nav>
        </header>
        
    );
};

export default Navbar;