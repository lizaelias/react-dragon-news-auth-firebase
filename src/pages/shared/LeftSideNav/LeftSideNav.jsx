import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });
  return (
    <div className="space-y-5">
      <h2 className=" p-4 font-semibold bg-gray-100 text-center text-2xl">CategoriesAll</h2>
      {categories.map((category) => (
            <Link className="block ml-4 text-xl font-semibold" key={category.id} 
            to={`/category/${category.id}`}>
          {category.name}
        </Link>
      ))}
    </div>
  );
};

export default LeftSideNav;
