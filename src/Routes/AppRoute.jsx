import React, { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import PageWrapper from '../Components/Common/PageWrapper'

// Core Initial Page (Direct import for immediate hero paint)
import Home from '../Pages/Home'

// Core Pages (Lazy loaded for optimal initial bundle)
const About = lazy(() => import('../Pages/About'))
const Team = lazy(() => import('../Pages/Team'))
const Career = lazy(() => import('../Pages/Career'))
const Testimonials = lazy(() => import('../Pages/Testimonials'))
const Contact = lazy(() => import('../Pages/Contact'))

// Web Solutions Pages
const WebDesign = lazy(() => import('../Pages/WebDesign'))
const WebDevelopment = lazy(() => import('../Pages/WebDevelopment'))
const WebsiteRedesign = lazy(() => import('../Pages/WebsiteRedesign'))
const Ecommerce = lazy(() => import('../Pages/Ecommerce'))
const WebsiteMaintenance = lazy(() => import('../Pages/WebsiteMaintenance'))

// Hosting Pages
const SharedHosting = lazy(() => import('../Pages/SharedHosting'))
const VpsHosting = lazy(() => import('../Pages/VpsHosting'))
const CloudHosting = lazy(() => import('../Pages/CloudHosting'))
const DomainRegistration = lazy(() => import('../Pages/DomainRegistration'))

// App Studio Pages
const AndroidApp = lazy(() => import('../Pages/AndroidApp'))
const IosApp = lazy(() => import('../Pages/IosApp'))
const HybridApp = lazy(() => import('../Pages/HybridApp'))
const FlutterApp = lazy(() => import('../Pages/FlutterApp'))
const PwaApp = lazy(() => import('../Pages/PwaApp'))

// Digital Growth Pages
const SeoOptimization = lazy(() => import('../Pages/SeoOptimization'))
const GoogleAds = lazy(() => import('../Pages/GoogleAds'))
const LocalSeo = lazy(() => import('../Pages/LocalSeo'))
const CompetitorAnalysis = lazy(() => import('../Pages/CompetitorAnalysis'))
const SearchIntentMapping = lazy(() => import('../Pages/SearchIntentMapping'))
const SocialMedia = lazy(() => import('../Pages/SocialMedia'))
const ContentMarketing = lazy(() => import('../Pages/ContentMarketing'))
const BrandIdentity = lazy(() => import('../Pages/BrandIdentity'))
const LinkedInLeadGen = lazy(() => import('../Pages/LinkedInLeadGen'))
const YouTubeMarketing = lazy(() => import('../Pages/YouTubeMarketing'))

// Software & Industry Portals Pages
const CrmSoftware = lazy(() => import('../Pages/CrmSoftware'))
const ErpSoftware = lazy(() => import('../Pages/ErpSoftware'))
const HrmsSoftware = lazy(() => import('../Pages/HrmsSoftware'))
const BillingSoftware = lazy(() => import('../Pages/BillingSoftware'))
const SchoolManagement = lazy(() => import('../Pages/SchoolManagement'))
const HospitalManagement = lazy(() => import('../Pages/HospitalManagement'))

// Why Choose Us Pages
const EngineeringStandards = lazy(() => import('../Pages/EngineeringStandards'))
const SecurityIpProtection = lazy(() => import('../Pages/SecurityIpProtection'))
const CaseStudies = lazy(() => import('../Pages/CaseStudies'))
const ScheduleConsultation = lazy(() => import('../Pages/ScheduleConsultation'))

// UX & Web Services Dedicated Submenu Pages
const StaffAugmentation = lazy(() => import('../Pages/StaffAugmentation'))
const DedicatedTeams = lazy(() => import('../Pages/DedicatedTeams'))
const SoftwareOutsourcing = lazy(() => import('../Pages/SoftwareOutsourcing'))
const AiTransformation = lazy(() => import('../Pages/AiTransformation'))
const FrontendDevelopment = lazy(() => import('../Pages/FrontendDevelopment'))
const BackendDevelopment = lazy(() => import('../Pages/BackendDevelopment'))
const ApiIntegration = lazy(() => import('../Pages/ApiIntegration'))
const WireframingPrototyping = lazy(() => import('../Pages/WireframingPrototyping'))
const LandingPageDesign = lazy(() => import('../Pages/LandingPageDesign'))
const WebPerformanceOptimization = lazy(() => import('../Pages/WebPerformanceOptimization'))
const QaTestingAutomation = lazy(() => import('../Pages/QaTestingAutomation'))

// App Studio Submenu Pages
const MobileUiDesignSystems = lazy(() => import('../Pages/MobileUiDesignSystems'))
const OfflineFirstArchitecture = lazy(() => import('../Pages/OfflineFirstArchitecture'))
const RealtimeFeatures = lazy(() => import('../Pages/RealtimeFeatures'))
const PaymentsInAppPurchases = lazy(() => import('../Pages/PaymentsInAppPurchases'))
const AppPerformanceOptimization = lazy(() => import('../Pages/AppPerformanceOptimization'))
const AppStoreLaunchQa = lazy(() => import('../Pages/AppStoreLaunchQa'))
const StoreSubmission = lazy(() => import('../Pages/StoreSubmission'))
const CrashlyticsBugMonitoring = lazy(() => import('../Pages/CrashlyticsBugMonitoring'))
const AppVersionUpgrades = lazy(() => import('../Pages/AppVersionUpgrades'))
const MobileSlaSupport = lazy(() => import('../Pages/MobileSlaSupport'))

const AppRoute = () => {
  const location = useLocation()

  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
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
          <Route path="/web_design" element={<PageWrapper><WebDesign /></PageWrapper>} />
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
          <Route path="/services/api-integration" element={<PageWrapper><ApiIntegration /></PageWrapper>} />
          <Route path="/services/wireframing-prototyping" element={<PageWrapper><WireframingPrototyping /></PageWrapper>} />
          <Route path="/services/landing-page-design" element={<PageWrapper><LandingPageDesign /></PageWrapper>} />
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
          <Route path="/digital-booster/competitor-analysis" element={<PageWrapper><CompetitorAnalysis /></PageWrapper>} />
          <Route path="/digital-booster/search-intent-mapping" element={<PageWrapper><SearchIntentMapping /></PageWrapper>} />
          <Route path="/digital-booster/social-media" element={<PageWrapper><SocialMedia /></PageWrapper>} />
          <Route path="/digital-booster/content-marketing" element={<PageWrapper><ContentMarketing /></PageWrapper>} />
          <Route path="/digital-booster/branding" element={<PageWrapper><BrandIdentity /></PageWrapper>} />
          <Route path="/digital-booster/linkedin-lead-gen" element={<PageWrapper><LinkedInLeadGen /></PageWrapper>} />
          <Route path="/digital-booster/youtube-marketing" element={<PageWrapper><YouTubeMarketing /></PageWrapper>} />

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
    </Suspense>
  )
}

export default AppRoute
