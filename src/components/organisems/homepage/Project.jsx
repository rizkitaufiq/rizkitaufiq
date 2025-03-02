import PropTypes from "prop-types";
import CardBox from "../../molecules/CardBox";
import store from "../../../store/store";

const Project = (props) => {
  const { projects } = store();
  const { id } = props;
  return (
    <section
      id={id}
      className="w-full text-white p-6 lg:p-10 mt-10 lg:mt-20 font-bold text-[15px] lg:text-[30px]"
    >
      <div className="flex justify-start items-center mb-5 lg:mb-10">
        <h1 className="text-secondary">Project</h1>
      </div>

      <div className="flex flex-wrap gap-10 lg:gap-10">
        {projects.map((project, index) => (
          <CardBox
            key={index}
            bgCard="bg-slate-700"
            textHeader={project.title}
            textContent={project.content}
            link={project.url}
          >
            <img
              src={project.image}
              alt="image"
              className="w-[280px] h-[100px] lg:w-[500px] lg:h-[200px]"
            />
          </CardBox>
        ))}
      </div>
      <footer className="mt-5">
        <a
          href="https://github.com/rizkitaufiq?tab=repositories"
          className="text-white btn bg-primary border-none hover:text-gray-500 hover:bg-default hover:shadow-[0_0_25px_5px_rgba(128,0,128,0.8)] transition-all duration-300"
        >
          « More »
        </a>
      </footer>
    </section>
  );
};

Project.propTypes = { id: PropTypes.string };

export default Project;
