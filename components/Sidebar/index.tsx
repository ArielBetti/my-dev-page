import Link from "next/link";
import { FC } from "react";
import { dictionary } from "../../dictionary";
import { ISidebarProps } from "./types";

const Sidebar: FC<ISidebarProps> = ({ user }) => {
  const { sidebar } = dictionary;

  return (
    <aside className="w-80" aria-label="Sidebar">
      <div
        className="
      h-screen
      overflow-y-auto py-4 px-3 bg-gray-900
      "
      >
        <Link href="/">
          <div className="hover:bg-gray-100 hover:bg-gray-700 cursor-pointer flex items-center gap-4 p-2 py-4 text-base font-normal text-gray-900 rounded-lg text-white">
            <img
              className="w-14 h-14 rounded-lg"
              src={user?.avatarUrl}
              alt={`Foto avatar de ${user?.name}`}
            />
            <div className="flex flex-col prose prose-invert">
              <h2 className="m-0">{user?.name}</h2>
              <p>{sidebar?.role}</p>
            </div>
          </div>
        </Link>
        <div className="flex flex-row my-3 gap-1">
          <a
            href={sidebar.social?.linkedin}
            target="_blank"
            className="flex items-center p-2 py-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
          >
            <i className="bx bxl-linkedin bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>
          </a>
          <a
            href={sidebar.social?.github}
            target="_blank"
            className="flex items-center p-2 py-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
          >
            <i className="bx bxl-github bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>
          </a>
          <a
            href={sidebar.social?.medium}
            target="_blank"
            className="flex items-center p-2 py-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
          >
            <i className="bx bxl-medium bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>
          </a>
          <a
            href={sidebar.social?.youtube}
            target="_blank"
            className="flex items-center p-2 py-2 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
          >
            <i className="bx bxl-youtube bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>
          </a>
        </div>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="flex items-center p-2 py-4 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
            >
              <i className="bx bx-home bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>

              <span className="ml-3">Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center p-2 py-4 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
            >
              <i className="bx bx-user bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>

              <span className="ml-3">Sobre</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
