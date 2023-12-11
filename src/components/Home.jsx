import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
} from '@chakra-ui/react'

import profile from '../assets/profile.jpg'



import { FaGithub } from 'react-icons/fa'
import resume from '../../public/shubham-chhimpa-resume.pdf';

export default function Home() {
  return (
    <Box bg={'#f9f9f9'}  minH={'100vh'}>

      <Container maxW={{ base: 'md', md: '5xl' }} paddingTop={'2rem'}  id='home' >
        <Stack
          align={'center'}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: 'column-reverse', md: 'row' }}>
          <Stack flex={1} spacing={{ base: 5, md: 10 }} textAlign={{ base: 'center', md: 'start' }} alignItems={{ base: 'center', md: 'start' }}

          >
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>


              <Text as={'span'} color={'orange.400'}>
                Front-End React Developer

              </Text>
            </Heading>
            <Text color={'gray.500'} fontSize={'1.3rem'}>
              Hi, I'm Shubham Chhimpa. A passionate Front-end React Developer based in Rajasthan, India. 📍
            </Text>
            <Stack spacing={{ base: 4, sm: 6 }} direction={{ base: 'row' }}>
              <Button
                as={'a'}
              
                href={resume}
                target='_blank'
                download={'shubham-chhimpa-resume'}
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'red'}
                bg={'orange.400'}
                _hover={{ bg: 'orange.500' }}>
                Resume
              </Button>
              <Button
                as={'a'}
                href='https://github.com/shubham-chhimpa-here'

                target='_black'
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                leftIcon={<FaGithub />}>
                GitHub
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={'center'}
            align={'center'}
            position={'relative'}
            w={'full'}>


            <Box
              position={'relative'}
              // height={'300px'}
              maxW={'400px'}
              rounded={'full'}
              boxShadow={'2xl'}
              // width={'full'}
              overflow={'hidden'}>
              
              <Image
                alt={'Hero Image'}
                fit={'cover'}
                align={'center'}
                w={'100%'}
                h={'100%'}
                src={ profile }
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

    </Box>
  )
}


