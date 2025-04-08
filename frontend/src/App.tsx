import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/header'
import Footer from './components/footer'
import Overview from './components/overview'
import Risks from './components/risks'
import Preparation from './components/preparation'
import Community from './components/about'
import Resources from './components/resources'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 py-2 flex-grow">
          <Routes>
            <Route path="/" element={<Overview />} />
            <Route path="/risks" element={<Risks />} />
            <Route path="/preparation" element={<Preparation />} />
            <Route path="/about" element={<Community />} />
            <Route path="/resources" element={<Resources />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App 