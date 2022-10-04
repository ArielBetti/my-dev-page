import { ReactNode } from "react";
import type { NextPage } from "next";

// components
import RepoCard from "../../components/RepoCard";

// templates
import Template from "../../template";

// graphql
import { getPinnedRepos, getUser } from "../../graphql/github/queries";

// types
import { IRepo, IUser } from "../../interfaces";

interface IReposProps {
  repos: IRepo[];
  user: IUser;
  children: ReactNode;
}

// ::
const Home: NextPage<IReposProps> = ({ repos, user }) => (
  <Template user={user}>
    <div className="md:container md:mx-auto px-3 py-6">
      <div className="gap-2 prose prose-invert mb-6 flex flex-row justify-start items-center">
        <i className="bx bx-pin bx-sm text-gray-900 transition duration-75 text-gray-300 group-hover:text-gray-900 group-hover:text-white"></i>
        <h3 className="m-0">Repositórios fixados</h3>
      </div>
      <div className=" flex flex-row flex-wrap gap-3 justify-start">
        {repos?.map((repo: IRepo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
    </div>
  </Template>
);

export async function getServerSideProps() {
  const repos = await getPinnedRepos;
  const userData = await getUser;
  const { user } = repos.data;

  const pinnedRepos = user.pinnedItems.edges.map(({ node }: any) => ({
    ...node,
    languages: node.languages.edges.map(({ node }: any) => node),
  }));

  return {
    props: {
      repos: pinnedRepos,
      user: userData.data.user,
    },
  };
}

export default Home;
