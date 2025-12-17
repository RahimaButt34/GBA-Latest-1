// // "use client";
// // import React from "react";
// // import blogData from "../Data/ArchivesData.json";

// // interface Breadcrumb {
// //   bgTitle: string;
// //   title: string;
// //   description: string;
// //   shapes: string[];
// // }

// // interface Post {
// //   thumbnail: string;
// //   date: string;
// //   category: string;
// //   title: string;
// //   description: string;
// //   link: string;
// //   delay: number;
// // }

// // interface RecentPost {
// //   thumbnail: string;
// //   date: string;
// //   title: string;
// //   link: string;
// // }

// // interface Widgets {
// //   categories: string[];
// //   recentPosts: RecentPost[];
// //   tags: string[];
// //   contactWidget: {
// //     logo: string;
// //     title: string;
// //     buttonText: string;
// //     link: string;
// //   };
// // }

// // interface BlogContent {
// //   breadcrumb: Breadcrumb;
// //   posts: Post[];
// //   pagination: string[];
// //   widgets: Widgets;
// // }

// // const BlogArchive = () => {
// //   const data: BlogContent = blogData as BlogContent;

// //   return (
// //     <>
// //       {/* Breadcrumb */}
// //       <div className="rts-breadcrumb-area">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="title-area-left center mt-dec-blog-bread">
// //                 <span className="bg-title">{data.breadcrumb.bgTitle}</span>
// //                 <h1 className="title rts-text-anime-style-1">{data.breadcrumb.title}</h1>
// //                 <p className="disc">{data.breadcrumb.description}</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="shape-area">
// //           {data.breadcrumb.shapes.map((shape, i) => (
// //             <img key={i} src={shape} alt="shape" className={["one", "two", "three"][i]} />
// //           ))}
// //         </div>
// //       </div>

// //       {/* Blog Posts */}
// //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// //         <div className="container">
// //           <div className="row g-5">
// //             {/* Blog list */}
// //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// //               {data.posts.map((post, i) => (
// //                 <div key={i} className="blog-single-post-listing" data-animation="fadeInUp" data-delay={post.delay}>
// //                   <div className="thumbnail">
// //                     <img src={post.thumbnail} alt="Business-Blog" />
// //                   </div>
// //                   <div className="blog-listing-content">
// //                     <div className="user-info">
// //                       <div className="single"><i className="far fa-clock"></i><span>{post.date}</span></div>
// //                       <div className="single"><i className="far fa-tags"></i><span>{post.category}</span></div>
// //                     </div>
// //                     <a className="blog-title" href={post.link}>
// //                       <h3 className="title animated fadeIn">{post.title}</h3>
// //                     </a>
// //                     <p className="disc">{post.description}</p>
// //                     <a className="rts-btn btn-primary" href={post.link}>Read Details</a>
// //                   </div>
// //                 </div>
// //               ))}

// //               {/* Pagination */}
// //               <div className="row">
// //                 <div className="col-12">
// //                   <div className="text-center">
// //                     <div className="pagination">
// //                       {data.pagination.map((page, idx) => (
// //                         <button key={idx} className={idx === 0 ? "active" : ""}>{page}</button>
// //                       ))}
// //                       <button><i className="fal fa-angle-double-right"></i></button>
// //                     </div>
// //                   </div>
// //                 </div>
// //               </div>
// //             </div>

