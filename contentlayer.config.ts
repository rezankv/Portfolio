import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: '**/**/posts/**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    banner: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    updatedAt: { type: 'date', required: true },
    createdAt: { type: 'date', required: true },
    author: { type: 'string', required: true },
    isPublished: { type: 'boolean', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    category: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) =>
        `/${post._raw.flattenedPath.replace('posts/', 'blog/')}`,
    },
    slug: {
      type: 'string',
      resolve: (post) =>
        `${post._raw.flattenedPath.replace('posts/', '').trim()}`,
    },
  },
}));

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: '**/**/projects/**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    description: { type: 'string', required: true },
    thumbnail: { type: 'string', required: true },
    banner: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    updatedAt: { type: 'date', required: true },
    createdAt: { type: 'date', required: true },
    author: { type: 'string', required: true },
    isPublished: { type: 'boolean', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: true },
    category: { type: 'string', required: true },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (project) => `/${project._raw.flattenedPath}`,
    },
    slug: {
      type: 'string',
      resolve: (project) =>
        `${project._raw.flattenedPath.replace('projects/', '').trim()}`,
    },
  },
}));

export default makeSource({
  contentDirPath: 'libs/contents/src',
  documentTypes: [Project, Post],
});
