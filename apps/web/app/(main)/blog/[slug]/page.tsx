import { getPostBySlug } from '../../../../libs/utils';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
import BlogPostHeader from './components/BlogPostContent/components/BlogPostHeader';
import { Metadata } from 'next';
import BlogPostContent from './components/BlogPostContent';

interface PageProps {
  params: {
    slug: string;
  };
}


const Page = ({ params: { slug } }: PageProps) => {
  const post = getPostBySlug(slug);

  if (!post) notFound();


  return (
    <BlogPostContent post={post}/>
  );
};

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

export const generateStaticParams = async () =>
  allPosts.map((blog) => ({ url: blog.slug }));
