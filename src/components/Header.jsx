import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <header className="bg-[url(./assets/images/image-hero-mobile.jpg)] sm:bg-[url(./assets/images/image-hero-desktop.jpg)] bg-auto bg-no-repeat h-96 max-w-screen-xl mx-auto">
      <nav className="text-white flex flex-row justify-between sm:justify-around items-center p-6">
        <p className="text-4xl font-bold">crowdfund</p>
        <MobileNav />
        <NavLinks />
      </nav>
    </header>
  );
};

export default Header;
