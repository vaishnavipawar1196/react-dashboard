import { Icon, Text } from '@chakra-ui/react';
import React from 'react';

const LeftCard = ( {icon,title,text} ) => {
  return (
    <>
        <Icon as={icon} color='purple' fontSize='24px' />
        <Text as='h1' fontSize='28px' fontWeight='medium'>{title}</Text>
        <Text>{text}</Text>
      
    </>
  )
}

export default LeftCard;