// // // // // // // // // // // // // "use client";
// // // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // // import blogData from "../Data/ArchivesData.json";

// // // // // // // // // // // // // interface Breadcrumb {
// // // // // // // // // // // // //   bgTitle: string;
// // // // // // // // // // // // //   title: string;
// // // // // // // // // // // // //   description: string;
// // // // // // // // // // // // //   shapes: string[];
// // // // // // // // // // // // // }

// // // // // // // // // // // // // interface Post {
// // // // // // // // // // // // //   thumbnail: string;
// // // // // // // // // // // // //   date: string;
// // // // // // // // // // // // //   category: string;
// // // // // // // // // // // // //   title: string;
// // // // // // // // // // // // //   description: string;
// // // // // // // // // // // // //   link: string;
// // // // // // // // // // // // //   delay: number;
// // // // // // // // // // // // // }

// // // // // // // // // // // // // interface RecentPost {
// // // // // // // // // // // // //   thumbnail: string;
// // // // // // // // // // // // //   date: string;
// // // // // // // // // // // // //   title: string;
// // // // // // // // // // // // //   link: string;
// // // // // // // // // // // // // }

// // // // // // // // // // // // // interface Widgets {
// // // // // // // // // // // // //   categories: string[];
// // // // // // // // // // // // //   recentPosts: RecentPost[];
// // // // // // // // // // // // //   tags: string[];
// // // // // // // // // // // // //   contactWidget: {
// // // // // // // // // // // // //     logo: string;
// // // // // // // // // // // // //     title: string;
// // // // // // // // // // // // //     buttonText: string;
// // // // // // // // // // // // //     link: string;
// // // // // // // // // // // // //   };
// // // // // // // // // // // // // }

// // // // // // // // // // // // // interface BlogContent {
// // // // // // // // // // // // //   breadcrumb: Breadcrumb;
// // // // // // // // // // // // //   posts: Post[];
// // // // // // // // // // // // //   pagination: string[];
// // // // // // // // // // // // //   widgets: Widgets;
// // // // // // // // // // // // // }

// // // // // // // // // // // // // const BlogArchive = () => {
// // // // // // // // // // // // //   const data: BlogContent = blogData as BlogContent;

// // // // // // // // // // // // //   return (
// // // // // // // // // // // // //     <>
// // // // // // // // // // // // //       {/* Breadcrumb */}
// // // // // // // // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // // // // // // // //         <div className="container">
// // // // // // // // // // // // //           <div className="row">
// // // // // // // // // // // // //             <div className="col-lg-12">
// // // // // // // // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // // // // // // // //                 <span className="bg-title">{data.breadcrumb.bgTitle}</span>
// // // // // // // // // // // // //                 <h1 className="title rts-text-anime-style-1">{data.breadcrumb.title}</h1>
// // // // // // // // // // // // //                 <p className="disc">{data.breadcrumb.description}</p>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //         <div className="shape-area">
// // // // // // // // // // // // //           {data.breadcrumb.shapes.map((shape, i) => (
// // // // // // // // // // // // //             <img key={i} src={shape} alt="shape" className={["one", "two", "three"][i]} />
// // // // // // // // // // // // //           ))}
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>

// // // // // // // // // // // // //       {/* Blog Posts */}
// // // // // // // // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // // // // // // // //         <div className="container">
// // // // // // // // // // // // //           <div className="row g-5">
// // // // // // // // // // // // //             {/* Blog list */}
// // // // // // // // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // // // // // // // //               {data.posts.map((post, i) => (
// // // // // // // // // // // // //                 <div key={i} className="blog-single-post-listing" data-animation="fadeInUp" data-delay={post.delay}>
// // // // // // // // // // // // //                   <div className="thumbnail">
// // // // // // // // // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                   <div className="blog-listing-content">
// // // // // // // // // // // // //                     <div className="user-info">
// // // // // // // // // // // // //                       <div className="single"><i className="far fa-clock"></i><span>{post.date}</span></div>
// // // // // // // // // // // // //                       <div className="single"><i className="far fa-tags"></i><span>{post.category}</span></div>
// // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // //                     <a className="blog-title" href={post.link}>
// // // // // // // // // // // // //                       <h3 className="title animated fadeIn">{post.title}</h3>
// // // // // // // // // // // // //                     </a>
// // // // // // // // // // // // //                     <p className="disc">{post.description}</p>
// // // // // // // // // // // // //                     <a className="rts-btn btn-primary" href={post.link}>Read Details</a>
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               ))}

// // // // // // // // // // // // //               {/* Pagination */}
// // // // // // // // // // // // //               <div className="row">
// // // // // // // // // // // // //                 <div className="col-12">
// // // // // // // // // // // // //                   <div className="text-center">
// // // // // // // // // // // // //                     <div className="pagination">
// // // // // // // // // // // // //                       {data.pagination.map((page, idx) => (
// // // // // // // // // // // // //                         <button key={idx} className={idx === 0 ? "active" : ""}>{page}</button>
// // // // // // // // // // // // //                       ))}
// // // // // // // // // // // // //                       <button><i className="fal fa-angle-double-right"></i></button>
// // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </div>

// // // // // // // // // // // // //             {/* Widgets */}
// // // // // // // // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // // // // // // // //               {/* Categories */}
// // // // // // // // // // // // //               <div className="rts-single-wized Categories">
// // // // // // // // // // // // //                 <div className="wized-header"><h5 className="title">Categories</h5></div>
// // // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // // //                   {data.widgets.categories.map((cat, idx) => (
// // // // // // // // // // // // //                     <ul key={idx} className="single-categories">
// // // // // // // // // // // // //                       <li><a href="#">{cat} <i className="far fa-long-arrow-right"></i></a></li>
// // // // // // // // // // // // //                     </ul>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               {/* Recent Posts */}
// // // // // // // // // // // // //               <div className="rts-single-wized Recent-post">
// // // // // // // // // // // // //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// // // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // // //                   {data.widgets.recentPosts.map((post, idx) => (
// // // // // // // // // // // // //                     <div key={idx} className="recent-post-single">
// // // // // // // // // // // // //                       <div className="thumbnail"><a href={post.link}><img src={post.thumbnail} alt="Blog_post" /></a></div>
// // // // // // // // // // // // //                       <div className="content-area">
// // // // // // // // // // // // //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// // // // // // // // // // // // //                         <a className="post-title" href={post.link}><h6 className="title">{post.title}</h6></a>
// // // // // // // // // // // // //                       </div>
// // // // // // // // // // // // //                     </div>
// // // // // // // // // // // // //                   ))}
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               {/* Tags */}
// // // // // // // // // // // // //               <div className="rts-single-wized tags">
// // // // // // // // // // // // //                 <div className="wized-header"><h5 className="title">Popular Tags</h5></div>
// // // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // // //                   <div className="tags-wrapper">
// // // // // // // // // // // // //                     {data.widgets.tags.map((tag, idx) => <a key={idx} href="#">{tag}</a>)}
// // // // // // // // // // // // //                   </div>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </div>

// // // // // // // // // // // // //               {/* Contact Widget */}
// // // // // // // // // // // // //               <div className="rts-single-wized contact">
// // // // // // // // // // // // //                 <div className="wized-header"><a href="#"><img src={data.widgets.contactWidget.logo} alt="Business_logo" /></a></div>
// // // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // // //                   <h5 className="title">{data.widgets.contactWidget.title}</h5>
// // // // // // // // // // // // //                   <a className="rts-btn btn-primary btn-white" href={data.widgets.contactWidget.link}>{data.widgets.contactWidget.buttonText}</a>
// // // // // // // // // // // // //                 </div>
// // // // // // // // // // // // //               </div>
// // // // // // // // // // // // //             </div>
// // // // // // // // // // // // //           </div>
// // // // // // // // // // // // //         </div>
// // // // // // // // // // // // //       </div>
// // // // // // // // // // // // //     </>
// // // // // // // // // // // // //   );
// // // // // // // // // // // // // };

// // // // // // // // // // // // // export default BlogArchive;



// // // // // // // // // // // // "use client";
// // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // import blogData from "../Data/ArchivesData.json";

// // // // // // // // // // // // interface Breadcrumb {
// // // // // // // // // // // //   bgTitle: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   description: string;
// // // // // // // // // // // //   shapes: string[];
// // // // // // // // // // // // }

// // // // // // // // // // // // interface Post {
// // // // // // // // // // // //   thumbnail: string;
// // // // // // // // // // // //   date: string;
// // // // // // // // // // // //   category: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   description: string;
// // // // // // // // // // // //   link: string;
// // // // // // // // // // // //   delay: number;
// // // // // // // // // // // // }

// // // // // // // // // // // // interface RecentPost {
// // // // // // // // // // // //   thumbnail: string;
// // // // // // // // // // // //   date: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   link: string;
// // // // // // // // // // // // }

// // // // // // // // // // // // interface Widgets {
// // // // // // // // // // // //   categories: string[];
// // // // // // // // // // // //   recentPosts: RecentPost[];
// // // // // // // // // // // //   tags: string[];
// // // // // // // // // // // //   contactWidget: {
// // // // // // // // // // // //     logo: string;
// // // // // // // // // // // //     title: string;
// // // // // // // // // // // //     buttonText: string;
// // // // // // // // // // // //     link: string;
// // // // // // // // // // // //   };
// // // // // // // // // // // // }

// // // // // // // // // // // // interface BlogContent {
// // // // // // // // // // // //   breadcrumb: Breadcrumb;
// // // // // // // // // // // //   posts: Post[];
// // // // // // // // // // // //   pagination: string[];
// // // // // // // // // // // //   widgets: Widgets;
// // // // // // // // // // // // }

// // // // // // // // // // // // const BlogArchive = () => {
// // // // // // // // // // // //   const data: BlogContent = blogData as BlogContent;

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <>
// // // // // // // // // // // //       {/* Breadcrumb */}
// // // // // // // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // // // // // // //         <div className="container">
// // // // // // // // // // // //           <div className="row">
// // // // // // // // // // // //             <div className="col-lg-12">
// // // // // // // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // // // // // // //                 <span className="bg-title">{data.breadcrumb.bgTitle}</span>
// // // // // // // // // // // //                 <h1 className="title rts-text-anime-style-1">{data.breadcrumb.title}</h1>
// // // // // // // // // // // //                 <p className="disc">{data.breadcrumb.description}</p>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div className="shape-area">
// // // // // // // // // // // //           {data.breadcrumb.shapes.map((shape, i) => (
// // // // // // // // // // // //             <img key={i} src={shape} alt="shape" className={["one", "two", "three"][i]} />
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Blog Posts */}
// // // // // // // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // // // // // // //         <div className="container">
// // // // // // // // // // // //           <div className="row g-5">
// // // // // // // // // // // //             {/* Blog list */}
// // // // // // // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // // // // // // //               {data.posts.map((post, i) => (
// // // // // // // // // // // //                 <div
// // // // // // // // // // // //                   key={i}
// // // // // // // // // // // //                   className="blog-single-post-listing"
// // // // // // // // // // // //                   data-animation="fadeInUp"
// // // // // // // // // // // //                   data-delay={post.delay}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <div className="thumbnail">
// // // // // // // // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                   <div className="blog-listing-content">
// // // // // // // // // // // //                     <div className="user-info">
// // // // // // // // // // // //                       <div className="single"><i className="far fa-clock"></i><span>{post.date}</span></div>
// // // // // // // // // // // //                       <div className="single"><i className="far fa-tags"></i><span>{post.category}</span></div>
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                     <a className="blog-title" href={post.link}>
// // // // // // // // // // // //                       <h3 className="title animated fadeIn">{post.title}</h3>
// // // // // // // // // // // //                     </a>
// // // // // // // // // // // //                     <p className="disc animated fadeIn">{post.description}</p>
// // // // // // // // // // // //                 <a
// // // // // // // // // // // //   className="rts-btn btn-primary animated fadeIn"
// // // // // // // // // // // //   href={post.link}
// // // // // // // // // // // //   target="_blank"
// // // // // // // // // // // //   rel="noopener noreferrer"
// // // // // // // // // // // // >
// // // // // // // // // // // //   Read Details
// // // // // // // // // // // // </a>

// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               ))}

// // // // // // // // // // // //               {/* Pagination */}
// // // // // // // // // // // //               <div className="row">
// // // // // // // // // // // //                 <div className="col-12">
// // // // // // // // // // // //                   <div className="text-center">
// // // // // // // // // // // //                     <div className="pagination">
// // // // // // // // // // // //                       {data.pagination.map((page, idx) => (
// // // // // // // // // // // //                         <button key={idx} className={idx === 0 ? "active" : ""}>{page}</button>
// // // // // // // // // // // //                       ))}
// // // // // // // // // // // //                       <button><i className="fal fa-angle-double-right"></i></button>
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             {/* Widgets */}
// // // // // // // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // // // // // // //               {/* Categories */}
// // // // // // // // // // // //               <div className="rts-single-wized Categories" data-animation="fadeInUp" data-delay="0.2">
// // // // // // // // // // // //                 <div className="wized-header"><h5 className="title">Categories</h5></div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   {data.widgets.categories.map((cat, idx) => (
// // // // // // // // // // // //                     <ul key={idx} className="single-categories">
// // // // // // // // // // // //                       <li><a href="#">{cat} <i className="far fa-long-arrow-right"></i></a></li>
// // // // // // // // // // // //                     </ul>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               {/* Recent Posts */}
// // // // // // // // // // // //               <div className="rts-single-wized Recent-post" data-animation="fadeInUp" data-delay="0.3">
// // // // // // // // // // // //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   {data.widgets.recentPosts.map((post, idx) => (
// // // // // // // // // // // //                     <div key={idx} className="recent-post-single" data-animation="fadeInUp" data-delay={0.2 + idx * 0.1}>
// // // // // // // // // // // //                       <div className="thumbnail"><a href={post.link}><img src={post.thumbnail} alt="Blog_post" /></a></div>
// // // // // // // // // // // //                       <div className="content-area">
// // // // // // // // // // // //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// // // // // // // // // // // //                         <a className="post-title" href={post.link}><h6 className="title animated fadeIn">{post.title}</h6></a>
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               {/* Tags */}
// // // // // // // // // // // //               <div className="rts-single-wized tags" data-animation="fadeInUp" data-delay="0.4">
// // // // // // // // // // // //                 <div className="wized-header"><h5 className="title">Popular Tags</h5></div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   <div className="tags-wrapper">
// // // // // // // // // // // //                     {data.widgets.tags.map((tag, idx) => <a key={idx} href="#" className="animated fadeIn">{tag}</a>)}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               {/* Contact Widget */}
// // // // // // // // // // // //               <div className="rts-single-wized contact" data-animation="fadeInUp" data-delay="0.5">
// // // // // // // // // // // //                 <div className="wized-header"><a href="#"><img src={data.widgets.contactWidget.logo} alt="Business_logo" /></a></div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   <h5 className="title animated fadeIn">{data.widgets.contactWidget.title}</h5>
// // // // // // // // // // // //                   <a className="rts-btn btn-primary btn-white animated fadeIn" href={data.widgets.contactWidget.link}>
// // // // // // // // // // // //                     {data.widgets.contactWidget.buttonText}
// // // // // // // // // // // //                   </a>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default BlogArchive;




// // // // // // // // // // // // "use client";
// // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // import useSWR from "swr";
// // // // // // // // // // // // import Link from "next/link"; 


// // // // // // // // // // // // interface Breadcrumb {
// // // // // // // // // // // //   bgTitle: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   description: string;
// // // // // // // // // // // //   shapes: string[];
// // // // // // // // // // // // }

// // // // // // // // // // // // interface Post {
// // // // // // // // // // // //   thumbnail: string;
// // // // // // // // // // // //   date: string;
// // // // // // // // // // // //   category: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   description: string;
// // // // // // // // // // // //   link: string;
// // // // // // // // // // // //   delay: number;
// // // // // // // // // // // // }

// // // // // // // // // // // // interface RecentPost {
// // // // // // // // // // // //   thumbnail: string;
// // // // // // // // // // // //   date: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   link: string;
// // // // // // // // // // // // }

// // // // // // // // // // // // interface Widgets {
// // // // // // // // // // // //   categories: string[];
// // // // // // // // // // // //   recentPosts: RecentPost[];
// // // // // // // // // // // //   tags: string[];
// // // // // // // // // // // //   contactWidget: {
// // // // // // // // // // // //     logo: string;
// // // // // // // // // // // //     title: string;
// // // // // // // // // // // //     buttonText: string;
// // // // // // // // // // // //     link: string;
// // // // // // // // // // // //   };
// // // // // // // // // // // // }

// // // // // // // // // // // // interface BlogContent {
// // // // // // // // // // // //   breadcrumb: Breadcrumb;
// // // // // // // // // // // //   posts: Post[];
// // // // // // // // // // // //   pagination: string[];
// // // // // // // // // // // //   widgets: Widgets;
// // // // // // // // // // // // }

// // // // // // // // // // // // // ---------------- FETCHER ----------------
// // // // // // // // // // // // const fetcher = (url: string) =>
// // // // // // // // // // // //   fetch(url).then((res) => res.json());

// // // // // // // // // // // // // ---------------- COMPONENT ---------------
// // // // // // // // // // // // const BlogArchive = () => {
// // // // // // // // // // // //   const { data, error } = useSWR(
// // // // // // // // // // // //     "https://gba.mig.org.pk/api/news",
// // // // // // // // // // // //     fetcher
// // // // // // // // // // // //   );

// // // // // // // // // // // //   if (error) return <p>Failed to load data</p>;
// // // // // // // // // // // //   if (!data) return <p>Loading...</p>;

// // // // // // // // // // // //   // ------------ MAP LARAVEL API -> FRONTEND STRUCTURE ------------
// // // // // // // // // // // //   const apiPosts = data.data;

// // // // // // // // // // // //   const mappedData: BlogContent = {
// // // // // // // // // // // //     breadcrumb: {
// // // // // // // // // // // //       bgTitle: "News",
// // // // // // // // // // // //       title: "Latest Updates",
// // // // // // // // // // // //       description: "GBC official announcements & activities",
// // // // // // // // // // // //       shapes: ["images/about/shape/01.png", "images/about/shape/02.png", "images/about/shape/03.png"],
// // // // // // // // // // // //     },

// // // // // // // // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // // // // // // // //       thumbnail: item.image,
// // // // // // // // // // // //       date: item.created_at,
// // // // // // // // // // // //       category: item.category,
// // // // // // // // // // // //       title: item.title,
// // // // // // // // // // // //       description: item.description.substring(0, 250) + "...",
// // // // // // // // // // // //     //   link: `/news/${item.id}`,
// // // // // // // // // // // //     link: `/blog-details/${item.id}`,
// // // // // // // // // // // //       delay: 0.2 * index,
// // // // // // // // // // // //     })),

// // // // // // // // // // // //     pagination: [
// // // // // // // // // // // //       data.pagination.current_page.toString(),
// // // // // // // // // // // //       (data.pagination.current_page + 1).toString(),
// // // // // // // // // // // //     ],

// // // // // // // // // // // //     widgets: {
// // // // // // // // // // // //       categories: [...new Set(apiPosts.map((item: any) => item.category))],

// // // // // // // // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // // // // // // // //         thumbnail: item.image,
// // // // // // // // // // // //         date: item.created_at,
// // // // // // // // // // // //         title: item.title,
// // // // // // // // // // // //         // link: `/news/${item.id}`,
// // // // // // // // // // // //         link: `/blog-details/${item.id}`, // ✅ ONLY CHANGE

// // // // // // // // // // // //       })),

// // // // // // // // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // // // // // // // //       contactWidget: {
// // // // // // // // // // // //         logo: "/images/logo/01.svg",
// // // // // // // // // // // //         title: "Need Help?",
// // // // // // // // // // // //         buttonText: "Contact Us",
// // // // // // // // // // // //         link: "/contact",
// // // // // // // // // // // //       },
// // // // // // // // // // // //     },
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const content = mappedData;

// // // // // // // // // // // //   // ---------------- RENDER UI (unchanged) ----------------
// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <>
// // // // // // // // // // // //       {/* Breadcrumb */}
// // // // // // // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // // // // // // //         <div className="container">
// // // // // // // // // // // //           <div className="row">
// // // // // // // // // // // //             <div className="col-lg-12">
// // // // // // // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // // // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // // // // // // // //                 <h1 className="title rts-text-anime-style-1">{content.breadcrumb.title}</h1>
// // // // // // // // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div className="shape-area">
// // // // // // // // // // // //           {content.breadcrumb.shapes.map((shape, i) => (
// // // // // // // // // // // //             <img key={i} src={shape} alt="shape" className={["one", "two", "three"][i]} />
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Blog Posts */}
// // // // // // // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // // // // // // //         <div className="container">
// // // // // // // // // // // //           <div className="row g-5">
// // // // // // // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // // // // // // //               {content.posts.map((post, i) => (
// // // // // // // // // // // //                 <div key={i} className="blog-single-post-listing" data-animation="fadeInUp" data-delay={post.delay}>
// // // // // // // // // // // //                   <div className="thumbnail">
// // // // // // // // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // // // // // // // //                   </div>

// // // // // // // // // // // //                   <div className="blog-listing-content">
// // // // // // // // // // // //                     <div className="user-info">
// // // // // // // // // // // //                       <div className="single"><i className="far fa-clock"></i><span>{post.date}</span></div>
// // // // // // // // // // // //                       <div className="single"><i className="far fa-tags"></i><span>{post.category}</span></div>
// // // // // // // // // // // //                     </div>

// // // // // // // // // // // //                     {/* <a className="blog-title" href={post.link}>
// // // // // // // // // // // //                       <h3 className="title animated fadeIn">{post.title}</h3>
// // // // // // // // // // // //                     </a> */}

// // // // // // // // // // // //                          <Link className="blog-title" href={post.link}>
// // // // // // // // // // // //                       <h3 className="title">{post.title}</h3>
// // // // // // // // // // // //                     </Link>


// // // // // // // // // // // //                     <p className="disc animated fadeIn">{post.description}</p>

// // // // // // // // // // // //                     {/* <a className="rts-btn btn-primary animated fadeIn" href={post.link} target="_blank" rel="noopener noreferrer">
// // // // // // // // // // // //                       Read Details
// // // // // // // // // // // //                     </a> */}

// // // // // // // // // // // //                          <Link className="rts-btn btn-primary" href={post.link}>
// // // // // // // // // // // //                       Read Details
// // // // // // // // // // // //                     </Link>

// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               ))}

// // // // // // // // // // // //               {/* Pagination */}
// // // // // // // // // // // //               <div className="row">
// // // // // // // // // // // //                 <div className="col-12">
// // // // // // // // // // // //                   <div className="text-center">
// // // // // // // // // // // //                     <div className="pagination">
// // // // // // // // // // // //                       {content.pagination.map((page, idx) => (
// // // // // // // // // // // //                         <button key={idx} className={idx === 0 ? "active" : ""}>{page}</button>
// // // // // // // // // // // //                       ))}
// // // // // // // // // // // //                       <button><i className="fal fa-angle-double-right"></i></button>
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             {/* Widgets */}
// // // // // // // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // // // // // // //               {/* Categories */}
// // // // // // // // // // // //               <div className="rts-single-wized Categories">
// // // // // // // // // // // //                 <div className="wized-header"><h5 className="title">Categories</h5></div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // // // // // // // // //                     <ul key={idx} className="single-categories">
// // // // // // // // // // // //                       <li><a href="#">{cat} <i className="far fa-long-arrow-right"></i></a></li>
// // // // // // // // // // // //                     </ul>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               {/* Recent Posts */}
// // // // // // // // // // // //               <div className="rts-single-wized Recent-post">
// // // // // // // // // // // //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // // // // // // // //                     <div key={idx} className="recent-post-single">
// // // // // // // // // // // //                       <div className="thumbnail"><a href={post.link}><img src={post.thumbnail} alt="Blog_post" /></a></div>
// // // // // // // // // // // //                       <div className="content-area">
// // // // // // // // // // // //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// // // // // // // // // // // //                         <a className="post-title" href={post.link}><h6 className="title">{post.title}</h6></a>
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               {/* Tags */}
// // // // // // // // // // // //               <div className="rts-single-wized tags">
// // // // // // // // // // // //                 <div className="wized-header"><h5 className="title">Popular Tags</h5></div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   <div className="tags-wrapper">
// // // // // // // // // // // //                     {content.widgets.tags.map((tag, idx) => <a key={idx} href="#">{tag}</a>)}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               {/* Contact Widget */}
// // // // // // // // // // // //               <div className="rts-single-wized contact">
// // // // // // // // // // // //                 <div className="wized-header"><a href="#"><img src={content.widgets.contactWidget.logo} alt="Business_logo" /></a></div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   <h5 className="title">{content.widgets.contactWidget.title}</h5>
// // // // // // // // // // // //                   <a className="rts-btn btn-primary btn-white" href={content.widgets.contactWidget.link}>
// // // // // // // // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // // // // // // // //                   </a>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default BlogArchive;

