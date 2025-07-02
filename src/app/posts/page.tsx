"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { PostDto } from "../type/post";
import apiFetch from "../lib/backend/client";

export default function Page() {
  const [posts, setPosts] = useState<PostDto[]>([]);

  useEffect(() => {
    apiFetch(`/api/v1/posts`)
      .then(setPosts);
  }, []);

  return (
    <>
      <h1>글 목록</h1>

      {posts.length == 0 && <div>로딩중...</div>}

      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.id}: {post.title}</Link>
          </li>
        ))}
      </ul>

      <div>
        <Link href="/posts/write">글쓰기</Link>
      </div>
    </>
  );
}