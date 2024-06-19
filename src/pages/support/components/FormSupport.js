import React from 'react';
import { Button, Checkbox, FormControl, FormLabel, HStack, Input, Stack, Text, Textarea } from '@chakra-ui/react';


const FormSupport = () => {
  return (
    <>
        <Text textAlign='center'>
            You will receive response within 24 hours of time of submit.
        </Text>
        <FormControl my='5'>
            <HStack flexDir={{
                base: 'column',
                md: 'row'
            }}>
                <Stack spacing='0' w={{base: 'full',md: '50%'}}>
                    <FormLabel>First Name</FormLabel>
                    <Input type='text' placeholder='Enter first name' />
                </Stack>
                <Stack spacing='0'  w={{base: 'full',md: '50%'}}>
                    <FormLabel>Last Name</FormLabel>
                    <Input type='text' placeholder='Enter last name' />
                </Stack>
            </HStack>
            <Stack spacing='0'>
            <FormLabel mt='4'>Email</FormLabel>
            <Input type='email' placeholder='Enter email' />

            <FormLabel mt='4'>Message</FormLabel>
            <Textarea type='text' rows='5' placeholder='Enter message here' />

            <Checkbox mt='4' value="option1" colorScheme='purple' fontWeight='medium'>I agree with <Text as='span' color='purple'>Terms & Conditions</Text></Checkbox>
            
            <Button mt='4' bg='purple' color='white'>Submit</Button>
            <Button mt='4' color='purple'>Schedule a meeting</Button>
            </Stack>
        </FormControl>
    </>
  )
}

export default FormSupport;