// // // // // // // // // // // // "use client";
// // // // // // // // // // // // import React from "react";
// // // // // // // // // // // // import useSWR from "swr";
// // // // // // // // // // // // import Link from "next/link";

// // // // // // // // // // // // interface Breadcrumb {
// // // // // // // // // // // //   bgTitle: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   description: string;
// // // // // // // // // // // //   shapes: string[];
// // // // // // // // // // // // }

// // // // // // // // // // // // interface Post {
// // // // // // // // // // // //   thumbnail: string;
// // // // // // // // // // // //   date: string;
// // // // // // // // // // // //   category: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   description: string;
// // // // // // // // // // // //   link: string;
// // // // // // // // // // // //   delay: number;
// // // // // // // // // // // // }

// // // // // // // // // // // // interface RecentPost {
// // // // // // // // // // // //   thumbnail: string;
// // // // // // // // // // // //   date: string;
// // // // // // // // // // // //   title: string;
// // // // // // // // // // // //   link: string;
// // // // // // // // // // // // }

// // // // // // // // // // // // interface Widgets {
// // // // // // // // // // // //   categories: string[];
// // // // // // // // // // // //   recentPosts: RecentPost[];
// // // // // // // // // // // //   tags: string[];
// // // // // // // // // // // //   contactWidget: {
// // // // // // // // // // // //     logo: string;
// // // // // // // // // // // //     title: string;
// // // // // // // // // // // //     buttonText: string;
// // // // // // // // // // // //     link: string;
// // // // // // // // // // // //   };
// // // // // // // // // // // // }

// // // // // // // // // // // // interface BlogContent {
// // // // // // // // // // // //   breadcrumb: Breadcrumb;
// // // // // // // // // // // //   posts: Post[];
// // // // // // // // // // // //   pagination: string[];
// // // // // // // // // // // //   widgets: Widgets;
// // // // // // // // // // // // }

// // // // // // // // // // // // // ---------------- FETCHER ----------------
// // // // // // // // // // // // const fetcher = (url: string) =>
// // // // // // // // // // // //   fetch(url).then((res) => res.json());

// // // // // // // // // // // // // ---------------- COMPONENT ---------------
// // // // // // // // // // // // const BlogArchive = () => {
// // // // // // // // // // // //   const { data, error } = useSWR(
// // // // // // // // // // // //     "https://gba.mig.org.pk/api/news",
// // // // // // // // // // // //     fetcher
// // // // // // // // // // // //   );

// // // // // // // // // // // //   if (error) return <p>Failed to load data</p>;
// // // // // // // // // // // //   if (!data) return <p>Loading...</p>;

// // // // // // // // // // // //   const apiPosts: any[] = data.data ?? [];

// // // // // // // // // // // //   const mappedData: BlogContent = {
// // // // // // // // // // // //     breadcrumb: {
// // // // // // // // // // // //       bgTitle: "News",
// // // // // // // // // // // //       title: "Latest Updates",
// // // // // // // // // // // //       description: "GBC official announcements & activities",
// // // // // // // // // // // //       shapes: [
// // // // // // // // // // // //         "images/about/shape/01.png",
// // // // // // // // // // // //         "images/about/shape/02.png",
// // // // // // // // // // // //         "images/about/shape/03.png",
// // // // // // // // // // // //       ],
// // // // // // // // // // // //     },

// // // // // // // // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // // // // // // // //       thumbnail: item.image,
// // // // // // // // // // // //       date: item.created_at,
// // // // // // // // // // // //       category: String(item.category),
// // // // // // // // // // // //       title: item.title,
// // // // // // // // // // // //       description: item.description.substring(0, 250) + "...",
// // // // // // // // // // // //       link: `/blog-details/${item.id}`,
// // // // // // // // // // // //       delay: 0.2 * index,
// // // // // // // // // // // //     })),

// // // // // // // // // // // //     pagination: [
// // // // // // // // // // // //       String(data.pagination?.current_page ?? 1),
// // // // // // // // // // // //       String((data.pagination?.current_page ?? 1) + 1),
// // // // // // // // // // // //     ],

// // // // // // // // // // // //     widgets: {
// // // // // // // // // // // //       // ✅ FIXED LINE (TYPE SAFE)
// // // // // // // // // // // //       categories: Array.from(
// // // // // // // // // // // //         new Set(apiPosts.map((item: any) => String(item.category)))
// // // // // // // // // // // //       ),

// // // // // // // // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // // // // // // // //         thumbnail: item.image,
// // // // // // // // // // // //         date: item.created_at,
// // // // // // // // // // // //         title: item.title,
// // // // // // // // // // // //         link: `/blog-details/${item.id}`,
// // // // // // // // // // // //       })),

// // // // // // // // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // // // // // // // //       contactWidget: {
// // // // // // // // // // // //         logo: "/images/logo/01.svg",
// // // // // // // // // // // //         title: "Need Help?",
// // // // // // // // // // // //         buttonText: "Contact Us",
// // // // // // // // // // // //         link: "/contact",
// // // // // // // // // // // //       },
// // // // // // // // // // // //     },
// // // // // // // // // // // //   };

// // // // // // // // // // // //   const content = mappedData;

// // // // // // // // // // // //   return (
// // // // // // // // // // // //     <>
// // // // // // // // // // // //       {/* Breadcrumb */}
// // // // // // // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // // // // // // //         <div className="container">
// // // // // // // // // // // //           <div className="row">
// // // // // // // // // // // //             <div className="col-lg-12">
// // // // // // // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // // // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // // // // // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // // // // // // // // //                   {content.breadcrumb.title}
// // // // // // // // // // // //                 </h1>
// // // // // // // // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //         <div className="shape-area">
// // // // // // // // // // // //           {content.breadcrumb.shapes.map((shape, i) => (
// // // // // // // // // // // //             <img
// // // // // // // // // // // //               key={i}
// // // // // // // // // // // //               src={shape}
// // // // // // // // // // // //               alt="shape"
// // // // // // // // // // // //               className={["one", "two", "three"][i]}
// // // // // // // // // // // //             />
// // // // // // // // // // // //           ))}
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>

// // // // // // // // // // // //       {/* Blog Posts */}
// // // // // // // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // // // // // // //         <div className="container">
// // // // // // // // // // // //           <div className="row g-5">
// // // // // // // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // // // // // // //               {content.posts.map((post, i) => (
// // // // // // // // // // // //                 <div
// // // // // // // // // // // //                   key={i}
// // // // // // // // // // // //                   className="blog-single-post-listing"
// // // // // // // // // // // //                   data-animation="fadeInUp"
// // // // // // // // // // // //                   data-delay={post.delay}
// // // // // // // // // // // //                 >
// // // // // // // // // // // //                   <div className="thumbnail">
// // // // // // // // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // // // // // // // //                   </div>

// // // // // // // // // // // //                   <div className="blog-listing-content">
// // // // // // // // // // // //                     <div className="user-info">
// // // // // // // // // // // //                       <div className="single">
// // // // // // // // // // // //                         <i className="far fa-clock"></i>
// // // // // // // // // // // //                         <span>{post.date}</span>
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                       <div className="single">
// // // // // // // // // // // //                         <i className="far fa-tags"></i>
// // // // // // // // // // // //                         <span>{post.category}</span>
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                     </div>

// // // // // // // // // // // //                     <Link className="blog-title" href={post.link}>
// // // // // // // // // // // //                       <h3 className="title">{post.title}</h3>
// // // // // // // // // // // //                     </Link>

// // // // // // // // // // // //                     <p className="disc">{post.description}</p>

// // // // // // // // // // // //                     <Link className="rts-btn btn-primary" href={post.link}>
// // // // // // // // // // // //                       Read Details
// // // // // // // // // // // //                     </Link>
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               ))}

// // // // // // // // // // // //               {/* Pagination */}
// // // // // // // // // // // //               <div className="row">
// // // // // // // // // // // //                 <div className="col-12">
// // // // // // // // // // // //                   <div className="text-center">
// // // // // // // // // // // //                     <div className="pagination">
// // // // // // // // // // // //                       {content.pagination.map((page, idx) => (
// // // // // // // // // // // //                         <button
// // // // // // // // // // // //                           key={idx}
// // // // // // // // // // // //                           className={idx === 0 ? "active" : ""}
// // // // // // // // // // // //                         >
// // // // // // // // // // // //                           {page}
// // // // // // // // // // // //                         </button>
// // // // // // // // // // // //                       ))}
// // // // // // // // // // // //                       <button>
// // // // // // // // // // // //                         <i className="fal fa-angle-double-right"></i>
// // // // // // // // // // // //                       </button>
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>

// // // // // // // // // // // //             {/* Widgets */}
// // // // // // // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // // // // // // //               {/* Categories */}
// // // // // // // // // // // //               <div className="rts-single-wized Categories">
// // // // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // // // //                   <h5 className="title">Categories</h5>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // // // // // // // // //                     <ul key={idx} className="single-categories">
// // // // // // // // // // // //                       <li>
// // // // // // // // // // // //                         <a href="#">
// // // // // // // // // // // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // // // // // // // // // // //                         </a>
// // // // // // // // // // // //                       </li>
// // // // // // // // // // // //                     </ul>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               {/* Recent Posts */}
// // // // // // // // // // // //               <div className="rts-single-wized Recent-post">
// // // // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // // // //                   <h5 className="title">Recent Posts</h5>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // // // // // // // //                     <div key={idx} className="recent-post-single">
// // // // // // // // // // // //                       <div className="thumbnail">
// // // // // // // // // // // //                         <a href={post.link}>
// // // // // // // // // // // //                           <img src={post.thumbnail} alt="Blog_post" />
// // // // // // // // // // // //                         </a>
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                       <div className="content-area">
// // // // // // // // // // // //                         <div className="user">
// // // // // // // // // // // //                           <i className="fal fa-clock"></i>
// // // // // // // // // // // //                           <span>{post.date}</span>
// // // // // // // // // // // //                         </div>
// // // // // // // // // // // //                         <a className="post-title" href={post.link}>
// // // // // // // // // // // //                           <h6 className="title">{post.title}</h6>
// // // // // // // // // // // //                         </a>
// // // // // // // // // // // //                       </div>
// // // // // // // // // // // //                     </div>
// // // // // // // // // // // //                   ))}
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               {/* Tags */}
// // // // // // // // // // // //               <div className="rts-single-wized tags">
// // // // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // // // //                   <h5 className="title">Popular Tags</h5>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   <div className="tags-wrapper">
// // // // // // // // // // // //                     {content.widgets.tags.map((tag, idx) => (
// // // // // // // // // // // //                       <a key={idx} href="#">
// // // // // // // // // // // //                         {tag}
// // // // // // // // // // // //                       </a>
// // // // // // // // // // // //                     ))}
// // // // // // // // // // // //                   </div>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>

// // // // // // // // // // // //               {/* Contact Widget */}
// // // // // // // // // // // //               <div className="rts-single-wized contact">
// // // // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // // // //                   <a href="#">
// // // // // // // // // // // //                     <img
// // // // // // // // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // // // // // // // //                       alt="Business_logo"
// // // // // // // // // // // //                     />
// // // // // // // // // // // //                   </a>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // // //                   <h5 className="title">
// // // // // // // // // // // //                     {content.widgets.contactWidget.title}
// // // // // // // // // // // //                   </h5>
// // // // // // // // // // // //                   <a
// // // // // // // // // // // //                     className="rts-btn btn-primary btn-white"
// // // // // // // // // // // //                     href={content.widgets.contactWidget.link}
// // // // // // // // // // // //                   >
// // // // // // // // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // // // // // // // //                   </a>
// // // // // // // // // // // //                 </div>
// // // // // // // // // // // //               </div>
// // // // // // // // // // // //             </div>
// // // // // // // // // // // //           </div>
// // // // // // // // // // // //         </div>
// // // // // // // // // // // //       </div>
// // // // // // // // // // // //     </>
// // // // // // // // // // // //   );
// // // // // // // // // // // // };

// // // // // // // // // // // // export default BlogArchive;



// // // // // // // // // // // "use client";
// // // // // // // // // // // import React from "react";
// // // // // // // // // // // import useSWR from "swr";
// // // // // // // // // // // import Link from "next/link";

// // // // // // // // // // // interface Breadcrumb {
// // // // // // // // // // //   bgTitle: string;
// // // // // // // // // // //   title: string;
// // // // // // // // // // //   description: string;
// // // // // // // // // // //   shapes: string[];
// // // // // // // // // // // }

// // // // // // // // // // // interface Post {
// // // // // // // // // // //   thumbnail: string;
// // // // // // // // // // //   date: string;
// // // // // // // // // // //   category: string;
// // // // // // // // // // //   title: string;
// // // // // // // // // // //   description: string;
// // // // // // // // // // //   link: string;
// // // // // // // // // // //   delay: number;
// // // // // // // // // // // }

// // // // // // // // // // // interface RecentPost {
// // // // // // // // // // //   thumbnail: string;
// // // // // // // // // // //   date: string;
// // // // // // // // // // //   title: string;
// // // // // // // // // // //   link: string;
// // // // // // // // // // // }

// // // // // // // // // // // interface Widgets {
// // // // // // // // // // //   categories: string[];
// // // // // // // // // // //   recentPosts: RecentPost[];
// // // // // // // // // // //   tags: string[];
// // // // // // // // // // //   contactWidget: {
// // // // // // // // // // //     logo: string;
// // // // // // // // // // //     title: string;
// // // // // // // // // // //     buttonText: string;
// // // // // // // // // // //     link: string;
// // // // // // // // // // //   };
// // // // // // // // // // // }

// // // // // // // // // // // interface BlogContent {
// // // // // // // // // // //   breadcrumb: Breadcrumb;
// // // // // // // // // // //   posts: Post[];
// // // // // // // // // // //   pagination: string[];
// // // // // // // // // // //   widgets: Widgets;
// // // // // // // // // // // }

// // // // // // // // // // // // ---------------- FETCHER ----------------
// // // // // // // // // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // // // // // // // // ---------------- COMPONENT ---------------
// // // // // // // // // // // const BlogArchive = () => {
// // // // // // // // // // //   const { data, error } = useSWR(
// // // // // // // // // // //     "https://gba.mig.org.pk/api/news",
// // // // // // // // // // //     fetcher
// // // // // // // // // // //   );

// // // // // // // // // // //   if (error) return <p>Failed to load data</p>;
// // // // // // // // // // //   if (!data) return <p>Loading...</p>;

// // // // // // // // // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // // // // // // // // //   const mappedData: BlogContent = {
// // // // // // // // // // //     breadcrumb: {
// // // // // // // // // // //       bgTitle: "News",
// // // // // // // // // // //       title: "Latest Updates",
// // // // // // // // // // //       description: "GBC official announcements & activities",
// // // // // // // // // // //       shapes: [
// // // // // // // // // // //         "images/about/shape/01.png",
// // // // // // // // // // //         "images/about/shape/02.png",
// // // // // // // // // // //         "images/about/shape/03.png",
// // // // // // // // // // //       ],
// // // // // // // // // // //     },

// // // // // // // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // // // // // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // // // // //       date: item?.created_at || "",
// // // // // // // // // // //       category: String(item?.category || ""),
// // // // // // // // // // //       title: item?.title || "",
// // // // // // // // // // //       description: item?.description
// // // // // // // // // // //         ? item.description.substring(0, 250) + "..."
// // // // // // // // // // //         : "",
// // // // // // // // // // //       link: `/blog-details/${item?.id}`,
// // // // // // // // // // //       delay: 0.2 * index,
// // // // // // // // // // //     })),

// // // // // // // // // // //     pagination: [
// // // // // // // // // // //       String(data?.pagination?.current_page ?? 1),
// // // // // // // // // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // // // // // // // // //     ],

// // // // // // // // // // //     widgets: {
// // // // // // // // // // //       categories: Array.from(
// // // // // // // // // // //         new Set(
// // // // // // // // // // //           apiPosts
// // // // // // // // // // //             .map((item: any) => item?.category)
// // // // // // // // // // //             .filter(Boolean)
// // // // // // // // // // //             .map((cat: any) => String(cat))
// // // // // // // // // // //         )
// // // // // // // // // // //       ),

// // // // // // // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // // // // // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // // // // //         date: item?.created_at || "",
// // // // // // // // // // //         title: item?.title || "",
// // // // // // // // // // //         link: `/blog-details/${item?.id}`,
// // // // // // // // // // //       })),

// // // // // // // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // // // // // // //       contactWidget: {
// // // // // // // // // // //         logo: "/images/logo/01.svg",
// // // // // // // // // // //         title: "Need Help?",
// // // // // // // // // // //         buttonText: "Contact Us",
// // // // // // // // // // //         link: "/contact",
// // // // // // // // // // //       },
// // // // // // // // // // //     },
// // // // // // // // // // //   };

// // // // // // // // // // //   const content = mappedData;

// // // // // // // // // // //   return (
// // // // // // // // // // //     <>
// // // // // // // // // // //       {/* Breadcrumb */}
// // // // // // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // // // // // //         <div className="container">
// // // // // // // // // // //           <div className="row">
// // // // // // // // // // //             <div className="col-lg-12">
// // // // // // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // // // // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // // // // // // // //                   {content.breadcrumb.title}
// // // // // // // // // // //                 </h1>
// // // // // // // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>

// // // // // // // // // // //         <div className="shape-area">
// // // // // // // // // // //           {content.breadcrumb.shapes.map((shape, i) => (
// // // // // // // // // // //             <img
// // // // // // // // // // //               key={i}
// // // // // // // // // // //               src={shape}
// // // // // // // // // // //               alt="shape"
// // // // // // // // // // //               className={["one", "two", "three"][i]}
// // // // // // // // // // //             />
// // // // // // // // // // //           ))}
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>

// // // // // // // // // // //       {/* Blog Posts */}
// // // // // // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // // // // // //         <div className="container">
// // // // // // // // // // //           <div className="row g-5">
// // // // // // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // // // // // //               {content.posts.map((post, i) => (
// // // // // // // // // // //                 <div
// // // // // // // // // // //                   key={i}
// // // // // // // // // // //                   className="blog-single-post-listing"
// // // // // // // // // // //                   data-animation="fadeInUp"
// // // // // // // // // // //                   data-delay={post.delay}
// // // // // // // // // // //                 >
// // // // // // // // // // //                   <div className="thumbnail">
// // // // // // // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // // // // // // //                   </div>

// // // // // // // // // // //                   <div className="blog-listing-content">
// // // // // // // // // // //                     <div className="user-info">
// // // // // // // // // // //                       <div className="single">
// // // // // // // // // // //                         <i className="far fa-clock"></i>
// // // // // // // // // // //                         <span>{post.date}</span>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div className="single">
// // // // // // // // // // //                         <i className="far fa-tags"></i>
// // // // // // // // // // //                         <span>{post.category}</span>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>

// // // // // // // // // // //                     <Link className="blog-title" href={post.link}>
// // // // // // // // // // //                       <h3 className="title">{post.title}</h3>
// // // // // // // // // // //                     </Link>

// // // // // // // // // // //                     <p className="disc">{post.description}</p>

// // // // // // // // // // //                     <Link className="rts-btn btn-primary" href={post.link}>
// // // // // // // // // // //                       Read Details
// // // // // // // // // // //                     </Link>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               ))}

// // // // // // // // // // //               {/* Pagination */}
// // // // // // // // // // //               <div className="row">
// // // // // // // // // // //                 <div className="col-12">
// // // // // // // // // // //                   <div className="text-center">
// // // // // // // // // // //                     <div className="pagination">
// // // // // // // // // // //                       {content.pagination.map((page, idx) => (
// // // // // // // // // // //                         <button
// // // // // // // // // // //                           key={idx}
// // // // // // // // // // //                           className={idx === 0 ? "active" : ""}
// // // // // // // // // // //                         >
// // // // // // // // // // //                           {page}
// // // // // // // // // // //                         </button>
// // // // // // // // // // //                       ))}
// // // // // // // // // // //                       <button>
// // // // // // // // // // //                         <i className="fal fa-angle-double-right"></i>
// // // // // // // // // // //                       </button>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             {/* Widgets */}
// // // // // // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // // // // // //               {/* Categories */}
// // // // // // // // // // //               <div className="rts-single-wized Categories">
// // // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // // //                   <h5 className="title">Categories</h5>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // // // // // // // //                     <ul key={idx} className="single-categories">
// // // // // // // // // // //                       <li>
// // // // // // // // // // //                         <a href="#">
// // // // // // // // // // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // // // // // // // // // //                         </a>
// // // // // // // // // // //                       </li>
// // // // // // // // // // //                     </ul>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>

// // // // // // // // // // //               {/* Recent Posts */}
// // // // // // // // // // //               <div className="rts-single-wized Recent-post">
// // // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // // //                   <h5 className="title">Recent Posts</h5>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // // // // // // //                     <div key={idx} className="recent-post-single">
// // // // // // // // // // //                       <div className="thumbnail">
// // // // // // // // // // //                         <a href={post.link}>
// // // // // // // // // // //                           <img src={post.thumbnail} alt="Blog_post" />
// // // // // // // // // // //                         </a>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                       <div className="content-area">
// // // // // // // // // // //                         <div className="user">
// // // // // // // // // // //                           <i className="fal fa-clock"></i>
// // // // // // // // // // //                           <span>{post.date}</span>
// // // // // // // // // // //                         </div>
// // // // // // // // // // //                         <a className="post-title" href={post.link}>
// // // // // // // // // // //                           <h6 className="title">{post.title}</h6>
// // // // // // // // // // //                         </a>
// // // // // // // // // // //                       </div>
// // // // // // // // // // //                     </div>
// // // // // // // // // // //                   ))}
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>

// // // // // // // // // // //               {/* Tags */}
// // // // // // // // // // //               <div className="rts-single-wized tags">
// // // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // // //                   <h5 className="title">Popular Tags</h5>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // //                   <div className="tags-wrapper">
// // // // // // // // // // //                     {content.widgets.tags.map((tag, idx) => (
// // // // // // // // // // //                       <a key={idx} href="#">
// // // // // // // // // // //                         {tag}
// // // // // // // // // // //                       </a>
// // // // // // // // // // //                     ))}
// // // // // // // // // // //                   </div>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>

// // // // // // // // // // //               {/* Contact Widget */}
// // // // // // // // // // //               <div className="rts-single-wized contact">
// // // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // // //                   <a href="#">
// // // // // // // // // // //                     <img
// // // // // // // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // // // // // // //                       alt="Business_logo"
// // // // // // // // // // //                     />
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // // //                   <h5 className="title">
// // // // // // // // // // //                     {content.widgets.contactWidget.title}
// // // // // // // // // // //                   </h5>
// // // // // // // // // // //                   <a
// // // // // // // // // // //                     className="rts-btn btn-primary btn-white"
// // // // // // // // // // //                     href={content.widgets.contactWidget.link}
// // // // // // // // // // //                   >
// // // // // // // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // // // // // // //                   </a>
// // // // // // // // // // //                 </div>
// // // // // // // // // // //               </div>
// // // // // // // // // // //             </div>
// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </>
// // // // // // // // // // //   );
// // // // // // // // // // // };

// // // // // // // // // // // export default BlogArchive;

// // // // // // // // // // "use client";
// // // // // // // // // // import React from "react";
// // // // // // // // // // import useSWR from "swr";
// // // // // // // // // // import Link from "next/link";

// // // // // // // // // // interface Breadcrumb {
// // // // // // // // // //   bgTitle: string;
// // // // // // // // // //   title: string;
// // // // // // // // // //   description: string;
// // // // // // // // // //   shapes: string[];
// // // // // // // // // // }

// // // // // // // // // // interface Post {
// // // // // // // // // //   thumbnail: string;
// // // // // // // // // //   date: string;
// // // // // // // // // //   category: string;
// // // // // // // // // //   title: string;
// // // // // // // // // //   description: string;
// // // // // // // // // //   link: string;
// // // // // // // // // //   delay: number;
// // // // // // // // // // }