// //             {/* Widgets */}
// //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// //               {/* Categories */}
// //               <div className="rts-single-wized Categories">
// //                 <div className="wized-header"><h5 className="title">Categories</h5></div>
// //                 <div className="wized-body">
// //                   {data.widgets.categories.map((cat, idx) => (
// //                     <ul key={idx} className="single-categories">
// //                       <li><a href="#">{cat} <i className="far fa-long-arrow-right"></i></a></li>
// //                     </ul>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Recent Posts */}
// //               <div className="rts-single-wized Recent-post">
// //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// //                 <div className="wized-body">
// //                   {data.widgets.recentPosts.map((post, idx) => (
// //                     <div key={idx} className="recent-post-single">
// //                       <div className="thumbnail"><a href={post.link}><img src={post.thumbnail} alt="Blog_post" /></a></div>
// //                       <div className="content-area">
// //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// //                         <a className="post-title" href={post.link}><h6 className="title">{post.title}</h6></a>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               {/* Tags */}
// //               <div className="rts-single-wized tags">
// //                 <div className="wized-header"><h5 className="title">Popular Tags</h5></div>
// //                 <div className="wized-body">
// //                   <div className="tags-wrapper">
// //                     {data.widgets.tags.map((tag, idx) => <a key={idx} href="#">{tag}</a>)}
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Contact Widget */}
// //               <div className="rts-single-wized contact">
// //                 <div className="wized-header"><a href="#"><img src={data.widgets.contactWidget.logo} alt="Business_logo" /></a></div>
// //                 <div className="wized-body">
// //                   <h5 className="title">{data.widgets.contactWidget.title}</h5>
// //                   <a className="rts-btn btn-primary btn-white" href={data.widgets.contactWidget.link}>{data.widgets.contactWidget.buttonText}</a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // };

// // export default BlogArchive;



// "use client";
// import React from "react";
// import blogData from "../Data/ArchivesData.json";

// interface Breadcrumb {
//   bgTitle: string;
//   title: string;
//   description: string;
//   shapes: string[];
// }

// interface Post {
//   thumbnail: string;
//   date: string;
//   category: string;
//   title: string;
//   description: string;
//   link: string;
//   delay: number;
// }

// interface RecentPost {
//   thumbnail: string;
//   date: string;
//   title: string;
//   link: string;
// }

// interface Widgets {
//   categories: string[];
//   recentPosts: RecentPost[];
//   tags: string[];
//   contactWidget: {
//     logo: string;
//     title: string;
//     buttonText: string;
//     link: string;
//   };
// }

// interface BlogContent {
//   breadcrumb: Breadcrumb;
//   posts: Post[];
//   pagination: string[];
//   widgets: Widgets;
// }

// const BlogArchive = () => {
//   const data: BlogContent = blogData as BlogContent;

//   return (
//     <>
//       {/* Breadcrumb */}
//       <div className="rts-breadcrumb-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left center mt-dec-blog-bread">
//                 <span className="bg-title">{data.breadcrumb.bgTitle}</span>
//                 <h1 className="title rts-text-anime-style-1">{data.breadcrumb.title}</h1>
//                 <p className="disc">{data.breadcrumb.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="shape-area">
//           {data.breadcrumb.shapes.map((shape, i) => (
//             <img key={i} src={shape} alt="shape" className={["one", "two", "three"][i]} />
//           ))}
//         </div>
//       </div>

//       {/* Blog Posts */}
//       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
//         <div className="container">
//           <div className="row g-5">
//             {/* Blog list */}
//             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
//               {data.posts.map((post, i) => (
//                 <div
//                   key={i}
//                   className="blog-single-post-listing"
//                   data-animation="fadeInUp"
//                   data-delay={post.delay}
//                 >
//                   <div className="thumbnail">
//                     <img src={post.thumbnail} alt="Business-Blog" />
//                   </div>
//                   <div className="blog-listing-content">
//                     <div className="user-info">
//                       <div className="single"><i className="far fa-clock"></i><span>{post.date}</span></div>
//                       <div className="single"><i className="far fa-tags"></i><span>{post.category}</span></div>
//                     </div>
//                     <a className="blog-title" href={post.link}>
//                       <h3 className="title animated fadeIn">{post.title}</h3>
//                     </a>
//                     <p className="disc animated fadeIn">{post.description}</p>
//                 <a
//   className="rts-btn btn-primary animated fadeIn"
//   href={post.link}
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Read Details
// </a>

//                   </div>
//                 </div>
//               ))}

