import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Content from './components/Content';
import NotFound from './components/Utilities/404';
import WriteUp_page from './components/WriteUp/WriteUp_page';
import LegalNotice from './components/legal/LegalNotice';
import PrivacyPolicy from './components/legal/PrivacyPolicy';
import TermsOfService from './components/legal/TermsOfService';
import LegalNoticeEN from './components/legal/LegalNoticeEN';
import PrivacyPolicyEN from './components/legal/PrivacyPolicyEN';
import TermsOfServiceEN from './components/legal/TermsOfServiceEN';


function App() {

  return (
    <Router>
    <div className="min-w-screen min-h-screen">
      <Routes>
        <Route path="" element={<Content/>} />
        <Route path="/writeups" element={<WriteUp_page/>} />
        
        {/* French Legal Pages */}
        <Route path="/legal-notice" element={<LegalNotice/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/terms-of-service" element={<TermsOfService/>} />
        
        {/* English Legal Pages */}
        <Route path="/en/legal-notice" element={<LegalNoticeEN/>} />
        <Route path="/en/privacy-policy" element={<PrivacyPolicyEN/>} />
        <Route path="/en/terms-of-service" element={<TermsOfServiceEN/>} />
        
        <Route path="*" element={<NotFound/>} />
      </Routes>
      <Analytics />
    </div>
    </Router>
  )
}

export default App


