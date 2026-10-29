"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: string;
  title: string;
  category: string;
  date: string;
  slug: string;
  image: string;
}

const POSTS: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Autonomous AI Agents in Enterprise Growth",
    category: "AI & Automation",
    date: "15 Oct 2026",
    slug: "future-of-ai-in-digital-marketing",
    image: "/assets/images/blog/blog-2-1.jpg",
  },
  {
    id: "2",
    title: "Maximizing Meta Ads & Google ROI with Cookieless Tracking",
    category: "Performance Ads",
    date: "18 Oct 2026",
    slug: "maximize-roi-google-ads",
    image: "/assets/images/blog/blog-2-2.jpg",
  },
  {
    id: "3",
    title: "How Next.js & Modern Headless Tech Scale Conversion Rates",
    category: "Web Engineering",
    date: "22 Oct 2026",
    slug: "design-systems-scale",
    image: "/assets/images/blog/blog-2-3.jpg",
  },
];

export default function LotechBlog() {
  return (
    <section className="blog-two" id="blog" style={{ padding: "100px 0 110px", backgroundColor: "#F8F7FC" }}>
      <div className="container">
        <div className="row align-items-center" style={{ marginBottom: "40px" }}>
          <div className="col-md-8">
            <div className="sec-title text-left" style={{ paddingBottom: 0 }}>
              <h6 className="sec-title__tagline">OUR BLOG</h6>
              <h2 className="sec-title__title">
                Actionable Intelligence On <br />AI &amp; Digital Growth.
              </h2>
            </div>
          </div>
          <div className="col-md-4 text-right">
            <div className="blog-two__btn">
              <Link href="/blog" className="lotech-btn">
                <span>
                  View All Articles
                  <span className="lotech-btn__icon">
                    <i className="flaticon-up-right-arrow" />
                    <i className="flaticon-up-right-arrow" />
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>

        <div className="row gutter-x-24 gutter-y-30">
          {POSTS.map((post) => (
            <div key={post.id} className="col-lg-4 col-md-6">
              <div className="blog-card-two" style={{ backgroundColor: "#FFFFFF", borderRadius: "16px", overflow: "hidden", border: "1px solid #ECECEC", height: "100%", display: "flex", flexDirection: "column" }}>
                <div className="blog-card-two__image">
                  <Link href={`/blog/${post.slug}`}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{ width: "100%", height: "230px", objectFit: "cover" }}
                    />
                  </Link>
                </div>
                <div className="blog-card-two__content" style={{ padding: "24px", flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "space-between", marginLeft: 0, borderLeft: "none" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ fontSize: "12px", fontWeight: 700, color: "#6C3BFF", backgroundColor: "#F1EDFF", padding: "4px 10px", borderRadius: "20px" }}>
                        {post.category}
                      </span>
                      <span style={{ fontSize: "13px", color: "#9994A5" }}>
                        {post.date}
                      </span>
                    </div>
                    <h3 className="blog-card-two__title" style={{ fontSize: "19px", fontWeight: 700, lineHeight: 1.3, marginBottom: "16px" }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: "#17151F", textDecoration: "none" }}>
                        {post.title}
                      </Link>
                    </h3>
                  </div>

                  <Link href={`/blog/${post.slug}`} className="blog-card-two__btn" style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "#6C3BFF", fontWeight: 700, textDecoration: "none", fontSize: "14px" }}>
                    <span className="blog-card-two__btn__text">Read Article</span>
                    <span className="blog-card-two__btn__icon">&rarr;</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
