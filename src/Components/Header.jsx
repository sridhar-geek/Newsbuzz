import { useState } from "react";
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <>
      <header className="header p-4 margin bg-glass [backdrop-filter:blur(30px)] rounded-3xl mt-3">
        {/* Nav Elements */}
        <nav className="header gap-10">
          <img
            src="logo.jpg"
            alt="logo"
            className="select-none w-20 rounded-full cursor-pointer"
          />
          <h1 className="text-3xl font-bold font-Montserrat">News Buzz</h1>
        </nav>
        {/* Login and Signup Buttons */}
        <div className="header gap-10">
          <div className="header gap-6">
            <p className="navigation">Features</p>
            <p className="navigation">Pricing</p>
            <p className="navigation">Resources</p>
          </div>
          <button className="navBtn">Subscribe Us</button>
          <button
            className="md:hidden text-4xl text-textColor font-medium"
            onClick={() => setNavOpen(!navOpen)}
          >
            <IoMdMenu />{" "}
          </button>
        </div>
      </header>
      {navOpen && (
        <nav className="flex flex-col gap-5 rounded-lg bg-backgroundColor p-4 m-5 md:hidden ">
          <button className="navBtn mobileNavBtn">Features</button>
          <button className="navBtn mobileNavBtn">Princing</button>
          <button className="navBtn mobileNavBtn">Resources</button>
          <div className="border border-gray-700"></div>
          <button className="navBtn mobileNavBtn">Login</button>
          <button className="navBtn mobileNavBtn">Subscribe Us</button>
        </nav>
      )}
    </>
  );
};

export default Header;
