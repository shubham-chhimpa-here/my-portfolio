import {
    Container,
    SimpleGrid,
    Image,
    Button,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    List, ListItem, ListIcon,
    useColorModeValue,
} from '@chakra-ui/react'
import { CheckIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { FaGithub } from 'react-icons/fa';




export default function ProjectCard({ item }) {
    const { title, list, tech, scr, live, github } = item;
    return (
        <Container maxW={'5xl'} bg={'white'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px'} padding={'1rem'} borderRadius={'17px'}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                <Flex boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px'} borderRadius={'17px'} maxH={'300px'}>
                    <Image
                    
                        rounded={'md'}
                        alt={title}
                        src={scr}
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4} alignItems={'center'}>

                    <Heading fontSize={'1.8rem'}>{title}</Heading>
                    <Text padding={'5px'} fontSize={'1.1rem'}>
                    {list}
                    </Text>


                    <Stack
                       flexWrap={'wrap'}
                        direction={'row'}
                        spacing={2}
                       >
                        

                        {
                            tech.map((lis, i) => {
                                return <Text key={i} color={'gray.700'} 
                                textTransform={'uppercase'}
                                borderRadius={'1rem'} paddingInline={'1rem'}>
                                    #{lis}
                                </Text>
                            })
                        }
                    </Stack>



                    <Stack spacing={6} direction={'row'} >
                        
                    <Button
                    onClick={() => {
                        window.open(github)
                    }}
                    rightIcon={<FaGithub />}
                        rounded={'full'}
                        px={6}
                        colorScheme={'orange'}
                        bg={'orange.400'}
                        _hover={{ bg: 'orange.500' }}>
                            
                        Code
                    </Button>
                    <Button rounded={'full'} px={6}
                    onClick={() => {
                        window.open(live)
                    }}
                    rightIcon={<ExternalLinkIcon />}
                    >
                        Live Demo
                    </Button>
                </Stack>
                </Stack>
               

            </SimpleGrid>
        </Container>
    )
}