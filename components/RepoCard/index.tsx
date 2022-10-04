import { FC } from "react";
import { IRepoLanguage } from "../../interfaces";
import { IRepoCardProps } from "./types";

const RepoCard: FC<IRepoCardProps> = ({ repo }) => {
  return (
    <a
      href={repo.url}
      target="_blank"
      className="transition w-full lg:max-w-xs max-w-none duration-100 both hover:bg-slate-700 rounded-lg overflow-hidden shadow-md bg-gray-900 text-gray-900  text-white"
    >
      <div className="prose prose-invert">
        <div className="px-6 py-4">
          <h3>{repo.name}</h3>
          <p className="text-gray-700 text-gray-400 text-base">
            {repo.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {repo.languages.map((item: IRepoLanguage) => (
            <span
              key={item.id}
              style={{ border: `1px solid ${item.color}` }}
              className="inline-block bg-gray-900 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 text-gray-100 mr-2 mb-2"
            >
              {item.name}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
};

export default RepoCard;
