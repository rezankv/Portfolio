import { getPostBySlug } from '../../../../libs/utils';
import { allPosts } from 'contentlayer/generated';
import { notFound } from 'next/navigation';
import { format, parseISO } from 'date-fns';
import { useMDXComponent } from 'next-contentlayer/hooks';
import Image from 'next/image';
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

const Page = ({ params: { slug } }: Props) => {
  const post = getPostBySlug(slug);

  if (!post) notFound();

  // const Content = useMDXComponent(post.body.html);
  const MDXContent = useMDXComponent(post.body.code);

  console.log(MDXContent);

  return (
    <article className='mdx-styles'  style={{  paddingTop: '8rem' }}>
      {/* <div>
        <time
          style={{ color: 'var(--white-2)' }}
          dateTime={post.createdAt}
          className="mb-1 text-xs text-gray-600"
        >
          {format(parseISO(post.createdAt), 'LLLL d, yyyy')}
        </time>
      </div> */}

      <MDXContent
        components={{
          Image,
        }}
      />
    </article>
  );
};

export const generateStaticParams = async () =>
  allPosts.map((blog) => ({ url: blog.slug }));

export default Page;
