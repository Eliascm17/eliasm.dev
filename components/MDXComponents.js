import Link from 'next/link';
import Image from 'next/image';
import CodeBlock from './CodeBlock';

const CustomLink = (props) => {
  const { href, children } = props;

  if (href && href.startsWith('http')) {
    return (
      <Link isExternal {...props}>
        <a style={{ color: '#0075F2' }}>{children}</a>
      </Link>
    );
  }

  return null;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  code: CodeBlock,
  blockquote: (props) => (
    <div
      className="p-2 my-4 items-center border-l-4 border-blockquote-border bg-blockquote-light dark:bg-blockquote-dark"
      {...props}
    />
  ),
  pre: (props) => <div {...props} />,
  h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
  h2: (props) => <h2 className="text-lg font-light" {...props} />,
  h3: (props) => <h3 className="text-md" {...props} />,
  h4: (props) => <h4 className="text-sm" {...props} />,
  h5: (props) => <h5 className="text-xs" {...props} />,
  p: (props) => <p className="font-light" {...props} />,
  ul: (props) => <ul className="pt-2 pl-4 ml-2" {...props} />,
  ol: (props) => <ol className="pt-2 pl-4 ml-2" {...props} />,
  li: (props) => <li className="mt-2 pb-1 list-disc" {...props} />,
  br: (props) => <br className="mt-4 h-20" {...props} />
};

export default MDXComponents;
