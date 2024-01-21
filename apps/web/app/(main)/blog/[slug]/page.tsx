import { Metadata } from 'next';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';

// ** utils
import { getPostBySlug } from '@web/utils';
// ** locals
import BlogPostContent from './components/BlogPostContent';

interface PageProps {
  params: {
    slug: string;
  };
}

const Page = ({ params: { slug } }: PageProps) => {
  const post = getPostBySlug(slug);

  if (!post) notFound();

  return <BlogPostContent post={post} />;
};

export const generateStaticParams = async () =>
  allPosts.map((blog) => ({ url: blog.slug }));

export default Page;

interface GenerateMetaDataArgs {
  params: { slug: string };
}
export async function generateMetadata({
  params,
}: GenerateMetaDataArgs): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return {
    title: post.title,
    description: post.description,
  };
}
