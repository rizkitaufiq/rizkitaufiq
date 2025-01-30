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
          bgCard="bg-slate-700"
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
            src="images/homepage/content/project/Chill-desktop.PNG"
            alt="image"
            className="w-[280px] h-[100px] lg:w-[500px] lg:h-[200px]"
          />
        </CardBox>

        <CardBox
          bgCard="bg-white"
          textHeader="E-Commerce"
          textContent="Product List Detailed description,
          images and specifications of
          product or services. Categorization
          and filtering options to help users.find what they’re looking for. Save
          the product you want Wishlist. Cart
          allows users to add and manage
          selected items before proceeding to
          Checkout.
                  "
          link="https://github.com/rizkitaufiq/simple_ecommerce_django5"
        >
          <img
            src="images/homepage/content/project/SS2.PNG"
            alt="image"
            className="w-[280px] h-[100px] lg:w-[500px] lg:h-[200px]"
          />
        </CardBox>
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
