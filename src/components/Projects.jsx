import {Box, Heading, SimpleGrid } from '@chakra-ui/react';
import ProjectCard from './ProjectCard';
import logoipsum from '../assets/Images/logoipsum.png'
import tvapple from '../assets/Images/tvapple.png'
import old from '../assets/old.png'
import { data } from './AllData';
export default function Projects() {
    
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