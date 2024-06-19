import { Box, HStack, Heading, Icon, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react';
import { FaBars, FaUserTie } from 'react-icons/fa';

const TopNav = ({title,onOpen}) => {
  return (
    <Box bg='#fff'>       
        <HStack justify='space-between' h='16' mx='auto' px='2rem'>
            <Icon as={FaBars} onClick={onOpen} display={{base: 'block', lg: 'none'}} />
            <Heading fontWeight='medium' fontSize='28px'>{title}</Heading>
            <Menu>
                <MenuButton>
                    <Icon as={FaUserTie} fontSize='24px' />
                </MenuButton>
                <MenuList>
                    <MenuItem>Download</MenuItem>
                    <MenuItem>Create a Copy</MenuItem>
                    <MenuItem>Mark as Draft</MenuItem>
                    <MenuItem>Delete</MenuItem>
                    <MenuItem>Attend a Workshop</MenuItem>
                </MenuList>
            </Menu>
        </HStack>
    </Box>
  )
}

export default TopNav