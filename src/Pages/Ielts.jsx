import React from 'react'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import DetailPage from '../Components/DetailPage/DetailPage'
import CtaFooter from '../Components/CtaFooter/CtaFooter'

const Ielts = () => {
  return (
    <div>
        <Header bg={true} />
        <Banner title="Ielts"/>
        <DetailPage/>
        <CtaFooter/>
    </div>
  )
}

export default Ielts