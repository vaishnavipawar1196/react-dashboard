import React from 'react';
import DashboardLayout from '../../components/DashboardLayout';
import SupportCard from './components/SupportCard';
import { Flex, Stack } from '@chakra-ui/react';
import LeftCard from './components/LeftCard';
import InfoCard from '../dashboard/components/InfoCard';
import { AiTwotoneMessage } from 'react-icons/ai';

const Support = () => {
  return (
    <>
        <DashboardLayout  title='Support'>
          <SupportCard />
          <Flex my='5' gap='4' flexDir={{ base: 'column',lg: 'row' }}>
            <Stack w={{base:'100%',lg:'40%'}}>
              <LeftCard icon={AiTwotoneMessage} title='Live Chat' text='Don’t have time to wait for the answer? Chat with us now.' />  
            </Stack>

            <Stack w={{base:'100%',lg:'60%'}}>
              <InfoCard 
                imgUrl='./Visual.png'
                text='Live chat now.'
                tagText='Contact'
                inverted={true}
                flexGrow='1'
              />
            </Stack>
          </Flex>
        </DashboardLayout>
    </>
  )
}

export default Support;