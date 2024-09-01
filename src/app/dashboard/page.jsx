import React from 'react'
// import Title from '@components/common/Title'
import Title from '@/components/common/Title';
import Dashboard from '@/components/dashboard/Dashboard';
import Wrapper from '@/components/common/Wrapper';

export const metadata = {
  title: "Dashboard"
};

export default function Page() {


  return (
    <Wrapper>
      <Title title="Dashboard" />
      <Dashboard />
    </Wrapper>
  )
}
