import { Box, HStack, Heading, Icon, Stack, Text, Link as ChakraLink } from '@chakra-ui/react';
import React from 'react';
import { BiSupport } from 'react-icons/bi';
import { LuArrowUpDown } from 'react-icons/lu';
import { RxDashboard } from 'react-icons/rx';
import { useLocation,Link as RouterLink } from 'react-router-dom';

const Sidebar = () => {

    const nav = [
        {
            icon: RxDashboard,
            name: 'Dashboard',
            link: '/',
        },
        {
            icon: LuArrowUpDown,
            name: 'Transactions',
            link: '/transactions',
        },
        
    ];

    const location = useLocation();
  const isActive = (link) =>{
    return location.pathname === link;
  } ;

  return (
    <>
        <Stack bg='#fff' boxShadow={{base: 'none', lg:'lg'}} w='16rem' h='100vh' justify='space-between'>
            <Box>
                <Heading textAlign='center' fontSize='20px' as='h1' pt='3.5rem'>
                    @VAISHNAVI
                </Heading>
                <Box mt='6' mx='3'>
                    {nav.map((menu) => (
                        <ChakraLink as={RouterLink} to={menu.link} key={menu.name}>
                            <HStack py='3' px='4' mb='5' borderRadius='10px' cursor='pointer'
                            _hover={{bg: '#F3F3F7', color: '#000'}}
                            bg={isActive(menu.link) ? 'purple' : '#fff'} color={isActive(menu.link) ? 'white' : '#000'}>
                                <Icon as={menu.icon} />,
                                <Text fontSize='16px' fontWeight='medium'>{menu.name}</Text>
                            </HStack>
                        </ChakraLink>
                    ))}
                </Box>
            </Box>

            <Box mt='6' mx='3' mb='6'>
                <ChakraLink as={RouterLink} to='/support'>              
                    <HStack py='3' px='4' borderRadius='10px' cursor='pointer'
                    _hover={{bg: '#F3F3F7', color: '#000'}}
                    bg={isActive('/support') ? 'purple' : '#fff'} color={isActive('/support') ? 'white' : '#000'}>
                        <Icon as={BiSupport} />,
                        <Text fontSize='16px' fontWeight='medium'>Support</Text>
                    </HStack>    
                </ChakraLink>           
            </Box>

        </Stack>
    </>
  );
};

export default Sidebar;