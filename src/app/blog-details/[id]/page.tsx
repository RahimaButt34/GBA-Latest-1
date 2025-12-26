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
//   const { id } = useParams(); // 👈 THIS IS THE FIX

//   const { data, error } = useSWR(
//     "https://gba.mig.org.pk/api/news",
//     fetcher
//   );

//   if (error) return <p>Error loading blog</p>;
//   if (!data) return <p>Loading...</p>;

//   const posts = Array.isArray(data?.data) ? data.data : [];

//   // 🔍 Match slug from URL with title
//   const blog = posts.find(
//     (item: any) => makeSlug(item.title) === id
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
import Link from "next/link";

const fetcher = (url: string) =>
  fetch(url).then((res) => res.json());

const makeSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

export default function BlogDetailsPage() {
  const { id } = useParams();

  const { data, error } = useSWR(
    "https://gba.mig.org.pk/api/news",
    fetcher
  );

  if (error) return <div className="error-container">Error loading blog</div>;
  if (!data) return <div className="loading-container">Loading...</div>;

  const posts = Array.isArray(data?.data) ? data.data : [];

  const blog = posts.find(
    (item: any) => makeSlug(item.title) === id
  );

  if (!blog) return <div className="not-found-container">Blog not found</div>;

  return (
    <main className="blog-details-wrapper">
      {/* 🔹 Breadcrumb/Top Bar */}
      <div className="breadcrumb-area">
        <div className="container">
          <Link href="/archive" className="back-btn">
            <i className="far fa-arrow-left"></i> Back to News
          </Link>
        </div>
      </div>

      <div className="container blog-content-container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* 🔹 Header Section */}
            <header className="blog-header">
              <span className="category-badge">{blog.category}</span>
              <h1 className="main-title">{blog.title}</h1>
              <div className="meta-info">
                <span className="meta-item">
                  <i className="far fa-calendar-alt"></i> {blog.created_at}
                </span>
                <span className="meta-item">
                  <i className="far fa-user"></i> By Admin
                </span>
              </div>
            </header>

            {/* 🔹 Featured Image */}
            <div className="featured-image-wrapper">
              <img
                src={blog.image || "/images/placeholder.jpg"}
                alt={blog.title}
                className="featured-image"
              />
            </div>

            {/* 🔹 Article Body */}
            <article className="blog-article">
              <div className="article-content">
                {blog.description}
              </div>
            </article>
          </div>
        </div>
      </div>

      {/* 🔹 Custom CSS for Presentation */}
      <style jsx>{`
        .blog-details-wrapper {
          padding-bottom: 100px;
          background: #ffffff;
        }
        .breadcrumb-area {
          padding: 30px 0;
          border-bottom: 1px solid #eee;
          margin-bottom: 50px;
        }
        .back-btn {
          color: #394347;
          font-weight: 600;
          text-decoration: none;
          transition: 0.3s;
        }
        .back-btn:hover {
          color: #007bff;
        }
        .category-badge {
          background: #f0f4f7;
          color: #007bff;
          padding: 6px 16px;
          border-radius: 50px;
          font-size: 14px;
          font-weight: 600;
          display: inline-block;
          margin-bottom: 20px;
        }
        .main-title {
          font-size: 42px;
          line-height: 1.2;
          font-weight: 700;
          color: #1c2428;
          margin-bottom: 20px;
        }
        .meta-info {
          display: flex;
          gap: 25px;
          color: #777;
          font-size: 15px;
          margin-bottom: 40px;
          border-bottom: 1px solid #eee;
          padding-bottom: 20px;
        }
        .meta-item i {
          margin-right: 8px;
          color: #007bff;
        }
        .featured-image-wrapper {
          width: 100%;
          border-radius: 12px;
          overflow: hidden;
          margin-bottom: 40px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.05);
        }
        .featured-image {
          width: 100%;
          height: auto;
          max-height: 550px;
          object-fit: cover;
          display: block;
        }
        .article-content {
          font-size: 18px;
          line-height: 1.8;
          color: #444;
          white-space: pre-line; /* Preserves line breaks from API */
        }
        .loading-container, .error-container, .not-found-container {
          padding: 100px 0;
          text-align: center;
          font-size: 20px;
          color: #777;
        }

        @media (max-width: 768px) {
          .main-title { font-size: 28px; }
          .article-content { font-size: 16px; }
        }
      `}</style>
    </main>
  );
}