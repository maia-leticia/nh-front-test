const Header = () => {

  const navLinkStyle = "md:text-sm font-medium text-gray-500 no-underline transition-colors duration-200 hover:text-black text-xs" 

  return (
    <header className=" h-12 border-b flex justify-center border-b-gray-300">
      <section className=" mx-auto flex justify-between items-center w-100 md:w-140 xl:w-300 px-4 md:px-20">
        <h2 className="md:text-lg font-bold color text-4">
          E-MergingTech
        </h2>
        <nav className="flex gap-5">
          <a href="#article" className={navLinkStyle}>ARTIGOS</a>
          <a href="#about" className={navLinkStyle}>SOBRE NÓS</a>
        </nav>
      </section>
    </header>
  );
};

export default Header;

