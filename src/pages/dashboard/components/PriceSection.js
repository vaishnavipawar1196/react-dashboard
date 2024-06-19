import { Button, Flex, HStack, Icon, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { AiFillPlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { BsArrowUpRight } from 'react-icons/bs';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';

const PriceSection = () => {
    const timestamp = ['9:15 AM','10:15 AM','11:15 AM','12:15 AM']
  return (
    <>
    <Stack bg='#fff' p='4' borderRadius='10' marginTop='5'>
        <HStack justify='space-between'>
            <Stack>                     
            <Text fontSize='sm'>Current Price</Text>          
            <HStack>
                <HStack>
                    <Text fontSize='lg' fontWeight='bold'>RS.258000</Text> 
                </HStack>
        
                <HStack color='green'>
                    <Icon fontSize='sm' as={BsArrowUpRight} />
                    <Text fontSize='sm' fontWeight='bold'>11%</Text> 
                </HStack>
            </HStack>
        </Stack>
        <HStack>
                <Button bg='green' color='white' leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
                <Button bg='red' color='white' leftIcon={<Icon as={AiOutlineMinusCircle} />}>Sell</Button>
            </HStack>
        </HStack>
        <HStack>
            <Tabs variant='soft-rounded' w='100%' mt='5'>
                <Flex justify='end'>
                    <TabList bg='#e2e8f0' border='1'>
                        {['1H','1D','1W','1M'].map((temp) => (
                            <Tab borderRadius='4' key={temp} _selected={{bg:'white'}} fontSize='sm' p='6px'>{temp}</Tab>
                        ))}               
                    </TabList>
                </Flex>
            <TabPanels>
                <TabPanel>
                    <HStack>
                        <Image w='100%' src='./Graph.png' mt='14' />
                    </HStack>
                    <HStack justify='space-between'>
                        {timestamp.map((time) => (
                            <Text key={time} fontSize='sm' color='black.80'>{time}</Text>
                        ))}
                    </HStack>
                </TabPanel>
                <TabPanel>
                <p>two!</p>
                </TabPanel>
            </TabPanels>
            </Tabs>
        </HStack>
        
    </Stack>
    </>
  )
}

export default PriceSection;