// // // // // // // // // // interface RecentPost {
// // // // // // // // // //   thumbnail: string;
// // // // // // // // // //   date: string;
// // // // // // // // // //   title: string;
// // // // // // // // // //   link: string;
// // // // // // // // // // }

// // // // // // // // // // interface Widgets {
// // // // // // // // // //   categories: string[];
// // // // // // // // // //   recentPosts: RecentPost[];
// // // // // // // // // //   tags: string[];
// // // // // // // // // //   contactWidget: {
// // // // // // // // // //     logo: string;
// // // // // // // // // //     title: string;
// // // // // // // // // //     buttonText: string;
// // // // // // // // // //     link: string;
// // // // // // // // // //   };
// // // // // // // // // // }

// // // // // // // // // // interface BlogContent {
// // // // // // // // // //   breadcrumb: Breadcrumb;
// // // // // // // // // //   posts: Post[];
// // // // // // // // // //   pagination: string[];
// // // // // // // // // //   widgets: Widgets;
// // // // // // // // // // }

// // // // // // // // // // // ---------------- FETCHER ----------------
// // // // // // // // // // const fetcher = (url: string) => fetch(url).then((res) => {
// // // // // // // // // //   if (!res.ok) throw new Error("Network response was not ok");
// // // // // // // // // //   return res.json();
// // // // // // // // // // });

// // // // // // // // // // // ---------------- COMPONENT ---------------
// // // // // // // // // // const BlogArchive = () => {
// // // // // // // // // //   // Uses the Vercel Environment Variable, or falls back to the secure URL
// // // // // // // // // //   const apiUrl = process.env.NEXT_PUBLIC_API_URL || "https://gba.mig.org.pk/api/news";

// // // // // // // // // //   const { data, error, isLoading } = useSWR(apiUrl, fetcher);

// // // // // // // // // //   if (error) return (
// // // // // // // // // //     <div className="container mt--50 mb--50 text-center">
// // // // // // // // // //       <p>Error loading news. Please check your connection or try again later.</p>
// // // // // // // // // //     </div>
// // // // // // // // // //   );

// // // // // // // // // //   if (isLoading) return (
// // // // // // // // // //     <div className="container mt--50 mb--50 text-center">
// // // // // // // // // //       <p>Loading Latest Updates...</p>
// // // // // // // // // //     </div>
// // // // // // // // // //   );

// // // // // // // // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // // // // // // // //   const mappedData: BlogContent = {
// // // // // // // // // //     breadcrumb: {
// // // // // // // // // //       bgTitle: "News",
// // // // // // // // // //       title: "Latest Updates",
// // // // // // // // // //       description: "GBC official announcements & activities",
// // // // // // // // // //       shapes: [
// // // // // // // // // //         "/images/about/shape/01.png",
// // // // // // // // // //         "/images/about/shape/02.png",
// // // // // // // // // //         "/images/about/shape/03.png",
// // // // // // // // // //       ],
// // // // // // // // // //     },

// // // // // // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // // // // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // // // //       date: item?.created_at || "",
// // // // // // // // // //       category: String(item?.category || "General"),
// // // // // // // // // //       title: item?.title || "Untitled Post",
// // // // // // // // // //       description: item?.description
// // // // // // // // // //         ? item.description.substring(0, 250) + "..."
// // // // // // // // // //         : "",
// // // // // // // // // //       link: `/blog-details/${item?.id}`,
// // // // // // // // // //       delay: 0.2 * index,
// // // // // // // // // //     })),

// // // // // // // // // //     pagination: [
// // // // // // // // // //       String(data?.pagination?.current_page ?? 1),
// // // // // // // // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // // // // // // // //     ],

// // // // // // // // // //     widgets: {
// // // // // // // // // //       categories: Array.from(
// // // // // // // // // //         new Set(
// // // // // // // // // //           apiPosts
// // // // // // // // // //             .map((item: any) => item?.category)
// // // // // // // // // //             .filter(Boolean)
// // // // // // // // // //             .map((cat: any) => String(cat))
// // // // // // // // // //         )
// // // // // // // // // //       ),

// // // // // // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // // // // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // // // //         date: item?.created_at || "",
// // // // // // // // // //         title: item?.title || "",
// // // // // // // // // //         link: `/blog-details/${item?.id}`,
// // // // // // // // // //       })),

// // // // // // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // // // // // //       contactWidget: {
// // // // // // // // // //         logo: "/images/logo/01.svg",
// // // // // // // // // //         title: "Need Help?",
// // // // // // // // // //         buttonText: "Contact Us",
// // // // // // // // // //         link: "/contact",
// // // // // // // // // //       },
// // // // // // // // // //     },
// // // // // // // // // //   };

// // // // // // // // // //   const content = mappedData;

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       {/* Breadcrumb */}
// // // // // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // // // // //         <div className="container">
// // // // // // // // // //           <div className="row">
// // // // // // // // // //             <div className="col-lg-12">
// // // // // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // // // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // // // // // // //                   {content.breadcrumb.title}
// // // // // // // // // //                 </h1>
// // // // // // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="shape-area">
// // // // // // // // // //           {content.breadcrumb.shapes.map((shape, i) => (
// // // // // // // // // //             <img
// // // // // // // // // //               key={i}
// // // // // // // // // //               src={shape}
// // // // // // // // // //               alt="shape"
// // // // // // // // // //               className={["one", "two", "three"][i]}
// // // // // // // // // //             />
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Blog Posts */}
// // // // // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // // // // //         <div className="container">
// // // // // // // // // //           <div className="row g-5">
// // // // // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // // // // //               {content.posts.length > 0 ? (
// // // // // // // // // //                 content.posts.map((post, i) => (
// // // // // // // // // //                   <div
// // // // // // // // // //                     key={i}
// // // // // // // // // //                     className="blog-single-post-listing"
// // // // // // // // // //                     data-animation="fadeInUp"
// // // // // // // // // //                     data-delay={post.delay}
// // // // // // // // // //                   >
// // // // // // // // // //                     <div className="thumbnail">
// // // // // // // // // //                       <img src={post.thumbnail} alt={post.title} />
// // // // // // // // // //                     </div>

// // // // // // // // // //                     <div className="blog-listing-content">
// // // // // // // // // //                       <div className="user-info">
// // // // // // // // // //                         <div className="single">
// // // // // // // // // //                           <i className="far fa-clock"></i>
// // // // // // // // // //                           <span>{post.date}</span>
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <div className="single">
// // // // // // // // // //                           <i className="far fa-tags"></i>
// // // // // // // // // //                           <span>{post.category}</span>
// // // // // // // // // //                         </div>
// // // // // // // // // //                       </div>

// // // // // // // // // //                       <Link className="blog-title" href={post.link}>
// // // // // // // // // //                         <h3 className="title">{post.title}</h3>
// // // // // // // // // //                       </Link>

// // // // // // // // // //                       <p className="disc">{post.description}</p>

// // // // // // // // // //                       <Link className="rts-btn btn-primary" href={post.link}>
// // // // // // // // // //                         Read Details
// // // // // // // // // //                       </Link>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 ))
// // // // // // // // // //               ) : (
// // // // // // // // // //                 <p>No posts available at this time.</p>
// // // // // // // // // //               )}

// // // // // // // // // //               {/* Pagination */}
// // // // // // // // // //               <div className="row">
// // // // // // // // // //                 <div className="col-12">
// // // // // // // // // //                   <div className="text-center">
// // // // // // // // // //                     <div className="pagination">
// // // // // // // // // //                       {content.pagination.map((page, idx) => (
// // // // // // // // // //                         <button
// // // // // // // // // //                           key={idx}
// // // // // // // // // //                           className={idx === 0 ? "active" : ""}
// // // // // // // // // //                         >
// // // // // // // // // //                           {page}
// // // // // // // // // //                         </button>
// // // // // // // // // //                       ))}
// // // // // // // // // //                       <button>
// // // // // // // // // //                         <i className="fal fa-angle-double-right"></i>
// // // // // // // // // //                       </button>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Widgets */}
// // // // // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // // // // //               {/* Categories */}
// // // // // // // // // //               <div className="rts-single-wized Categories">
// // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // //                   <h5 className="title">Categories</h5>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // //                   {content.widgets.categories.length > 0 ? (
// // // // // // // // // //                     content.widgets.categories.map((cat, idx) => (
// // // // // // // // // //                       <ul key={idx} className="single-categories">
// // // // // // // // // //                         <li>
// // // // // // // // // //                           <a href="#">
// // // // // // // // // //                             {cat} <i className="far fa-long-arrow-right"></i>
// // // // // // // // // //                           </a>
// // // // // // // // // //                         </li>
// // // // // // // // // //                       </ul>
// // // // // // // // // //                     ))
// // // // // // // // // //                   ) : (
// // // // // // // // // //                     <p>No categories found.</p>
// // // // // // // // // //                   )}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Recent Posts */}
// // // // // // // // // //               <div className="rts-single-wized Recent-post">
// // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // //                   <h5 className="title">Recent Posts</h5>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // // // // // //                     <div key={idx} className="recent-post-single">
// // // // // // // // // //                       <div className="thumbnail">
// // // // // // // // // //                         <a href={post.link}>
// // // // // // // // // //                           <img src={post.thumbnail} alt="recent post" />
// // // // // // // // // //                         </a>
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <div className="content-area">
// // // // // // // // // //                         <div className="user">
// // // // // // // // // //                           <i className="fal fa-clock"></i>
// // // // // // // // // //                           <span>{post.date}</span>
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <a className="post-title" href={post.link}>
// // // // // // // // // //                           <h6 className="title">{post.title}</h6>
// // // // // // // // // //                         </a>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Tags */}
// // // // // // // // // //               <div className="rts-single-wized tags">
// // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // //                   <h5 className="title">Popular Tags</h5>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // //                   <div className="tags-wrapper">
// // // // // // // // // //                     {content.widgets.tags.map((tag, idx) => (
// // // // // // // // // //                       <a key={idx} href="#">
// // // // // // // // // //                         {tag}
// // // // // // // // // //                       </a>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Contact Widget */}
// // // // // // // // // //               <div className="rts-single-wized contact">
// // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // //                   <Link href="/">
// // // // // // // // // //                     <img
// // // // // // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // // // // // //                       alt="Business_logo"
// // // // // // // // // //                     />
// // // // // // // // // //                   </Link>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // //                   <h5 className="title">
// // // // // // // // // //                     {content.widgets.contactWidget.title}
// // // // // // // // // //                   </h5>
// // // // // // // // // //                   <Link
// // // // // // // // // //                     className="rts-btn btn-primary btn-white"
// // // // // // // // // //                     href={content.widgets.contactWidget.link}
// // // // // // // // // //                   >
// // // // // // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // // // // // //                   </Link>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default BlogArchive;




// // // // // // // // // // // 'use client';
// // // // // // // // // // // import React from 'react';

// // // // // // // // // // // export default function SubscribeCTA() {
// // // // // // // // // // //   return (
// // // // // // // // // // //     <>
// // // // // // // // // // //       <style jsx global>{`
// // // // // // // // // // //         /* 1. THE BREAKOUT FIX: This ensures the 'ends' are not cut off */
// // // // // // // // // // //         .shiny-breakout-section {
// // // // // // // // // // //           /* Force the section to be exactly as wide as the screen */
// // // // // // // // // // //           width: 100vw !important;
// // // // // // // // // // //           position: relative;
// // // // // // // // // // //           left: 50%;
// // // // // // // // // // //           right: 50%;
// // // // // // // // // // //           margin-left: -50vw;
// // // // // // // // // // //           margin-right: -50vw;

// // // // // // // // // // //           /* Background settings for clarity */
// // // // // // // // // // //           background-image: url('/images/cta/09.webp');
// // // // // // // // // // //           background-size: 100% 100%; /* Forces the whole image to fit exactly */
// // // // // // // // // // //           background-position: center;
// // // // // // // // // // //           background-repeat: no-repeat;
// // // // // // // // // // //           padding: 100px 0;

// // // // // // // // // // //           /* SHINY ENDING POINTS: Bright, visible lines at the top and bottom */
// // // // // // // // // // //           border-top: 4px solid #00d4ff; 
// // // // // // // // // // //           border-bottom: 4px solid #00d4ff;

// // // // // // // // // // //           /* Glow effect that reaches the absolute edges of the page */
// // // // // // // // // // //           box-shadow: 
// // // // // // // // // // //             inset 0 20px 40px rgba(0, 212, 255, 0.3),
// // // // // // // // // // //             inset 0 -20px 40px rgba(0, 212, 255, 0.3),
// // // // // // // // // // //             0 0 50px rgba(0, 212, 255, 0.2);
// // // // // // // // // // //         }

// // // // // // // // // // //         /* 2. ENSURING IMAGE CLARITY */
// // // // // // // // // // //         .overlay-layer {
// // // // // // // // // // //           position: absolute;
// // // // // // // // // // //           top: 0;
// // // // // // // // // // //           left: 0;
// // // // // // // // // // //           width: 100%;
// // // // // // // // // // //           height: 100%;
// // // // // // // // // // //           background: rgba(0, 0, 0, 0.4); /* Darkens slightly so text is clear */
// // // // // // // // // // //           z-index: 1;
// // // // // // // // // // //         }

// // // // // // // // // // //         /* 3. RESPONSIVE TEXT */
// // // // // // // // // // //         .cta-content {
// // // // // // // // // // //           position: relative;
// // // // // // // // // // //           z-index: 2;
// // // // // // // // // // //           display: flex;
// // // // // // // // // // //           justify-content: space-between;
// // // // // // // // // // //           align-items: center;
// // // // // // // // // // //           flex-wrap: wrap;
// // // // // // // // // // //           gap: 20px;
// // // // // // // // // // //         }

// // // // // // // // // // //         @media (max-width: 991px) {
// // // // // // // // // // //           .cta-content {
// // // // // // // // // // //             flex-direction: column;
// // // // // // // // // // //             text-align: center;
// // // // // // // // // // //           }
// // // // // // // // // // //         }
// // // // // // // // // // //       `}</style>

// // // // // // // // // // //       <div className="shiny-breakout-section">
// // // // // // // // // // //         <div className="overlay-layer"></div>

// // // // // // // // // // //         <div className="container">
// // // // // // // // // // //           <div className="cta-content">

// // // // // // // // // // //             <div className="left-side">
// // // // // // // // // // //               <span style={{ color: '#00d4ff', fontWeight: 'bold', letterSpacing: '2px' }}>
// // // // // // // // // // //                 SUBSCRIBE NEWSLETTER
// // // // // // // // // // //               </span>
// // // // // // // // // // //               <h2 style={{ color: '#fff', fontSize: '40px', margin: '10px 0' }}>
// // // // // // // // // // //                 Stay Updated with <br /> the Latest News!
// // // // // // // // // // //               </h2>
// // // // // // // // // // //             </div>

// // // // // // // // // // //             <form style={{ 
// // // // // // // // // // //               display: 'flex', 
// // // // // // // // // // //               background: 'rgba(255,255,255,0.1)', 
// // // // // // // // // // //               padding: '10px', 
// // // // // // // // // // //               borderRadius: '50px',
// // // // // // // // // // //               border: '1px solid rgba(0, 212, 255, 0.5)',
// // // // // // // // // // //               backdropFilter: 'blur(10px)',
// // // // // // // // // // //               width: '100%',
// // // // // // // // // // //               maxWidth: '500px'
// // // // // // // // // // //             }}>
// // // // // // // // // // //               <input 
// // // // // // // // // // //                 type="email" 
// // // // // // // // // // //                 placeholder="Enter Email Address" 
// // // // // // // // // // //                 style={{ background: 'transparent', border: 'none', color: '#fff', padding: '0 20px', flex: 1, outline: 'none' }} 
// // // // // // // // // // //               />
// // // // // // // // // // //               <button style={{ 
// // // // // // // // // // //                 background: '#00d4ff', 
// // // // // // // // // // //                 border: 'none', 
// // // // // // // // // // //                 padding: '15px 30px', 
// // // // // // // // // // //                 borderRadius: '50px', 
// // // // // // // // // // //                 fontWeight: 'bold',
// // // // // // // // // // //                 cursor: 'pointer',
// // // // // // // // // // //                 boxShadow: '0 0 15px rgba(0, 212, 255, 0.5)'
// // // // // // // // // // //               }}>
// // // // // // // // // // //                 Subscribe Now
// // // // // // // // // // //               </button>
// // // // // // // // // // //             </form>

// // // // // // // // // // //           </div>
// // // // // // // // // // //         </div>
// // // // // // // // // // //       </div>
// // // // // // // // // // //     </>
// // // // // // // // // // //   );
// // // // // // // // // // // }







// // // // // // // // // // "use client";
// // // // // // // // // // import React from "react";
// // // // // // // // // // import useSWR from "swr";
// // // // // // // // // // import Link from "next/link";

// // // // // // // // // // interface Breadcrumb {
// // // // // // // // // //   bgTitle: string;
// // // // // // // // // //   title: string;
// // // // // // // // // //   description: string;
// // // // // // // // // //   shapes: string[];
// // // // // // // // // // }

// // // // // // // // // // interface Post {
// // // // // // // // // //   thumbnail: string;
// // // // // // // // // //   date: string;
// // // // // // // // // //   category: string;
// // // // // // // // // //   title: string;
// // // // // // // // // //   description: string;
// // // // // // // // // //   link: string;
// // // // // // // // // //   delay: number;
// // // // // // // // // // }

// // // // // // // // // // interface RecentPost {
// // // // // // // // // //   thumbnail: string;
// // // // // // // // // //   date: string;
// // // // // // // // // //   title: string;
// // // // // // // // // //   link: string;
// // // // // // // // // // }

// // // // // // // // // // interface Widgets {
// // // // // // // // // //   categories: string[];
// // // // // // // // // //   recentPosts: RecentPost[];
// // // // // // // // // //   tags: string[];
// // // // // // // // // //   contactWidget: {
// // // // // // // // // //     logo: string;
// // // // // // // // // //     title: string;
// // // // // // // // // //     buttonText: string;
// // // // // // // // // //     link: string;
// // // // // // // // // //   };
// // // // // // // // // // }

// // // // // // // // // // interface BlogContent {
// // // // // // // // // //   breadcrumb: Breadcrumb;
// // // // // // // // // //   posts: Post[];
// // // // // // // // // //   pagination: string[];
// // // // // // // // // //   widgets: Widgets;
// // // // // // // // // // }

// // // // // // // // // // // ---------------- FETCHER ----------------
// // // // // // // // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // // // // // // // ---------------- COMPONENT ---------------
// // // // // // // // // // const BlogArchive = () => {
// // // // // // // // // //   const { data, error } = useSWR(
// // // // // // // // // //     "https://gba.mig.org.pk/api/news",
// // // // // // // // // //     fetcher
// // // // // // // // // //   );

// // // // // // // // // //   if (error) return <p>Failed to load data</p>;
// // // // // // // // // //   if (!data) return <p>Loading...</p>;

// // // // // // // // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // // // // // // // //   const mappedData: BlogContent = {
// // // // // // // // // //     breadcrumb: {
// // // // // // // // // //       bgTitle: "News",
// // // // // // // // // //       title: "Latest Updates",
// // // // // // // // // //       description: "GBC official announcements & activities",
// // // // // // // // // //       shapes: [
// // // // // // // // // //         "images/about/shape/01.png",
// // // // // // // // // //         "images/about/shape/02.png",
// // // // // // // // // //         "images/about/shape/03.png",
// // // // // // // // // //       ],
// // // // // // // // // //     },

// // // // // // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // // // // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // // // //       date: item?.created_at || "",
// // // // // // // // // //       category: String(item?.category || ""),
// // // // // // // // // //       title: item?.title || "",
// // // // // // // // // //       description: item?.description
// // // // // // // // // //         ? item.description.substring(0, 250) + "..."
// // // // // // // // // //         : "",
// // // // // // // // // //       link: `/blog-details/${item?.id}`,
// // // // // // // // // //       delay: 0.2 * index,
// // // // // // // // // //     })),

// // // // // // // // // //     pagination: [
// // // // // // // // // //       String(data?.pagination?.current_page ?? 1),
// // // // // // // // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // // // // // // // //     ],

// // // // // // // // // //     widgets: {
// // // // // // // // // //       categories: Array.from(
// // // // // // // // // //         new Set(
// // // // // // // // // //           apiPosts
// // // // // // // // // //             .map((item: any) => item?.category)
// // // // // // // // // //             .filter(Boolean)
// // // // // // // // // //             .map((cat: any) => String(cat))
// // // // // // // // // //         )
// // // // // // // // // //       ),

// // // // // // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // // // // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // // // //         date: item?.created_at || "",
// // // // // // // // // //         title: item?.title || "",
// // // // // // // // // //         link: `/blog-details/${item?.id}`,
// // // // // // // // // //       })),

// // // // // // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // // // // // //       contactWidget: {
// // // // // // // // // //         logo: "/images/logo/logo-2.svg",       
// // // // // // // // // //         title: "Need Help?",
// // // // // // // // // //         buttonText: "Contact Us",
// // // // // // // // // //         link: "/contact",
// // // // // // // // // //       },
// // // // // // // // // //     },
// // // // // // // // // //   };

// // // // // // // // // //   const content = mappedData;

// // // // // // // // // //   return (
// // // // // // // // // //     <>
// // // // // // // // // //       {/* Breadcrumb */}
// // // // // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // // // // //         <div className="container">
// // // // // // // // // //           <div className="row">
// // // // // // // // // //             <div className="col-lg-12">
// // // // // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // // // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // // // // // // //                   {content.breadcrumb.title}
// // // // // // // // // //                 </h1>
// // // // // // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>

// // // // // // // // // //         <div className="shape-area">
// // // // // // // // // //           {content.breadcrumb.shapes.map((shape, i) => (
// // // // // // // // // //             <img
// // // // // // // // // //               key={i}
// // // // // // // // // //               src={shape}
// // // // // // // // // //               alt="shape"
// // // // // // // // // //               className={["one", "two", "three"][i]}
// // // // // // // // // //             />
// // // // // // // // // //           ))}
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>

// // // // // // // // // //       {/* Blog Posts */}
// // // // // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // // // // //         <div className="container">
// // // // // // // // // //           <div className="row g-5">
// // // // // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // // // // //               {content.posts.map((post, i) => (
// // // // // // // // // //                 <div
// // // // // // // // // //                   key={i}
// // // // // // // // // //                   className="blog-single-post-listing"
// // // // // // // // // //                   data-animation="fadeInUp"
// // // // // // // // // //                   data-delay={post.delay}
// // // // // // // // // //                 >
// // // // // // // // // //                   <div className="thumbnail">
// // // // // // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // // // // // //                   </div>

// // // // // // // // // //                   <div className="blog-listing-content">
// // // // // // // // // //                     <div className="user-info">
// // // // // // // // // //                       <div className="single">
// // // // // // // // // //                         <i className="far fa-clock"></i>
// // // // // // // // // //                         <span>{post.date}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <div className="single">
// // // // // // // // // //                         <i className="far fa-tags"></i>
// // // // // // // // // //                         <span>{post.category}</span>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>

// // // // // // // // // //                     <Link className="blog-title" href={post.link}>
// // // // // // // // // //                       <h3 className="title">{post.title}</h3>
// // // // // // // // // //                     </Link>

// // // // // // // // // //                     <p className="disc">{post.description}</p>

// // // // // // // // // //                     <Link className="rts-btn btn-primary" href={post.link}>
// // // // // // // // // //                       Read Details
// // // // // // // // // //                     </Link>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               ))}

// // // // // // // // // //               {/* Pagination */}
// // // // // // // // // //               <div className="row">
// // // // // // // // // //                 <div className="col-12">
// // // // // // // // // //                   <div className="text-center">
// // // // // // // // // //                     <div className="pagination">
// // // // // // // // // //                       {content.pagination.map((page, idx) => (
// // // // // // // // // //                         <button
// // // // // // // // // //                           key={idx}
// // // // // // // // // //                           className={idx === 0 ? "active" : ""}
// // // // // // // // // //                         >
// // // // // // // // // //                           {page}
// // // // // // // // // //                         </button>
// // // // // // // // // //                       ))}
// // // // // // // // // //                       <button>
// // // // // // // // // //                         <i className="fal fa-angle-double-right"></i>
// // // // // // // // // //                       </button>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>

