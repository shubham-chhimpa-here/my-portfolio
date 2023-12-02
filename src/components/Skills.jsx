import { SimpleGrid, GridItem, Image, Heading, Box, Tooltip } from '@chakra-ui/react';
export default function Skills() {
    const skills = [
        {
            label: 'HTML',
            src: 'https://chiranjeev-thapliyal.vercel.app/svg/html-5.svg'
        },
        {
            label: 'CSS',
            src: 'https://chiranjeev-thapliyal.vercel.app/svg/css3.svg'
        },
        {
            label: 'JAVASCRIPT',
            src: 'https://chiranjeev-thapliyal.vercel.app/svg/javascript.svg'
        },
        {
            label: 'REACTJS',
            src: 'https://chiranjeev-thapliyal.vercel.app/svg/reactjs.svg'
        },
        {
            label: 'REDUX',
            src: 'https://chiranjeev-thapliyal.vercel.app/svg/redux.svg'
        },
        {
            label: 'NODEJS',
            src: 'https://chiranjeev-thapliyal.vercel.app/svg/nodejs.svg'
        },
        // {
        //     label: 'MONGODB',
        //     src: 'https://chiranjeev-thapliyal.vercel.app/svg/mongodb.svg'
        // },
        {
            label: 'BOOTSTRAP',
            src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png'
        },
        {
            label: 'CHAKRAUI',
            src: 'https://image.pngaaa.com/704/7959704-middle.png'
        },
        {
            label: 'GIT',
            src: 'https://chiranjeev-thapliyal.vercel.app/svg/git.svg'
        },
    ]
    return <Box paddingBlock={'3rem'} paddingBottom={{lg:'5rem'}} id='skills' >
    <Heading textAlign={'center'} paddingBlock={'10'} fontSize={'1.2rem'} color={'orange.400'}>
        SKILLS
    </Heading>
        <SimpleGrid columns={{base:'2', md:'3'}} maxW={'800px'} margin={'auto'} gap={7} paddingInline={'1rem'} >

            {
                skills.map(({ label, src }, i) => {
                    return <GridItem key={i} >
                        <Tooltip label={label} placement='top' color={'black'} bg='transparent' boxShadow={'none'}>

                        <Image
                        _hover={{
                            boxShadow:'0 2px 8px rgba(0,0,0,.15)'
                        }}
                        m={'auto'}
                        rounded={'md'}
                        height={{base:'80px', md:'120px'}}
                        aspectRatio={1}
                        alt={label}
                        src={src}
                        objectFit={'cover'}
                        />
                        </Tooltip>
                    </GridItem>
                })
            }

        </SimpleGrid>
        
    </Box>
}