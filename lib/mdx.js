import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import mdxPrism from 'mdx-prism';
import renderToString from 'next-mdx-remote/render-to-string';
// import MDXComponents from '@/components/MDXComponents';

const root = process.cwd();

export async function getAllFiles() {
  return fs.readdirSync(path.join(root, 'blog'));
}

export async function getAllFilesFrontMatter() {
  const files = fs.readdirSync(path.join(root, 'blog'));

  return files.reduce((allPosts, id) => {
    const source = fs.readFileSync(path.join(root, 'blog', id), 'utf8');

    const { data } = matter(source);

    return [
      {
        ...data,
        id: id.replace('.mdx', '')
      },
      ...allPosts
    ];
  }, []);
}

export async function getFileById(id) {
  const source = fs.readFileSync(path.join(root, 'blog', `${id}.mdx`), 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        require('remark-autolink-headings'),
        require('remark-code-titles')
      ]
    }
  });

  return { mdxSource, frontMatter: { id: id || null, ...data } };
}
