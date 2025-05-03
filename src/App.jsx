import React from 'react'
import './../src/App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import CheckOut from './Pages/CheckOut'
import ContactUsPage from './Pages/ContactUsPage'
import FaqPage from './Pages/FaqPage'
import MobilesPage from './Pages/MobilesPage'
import OrderTackingPage from './Pages/OrderTrackingPage'
import PrivacyPolicyPage from './Pages/PrivacyPolicyPage'
import ProductDesc from './Pages/ProductDesc'
import ReturnsPage from './Pages/ReturnsPage'
import SignupPage from './Pages/SignupPage'
import TermsAndConditionPage from './Pages/TermsAndConditionPage'
import WishListPage from './Pages/WishListPage'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/home' element={<HomePage/>}/>
        <Route path='/checkout' element={<CheckOut/>}/>
        <Route path='/contact' element={<ContactUsPage/>}/>
        <Route path='/faq' element={<FaqPage/>}/>
        <Route path='/mobiles' element={<MobilesPage/>}/>
        <Route path='/ordertracking' element={<OrderTackingPage/>}/>
        <Route path='/privacypolicy' element={<PrivacyPolicyPage/>}/>
        <Route path='/productdesc' element={<ProductDesc/>}/>
        <Route path='/returns' element={<ReturnsPage/>}/>
        <Route path='/signup' element={<SignupPage/>}/>
        <Route path='/termsandcondition' element={<TermsAndConditionPage/>}/>
        <Route path='/wishlist' element={<WishListPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
