import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Footer from './Footer';

const StickyNav = styled(Flex)`
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children, ...customMeta }) => {
  const [mounted, setMounted] = useState(false);
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  // After mounting, we have access to the theme
  useEffect(() => setMounted(true), []);

  const meta = {
    type: 'website',
    ...customMeta
  };

  return (
    <>
      <StickyNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        maxWidth="900px"
        width="100%"
        bgColor={bgColor[colorMode]}
        color={bgColor[colorMode]}
        as="nav"
        p={8}
        mt={[0, 8]}
        mb={8}
        mx="auto"
      >
        <Head>
          <title>{meta.title}</title>
          <meta name="robots" content="follow, index" />
          <meta content={meta.description} name="description" />
          <meta
            property="og:url"
            content={`https://Eliasm.dev${router.asPath}`}
          />
          <link rel="canonical" href={`https://Eliasm.dev${router.asPath}`} />
          <meta name="twitter:image" content={meta.image} />
          <meta name="twitter:card" content="summary" key="twcard" />
          <meta name="twitter:creator" content="@Eliascm17" key="twhandle" />
          <meta name="twitter:title" content={meta.title} />
          <meta name="twitter:description" content={meta.description} />
          <meta property="og:type" content={meta.type} />
          <meta property="og:site_name" content="Elias Moreno" />
          <meta property="og:description" content={meta.description} />
          <meta property="og:title" content={meta.title} />
          <meta property="og:image" content={meta.image} />
          {meta.date && (
            <meta property="article:published_time" content={meta.date} />
          )}
        </Head>
        <IconButton
          aria-label="Toggle dark mode"
          bgColor={buttonBgColor[colorMode]}
          color={primarytextColor[colorMode]}
          icon={buttonIcon[colorMode]}
          onClick={toggleColorMode}
          _hover={{ bgColor: buttonHover[colorMode] }}
        />
        <Flex>
          <Box>
            <NextLink href="/">
              <a style={{ color: primarytextColor[colorMode] }}>Home</a>
            </NextLink>
          </Box>
          <Box ml={4}>
            <NextLink href="/blog">
              <a style={{ color: primarytextColor[colorMode] }}>Blog</a>
            </NextLink>
          </Box>
        </Flex>
      </StickyNav>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        bg={bgColor[colorMode]}
        color={primarytextColor[colorMode]}
        px={8}
      >
        {children}
        <Footer />
      </Flex>
    </>
  );
};

export default Container;

const bgColor = {
  light: 'white',
  dark: 'gray.800'
};

const primarytextColor = {
  light: 'black',
  dark: 'white'
};

const buttonBgColor = {
  light: 'gray.100',
  dark: 'gray.700'
};

const buttonIcon = {
  light: <MoonIcon />,
  dark: <SunIcon />
};

const buttonHover = {
  light: 'gray.300',
  dark: 'gray.600'
};
