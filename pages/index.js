import React from 'react';
import {
    useColorMode,
    Heading,
    Text,
    Flex,
    Stack,
    Link,
    Icon
} from '@chakra-ui/core';
import Container from '../components/Container';
import Project from '../components/Project';

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

    const iconColor = {
        light: 'white',
        dark: 'gray.900'
    };

    const favorites = [
        'react',
        'nextjs',
        'javascript',
        'grpahql',
        'adobexd',
        'python'
    ];

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
                        Hi, I'm Elias 👨🏾‍💻
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
                        Mathematics. My expected graduation date is December of
                        2020 🥳, and I'm currently seeking full-time Front-End
                        Developer positions.
                    </Text>
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                >
                    <Heading
                        letterSpacing="tight"
                        mb={4}
                        size="xl"
                        fontWeight={700}
                    >
                        Projects
                    </Heading>
                    <Project
                        title="Athena - Senior Capstone (CS 4366)"
                        description="A kitchen inventory mobile application useful for tracking a kitchen’s current inventory and a helpful way to minimize food waste."
                        href="https://github.com/Athena-Capstone-2020/athena-mobile-app"
                        iconlist={[
                            'react',
                            'javascript',
                            'firebase',
                            'adobexd'
                        ]}
                    />
                    <Project
                        title="Gift Fund Tracker - TTU Institutional Advancement"
                        description="Implemented high-profile web app that tracks and improves the time of scholarship lookups by more than double, leading to faster financial aid review and award times."
                        href=""
                        iconlist={['react', 'javascript', 'nextjs', 'adobexd']}
                    />
                    <Project
                        title="Prospect Affinity Model – TTU Institutional Advancement"
                        description="Tasked with ranking donors in the alumni CRM in a more intelligent way using RFM analysis and Customer Segmentation techniques"
                        href=""
                        iconlist={['python']}
                    />
                </Flex>
                <Flex
                    flexDirection="column"
                    justifyContent="flex-start"
                    alignItems="flex-start"
                    maxWidth="700px"
                >
                    <Heading
                        letterSpacing="tight"
                        mb={4}
                        size="xl"
                        fontWeight={700}
                    >
                        My Favorite Technologies
                    </Heading>
                    <Text>
                        {favorites.map((icon, key) => {
                            return (
                                <Icon
                                    key={key}
                                    aria-label={icon}
                                    name={icon}
                                    color={
                                        icon === 'nextjs'
                                            ? ''
                                            : iconColor[colorMode]
                                    }
                                    size="60px"
                                    ml={2}
                                    mr={2}
                                    mt={[4, 3, 1, 0]}
                                />
                            );
                        })}
                    </Text>
                </Flex>
            </Stack>
        </Container>
    );
}
