import Link from "next/link";
import { FC, useRef, useState } from "react";
import { dictionary } from "../../dictionary";
import { useClickOutSideComponent } from "../../hooks/useClickOutSideComponent";
import { IUser } from "../../interfaces";
import NavigationLinks from "../NavigationLinks";
import SocialLinks from "../SocialLinks";

export interface IHeaderProps {
  user: IUser;
}

const Header: FC<IHeaderProps> = ({ user }) => {
  const [open, setOpen] = useState<boolean>(false);
  const { sidebar } = dictionary;

  const headerRef = useRef(null);

  const onClickOutside = () => {
    setOpen(false);
  };

  useClickOutSideComponent(headerRef, onClickOutside);

  return (
    <nav
      className="w-full md:w-0 visible md:invisible absolute z-10"
      ref={headerRef}
    >
      <div className="bg-gray-900 p-3 flex items-center shadow-md">
        <div className="w-full flex ">
          <Link href="/">
            <div className="flex cursor-pointer justify-start items-center gap-3">
              <img
                className="w-12 h-12 rounded-lg"
                src={user?.avatarUrl}
                alt={`Foto avatar de ${user?.name}`}
              />
              <div className="flex flex-col prose prose-invert">
                <h3 className="m-0">{user?.name}</h3>
                <p>{sidebar?.role}</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="justify-end flex" onClick={() => setOpen(!open)}>
          {!open ? (
            <i className="bx bx-menu bx-md text-gray-700 cursor-pointer transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>
          ) : (
            <i className="bx bx-x bx-md text-gray-700 cursor-pointer transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>
          )}
        </div>
      </div>
        <div className={`border-t-2 border-cyan-900 overflow-auto bg-gray-900 p-3 fixed w-full h-screen duration-100 ease-out transition-all ${open ? 'translate-x-0' : 'translate-x-full'}`}>
          <NavigationLinks />
          <SocialLinks />
        </div>
    </nav>
  );
};

export default Header;
