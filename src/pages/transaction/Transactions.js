import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import { Button, Card,Flex, HStack, Icon, Input, InputGroup, InputLeftElement, Tag } from '@chakra-ui/react';
import { AiOutlineDownload } from 'react-icons/ai';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import TransactionTable from './components/TransactionTable';
import { BsSearch } from 'react-icons/bs';

const Transactions = () => {

  const tabs = [
    {
      name: 'All',
      count: '654',
    },
    {
      name: 'Deposite',
      count: '65',
    },
    {
      name: 'Withdraw',
      count: '211',
    },
    {
      name: 'Trade',
      count: '11',
    },
  ];

  return (
    <>
        <DashboardLayout title='Transactions'>
          <Flex justify='end'>
            <Button bg='purple' color='white' leftIcon={<Icon as={AiOutlineDownload} />}>Export CSV</Button>
          </Flex>
            <Card p='4' my='8'>
              <Tabs>
                <TabList display='flex' justifyContent='space-between'>
                  <HStack>
                    {tabs.map((tab) => (
                      <Tab key={tab.name} display='flex' gap='2' fontSize='md'>{tab.name}<Tag>{tab.count}</Tag></Tab>
                    ))}
                  </HStack>
                  <InputGroup w='250px' mb='2' mt='-2'>
                    <InputLeftElement pointerEvents='none'>
                      <Icon as={BsSearch} />
                    </InputLeftElement>
                    <Input type='tel' placeholder='Search here..' />
                  </InputGroup>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <TransactionTable />
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Card>
        </DashboardLayout>
    </>
  )
}

export default Transactions;