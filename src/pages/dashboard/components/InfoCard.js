import { Stack, Tag, Text } from '@chakra-ui/react';
import React from 'react';

const InfoCard = ({imgUrl,text,tagText,inverted}) => {
  return (
    <>
        <Stack bg={inverted ? 'purple' : 'white'} bgImage={imgUrl} bgSize='cover' bgRepeat='no-repeat' p='4' borderRadius='10' my='5'>
            <Tag 
                w='fit-content'
                bg={inverted ? 'white' : 'purple'}
                color={inverted ? 'purple' : 'white'}
            >{tagText}</Tag>
            <Text color={inverted ? 'white' : 'black'} fontWeight='medium'>{text}</Text>
        </Stack>
    </>
  )
}

export default InfoCard;