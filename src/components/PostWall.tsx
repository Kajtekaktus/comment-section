import { useState } from "react";
import Post from "./Post";
import { Data } from "../App";

type PostWallProps = {
  data: Data;
};

const PostWall = ({ data }: PostWallProps) => {
  const [postsArr, setPostsArr] = useState();

  console.log(data);

  return (
    <div className="grid grid-cols-1 auto-rows-auto bg-slate-100 p-5">
      {data.comments.map((item) => {
        if (item.replies?.length === 0) {
          return (
            <Post
              key={item.id}
              content={item.content}
              createdAt={item.createdAt}
              user={item.user}
            />
          );
        } else {
          return (
            <>
              <Post
                key={item.id}
                content={item.content}
                createdAt={item.createdAt}
                user={item.user}
              />
              <div className="flex justify-between">
                <div className="ml-10 h-full w-1 bg-black"></div>
                <div className="w-4/5">
                  {item.replies?.map((item2) => {
                    return (
                      <Post
                        key={item2.id}
                        content={item2.content}
                        createdAt={item2.createdAt}
                        user={item2.user}
                        isReply={true}
                      />
                    );
                  })}
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
};

export default PostWall;
