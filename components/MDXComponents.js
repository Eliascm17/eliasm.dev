import Link from 'next/link';
import Image from 'next/image';
import {
  Heading,
  Text,
  Box,
  Alert,
  useColorMode,
  Divider,
  Code
} from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
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

const Quote = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = {
    light: 'blue.100',
    dark: 'blue.900'
  };

  return (
    <Alert
      mt={4}
      bg={bgColor[colorMode]}
      variant="left-accent"
      status="info"
      css={{
        '> *:first-of-type': {
          marginTop: 0,
          marginLeft: 8
        }
      }}
      {...props}
    />
  );
};

const Hr = () => {
  const { colorMode } = useColorMode();
  const borderColor = {
    light: 'gray.400',
    dark: 'gray.600'
  };

  return <Divider borderColor={borderColor[colorMode]} my={4} w="100%" />;
};

const MDXComponents = {
  Image,
  a: CustomLink,
  pre: (props) => <div {...props} />,
  code: CodeBlock,
  h1: (props) => <Heading size="xl" my={4} {...props} />,
  h2: (props) => <Heading as="h2" size="lg" my={4} {...props} />,
  h3: (props) => <Heading as="h3" size="md" my={4} {...props} />,
  h4: (props) => <Heading as="h4" size="sm" my={4} {...props} />,
  h5: (props) => <Heading as="h5" size="xs" my={4} {...props} />,
  p: (props) => <Text as="p" mt={4} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" pt={2} pl={4} ml={2} {...props} />,
  ol: (props) => <Box as="ol" pt={2} pl={4} ml={2} {...props} />,
  li: (props) => <Box as="li" mt={2} pb={1} {...props} />,
  br: (props) => <Box as="br" mt={4} height="24px" {...props} />,
  hr: Hr,
  blockquote: Quote,
  inlineCode: (props) => (
    <Code
      colorScheme="telegram"
      variant="subtle"
      fontSize="0.84em"
      {...props}
    />
  )
};

export default MDXComponents;
