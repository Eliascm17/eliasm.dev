import hydrate from 'next-mdx-remote/hydrate';
import { getAllFiles, getFileById } from '@/lib/mdx';
import BlogLayout from '@/components/BlogLayout';

const Blog = ({ mdxSource, frontMatter }) => {
  const content = hydrate(mdxSource, {
    components: MDXComponents
  });

  return <BlogLayout frontMatter={frontMatter}>{content}</BlogLayout>;
};

export async function getStaticPaths() {
  const posts = await getAllFiles();

  return {
    paths: posts.map((p) => ({
      params: {
        id: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileById(params.id);

  return { props: post };
}

export default Blog;
