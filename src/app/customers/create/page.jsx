import React from 'react'
import Title from '@/components/common/Title'
import Wrapper from '@/components/common/Wrapper';
import CustomerForm from '@/components/customer/CustomerForm';

export const metadata = {
  title: "Nouveau Client"
};

export default function Page() {
  return (
    <Wrapper>
      <Title title="Nouveau Client" />

      <CustomerForm />
    </Wrapper>
  )
}
