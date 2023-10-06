import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex items-center">
      <div>
        <button className="btn bg-[#D72050] text-white hover:text-black btn-ghost">
          Breaking News
        </button>
      </div>
      <div>
        <Marquee>
          <Link to={"/"} className="mr-12">
            {" "}
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link to={"/"} className="mr-12">
            {" "}
            I can be a React component, multiple React components, or just some
            text.
          </Link>
          <Link to={"/"} className="mr-12">
            {" "}
            I can be a React component, multiple React components, or just some
            text.
          </Link>
        </Marquee>
      </div>
    </div>
  );
};

export default BreakingNews;
