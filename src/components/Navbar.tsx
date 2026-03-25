function Navbar() {
  return (
    <>
      <nav className="">
        <div>
          <ul className="flex">
            <NavbarElement>Dahsboard</NavbarElement>
            <NavbarElement>Results</NavbarElement>
          </ul>
        </div>
      </nav>
    </>
  );
}

function NavbarElement({ children }: { children: React.ReactNode }) {
  return (
    <>
      <li className="font-semibold mr-5 pt-2 hover:text-[#4F46E5] mb-1">
        <a>{children}</a>
      </li>
    </>
  );
}

export default Navbar;