// // // // // // // // // //             {/* Widgets */}
// // // // // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // // // // //               {/* Categories */}
// // // // // // // // // //               <div className="rts-single-wized Categories">
// // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // //                   <h5 className="title">Categories</h5>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // // // // // // //                     <ul key={idx} className="single-categories">
// // // // // // // // // //                       <li>
// // // // // // // // // //                         <a href="#">
// // // // // // // // // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // // // // // // // // //                         </a>
// // // // // // // // // //                       </li>
// // // // // // // // // //                     </ul>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Recent Posts */}
// // // // // // // // // //               <div className="rts-single-wized Recent-post">
// // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // //                   <h5 className="title">Recent Posts</h5>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // // // // // //                     <div key={idx} className="recent-post-single">
// // // // // // // // // //                       <div className="thumbnail">
// // // // // // // // // //                         <a href={post.link}>
// // // // // // // // // //                           <img src={post.thumbnail} alt="Blog_post" />
// // // // // // // // // //                         </a>
// // // // // // // // // //                       </div>
// // // // // // // // // //                       <div className="content-area">
// // // // // // // // // //                         <div className="user">
// // // // // // // // // //                           <i className="fal fa-clock"></i>
// // // // // // // // // //                           <span>{post.date}</span>
// // // // // // // // // //                         </div>
// // // // // // // // // //                         <a className="post-title" href={post.link}>
// // // // // // // // // //                           <h6 className="title">{post.title}</h6>
// // // // // // // // // //                         </a>
// // // // // // // // // //                       </div>
// // // // // // // // // //                     </div>
// // // // // // // // // //                   ))}
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Tags */}
// // // // // // // // // //               <div className="rts-single-wized tags">
// // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // //                   <h5 className="title">Popular Tags</h5>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // //                   <div className="tags-wrapper">
// // // // // // // // // //                     {content.widgets.tags.map((tag, idx) => (
// // // // // // // // // //                       <a key={idx} href="#">
// // // // // // // // // //                         {tag}
// // // // // // // // // //                       </a>
// // // // // // // // // //                     ))}
// // // // // // // // // //                   </div>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>

// // // // // // // // // //               {/* Contact Widget */}
// // // // // // // // // //               <div className="rts-single-wized contact">
// // // // // // // // // //                 <div className="wized-header">
// // // // // // // // // //                   <a href="#">
// // // // // // // // // //                     <img
// // // // // // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // // // // // //                       alt="Business_logo"
// // // // // // // // // //                     />
// // // // // // // // // //                   </a>
// // // // // // // // // //                 </div>
// // // // // // // // // //                 <div className="wized-body">
// // // // // // // // // //                   <h5 className="title">
// // // // // // // // // //                     {content.widgets.contactWidget.title}
// // // // // // // // // //                   </h5>
// // // // // // // // // //                   <a
// // // // // // // // // //                     className="rts-btn btn-primary btn-white"
// // // // // // // // // //                     href={content.widgets.contactWidget.link}
// // // // // // // // // //                   >
// // // // // // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // // // // // //                   </a>
// // // // // // // // // //                 </div>
// // // // // // // // // //               </div>
// // // // // // // // // //             </div>
// // // // // // // // // //           </div>
// // // // // // // // // //         </div>
// // // // // // // // // //       </div>
// // // // // // // // // //     </>
// // // // // // // // // //   );
// // // // // // // // // // };

// // // // // // // // // // export default BlogArchive;





// // // // // // // // // "use client";
// // // // // // // // // import React from "react";
// // // // // // // // // import useSWR from "swr";
// // // // // // // // // import Link from "next/link";

// // // // // // // // // interface Breadcrumb {
// // // // // // // // //   bgTitle: string;
// // // // // // // // //   title: string;
// // // // // // // // //   description: string;
// // // // // // // // //   shapes: string[];
// // // // // // // // // }

// // // // // // // // // interface Post {
// // // // // // // // //   thumbnail: string;
// // // // // // // // //   date: string;
// // // // // // // // //   category: string;
// // // // // // // // //   title: string;
// // // // // // // // //   description: string;
// // // // // // // // //   link: string;
// // // // // // // // //   delay: number;
// // // // // // // // // }

// // // // // // // // // interface RecentPost {
// // // // // // // // //   thumbnail: string;
// // // // // // // // //   date: string;
// // // // // // // // //   title: string;
// // // // // // // // //   link: string;
// // // // // // // // // }

// // // // // // // // // interface Widgets {
// // // // // // // // //   categories: string[];
// // // // // // // // //   recentPosts: RecentPost[];
// // // // // // // // //   tags: string[];
// // // // // // // // //   contactWidget: {
// // // // // // // // //     logo: string;
// // // // // // // // //     title: string;
// // // // // // // // //     buttonText: string;
// // // // // // // // //     link: string;
// // // // // // // // //   };
// // // // // // // // // }

// // // // // // // // // interface BlogContent {
// // // // // // // // //   breadcrumb: Breadcrumb;
// // // // // // // // //   posts: Post[];
// // // // // // // // //   pagination: string[];
// // // // // // // // //   widgets: Widgets;
// // // // // // // // // }

// // // // // // // // // // ---------------- FETCHER ----------------
// // // // // // // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // // // // // // ---------------- COMPONENT ---------------
// // // // // // // // // const BlogArchive = () => {
// // // // // // // // //   const { data, error } = useSWR(
// // // // // // // // //     "https://gba.mig.org.pk/api/news",
// // // // // // // // //     fetcher
// // // // // // // // //   );

// // // // // // // // //   if (error) return <p>Failed to load data</p>;
// // // // // // // // //   if (!data) return <p>Loading...</p>;

// // // // // // // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // // // // // // //   const mappedData: BlogContent = {
// // // // // // // // //     breadcrumb: {
// // // // // // // // //       bgTitle: "News",
// // // // // // // // //       title: "Latest Updates",
// // // // // // // // //       description: "GBC official announcements & activities",
// // // // // // // // //       shapes: [
// // // // // // // // //         "images/about/shape/01.png",
// // // // // // // // //         "images/about/shape/02.png",
// // // // // // // // //         "images/about/shape/03.png",
// // // // // // // // //       ],
// // // // // // // // //     },

// // // // // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // // // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // // //       date: item?.created_at || "",
// // // // // // // // //       category: String(item?.category || ""),
// // // // // // // // //       title: item?.title || "",
// // // // // // // // //       description: item?.description
// // // // // // // // //         ? item.description.substring(0, 250) + "..."
// // // // // // // // //         : "",
// // // // // // // // //       link: `/blog-details/${item?.id}`,
// // // // // // // // //       delay: 0.2 * index,
// // // // // // // // //     })),

// // // // // // // // //     pagination: [
// // // // // // // // //       String(data?.pagination?.current_page ?? 1),
// // // // // // // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // // // // // // //     ],

// // // // // // // // //     widgets: {
// // // // // // // // //       categories: Array.from(
// // // // // // // // //         new Set(
// // // // // // // // //           apiPosts
// // // // // // // // //             .map((item: any) => item?.category)
// // // // // // // // //             .filter(Boolean)
// // // // // // // // //             .map((cat: any) => String(cat))
// // // // // // // // //         )
// // // // // // // // //       ),

// // // // // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // // // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // // //         date: item?.created_at || "",
// // // // // // // // //         title: item?.title || "",
// // // // // // // // //         link: `/blog-details/${item?.id}`,
// // // // // // // // //       })),

// // // // // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // // // // //       contactWidget: {
// // // // // // // // //         logo: "/images/logo/logo-2.svg",       
// // // // // // // // //         title: "Need Help?",
// // // // // // // // //         buttonText: "Contact Us",
// // // // // // // // //         link: "/contact-2",
// // // // // // // // //       },
// // // // // // // // //     },
// // // // // // // // //   };

// // // // // // // // //   const content = mappedData;

// // // // // // // // //   return (
// // // // // // // // //     <>
// // // // // // // // //       {/* Breadcrumb */}
// // // // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // // // //         <div className="container">
// // // // // // // // //           <div className="row">
// // // // // // // // //             <div className="col-lg-12">
// // // // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // // // // // //                   {content.breadcrumb.title}
// // // // // // // // //                 </h1>
// // // // // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>

// // // // // // // // //         <div className="shape-area">
// // // // // // // // //           {content.breadcrumb.shapes.map((shape, i) => (
// // // // // // // // //             <img
// // // // // // // // //               key={i}
// // // // // // // // //               src={shape}
// // // // // // // // //               alt="shape"
// // // // // // // // //               className={["one", "two", "three"][i]}
// // // // // // // // //             />
// // // // // // // // //           ))}
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       {/* Blog Posts */}
// // // // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // // // //         <div className="container">
// // // // // // // // //           <div className="row g-5">
// // // // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // // // //               {content.posts.map((post, i) => (
// // // // // // // // //                 <div
// // // // // // // // //                   key={i}
// // // // // // // // //                   className="blog-single-post-listing"
// // // // // // // // //                   data-animation="fadeInUp"
// // // // // // // // //                   data-delay={post.delay}
// // // // // // // // //                 >
// // // // // // // // //                   <div className="thumbnail">
// // // // // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // // // // //                   </div>

// // // // // // // // //                   <div className="blog-listing-content">
// // // // // // // // //                     <div className="user-info">
// // // // // // // // //                       <div className="single">
// // // // // // // // //                         <i className="far fa-clock"></i>
// // // // // // // // //                         <span>{post.date}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                       <div className="single">
// // // // // // // // //                         <i className="far fa-tags"></i>
// // // // // // // // //                         <span>{post.category}</span>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>

// // // // // // // // //                     <Link className="blog-title" href={post.link}>
// // // // // // // // //                       <h3 className="title">{post.title}</h3>
// // // // // // // // //                     </Link>

// // // // // // // // //                     <p className="disc">{post.description}</p>

// // // // // // // // //                     <Link className="rts-btn btn-primary" href={post.link}>
// // // // // // // // //                       Read Details
// // // // // // // // //                     </Link>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               ))}

// // // // // // // // //               {/* Pagination */}
// // // // // // // // //               <div className="row">
// // // // // // // // //                 <div className="col-12">
// // // // // // // // //                   <div className="text-center">
// // // // // // // // //                     <div className="pagination">
// // // // // // // // //                       {content.pagination.map((page, idx) => (
// // // // // // // // //                         <button
// // // // // // // // //                           key={idx}
// // // // // // // // //                           className={idx === 0 ? "active" : ""}
// // // // // // // // //                         >
// // // // // // // // //                           {page}
// // // // // // // // //                         </button>
// // // // // // // // //                       ))}
// // // // // // // // //                       <button>
// // // // // // // // //                         <i className="fal fa-angle-double-right"></i>
// // // // // // // // //                       </button>
// // // // // // // // //                     </div>
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>

// // // // // // // // //             {/* Widgets */}
// // // // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // // // //               {/* Categories */}
// // // // // // // // //               <div className="rts-single-wized Categories">
// // // // // // // // //                 <div className="wized-header">
// // // // // // // // //                   <h5 className="title">Categories</h5>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="wized-body">
// // // // // // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // // // // // //                     <ul key={idx} className="single-categories">
// // // // // // // // //                       <li>
// // // // // // // // //                         <a href="#">
// // // // // // // // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // // // // // // // //                         </a>
// // // // // // // // //                       </li>
// // // // // // // // //                     </ul>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>

// // // // // // // // //               {/* Recent Posts - UPDATED FOR PIC 2 STYLE */}
// // // // // // // // //               <div className="rts-single-wized Recent-post">
// // // // // // // // //                 <div className="wized-header">
// // // // // // // // //                   <h5 className="title">Recent Posts</h5>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="wized-body">
// // // // // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // // // // //                     <div key={idx} className="recent-post-single custom-recent-row">
// // // // // // // // //                       <div className="thumbnail recent-thumb-fixed">
// // // // // // // // //                         <Link href={post.link}>
// // // // // // // // //                           <img src={post.thumbnail} alt="Blog_post" className="pic2-img" />
// // // // // // // // //                         </Link>
// // // // // // // // //                       </div>
// // // // // // // // //                       <div className="content-area">
// // // // // // // // //                         <div className="user">
// // // // // // // // //                           <i className="fal fa-clock"></i>
// // // // // // // // //                           <span>{post.date}</span>
// // // // // // // // //                         </div>
// // // // // // // // //                         <Link className="post-title" href={post.link}>
// // // // // // // // //                           <h6 className="title pic2-title-style">{post.title}</h6>
// // // // // // // // //                         </Link>
// // // // // // // // //                       </div>
// // // // // // // // //                     </div>
// // // // // // // // //                   ))}
// // // // // // // // //                 </div>
// // // // // // // // //               </div>

// // // // // // // // //               {/* Tags */}
// // // // // // // // //               <div className="rts-single-wized tags">
// // // // // // // // //                 <div className="wized-header">
// // // // // // // // //                   <h5 className="title">Popular Tags</h5>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="wized-body">
// // // // // // // // //                   <div className="tags-wrapper">
// // // // // // // // //                     {content.widgets.tags.map((tag, idx) => (
// // // // // // // // //                       <a key={idx} href="#">
// // // // // // // // //                         {tag}
// // // // // // // // //                       </a>
// // // // // // // // //                     ))}
// // // // // // // // //                   </div>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>

// // // // // // // // //               {/* Contact Widget */}
// // // // // // // // //               <div className="rts-single-wized contact">
// // // // // // // // //                 <div className="wized-header">
// // // // // // // // //                   <a href="#">
// // // // // // // // //                     <img
// // // // // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // // // // //                       alt="Business_logo"
// // // // // // // // //                     />
// // // // // // // // //                   </a>
// // // // // // // // //                 </div>
// // // // // // // // //                 <div className="wized-body">
// // // // // // // // //                   <h5 className="title">
// // // // // // // // //                     {content.widgets.contactWidget.title}
// // // // // // // // //                   </h5>
// // // // // // // // //                   <a
// // // // // // // // //                     className="rts-btn btn-primary btn-white"
// // // // // // // // //                     href={content.widgets.contactWidget.link}
// // // // // // // // //                   >
// // // // // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // // // // //                   </a>
// // // // // // // // //                 </div>
// // // // // // // // //               </div>
// // // // // // // // //             </div>
// // // // // // // // //           </div>
// // // // // // // // //         </div>
// // // // // // // // //       </div>

// // // // // // // // //       <style jsx>{`
// // // // // // // // //         /* PIC 2 STYLE IMPLEMENTATION */
// // // // // // // // //         .custom-recent-row {
// // // // // // // // //           display: flex !important;
// // // // // // // // //           align-items: flex-start !important;
// // // // // // // // //           gap: 15px;
// // // // // // // // //           margin-bottom: 20px;
// // // // // // // // //           border-bottom: none !important;
// // // // // // // // //         }

// // // // // // // // //         .recent-thumb-fixed {
// // // // // // // // //           width: 80px !important;
// // // // // // // // //           height: 80px !important;
// // // // // // // // //           min-width: 80px !important;
// // // // // // // // //           overflow: hidden;
// // // // // // // // //           border-radius: 6px;
// // // // // // // // //         }

// // // // // // // // //         .pic2-img {
// // // // // // // // //           width: 100% !important;
// // // // // // // // //           height: 100% !important;
// // // // // // // // //           object-fit: cover !important;
// // // // // // // // //           display: block;
// // // // // // // // //         }

// // // // // // // // //         .pic2-title-style {
// // // // // // // // //           font-size: 15px !important;
// // // // // // // // //           line-height: 1.4 !important;
// // // // // // // // //           font-weight: 600 !important;
// // // // // // // // //           margin-top: 5px !important;
// // // // // // // // //           color: #1c1c1c;
// // // // // // // // //           /* Line clamping to keep height same */
// // // // // // // // //           display: -webkit-box;
// // // // // // // // //           -webkit-line-clamp: 2;
// // // // // // // // //           -webkit-box-orient: vertical;
// // // // // // // // //           overflow: hidden;
// // // // // // // // //         }

// // // // // // // // //         .content-area .user {
// // // // // // // // //           font-size: 13px;
// // // // // // // // //           color: #666;
// // // // // // // // //           display: flex;
// // // // // // // // //           align-items: center;
// // // // // // // // //           gap: 6px;
// // // // // // // // //           margin-bottom: 2px;
// // // // // // // // //         }

// // // // // // // // //         .wized-body {
// // // // // // // // //           padding-top: 15px !important;
// // // // // // // // //         }
// // // // // // // // //       `}</style>
// // // // // // // // //     </>
// // // // // // // // //   );
// // // // // // // // // };

// // // // // // // // // export default BlogArchive;




// // // // // // // // "use client";
// // // // // // // // import React from "react";
// // // // // // // // import useSWR from "swr";
// // // // // // // // import Link from "next/link";

// // // // // // // // /* 🔹 SLUG HELPER (ADDED ONLY) */
// // // // // // // // const makeSlug = (text: string) =>
// // // // // // // //   text
// // // // // // // //     .toLowerCase()
// // // // // // // //     .trim()
// // // // // // // //     .replace(/[^a-z0-9\s-]/g, "")
// // // // // // // //     .replace(/\s+/g, "-");

// // // // // // // // interface Breadcrumb {
// // // // // // // //   bgTitle: string;
// // // // // // // //   title: string;
// // // // // // // //   description: string;
// // // // // // // //   shapes: string[];
// // // // // // // // }

// // // // // // // // interface Post {
// // // // // // // //   thumbnail: string;
// // // // // // // //   date: string;
// // // // // // // //   category: string;
// // // // // // // //   title: string;
// // // // // // // //   description: string;
// // // // // // // //   link: string;
// // // // // // // //   delay: number;
// // // // // // // // }

// // // // // // // // interface RecentPost {
// // // // // // // //   thumbnail: string;
// // // // // // // //   date: string;
// // // // // // // //   title: string;
// // // // // // // //   link: string;
// // // // // // // // }

// // // // // // // // interface Widgets {
// // // // // // // //   categories: string[];
// // // // // // // //   recentPosts: RecentPost[];
// // // // // // // //   tags: string[];
// // // // // // // //   contactWidget: {
// // // // // // // //     logo: string;
// // // // // // // //     title: string;
// // // // // // // //     buttonText: string;
// // // // // // // //     link: string;
// // // // // // // //   };
// // // // // // // // }

// // // // // // // // interface BlogContent {
// // // // // // // //   breadcrumb: Breadcrumb;
// // // // // // // //   posts: Post[];
// // // // // // // //   pagination: string[];
// // // // // // // //   widgets: Widgets;
// // // // // // // // }

// // // // // // // // // ---------------- FETCHER ----------------
// // // // // // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // // // // // ---------------- COMPONENT ---------------
// // // // // // // // const BlogArchive = () => {
// // // // // // // //   const { data, error } = useSWR(
// // // // // // // //     "https://gba.mig.org.pk/api/news",
// // // // // // // //     fetcher
// // // // // // // //   );

// // // // // // // //   if (error) return <p>Failed to load data</p>;
// // // // // // // //   if (!data) return <p>Loading...</p>;

// // // // // // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // // // // // //   const mappedData: BlogContent = {
// // // // // // // //     breadcrumb: {
// // // // // // // //       bgTitle: "News",
// // // // // // // //       title: "Latest Updates",
// // // // // // // //       description: "GBC official announcements & activities",
// // // // // // // //       shapes: [
// // // // // // // //         "images/about/shape/01.png",
// // // // // // // //         "images/about/shape/02.png",
// // // // // // // //         "images/about/shape/03.png",
// // // // // // // //       ],
// // // // // // // //     },

// // // // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // //       date: item?.created_at || "",
// // // // // // // //       category: String(item?.category || ""),
// // // // // // // //       title: item?.title || "",
// // // // // // // //       description: item?.description
// // // // // // // //         ? item.description.substring(0, 250) + "..."
// // // // // // // //         : "",
// // // // // // // //       /* 🔹 UPDATED LINK (ID ➜ SLUG) */
// // // // // // // //       link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // // // // //       delay: 0.2 * index,
// // // // // // // //     })),

// // // // // // // //     pagination: [
// // // // // // // //       String(data?.pagination?.current_page ?? 1),
// // // // // // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // // // // // //     ],

// // // // // // // //     widgets: {
// // // // // // // //       categories: Array.from(
// // // // // // // //         new Set(
// // // // // // // //           apiPosts
// // // // // // // //             .map((item: any) => item?.category)
// // // // // // // //             .filter(Boolean)
// // // // // // // //             .map((cat: any) => String(cat))
// // // // // // // //         )
// // // // // // // //       ),

// // // // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // //         date: item?.created_at || "",
// // // // // // // //         title: item?.title || "",
// // // // // // // //         /* 🔹 UPDATED LINK (ID ➜ SLUG) */
// // // // // // // //         link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // // // // //       })),

// // // // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // // // //       contactWidget: {
// // // // // // // //         logo: "/images/logo/Archive.png",
// // // // // // // //         title: "Need Help?",
// // // // // // // //         buttonText: "Contact Us",
// // // // // // // //         link: "/contact-2",
// // // // // // // //       },
// // // // // // // //     },
// // // // // // // //   };

// // // // // // // //   const content = mappedData;

// // // // // // // //   return (

// // // // // // // //     <>
// // // // // // // //       {/* Breadcrumb */}
// // // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // // //         <div className="container">
// // // // // // // //           <div className="row">
// // // // // // // //             <div className="col-lg-12">
// // // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // // // // //                   {content.breadcrumb.title}
// // // // // // // //                 </h1>
// // // // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>

// // // // // // // //         <div className="shape-area">
// // // // // // // //           {content.breadcrumb.shapes.map((shape, i) => (
// // // // // // // //             <img
// // // // // // // //               key={i}
// // // // // // // //               src={shape}
// // // // // // // //               alt="shape"
// // // // // // // //               className={["one", "two", "three"][i]}
// // // // // // // //             />
// // // // // // // //           ))}
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Blog Posts */}
// // // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // // //         <div className="container">
// // // // // // // //           <div className="row g-5">
// // // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // // //               {content.posts.map((post, i) => (
// // // // // // // //                 <div
// // // // // // // //                   key={i}
// // // // // // // //                   className="blog-single-post-listing"
// // // // // // // //                   data-animation="fadeInUp"
// // // // // // // //                   data-delay={post.delay}
// // // // // // // //                 >
// // // // // // // //                   <div className="thumbnail">
// // // // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // // // //                   </div>

// // // // // // // //                   <div className="blog-listing-content">
// // // // // // // //                     <div className="user-info">
// // // // // // // //                       <div className="single">
// // // // // // // //                         <i className="far fa-clock"></i>
// // // // // // // //                         <span>{post.date}</span>
// // // // // // // //                       </div>
// // // // // // // //                       <div className="single">
// // // // // // // //                         <i className="far fa-tags"></i>
// // // // // // // //                         <span>{post.category}</span>
// // // // // // // //                       </div>
// // // // // // // //                     </div>

// // // // // // // //                     <Link className="blog-title" href={post.link}>
// // // // // // // //                       <h3 className="title">{post.title}</h3>
// // // // // // // //                     </Link>

// // // // // // // //                     <p className="disc">{post.description}</p>

// // // // // // // //                     <Link className="rts-btn btn-primary" href={post.link}>
// // // // // // // //                       Read Details
// // // // // // // //                     </Link>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               ))}

