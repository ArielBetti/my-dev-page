import { ReactNode } from "react";
import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import Template from "../../template";
import { getPostById, getPosts } from "../../graphql/hygraph/queries";
import { getUser } from "../../graphql/github/queries";
import { IPost, IUser } from "../../interfaces";
import Link from "next/link";

interface IPostProps {
  user: IUser;
  post: IPost;
}

// ::
const Post: NextPage<IPostProps> = ({ user, post }) => {
  return (
    <Template user={user}>
      <div className="prose prose-invert md:container md:mx-auto p-6">
        <Link href="/">
          <div className="cursor-pointer gap-1 text-cyan-400 flex flex-row justify-start items-center">
            <i className="bx bx-arrow-back"></i>
            <p>Voltar para listagem</p>
          </div>
        </Link>
        <p className="mx-0 mt-0">
          Criado:{" "}
          {dayjs(post.createdAt).locale("pt-br").format("DD/MM/YYYY [as] h:mm")}{" "}
          | Atualizado:{" "}
          {dayjs(post.updatedAt).locale("pt-br").format("DD/MM/YYYY [as] h:mm")}
        </p>
        <div className="flex flex-row items-center gap-3">
          <div
            style={{ backgroundColor: post.color?.hex || "#FFF" }}
            className="flex w-4 h-4 rounded-full"
          ></div>
          <h1 className="mb-0">{post.title}</h1>
        </div>
        <h2>{post.subtitle}</h2>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </Template>
  );
};

export async function getServerSideProps(context: { params: { id: any } }) {
  const userData = await getUser;
  const postId = context.params.id;
  const postRequest = await getPostById(postId);
  const { myDevPagePost } = postRequest.data;

  return {
    props: {
      user: userData.data.user,
      post: myDevPagePost,
    },
  };
}

export default Post;
