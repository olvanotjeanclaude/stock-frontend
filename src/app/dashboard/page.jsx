import React from 'react'
// import Title from '@components/common/Title'
import Title from '@/components/common/Title';
import Dashboard from '@/components/dashboard/Dashboard';

export const metadata = {
  title: "Dashboard"
};

export default function Page() {


  return (
    <>
      <Title title="Dashboard" />
      <Dashboard />
    </>
  )
}
