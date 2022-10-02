import Link from "next/link";
import { FC } from "react";

// types
import { IPostCardProps } from "./types";

// ::
const PostCard: FC<IPostCardProps> = ({
  color,
  createAt,
  subTitle,
  title,
  id,
}) => {
  return (
    <Link href={`/post/${id}`}>
      <div
        style={{ border: "3px solid transparent", borderLeftColor: `${color}` }}
        className="transition duration-100 both hover:bg-slate-700 tran shadow-md postcard-container cursor-pointer w-full rounded-tl-none rounded-bl-none rounded-lg overflow-hidden  bg-gray-900 text-gray-900  text-white p-4 flex align-center justify-start gap-1 flex-col"
      >
        <div className="prose prose-invert flex flex-col">
          <h2 className="font-bold">{title}</h2>
          <h3 className="text-gray-700 text-gray-400">{subTitle}</h3>
          <span className="text-gray-700 text-gray-500">{createAt}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostCard;
