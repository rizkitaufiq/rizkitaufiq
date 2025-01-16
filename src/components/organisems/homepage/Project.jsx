import PropTypes from "prop-types";
import CardBox from "../../molecules/CardBox";

const Project = (props) => {
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
        <CardBox
          textHeader="Chill"
          textContent="Chill is a web-based application designed to
        give users access to a an extensive library of
        movies and TV shows from their devices. Chill
        offers a user-friendly interface that allows
        users to search for movies and TV shows and
        start watching instantly.
        "
          link="https://mission-5-reactjs-chill.vercel.app/"
        >
          <img
            src="/public/images/homepage/content/project/Chill-desktop.PNG"
            alt="image"
            className="w-[280px] h-[100px] lg:w-[500px] lg:h-[200px]"
          />
        </CardBox>

        <CardBox
          textHeader="E-Commerce"
          textContent="Product List Detailed description,
images and specifications of
product or services. Categorization
and filtering options to help users.
        "
          link="https://github.com/rizkitaufiq/simple_ecommerce_django5"
        >
          <img
            src="/public/images/homepage/content/project/SS2.PNG"
            alt="image"
            className="w-[280px] h-[100px] lg:w-[500px] lg:h-[200px]"
          />
        </CardBox>
      </div>
    </section>
  );
};

Project.propTypes = { id: PropTypes.string };

export default Project;
