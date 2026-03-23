import Navbar from "./Navbar";
function Header() {
  return (
    <>
      <header className="justify-between flex p-8 border-b border-gray-500">
        <div className="mr-10 ">Resume Match </div>
        <Navbar />
      </header>
    </>
  );
}

export default Header;
