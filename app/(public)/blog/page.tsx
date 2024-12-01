import { OstDocument } from "outstatic"
import { getDocuments } from "outstatic/server"
import Link from "next/link"
import Image from "next/image"

// utils
import { generateUrl } from "@/utils"

// constants
import { SINGLE_BLOG_ROUTE } from "@/constants"

const Page = async () => {
  const posts = await getData()
  console.log(posts)
  const renderPosts = (posts: OstDocument[]) => (
    <section className="blog-posts">
      <ul className="blog-posts-list">
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars  */}
        {posts.map((post) => (
          <li key={post.slug} className="blog-post-item">
            <Link
              href={generateUrl(SINGLE_BLOG_ROUTE, { slug: post.slug }, {})}
            >
              <figure className="blog-banner-box">
                <Image
                  width={100}
                  height={100}
                  src={post.coverImage || ""}
                  alt={post.title}
                  loading="lazy"
                />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="dot"></span>
                  <p className="blog-category">{String(post.category) || ""}</p>

                  <time datetime="2022-02-23">۵ آذر</time>
                </div>

                <h3 className="h3 blog-item-title">{post.title}</h3>

                <p className="blog-text">{post.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )

  return (
    <>
      <article className="blog" style={{ minHeight: "unset" }}>
        <header>
          <h2 className="h2 article-title">بلاگ</h2>
        </header>
        {renderPosts(posts)}
      </article>
    </>
  )
}

async function getData() {
  const posts = getDocuments("posts", [
    "title",
    "description",
    "category",
    "coverImage",
    "slug",
  ])
  return posts
}

export default Page
