import PropTypes from "prop-types";

const CardBox = (props) => {
  const { children, textHeader, textContent, link } = props;
  return (
    <div className="card card-side bg-base-100 shadow-xl w-full max-w-[500px] md:flex-row flex-col">
      <figure className="card-body">{children}</figure>
      <div className="card-body">
        <h2 className="card-title text-secondary text-base md:text-lg lg:text-xl">
          {textHeader}
        </h2>
        <p className="text-default text-[8px] md:text-[10px] lg:text-[12px]">
          {textContent}
        </p>
        <div className="card-actions justify-end">
          <a
            href={link}
            className="btn btn-primary text-xs md:text-sm lg:text-base hover:shadow-[0_0_25px_5px_rgba(128,0,128,0.8)] transition-all duration-300"
          >
            Visit
          </a>
        </div>
      </div>
    </div>
  );
};

CardBox.propTypes = {
  children: PropTypes.node,
  textHeader: PropTypes.string,
  textContent: PropTypes.string,
  link: PropTypes.string,
};

export default CardBox;
