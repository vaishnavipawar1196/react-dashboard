import {  Card } from '@chakra-ui/react';
import React from 'react';
import { Flex, Stack, } from '@chakra-ui/react';
import { IoMdMail } from 'react-icons/io';
import FormSupport from './FormSupport';
import LeftCard from './LeftCard';


const SupportCard = () => {
  return (
    <Flex gap='4' flexDir={{ base: 'column',lg: 'row' }}>
      <Stack w={{base:'100%',lg:'40%'}}>
        <LeftCard icon={IoMdMail} title='Contact Us' text='Have a question or just want to know more? Feel free to reach out to us.' />  
      </Stack>
      <Card p='4' flexGrow='1' w={{base:'100%',lg:'60%'}}>
        <FormSupport />
      </Card>
    </Flex>
  )
}

export default SupportCard;