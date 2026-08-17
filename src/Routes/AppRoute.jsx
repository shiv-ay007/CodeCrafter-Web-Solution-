import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageWrapper from '../Components/Common/PageWrapper'

// Core Pages
import Home from '../Pages/Home'
import About from '../Pages/About'
import Team from '../Pages/Team'
import Career from '../Pages/Career'
import Testimonials from '../Pages/Testimonials'
import Contact from '../Pages/Contact'

// Web Solutions Pages
import WebDesign from '../Pages/WebDesign'
import WebDevelopment from '../Pages/WebDevelopment'
import WebsiteRedesign from '../Pages/WebsiteRedesign'
import Ecommerce from '../Pages/Ecommerce'
import WebsiteMaintenance from '../Pages/WebsiteMaintenance'

// Hosting Pages
import SharedHosting from '../Pages/SharedHosting'
import VpsHosting from '../Pages/VpsHosting'
import CloudHosting from '../Pages/CloudHosting'
import DomainRegistration from '../Pages/DomainRegistration'

// App Studio Pages
import AndroidApp from '../Pages/AndroidApp'
import IosApp from '../Pages/IosApp'
import HybridApp from '../Pages/HybridApp'
import FlutterApp from '../Pages/FlutterApp'

// Digital Growth Pages
import SeoOptimization from '../Pages/SeoOptimization'
import GoogleAds from '../Pages/GoogleAds'
import LocalSeo from '../Pages/LocalSeo'
import SocialMedia from '../Pages/SocialMedia'
import ContentMarketing from '../Pages/ContentMarketing'
import BrandIdentity from '../Pages/BrandIdentity'

// Software & Industry Portals Pages
import CrmSoftware from '../Pages/CrmSoftware'
import ErpSoftware from '../Pages/ErpSoftware'
import HrmsSoftware from '../Pages/HrmsSoftware'
import BillingSoftware from '../Pages/BillingSoftware'
import SchoolManagement from '../Pages/SchoolManagement'
import HospitalManagement from '../Pages/HospitalManagement'

const AppRoute = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* Core Company Routes */}
        <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
        <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
        <Route path="/team" element={<PageWrapper><Team /></PageWrapper>} />
        <Route path="/careers" element={<PageWrapper><Career /></PageWrapper>} />
        <Route path="/testimonials" element={<PageWrapper><Testimonials /></PageWrapper>} />
        <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />

        {/* Web Solutions Routes */}
        <Route path="/web-design" element={<PageWrapper><WebDesign /></PageWrapper>} />
        <Route path="/web-development" element={<PageWrapper><WebDevelopment /></PageWrapper>} />
        <Route path="/website-redesign" element={<PageWrapper><WebsiteRedesign /></PageWrapper>} />
        <Route path="/e-commerce" element={<PageWrapper><Ecommerce /></PageWrapper>} />
        <Route path="/website-maintenance" element={<PageWrapper><WebsiteMaintenance /></PageWrapper>} />

        {/* Hosting & Infrastructure Routes */}
        <Route path="/hosting/shared" element={<PageWrapper><SharedHosting /></PageWrapper>} />
        <Route path="/hosting/vps" element={<PageWrapper><VpsHosting /></PageWrapper>} />
        <Route path="/hosting/cloud" element={<PageWrapper><CloudHosting /></PageWrapper>} />
        <Route path="/hosting/domain-registration" element={<PageWrapper><DomainRegistration /></PageWrapper>} />

        {/* App Studio Routes */}
        <Route path="/app-studio/android" element={<PageWrapper><AndroidApp /></PageWrapper>} />
        <Route path="/app-studio/ios" element={<PageWrapper><IosApp /></PageWrapper>} />
        <Route path="/app-studio/hybrid" element={<PageWrapper><HybridApp /></PageWrapper>} />
        <Route path="/app-studio/flutter" element={<PageWrapper><FlutterApp /></PageWrapper>} />

        {/* Digital Growth Routes */}
        <Route path="/digital-booster/seo" element={<PageWrapper><SeoOptimization /></PageWrapper>} />
        <Route path="/digital-booster/google-ads" element={<PageWrapper><GoogleAds /></PageWrapper>} />
        <Route path="/digital-booster/local-seo" element={<PageWrapper><LocalSeo /></PageWrapper>} />
        <Route path="/digital-booster/social-media" element={<PageWrapper><SocialMedia /></PageWrapper>} />
        <Route path="/digital-booster/content-marketing" element={<PageWrapper><ContentMarketing /></PageWrapper>} />
        <Route path="/digital-booster/branding" element={<PageWrapper><BrandIdentity /></PageWrapper>} />

        {/* Enterprise Software & Industry Portals Routes */}
        <Route path="/software/crm" element={<PageWrapper><CrmSoftware /></PageWrapper>} />
        <Route path="/software/erp" element={<PageWrapper><ErpSoftware /></PageWrapper>} />
        <Route path="/software/hrms" element={<PageWrapper><HrmsSoftware /></PageWrapper>} />
        <Route path="/software/billing" element={<PageWrapper><BillingSoftware /></PageWrapper>} />
        <Route path="/software/school-management" element={<PageWrapper><SchoolManagement /></PageWrapper>} />
        <Route path="/software/hospital-management" element={<PageWrapper><HospitalManagement /></PageWrapper>} />

        {/* Fallback route */}
        <Route path="*" element={<PageWrapper><Home /></PageWrapper>} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoute