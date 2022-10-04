import Link from "next/link";

const NavigationLinks = () => {
  return (
    <ul className="space-y-2">
      <Link href="/">
        <li
          aria-label="Clicando nesse item vai para a home do site"
          className="cursor-pointer flex items-center p-2 py-4 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
        >
          <i className="bx bx-home bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>

          <span className="ml-3">Home</span>
        </li>
      </Link>
      <Link href="/repos">
        <li
          aria-label="Clicando nesse item vai para a página de repositórios do site"
          className="cursor-pointer flex items-center p-2 py-4 text-base font-normal text-gray-900 rounded-lg text-white hover:bg-gray-100 hover:bg-gray-700"
        >
          <i className="bx bxs-book-bookmark bx-sm text-gray-700 transition duration-75 text-gray-400 group-hover:text-gray-900 group-hover:text-white"></i>

          <span className="ml-3">Repositórios</span>
        </li>
      </Link>
    </ul>
  );
};

export default NavigationLinks;
