import { ReactNode } from "react";
import type { NextPage } from "next";
import dayjs from "dayjs";

// components
import PostCard from "../components/PostCard";

// templates
import Template from "../template";

// graphql
import { getUser } from "../graphql/github/queries";
import { getPosts } from "../graphql/hygraph/queries";

// types
import { IPost, IUser } from "../interfaces";

interface IHomeProps {
  user: IUser;
  posts: IPost[];
  children: ReactNode;
}

// ::
const Home: NextPage<IHomeProps> = ({ user, posts }) => {
  return (
    <Template user={user}>
      <div className="md:container md:mx-auto px-3 py-6">
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
              updatedAt={dayjs(new Date(post.updatedAt))
                .locale("br")
                .format("DD/MM/YYYY [as] h:mm a")}
              createAt={dayjs(new Date(post.createdAt))
                .locale("br")
                .format("DD/MM/YYYY [as] h:mm a")}
              subTitle={post.subtitle}
              title={post.title}
            />
          ))}
        </div>
      </div>
    </Template>
  );
};

export async function getServerSideProps() {
  const userData = await getUser;
  const posts = await getPosts;

  const { myDevPagePosts } = posts.data;

  return {
    props: {
      user: userData.data.user,
      posts: myDevPagePosts,
    },
  };
}

export default Home;