//               {/* Pagination */}
//               <div className="row">
//                 <div className="col-12">
//                   <div className="text-center">
//                     <div className="pagination">
//                       {data.pagination.map((page, idx) => (
//                         <button key={idx} className={idx === 0 ? "active" : ""}>{page}</button>
//                       ))}
//                       <button><i className="fal fa-angle-double-right"></i></button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Widgets */}
//             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
//               {/* Categories */}
//               <div className="rts-single-wized Categories" data-animation="fadeInUp" data-delay="0.2">
//                 <div className="wized-header"><h5 className="title">Categories</h5></div>
//                 <div className="wized-body">
//                   {data.widgets.categories.map((cat, idx) => (
//                     <ul key={idx} className="single-categories">
//                       <li><a href="#">{cat} <i className="far fa-long-arrow-right"></i></a></li>
//                     </ul>
//                   ))}
//                 </div>
//               </div>

//               {/* Recent Posts */}
//               <div className="rts-single-wized Recent-post" data-animation="fadeInUp" data-delay="0.3">
//                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
//                 <div className="wized-body">
//                   {data.widgets.recentPosts.map((post, idx) => (
//                     <div key={idx} className="recent-post-single" data-animation="fadeInUp" data-delay={0.2 + idx * 0.1}>
//                       <div className="thumbnail"><a href={post.link}><img src={post.thumbnail} alt="Blog_post" /></a></div>
//                       <div className="content-area">
//                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
//                         <a className="post-title" href={post.link}><h6 className="title animated fadeIn">{post.title}</h6></a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Tags */}
//               <div className="rts-single-wized tags" data-animation="fadeInUp" data-delay="0.4">
//                 <div className="wized-header"><h5 className="title">Popular Tags</h5></div>
//                 <div className="wized-body">
//                   <div className="tags-wrapper">
//                     {data.widgets.tags.map((tag, idx) => <a key={idx} href="#" className="animated fadeIn">{tag}</a>)}
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Widget */}
//               <div className="rts-single-wized contact" data-animation="fadeInUp" data-delay="0.5">
//                 <div className="wized-header"><a href="#"><img src={data.widgets.contactWidget.logo} alt="Business_logo" /></a></div>
//                 <div className="wized-body">
//                   <h5 className="title animated fadeIn">{data.widgets.contactWidget.title}</h5>
//                   <a className="rts-btn btn-primary btn-white animated fadeIn" href={data.widgets.contactWidget.link}>
//                     {data.widgets.contactWidget.buttonText}
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogArchive;




// "use client";
// import React from "react";
// import useSWR from "swr";
// import Link from "next/link"; 


// interface Breadcrumb {
//   bgTitle: string;
//   title: string;
//   description: string;
//   shapes: string[];
// }

// interface Post {
//   thumbnail: string;
//   date: string;
//   category: string;
//   title: string;
//   description: string;
//   link: string;
//   delay: number;
// }

// interface RecentPost {
//   thumbnail: string;
//   date: string;
//   title: string;
//   link: string;
// }

// interface Widgets {
//   categories: string[];
//   recentPosts: RecentPost[];
//   tags: string[];
//   contactWidget: {
//     logo: string;
//     title: string;
//     buttonText: string;
//     link: string;
//   };
// }

// interface BlogContent {
//   breadcrumb: Breadcrumb;
//   posts: Post[];
//   pagination: string[];
//   widgets: Widgets;
// }

// // ---------------- FETCHER ----------------
// const fetcher = (url: string) =>
//   fetch(url).then((res) => res.json());

// // ---------------- COMPONENT ---------------
// const BlogArchive = () => {
//   const { data, error } = useSWR(
//     "https://gba.mig.org.pk/api/news",
//     fetcher
//   );

//   if (error) return <p>Failed to load data</p>;
//   if (!data) return <p>Loading...</p>;

//   // ------------ MAP LARAVEL API -> FRONTEND STRUCTURE ------------
//   const apiPosts = data.data;

