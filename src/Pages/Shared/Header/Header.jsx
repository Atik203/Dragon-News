import moment from "moment";
const Header = () => {
  return (
    <div className="my-10">
      <h1 className="font-custom text-center text-4xl md:text-6xl">
        The Dragon News
      </h1>
      <h3 className="text-center mt-5 text-[#706F6F] text-lg">
        Journalism Without Fear or Favour
      </h3>
      <h3 className="text-center mt-1 text-[#706F6F] text-xl">
        {moment().format("dddd, MMMM D, YYYY")}
      </h3>
    </div>
  );
};

export default Header;
