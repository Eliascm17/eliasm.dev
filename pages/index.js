import Icon from '@/components/Icon';
import {
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorMode
} from '@chakra-ui/react';
import React from 'react';
import Container from '../components/Container';
import Experience from '../components/Experience';
import Project from '../components/Project';
import Head from 'next/head';
import Footer from '@/components/Footer';

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
    'firebase',
    'graphql',
    'aws-amplify',
    'adobexd'
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
          mt={4}
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Head>
            <title>Elias Moreno 👨🏾‍💻</title>
          </Head>
          <Heading letterSpacing="tight" mb={2} as="h1" size="2xl">
            Hi, I'm Elias 👨🏾‍💻
          </Heading>
          <Text color={secondaryTextColor[colorMode]}>
            Software Engineer at Samsung Austin Semiconductors
          </Text>
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Projects
          </Heading>
          <Project
            title="Next.js + AWS Amplify + GraphQL + TailwindCSS Todo app"
            description="Todo app using Next.js, AWS Amplify, GraphQL, and TailwindCSS."
            href="https://nextjs-aws-todo.vercel.app/"
            iconlist={[
              'react',
              'javascript',
              'nextjs',
              'graphql',
              'aws-amplify'
            ]}
          />
          <Project
            title="Athena - Senior Capstone (CS 4366)"
            description="A kitchen inventory mobile application useful for tracking a kitchen’s current inventory and a helpful way to minimize food waste."
            href="https://github.com/Athena-Capstone-2020/athena-mobile-app"
            iconlist={['react', 'javascript', 'firebase', 'adobexd']}
          />
          <Project
            title="Gift Fund Tracker - TTU Institutional Advancement"
            description="Implemented high-profile web app that tracks and improves the time of scholarship lookups by more than double, leading to faster financial aid review and award times."
            iconlist={['react', 'javascript', 'nextjs', 'adobexd']}
          />
          <Project
            title="Prospect Affinity Model – TTU Institutional Advancement"
            description="Tasked with ranking donors in the alumni CRM in a more intelligent way using RFM analysis and Customer Segmentation techniques"
            iconlist={['python']}
          />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            Experience
          </Heading>
          <Experience
            company="Samsung Austin Semiconductors"
            date="January 2021 - Present"
            logo="samsung"
            location="Austin, Texas"
            role="Software Engineer"
            href="https://www.samsung.com/us/sas/"
            description={<Text>Systems Development Engineer</Text>}
          />
          <Experience
            company="Texas Tech University"
            date="Sept 2019 - Dec 2020"
            location="Lubbock, Texas"
            role="Software Engineer Intern"
            href="http://www.give2tech.com/"
            description={
              <Text>
                Worked on projects such as Prospect Affinity Model and Gift Fund
                Tracker. Both projects were developed in tandem with and for
                Texas Tech Institutional Advancement.
              </Text>
            }
          />
          <Experience
            company="AdaptIO"
            date="Summer 2019"
            location="Córdoba, Argentina"
            role="Data Science Intern"
            href="https://www.adaptio.com.ar/"
            description={
              <Text>
                Worked on projects such as&nbsp;
                <Link
                  href="http://www.smartcities.com.ar/iGas/index.html"
                  title="iGas"
                  isExternal
                >
                  iGas Prediction
                </Link>
                . For this project I was tasked with using company data to
                examine correlations between rates of depletion of gas tanks and
                weather temperatures. I Approached this project by using climate
                data from the Dark Sky API in conjunction with basic statistical
                analysis as well as forms of machine learning (Time-Series
                Analysis) to ultimately predict rates of consumption.
              </Text>
            }
          />
        </Flex>
        <Flex
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="flex-start"
          maxWidth="700px"
        >
          <Heading letterSpacing="tight" mb={4} size="xl" fontWeight={700}>
            My Favorite Technologies
          </Heading>
          <Text>
            {favorites.map((icon, key) => {
              return (
                <Icon
                  key={key}
                  aria-label={icon}
                  name={icon}
                  color={icon === 'nextjs' ? '' : iconColor[colorMode]}
                  boxSize="60px"
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
