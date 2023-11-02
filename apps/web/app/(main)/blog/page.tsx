// TODO : جدا کردن کامپوننت پست کارد
import Link from 'next/link';
import { allPosts, Post } from 'contentlayer/generated';
import { compareDesc } from 'date-fns';
import { generateUrl } from '../../../libs/utils';
import { SINGLE_BLOG_ROUTE } from '../../../libs/constants';

const Page = () => {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.createdAt), new Date(b.createdAt))
  );

  const renderPosts = (posts: Post[]) => (
    <section className="blog-posts">
      <ul className="blog-posts-list">
        {posts.map((post) => (
          <li key={post._id} className="blog-post-item">
            <Link
              href={generateUrl(SINGLE_BLOG_ROUTE, { slug: post.slug }, {})}
            >
              <figure className="blog-banner-box">
                <img src={post.thumbnail} alt={post.title} loading="lazy" />
              </figure>

              <div className="blog-content">
                <div className="blog-meta">
                  <span className="dot"></span>
                  <p className="blog-category">{post.category}</p>


                  {/* <time datetime="2022-02-23">۵ آذر</time> */}
                </div>

                <h3 className="h3 blog-item-title">{post.title}</h3>

                <p className="blog-text">{post.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );

  return (
    <>
      <article className="blog" style={{ minHeight: 'unset' }}>
        <header>
          <h2 className="h2 article-title">بلاگ</h2>
        </header>
        {renderPosts(posts)}
      </article>
    </>
  );
};

export default Page;
