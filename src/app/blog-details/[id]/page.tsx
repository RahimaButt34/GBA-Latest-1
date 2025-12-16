"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json());

export default function BlogDetailsPage() {
  const { id } = useParams(); // 👈 dynamic ID

  const { data, error } = useSWR(
    id ? `https://gba.mig.org.pk/api/news/${id}` : null,
    fetcher
  );

  if (error) return <p>Error loading blog</p>;
  if (!data) return <p>Loading...</p>;

  const blog = data.data;

  return (
    <div className="container" style={{ padding: "80px 0" }}>
      <h1>{blog.title}</h1>

      <p style={{ color: "#777", marginBottom: "20px" }}>
        {blog.created_at} | {blog.category}
      </p>

      <img
        src={blog.image}
        alt={blog.title}
        style={{
          width: "100%",
          maxHeight: "450px",
          objectFit: "cover",
          marginBottom: "30px",
        }}
      />

      <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
        {blog.description}
      </p>
    </div>
  );
}
