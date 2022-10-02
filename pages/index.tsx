import { ReactNode } from "react";
import type { NextPage } from "next";
import dayjs from "dayjs";

// components
import PostCard from "../components/PostCard";
import RepoCard from "../components/RepoCard";

// templates
import Template from "../template";

// graphql
import { getPinnedRepos, getUser } from "../graphql/github/queries";
import { getPosts } from "../graphql/hygraph/queries";

// types
import { IPost, IRepo, IUser } from "../interfaces";

interface IHomeProps {
  repos: IRepo[];
  user: IUser;
  posts: IPost[];
  children: ReactNode;
}

// ::
const Home: NextPage<IHomeProps> = ({ repos, user, posts }) => {
  return (
    <Template user={user}>
      <div className="md:container md:mx-auto p-6">
        <div className="gap-2 prose prose-invert mb-6 flex flex-row justify-start items-center">
          <i className="bx bx-home bx-sm text-gray-900 transition duration-75 text-gray-300 group-hover:text-gray-900 group-hover:text-white"></i>
          <h3 className="m-0">Home</h3>
        </div>
        <div className="mb-5 mt-5 flex flex-col flex-wrap gap-5 w-full items-start justify-center">
          {posts.map((post: IPost) => (
            <PostCard
              key={post.id}
              id={post.id}
              color={post.color?.hex || "#FFF"}
              createAt={dayjs(post.createdAt)
                .locale("pt-br")
                .format("DD/MM/YYYY [as] h:mm")}
              subTitle={post.subtitle}
              title={post.title}
            />
          ))}
        </div>
        <div className="gap-2 prose prose-invert mb-6 flex flex-row justify-start items-center">
          <i className="bx bx-pin bx-sm text-gray-900 transition duration-75 text-gray-300 group-hover:text-gray-900 group-hover:text-white"></i>
          <h3 className="m-0">Repositórios fixados</h3>
        </div>
        <div className=" flex flex-row flex-wrap gap-3 items-start justify-start">
          {repos?.map((repo: IRepo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      </div>
    </Template>
  );
};

export async function getServerSideProps() {
  const repos = await getPinnedRepos;
  const userData = await getUser;
  const posts = await getPosts;

  const { user } = repos.data;
  const { myDevPagePosts } = posts.data;

  const pinnedRepos = user.pinnedItems.edges.map(({ node }: any) => ({
    ...node,
    languages: node.languages.edges.map(({ node }: any) => node),
  }));

  return {
    props: {
      repos: pinnedRepos,
      user: userData.data.user,
      posts: myDevPagePosts,
    },
  };
}

export default Home;
