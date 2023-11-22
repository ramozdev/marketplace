import React from 'react'
import Table from '@/ui/html/table'
import { ArrowDownIcon } from '@radix-ui/react-icons'

export default function page () {

  return (
    <div className='max-w-2xl mx-auto my-20'>
        <Table.Root>
        <Table.Head>
            <Table.Row>
            <Table.Header>Person</Table.Header>
            <Table.Header>Type</Table.Header>
            <Table.Header>Update</Table.Header>
            <Table.Header className='text-end'>Age</Table.Header>
            <Table.Header></Table.Header>
            
            </Table.Row>
        </Table.Head>
        <Table.Body>
            <Table.Row>
            <Table.Cell>Fulano Rodrigo De Los Santos</Table.Cell>
            <Table.Cell>Bosss</Table.Cell>
            <Table.Cell>12-12-2023</Table.Cell>
            <Table.Cell className='text-end'>21</Table.Cell>
            <Table.Cell><ArrowDownIcon/></Table.Cell>
            </Table.Row>

            <Table.Row>
            <Table.Cell>Elias Mella</Table.Cell>
            <Table.Cell>Employed</Table.Cell>
            <Table.Cell>12-12-2023</Table.Cell>
            <Table.Cell className='text-end'>24</Table.Cell>
            <Table.Cell><ArrowDownIcon/></Table.Cell>
            </Table.Row>

            <Table.Row>
            <Table.Cell>Fulano Rodrigo</Table.Cell>
            <Table.Cell>Boss</Table.Cell>
            <Table.Cell>12-12-2023</Table.Cell>
            <Table.Cell className='text-end'>21</Table.Cell>
            <Table.Cell><ArrowDownIcon/></Table.Cell>
            </Table.Row>
            
            <Table.Row>
            <Table.Cell>Elias Mella</Table.Cell>
            <Table.Cell>Employed</Table.Cell>
            <Table.Cell>12-12-2023</Table.Cell>
            <Table.Cell className='text-end'>24</Table.Cell>
            <Table.Cell><ArrowDownIcon/></Table.Cell>

            </Table.Row>
            
        </Table.Body>
        </Table.Root>
    </div>
  )
}
