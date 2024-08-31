import Title from '@/components/common/Title'
import React from 'react'
import ProductForm from '@/components/item/ProductForm';

export const metadata = {
    title: "Nouveau Article"
  };

export default function Page() {
  return (
    <>
    <Title title="Nouveau Article"/>

    <ProductForm />
    </>
  )
}
