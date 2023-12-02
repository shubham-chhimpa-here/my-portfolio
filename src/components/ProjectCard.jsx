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
    const { title, list, tech } = item;
    return (
        <Container maxW={'5xl'} bg={'white'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px'} padding={'1rem'} borderRadius={'17px'}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} >
                <Flex boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px'} borderRadius={'17px'} maxH={'300px'}>
                    <Image
                    
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
                <Stack spacing={4} alignItems={'center'}>

                    <Heading>{title}</Heading>
                    <Stack>
                        <List spacing={3}>
                            {
                                list.map((listval, i) => {
                                    return <ListItem key={i}>
                                        <ListIcon as={CheckIcon} color='green.500' />
                                        {listval}
                                    </ListItem>
                                })
                            }
                        </List>
                    </Stack>


                    <Stack
                       flexWrap={'wrap'}
                        direction={'row'}
                        spacing={2}
                        divider={
                            <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
                        }>
                        <Text>Teck Stack</Text>

                        {
                            tech.map((lis, i) => {
                                return <Text key={i} color={'gray.700'}>
                                    {lis}
                                </Text>
                            })
                        }
                    </Stack>



                    <Stack spacing={6} direction={'row'} >
                    <Button
                    rightIcon={<FaGithub />}
                        rounded={'full'}
                        px={6}
                        colorScheme={'orange'}
                        bg={'orange.400'}
                        _hover={{ bg: 'orange.500' }}>
                        Code
                    </Button>
                    <Button rounded={'full'} px={6}
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