// // // // // // // //               {/* Pagination */}
// // // // // // // //               <div className="row">
// // // // // // // //                 <div className="col-12">
// // // // // // // //                   <div className="text-center">
// // // // // // // //                     <div className="pagination">
// // // // // // // //                       {content.pagination.map((page, idx) => (
// // // // // // // //                         <button
// // // // // // // //                           key={idx}
// // // // // // // //                           className={idx === 0 ? "active" : ""}
// // // // // // // //                         >
// // // // // // // //                           {page}
// // // // // // // //                         </button>
// // // // // // // //                       ))}
// // // // // // // //                       <button>
// // // // // // // //                         <i className="fal fa-angle-double-right"></i>
// // // // // // // //                       </button>
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Widgets */}
// // // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // // //               {/* Categories */}
// // // // // // // //               <div className="rts-single-wized Categories">
// // // // // // // //                 <div className="wized-header">
// // // // // // // //                   <h5 className="title">Categories</h5>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="wized-body">
// // // // // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // // // // //                     <ul key={idx} className="single-categories">
// // // // // // // //                       <li>
// // // // // // // //                         <a href="#">
// // // // // // // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // // // // // // //                         </a>
// // // // // // // //                       </li>
// // // // // // // //                     </ul>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Recent Posts - UPDATED FOR PIC 2 STYLE */}
// // // // // // // //               <div className="rts-single-wized Recent-post">
// // // // // // // //                 <div className="wized-header">
// // // // // // // //                   <h5 className="title">Recent Posts</h5>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="wized-body">
// // // // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // // // //                     <div key={idx} className="recent-post-single custom-recent-row">
// // // // // // // //                       <div className="thumbnail recent-thumb-fixed">
// // // // // // // //                         <Link href={post.link}>
// // // // // // // //                           <img src={post.thumbnail} alt="Blog_post" className="pic2-img" />
// // // // // // // //                         </Link>
// // // // // // // //                       </div>
// // // // // // // //                       <div className="content-area">
// // // // // // // //                         <div className="user">
// // // // // // // //                           <i className="fal fa-clock"></i>
// // // // // // // //                           <span>{post.date}</span>
// // // // // // // //                         </div>
// // // // // // // //                         <Link className="post-title" href={post.link}>
// // // // // // // //                           <h6 className="title pic2-title-style">{post.title}</h6>
// // // // // // // //                         </Link>
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Tags */}
// // // // // // // //               <div className="rts-single-wized tags">
// // // // // // // //                 <div className="wized-header">
// // // // // // // //                   <h5 className="title">Popular Tags</h5>
// // // // // // // //                 </div>
// // // // // // // //                 <div className="wized-body">
// // // // // // // //                   <div className="tags-wrapper">
// // // // // // // //                     {content.widgets.tags.map((tag, idx) => (
// // // // // // // //                       <a key={idx} href="#">
// // // // // // // //                         {tag}
// // // // // // // //                       </a>
// // // // // // // //                     ))}
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Contact Widget
// // // // // // // //               <div className="rts-single-wized contact">
// // // // // // // //                 <div className="wized-header" >
// // // // // // // //                   <a href="#">
// // // // // // // //                     <img
// // // // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // // // //                       alt="Business_logo"
// // // // // // // //                     />
// // // // // // // //                   </a>
// // // // // // // //                 </div> */}
// // // // // // // //               {/* Contact Widget */}
// // // // // // // //               <div className="rts-single-wized contact">
// // // // // // // //                 <div className="wized-header" style={{ textAlign: 'center', padding: '10px 0' }}>
// // // // // // // //                   <a href="#">
// // // // // // // //                     <img
// // // // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // // // //                       alt="Business_logo"
// // // // // // // //                       style={{
// // // // // // // //                         maxWidth: '70%',  // Logo ki width choti karne ke liye
// // // // // // // //                         // height: 'auto',      // Aspect ratio maintain rakhne ke liye
// // // // // // // //                         display: 'block',    // Center karne ke liye
// // // // // // // //                         margin: '0 auto',    // Center karne ke liye
// // // // // // // //                         objectFit: 'contain'
// // // // // // // //                       }}
// // // // // // // //                     />
// // // // // // // //                   </a>
// // // // // // // //                 </div>
// // // // // // // //                 {/* Baki ka content yahan ayega */}

// // // // // // // //                 <div className="wized-body">
// // // // // // // //                   <h5 className="title">
// // // // // // // //                     {content.widgets.contactWidget.title}
// // // // // // // //                   </h5>
// // // // // // // //                   <a
// // // // // // // //                     className="rts-btn btn-primary btn-white"
// // // // // // // //                     href={content.widgets.contactWidget.link}
// // // // // // // //                   >
// // // // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // // // //                   </a>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <style jsx>{`
// // // // // // // //         /* PIC 2 STYLE IMPLEMENTATION */
// // // // // // // //         .custom-recent-row {
// // // // // // // //           display: flex !important;
// // // // // // // //           align-items: flex-start !important;
// // // // // // // //           gap: 15px;
// // // // // // // //           margin-bottom: 20px;
// // // // // // // //           border-bottom: none !important;
// // // // // // // //         }

// // // // // // // //         .recent-thumb-fixed {
// // // // // // // //           width: 80px !important;
// // // // // // // //           height: 80px !important;
// // // // // // // //           min-width: 80px !important;
// // // // // // // //           overflow: hidden;
// // // // // // // //           border-radius: 6px;
// // // // // // // //         }

// // // // // // // //         .pic2-img {
// // // // // // // //           width: 100% !important;
// // // // // // // //           height: 100% !important;
// // // // // // // //           object-fit: cover !important;
// // // // // // // //           display: block;
// // // // // // // //         }

// // // // // // // //         .pic2-title-style {
// // // // // // // //           font-size: 15px !important;
// // // // // // // //           line-height: 1.4 !important;
// // // // // // // //           font-weight: 600 !important;
// // // // // // // //           margin-top: 5px !important;
// // // // // // // //           color: #1c1c1c;
// // // // // // // //           /* Line clamping to keep height same */
// // // // // // // //           display: -webkit-box;
// // // // // // // //           -webkit-line-clamp: 2;
// // // // // // // //           -webkit-box-orient: vertical;
// // // // // // // //           overflow: hidden;
// // // // // // // //         }

// // // // // // // //         .content-area .user {
// // // // // // // //           font-size: 13px;
// // // // // // // //           color: #666;
// // // // // // // //           display: flex;
// // // // // // // //           align-items: center;
// // // // // // // //           gap: 6px;
// // // // // // // //           margin-bottom: 2px;
// // // // // // // //         }

// // // // // // // //         .wized-body {
// // // // // // // //           padding-top: 15px !important;
// // // // // // // //         }
// // // // // // // //       `}</style>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default BlogArchive;




// // // // // // // // "use client";
// // // // // // // // import React from "react";
// // // // // // // // import useSWR from "swr";
// // // // // // // // import Link from "next/link";

// // // // // // // // /* 🔹 SLUG HELPER */
// // // // // // // // const makeSlug = (text: string) =>
// // // // // // // //   text
// // // // // // // //     .toLowerCase()
// // // // // // // //     .trim()
// // // // // // // //     .replace(/[^a-z0-9\s-]/g, "")
// // // // // // // //     .replace(/\s+/g, "-");

// // // // // // // // interface Breadcrumb {
// // // // // // // //   bgTitle: string;
// // // // // // // //   title: string;
// // // // // // // //   description: string;
// // // // // // // //   shapes: string[];
// // // // // // // // }

// // // // // // // // interface Post {
// // // // // // // //   thumbnail: string;
// // // // // // // //   date: string;
// // // // // // // //   category: string;
// // // // // // // //   title: string;
// // // // // // // //   description: string;
// // // // // // // //   link: string;
// // // // // // // //   fb_link: string | null; // 🔹 Added this to hold the FB URL
// // // // // // // //   delay: number;
// // // // // // // // }

// // // // // // // // interface RecentPost {
// // // // // // // //   thumbnail: string;
// // // // // // // //   date: string;
// // // // // // // //   title: string;
// // // // // // // //   link: string;
// // // // // // // // }

// // // // // // // // interface Widgets {
// // // // // // // //   categories: string[];
// // // // // // // //   recentPosts: RecentPost[];
// // // // // // // //   tags: string[];
// // // // // // // //   contactWidget: {
// // // // // // // //     logo: string;
// // // // // // // //     title: string;
// // // // // // // //     buttonText: string;
// // // // // // // //     link: string;
// // // // // // // //   };
// // // // // // // // }

// // // // // // // // interface BlogContent {
// // // // // // // //   breadcrumb: Breadcrumb;
// // // // // // // //   posts: Post[];
// // // // // // // //   pagination: string[];
// // // // // // // //   widgets: Widgets;
// // // // // // // // }

// // // // // // // // // ---------------- FETCHER ----------------
// // // // // // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // // // // // ---------------- COMPONENT ---------------
// // // // // // // // const BlogArchive = () => {
// // // // // // // //   const { data, error } = useSWR(
// // // // // // // //     "https://gba.mig.org.pk/api/news",
// // // // // // // //     fetcher
// // // // // // // //   );

// // // // // // // //   if (error) return <p>Failed to load data</p>;
// // // // // // // //   if (!data) return <p>Loading...</p>;

// // // // // // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // // // // // //   const mappedData: BlogContent = {
// // // // // // // //     breadcrumb: {
// // // // // // // //       bgTitle: "News",
// // // // // // // //       title: "Latest Updates",
// // // // // // // //       description: "GBC official announcements & activities",
// // // // // // // //       shapes: [
// // // // // // // //         "images/about/shape/01.png",
// // // // // // // //         "images/about/shape/02.png",
// // // // // // // //         "images/about/shape/03.png",
// // // // // // // //       ],
// // // // // // // //     },

// // // // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // //       date: item?.created_at || "",
// // // // // // // //       category: String(item?.category || ""),
// // // // // // // //       title: item?.title || "",
// // // // // // // //       description: item?.description
// // // // // // // //         ? item.description.substring(0, 250) + "..."
// // // // // // // //         : "",
// // // // // // // //       link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // // // // //       fb_link: item?.fb_post_url, // 🔹 Mapping the FB URL from API
// // // // // // // //       delay: 0.2 * index,
// // // // // // // //     })),

// // // // // // // //     pagination: [
// // // // // // // //       String(data?.pagination?.current_page ?? 1),
// // // // // // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // // // // // //     ],

// // // // // // // //     widgets: {
// // // // // // // //       categories: Array.from(
// // // // // // // //         new Set(
// // // // // // // //           apiPosts
// // // // // // // //             .map((item: any) => item?.category)
// // // // // // // //             .filter(Boolean)
// // // // // // // //             .map((cat: any) => String(cat))
// // // // // // // //         )
// // // // // // // //       ),

// // // // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // // //         date: item?.created_at || "",
// // // // // // // //         title: item?.title || "",
// // // // // // // //         link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // // // // //       })),

// // // // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // // // //       contactWidget: {
// // // // // // // //         logo: "/images/logo/Archive.png",
// // // // // // // //         title: "Need Help?",
// // // // // // // //         buttonText: "Contact Us",
// // // // // // // //         link: "/contact-2",
// // // // // // // //       },
// // // // // // // //     },
// // // // // // // //   };

// // // // // // // //   const content = mappedData;

// // // // // // // //   return (
// // // // // // // //     <>
// // // // // // // //       {/* Breadcrumb Section (Keep as is) */}
// // // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // // //         <div className="container">
// // // // // // // //           <div className="row">
// // // // // // // //             <div className="col-lg-12">
// // // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // // // // //                   {content.breadcrumb.title}
// // // // // // // //                 </h1>
// // // // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       {/* Blog Posts */}
// // // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // // //         <div className="container">
// // // // // // // //           <div className="row g-5">
// // // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // // //               {content.posts.map((post, i) => (
// // // // // // // //                 <div
// // // // // // // //                   key={i}
// // // // // // // //                   className="blog-single-post-listing"
// // // // // // // //                   data-animation="fadeInUp"
// // // // // // // //                   data-delay={post.delay}
// // // // // // // //                 >
// // // // // // // //                   <div className="thumbnail">
// // // // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // // // //                   </div>

// // // // // // // //                   <div className="blog-listing-content">
// // // // // // // //                     <div className="user-info">
// // // // // // // //                       <div className="single">
// // // // // // // //                         <i className="far fa-clock"></i>
// // // // // // // //                         <span>{post.date}</span>
// // // // // // // //                       </div>
// // // // // // // //                       <div className="single">
// // // // // // // //                         <i className="far fa-tags"></i>
// // // // // // // //                         <span>{post.category}</span>
// // // // // // // //                       </div>
// // // // // // // //                     </div>

// // // // // // // //                     <Link className="blog-title" href={post.link}>
// // // // // // // //                       <h3 className="title">{post.title}</h3>
// // // // // // // //                     </Link>

// // // // // // // //                     <p className="disc">{post.description}</p>

// // // // // // // //                     {/* 🔹 CONDITIONAL BUTTON LOGIC START */}
// // // // // // // //                     {post.fb_link && (
// // // // // // // //                       <Link 
// // // // // // // //                         className="rts-btn btn-primary" 
// // // // // // // //                         href={post.fb_link} 
// // // // // // // //                         target="_blank" 
// // // // // // // //                         rel="noopener noreferrer"
// // // // // // // //                       >
// // // // // // // //                         Read Details
// // // // // // // //                       </Link>
// // // // // // // //                     )}
// // // // // // // //                     {/* 🔹 CONDITIONAL BUTTON LOGIC END */}
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               ))}

// // // // // // // //               {/* Pagination (Keep as is) */}
// // // // // // // //               <div className="row">
// // // // // // // //                 <div className="col-12">
// // // // // // // //                   <div className="text-center">
// // // // // // // //                     <div className="pagination">
// // // // // // // //                       {content.pagination.map((page, idx) => (
// // // // // // // //                         <button key={idx} className={idx === 0 ? "active" : ""}>
// // // // // // // //                           {page}
// // // // // // // //                         </button>
// // // // // // // //                       ))}
// // // // // // // //                     </div>
// // // // // // // //                   </div>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>

// // // // // // // //             {/* Sidebar / Widgets (Keep as is) */}
// // // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // // //               {/* ... All Sidebar Widgets same as your code ... */}
// // // // // // // //               <div className="rts-single-wized Categories">
// // // // // // // //                 <div className="wized-header"><h5 className="title">Categories</h5></div>
// // // // // // // //                 <div className="wized-body">
// // // // // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // // // // //                     <ul key={idx} className="single-categories">
// // // // // // // //                       <li><a href="#">{cat} <i className="far fa-long-arrow-right"></i></a></li>
// // // // // // // //                     </ul>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Recent Posts */}
// // // // // // // //               <div className="rts-single-wized Recent-post">
// // // // // // // //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// // // // // // // //                 <div className="wized-body">
// // // // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // // // //                     <div key={idx} className="recent-post-single custom-recent-row">
// // // // // // // //                       <div className="thumbnail recent-thumb-fixed">
// // // // // // // //                         <Link href={post.link}><img src={post.thumbnail} alt="Blog_post" className="pic2-img" /></Link>
// // // // // // // //                       </div>
// // // // // // // //                       <div className="content-area">
// // // // // // // //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// // // // // // // //                         <Link className="post-title" href={post.link}>
// // // // // // // //                           <h6 className="title pic2-title-style">{post.title}</h6>
// // // // // // // //                         </Link>
// // // // // // // //                       </div>
// // // // // // // //                     </div>
// // // // // // // //                   ))}
// // // // // // // //                 </div>
// // // // // // // //               </div>

// // // // // // // //               {/* Contact Widget Styling Applied */}
// // // // // // // //               <div className="rts-single-wized contact">
// // // // // // // //                 <div className="wized-header" style={{ textAlign: 'center', padding: '10px 0' }}>
// // // // // // // //                     <img
// // // // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // // // //                       alt="Business_logo"
// // // // // // // //                       style={{ maxWidth: '100px', display: 'block', margin: '0 auto', objectFit: 'contain' }}
// // // // // // // //                     />
// // // // // // // //                 </div>
// // // // // // // //                 <div className="wized-body">
// // // // // // // //                   <h5 className="title">{content.widgets.contactWidget.title}</h5>
// // // // // // // //                   <Link className="rts-btn btn-primary btn-white" href={content.widgets.contactWidget.link}>
// // // // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // // // //                   </Link>
// // // // // // // //                 </div>
// // // // // // // //               </div>
// // // // // // // //             </div>
// // // // // // // //           </div>
// // // // // // // //         </div>
// // // // // // // //       </div>

// // // // // // // //       <style jsx>{`
// // // // // // // //         .custom-recent-row { display: flex !important; align-items: flex-start !important; gap: 15px; margin-bottom: 20px; }
// // // // // // // //         .recent-thumb-fixed { width: 80px !important; height: 80px !important; min-width: 80px !important; overflow: hidden; border-radius: 6px; }
// // // // // // // //         .pic2-img { width: 100% !important; height: 100% !important; object-fit: cover !important; }
// // // // // // // //         .pic2-title-style { font-size: 15px !important; font-weight: 600 !important; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
// // // // // // // //       `}</style>
// // // // // // // //     </>
// // // // // // // //   );
// // // // // // // // };

// // // // // // // // export default BlogArchive;


// // // // // // // "use client";
// // // // // // // import React, { useState } from "react"; // 🔹 useState add kiya filter ke liye
// // // // // // // import useSWR from "swr";
// // // // // // // import Link from "next/link";

// // // // // // // /* 🔹 SLUG HELPER */
// // // // // // // const makeSlug = (text: string) =>
// // // // // // //   text
// // // // // // //     .toLowerCase()
// // // // // // //     .trim()
// // // // // // //     .replace(/[^a-z0-9\s-]/g, "")
// // // // // // //     .replace(/\s+/g, "-");

// // // // // // // interface Breadcrumb {
// // // // // // //   bgTitle: string;
// // // // // // //   title: string;
// // // // // // //   description: string;
// // // // // // //   shapes: string[];
// // // // // // // }

// // // // // // // interface Post {
// // // // // // //   thumbnail: string;
// // // // // // //   date: string;
// // // // // // //   category: string;
// // // // // // //   title: string;
// // // // // // //   description: string;
// // // // // // //   link: string;
// // // // // // //   fb_link: string | null;
// // // // // // //   delay: number;
// // // // // // // }

// // // // // // // interface RecentPost {
// // // // // // //   thumbnail: string;
// // // // // // //   date: string;
// // // // // // //   title: string;
// // // // // // //   link: string;
// // // // // // // }

// // // // // // // interface Widgets {
// // // // // // //   categories: string[];
// // // // // // //   recentPosts: RecentPost[];
// // // // // // //   tags: string[];
// // // // // // //   contactWidget: {
// // // // // // //     logo: string;
// // // // // // //     title: string;
// // // // // // //     buttonText: string;
// // // // // // //     link: string;
// // // // // // //   };
// // // // // // // }

// // // // // // // interface BlogContent {
// // // // // // //   breadcrumb: Breadcrumb;
// // // // // // //   posts: Post[];
// // // // // // //   pagination: string[];
// // // // // // //   widgets: Widgets;
// // // // // // // }

// // // // // // // // ---------------- FETCHER ----------------
// // // // // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // // // // ---------------- COMPONENT ---------------
// // // // // // // const BlogArchive = () => {
// // // // // // //   const { data, error } = useSWR(
// // // // // // //     "https://gba.mig.org.pk/api/news",
// // // // // // //     fetcher
// // // // // // //   );

// // // // // // //   // 🔹 Step 1: Filter state add ki
// // // // // // //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // // // // // //   if (error) return <p>Failed to load data</p>;
// // // // // // //   if (!data) return <p>Loading...</p>;

// // // // // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // // // // //   const mappedData: BlogContent = {
// // // // // // //     breadcrumb: {
// // // // // // //       bgTitle: "News",
// // // // // // //       title: "Latest Updates",
// // // // // // //       description: "GBC official announcements & activities",
// // // // // // //       shapes: [
// // // // // // //         "images/about/shape/01.png",
// // // // // // //         "images/about/shape/02.png",
// // // // // // //         "images/about/shape/03.png",
// // // // // // //       ],
// // // // // // //     },

// // // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // //       date: item?.created_at || "",
// // // // // // //       category: String(item?.category || ""),
// // // // // // //       title: item?.title || "",
// // // // // // //       description: item?.description
// // // // // // //         ? item.description.substring(0, 250) + "..."
// // // // // // //         : "",
// // // // // // //       link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // // // //       fb_link: item?.fb_post_url,
// // // // // // //       delay: 0.2 * index,
// // // // // // //     })),

// // // // // // //     pagination: [
// // // // // // //       String(data?.pagination?.current_page ?? 1),
// // // // // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // // // // //     ],

// // // // // // //     widgets: {
// // // // // // //       categories: Array.from(
// // // // // // //         new Set(
// // // // // // //           apiPosts
// // // // // // //             .map((item: any) => item?.category)
// // // // // // //             .filter(Boolean)
// // // // // // //             .map((cat: any) => String(cat))
// // // // // // //         )
// // // // // // //       ),

// // // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // // //         date: item?.created_at || "",
// // // // // // //         title: item?.title || "",
// // // // // // //         link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // // // //       })),

// // // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // // //       contactWidget: {
// // // // // // //         logo: "/images/logo/Archive.png",
// // // // // // //         title: "Need Help?",
// // // // // // //         buttonText: "Contact Us",
// // // // // // //         link: "/contact-2",
// // // // // // //       },
// // // // // // //     },
// // // // // // //   };

// // // // // // //   // 🔹 Step 2: Posts ko filter karne ka logic
// // // // // // //   const displayedPosts = selectedCategory
// // // // // // //     ? mappedData.posts.filter((p) => p.category === selectedCategory)
// // // // // // //     : mappedData.posts;

// // // // // // //   const content = mappedData;

// // // // // // //   return (
// // // // // // //     <>
// // // // // // //       {/* Breadcrumb Section */}
// // // // // // //       <div className="rts-breadcrumb-area">
// // // // // // //         <div className="container">
// // // // // // //           <div className="row">
// // // // // // //             <div className="col-lg-12">
// // // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // // // //                   {content.breadcrumb.title}
// // // // // // //                 </h1>
// // // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       {/* Blog Posts */}
// // // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // // //         <div className="container">
// // // // // // //           <div className="row g-5">
// // // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // // //               {/* 🔹 displayedPosts use kiya loop mein */}
// // // // // // //               {displayedPosts.map((post, i) => (
// // // // // // //                 <div
// // // // // // //                   key={i}
// // // // // // //                   className="blog-single-post-listing"
// // // // // // //                   data-animation="fadeInUp"
// // // // // // //                   data-delay={post.delay}
// // // // // // //                 >
// // // // // // //                   <div className="thumbnail">
// // // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // // //                   </div>

// // // // // // //                   <div className="blog-listing-content">
// // // // // // //                     <div className="user-info">
// // // // // // //                       <div className="single">
// // // // // // //                         <i className="far fa-clock"></i>
// // // // // // //                         <span>{post.date}</span>
// // // // // // //                       </div>
// // // // // // //                       <div className="single">
// // // // // // //                         <i className="far fa-tags"></i>
// // // // // // //                         <span>{post.category}</span>
// // // // // // //                       </div>
// // // // // // //                     </div>

// // // // // // //                     <Link className="blog-title" href={post.link}>
// // // // // // //                       <h3 className="title">{post.title}</h3>
// // // // // // //                     </Link>

// // // // // // //                     <p className="disc">{post.description}</p>

// // // // // // //                     {/* 🔹 Conditional Read Details Button */}
// // // // // // //                     {post.fb_link && (
// // // // // // //                       <Link 
// // // // // // //                         className="rts-btn btn-primary" 
// // // // // // //                         href={post.fb_link} 
// // // // // // //                         target="_blank" 
// // // // // // //                         rel="noopener noreferrer"
// // // // // // //                       >
// // // // // // //                         Read Details
// // // // // // //                       </Link>
// // // // // // //                     )}
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               ))}

// // // // // // //               {/* Pagination */}
// // // // // // //               <div className="row">
// // // // // // //                 <div className="col-12">
// // // // // // //                   <div className="text-center">
// // // // // // //                     <div className="pagination">
// // // // // // //                       {content.pagination.map((page, idx) => (
// // // // // // //                         <button key={idx} className={idx === 0 ? "active" : ""}>
// // // // // // //                           {page}
// // // // // // //                         </button>
// // // // // // //                       ))}
// // // // // // //                     </div>
// // // // // // //                   </div>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>