//   const mappedData: BlogContent = {
//     breadcrumb: {
//       bgTitle: "News",
//       title: "Latest Updates",
//       description: "GBC official announcements & activities",
//       shapes: ["images/about/shape/01.png", "images/about/shape/02.png", "images/about/shape/03.png"],
//     },

//     posts: apiPosts.map((item: any, index: number) => ({
//       thumbnail: item.image,
//       date: item.created_at,
//       category: item.category,
//       title: item.title,
//       description: item.description.substring(0, 250) + "...",
//     //   link: `/news/${item.id}`,
//     link: `/blog-details/${item.id}`,
//       delay: 0.2 * index,
//     })),

//     pagination: [
//       data.pagination.current_page.toString(),
//       (data.pagination.current_page + 1).toString(),
//     ],

//     widgets: {
//       categories: [...new Set(apiPosts.map((item: any) => item.category))],

//       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
//         thumbnail: item.image,
//         date: item.created_at,
//         title: item.title,
//         // link: `/news/${item.id}`,
//         link: `/blog-details/${item.id}`, // ✅ ONLY CHANGE

//       })),

//       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

//       contactWidget: {
//         logo: "/images/logo/01.svg",
//         title: "Need Help?",
//         buttonText: "Contact Us",
//         link: "/contact",
//       },
//     },
//   };

//   const content = mappedData;

//   // ---------------- RENDER UI (unchanged) ----------------
//   return (
//     <>
//       {/* Breadcrumb */}
//       <div className="rts-breadcrumb-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left center mt-dec-blog-bread">
//                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
//                 <h1 className="title rts-text-anime-style-1">{content.breadcrumb.title}</h1>
//                 <p className="disc">{content.breadcrumb.description}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="shape-area">
//           {content.breadcrumb.shapes.map((shape, i) => (
//             <img key={i} src={shape} alt="shape" className={["one", "two", "three"][i]} />
//           ))}
//         </div>
//       </div>

//       {/* Blog Posts */}
//       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
//         <div className="container">
//           <div className="row g-5">
//             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
//               {content.posts.map((post, i) => (
//                 <div key={i} className="blog-single-post-listing" data-animation="fadeInUp" data-delay={post.delay}>
//                   <div className="thumbnail">
//                     <img src={post.thumbnail} alt="Business-Blog" />
//                   </div>

//                   <div className="blog-listing-content">
//                     <div className="user-info">
//                       <div className="single"><i className="far fa-clock"></i><span>{post.date}</span></div>
//                       <div className="single"><i className="far fa-tags"></i><span>{post.category}</span></div>
//                     </div>

//                     {/* <a className="blog-title" href={post.link}>
//                       <h3 className="title animated fadeIn">{post.title}</h3>
//                     </a> */}

//                          <Link className="blog-title" href={post.link}>
//                       <h3 className="title">{post.title}</h3>
//                     </Link>


//                     <p className="disc animated fadeIn">{post.description}</p>

//                     {/* <a className="rts-btn btn-primary animated fadeIn" href={post.link} target="_blank" rel="noopener noreferrer">
//                       Read Details
//                     </a> */}

//                          <Link className="rts-btn btn-primary" href={post.link}>
//                       Read Details
//                     </Link>

//                   </div>
//                 </div>
//               ))}

//               {/* Pagination */}
//               <div className="row">
//                 <div className="col-12">
//                   <div className="text-center">
//                     <div className="pagination">
//                       {content.pagination.map((page, idx) => (
//                         <button key={idx} className={idx === 0 ? "active" : ""}>{page}</button>
//                       ))}
//                       <button><i className="fal fa-angle-double-right"></i></button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Widgets */}
//             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
//               {/* Categories */}
//               <div className="rts-single-wized Categories">
//                 <div className="wized-header"><h5 className="title">Categories</h5></div>
//                 <div className="wized-body">
//                   {content.widgets.categories.map((cat, idx) => (
//                     <ul key={idx} className="single-categories">
//                       <li><a href="#">{cat} <i className="far fa-long-arrow-right"></i></a></li>
//                     </ul>
//                   ))}
//                 </div>
//               </div>

