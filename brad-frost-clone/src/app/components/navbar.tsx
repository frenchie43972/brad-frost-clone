import Link from "next/link";


const Navbar: React.FC = () => {
    return (
        <header className="flex flex-col items-end absolute top-0 right-0 z-10 mt-4 p-1">
            <Link href={`/`} rel="brad home">
              <span>my name is</span><br/>
              <span>brad frost</span> 
            </Link>
            <nav className="space-y-2 mt-4">
              <Link href={`/work`}>work</Link>
              <Link href={`/book`}>book</Link>
              <Link href={`/blog`}>blog</Link>
              <Link href={`/contact`}></Link>
            </nav>
        </header>
        
    );
};

export default Navbar;