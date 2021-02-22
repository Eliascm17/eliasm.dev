import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Box, Flex, IconButton, useColorMode } from '@chakra-ui/react';
import styled from '@emotion/styled';
import NextLink from 'next/link';
import React from 'react';
import Footer from './Footer';

const StickyNav = styled(Flex)`
  z-index: 10;
  top: 0;
  backdrop-filter: saturate(180%) blur(20px);
  transition: background-color 0.1 ease-in-out;
`;

const Container = ({ children }) => {
  const { colorMode, toggleColorMode } = useColorMode();

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
