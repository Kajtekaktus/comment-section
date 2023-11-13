import { useState } from "react";
import { User } from "../App";

type PostProps = {
   content: string;
   createdAt: string;
   user: User;
   isReply?: boolean;
};

const Post = ({ content, createdAt, user}: PostProps) => {
   const [rate, setRate] = useState<boolean>(false);

   const returnHtml = (
      <div className="bg-gray-400 flex justify-between p-4 items-center mb-5 rounded-xl">
         {/* left side */}
         <div className="left-side w-[10%]">
            <div className="like-container flex flex-col justify-between items-center h-[100px] w-[70px]  bg-slate-400 cursor-pointer py-4 rounded-xl">
               <img
                  src="/images/icon-plus.svg"
                  alt=""
                  className="plus-icon w-[20px]"
               />
               <div className="counter">20</div>
               <img
                  src="/images/icon-minus.svg"
                  alt=""
                  className="minus-icon w-[20px] cursor-pointer"
               />
            </div>
         </div>
         {/* right side */}
         <div className="right-side w-[85%]">
            {/* top wrapper */}
            <div className="top-wrapper flex justify-between w-full mb-4">
               <div className="flex gap-4 items-center justify-between">
                  <img src={user.image.png} className="w-[50px]"></img>
                  <p className="text-xl">{user.username}</p>
                  <p className="created-at">{createdAt}</p>
               </div>
               <div className="reply-container flex justify-center items-center gap-2">
                  <img src="/images/icon-reply.svg" alt="" />
                  <p>Reply</p>
               </div>
            </div>
            {/* bottom wrapper */}
            <div className="bottom-wrapper">
               <div className="post-content">{content}</div>
            </div>
         </div>
      </div>
   );

    return returnHtml

//    return isReply ? (
//       <div className="flex gap-8 items-center justify-end">
//         <div className="h-full w-1 bg-black"></div>
//          <div className="w-4/5">{returnHtml}</div>
//       </div>
//    ) : (
//       returnHtml
//    );
};

export default Post;
