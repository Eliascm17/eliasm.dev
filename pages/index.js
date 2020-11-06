import React from 'react';
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Link
} from '@chakra-ui/core';
import Container from '../components/Container';

export default function Home() {
    const { colorMode } = useColorMode();
    const secondaryTextColor = {
        light: 'gray.700',
        dark: 'gray.400'
    };

    const linkTextColor = {
        light: '#d41111',
        dark: 'blue.400'
    };

    return (
        <Container>
            <Stack
                as="main"
                spacing={8}
                justifyContent="center"
                alignItems="flex-start"
                m="0 auto 4rem auto"
                maxWidth="700px"
            >
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                >
                    <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
                        Hello, I'm Elias 👨🏾‍💻
                    </Heading>
                    <Text color={secondaryTextColor[colorMode]}>
                        I am a soon to be graduate of&nbsp;
                        <Link
                            href="https://www.ttu.edu/"
                            title="ttu.edu"
                            isExternal
                        >
                            Texas Tech University
                        </Link>
                        &nbsp;with a degree in Computer Science and a minor in
                        Mathematics, and my expected graduation date is December
                        of 2020 🥳. <br />
                        <br />I am an aspiring Software engineer that is
                        absolutely in love with anything and everything web. My
                        favorite technology to use as of this moment is&nbsp;
                        <Link
                            href="https://reactjs.org"
                            title="reactjs.org"
                            isExternal
                        >
                            Reactjs.
                        </Link>
                        {/* &nbsp;I spend most of my time studying for classes, but
                        as of right now I'm working on my&nbsp;
                        <Link
                            href="https://github.com/Athena-Capstone-2020/athena-mobile-app"
                            title="Athena"
                            isExternal
                        >
                            Senior Capstone Project
                        </Link> */}
                    </Text>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                    mt={8}
                ></Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                >
                    {/* <Heading
                        letterSpacing="tight"
                        mb={4}
                        size="xl"
                        fontWeight={700}
                    >
                        Projects
                    </Heading>
                    <ProjectCard
                        title="React 2025"
                        description="Build and deploy a modern Jamstack application using the most popular open-source software."
                        href="https://react2025.com/"
                        icon="react2025"
                    />
                    <ProjectCard
                        title="Mastering Next.js"
                        description="A free video course for building static and server-side rendered applications with Next.js and React."
                        href="https://masteringnextjs.com/"
                        icon="nextjs"
                    />
                    <ProjectCard
                        title="jamstackfns"
                        description="The best serverless functions for JAMstack applications. Deploy to Vercel or Netlify for your static site."
                        href="https://jamstackfns.com/"
                        icon="jamstackfns"
                    /> */}
                </Flex>
            </Stack>
        </Container>
    );
}
