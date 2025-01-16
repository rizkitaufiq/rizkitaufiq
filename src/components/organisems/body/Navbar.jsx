import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const menu = [
    { name: "About", path: "about" },
    { name: "Skills", path: "skills" },
    { name: "Experience", path: "experience" },
    { name: "Project", path: "project" },
    // { name: "Education", path: "education" },
  ];
  return (
    <nav className="fixed bg-black top-0 z-10 flex font-bold text-white w-full p-6 lg:p-12 text-[8px] lg:text-[22px]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center lg:space-x-4 lg:px-14">
          <h1>
            <span className="text-white">Rizki</span>
            <span className="text-secondary"> Taufiq</span>
          </h1>
        </div>

        <div className="lg:flex-1 flex justify-end lg:justify-center lg:space-x-6 gap-1 lg:gap-3">
          {menu.map((item, index) => (
            <div
              key={index}
              className=" flex justify-center items-center p-2 hover:text-secondary hover:border-secondary border-b-2 border-transparent transition duration-300"
            >
              <ScrollLink
                className="cursor-pointer"
                to={item.path}
                smooth="true"
                duration={500}
              >
                {item.name}
              </ScrollLink>
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
