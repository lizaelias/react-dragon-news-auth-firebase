import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";

import qZone1 from '../../../assets/qZone1.png';
import qZone2 from '../../../assets/qZone2.png';
import qZone3 from '../../../assets/qZone3.png';

const RightSideNav = () => {
  return (
    <div>
      <div className="p-4 space-y-3 mb-6">
        <h2 className="text-3xl font-semibold ">Login With</h2>

        <button className="btn btn-outline w-full ">
          <FaGoogle></FaGoogle>
           Google
        </button>
        <button className="btn btn-outline w-full ">
        <FaGithub></FaGithub>
        Github
        </button>
      </div>
      {/* second part */}
      <div className="p-4 mb-6">
        <h2 className="text-3xl font-semibold ">Login With</h2>
        <a className="flex items-center gap-2 text-lg border rounded-t-lg p-4">
           <FaFacebook></FaFacebook>
           <span>Facebook</span>

        </a>
        <a className="flex items-center gap-2 text-lg border-x p-4">
           <FaTwitter></FaTwitter>
           Twitter
        </a>
        <a className="flex items-center gap-2 text-lg border rounded-b-lg p-4">
           <FaInstagram></FaInstagram>
           <span>-Instagram</span>

        </a>
         

      </div>
      {/* quee Zone */}

      <div className="p-4 space-y-3 mb-6 bg-gray-100">
        <h2 className="text-3xl font-semibold ">Q-Zone</h2>

        <img src={qZone1} alt="" />
        <img src={qZone2} alt="" />
        <img src={qZone3} alt="" />



      </div>
    </div>
  );
};

export default RightSideNav;
