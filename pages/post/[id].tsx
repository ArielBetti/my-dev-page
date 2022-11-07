import type { NextPage } from "next";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";
import readingTime from "reading-time";
import Template from "../../template";
import { getPostById } from "../../graphql/hygraph/queries";
import { getUser } from "../../graphql/github/queries";
import { IPost, IUser } from "../../interfaces";
import Link from "next/link";
import remarkGfm from "remark-gfm";
import { useMemo } from "react";

interface IPostProps {
  user: IUser;
  post: IPost;
}

// ::
const Post: NextPage<IPostProps> = ({ user, post }) => {
  const stats = readingTime(post?.content);

  const readTimne = useMemo(() => Math.round(stats.minutes), [stats, post]);

  return (
    <Template user={user}>
      <div className="prose prose-invert md:container md:mx-auto xl:px-40 lg:px-20 md:px-10 sm:px-5 px-6">
        <div className="gap-1 text-cyan-400 flex flex-row">
          <Link href="/">
            <div className="flex items-center cursor-pointer ">
              <i className="bx bx-arrow-back" />
              <p>Voltar para listagem</p>
            </div>
          </Link>
        </div>
        <p className="mx-0 mt-0">
          Criado:{" "}
          {dayjs(post.createdAt)
            .locale("pt-br")
            .format("DD/MM/YYYY [as] h:mm a")}
          <p className="mx-0 mt-0">
            Atualizado:{" "}
            {dayjs(post.updatedAt)
              .locale("pt-br")
              .format("DD/MM/YYYY [as] h:mm a")}
            <p className="mx-0 mt-0">Tempo de leitura: {readTimne} minutos</p>
          </p>
        </p>
        <div className="flex flex-row items-center gap-3 flex-wrap">
          <div
            style={{ backgroundColor: post.color?.hex || "#FFF" }}
            className="flex w-4 h-4 rounded-full"
          ></div>
          <h1 className="mb-0">{post.title}</h1>
        </div>
        <h2 className="mt-3">{post.subtitle}</h2>
        {post.coverPhoto && (
          <div className="post-coverphoto">
            <img
              className="shadow-lg rounded-lg"
              src={post.coverPhoto?.url}
              alt="Foto ilustrativa da postagem"
            />
          </div>
        )}
        <ReactMarkdown
          className="markdown-section"
          children={post.content}
          remarkPlugins={[remarkGfm]}
        />
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