// // // // // // //             {/* Sidebar / Widgets */}
// // // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // // //               <div className="rts-single-wized Categories">
// // // // // // //                 <div className="wized-header">
// // // // // // //                   <h5 className="title">Categories</h5>
// // // // // // //                   {/* 🔹 Clear filter option */}
// // // // // // //                   {selectedCategory && (
// // // // // // //                     <span 
// // // // // // //                       onClick={() => setSelectedCategory(null)}
// // // // // // //                       style={{cursor: 'pointer', fontSize: '12px', color: 'blue', textDecoration: 'underline'}}
// // // // // // //                     >
// // // // // // //                       Show All
// // // // // // //                     </span>
// // // // // // //                   )}
// // // // // // //                 </div>
// // // // // // //                 <div className="wized-body">
// // // // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // // // //                     <ul key={idx} className="single-categories">
// // // // // // //                       <li>
// // // // // // //                         {/* 🔹 OnClick add kiya category filter ke liye */}
// // // // // // //                         <a 
// // // // // // //                           href="#" 
// // // // // // //                           onClick={(e) => {
// // // // // // //                             e.preventDefault();
// // // // // // //                             setSelectedCategory(cat);
// // // // // // //                           }}
// // // // // // //                           style={{ color: selectedCategory === cat ? '#007bff' : 'inherit' }}
// // // // // // //                         >
// // // // // // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // // // // // //                         </a>
// // // // // // //                       </li>
// // // // // // //                     </ul>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Recent Posts */}
// // // // // // //               <div className="rts-single-wized Recent-post">
// // // // // // //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// // // // // // //                 <div className="wized-body">
// // // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // // //                     <div key={idx} className="recent-post-single custom-recent-row">
// // // // // // //                       <div className="thumbnail recent-thumb-fixed">
// // // // // // //                         <Link href={post.link}><img src={post.thumbnail} alt="Blog_post" className="pic2-img" /></Link>
// // // // // // //                       </div>
// // // // // // //                       <div className="content-area">
// // // // // // //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// // // // // // //                         <Link className="post-title" href={post.link}>
// // // // // // //                           <h6 className="title pic2-title-style">{post.title}</h6>
// // // // // // //                         </Link>
// // // // // // //                       </div>
// // // // // // //                     </div>
// // // // // // //                   ))}
// // // // // // //                 </div>
// // // // // // //               </div>

// // // // // // //               {/* Contact Widget */}
// // // // // // //               <div className="rts-single-wized contact">
// // // // // // //                 <div className="wized-header" style={{ textAlign: 'center', padding: '10px 0' }}>
// // // // // // //                     <img
// // // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // // //                       alt="Business_logo"
// // // // // // //                       style={{ maxWidth: '100px', display: 'block', margin: '0 auto', objectFit: 'contain' }}
// // // // // // //                     />
// // // // // // //                 </div>
// // // // // // //                 <div className="wized-body">
// // // // // // //                   <h5 className="title">{content.widgets.contactWidget.title}</h5>
// // // // // // //                   <Link className="rts-btn btn-primary btn-white" href={content.widgets.contactWidget.link}>
// // // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // // //                   </Link>
// // // // // // //                 </div>
// // // // // // //               </div>
// // // // // // //             </div>
// // // // // // //           </div>
// // // // // // //         </div>
// // // // // // //       </div>

// // // // // // //       <style jsx>{`
// // // // // // //         .custom-recent-row { display: flex !important; align-items: flex-start !important; gap: 15px; margin-bottom: 20px; }
// // // // // // //         .recent-thumb-fixed { width: 80px !important; height: 80px !important; min-width: 80px !important; overflow: hidden; border-radius: 6px; }
// // // // // // //         .pic2-img { width: 100% !important; height: 100% !important; object-fit: cover !important; }
// // // // // // //         .pic2-title-style { font-size: 15px !important; font-weight: 600 !important; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
// // // // // // //       `}</style>
// // // // // // //     </>
// // // // // // //   );
// // // // // // // };

// // // // // // // export default BlogArchive;

// // // // // // "use client";
// // // // // // import React, { useState } from "react"; 
// // // // // // import useSWR from "swr";
// // // // // // import Link from "next/link";

// // // // // // /* 🔹 SLUG HELPER */
// // // // // // const makeSlug = (text: string) =>
// // // // // //   text
// // // // // //     .toLowerCase()
// // // // // //     .trim()
// // // // // //     .replace(/[^a-z0-9\s-]/g, "")
// // // // // //     .replace(/\s+/g, "-");

// // // // // // interface Breadcrumb {
// // // // // //   bgTitle: string;
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // //   shapes: string[];
// // // // // // }

// // // // // // interface Post {
// // // // // //   thumbnail: string;
// // // // // //   date: string;
// // // // // //   category: string;
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // //   link: string;
// // // // // //   fb_link: string | null;
// // // // // //   delay: number;
// // // // // // }

// // // // // // interface RecentPost {
// // // // // //   thumbnail: string;
// // // // // //   date: string;
// // // // // //   title: string;
// // // // // //   link: string;
// // // // // // }

// // // // // // interface Widgets {
// // // // // //   categories: string[];
// // // // // //   recentPosts: RecentPost[];
// // // // // //   tags: string[];
// // // // // //   contactWidget: {
// // // // // //     logo: string;
// // // // // //     title: string;
// // // // // //     buttonText: string;
// // // // // //     link: string;
// // // // // //   };
// // // // // // }

// // // // // // interface BlogContent {
// // // // // //   breadcrumb: Breadcrumb;
// // // // // //   posts: Post[];
// // // // // //   pagination: string[];
// // // // // //   widgets: Widgets;
// // // // // // }

// // // // // // // ---------------- FETCHER ----------------
// // // // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // // // ---------------- COMPONENT ---------------
// // // // // // const BlogArchive = () => {
// // // // // //   const { data, error } = useSWR(
// // // // // //     "https://gba.mig.org.pk/api/news",
// // // // // //     fetcher
// // // // // //   );

// // // // // //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // // // // //   if (error) return <p>Failed to load data</p>;
// // // // // //   if (!data) return <p>Loading...</p>;

// // // // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // // // //   const mappedData: BlogContent = {
// // // // // //     breadcrumb: {
// // // // // //       bgTitle: "News",
// // // // // //       title: "Latest Updates",
// // // // // //       description: "GBC official announcements & activities",
// // // // // //       shapes: [
// // // // // //         "images/about/shape/01.png",
// // // // // //         "images/about/shape/02.png",
// // // // // //         "images/about/shape/03.png",
// // // // // //       ],
// // // // // //     },

// // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // //       date: item?.created_at || "",
// // // // // //       category: String(item?.category || ""),
// // // // // //       title: item?.title || "",
// // // // // //       description: item?.description
// // // // // //         ? item.description.substring(0, 250) + "..."
// // // // // //         : "",
// // // // // //       link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // // //       fb_link: item?.fb_post_url,
// // // // // //       delay: 0.2 * index,
// // // // // //     })),

// // // // // //     pagination: [
// // // // // //       String(data?.pagination?.current_page ?? 1),
// // // // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // // // //     ],

// // // // // //     widgets: {
// // // // // //       categories: Array.from(
// // // // // //         new Set(
// // // // // //           apiPosts
// // // // // //             .map((item: any) => item?.category)
// // // // // //             .filter(Boolean)
// // // // // //             .map((cat: any) => String(cat))
// // // // // //         )
// // // // // //       ),

// // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // //         date: item?.created_at || "",
// // // // // //         title: item?.title || "",
// // // // // //         link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // // //       })),

// // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // //       contactWidget: {
// // // // // //         logo: "/images/logo/Archive.png",
// // // // // //         title: "Need Help?",
// // // // // //         buttonText: "Contact Us",
// // // // // //         link: "/contact-2",
// // // // // //       },
// // // // // //     },
// // // // // //   };

// // // // // //   const displayedPosts = selectedCategory
// // // // // //     ? mappedData.posts.filter((p) => p.category === selectedCategory)
// // // // // //     : mappedData.posts;

// // // // // //   const content = mappedData;

// // // // // //   return (
// // // // // //     <>
// // // // // //       {/* Breadcrumb Section */}
// // // // // //       <div className="rts-breadcrumb-area">
// // // // // //         <div className="container">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // // //                   {content.breadcrumb.title}
// // // // // //                 </h1>
// // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       {/* Blog Posts */}
// // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // //         <div className="container">
// // // // // //           <div className="row g-5">
// // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // //               {displayedPosts.map((post, i) => (
// // // // // //                 <div
// // // // // //                   key={i}
// // // // // //                   className="blog-single-post-listing"
// // // // // //                   data-animation="fadeInUp"
// // // // // //                   data-delay={post.delay}
// // // // // //                 >
// // // // // //                   <div className="thumbnail">
// // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // //                   </div>

// // // // // //                   <div className="blog-listing-content">
// // // // // //                     <div className="user-info">
// // // // // //                       <div className="single">
// // // // // //                         <i className="far fa-clock"></i>
// // // // // //                         <span>{post.date}</span>
// // // // // //                       </div>
// // // // // //                       <div className="single">
// // // // // //                         <i className="far fa-tags"></i>
// // // // // //                         <span>{post.category}</span>
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     <Link className="blog-title" href={post.link}>
// // // // // //                       <h3 className="title">{post.title}</h3>
// // // // // //                     </Link>

// // // // // //                     <p className="disc">{post.description}</p>

// // // // // //                     {post.fb_link && (
// // // // // //                       <Link 
// // // // // //                         className="rts-btn btn-primary" 
// // // // // //                         href={post.fb_link} 
// // // // // //                         target="_blank" 
// // // // // //                         rel="noopener noreferrer"
// // // // // //                       >
// // // // // //                         Read Details
// // // // // //                       </Link>
// // // // // //                     )}
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               ))}

// // // // // //               <div className="row">
// // // // // //                 <div className="col-12">
// // // // // //                   <div className="text-center">
// // // // // //                     <div className="pagination">
// // // // // //                       {content.pagination.map((page, idx) => (
// // // // // //                         <button key={idx} className={idx === 0 ? "active" : ""}>
// // // // // //                           {page}
// // // // // //                         </button>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // //               <div className="rts-single-wized Categories">
// // // // // //                 <div className="wized-header">
// // // // // //                   <h5 className="title">Categories</h5>
// // // // // //                   {/* 🔹 "Show All" button removed from here */}
// // // // // //                 </div>
// // // // // //                 <div className="wized-body">
// // // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // // //                     <ul key={idx} className="single-categories">
// // // // // //                       <li>
// // // // // //                         <a 
// // // // // //                           href="#" 
// // // // // //                           onClick={(e) => {
// // // // // //                             e.preventDefault();
// // // // // //                             setSelectedCategory(cat);
// // // // // //                           }}
// // // // // //                           style={{ color: selectedCategory === cat ? '#007bff' : 'inherit' }}
// // // // // //                         >
// // // // // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // // // // //                         </a>
// // // // // //                       </li>
// // // // // //                     </ul>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <div className="rts-single-wized Recent-post">
// // // // // //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// // // // // //                 <div className="wized-body">
// // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // //                     <div key={idx} className="recent-post-single custom-recent-row">
// // // // // //                       <div className="thumbnail recent-thumb-fixed">
// // // // // //                         <Link href={post.link}><img src={post.thumbnail} alt="Blog_post" className="pic2-img" /></Link>
// // // // // //                       </div>
// // // // // //                       <div className="content-area">
// // // // // //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// // // // // //                         <Link className="post-title" href={post.link}>
// // // // // //                           <h6 className="title pic2-title-style">{post.title}</h6>
// // // // // //                         </Link>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <div className="rts-single-wized contact">
// // // // // //                 <div className="wized-header" style={{ textAlign: 'center', padding: '10px 0' }}>
// // // // // //                     <img
// // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // //                       alt="Business_logo"
// // // // // //                       style={{ maxWidth: '100px', display: 'block', margin: '0 auto', objectFit: 'contain' }}
// // // // // //                     />
// // // // // //                 </div>
// // // // // //                 <div className="wized-body">
// // // // // //                   <h5 className="title">{content.widgets.contactWidget.title}</h5>
// // // // // //                   <Link className="rts-btn btn-primary btn-white" href={content.widgets.contactWidget.link}>
// // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // //                   </Link>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx>{`
// // // // // //         .custom-recent-row { display: flex !important; align-items: flex-start !important; gap: 15px; margin-bottom: 20px; }
// // // // // //         .recent-thumb-fixed { width: 80px !important; height: 80px !important; min-width: 80px !important; overflow: hidden; border-radius: 6px; }
// // // // // //         .pic2-img { width: 100% !important; height: 100% !important; object-fit: cover !important; }
// // // // // //         .pic2-title-style { font-size: 15px !important; font-weight: 600 !important; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
// // // // // //       `}</style>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default BlogArchive;


// // // // // // "use client";
// // // // // // import React, { useState } from "react"; 
// // // // // // import useSWR from "swr";
// // // // // // import Link from "next/link";

// // // // // // /* 🔹 SLUG HELPER */
// // // // // // const makeSlug = (text: string) =>
// // // // // //   text
// // // // // //     .toLowerCase()
// // // // // //     .trim()
// // // // // //     .replace(/[^a-z0-9\s-]/g, "")
// // // // // //     .replace(/\s+/g, "-");

// // // // // // interface Breadcrumb {
// // // // // //   bgTitle: string;
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // //   shapes: string[];
// // // // // // }

// // // // // // interface Post {
// // // // // //   thumbnail: string;
// // // // // //   date: string;
// // // // // //   category: string;
// // // // // //   title: string;
// // // // // //   description: string;
// // // // // //   link: string;
// // // // // //   fb_link: string | null;
// // // // // //   delay: number;
// // // // // // }

// // // // // // interface RecentPost {
// // // // // //   thumbnail: string;
// // // // // //   date: string;
// // // // // //   title: string;
// // // // // //   link: string;
// // // // // // }

// // // // // // interface Widgets {
// // // // // //   categories: string[];
// // // // // //   recentPosts: RecentPost[];
// // // // // //   tags: string[];
// // // // // //   contactWidget: {
// // // // // //     logo: string;
// // // // // //     title: string;
// // // // // //     buttonText: string;
// // // // // //     link: string;
// // // // // //   };
// // // // // // }

// // // // // // interface BlogContent {
// // // // // //   breadcrumb: Breadcrumb;
// // // // // //   posts: Post[];
// // // // // //   pagination: string[];
// // // // // //   widgets: Widgets;
// // // // // // }

// // // // // // // ---------------- FETCHER ----------------
// // // // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // // // ---------------- COMPONENT ---------------
// // // // // // const BlogArchive = () => {
// // // // // //   const { data, error } = useSWR(
// // // // // //     "https://gba.mig.org.pk/api/news",
// // // // // //     fetcher
// // // // // //   );

// // // // // //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // // // // //   if (error) return <p>Loading...</p>;
// // // // // //   if (!data) return <p>Loading...</p>;

// // // // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // // // //   const mappedData: BlogContent = {
// // // // // //     breadcrumb: {
// // // // // //       bgTitle: "News",
// // // // // //       title: "Latest Updates",
// // // // // //       description: "GBC official announcements & activities",
// // // // // //       shapes: [
// // // // // //         "images/about/shape/01.png",
// // // // // //         "images/about/shape/02.png",
// // // // // //         "images/about/shape/03.png",
// // // // // //       ],
// // // // // //     },

// // // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // //       date: item?.created_at || "",
// // // // // //       category: String(item?.category || ""),
// // // // // //       title: item?.title || "",
// // // // // //       description: item?.description
// // // // // //         ? item.description.substring(0, 250) + "..."
// // // // // //         : "",
// // // // // //       link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // // //       fb_link: item?.fb_post_url,
// // // // // //       delay: 0.2 * index,
// // // // // //     })),

// // // // // //     pagination: [
// // // // // //       String(data?.pagination?.current_page ?? 1),
// // // // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // // // //     ],

// // // // // //     widgets: {
// // // // // //       categories: Array.from(
// // // // // //         new Set(
// // // // // //           apiPosts
// // // // // //             .map((item: any) => item?.category)
// // // // // //             .filter(Boolean)
// // // // // //             .map((cat: any) => String(cat))
// // // // // //         )
// // // // // //       ),

// // // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // // // //         date: item?.created_at || "",
// // // // // //         title: item?.title || "",
// // // // // //         link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // // //       })),

// // // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // // //       contactWidget: {
// // // // // //         logo: "/images/logo/Archive.png",
// // // // // //         title: "Need Help?",
// // // // // //         buttonText: "Contact Us",
// // // // // //         link: "/contact-2",
// // // // // //       },
// // // // // //     },
// // // // // //   };

// // // // // //   const displayedPosts = selectedCategory
// // // // // //     ? mappedData.posts.filter((p) => p.category === selectedCategory)
// // // // // //     : mappedData.posts;

// // // // // //   const content = mappedData;

// // // // // //   return (
// // // // // //     <>
// // // // // //       <div className="rts-breadcrumb-area">
// // // // // //         <div className="container">
// // // // // //           <div className="row">
// // // // // //             <div className="col-lg-12">
// // // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // // //                   {content.breadcrumb.title}
// // // // // //                 </h1>
// // // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // // //         <div className="container">
// // // // // //           <div className="row g-5">
// // // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // // //               {displayedPosts.map((post, i) => (
// // // // // //                 <div
// // // // // //                   key={i}
// // // // // //                   className="blog-single-post-listing"
// // // // // //                   data-animation="fadeInUp"
// // // // // //                   data-delay={post.delay}
// // // // // //                 >
// // // // // //                   <div className="thumbnail">
// // // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // // //                   </div>

// // // // // //                   <div className="blog-listing-content">
// // // // // //                     <div className="user-info">
// // // // // //                       <div className="single">
// // // // // //                         <i className="far fa-clock"></i>
// // // // // //                         <span>{post.date}</span>
// // // // // //                       </div>
// // // // // //                       <div className="single">
// // // // // //                         <i className="far fa-tags"></i>
// // // // // //                         <span>{post.category}</span>
// // // // // //                       </div>
// // // // // //                     </div>

// // // // // //                     <Link className="blog-title" href={post.link}>
// // // // // //                       <h3 className="title">{post.title}</h3>
// // // // // //                     </Link>

// // // // // //                     <p className="disc">{post.description}</p>

// // // // // //                     {/* 🔹 Button ab internal Link (post.link) use karega */}
// // // // // //                     <Link 
// // // // // //                       className="rts-btn btn-primary" 
// // // // // //                       href={post.link} 
// // // // // //                     >
// // // // // //                       Read Details
// // // // // //                     </Link>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               ))}

// // // // // //               <div className="row">
// // // // // //                 <div className="col-12">
// // // // // //                   <div className="text-center">
// // // // // //                     <div className="pagination">
// // // // // //                       {content.pagination.map((page, idx) => (
// // // // // //                         <button key={idx} className={idx === 0 ? "active" : ""}>
// // // // // //                           {page}
// // // // // //                         </button>
// // // // // //                       ))}
// // // // // //                     </div>
// // // // // //                   </div>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>

// // // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // // //               <div className="rts-single-wized Categories">
// // // // // //                 <div className="wized-header">
// // // // // //                   <h5 className="title">Categories</h5>
// // // // // //                 </div>
// // // // // //                 <div className="wized-body">
// // // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // // //                     <ul key={idx} className="single-categories">
// // // // // //                       <li>
// // // // // //                         <a 
// // // // // //                           href="#" 
// // // // // //                           onClick={(e) => {
// // // // // //                             e.preventDefault();
// // // // // //                             setSelectedCategory(cat);
// // // // // //                           }}
// // // // // //                           style={{ color: selectedCategory === cat ? '#007bff' : 'inherit' }}
// // // // // //                         >
// // // // // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // // // // //                         </a>
// // // // // //                       </li>
// // // // // //                     </ul>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <div className="rts-single-wized Recent-post">
// // // // // //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// // // // // //                 <div className="wized-body">
// // // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // // //                     <div key={idx} className="recent-post-single custom-recent-row">
// // // // // //                       <div className="thumbnail recent-thumb-fixed">
// // // // // //                         <Link href={post.link}><img src={post.thumbnail} alt="Blog_post" className="pic2-img" /></Link>
// // // // // //                       </div>
// // // // // //                       <div className="content-area">
// // // // // //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// // // // // //                         <Link className="post-title" href={post.link}>
// // // // // //                           <h6 className="title pic2-title-style">{post.title}</h6>
// // // // // //                         </Link>
// // // // // //                       </div>
// // // // // //                     </div>
// // // // // //                   ))}
// // // // // //                 </div>
// // // // // //               </div>

// // // // // //               <div className="rts-single-wized contact">
// // // // // //                 <div className="wized-header" style={{ textAlign: 'center', padding: '10px 0' }}>
// // // // // //                     <img
// // // // // //                       src={content.widgets.contactWidget.logo}
// // // // // //                       alt="Business_logo"
// // // // // //                       style={{ maxWidth: '100px', display: 'block', margin: '0 auto', objectFit: 'contain' }}
// // // // // //                     />
// // // // // //                 </div>
// // // // // //                 <div className="wized-body">
// // // // // //                   <h5 className="title">{content.widgets.contactWidget.title}</h5>
// // // // // //                   <Link className="rts-btn btn-primary btn-white" href={content.widgets.contactWidget.link}>
// // // // // //                     {content.widgets.contactWidget.buttonText}
// // // // // //                   </Link>
// // // // // //                 </div>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </div>

// // // // // //       <style jsx>{`
// // // // // //         .custom-recent-row { display: flex !important; align-items: flex-start !important; gap: 15px; margin-bottom: 20px; }
// // // // // //         .recent-thumb-fixed { width: 80px !important; height: 80px !important; min-width: 80px !important; overflow: hidden; border-radius: 6px; }
// // // // // //         .pic2-img { width: 100% !important; height: 100% !important; object-fit: cover !important; }
// // // // // //         .pic2-title-style { font-size: 15px !important; font-weight: 600 !important; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
// // // // // //       `}</style>
// // // // // //     </>
// // // // // //   );
// // // // // // };

// // // // // // export default BlogArchive;


// // // // // "use client";
// // // // // import React, { useState } from "react"; 
// // // // // import useSWR from "swr";
// // // // // import Link from "next/link";

// // // // // /* 🔹 SLUG HELPER */
// // // // // const makeSlug = (text: string) =>
// // // // //   text
// // // // //     .toLowerCase()
// // // // //     .trim()
// // // // //     .replace(/[^a-z0-9\s-]/g, "")
// // // // //     .replace(/\s+/g, "-");

// // // // // interface Breadcrumb {
// // // // //   bgTitle: string;
// // // // //   title: string;
// // // // //   description: string;
// // // // //   shapes: string[];
// // // // // }

// // // // // interface Post {
// // // // //   thumbnail: string;
// // // // //   date: string;
// // // // //   category: string;
// // // // //   title: string;
// // // // //   description: string;
// // // // //   link: string;
// // // // //   fb_link: string | null;
// // // // //   delay: number;
// // // // // }

// // // // // interface RecentPost {
// // // // //   thumbnail: string;
// // // // //   date: string;
// // // // //   title: string;
// // // // //   description: string; // 🔹 Added description to interface
// // // // //   link: string;
// // // // // }

// // // // // interface Widgets {
// // // // //   categories: string[];
// // // // //   recentPosts: RecentPost[];
// // // // //   tags: string[];
// // // // //   contactWidget: {
// // // // //     logo: string;
// // // // //     title: string;
// // // // //     buttonText: string;
// // // // //     link: string;
// // // // //   };
// // // // // }

// // // // // interface BlogContent {
// // // // //   breadcrumb: Breadcrumb;
// // // // //   posts: Post[];
// // // // //   pagination: string[];
// // // // //   widgets: Widgets;
// // // // // }

// // // // // // ---------------- FETCHER ----------------
// // // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // // ---------------- COMPONENT ---------------
// // // // // const BlogArchive = () => {
// // // // //   const { data, error } = useSWR(
// // // // //     "https://gba.mig.org.pk/api/news",
// // // // //     fetcher
// // // // //   );

// // // // //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // // // //   if (error) return <p>Failed to load data</p>;
// // // // //   if (!data) return <p>Loading...</p>;

// // // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // // //   const mappedData: BlogContent = {
// // // // //     breadcrumb: {
// // // // //       bgTitle: "News",
// // // // //       title: "Latest Updates",
// // // // //       description: "GBC official announcements & activities",
// // // // //       shapes: [
// // // // //         "images/about/shape/01.png",
// // // // //         "images/about/shape/02.png",
// // // // //         "images/about/shape/03.png",
// // // // //       ],
// // // // //     },

// // // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // // //       date: item?.created_at || "",
// // // // //       category: String(item?.category || ""),
// // // // //       title: item?.title || "",
// // // // //       description: item?.description
// // // // //         ? item.description.substring(0, 250) + "..."
// // // // //         : "",
// // // // //       link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // //       fb_link: item?.fb_post_url,
// // // // //       delay: 0.2 * index,
// // // // //     })),

// // // // //     pagination: [
// // // // //       String(data?.pagination?.current_page ?? 1),
// // // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // // //     ],

// // // // //     widgets: {
// // // // //       categories: Array.from(
// // // // //         new Set(
// // // // //           apiPosts
// // // // //             .map((item: any) => item?.category)
// // // // //             .filter(Boolean)
// // // // //             .map((cat: any) => String(cat))
// // // // //         )
// // // // //       ),

// // // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // // //         date: item?.created_at || "",
// // // // //         title: item?.title || "",
// // // // //         description: item?.description 
// // // // //             ? item.description.substring(0, 60) + "..." 
// // // // //             : "", // 🔹 Mapping description from API
// // // // //         link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // // //       })),

// // // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // // //       contactWidget: {
// // // // //         logo: "/images/logo/Archive.png",
// // // // //         title: "Need Help?",
// // // // //         buttonText: "Contact Us",
// // // // //         link: "/contact-2",
// // // // //       },
// // // // //     },
// // // // //   };

// // // // //   const displayedPosts = selectedCategory
// // // // //     ? mappedData.posts.filter((p) => p.category === selectedCategory)
// // // // //     : mappedData.posts;

// // // // //   const content = mappedData;

// // // // //   return (
// // // // //     <>
// // // // //       {/* Breadcrumb Section */}
// // // // //       <div className="rts-breadcrumb-area">
// // // // //         <div className="container">
// // // // //           <div className="row">
// // // // //             <div className="col-lg-12">
// // // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // // //                 <h1 className="title rts-text-anime-style-1">
// // // // //                   {content.breadcrumb.title}
// // // // //                 </h1>
// // // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       {/* Blog Posts */}
// // // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // // //         <div className="container">
// // // // //           <div className="row g-5">
// // // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // // //               {displayedPosts.map((post, i) => (
// // // // //                 <div
// // // // //                   key={i}
// // // // //                   className="blog-single-post-listing"
// // // // //                   data-animation="fadeInUp"
// // // // //                   data-delay={post.delay}
// // // // //                 >
// // // // //                   <div className="thumbnail">
// // // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // // //                   </div>

// // // // //                   <div className="blog-listing-content">
// // // // //                     <div className="user-info">
// // // // //                       <div className="single">
// // // // //                         <i className="far fa-clock"></i>
// // // // //                         <span>{post.date}</span>
// // // // //                       </div>
// // // // //                       <div className="single">
// // // // //                         <i className="far fa-tags"></i>
// // // // //                         <span>{post.category}</span>
// // // // //                       </div>
// // // // //                     </div>

// // // // //                     <Link className="blog-title" href={post.link}>
// // // // //                       <h3 className="title">{post.title}</h3>
// // // // //                     </Link>

// // // // //                     <p className="disc">{post.description}</p>

// // // // //                     <Link 
// // // // //                         className="rts-btn btn-primary" 
// // // // //                         href={post.link} 
// // // // //                     >
// // // // //                         Read Details
// // // // //                     </Link>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               ))}

// // // // //               <div className="row">
// // // // //                 <div className="col-12">
// // // // //                   <div className="text-center">
// // // // //                     <div className="pagination">
// // // // //                       {content.pagination.map((page, idx) => (
// // // // //                         <button key={idx} className={idx === 0 ? "active" : ""}>
// // // // //                           {page}
// // // // //                         </button>
// // // // //                       ))}
// // // // //                     </div>
// // // // //                   </div>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>

// // // // //             {/* Sidebar / Widgets */}
// // // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // // //               <div className="rts-single-wized Categories">
// // // // //                 <div className="wized-header">
// // // // //                   <h5 className="title">Categories</h5>
// // // // //                 </div>
// // // // //                 <div className="wized-body">
// // // // //                   {content.widgets.categories.map((cat, idx) => (
// // // // //                     <ul key={idx} className="single-categories">
// // // // //                       <li>
// // // // //                         <a 
// // // // //                           href="#" 
// // // // //                           onClick={(e) => {
// // // // //                             e.preventDefault();
// // // // //                             setSelectedCategory(cat);
// // // // //                           }}
// // // // //                           style={{ color: selectedCategory === cat ? '#007bff' : 'inherit' }}
// // // // //                         >
// // // // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // // // //                         </a>
// // // // //                       </li>
// // // // //                     </ul>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Recent Posts - Updated as per requirement */}
// // // // //               <div className="rts-single-wized Recent-post">
// // // // //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// // // // //                 <div className="wized-body">
// // // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // // //                     <div key={idx} className="recent-post-single custom-recent-row">
// // // // //                       <div className="thumbnail recent-thumb-fixed">
// // // // //                         <Link href={post.link}><img src={post.thumbnail} alt="Blog_post" className="pic2-img" /></Link>
// // // // //                       </div>
// // // // //                       <div className="content-area">
// // // // //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// // // // //                         <Link className="post-title" href={post.link}>
// // // // //                           {/* 🔹 Changed post.title to post.description here */}
// // // // //                           <p className="pic2-title-style">{post.description}</p>
// // // // //                         </Link>
// // // // //                       </div>
// // // // //                     </div>
// // // // //                   ))}
// // // // //                 </div>
// // // // //               </div>

// // // // //               {/* Contact Widget */}
// // // // //               <div className="rts-single-wized contact">
// // // // //                 <div className="wized-header" style={{ textAlign: 'center', padding: '10px 0' }}>
// // // // //                     <img
// // // // //                       src={content.widgets.contactWidget.logo}
// // // // //                       alt="Business_logo"
// // // // //                       style={{ maxWidth: '100px', display: 'block', margin: '0 auto', objectFit: 'contain' }}
// // // // //                     />
// // // // //                 </div>
// // // // //                 <div className="wized-body">
// // // // //                   <h5 className="title">{content.widgets.contactWidget.title}</h5>
// // // // //                   <Link className="rts-btn btn-primary btn-white" href={content.widgets.contactWidget.link}>
// // // // //                     {content.widgets.contactWidget.buttonText}
// // // // //                   </Link>
// // // // //                 </div>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>

// // // // //       <style jsx>{`
// // // // //         .custom-recent-row { display: flex !important; align-items: flex-start !important; gap: 15px; margin-bottom: 20px; }
// // // // //         .recent-thumb-fixed { width: 80px !important; height: 80px !important; min-width: 80px !important; overflow: hidden; border-radius: 6px; }
// // // // //         .pic2-img { width: 100% !important; height: 100% !important; object-fit: cover !important; }
// // // // //         .pic2-title-style { font-size: 14px !important; line-height: 1.4; color: #666; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; margin: 0; }
// // // // //       `}</style>
// // // // //     </>
// // // // //   );
// // // // // };

// // // // // export default BlogArchive;

// // // // "use client";
// // // // import React, { useState } from "react"; 
// // // // import useSWR from "swr";
// // // // import Link from "next/link";

// // // // /* 🔹 SLUG HELPER */
// // // // const makeSlug = (text: string) =>
// // // //   text
// // // //     .toLowerCase()
// // // //     .trim()
// // // //     .replace(/[^a-z0-9\s-]/g, "")
// // // //     .replace(/\s+/g, "-");

// // // // interface Breadcrumb {
// // // //   bgTitle: string;
// // // //   title: string;
// // // //   description: string;
// // // //   shapes: string[];
// // // // }

// // // // interface Post {
// // // //   thumbnail: string;
// // // //   date: string;
// // // //   category: string;
// // // //   title: string;
// // // //   description: string;
// // // //   link: string;
// // // //   fb_link: string | null;
// // // //   delay: number;
// // // // }

// // // // interface RecentPost {
// // // //   thumbnail: string;
// // // //   date: string;
// // // //   title: string;
// // // //   description: string;
// // // //   link: string;
// // // // }

// // // // interface Widgets {
// // // //   categories: string[];
// // // //   recentPosts: RecentPost[];
// // // //   tags: string[];
// // // //   contactWidget: {
// // // //     logo: string;
// // // //     title: string;
// // // //     buttonText: string;
// // // //     link: string;
// // // //   };
// // // // }

// // // // interface BlogContent {
// // // //   breadcrumb: Breadcrumb;
// // // //   posts: Post[];
// // // //   pagination: string[];
// // // //   widgets: Widgets;
// // // // }

// // // // // ---------------- FETCHER ----------------
// // // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // // // ---------------- COMPONENT ---------------
// // // // const BlogArchive = () => {
// // // //   const { data, error } = useSWR(
// // // //     "https://gba.mig.org.pk/api/news",
// // // //     fetcher
// // // //   );

// // // //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // // //   if (error) return <p>Failed to load data</p>;
// // // //   if (!data) return <p>Loading...</p>;

// // // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // // //   const mappedData: BlogContent = {
// // // //     breadcrumb: {
// // // //       bgTitle: "News",
// // // //       title: "Latest Updates",
// // // //       description: "GBC official announcements & activities",
// // // //       shapes: [
// // // //         "images/about/shape/01.png",
// // // //         "images/about/shape/02.png",
// // // //         "images/about/shape/03.png",
// // // //       ],
// // // //     },

// // // //     posts: apiPosts.map((item: any, index: number) => ({
// // // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // // //       date: item?.created_at || "",
// // // //       category: String(item?.category || ""),
// // // //       title: item?.title || "",
// // // //       description: item?.description
// // // //         ? item.description.substring(0, 250) + "..."
// // // //         : "",
// // // //       link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // //       fb_link: item?.fb_post_url, // 🔹 FB link stored here for conditional check
// // // //       delay: 0.2 * index,
// // // //     })),

// // // //     pagination: [
// // // //       String(data?.pagination?.current_page ?? 1),
// // // //       String((data?.pagination?.current_page ?? 1) + 1),
// // // //     ],

// // // //     widgets: {
// // // //       categories: Array.from(
// // // //         new Set(
// // // //           apiPosts
// // // //             .map((item: any) => item?.category)
// // // //             .filter(Boolean)
// // // //             .map((cat: any) => String(cat))
// // // //         )
// // // //       ),

// // // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // // //         date: item?.created_at || "",
// // // //         title: item?.title || "",
// // // //         description: item?.description 
// // // //             ? item.description.substring(0, 60) + "..." 
// // // //             : "",
// // // //         link: `/blog-details/${makeSlug(item?.title || "")}`,
// // // //       })),

// // // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // // //       contactWidget: {
// // // //         logo: "/images/logo/Archive.png",
// // // //         title: "Need Help?",
// // // //         buttonText: "Contact Us",
// // // //         link: "/contact-2",
// // // //       },
// // // //     },
// // // //   };

// // // //   const displayedPosts = selectedCategory
// // // //     ? mappedData.posts.filter((p) => p.category === selectedCategory)
// // // //     : mappedData.posts;

// // // //   const content = mappedData;

// // // //   return (
// // // //     <>
// // // //       <div className="rts-breadcrumb-area">
// // // //         <div className="container">
// // // //           <div className="row">
// // // //             <div className="col-lg-12">
// // // //               <div className="title-area-left center mt-dec-blog-bread">
// // // //                 <span className="bg-title">{content.breadcrumb.bgTitle}</span>
// // // //                 <h1 className="title rts-text-anime-style-1">
// // // //                   {content.breadcrumb.title}
// // // //                 </h1>
// // // //                 <p className="disc">{content.breadcrumb.description}</p>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // // //         <div className="container">
// // // //           <div className="row g-5">
// // // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // // //               {displayedPosts.map((post, i) => (
// // // //                 <div
// // // //                   key={i}
// // // //                   className="blog-single-post-listing"
// // // //                   data-animation="fadeInUp"
// // // //                   data-delay={post.delay}
// // // //                 >
// // // //                   <div className="thumbnail">
// // // //                     <img src={post.thumbnail} alt="Business-Blog" />
// // // //                   </div>

// // // //                   <div className="blog-listing-content">
// // // //                     <div className="user-info">
// // // //                       <div className="single">
// // // //                         <i className="far fa-clock"></i>
// // // //                         <span>{post.date}</span>
// // // //                       </div>
// // // //                       <div className="single">
// // // //                         <i className="far fa-tags"></i>
// // // //                         <span>{post.category}</span>
// // // //                       </div>
// // // //                     </div>

// // // //                     <Link className="blog-title" href={post.link}>
// // // //                       <h3 className="title">{post.title}</h3>
// // // //                     </Link>

// // // //                     <p className="disc">{post.description}</p>

// // // //                     {/* 🔹 Conditional logic: Only show button if fb_link is not null/empty */}
// // // //                     {post.fb_link && post.fb_link !== "" && (
// // // //                       <Link 
// // // //                           className="rts-btn btn-primary" 
// // // //                           href={post.link} 
// // // //                       >
// // // //                           Read Details
// // // //                       </Link>
// // // //                     )}
// // // //                   </div>
// // // //                 </div>
// // // //               ))}

// // // //               <div className="row">
// // // //                 <div className="col-12">
// // // //                   <div className="text-center">
// // // //                     <div className="pagination">
// // // //                       {content.pagination.map((page, idx) => (
// // // //                         <button key={idx} className={idx === 0 ? "active" : ""}>
// // // //                           {page}
// // // //                         </button>
// // // //                       ))}
// // // //                     </div>
// // // //                   </div>
// // // //                 </div>
// // // //               </div>
// // // //             </div>

// // // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // // //               <div className="rts-single-wized Categories">
// // // //                 <div className="wized-header">
// // // //                   <h5 className="title">Categories</h5>
// // // //                 </div>
// // // //                 <div className="wized-body">
// // // //                   {content.widgets.categories.map((cat, idx) => (
// // // //                     <ul key={idx} className="single-categories">
// // // //                       <li>
// // // //                         <a 
// // // //                           href="#" 
// // // //                           onClick={(e) => {
// // // //                             e.preventDefault();
// // // //                             setSelectedCategory(cat);
// // // //                           }}
// // // //                           style={{ color: selectedCategory === cat ? '#007bff' : 'inherit' }}
// // // //                         >
// // // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // // //                         </a>
// // // //                       </li>
// // // //                     </ul>
// // // //                   ))}
// // // //                 </div>
// // // //               </div>

// // // //               {/* <div className="rts-single-wized Recent-post">
// // // //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// // // //                 <div className="wized-body">
// // // //                   {content.widgets.recentPosts.map((post, idx) => (
// // // //                     <div key={idx} className="recent-post-single custom-recent-row">
// // // //                       <div className="thumbnail recent-thumb-fixed">
// // // //                         <Link href={post.link}><img src={post.thumbnail} alt="Blog_post" className="pic2-img" /></Link>
// // // //                       </div>
// // // //                       <div className="content-area">
// // // //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// // // //                         <Link className="post-title" href={post.link}>
// // // //                           <p className="pic2-title-style">{post.description}</p>
// // // //                         </Link>
// // // //                       </div>
// // // //                     </div>
// // // //                   ))}
// // // //                 </div>
// // // //               </div> */}

// // // //               <div className="rts-single-wized contact">
// // // //                 <div className="wized-header" style={{ textAlign: 'center', padding: '10px 0' }}>
// // // //                     <img
// // // //                       src={content.widgets.contactWidget.logo}
// // // //                       alt="Business_logo"
// // // //                       style={{ maxWidth: '100px', display: 'block', margin: '0 auto', objectFit: 'contain' }}
// // // //                     />
// // // //                 </div>
// // // //                 <div className="wized-body">
// // // //                   <h5 className="title">{content.widgets.contactWidget.title}</h5>
// // // //                   <Link className="rts-btn btn-primary btn-white" href={content.widgets.contactWidget.link}>
// // // //                     {content.widgets.contactWidget.buttonText}
// // // //                   </Link>
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <style jsx>{`
// // // //         .custom-recent-row { display: flex !important; align-items: flex-start !important; gap: 15px; margin-bottom: 20px; }
// // // //         .recent-thumb-fixed { width: 80px !important; height: 80px !important; min-width: 80px !important; overflow: hidden; border-radius: 6px; }
// // // //         .pic2-img { width: 100% !important; height: 100% !important; object-fit: cover !important; }
// // // //         .pic2-title-style { font-size: 14px !important; line-height: 1.4; color: #666; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; margin: 0; }
// // // //       `}</style>
// // // //     </>
// // // //   );
// // // // };

// // // // export default BlogArchive;




// // // "use client";
// // // import React, { useState } from "react"; 
// // // import useSWR from "swr";
// // // import Link from "next/link";

// // // /* 🔹 SLUG HELPER */
// // // const makeSlug = (text: string) =>
// // //   text
// // //     .toLowerCase()
// // //     .trim()
// // //     .replace(/[^a-z0-9\s-]/g, "")
// // //     .replace(/\s+/g, "-");

// // // interface Breadcrumb {
// // //   bgTitle: string;
// // //   title: string;
// // //   description: string;
// // //   shapes: string[];
// // // }

// // // interface Post {
// // //   thumbnail: string;
// // //   date: string;
// // //   category: string;
// // //   title: string;
// // //   description: string;
// // //   link: string;
// // //   fb_link: string | null;
// // //   delay: number;
// // // }

// // // interface RecentPost {
// // //   thumbnail: string;
// // //   date: string;
// // //   title: string;
// // //   description: string;
// // //   link: string;
// // // }

// // // interface Widgets {
// // //   categories: string[];
// // //   recentPosts: RecentPost[];
// // //   tags: string[];
// // //   contactWidget: {
// // //     logo: string;
// // //     title: string;
// // //     buttonText: string;
// // //     link: string;
// // //   };
// // // }

// // // interface BlogContent {
// // //   breadcrumb: Breadcrumb;
// // //   posts: Post[];
// // //   pagination: string[];
// // //   widgets: Widgets;
// // // }

// // // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // // const BlogArchive = () => {
// // //   const { data, error } = useSWR(
// // //     "https://gba.mig.org.pk/api/news",
// // //     fetcher
// // //   );

// // //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// // //   if (error) return <p>Failed to load data</p>;
// // //   if (!data) return <p>Loading...</p>;

// // //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// // //   const mappedData: BlogContent = {
// // //     breadcrumb: {
// // //       bgTitle: "News",
// // //       title: "Latest Updates",
// // //       description: "GBC official announcements & activities",
// // //       shapes: [
// // //         "images/about/shape/01.png",
// // //         "images/about/shape/02.png",
// // //         "images/about/shape/03.png",
// // //       ],
// // //     },

// // //     posts: apiPosts.map((item: any, index: number) => ({
// // //       thumbnail: item?.image || "/images/placeholder.jpg",
// // //       date: item?.created_at || "",
// // //       category: String(item?.category || ""),
// // //       title: item?.title || "",
// // //       description: item?.description
// // //         ? item.description.substring(0, 250) + "..."
// // //         : "",
// // //       link: `/blog-details/${makeSlug(item?.title || "")}`,
// // //       fb_link: item?.fb_post_url, // 🔹 API se FB link yahan check hoga
// // //       delay: 0.2 * index,
// // //     })),

// // //     pagination: ["01", "02", "03", "04"],

// // //     widgets: {
// // //       categories: Array.from(
// // //         new Set(
// // //           apiPosts
// // //             .map((item: any) => item?.category)
// // //             .filter(Boolean)
// // //             .map((cat: any) => String(cat))
// // //         )
// // //       ),

// // //       recentPosts: apiPosts.slice(0, 4).map((item: any) => ({
// // //         thumbnail: item?.image || "/images/placeholder.jpg",
// // //         date: item?.created_at || "",
// // //         title: item?.title || "",
// // //         description: item?.description 
// // //             ? item.description.substring(0, 60) + "..." 
// // //             : "",
// // //         link: `/blog-details/${makeSlug(item?.title || "")}`,
// // //       })),

// // //       tags: ["Business", "Trade", "GBC", "Asia", "Africa"],

// // //       contactWidget: {
// // //         logo: "/images/logo/Archive.png",
// // //         title: "Need Help?",
// // //         buttonText: "Contact Us",
// // //         link: "/contact-2",
// // //       },
// // //     },
// // //   };

// // //   const displayedPosts = selectedCategory
// // //     ? mappedData.posts.filter((p) => p.category === selectedCategory)
// // //     : mappedData.posts;

// // //   return (
// // //     <>
// // //       <div className="rts-breadcrumb-area">
// // //         <div className="container">
// // //           <div className="row">
// // //             <div className="col-lg-12">
// // //               <div className="title-area-left center mt-dec-blog-bread">
// // //                 <span className="bg-title">{mappedData.breadcrumb.bgTitle}</span>
// // //                 <h1 className="title rts-text-anime-style-1">
// // //                   {mappedData.breadcrumb.title}
// // //                 </h1>
// // //                 <p className="disc">{mappedData.breadcrumb.description}</p>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// // //         <div className="container">
// // //           <div className="row g-5">
// // //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// // //               {displayedPosts.map((post, i) => (
// // //                 <div key={i} className="blog-single-post-listing">
// // //                   <div className="thumbnail">
// // //                     <img src={post.thumbnail} alt="Blog" />
// // //                   </div>

// // //                   <div className="blog-listing-content">
// // //                     <div className="user-info">
// // //                       <div className="single"><i className="far fa-clock"></i><span>{post.date}</span></div>
// // //                       <div className="single"><i className="far fa-tags"></i><span>{post.category}</span></div>
// // //                     </div>

// // //                     <Link className="blog-title" href={post.link}>
// // //                       <h3 className="title">{post.title}</h3>
// // //                     </Link>

// // //                     <p className="disc">{post.description}</p>

// // //                     {/* 🔹 FIX: Button only shows if fb_link is not null/empty */}
// // //                     {post.fb_link && post.fb_link !== "" && post.fb_link !== "-" && (
// // //                       <Link className="rts-btn btn-primary" href={post.link}>
// // //                         Read Details
// // //                       </Link>
// // //                     )}
// // //                   </div>
// // //                 </div>
// // //               ))}

// // //               {/* Pagination Section */}
// // //               <div className="row">
// // //                 <div className="col-12">
// // //                   <div className="text-center">
// // //                     <div className="pagination">
// // //                       {mappedData.pagination.map((page, idx) => (
// // //                         <button key={idx} className={idx === 0 ? "active" : ""}>{page}</button>
// // //                       ))}
// // //                       <button><i className="fal fa-angle-double-right"></i></button>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             </div>

// // //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// // //               {/* Categories */}
// // //               <div className="rts-single-wized Categories">
// // //                 <div className="wized-header"><h5 className="title">Categories</h5></div>
// // //                 <div className="wized-body">
// // //                   {mappedData.widgets.categories.map((cat, idx) => (
// // //                     <ul key={idx} className="single-categories">
// // //                       <li>
// // //                         <a href="#" onClick={(e) => { e.preventDefault(); setSelectedCategory(cat); }}
// // //                           style={{ color: selectedCategory === cat ? '#007bff' : 'inherit' }}>
// // //                           {cat} <i className="far fa-long-arrow-right"></i>
// // //                         </a>
// // //                       </li>
// // //                     </ul>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* Recent Posts */}
// // //               <div className="rts-single-wized Recent-post">
// // //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// // //                 <div className="wized-body">
// // //                   {mappedData.widgets.recentPosts.map((post, idx) => (
// // //                     <div key={idx} className="recent-post-single custom-recent-row">
// // //                       <div className="thumbnail recent-thumb-fixed">
// // //                         <Link href={post.link}><img src={post.thumbnail} alt="Recent" className="pic2-img" /></Link>
// // //                       </div>
// // //                       <div className="content-area">
// // //                         <div className="user"><i className="fal fa-clock"></i><span>{post.date}</span></div>
// // //                         <Link className="post-title" href={post.link}>
// // //                           <p className="pic2-title-style">{post.description}</p>
// // //                         </Link>
// // //                       </div>
// // //                     </div>
// // //                   ))}
// // //                 </div>
// // //               </div>

// // //               {/* Contact Widget */}
// // //               <div className="rts-single-wized contact">
// // //                 <div className="wized-header" style={{ textAlign: 'center' }}>
// // //                     <img src="/images/logo/Archive.png" alt="GBA" style={{ maxWidth: '100px', margin: '0 auto' }} />
// // //                 </div>
// // //                 <div className="wized-body">
// // //                   <h5 className="title">Need Help?</h5>
// // //                   <Link className="rts-btn btn-primary btn-white" href="/contact-2">Contact Us</Link>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       <style jsx>{`
// // //         .custom-recent-row { display: flex; gap: 15px; margin-bottom: 20px; }
// // //         .recent-thumb-fixed { width: 80px; height: 80px; min-width: 80px; overflow: hidden; border-radius: 6px; }
// // //         .pic2-img { width: 100%; height: 100%; object-fit: cover; }
// // //         .pic2-title-style { font-size: 14px; line-height: 1.4; color: #666; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
// // //       `}</style>
// // //     </>
// // //   );
// // // };

