import React from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Ielts from './Pages/Ielts'
import Contact from './Pages/Contact/Contact'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeaderFooter from './Admin/AdminForms/AdminHeaderFooter'
import AdminLogin from './Admin/AdminLogin/AdminLogin'
import AdminHero from './Admin/AdminForms/AdminHero'
import AdminAbout from './Admin/AdminForms/AdminAbout'
import AdminServices from './Admin/AdminForms/AdminServices'
import AdminStudyVisa from './Admin/AdminForms/AdminStudyVisa'
import AdminWhyChoose from './Admin/AdminForms/AdminWhyChoose'
import AdminTestimonials from './Admin/AdminForms/AdminTestimonials'
import AdminOtherServices from './Admin/AdminForms/AdminOtherServices'
import AdminEnquiryStats from './Admin/AdminForms/AdminEnquiryStats'

const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/ielts' element={<Ielts/>} />


        <Route path='/hf' element={<AdminHeaderFooter />} />
        <Route path='/ah' element={<AdminHero />} />
        <Route path='/aa' element={<AdminAbout />} />
        <Route path='/as' element={<AdminServices />} />
        <Route path='/asv' element={<AdminStudyVisa/>} />
        <Route path='/awc' element={<AdminWhyChoose/>} />
        <Route path='/at' element={<AdminTestimonials/>} />
        <Route path='/aos' element={<AdminOtherServices/>} />
        <Route path='/aes' element={<AdminEnquiryStats/>} />
        <Route path='/admin-login' element={<AdminLogin/>} />
      </Routes>
    </div>
  )
}

export default App