import { Text,Stack,HStack, Icon, Grid, Divider, Button } from '@chakra-ui/react';
import React, { Fragment } from 'react';
import { BsCurrencyRupee } from 'react-icons/bs';
import { FaBtc } from 'react-icons/fa';

const Transaction = () => {
  const transaction = [
    {
      id:'1',
      icon: BsCurrencyRupee,
      text:'INR Deposite',
      amount:'+ RS.81,500.50',
      timestamp:'2022-07-22 7:30 AM'
    },
    {
      id:'2',
      icon: FaBtc,
      text:'BTC Sell',
      amount:'- 81,500.50 BTC',
      timestamp:'2023-05-12 2:40 AM'
    },
    {
      id:'3',
      icon: BsCurrencyRupee,
      text:'INR Deposite',
      amount:'+ RS.51,500.50',
      timestamp:'2024-07-09 4:30 AM'
    },
  ];
  return (
    <>
      <Stack bg='#fff' p='4' borderRadius='10' marginTop='5'>
        <Text fontSize='sm'>Recent Transactions</Text>
        <Stack>
          {transaction.map((temp,i) => (
            <Stack key={temp.id}>
            {i !== 0 && <Divider />}
              <HStack justify='space-between' alignItems='self-start' marginTop='4'>
                <Grid bg='#e2e8f0' borderRadius='full' placeItems='center' boxSize={10}>
                  <Icon as={temp.icon} />
                </Grid>
                <Stack>
                  <Text fontWeight='medium'>{temp.text}</Text>
                  <Text fontSize='sm'>{temp.timestamp}</Text>
                </Stack>             
                <Text fontWeight='medium'>{temp.amount}</Text>             
              </HStack>            
            </Stack>
          ))}
        </Stack>
        <Button w='full' my='4'>View All</Button>
      </Stack>
    </>
  )
}

export default Transaction;