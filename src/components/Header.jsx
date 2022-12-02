import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-mobile sm:bg-desktop w-full h-96 bg-cover">
      <nav className="text-white flex flex-row justify-between sm:justify-around items-center p-6">
        <p className="text-4xl font-bold">crowdfund</p>
        <MobileNav />
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
