import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { auth, db } from "../../config/firebase";
import { addDoc, query, collection, onSnapshot, orderBy, serverTimestamp, QuerySnapshot } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import Post from "./Post";
import {MdOutlineSend} from 'react-icons/md'





const Forum = ({deletePost}) => {
  const [postsList, setPostsList] = useState([]);

  const postsRef = collection(db, "posts");

  const [user] = useAuthState(auth);


  useEffect(() => {

    const q = query(collection(db, 'posts'), orderBy('timestamp', 'desc'));
    const getPosts = onSnapshot(q, (querySnapshot) => {
      setPostsList(querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    })
    return () => getPosts();
  }, []);


  const schema = yup.object().shape({
    description: yup.string().required("Please enter a description"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onCreatePost = async (data) => {
    await addDoc(postsRef, {
      title: data.title,
      description: data.description,
      username: user?.displayName,
      userId: user?.uid,
      timestamp: serverTimestamp()
    });
  };



  return (
    <div className="text-white text-center m-auto max-w-[800px] p-2">
      <br />
      <p className="font-logoFonts">
        Welcome to our Forum! Create a post and start chatting with other
        aspiring hoopers!
      </p>
      <div className="max-w-[700px] w-full m-auto rounded-3xl shadow-xl p-2">
        <form
          className="h-[210px] text-center items-center flex gap-9 flex-col lg:flex-row"
          onSubmit={handleSubmit(onCreatePost)}
        >
          <input
            className="border p-2 text-xl rounded-xl text-black w-[30%]"
            placeholder="Title"
            {...register("title")}
          />
          <textarea
            className="border p-2 w-full text-xl rounded-xl text-black"
            placeholder="Post"
            {...register("description")}
          />
          <button className="bg-slate-600 p-3 rounded-2xl font-mono m-auto text-center">
            <MdOutlineSend size={28}/>
          </button>
        </form>
      </div>
      <div className="rounded-3xl">
        {postsList?.map((post) =>
          <Post post={post} deletePost={deletePost} />
        )}
      </div>
      <p className="text-orange-600 xl font-bold">
            {errors.description?.message}
      </p>
    </div>
  );
};

export default Forum;
