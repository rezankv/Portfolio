"use client"

import BlogPostHeader from "./components/BlogPostHeader"

// components
import { EditOnGithubButton } from "@/components"

// utils
import { generateEditOnGithubUrl } from "@/utils"

interface Props {
  post: {}
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const BlogPostContent = ({ post }: Props) => {
  return (
    <article className="mdx-styles" style={{ paddingTop: "8rem" }}>
      {/* <div>
        <time
          style={{ color: 'var(--white-2)' }}
          dateTime={post.createdAt}
          className="mb-1 text-xs text-gray-600"
        >
          {format(parseISO(post.createdAt), 'LLLL d, yyyy')}
        </time>
      </div> */}
      <BlogPostHeader
        banner={{ alt: "post.title", src: "post.banner" }}
        description={"post.description"}
        title={"post.title"}
      />
      Content mdx
      <EditOnGithubButton href={generateEditOnGithubUrl("")} />
    </article>
  )
}

export default BlogPostContent