//               {/* Recent Posts */}
//               <div className="rts-single-wized Recent-post">
//                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
//                 <div className="wized-body">
//                   {content.widgets.recentPosts.map((post, idx) => (
//                     <div key={idx} className="recent-post-single">
//                       <div className="thumbnail"><a href={post.link}><img src={post.thumbnail} alt="Blog_post" /></a></div>
//                       <div className="content-area">
//                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
//                         <a className="post-title" href={post.link}><h6 className="title">{post.title}</h6></a>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Tags */}
//               <div className="rts-single-wized tags">
//                 <div className="wized-header"><h5 className="title">Popular Tags</h5></div>
//                 <div className="wized-body">
//                   <div className="tags-wrapper">
//                     {content.widgets.tags.map((tag, idx) => <a key={idx} href="#">{tag}</a>)}
//                   </div>
//                 </div>
//               </div>

//               {/* Contact Widget */}
//               <div className="rts-single-wized contact">
//                 <div className="wized-header"><a href="#"><img src={content.widgets.contactWidget.logo} alt="Business_logo" /></a></div>
//                 <div className="wized-body">
//                   <h5 className="title">{content.widgets.contactWidget.title}</h5>
//                   <a className="rts-btn btn-primary btn-white" href={content.widgets.contactWidget.link}>
//                     {content.widgets.contactWidget.buttonText}
//                   </a>
//                 </div>
//               </div>

//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogArchive;

"use client";
import React from "react";
import useSWR from "swr";
import Link from "next/link";

interface Breadcrumb {
  bgTitle: string;
  title: string;
  description: string;
  shapes: string[];
}

interface Post {
  thumbnail: string;
  date: string;
  category: string;
  title: string;
  description: string;
  link: string;
  delay: number;
}

interface RecentPost {
  thumbnail: string;
  date: string;
  title: string;
  link: string;
}

interface Widgets {
  categories: string[];
  recentPosts: RecentPost[];
  tags: string[];
  contactWidget: {
    logo: string;
    title: string;
    buttonText: string;
    link: string;
  };
}

interface BlogContent {
  breadcrumb: Breadcrumb;
  posts: Post[];
  pagination: string[];
  widgets: Widgets;
}

// ---------------- FETCHER ----------------
const fetcher = (url: string) =>
  fetch(url).then((res) => res.json());

