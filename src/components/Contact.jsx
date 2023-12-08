import { EmailIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Icon, Text, VStack } from "@chakra-ui/react";
import { FaMapMarkedAlt } from "react-icons/fa";

export default function Contact() {
    return <Box padding={'5rem'} id="contact">
        <Flex maxW={'5xl'} m={'auto'} flexDir={'column'} gap={'3rem'}>
            <VStack alignItems={{base:'center', md:'flex-start'}} gap={0}>

                <Heading fontSize={'1.2rem'} fontWeight={'bold'} color={'orange.400'}>CONTACT</Heading>
                <Text fontSize={'1.8rem'} textAlign={'center'} fontWeight={'bold'}>Don't be shy! Hit me up! 👇</Text>
            </VStack>
            <Flex alignItems={'center'} gap={{base:'2rem', md:'5rem'}} flexDir={{base:'column', md:'row'}}>
                <Flex alignItems={'center'}  gap={'1rem'} flexDir={{base:'column', md:'row'}}>
                    <Box borderRadius={'full'} padding={'1rem'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px'}>
                        <Icon  w={6} h={6} color={'orange.400'} as={FaMapMarkedAlt}/>
                        
                    </Box>
                    <VStack alignItems={{base:'center', md:'flex-start'}} gap={0} fontSize={'1.1rem'}>
                        <Text fontWeight={'bold'} >Location</Text>
                        <Text as={'a'} >Rajasthan, India</Text>
                    </VStack>
                </Flex>
                <Flex alignItems={'center'} gap={'1rem'} flexDir={{base:'column', md:'row'}}>
                    <Box padding={'1rem'} borderRadius={'full'} boxShadow={'rgba(0, 0, 0, 0.1) 0px 0px 10px 0px'}>
                        <EmailIcon w={6} h={6} color={'orange.400'}/>
                    </Box>
                    <VStack alignItems={{base:'center', md:'flex-start'}} gap={0} fontSize={'1.1rem'}>
                        <Text fontWeight={'bold'} >Mail</Text>
                        <Text as={'a'} href="mailto:shubhamchhimpa2001@gmail.com">shubhamchhimpa2001@gmail.com</Text>
                    </VStack>
                </Flex>
            </Flex>
        </Flex>
    </Box>
}