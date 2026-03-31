import React from 'react'
import Banner from '../Components/Banner/Banner'
import Header from '../Components/Header/Header'
import DetailPage from '../Components/DetailPage/DetailPage'
import CtaFooter from '../Components/CtaFooter/CtaFooter'
import Enquiry from '../Components/Enquiry/Enquiry'
import Content from '../Components/Content/Content'

const Ielts = () => {
  return (
    <div>
        <Header bg={true} />
        <Banner title="Ielts"/>
        <Content />
        <Enquiry/>
        <CtaFooter/>
    </div>
  )
}

export default Ielts