import React from "react";
import { dictionary } from "../../dictionary";

const SocialLinks = () => {
  const social = dictionary.sidebar.social;

  return (
    <div className="flex flex-row my-3 gap-1">
      <a
        href={social?.linkedin}
        target="_blank"
        className="flex items-center p-2 py-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
      >
        <i className="bx bxl-linkedin bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>
      </a>
      <a
        href={social?.github}
        target="_blank"
        className="flex items-center p-2 py-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
      >
        <i className="bx bxl-github bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>
      </a>
      <a
        href={social?.medium}
        target="_blank"
        className="flex items-center p-2 py-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
      >
        <i className="bx bxl-medium bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>
      </a>
      <a
        href={social?.youtube}
        target="_blank"
        className="flex items-center p-2 py-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
      >
        <i className="bx bxl-youtube bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>
      </a>
    </div>
  );
};

export default SocialLinks;
