import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
  return (
    <div className="flex mt-4">
      <button className="btn btn-secondary">Breaking news</button>
      <Marquee className="bg-zinc-100 text-black font-poppins font-semibold" pauseOnHover={true} speed={100}>
       <Link className="mr-10" to="/">
       I can be a React component, multiple React components, or just some text.
        vI can be a React component, multiple React components, or just some
        text.....
       </Link>

       <Link className="mr-10" to="/">
       I can be a React component, multiple React components, or just some text.
        vI can be a React component, multiple React components, or just some
        text.....
       </Link>
       <Link className="mr-10" to="/">
       I can be a React component, multiple React components, or just some text.
        vI can be a React component, multiple React components, or just some
        text.....
       </Link>
      </Marquee>
    </div>
  );
};

export default BreakingNews;
