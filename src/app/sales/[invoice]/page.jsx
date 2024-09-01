import Title from '@/components/common/Title'
import React from 'react'
import PaymentDetail from '@/components/sales/PaymentDetail';
import Wrapper from '@/components/common/Wrapper';

export const metadata = {
  title: "Détails du paiement"
};

export default function Page() {
  return (
    <Wrapper sx={{ p: 0 }}>
      <Title px={2} title="Détails du paiement" />

      <PaymentDetail />
    </Wrapper>
  )
}
