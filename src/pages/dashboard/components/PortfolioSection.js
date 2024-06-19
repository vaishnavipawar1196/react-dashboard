import { Button, Card, HStack, Icon, Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineInfoCircle } from 'react-icons/ai';

const PortfolioSection = () => {
  return (
    <>
    <Card justify='space-between' p='4' 
        flexDir={{
            base:'column',
            lg:'row',
        }}
        align={{
            base:'flex-start',
            lg:'center',
        }}
    >
        <HStack 
            flexDir={{
                base:'column',
                md:'row',
            }}
            align={{
                base:'flex-start',
                md:'center',
            }}
        >
            <Stack>
                <HStack color='black.80'>
                    <Text fontSize='sm'>Total portfolio value</Text>
                    <Icon as={AiOutlineInfoCircle} />
                </HStack>
                <Text fontSize='lg' fontWeight='bold'>$5000000</Text>       
            </Stack>
            <Stack marginLeft={{base:'0',md:'5'}}>  
                    
                <Text fontSize='sm'>Wallet Balance</Text>
                
                <HStack>
                    <HStack>
                        <Text fontSize='lg' fontWeight='bold'>$2500000</Text> 
                        <Tag bg='purple' color='white'>BTS</Tag>
                    </HStack>

                    <HStack mx='5'>
                        <Text fontSize='lg' fontWeight='bold'>RS.7000000</Text> 
                        <Tag bg='purple' color='white'>RS</Tag>
                    </HStack>
                </HStack>
            </Stack>
        </HStack>
        <HStack
            marginTop={{
                base:'20px',
                lg:'0'
            }}
        >
            <Button bg='purple' color='white' leftIcon={<Icon as={AiOutlineArrowDown} />}>Deposite</Button>
            <Button bg='purple' color='white' leftIcon={<Icon as={AiOutlineArrowUp} />}>Withdraw</Button>
        </HStack>
    </Card>
    </>
  )
}

export default PortfolioSection;