// // // export default BlogArchive;


// // "use client";
// // import React, { useState } from "react"; 
// // import useSWR from "swr";
// // import Link from "next/link";

// // /* 🔹 SLUG HELPER */
// // const makeSlug = (text: string) =>
// //   text
// //     .toLowerCase()
// //     .trim()
// //     .replace(/[^a-z0-9\s-]/g, "")
// //     .replace(/\s+/g, "-");

// // const fetcher = (url: string) => fetch(url).then((res) => res.json());

// // const BlogArchive = () => {
// //   // Pagination State
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const postsPerPage = 4; // Ek page par kitni posts dikhani hain

// //   const { data, error } = useSWR(
// //     "https://gba.mig.org.pk/api/news",
// //     fetcher
// //   );

// //   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

// //   if (error) return <p>Failed to load data</p>;
// //   if (!data) return <p>Loading...</p>;

// //   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

// //   // 🔹 Filter posts by category first
// //   const filteredPosts = selectedCategory
// //     ? apiPosts.filter((p) => String(p.category) === selectedCategory)
// //     : apiPosts;

// //   // 🔹 Pagination Logic: Calculate total pages
// //   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
// //   const indexOfLastPost = currentPage * postsPerPage;
// //   const indexOfFirstPost = indexOfLastPost - postsPerPage;
// //   const currentDisplayedPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

// //   const categories = Array.from(
// //     new Set(apiPosts.map((item: any) => String(item?.category)).filter(Boolean))
// //   );

// //   return (
// //     <>
// //       <div className="rts-breadcrumb-area">
// //         <div className="container">
// //           <div className="row">
// //             <div className="col-lg-12">
// //               <div className="title-area-left center mt-dec-blog-bread">
// //                 <span className="bg-title">News</span>
// //                 <h1 className="title rts-text-anime-style-1">Latest Updates</h1>
// //                 <p className="disc">GBC official announcements & activities</p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
// //         <div className="container">
// //           <div className="row g-5">
// //             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
// //               {currentDisplayedPosts.map((item, i) => {
// //                 const postLink = `/blog-details/${makeSlug(item?.title || "")}`;
// //                 return (
// //                   <div key={i} className="blog-single-post-listing">
// //                     <div className="thumbnail">
// //                       <img src={item?.image || "/images/placeholder.jpg"} alt="Blog" />
// //                     </div>
// //                     <div className="blog-listing-content">
// //                       <div className="user-info">
// //                         <div className="single"><i className="far fa-clock"></i><span>{item?.created_at}</span></div>
// //                         <div className="single"><i className="far fa-tags"></i><span>{item?.category}</span></div>
// //                       </div>
// //                       <Link className="blog-title" href={postLink}>
// //                         <h3 className="title">{item?.title}</h3>
// //                       </Link>
// //                       <p className="disc">{item?.description?.substring(0, 250)}...</p>
                      
// //                       {/* 🔹 FIX: Button only shows if fb_link exists */}
// //                       {item?.fb_post_url && item?.fb_post_url !== "" && item?.fb_post_url !== "-" && (
// //                         <Link className="rts-btn btn-primary" href={postLink}>
// //                           Read Details
// //                         </Link>
// //                       )}
// //                     </div>
// //                   </div>
// //                 );
// //               })}

// //               {/* 🔹 DYNAMIC PAGINATION BUTTONS */}
// //               {totalPages > 1 && (
// //                 <div className="row">
// //                   <div className="col-12">
// //                     <div className="text-center">
// //                       <div className="pagination">
// //                         {[...Array(totalPages)].map((_, idx) => (
// //                           <button 
// //                             key={idx} 
// //                             className={currentPage === idx + 1 ? "active" : ""}
// //                             onClick={() => setCurrentPage(idx + 1)}
// //                           >
// //                             {String(idx + 1).padStart(2, '0')}
// //                           </button>
// //                         ))}
// //                         {currentPage < totalPages && (
// //                           <button onClick={() => setCurrentPage(currentPage + 1)}>
// //                             <i className="fal fa-angle-double-right"></i>
// //                           </button>
// //                         )}
// //                       </div>
// //                     </div>
// //                   </div>
// //                 </div>
// //               )}
// //             </div>

// //             {/* Sidebar */}
// //             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
// //               <div className="rts-single-wized Categories">
// //                 <div className="wized-header"><h5 className="title">Categories</h5></div>
// //                 <div className="wized-body">
// //                   {categories.map((cat, idx) => (
// //                     <ul key={idx} className="single-categories">
// //                       <li>
// //                         <a href="#" onClick={(e) => { e.preventDefault(); setSelectedCategory(cat); setCurrentPage(1); }}
// //                           style={{ color: selectedCategory === cat ? '#007bff' : 'inherit' }}>
// //                           {cat} <i className="far fa-long-arrow-right"></i>
// //                         </a>
// //                       </li>
// //                     </ul>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="rts-single-wized Recent-post">
// //                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
// //                 <div className="wized-body">
// //                   {apiPosts.slice(0, 4).map((post, idx) => (
// //                     <div key={idx} className="recent-post-single custom-recent-row">
// //                       <div className="thumbnail recent-thumb-fixed">
// //                         <Link href={`/blog-details/${makeSlug(post?.title || "")}`}>
// //                           <img src={post?.image || "/images/placeholder.jpg"} alt="Recent" className="pic2-img" />
// //                         </Link>
// //                       </div>
// //                       <div className="content-area">
// //                         <div className="user"><i className="fal fa-clock"></i><span>{post?.created_at}</span></div>
// //                         <Link className="post-title" href={`/blog-details/${makeSlug(post?.title || "")}`}>
// //                           <p className="pic2-title-style">{post?.description?.substring(0, 60)}...</p>
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   ))}
// //                 </div>
// //               </div>

// //               <div className="rts-single-wized contact">
// //                 <div className="wized-header" style={{ textAlign: 'center' }}>
// //                     <img src="/images/logo/Archive.png" alt="GBA" style={{ maxWidth: '100px', margin: '0 auto' }} />
// //                 </div>
// //                 <div className="wized-body">
// //                   <h5 className="title">Need Help?</h5>
// //                   <Link className="rts-btn btn-primary btn-white" href="/contact-2">Contact Us</Link>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>

// //       <style jsx>{`
// //         .pagination button { margin: 0 5px; padding: 10px 15px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; background: #fff; }
// //         .pagination button.active { background: #394347; color: #fff; border-color: #394347; }
// //         .custom-recent-row { display: flex; gap: 15px; margin-bottom: 20px; }
// //         .recent-thumb-fixed { width: 80px; height: 80px; min-width: 80px; overflow: hidden; border-radius: 6px; }
// //         .pic2-img { width: 100%; height: 100%; object-fit: cover; }
// //         .pic2-title-style { font-size: 14px; line-height: 1.4; color: #666; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
// //       `}</style>
// //     </>
// //   );
// // };

// // export default BlogArchive;



// "use client";
// import React, { useState } from "react"; 
// import useSWR from "swr";
// import Link from "next/link";

// /* 🔹 SLUG HELPER */
// const makeSlug = (text: string) =>
//   text
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, "-");

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const BlogArchive = () => {
//   // Pagination State
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 4; // Ek page par kitni posts dikhani hain

//   const { data, error } = useSWR(
//     "https://gba.mig.org.pk/api/news",
//     fetcher
//   );

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   if (error) return <p>Failed to load data</p>;
//   if (!data) return <p>Loading...</p>;

//   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

//   // 🔹 Filter posts by category first
//   const filteredPosts = selectedCategory
//     ? apiPosts.filter((p) => String(p.category) === selectedCategory)
//     : apiPosts;

//   // 🔹 Pagination Logic: Calculate total pages
//   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentDisplayedPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   const categories = Array.from(
//     new Set(apiPosts.map((item: any) => String(item?.category)).filter(Boolean))
//   );

//   return (
//     <>
//       <div className="rts-breadcrumb-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left center mt-dec-blog-bread">
//                 <span className="bg-title">News</span>
//                 <h1 className="title rts-text-anime-style-1">Latest Updates</h1>
//                 <p className="disc">GBC official announcements & activities</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
//         <div className="container">
//           <div className="row g-5">
//             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
//               {currentDisplayedPosts.map((item, i) => {
//                 const postLink = `/blog-details/${makeSlug(item?.title || "")}`;
//                 return (
//                   <div key={i} className="blog-single-post-listing">
//                     <div className="thumbnail">
//                       <img src={item?.image || "/images/placeholder.jpg"} alt="Blog" />
//                     </div>
//                     <div className="blog-listing-content">
//                       <div className="user-info">
//                         <div className="single"><i className="far fa-clock"></i><span>{item?.created_at}</span></div>
//                         <div className="single"><i className="far fa-tags"></i><span>{item?.category}</span></div>
//                       </div>
//                       <Link className="blog-title" href={postLink}>
//                         <h3 className="title">{item?.title}</h3>
//                       </Link>
//                       <p className="disc">{item?.description?.substring(0, 250)}...</p>
                      
//                       {/* 🔹 FIX: Button only shows if fb_link exists */}
//                       {item?.fb_post_url && item?.fb_post_url !== "" && item?.fb_post_url !== "-" && (
//                         <Link className="rts-btn btn-primary" href={postLink}>
//                           Read Details
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* 🔹 DYNAMIC PAGINATION BUTTONS */}
//               {totalPages > 1 && (
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="text-center">
//                       <div className="pagination">
//                         {[...Array(totalPages)].map((_, idx) => (
//                           <button 
//                             key={idx} 
//                             className={currentPage === idx + 1 ? "active" : ""}
//                             onClick={() => setCurrentPage(idx + 1)}
//                           >
//                             {String(idx + 1).padStart(2, '0')}
//                           </button>
//                         ))}
//                         {currentPage < totalPages && (
//                           <button onClick={() => setCurrentPage(currentPage + 1)}>
//                             <i className="fal fa-angle-double-right"></i>
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Sidebar */}
//             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
//               <div className="rts-single-wized Categories">
//                 <div className="wized-header"><h5 className="title">Categories</h5></div>
//                 <div className="wized-body">
//                   {categories.map((cat, idx) => (
//                     <ul key={idx} className="single-categories">
//                       <li>
//                         <a href="#" onClick={(e) => { e.preventDefault(); setSelectedCategory(cat); setCurrentPage(1); }}
//                           style={{ color: selectedCategory === cat ? '#007bff' : 'inherit' }}>
//                           {cat} <i className="far fa-long-arrow-right"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   ))}
//                 </div>
//               </div>

//               <div className="rts-single-wized Recent-post">
//                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
//                 <div className="wized-body">
//                   {apiPosts.slice(0, 4).map((post, idx) => (
//                     <div key={idx} className="recent-post-single custom-recent-row">
//                       <div className="thumbnail recent-thumb-fixed">
//                         <Link href={`/blog-details/${makeSlug(post?.title || "")}`}>
//                           <img src={post?.image || "/images/placeholder.jpg"} alt="Recent" className="pic2-img" />
//                         </Link>
//                       </div>
//                       <div className="content-area">
//                         <div className="user"><i className="fal fa-clock"></i><span>{post?.created_at}</span></div>
//                         <Link className="post-title" href={`/blog-details/${makeSlug(post?.title || "")}`}>
//                           <p className="pic2-title-style">{post?.description?.substring(0, 60)}...</p>
//                         </Link>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="rts-single-wized contact">
//                 <div className="wized-header" style={{ textAlign: 'center' }}>
//                     <img src="/images/logo/Archive.png" alt="GBA" style={{ maxWidth: '100px', margin: '0 auto' }} />
//                 </div>
//                 <div className="wized-body">
//                   <h5 className="title">Need Help?</h5>
//                   <Link className="rts-btn btn-primary btn-white" href="/contact-2">Contact Us</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .pagination button { margin: 0 5px; padding: 10px 15px; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; background: #fff; }
//         .pagination button.active { background: #394347; color: #fff; border-color: #394347; }
//         .custom-recent-row { display: flex; gap: 15px; margin-bottom: 20px; }
//         .recent-thumb-fixed { width: 80px; height: 80px; min-width: 80px; overflow: hidden; border-radius: 6px; }
//         .pic2-img { width: 100%; height: 100%; object-fit: cover; }
//         .pic2-title-style { font-size: 14px; line-height: 1.4; color: #666; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
//       `}</style>
//     </>
//   );
// };

// export default BlogArchive;



// "use client";
// import React, { useState,useEffect } from "react"; 

// import useSWR from "swr";
// import Link from "next/link";
// import { useSearchParams } from 'next/navigation';

// /* 🔹 SLUG HELPER */
// const makeSlug = (text: string) =>
//   text
//     .toLowerCase()
//     .trim()
//     .replace(/[^a-z0-9\s-]/g, "")
//     .replace(/\s+/g, "-");

// const fetcher = (url: string) => fetch(url).then((res) => res.json());

// const BlogArchive = () => {
//   // Pagination State
//   const searchParams = useSearchParams();
//     const categoryFromUrl = searchParams.get('category');

//     // ... your existing state ...

//     useEffect(() => {
//         if (categoryFromUrl) {
//             setSelectedCategory(categoryFromUrl);
//             setCurrentPage(1);
//         }
//     }, [categoryFromUrl]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const postsPerPage = 4; 

//   const { data, error } = useSWR(
//     "https://gba.mig.org.pk/api/news",
//     fetcher
//   );

//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

//   if (error) return <p>Failed to load data</p>;
//   if (!data) return <p>Loading...</p>;

//   const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];

//   // 🔹 Filter posts by category first
//   const filteredPosts = selectedCategory
//     ? apiPosts.filter((p) => String(p.category) === selectedCategory)
//     : apiPosts;

//   // 🔹 Pagination Logic: Calculate total pages
//   const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  
//   // Logic to show only relevant posts for the current page
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentDisplayedPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

//   const categories = Array.from(
//     new Set(apiPosts.map((item: any) => String(item?.category)).filter(Boolean))
//   );

//   return (
//     <>
//       <div className="rts-breadcrumb-area">
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-12">
//               <div className="title-area-left center mt-dec-blog-bread">
//                 <span className="bg-title">News</span>
//                 <h1 className="title rts-text-anime-style-1">Latest Updates</h1>
//                 <p className="disc">GBC official announcements & activities</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
//         <div className="container">
//           <div className="row g-5">
//             <div className="col-xl-8 col-md-12 col-sm-12 col-12">
//               {currentDisplayedPosts.map((item, i) => {
//                 const postLink = `/blog-details/${makeSlug(item?.title || "")}`;
//                 return (
//                   <div key={i} className="blog-single-post-listing">
//                     <div className="thumbnail">
//                       <img src={item?.image || "/images/placeholder.jpg"} alt="Blog" />
//                     </div>
//                     <div className="blog-listing-content">
//                       <div className="user-info">
//                         <div className="single"><i className="far fa-clock"></i><span>{item?.created_at}</span></div>
//                         <div className="single"><i className="far fa-tags"></i><span>{item?.category}</span></div>
//                       </div>
//                       <Link className="blog-title" href={postLink}>
//                         <h3 className="title">{item?.title}</h3>
//                       </Link>
//                       <p className="disc">{item?.description?.substring(0, 250)}...</p>
                      
//                       {item?.fb_post_url && item?.fb_post_url !== "" && item?.fb_post_url !== "-" && (
//                         <Link className="rts-btn btn-primary" href={postLink}>
//                           Read Details
//                         </Link>
//                       )}
//                     </div>
//                   </div>
//                 );
//               })}

//               {/* 🔹 DYNAMIC PAGINATION BUTTONS */}
//               {totalPages > 1 && (
//                 <div className="row">
//                   <div className="col-12">
//                     <div className="text-center">
//                       <div className="pagination">
//                         {/* Page Numbers */}
//                         {[...Array(totalPages)].map((_, idx) => (
//                           <button 
//                             key={idx} 
//                             className={currentPage === idx + 1 ? "active" : ""}
//                             onClick={() => setCurrentPage(idx + 1)}
//                             type="button"
//                           >
//                             {String(idx + 1).padStart(2, '0')}
//                           </button>
//                         ))}
                        
//                         {/* Next Button */}
//                         {currentPage < totalPages && (
//                           <button 
//                             onClick={() => setCurrentPage(prev => prev + 1)}
//                             type="button"
//                           >
//                             <i className="fal fa-angle-double-right"></i>
//                           </button>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             {/* Sidebar */}
//             <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
//               <div className="rts-single-wized Categories">
//                 <div className="wized-header"><h5 className="title">Categories</h5></div>
//                 <div className="wized-body">
//                   {categories.map((cat, idx) => (
//                     <ul key={idx} className="single-categories">
//                       <li>
//                         <a href="#" onClick={(e) => { e.preventDefault(); setSelectedCategory(cat); setCurrentPage(1); }}
//                           style={{ color: selectedCategory === cat ? '#007bff' : 'inherit' }}>
//                           {cat} <i className="far fa-long-arrow-right"></i>
//                         </a>
//                       </li>
//                     </ul>
//                   ))}
//                 </div>
//               </div>

//               {/* <div className="rts-single-wized Recent-post">
//                 <div className="wized-header"><h5 className="title">Recent Posts</h5></div>
//                 <div className="wized-body">
//                   {apiPosts.slice(0, 4).map((post, idx) => (
//                     <div key={idx} className="recent-post-single custom-recent-row">
//                       <div className="thumbnail recent-thumb-fixed">
//                         <Link href={`/blog-details/${makeSlug(post?.title || "")}`}>
//                           <img src={post?.image || "/images/placeholder.jpg"} alt="Recent" className="pic2-img" />
//                         </Link>
//                       </div>
//                       <div className="content-area">
//                         <div className="user"><i className="fal fa-clock"></i><span>{post?.created_at}</span></div>
//                         <Link className="post-title" href={`/blog-details/${makeSlug(post?.title || "")}`}>
//                           <p className="pic2-title-style">{post?.description?.substring(0, 60)}...</p>
//                         </Link>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div> */}

//               <div className="rts-single-wized contact">
//                 <div className="wized-header" style={{ textAlign: 'center' }}>
//                     <img src="/images/logo/Archive.png" alt="GBA" style={{ maxWidth: '100px', margin: '0 auto' }} />
//                 </div>
//                 <div className="wized-body">
//                   <h5 className="title">Need Help?</h5>
//                   <Link className="rts-btn btn-primary btn-white" href="/contact-2">Contact Us</Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         .pagination { display: flex; justify-content: center; gap: 10px; margin-top: 30px; }
//         .pagination button { width: 45px; height: 45px; border: 1px solid #ddd; border-radius: 5px; cursor: pointer; background: #fff; font-weight: 600; }
//         .pagination button.active { background: #1C2428; color: #fff; border-color: #1C2428; }
//         .custom-recent-row { display: flex; gap: 15px; margin-bottom: 20px; }
//         .recent-thumb-fixed { width: 80px; height: 80px; min-width: 80px; overflow: hidden; border-radius: 6px; }
//         .pic2-img { width: 100%; height: 100%; object-fit: cover; }
//         .pic2-title-style { font-size: 14px; line-height: 1.4; color: #666; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
//       `}</style>
//     </>
//   );
// };

// export default BlogArchive;





"use client";
import React, { useState, useEffect, Suspense } from "react"; 
import useSWR from "swr";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

/* 🔹 SLUG HELPER */
const makeSlug = (text: string) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-");

const fetcher = (url: string) => fetch(url).then((res) => res.json());

// ✅ Keep all your original component code inside BlogArchiveContent
const BlogArchiveContent = () => {
  const searchParams = useSearchParams();
  const categoryFromUrl = searchParams.get('category');

  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const postsPerPage = 4;

  const { data, error } = useSWR("https://gba.mig.org.pk/api/news", fetcher);

  useEffect(() => {
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl);
      setCurrentPage(1);
    }
  }, [categoryFromUrl]);

  if (error) return <p>Failed to load data</p>;
  if (!data) return <p>Loading...</p>;

  const apiPosts: any[] = Array.isArray(data?.data) ? data.data : [];
  const filteredPosts = selectedCategory
    ? apiPosts.filter((p) => String(p.category) === selectedCategory)
    : apiPosts;

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentDisplayedPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);

  const categories = Array.from(
    new Set(apiPosts.map((item: any) => String(item?.category)).filter(Boolean))
  );

  return (

    <>
    
      {/* 🔹 Keep all your original JSX unchanged */}
      <div className="rts-breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title-area-left center mt-dec-blog-bread">
                <span className="bg-title">News</span>
                <h1 className="title rts-text-anime-style-1">Latest Updates</h1>
                <p className="disc">GBC official announcements & activities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rts-blog-list-area rts-section-gapBottom mt-dec-blog-list">
        <div className="container">
          <div className="row g-5">
            <div className="col-xl-8 col-md-12 col-sm-12 col-12">
              {currentDisplayedPosts.map((item, i) => {
                const postLink = `/blog-details/${makeSlug(item?.title || "")}`;
                return (
                  <div key={i} className="blog-single-post-listing">
                    <div className="thumbnail">
                      <img src={item?.image || "/images/placeholder.jpg"} alt="Blog" />
                    </div>
                    <div className="blog-listing-content">
                      <div className="user-info">
                        <div className="single"><i className="far fa-clock"></i><span>{item?.created_at}</span></div>
                        <div className="single"><i className="far fa-tags"></i><span>{item?.category}</span></div>
                      </div>
                      <Link className="blog-title" href={postLink}>
                        <h3 className="title">{item?.title}</h3>
                      </Link>
                      <p className="disc">{item?.description?.substring(0, 250)}...</p>
                      
                      {item?.fb_post_url && item?.fb_post_url !== "" && item?.fb_post_url !== "-" && (
                        <Link className="rts-btn btn-primary" href={postLink}>
                          Read Details
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}

              {/* 🔹 DYNAMIC PAGINATION BUTTONS */}
              {totalPages > 1 && (
                <div className="row">
                  <div className="col-12">
                    <div className="text-center">
                      <div className="pagination">
                        {[...Array(totalPages)].map((_, idx) => (
                          <button 
                            key={idx} 
                            className={currentPage === idx + 1 ? "active" : ""}
                            onClick={() => setCurrentPage(idx + 1)}
                            type="button"
                          >
                            {String(idx + 1).padStart(2, '0')}
                          </button>
                        ))}
                        {currentPage < totalPages && (
                          <button 
                            onClick={() => setCurrentPage(prev => prev + 1)}
                            type="button"
                          >
                            <i className="fal fa-angle-double-right"></i>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="col-xl-4 col-md-12 col-sm-12 col-12 mt_lg--60 blog-list-style">
              <div className="rts-single-wized Categories">
                <div className="wized-header"><h5 className="title">Categories</h5></div>
                <div className="wized-body">
                  {categories.map((cat, idx) => (
                    <ul key={idx} className="single-categories">
                      <li>
                        <a href="#" onClick={(e) => { e.preventDefault(); setSelectedCategory(cat); setCurrentPage(1); }}
                          style={{ color: selectedCategory === cat ? '#007bff' : 'inherit' }}>
                          {cat} <i className="far fa-long-arrow-right"></i>
                        </a>
                      </li>
                    </ul>
                  ))}
                </div>
              </div>

              <div className="rts-single-wized contact">
                <div className="wized-header" style={{ textAlign: 'center' }}>
                    <img src="/images/logo/Archive.png" alt="GBA" style={{ maxWidth: '100px', margin: '0 auto' }} />
                </div>
                <div className="wized-body">
                  <h5 className="title">Need Help?</h5>
                  <Link className="rts-btn btn-primary btn-white" href="/contact">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pagination { display: flex; justify-content: center; gap: 10px; margin-top: 30px; }
        .pagination button { width: 45px; height: 45px; border: 1px solid #ddd; border-radius: 5px; cursor: pointer; background: #fff; font-weight: 600; }
        .pagination button.active { background: #1C2428; color: #fff; border-color: #1C2428; }
        .custom-recent-row { display: flex; gap: 15px; margin-bottom: 20px; }
        .recent-thumb-fixed { width: 80px; height: 80px; min-width: 80px; overflow: hidden; border-radius: 6px; }
        .pic2-img { width: 100%; height: 100%; object-fit: cover; }
        .pic2-title-style { font-size: 14px; line-height: 1.4; color: #666; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
      
    </>
  );
};

// ✅ Wrap the original component in Suspense to fix useSearchParams error
export default function BlogArchive() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BlogArchiveContent />
    </Suspense>
  );
}