// ---------------- COMPONENT ---------------
const BlogArchive = () => {
  const { data, error } = useSWR(
    "https://gba.mig.org.pk/api/news",
    fetcher
  );

  if (error) return <p>Failed to load data</p>;
  if (!data) return <p>Loading...</p>;

  const apiPosts: any[] = data.data ?? [];

  const mappedData: BlogContent = {
    breadcrumb: {
      bgTitle: "News",
      title: "Latest Updates",
      description: "GBC official announcements & activities",
      shapes: [
        "images/about/shape/01.png",
        "images/about/shape/02.png",
        "images/about/shape/03.png",
      ],
    },

    posts: apiPosts.map((item: any, index: number) => ({
      thumbnail: item.image,
      date: item.created_at,
      category: String(item.category),
      title: item.title,
      description: item.description.substring(0, 250) + "...",
      link: `/blog-details/${item.id}`,
      delay: 0.2 * index,
    })),

    pagination: [
      String(data.pagination?.current_page ?? 1),
      String((data.pagination?.current_page ?? 1) + 1),
    ],

    widgets: {
      // ✅ FIXED LINE (TYPE SAFE)
      categories: Array.from(
        new Set(apiPosts.map((item: any) => String(item.category)))
      ),

      recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
        thumbnail: item.image,
        date: item.created_at,
        title: item.title,
        link: `/blog-details/${item.id}`,
      })),

      tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

      contactWidget: {
        logo: "/images/logo/01.svg",
        title: "Need Help?",
        buttonText: "Contact Us",
        link: "/contact",
      },
    },
  };

  const content = mappedData;

  return (
    <>
      {/* Breadcrumb */}
      <div className="rts-breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left center mt-dec-blog-bread">
                <span className="bg-title">{content.breadcrumb.bgTitle}</span>
                <h1 className="title rts-text-anime-style-1">
                  {content.breadcrumb.title}
                </h1>
                <p className="disc">{content.breadcrumb.description}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-area">
          {content.breadcrumb.shapes.map((shape, i) => (
            <img
              key={i}
              src={shape}
              alt="shape"
              className={["one", "two", "three"][i]}
            />
          ))}
        </div>
      </div>

      {/* Blog Posts */}
      <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {content.posts.map((post, i) => (
                <div
                  key={i}
                  className="blog-single-post-listing"
                  data-animation="fadeInUp"
                  data-delay={post.delay}
                >
                  <div className="thumbnail">
                    <img src={post.thumbnail} alt="Business-Blog" />
                  </div>

                  <div className="blog-listing-content">
                    <div className="user-info">
                      <div className="single">
                        <i className="far fa-clock"></i>
                        <span>{post.date}</span>
                      </div>
                      <div className="single">
                        <i className="far fa-tags"></i>
                        <span>{post.category}</span>
                      </div>
                    </div>

                    <Link className="blog-title" href={post.link}>
                      <h3 className="title">{post.title}</h3>
                    </Link>

                    <p className="disc">{post.description}</p>

                    <Link className="rts-btn btn-primary" href={post.link}>
                      Read Details
                    </Link>
                  </div>
                </div>
              ))}

              {/* Pagination */}
              <div className="row">
                <div className="col-12">
                  <div className="text-center">
                    <div className="pagination">
                      {content.pagination.map((page, idx) => (
                        <button
                          key={idx}
                          className={idx === 0 ? "active" : ""}
                        >
                          {page}
                        </button>
                      ))}
                      <button>
                        <i className="fal fa-angle-double-right"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Widgets */}
            <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
              {/* Categories */}
              <div className="rts-single-wized Categories">
                <div className="wized-header">
                  <h5 className="title">Categories</h5>
                </div>
                <div className="wized-body">
                  {content.widgets.categories.map((cat, idx) => (
                    <ul key={idx} className="single-categories">
                      <li>
                        <a href="#">
                          {cat} <i className="far fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>

              {/* Recent Posts */}
              <div className="rts-single-wized Recent-post">
                <div className="wized-header">
                  <h5 className="title">Recent Posts</h5>
                </div>
                <div className="wized-body">
                  {content.widgets.recentPosts.map((post, idx) => (
                    <div key={idx} className="recent-post-single">
                      <div className="thumbnail">
                        <a href={post.link}>
                          <img src={post.thumbnail} alt="Blog_post" />
                        </a>
                      </div>
                      <div className="content-area">
                        <div className="user">
                          <i className="fal fa-clock"></i>
                          <span>{post.date}</span>
                        </div>
                        <a className="post-title" href={post.link}>
                          <h6 className="title">{post.title}</h6>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="rts-single-wized tags">
                <div className="wized-header">
                  <h5 className="title">Popular Tags</h5>
                </div>
                <div className="wized-body">
                  <div className="tags-wrapper">
                    {content.widgets.tags.map((tag, idx) => (
                      <a key={idx} href="#">
                        {tag}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Widget */}
              <div className="rts-single-wized contact">
                <div className="wized-header">
                  <a href="#">
                    <img
                      src={content.widgets.contactWidget.logo}
                      alt="Business_logo"
                    />
                  </a>
                </div>
                <div className="wized-body">
                  <h5 className="title">
                    {content.widgets.contactWidget.title}
                  </h5>
                  <a
                    className="rts-btn btn-primary btn-white"
                    href={content.widgets.contactWidget.link}
                  >
                    {content.widgets.contactWidget.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArchive;
