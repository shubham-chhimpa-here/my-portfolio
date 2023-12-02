import {Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
export default function Projects() {
    const data = [
        {
            title: 'Name',
            list: [
                'Registration facility with an OTP email',
                'Registration facility with an OTP email',
                'Registration facility with an OTP email',
                'Registration facility with an OTP email'
            ],
            scr: 'Image url',
            tech: ['react', 'html', 'css', 'js', 'chakra']

        },
        {
            title: 'Name',
            list: [
                'Registration facility with an OTP email',
                'Registration facility with an OTP email',
                'Registration facility with an OTP email',
                'Registration facility with an OTP email'
            ],
            scr: 'Image url',
            tech: ['react', 'html', 'css', 'js', 'chakra']

        },
        {
            title: 'Name',
            list: [
                'Registration facility with an OTP email',
                'Registration facility with an OTP email',
                'Registration facility with an OTP email',
                'Registration facility with an OTP email'
            ],
            scr: 'Image url',
            tech: ['react', 'html', 'css', 'js', 'chakra']

        },
        {
            title: 'Name',
            list: [
                'Registration facility with an OTP email',
                'Registration facility with an OTP email',
                'Registration facility with an OTP email',
                'Registration facility with an OTP email'
            ],
            scr: 'Image url',
            tech: ['react', 'html', 'css', 'js', 'chakra']

        }
    ]
    return (
        <Box bg={'#f9f9f9'}>

        <Box  id='projects' paddingTop={'3rem'} paddingBottom={'5rem'} maxW={'5xl'} margin={'auto'} paddingInline={'1rem'}>

            <Heading textAlign={'center'} paddingBlock={10} fontSize={'1.2rem'} color={'orange.400'}>PROJECTS</Heading>
            <SimpleGrid columns={{ base: '1' }} gap={10}>
                {
                    data.map((item, i) => {
                        return <ProjectCard item={item} key={i}  />
                    })
                }
            </SimpleGrid>
        </Box>
        </Box>
    )
}