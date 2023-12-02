import {
  Box,
  chakra,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa'
import { ReactNode } from 'react'

const SocialButton = ({
  children,
  label,
  href,
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
    paddingInline={'1rem'}
    display={'grid'}
    placeItems={'center'}
    h={'150px'}
      bg={useColorModeValue('#2d2e32', 'gray.900')}
      color={useColorModeValue('white', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'5xl'}
        py={4}
        fontWeight={'bold'}
        fontSize={'1.3rem'}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text textAlign={'center'}>Copyright © 2023. All rights are reserved</Text>
        <Stack direction={'row'} spacing={6}>
         
          <Link href={'https://github.com/shubham-chhimpa-here'} isExternal='true'>
            <FaGithub />
          </Link>
        </Stack>
      </Container>
    </Box>
  )
}