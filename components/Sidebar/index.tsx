import Link from "next/link";
import { FC } from "react";
import { dictionary } from "../../dictionary";
import NavigationLinks from "../NavigationLinks";
import SocialLinks from "../SocialLinks";
import { ISidebarProps } from "./types";

const Sidebar: FC<ISidebarProps> = ({ user, className }) => {
  const { sidebar } = dictionary;

  return (
    <aside
      className={`w-0 md:w-80 invisible md:visible ${className}`}
      aria-label="Sidebar"
    >
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
        <SocialLinks />
        <NavigationLinks />
      </div>
    </aside>
  );
};

export default Sidebar;
