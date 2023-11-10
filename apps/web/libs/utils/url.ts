import { stringify } from 'querystring';
import { github_link, repositoryName } from '../constants';

export const generateUrl = (
  path: string,
  params: Record<string, string | number>,
  query: Record<string, string | number>
) => {
  // add ":" at the beginning of each
  const formattedObj: Record<string, any> = {};
  const keys = Object.keys(params);
  for (const key of keys) {
    const newKey = `:${key}`;
    formattedObj[newKey] = params[key];
  }

  const searchRegExp = new RegExp(Object.keys(formattedObj).join('|'), 'gi');
  return `${path.replace(searchRegExp, (match) =>
    encodeURIComponent(formattedObj[match])
  )}${stringify(query) ? `?${stringify(query)}` : ''}`;
};

export const generateEditOnGithubUrl = (path: string): string =>
  `${github_link}/${repositoryName}/edit/develop/libs/contents/src/${path}/index.mdx`;
