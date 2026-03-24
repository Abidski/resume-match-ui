import NavbarElement from "./NavbarElement";
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

export default Navbar;
