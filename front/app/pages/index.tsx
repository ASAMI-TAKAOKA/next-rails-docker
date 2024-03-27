import React, { FC } from "react";
import { GetServerSideProps, GetStaticProps } from "next";

type Post = {
  id: number;
  title: string;
}

type Props = {
  posts: Post[];
}

const Home: FC<Props> = (props) => {
  return (
    <>
      <h2>POSTの一覧</h2>
        {props.posts.map((post) =>
        // eslint-disable-next-line react/jsx-key
        <ul>
          <li>{post.id}</li>
          <li>{post.title}</li>
        </ul>
        )}
    </>
  )
}

export const getStaticProps = async () => {
  // URLはlocalhostではなくapiとなる
  const response = await fetch("http://api:3000/posts", {method: "GET"});
  const json = await response.json();

  return {
    props: {
      posts: json
    },
  };
}

export default Home;