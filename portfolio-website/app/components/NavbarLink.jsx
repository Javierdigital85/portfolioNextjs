import Link from "next/link";

const NavbarLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
};

export default NavbarLink;

//ESTO IRIA EN EL COMPONENTE Navbar,si quisieramos modularizarlo mas
// const NavLink = [
//   {
//     title: "About",
//     path: "#about"
//   },
//   {
//     title: "Projects",
//     path: "#projects",
//   },
//   {
//     title: "Contact",
//     path: "#contact"
//   }
// ]

{
  // El mapeo
  /* {
    NavLink.map((link,index)=>(
      <li key={index}>
  <NavbarLink href={link.path} title={link.title}/>
      </li>
    ))
  } */
}
