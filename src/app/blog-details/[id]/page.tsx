// // // "use client";

// // // import { useParams } from "next/navigation";
// // // import useSWR from "swr";

// // // const fetcher = (url: string) =>
// // //   fetch(url).then((res) => res.json());

// // // export default function BlogDetailsPage() {
// // //   const { id } = useParams(); // 👈 dynamic ID

// // //   const { data, error } = useSWR(
// // //     id ? `https://gba.mig.org.pk/api/news/${id}` : null,
// // //     fetcher
// // //   );

// // //   if (error) return <p>Error loading blog</p>;
// // //   if (!data) return <p>Loading...</p>;

// // //   const blog = data.data;

// // //   return (
// // //     <div className="container" style={{ padding: "80px 0" }}>
// // //       <h1>{blog.title}</h1>

// // //       <p style={{ color: "#777", marginBottom: "20px" }}>
// // //         {blog.created_at} | {blog.category}
// // //       </p>

// // //       <img
// // //         src={blog.image}
// // //         alt={blog.title}
// // //         style={{
// // //           width: "100%",
// // //           maxHeight: "450px",
// // //           objectFit: "cover",
// // //           marginBottom: "30px",
// // //         }}
// // //       />

// // //       <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
// // //         {blog.description}
// // //       </p>
// // //     </div>
// // //   );
// // // }



// // "use client";

// // import { useParams } from "next/navigation";
// // import useSWR from "swr";

// // const fetcher = (url: string) =>
// //   fetch(url).then((res) => res.json());

// // // same slug helper (must match archive)
// // const makeSlug = (text: string) =>
// //   text
// //     .toLowerCase()
// //     .trim()
// //     .replace(/[^a-z0-9\s-]/g, "")
// //     .replace(/\s+/g, "-");

// // export default function BlogDetailsPage() {
// //   const { slug } = useParams(); // 👈 slug instead of id

// //   const { data, error } = useSWR(
// //     "https://gba.mig.org.pk/api/news",
// //     fetcher
// //   );

// //   if (error) return <p>Error loading blog</p>;
// //   if (!data) return <p>Loading...</p>;

// //   const blogs = Array.isArray(data?.data) ? data.data : [];

// //   // 🔍 find blog by slug
// //   const blog = blogs.find(
// //     (item: any) => makeSlug(item.title) === slug
// //   );

// //   if (!blog) return <p>Blog not found</p>;

// //   return (
// //     <div className="container" style={{ padding: "80px 0" }}>
// //       <h1>{blog.title}</h1>

// //       <p style={{ color: "#777", marginBottom: "20px" }}>
// //         {blog.created_at} | {blog.category}
// //       </p>

// //       <img
// //         src={blog.image}
// //         alt={blog.title}
// //         style={{
// //           width: "100%",
// //           maxHeight: "450px",
// //           objectFit: "cover",
// //           marginBottom: "30px",
// //         }}
// //       />

// //       <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
// //         {blog.description}
// //       </p>
// //     </div>
// //   );
// // }


// "use client";

// import { useParams } from "next/navigation";
// import useSWR from "swr";

// const fetcher = (url: string) =>
//   fetch(url).then((res) => res.json());

// const makeSlug = (text: string) =>
//   text
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, "-");

// export default function BlogDetailsPage() {
//   const { slug } = useParams(); // 👈 slug from URL

//   // 🔹 Fetch ALL blogs (backend unchanged)
//   const { data, error } = useSWR(
//     "https://gba.mig.org.pk/api/news",
//     fetcher
//   );

//   if (error) return <p>Error loading blog</p>;
//   if (!data) return <p>Loading...</p>;

//   const posts = Array.isArray(data?.data) ? data.data : [];

//   // 🔍 Match slug with title
//   const blog = posts.find(
//     (item: any) => makeSlug(item.title) === slug
//   );

//   if (!blog) return <p>Blog not found</p>;

//   return (
//     <div className="container" style={{ padding: "80px 0" }}>
//       <h1>{blog.title}</h1>

//       <p style={{ color: "#777", marginBottom: "20px" }}>
//         {blog.created_at} | {blog.category}
//       </p>

//       <img
//         src={blog.image}
//         alt={blog.title}
//         style={{
//           width: "100%",
//           maxHeight: "450px",
//           objectFit: "cover",
//           marginBottom: "30px",
//         }}
//       />

//       <p style={{ fontSize: "16px", lineHeight: "1.7" }}>
//         {blog.description}
//       </p>
//     </div>
//   );
// }


"use client";

import { useParams } from "next/navigation";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json());

const makeSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export default function BlogDetailsPage() {
  const { id } = useParams(); // 👈 THIS IS THE FIX

  const { data, error } = useSWR(
    "https://gba.mig.org.pk/api/news",
    fetcher
  );

  if (error) return <p>Error loading blog</p>;
  if (!data) return <p>Loading...</p>;

  const posts = Array.isArray(data?.data) ? data.data : [];

  // 🔍 Match slug from URL with title
  const blog = posts.find(
    (item: any) => makeSlug(item.title) === id
  );

  if (!blog) return <p>Blog not found</p>;

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
