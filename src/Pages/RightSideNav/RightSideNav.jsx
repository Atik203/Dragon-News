import {
  AiFillGithub,
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiFillFacebook,
  AiOutlineInstagram,
} from "react-icons/Ai";

import qZone1 from "../../assets/qZone1.png";
import qZone2 from "../../assets/qZone2.png";
import qZone3 from "../../assets/qZone3.png";

const RightSideNav = () => {
  return (
    <div>
      <div className="p-3">
        <h1 className="text-2xl font-semibold my-3">Login With</h1>
        <button className="btn btn-outline mb-3 w-full">
          <span className="text-2xl">
            <AiOutlineGoogle></AiOutlineGoogle>
          </span>
          Login with google
        </button>
        <button className="btn btn-outline mb-3 w-full">
          <span className="text-2xl">
            <AiFillGithub></AiFillGithub>
          </span>
          Login with Github
        </button>
        <button className="btn btn-outline mb-3 w-full">
          <span className="text-2xl">
            <AiOutlineTwitter></AiOutlineTwitter>
          </span>
          Login with Twitter
        </button>
      </div>
      {/* Find on Us */}
      <div className="p-3 mt-1">
        <h1 className="text-2xl font-semibold my-3">Find On Us</h1>

        <a
          href="https://www.instagram.com/atik_ur203/"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 p-3 rounded-t-lg border border-black hover:text-purple-500"
        >
          <span className="text-2xl">
            <AiOutlineInstagram></AiOutlineInstagram>
          </span>
          Instagram
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100019880541123"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 p-3 border-x border-black rounded hover:text-purple-500"
        >
          <span className="text-2xl">
            <AiFillFacebook></AiFillFacebook>
          </span>
          Facebook
        </a>
        <a
          href="https://twitter.com/Atikur02"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-3 p-3 border border-black rounded-b-lg hover:text-purple-500"
        >
          <span className="text-2xl">
            <AiOutlineTwitter></AiOutlineTwitter>
          </span>
          Twitter
        </a>
      </div>
      {/* qZone */}
      <div className="p-3 mt-1">
        <h1 className="text-2xl font-semibold my-3">Q-Zone</h1>
        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
