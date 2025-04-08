import React from 'react'
import { Github, Twitter, Slack, Mail, Star, GitFork, Users, MessageSquare, Code, Heart, Coffee, ExternalLink, AlertTriangle, Shield, Clock } from 'lucide-react'

export default function Community() {
  return (
    <div className="max-w-5xl mx-auto p-2 md:p-6">
      {/* Hero Section - Left aligned */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 sm:tracking-tight break-words">
          About <span className="text-blue-600">Polycrisis.guide</span>
        </h1>
      </div>

      {/* Project Leaders */}
      <div id="project-info" className="mb-16 scroll-mt-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200">
          <div className="p-4 md:p-8">
            <div className="text-gray-700 space-y-6 md:text-lg">
              <div>
                <p><b>Polycrisis.guide is a platform that addresses the convergence of multiple interconnected global challenges that amplify each other—what we call a "polycrisis."</b> It uses AI agents to research and analyze these systemic risks from multiple perspectives, integrating insights across disciplines in ways no single human analyst could achieve. The platform provides actionable preparation frameworks to help individuals and communities build resilience against these converging challenges.</p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center">
                  <p className="text-gray-600 flex-1"><b>Polycrisis.guide was developed by <a href="https://samim.ai" className="text-blue-600 hover:text-blue-700">Studio Samim</a></b> as part of a "AI Research Agent" project for a client in the financial risk management industry that wants to stay anonymous but has agreed to allow this curation of information that was gathered with the same tool set to be made public.</p>
                  <div className="ml-6 flex-shrink-0">
                    <img 
                      src="https://samim.ai/assets/images/illustrations/studiosamim.png" 
                      alt="Studio Samim" 
                      className="h-16 w-16 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Crisis Response Network */}
      <div id="crisis-response" className="mb-12 scroll-mt-16 bg-red-50 border border-red-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-8">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 sm:h-8 sm:w-8 text-red-600 mr-2 sm:mr-3 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-words">Vision: Crisis Response Network</h2>
          </div>
          
          <p className="md:text-lg text-gray-700 mb-8">
            Beyond analysis and visualization, we envision building a global network of individuals and organizations prepared to respond when crises hit. This future community would develop practical resilience strategies and coordination mechanisms that can be activated during emergencies.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-red-100">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-red-100 rounded-full mr-3">
                  <Clock className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Time-Critical</h3>
              </div>
              <p className="text-gray-700">
                When polycrisis events unfold, immediate coordination would become essential. Our proposed network would be designed to mobilize quickly with pre-established protocols.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-red-100">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-red-100 rounded-full mr-3">
                  <Users className="h-5 w-5 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Distributed</h3>
              </div>
              <p className="text-gray-700">
                Our ideal response network would be intentionally distributed across regions, disciplines, and resource types to ensure resilience even when some systems fail.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-red-100">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-red-100 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Practical</h3>
              </div>
              <p className="text-gray-700">
                We plan to focus on actionable strategies for food security, energy resilience, medical support, and community coordination during crisis events.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-red-100">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Help Build This Vision</h3>
            <p className="text-gray-700 mb-4">
              We're seeking collaborators with diverse skills and resources who want to help develop this crisis response framework. If you're interested in contributing to this vision, we'd love to hear from you.
            </p>
            <div className="flex">
              <a 
                href="mailto:s@samim.ai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Contact us
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>            
        </div>
      </div>

      {/* Get Involved Section */}
      <div id="get-involved" className="mb-12 scroll-mt-16 bg-blue-50 border border-blue-200 rounded-xl shadow-sm overflow-hidden">
        <div className="px-8 py-8">
          <div className="flex items-center mb-6">
            <Code className="h-6 w-6 sm:h-10 sm:w-10 text-blue-600 mr-2 sm:mr-4 flex-shrink-0" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 break-words">Get Involved: Open Source</h2>
          </div>
          
          <p className="md:text-lg text-gray-700 mb-8 max-w-3xl">
            Whether you're a developer, data analyst, researcher, or just interested in global systemic risks, there are many ways to help improve our collective understanding of preparedness.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Contribute Code */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <Code className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Contribute Code</h3>
              </div>
              <p className="text-gray-700">
                Help us improve the platform by contributing code, fixing bugs, or adding new features. We welcome pull requests from developers of all skill levels.
              </p>
            </div>

            {/* Data Analysis */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Data Analysis</h3>
              </div>
              <p className="text-gray-700">
                Contribute to our risk assessment models, analyze data, or help identify new indicators for monitoring global systemic risks.
              </p>
            </div>

            {/* Documentation */}
            <div className="bg-white p-5 rounded-lg shadow-sm border border-blue-100">
              <div className="flex items-center mb-3">
                <div className="p-2 bg-blue-100 rounded-full mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900">Documentation & Research</h3>
              </div>
              <p className="text-gray-700">
                Help us improve our documentation, write research papers, or create educational content about global systemic risks and resilience.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-blue-100 mb-6">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Join Our GitHub Repository</h3>
            <p className="text-gray-700 mb-5 max-w-2xl">
              Our codebase is open-source and we welcome contributors of all experience levels. 
            </p>
            <a 
              href="https://github.com/samim23/polycrisis" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}