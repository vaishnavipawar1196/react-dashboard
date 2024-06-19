import React from 'react';
import Sidebar from './Sidebar';
import TopNav from './TopNav';
import { Box, Container, Flex, useDisclosure } from '@chakra-ui/react';
import SideDrawer from './SideDrawer';

const DashboardLayout = ({ title,children }) => {
    const {isOpen,onOpen,onClose} = useDisclosure();
  return (
    <Flex>
        <Box
            display={{
                base: 'none',
                lg: 'flex'
            }}
        >
            <Sidebar />
        </Box>
        <SideDrawer isOpen={isOpen} onClose={onClose} />
        <Box flexGrow={1}>
          <TopNav title={title} onOpen={onOpen} />
          <Container overflowY='auto' h='100vh' maxW='100%' pb='5rem' pt='2rem' px='2rem'>{children}</Container>
        </Box>
    </Flex>
  )
}

export default DashboardLayout;