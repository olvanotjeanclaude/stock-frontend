import Title from '@/components/common/Title'
import React from 'react'
import ProductForm from '@/components/item/ProductForm';
import Wrapper from '@/components/common/Wrapper';

export const metadata = {
  title: "Nouveau Article"
};

export default function Page() {
  return (
    <Wrapper>
      <Title title="Nouveau Article" />

      <ProductForm />
    </Wrapper>
  )
}
