import { allPosts, allProjects } from 'contentlayer/generated';

export const getPostBySlug = (slug: string) =>
  allPosts.find((post) => post.slug === slug);

export const getProjectBySlug = (slug: string) =>
  allProjects.find((project) => project.slug === slug);
