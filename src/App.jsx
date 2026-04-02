import React from 'react'
import Home from './Pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import About from './Pages/About'
import Ielts from './Pages/OtherPages/Ielts'
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
import Canada from './Pages/StudyVisa/Canada'
import UnitedKingdom from './Pages/StudyVisa/UnitedKingdom'
import NewZealand from './Pages/StudyVisa/NewZealand'
import UnitedStates from './Pages/StudyVisa/UnitedStates'
import Europe from './Pages/StudyVisa/Europe'
import Australia from './Pages/StudyVisa/Australia'
import Pte from './Pages/OtherPages/PTE'
import SpokenEnglish from './Pages/OtherPages/SpokenEnglish'
import OverallBandScore from './Pages/OtherPages/OverallBandScore'
import BenefitsPte from './Pages/OtherPages/BenefitsPte'
import SpouseVisa from './Pages/OtherPages/SpouseVisa'
import AdminDashboard from './Admin/AdminDashboard/AdminDashboard'

const App = () => {
  return (
    <div>
      <ToastContainer position="top-right" />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/ielts' element={<Ielts/>} />
        <Route path='/pte' element={<Pte/>} />
        <Route path='/spoken-english' element={<SpokenEnglish/>} />
        <Route path='/band-score' element={<OverallBandScore/>} />
        <Route path='/pte-benifits' element={<BenefitsPte/>} />
        <Route path='/spouse-visa' element={<SpouseVisa/>} />
        
        <Route path='/study-in-canada' element={<Canada/>} />
        <Route path='/study-in-uk' element={<UnitedKingdom/>} />
        <Route path='/study-in-new-zealand' element={<NewZealand/>} />
        <Route path='/study-in-usa' element={<UnitedStates/>} />
        <Route path='/study-in-europe' element={<Europe/>} />
        <Route path='/study-in-australia' element={<Australia/>} />


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
        <Route path='/admin-dashboard' element={<AdminDashboard/>} />
      </Routes>
    </div>
  )
}

export default App