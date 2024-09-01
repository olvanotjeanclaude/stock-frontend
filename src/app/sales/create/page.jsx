import Title from '@/components/common/Title'
import React from 'react'
import InvoiceForm from '@/components/sales/InvoiceForm';

export const metadata = {
    title: "Nouvelle Vente"
  };

export default function Page() {
  return (
    <>
    <Title title="Nouvelle Vente"/>

    <InvoiceForm />
    </>
  )
}
