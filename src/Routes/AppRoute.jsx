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

// Why Choose Us Pages
import EngineeringStandards from '../Pages/EngineeringStandards'
import SecurityIpProtection from '../Pages/SecurityIpProtection'
import CaseStudies from '../Pages/CaseStudies'
import ScheduleConsultation from '../Pages/ScheduleConsultation'

// UX & Web Services Dedicated Submenu Pages
import StaffAugmentation from '../Pages/StaffAugmentation'
import DedicatedTeams from '../Pages/DedicatedTeams'
import SoftwareOutsourcing from '../Pages/SoftwareOutsourcing'
import AiTransformation from '../Pages/AiTransformation'
import FrontendDevelopment from '../Pages/FrontendDevelopment'
import BackendDevelopment from '../Pages/BackendDevelopment'
import CmsDevelopment from '../Pages/CmsDevelopment'
import ApiIntegration from '../Pages/ApiIntegration'
import WireframingPrototyping from '../Pages/WireframingPrototyping'
import DesignSystems from '../Pages/DesignSystems'
import LandingPageDesign from '../Pages/LandingPageDesign'
import SaasWebPlatforms from '../Pages/SaasWebPlatforms'
import WebPerformanceOptimization from '../Pages/WebPerformanceOptimization'
import QaTestingAutomation from '../Pages/QaTestingAutomation'

// App Studio Submenu Pages
import MobileUiDesignSystems from '../Pages/MobileUiDesignSystems'
import OfflineFirstArchitecture from '../Pages/OfflineFirstArchitecture'
import RealtimeFeatures from '../Pages/RealtimeFeatures'
import PaymentsInAppPurchases from '../Pages/PaymentsInAppPurchases'
import AppPerformanceOptimization from '../Pages/AppPerformanceOptimization'
import AppStoreLaunchQa from '../Pages/AppStoreLaunchQa'
import StoreSubmission from '../Pages/StoreSubmission'
import CrashlyticsBugMonitoring from '../Pages/CrashlyticsBugMonitoring'
import AppVersionUpgrades from '../Pages/AppVersionUpgrades'
import MobileSlaSupport from '../Pages/MobileSlaSupport'
import PwaApp from '../Pages/PwaApp'

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

        {/* Why Choose Us Routes */}
        <Route path="/engineering-standards" element={<PageWrapper><EngineeringStandards /></PageWrapper>} />
        <Route path="/security-ip-protection" element={<PageWrapper><SecurityIpProtection /></PageWrapper>} />
        <Route path="/case-studies" element={<PageWrapper><CaseStudies /></PageWrapper>} />
        <Route path="/schedule-consultation" element={<PageWrapper><ScheduleConsultation /></PageWrapper>} />

        {/* Web Solutions Routes */}
        <Route path="/web-design" element={<PageWrapper><WebDesign /></PageWrapper>} />
        <Route path="/web-development" element={<PageWrapper><WebDevelopment /></PageWrapper>} />
        <Route path="/website-redesign" element={<PageWrapper><WebsiteRedesign /></PageWrapper>} />
        <Route path="/e-commerce" element={<PageWrapper><Ecommerce /></PageWrapper>} />
        <Route path="/website-maintenance" element={<PageWrapper><WebsiteMaintenance /></PageWrapper>} />

        {/* Dedicated UX & Web Services Submenu Routes */}
        <Route path="/services/staff-augmentation" element={<PageWrapper><StaffAugmentation /></PageWrapper>} />
        <Route path="/services/dedicated-teams" element={<PageWrapper><DedicatedTeams /></PageWrapper>} />
        <Route path="/services/software-outsourcing" element={<PageWrapper><SoftwareOutsourcing /></PageWrapper>} />
        <Route path="/services/ai-transformation" element={<PageWrapper><AiTransformation /></PageWrapper>} />
        <Route path="/services/frontend-development" element={<PageWrapper><FrontendDevelopment /></PageWrapper>} />
        <Route path="/services/backend-development" element={<PageWrapper><BackendDevelopment /></PageWrapper>} />
        <Route path="/services/cms-development" element={<PageWrapper><CmsDevelopment /></PageWrapper>} />
        <Route path="/services/api-integration" element={<PageWrapper><ApiIntegration /></PageWrapper>} />
        <Route path="/services/wireframing-prototyping" element={<PageWrapper><WireframingPrototyping /></PageWrapper>} />
        <Route path="/services/design-systems" element={<PageWrapper><DesignSystems /></PageWrapper>} />
        <Route path="/services/landing-page-design" element={<PageWrapper><LandingPageDesign /></PageWrapper>} />
        <Route path="/services/saas-web-platforms" element={<PageWrapper><SaasWebPlatforms /></PageWrapper>} />
        <Route path="/services/web-performance-optimization" element={<PageWrapper><WebPerformanceOptimization /></PageWrapper>} />
        <Route path="/services/qa-testing-automation" element={<PageWrapper><QaTestingAutomation /></PageWrapper>} />

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
        <Route path="/app-studio/pwa" element={<PageWrapper><PwaApp /></PageWrapper>} />

        {/* Dedicated App Studio Submenu Routes */}
        <Route path="/app-studio/mobile-ui-design-systems" element={<PageWrapper><MobileUiDesignSystems /></PageWrapper>} />
        <Route path="/app-studio/offline-first-architecture" element={<PageWrapper><OfflineFirstArchitecture /></PageWrapper>} />
        <Route path="/app-studio/realtime-features" element={<PageWrapper><RealtimeFeatures /></PageWrapper>} />
        <Route path="/app-studio/payments-in-app-purchases" element={<PageWrapper><PaymentsInAppPurchases /></PageWrapper>} />
        <Route path="/app-studio/app-performance-optimization" element={<PageWrapper><AppPerformanceOptimization /></PageWrapper>} />
        <Route path="/app-studio/app-store-launch-qa" element={<PageWrapper><AppStoreLaunchQa /></PageWrapper>} />
        <Route path="/app-studio/store-submission" element={<PageWrapper><StoreSubmission /></PageWrapper>} />
        <Route path="/app-studio/crashlytics-bug-monitoring" element={<PageWrapper><CrashlyticsBugMonitoring /></PageWrapper>} />
        <Route path="/app-studio/app-version-upgrades" element={<PageWrapper><AppVersionUpgrades /></PageWrapper>} />
        <Route path="/app-studio/mobile-sla-support" element={<PageWrapper><MobileSlaSupport /></PageWrapper>} />

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