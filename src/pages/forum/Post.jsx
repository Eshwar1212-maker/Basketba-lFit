import React from "react";





const Post = ({ post }) => {

  return (
    <div className="text-white m-auto max-w-[750px] px-5 py-1 w-fit border-solid border-2 rounded-3xl border-slate-900 ...">
      <h1 className="text-[14px] font-headerFonts text-red-300">
        {post.title}
      </h1>
      <p className="sm:text-[10px] md:text-[16px] lg:text-[17px]">
        {post.description}
      </p>
      <div className="flex justify-center underline">
        <p className="font-logoFonts font-bold text-[14px] p-2 sm:text-[13px]">
          -{post.username}
        </p>
       
      </div>
    </div>
  );
};

export default Post;
