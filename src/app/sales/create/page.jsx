import Title from '@/components/common/Title'
import React from 'react'
import InvoiceForm from '@/components/sales/InvoiceForm';
import Wrapper from '@/components/common/Wrapper';

export const metadata = {
  title: "Nouvelle Vente"
};

export default function Page() {
  return (
    <Wrapper>
      <Title title="Nouvelle Vente" />

      <InvoiceForm />
    </Wrapper>
  )
}
