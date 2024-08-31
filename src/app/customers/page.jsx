import Title from '@/components/common/Title'
import CustomerList from '@/components/customer/CustomerList';
import React from 'react'

export const metadata = {
  title: "Clients"
};


export default function Page() {
  return (
    <>
      <Title title="Clients" />

      <CustomerList />
    </>
  )
}
