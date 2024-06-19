import React from 'react';
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Text,
    Tag,
  } from '@chakra-ui/react';

const TransactionTable = () => {

    const tableData = [
        {
            id: 'HGFDK1',
            date: '2014-05-24',
            time: '09:35 AM',
            type: {
                name: 'INR Withdraw',
                tag: 'Wire Transfer'
            },
            amount: '+ RS.45,876',
            status: 'Pending',
        },
        {
            id: 'HGFDK2',
            date: '2015-05-24',
            time: '02:35 AM',
            type: {
                name: 'Buy',
                tag: 'BTC'
            },
            amount: '+ RS.65,855',
            status: 'Success',
        },
        {
            id: 'HGFDK3',
            date: '2014-02-02',
            time: '09:35 AM',
            type: {
                name: 'INR Deposite',
                tag: 'Wire Transfer'
            },
            amount: '+ RS.2,566',
            status: 'Rejected',
        },
        {
            id: 'HGFDK4',
            date: '2012-02-14',
            time: '01:35 PM',
            type: {
                name: 'INR Withdraw',
                tag: 'Wire Transfer'
            },
            amount: '+ RS.9,85,555',
            status: 'Pending',
        },
        {
            id: 'HGFDK5',
            date: '2024-05-24',
            time: '02:35 AM',
            type: {
                name: 'INR Deposite',
                tag: 'Wire Transfer'
            },
            amount: '+ RS.45,876',
            status: 'Success',
        },
    ];
    
    const statusColor = {
        Success: 'green',
        Pending: 'yellow',
        Rejected: 'red',
    };

  return (
        <TableContainer>
            <Table variant='simple'>
                <TableCaption>Transactional history</TableCaption>
                <Thead>
                <Tr>
                    <Th fontSize='md'>ID</Th>
                    <Th fontSize='md'>Date & TIME</Th>
                    <Th fontSize='md'>TYPE</Th>
                    <Th fontSize='md'>AMOUNT</Th>
                    <Th fontSize='md'>STATUS</Th>
                </Tr>
                </Thead>
                <Tbody>
                {tableData.map((data) => (
                    <Tr key={data.id}>
                        <Td fontSize='sm' fontWeight='medium'>{data.id}</Td>
                        <Td><Stack>
                            <Text fontSize='sm' fontWeight='medium'>{data.date}</Text>
                            <Text fontSize='xs'>{data.time}</Text>
                        </Stack></Td>
                        <Td><Stack>
                            <Text fontSize='sm' fontWeight='medium'>{data.type.name}</Text>
                            <Text fontSize='xs'>{data.type.tag}</Text>
                        </Stack></Td>
                        <Td fontSize='sm' fontWeight='medium'>{data.amount}</Td>
                        <Td fontSize='sm' fontWeight='medium'>
                            <Tag bg={statusColor[data.status]} color='white' borderRadius='full'>
                                {data.status}
                            </Tag>
                        </Td>
                    </Tr>
                ))}
                </Tbody>
            </Table>
        </TableContainer>
  )
}

export default TransactionTable;