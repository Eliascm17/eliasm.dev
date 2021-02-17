import Link from 'next/link';
import Image from 'next/image';
import Tweet from 'react-tweet-embed';

const CustomLink = ({ href, ...props }) => {
  return (
    <Link href={href}>
      <a {...props} />
    </Link>
  );
};

const MDXComponents = {
  Image,
  a: CustomLink,
  Tweet
};

export default MDXComponents;
