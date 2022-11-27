import hamburger from "../assets/images/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="bg-[url(./assets/images/image-hero-mobile.jpg)] sm:bg-[url(./assets/images/image-hero-desktop.jpg)] bg-cover h-96 min-w-full">
      <nav className="text-white flex flex-row justify-between sm:justify-around items-center p-6">
        <p className="text-4xl font-bold">crowdfund</p>
        <img className="h-6 w-6 sm:hidden" src={hamburger} alt="hamburger" />
        <ul className="hidden sm:flex flex-row gap-8">
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#discover">
            <li>Discover</li>
          </a>
          <a href="#getstarted">
            <li>Get Started</li>
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
