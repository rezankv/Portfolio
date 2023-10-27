import { getPostBySlug } from '../../../../libs/utils';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';

interface GenerateMetaDataArgs {
  params: { slug: string };
}
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
  params: {
    slug: string;
  };
}

// export const generateMetaData = async ({
//   params: { slug },
// }: GenerateMetaDataArgs) => {
//   const post = getPostBySlug(slug);
//   if (!post) notFound();
//   return { title: post.title };
// };

export const generateStaticParams = async () =>
  allPosts.map((blog) => ({ url: blog.slug }));

const Page = ({ params: { slug } }: Props) => {
  const post = getPostBySlug(slug);
  if (!post) return notFound();
  return (
    <article style={{ color: 'var(--white-1)' }}>
      <div>
        <time
          style={{ color: 'var(--white-2)' }}
          dateTime={post.createdAt}
          className="mb-1 text-xs text-gray-600"
        >
          {format(parseISO(post.createdAt), 'LLLL d, yyyy')}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div
        className="[&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
};

export default Page;
