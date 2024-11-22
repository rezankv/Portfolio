import { Metadata } from "next"
import { notFound } from "next/navigation"

// locals
import BlogPostContent from "./components/BlogPostContent"

interface PageProps {
  params: {
    slug: string
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Page = ({ params: { slug } }: PageProps) => {
  const post = {}

  if (!post) notFound()

  return <BlogPostContent post={post} />
}

export const generateStaticParams = async () =>
  [{ url: "" }].map(({ url }) => ({ url }))

export default Page

interface GenerateMetaDataArgs {
  params: { slug: string }
}
export async function generateMetadata({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  params,
}: GenerateMetaDataArgs): Promise<Metadata> {
  const post = {}
  if (!post) notFound()

  return {
    title: 'post.title',
    description: 'post.description',
  }
}
