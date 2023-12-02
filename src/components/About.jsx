import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    IconButton,
} from '@chakra-ui/react'

export default function About() {
    return (
        <Box>

            <Container maxW={{ base: 'md', md: '5xl' }} paddingTop={'2rem'} id='about' >
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column-reverse', md: 'row-reverse' }}>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }} gap={2} textAlign={{ base: 'center', md: 'start' }} alignItems={{ base: 'center', md: 'start' }}
                    >
                        <Heading textAlign={'center'} fontSize={'1.2rem'} color={'orange.400'}>
                            ABOUT
                        </Heading>
                        <Heading fontSize={'1.7rem'} textAlign={'center'} >
                        A dedicated Front-end Developer
                        </Heading>
                        <Text color={'gray.500'} fontSize={'1.2rem'}>
                            As a  Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript and React. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.
                        </Text>

                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}>


                        <Box
                            position={'relative'}
                            height={'300px'}
                            rounded={'2xl'}
                            boxShadow={'2xl'}
                            width={'full'}
                            overflow={'hidden'}>
                           
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={
                                    'https://www.stefantopalovic.com/static/media/about-img.62b47e7f183d4b4e9feb.webp'
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>

        </Box>
    )
}


