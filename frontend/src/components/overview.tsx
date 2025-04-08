import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { riskFactors, dynamicCompoundRisk, dynamicCriticalTimeline } from '../data/riskData';
import About from './components/about'

export default function Overview() {
  // Create risk sets from the actual risk factors data
  const createRiskSets = () => {
    const sets = [];
    // Create sets of 4 risks each
    for (let i = 0; i < riskFactors.length; i += 4) {
      const set = riskFactors.slice(i, i + 4).map(risk => ({
        id: risk.id,
        name: risk.name,
        color: risk.bgColor,
        textColor: risk.iconColor,
        icon: risk.icon // Use the actual icon component
      }));
      sets.push(set);
    }
    return sets;
  };

  const riskSets = createRiskSets();
  const [currentSetIndex, setCurrentSetIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
  // Use actual compound risk data from globalRiskAssessment, formatted consistently with risks.tsx
  const compoundRiskData = {
    level: dynamicCompoundRisk.percentageWidth,
    yearsToThreshold: dynamicCriticalTimeline.yearsToThreshold || 8,
    status: dynamicCompoundRisk.percentageWidth > 80 ? 'Critical' : 
            dynamicCompoundRisk.percentageWidth > 60 ? 'High Risk' : 
            dynamicCompoundRisk.percentageWidth > 40 ? 'Moderate Risk' : 'Low Risk',
    percentageWidth: dynamicCompoundRisk.percentageWidth,
    percentage: dynamicCompoundRisk.percentage
  };
  
  // Auto-rotate through risk sets with improved animation
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentSetIndex((prevIndex) => (prevIndex + 1) % riskSets.length);
        setIsTransitioning(false);
      }, 300); // Quick transition
    }, 3000); // Faster rotation - every 3 seconds
    
    return () => clearInterval(interval);
  }, [riskSets.length]);

  return (
    <div className="max-w-5xl mx-auto p-2 md:p-6">
      {/* Hero Banner Section */}
      <div className="relative rounded-xl overflow-hidden mb-12 mt-2 md:mt-0">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-gray-900/90">
          <img 
            src="/img/amazon-fire.jpeg" 
            alt="" 
            className="w-full h-full object-cover mix-blend-overlay opacity-60"
            loading="lazy"
          />
        </div>
        
        {/* Content */}
        <div className="relative py-16 px-8 sm:py-24 sm:px-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 max-w-3xl">
            Understanding and<br/> <span className="text-blue-300">Acting on Global Risks</span>
          </h1>
          <p className="text-xl text-blue-50 max-w-2xl mb-8">
            Helping you navigate the complex web of converging global challenges with AI-powered analysis & practical preparation strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/risks" className="group inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-all">
              Explore Risk Factors
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
            <Link to="/preparation" className="group inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-6 rounded-lg backdrop-blur-sm transition-all">
              View Preparation Guides
              <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 mt-10">
            {/* Left column - Introduction */}
            <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800 border-b border-gray-200 pb-2">
                Understanding the <span className="text-blue-600">Polycrisis</span>
            </h2>
            <p className="text-gray-700 leading-relaxed">
                The term "polycrisis" describes our current global predicament: a complex web of interconnected challenges that amplify each other. Analysis suggests that <b>multiple systemic crises will converge within the next decade</b>, potentially overwhelming our collective response capabilities.
            </p>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
                {/* Compound Risk Visualization - updated for clarity and consistency */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium text-gray-700">Critical Threshold Timeframe</span>
                    <span className="text-sm font-medium text-red-700">{dynamicCriticalTimeline.period}</span>
                  </div>
                  <div className="relative w-full h-8 my-2 bg-gray-200 rounded-md overflow-hidden">
                    <div 
                      className={`absolute h-full ${
                        dynamicCompoundRisk.percentageWidth >= 90 ? 'bg-red-500' :
                        dynamicCompoundRisk.percentageWidth >= 80 ? 'bg-red-400' :
                        dynamicCompoundRisk.percentageWidth >= 70 ? 'bg-orange-500' :
                        dynamicCompoundRisk.percentageWidth >= 60 ? 'bg-amber-500' :
                        dynamicCompoundRisk.percentageWidth >= 50 ? 'bg-yellow-500' :
                        'bg-blue-500'
                      } rounded-md`}
                      style={{ width: `${dynamicCompoundRisk.percentageWidth}%` }}
                    />
                    <div className="absolute top-0 bottom-0 flex items-center justify-center w-full">
                      <span className="text-base font-medium text-gray-900 mix-blend-darken">{dynamicCompoundRisk.percentage}</span>
                    </div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-sm text-gray-500">Confidence: <span className="font-medium text-red-600">{dynamicCompoundRisk.confidenceLevel}</span></span>
                  </div>
                </div>
            </div>
            </section>
            
            {/* Right column - Visual element with rotating risks - now entirely clickable */}
            <Link 
              to="/risks" 
              className="bg-white rounded-xl overflow-hidden flex flex-col h-full shadow hover:shadow-md transition-all duration-300 border border-gray-100"
              aria-label="View all risk factors"
            >
              <div className="grid grid-cols-2 h-full">
                {riskSets[currentSetIndex]?.map((risk, index) => {
                    const Icon = risk.icon;
                    
                    return (
                      <div 
                        key={`${currentSetIndex}-${index}`} 
                        className={`border-gray-100 p-4 flex flex-col items-center justify-center hover:bg-gray-50 transform transition-all duration-300 ${
                            isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'
                        } ${index < 2 ? 'border-b' : ''} ${index % 2 === 0 ? 'border-r' : ''}`}
                        style={{ 
                            animationDelay: `${index * 100}ms`
                        }}
                      >
                        {Icon && <Icon className="text-blue-600 w-8 h-8 mb-2" aria-hidden="true" />}
                        <span className="text-sm font-medium text-center text-gray-800">{risk.name}</span>
                      </div>
                    );
                })}
              </div>
            </Link>
        </div>

        {/* Navigation cards */}
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4 flex items-center">
            About <span className="text-blue-600 ml-2">Polycrisis Guide</span>
        </h2>
        <div className="bg-white rounded-xl mb-8">
          <p className="text-gray-700 leading-relaxed">
            <b>Polycrisis Guide uses AI Agents to comprehensively research and analyze the state of the global polycrisis.</b> It integrates insights across disciplines, assessing risks from angles that would be impossible for any single human analyst to cover.
            
            Polycrisis also provides an actionable preparation framework, to help communities build resilience in the face of challenges.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 mb-10">
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-5 flex flex-col hover:shadow-md transition-shadow">
            <h3 className="font-medium text-amber-900 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                Risks
            </h3>
            <p className="text-amber-800 text-sm mb-4">
                AI analysis of risk factors and their potential impacts on global systems.
            </p>
            <a href="/risks" className="mt-auto text-amber-900 font-medium text-sm hover:underline flex items-center">
                Explore Risks
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
            </div>
            
            <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-5 flex flex-col hover:shadow-md transition-shadow">
            <h3 className="font-medium text-emerald-900 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Preparation
            </h3>
            <p className="text-emerald-800 text-sm mb-4">
                Practical frameworks to build personal & community resilience in uncertain times.
            </p>
            <a href="/preparation" className="mt-auto text-emerald-900 font-medium text-sm hover:underline flex items-center">
              Explore Guides
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
            </div>
            
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 flex flex-col hover:shadow-md transition-shadow">
            <h3 className="font-medium text-blue-900 mb-2 flex items-center">
                <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Community
            </h3>
            <p className="text-blue-800 text-sm mb-4">
                Learn more about the project and its vision of building resilient communities.
            </p>
            <a href="/about" className="mt-auto text-blue-900 font-medium text-sm hover:underline flex items-center">
                Learn more
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </a>
            </div>
        </div>
              
        <div className="grid grid-cols-1 md:grid-cols-1 gap-8 mb-10">
            <section className="bg-white">
              <p className="text-gray-700 mb-4 leading-relaxed">
                  The goal is to raise awareness about the polycrisis while avoiding both alarmism and complacency. The vision is to build communities that are resilient enough to weather potential systemic breakdowns.
              </p>
              <div className="text-gray-700 italic border-l-4 border-purple-200 pl-3 py-1">
                  "Informed preparation is not about fear, but about responsible foresight and collective action."
              </div>
            </section>
        </div>
    </div>
  )
} 