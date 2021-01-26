import { Flex, IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled';
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
        dark: 'gray.900'
    };

    const primarytextColor = {
        light: 'black',
        dark: 'white'
    };

    const navBgColor = {
        light: 'rgba(255, 255, 255, 0.8)',
        dark: 'rgba(23, 25, 35, 0.8)'
    };

    return (
        <>
            <StickyNav
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="900px"
                width="100%"
                bg={navBgColor[colorMode]}
                as="nav"
                p={8}
                mt={[0, 8]}
                mb={8}
                mx="auto"
            >
                {/* <IconButton
                    aria-label="Toggle dark mode"
                    bg={colorMode === 'dark' ? "gray.700" : "black"}
                    color={colorMode === 'dark' ? "white" : "black"}
                    icon={colorMode === 'dark' ? <SunIcon /> : <MoonIcon />}
                    onClick={toggleColorMode}
                /> */}
                <Flex justify="flex-end">
                    <img
                        style={{
                            borderRadius: '50%'
                        }}
                        width="23%"
                        height="auto"
                        borderRadius="50%"
                        src="me.jpg" alt="me"
                    />
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
