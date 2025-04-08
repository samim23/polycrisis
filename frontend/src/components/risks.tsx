import {
  BarChart3,
  AlertTriangle,
  Clock,
  TrendingUp,
  ChevronDown,
  ChevronUp,
  Info,
  BarChart,
  Calendar,
  Gauge,
  FileText,
  ArrowUpRight,
  Search,
  BookOpen,
  AlertCircle,
} from "lucide-react"
import { 
  riskFactors, 
  dynamicCriticalTimeline, 
  dynamicCompoundRisk 
} from "../data/riskData"
import { keyIndicators } from "../data/indicatorData"
import { useState, useMemo } from "react"
import ResearchReportModal from "./ResearchReportModal"

export default function Risks() {
  const [expandedRisk, setExpandedRisk] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'overview' | 'detailed' | 'indicators'>('overview')
  const [categoryFilter, setCategoryFilter] = useState<string>('All Categories')
  const [statusFilter, setStatusFilter] = useState<string>('All Statuses')
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null)
  const [showPromptModal, setShowPromptModal] = useState(false)
  
  // Filter indicators based on selected filters
  const filteredIndicators = useMemo(() => {
    return keyIndicators.filter(indicator => {
      const matchesCategory = categoryFilter === 'All Categories' || indicator.category === categoryFilter
      const matchesStatus = statusFilter === 'All Statuses' || indicator.status === statusFilter
      return matchesCategory && matchesStatus
    })
  }, [keyIndicators, categoryFilter, statusFilter])
  
  const toggleRiskExpansion = (id: string) => {
    if (expandedRisk === id) {
      setExpandedRisk(null)
    } else {
      setExpandedRisk(id)
    }
  }

  const navigateToRiskDetail = (riskId: string) => {
    setActiveTab('detailed');
    setExpandedRisk(riskId);
    
    // Use setTimeout to ensure the tab has changed before scrolling
    setTimeout(() => {
      const element = document.getElementById(`risk-${riskId}`);
      if (element) {
        // Adjust scroll position to show the title by using 'start' alignment with some offset
        const headerOffset = 70; // Adjust this value as needed
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      } else {
        console.log(`Element with ID risk-${riskId} not found`);
      }
    }, 300);
  };

  const openResearchReport = (riskId: string) => {
    setSelectedReportId(riskId);
    setShowPromptModal(false);
    setReportModalOpen(true);
  };

  const openPromptModal = () => {
    setSelectedReportId("research-prompt");
    setShowPromptModal(true);
    setReportModalOpen(true);
  };

  return (
    <div className="max-w-5xl mx-auto p-2 md:p-6">
      <header className="sticky top-0 bg-white z-10 pb-2 mb-6">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 sm:tracking-tight">
          Risk <span className="text-blue-600">Assessment</span>
        </h1>
        
        {/* Tab navigation */}
        <div className="mt-6 border-b border-gray-200">
          <nav className="flex space-x-6" aria-label="Dashboard views">
            <button 
              onClick={() => setActiveTab('overview')}
              className={`py-2 px-1 text-base md:text-xl font-medium border-b-2 ${
                activeTab === 'overview' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Overview
            </button>
            <button 
              onClick={() => setActiveTab('detailed')}
              className={`py-2 px-1 text-base md:text-xl font-medium border-b-2 ${
                activeTab === 'detailed' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Analysis
            </button>
            <button 
              onClick={() => setActiveTab('indicators')}
              className={`py-2 px-1 text-base md:text-xl font-medium border-b-2 ${
                activeTab === 'indicators' 
                  ? 'border-blue-600 text-blue-600' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Indicators
            </button>
          </nav>
        </div>
      </header>

      {activeTab === 'overview' ? (
        <>
          {/* Compound Risk Assessment - Now using pre-calculated dynamic data */}
          <section className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-5 bg-amber-50 border-b border-amber-200">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 p-2 bg-amber-100 rounded-md">
                  <AlertTriangle className="h-6 w-6 text-amber-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">Compound Risk Assessment</h3>
                </div>
              </div>

              {/* Description first to provide context */}
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                {dynamicCompoundRisk.description}
              </p>

              {/* Improved risk visualization with better color gradient */}
              <div className="bg-white/50 mt-4 rounded-lg p-4 border border-amber-200">
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium text-gray-700">Critical Threshold Timeframe</span>
                  <span className="text-sm font-medium text-amber-800">{dynamicCriticalTimeline.period}</span>
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
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <span>Confidence: 
                    <span className="font-medium text-amber-800 ml-1">{dynamicCompoundRisk.confidenceLevel}</span>
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Risk Overview - Improved visualization with better color gradient */}
          <section className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-md mr-3">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-medium text-gray-900">Risk Factor Comparison</h2>
              </div>
            </div>

            <div className="p-5">
              <div className="space-y-5">
                {riskFactors.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.id} className="flex flex-col sm:flex-row">
                      <div className="flex">
                        <div className={`flex-shrink-0 p-2 ${item.bgColor} rounded-md mr-4`}>
                          <Icon className={`md:h-5 md:w-5 w-3 h-3 ${item.iconColor}`} />
                        </div>
                        <div className="w-full sm:w-48 text-base font-medium text-gray-900 mr-4">
                          {item.name}
                        </div>
                      </div>
                      <div className="w-full sm:flex-1 flex items-center mt-2 sm:mt-0">
                        <div className="relative w-full h-8 bg-gray-100 rounded-md overflow-hidden">
                          <div className={`absolute h-full ${
                            item.riskScore >= 90 ? 'bg-red-500' :
                            item.riskScore >= 80 ? 'bg-red-400' :
                            item.riskScore >= 70 ? 'bg-orange-500' :
                            item.riskScore >= 60 ? 'bg-amber-500' :
                            item.riskScore >= 50 ? 'bg-yellow-500' :
                            'bg-blue-500'
                          }`} style={{ width: `${item.riskScore}%` }}></div>
                          <div className="absolute top-0 bottom-0 flex items-center justify-center w-full">
                            <span className="text-base font-medium text-gray-900 mix-blend-darken">{item.riskScore}%</span>
                          </div>
                        </div>
                        <button 
                          onClick={() => navigateToRiskDetail(item.id)}
                          className="ml-3 p-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 transition-colors"
                          title={`View details for ${item.name}`}
                        >
                          <ArrowUpRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md font-medium flex items-center" onClick={() => setActiveTab('detailed')}>
                View Risks Analysis
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </section>

          {/* Key Indicators and Decision Points - Further Refined */}
          <section className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-4 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-md mr-3">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="text-lg font-medium text-gray-900">Critical Threshold Indicators</h2>
              </div>
            </div>

            <div className="p-5">
              <p className="text-base text-gray-700 leading-relaxed">
                  This dashboard tracks all monitored indicators across multiple domains. Each indicator has a pre-determined threshold that, when crossed, signals increased risk of systemic breakdown. 
              </p>
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
              <button className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-md font-medium flex items-center" onClick={() => setActiveTab('indicators')}>
                View Indicators
                <ArrowUpRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </section>
        </>
      ) : activeTab === 'detailed' ? (
        <div className="space-y-6">
          {/* Methodology Information Box */}
          <section className="mb-6 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-4 bg-blue-50 border-b border-blue-200 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-md">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="ml-3 text-lg font-medium text-gray-900">Research Methodology</h2>
              </div>
              <button
                onClick={openPromptModal}
                className="inline-flex items-center px-3 py-1.5 border border-blue-300 text-sm font-medium rounded-md text-blue-700 bg-blue-50 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FileText className="h-4 w-4 mr-1.5" />
                LLM Prompt
              </button>
            </div>
            <div className="p-5 bg-white">
              <ul className="text-sm text-gray-700 leading-relaxed mb-6 space-y-2">
                <li className="flex items-start font-bold">
                  This analysis is powered by a custom-built web research AI agent, which autonomously gathers and synthesizes information from diverse online sources to generate comprehensive risk assessments using state-of-the-art LLMs.
                </li> 
                <li className="flex items-start">
                  The depth and accuracy of the analysis directly correlates with the range and quality of sources the agent examines, and while hundreds of sources were analyzed, the current analysis is limited by not having an extremely deep source selection - incorporating more diverse global perspectives, industry-specific insights, and specialized domains would significantly enhance overall reliability.
                </li> 
                <li className="flex items-start">
                  Each risk factor includes a detailed research report that can be accessed when viewing the details of a risk factor. Each risk factor has been analyzed using a structured framework that considers:
                </li>
              </ul>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700 mb-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Probability and impact assessments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Temporal dynamics and timeframes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Key metrics and thresholds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Adaptation capacity and limitations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>Evidence quality and expert consensus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  <span>System interactions and cascading effects</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Individual Risk Factor Cards with Expandable Details */}
          {riskFactors.map((factor) => {
            const Icon = factor.icon;
            const isExpanded = expandedRisk === factor.id;
            
            return (
              <section 
                key={factor.id} 
                id={`risk-${factor.id}`}
                className={`border ${
                  isExpanded 
                    ? 'border-3 border-blue-500'
                    : 'border-gray-200'
                } rounded-lg overflow-hidden shadow-sm mb-4`}
              >
                <div 
                  className={`p-4 ${isExpanded ? factor.bgColor + '/20' : 'bg-gray-50'} border-b border-gray-200 cursor-pointer flex items-center justify-between`}
                  onClick={() => toggleRiskExpansion(factor.id)}
                >
                  <div className="flex items-center">
                    <div className={`flex-shrink-0 p-2 ${factor.bgColor} rounded-md`}>
                      <Icon className={`h-5 w-5 ${factor.iconColor}`} />
                    </div>
                    <div className="ml-4">
                      <h2 className={`text-base font-medium ${isExpanded ? 'text-gray-900' : 'text-gray-700'}`}>{factor.name}</h2>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-24 h-3 bg-gray-200 rounded-full overflow-hidden mr-2">
                      <div className={`h-full ${factor.color} rounded-full`} style={{ width: `${factor.riskScore}%` }}></div>
                    </div>
                    <div className="text-base font-medium text-gray-900 mr-3">{factor.riskScore}%</div>
                  </div>
                </div>
                
                {/* Description section with improved buttons */}
                <div 
                  className="p-4 bg-white border-b border-gray-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <p className="text-base text-gray-700 leading-relaxed mb-3 sm:mb-0 sm:mr-4">
                      {factor.description}
                    </p>
                    <div className="flex-shrink-0 flex space-x-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleRiskExpansion(factor.id);
                        }}
                        className="px-3 py-1.5 text-sm font-medium rounded-md border border-green-300 bg-green-50 text-green-700 hover:bg-green-100 flex items-center justify-between"
                      >
                        <span className="flex items-center">
                          <Info className="h-4 w-4 mr-1.5" />
                          Risk Details
                        </span>
                        {isExpanded ? 
                          <ChevronUp className="h-4 w-4 ml-1.5 text-gray-500" /> : 
                          <ChevronDown className="h-4 w-4 ml-1.5 text-gray-500" />
                        }
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          openResearchReport(factor.id);
                        }}
                        className="px-3 py-1.5 text-sm font-medium rounded-md border border-blue-300 bg-blue-50 text-blue-700 hover:bg-blue-100 flex items-center"
                      >
                        <BookOpen className="h-4 w-4 mr-1.5" />
                        Research Report
                      </button>
                    </div>
                  </div>
                </div>

                {/* Expandable detailed content */}
                <div className={`p-4 bg-gray-50 border-t border-gray-200 ${isExpanded ? 'block' : 'hidden'}`}>
                  <div className="space-y-6">
                    {/* Core Assessment */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-base font-medium text-gray-900 mb-3 flex items-center border-b border-gray-100 pb-2">
                        <Gauge className="h-5 w-5 mr-2 text-gray-700" />
                        Core Risk Assessment
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
                        <div className="bg-gray-50 p-3 rounded border border-gray-200">
                          <h4 className="text-base font-medium text-gray-800 mb-2">Probability</h4>
                          <div className="text-base text-gray-700 space-y-2">
                            <div className="flex justify-between">
                              <span>Rating:</span>
                              <span className="font-medium">{factor.probability.rating}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Percentage:</span>
                              <span className="font-medium">{factor.probability.percentage}</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Confidence:</span>
                              <span className="font-medium">{factor.probability.confidenceLevel}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-3 rounded border border-gray-200">
                          <h4 className="text-base font-medium text-gray-800 mb-2">Impact</h4>
                          <div className="text-base text-gray-700">
                            <div className="flex ml-2mb-2">
                              <span>Rating:</span>
                              <span className="font-medium">{factor.impact.rating}</span>
                            </div>
                            <div>
                              <p className="text-base text-gray-700 leading-relaxed">{factor.impact.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <h4 className="text-base font-medium text-gray-800 mb-2">Cascading Effects</h4>
                        <ul className="text-base text-gray-700 space-y-2 pl-4 list-disc">
                          {factor.impact.cascadingEffects.map((effect, index) => (
                            <li key={index}>{effect}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    {/* Temporal Aspects */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-base font-medium text-gray-900 mb-3 flex items-center border-b border-gray-100 pb-2">
                        <Calendar className="h-5 w-5 mr-2 text-gray-700" />
                        Temporal Aspects
                      </h3>
                      
                      <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <div className="grid grid-cols-3 gap-3 text-base text-gray-700">
                          <div>
                            <span className="font-medium block mb-1 text-gray-800">Onset:</span>
                            {factor.timeHorizon.onset}
                          </div>
                          <div>
                            <span className="font-medium block mb-1 text-gray-800">Peak:</span>
                            {factor.timeHorizon.peak}
                          </div>
                          <div>
                            <span className="font-medium block mb-1 text-gray-800">Duration:</span>
                            {factor.timeHorizon.duration}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Key Metrics */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-base font-medium text-gray-900 mb-3 flex items-center border-b border-gray-100 pb-2">
                        <BarChart className="h-5 w-5 mr-2 text-gray-700" />
                        Key Metrics
                      </h3>
                      
                      <div className="space-y-3">
                        {factor.keyMetrics.map((metric, index) => (
                          <div key={index} className="bg-gray-50 p-3 rounded border border-gray-200">
                            <h4 className="text-base font-medium text-gray-800 mb-2">{metric.name}</h4>
                            <div className="grid grid-cols-3 gap-2 text-base text-gray-700">
                              <div>
                                <span className="font-medium block mb-1 text-gray-800">Current:</span>
                                {metric.current}
                              </div>
                              <div>
                                <span className="font-medium block mb-1 text-gray-800">Threshold:</span>
                                {metric.threshold}
                              </div>
                              <div>
                                <span className="font-medium block mb-1 text-gray-800">Trend:</span>
                                <span className={`font-medium
                                  ${metric.trend === 'Improving' ? 'text-green-600' : ''}
                                  ${metric.trend === 'Stable' ? 'text-blue-600' : ''}
                                  ${metric.trend === 'Worsening' ? 'text-orange-600' : ''}
                                  ${metric.trend === 'Rapidly Worsening' ? 'text-red-600' : ''}
                                `}>
                                  {metric.trend}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Adaptation Capacity */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-base font-medium text-gray-900 mb-3 flex items-center border-b border-gray-100 pb-2">
                        <ArrowUpRight className="h-5 w-5 mr-2 text-gray-700" />
                        Adaptation Capacity
                      </h3>
                      
                      <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <div className="flex ml-2mb-3 text-base">
                          <span className="font-medium text-gray-800">Rating:</span>
                          <span className={`font-medium px-2 py-0.5 rounded-full
                            ${factor.adaptationCapacity.rating === 'Very Low' ? 'bg-red-100 text-red-800' : ''}
                            ${factor.adaptationCapacity.rating === 'Low' ? 'bg-orange-100 text-orange-800' : ''}
                            ${factor.adaptationCapacity.rating === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : ''}
                            ${factor.adaptationCapacity.rating === 'High' ? 'bg-green-100 text-green-800' : ''}
                            ${factor.adaptationCapacity.rating === 'Very High' ? 'bg-emerald-100 text-emerald-800' : ''}
                          `}>
                            {factor.adaptationCapacity.rating}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base text-gray-700 mt-2">
                          <div className="bg-white p-2 rounded border border-gray-200">
                            <span className="font-medium block mb-1 text-gray-800">Limitations:</span>
                            <p className="leading-relaxed">{factor.adaptationCapacity.limitations}</p>
                          </div>
                          <div className="bg-white p-2 rounded border border-gray-200">
                            <span className="font-medium block mb-1 text-gray-800">Opportunities:</span>
                            <p className="leading-relaxed">{factor.adaptationCapacity.opportunities}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Evidence Basis */}
                    <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <h3 className="text-base font-medium text-gray-900 mb-3 flex items-center border-b border-gray-100 pb-2">
                        <FileText className="h-5 w-5 mr-2 text-gray-700" />
                        Evidence Basis
                      </h3>
                      
                      <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <div className="flex ml-2mb-3 text-base">
                          <span className="font-medium text-gray-800">Quality:</span>
                          <span className={`font-medium px-2 py-0.5 rounded-full
                            ${factor.evidenceBasis.quality === 'Limited' ? 'bg-orange-100 text-orange-800' : ''}
                            ${factor.evidenceBasis.quality === 'Moderate' ? 'bg-yellow-100 text-yellow-800' : ''}
                            ${factor.evidenceBasis.quality === 'Strong' ? 'bg-green-100 text-green-800' : ''}
                            ${factor.evidenceBasis.quality === 'Very Strong' ? 'bg-emerald-100 text-emerald-800' : ''}
                          `}>
                            {factor.evidenceBasis.quality}
                          </span>
                        </div>
                        
                        <div className="mt-2">
                          <span className="text-base font-medium block mb-2 text-gray-800">Key References:</span>
                          <ul className="text-base text-gray-700 space-y-2 pl-4 list-disc bg-white p-2 rounded border border-gray-200">
                            {factor.evidenceBasis.keyReferences.map((reference, index) => (
                              <li key={index} className="leading-relaxed">{reference}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            );
          })}
        </div>
      ) : (
        <div className="space-y-6">
          {/* Methodology Information Box for Indicators */}
          <section className="mb-6 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-4 bg-blue-50 border-b border-blue-200 flex items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0 p-2 bg-blue-100 rounded-md">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                </div>
                <h2 className="ml-3 text-lg font-medium text-gray-900">Indicators Methodology</h2>
              </div>
            </div>
            <div className="p-5 bg-white">
               
              <p className="text-base text-gray-700 leading-relaxed font-bold">
                This dashboard tracks all monitored indicators across multiple domains. Each indicator has a pre-determined threshold that, when crossed, signals increased risk of systemic breakdown. Indicators are continuously updated.
              </p>

              <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mt-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 p-2 bg-amber-100 rounded-full mr-3">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-amber-800 mb-1">DEMO VERSION - IMPORTANT NOTICE:</h4>
                    <p className="text-base text-amber-800 leading-relaxed">
                      The data displayed here is entirely fictional and for demonstration purposes only. Due to client contractual obligations, the actual project data cannot be shared publicly at this time. This demo uses placeholder information solely to showcase dashboard functionality and does not represent real conditions or findings. Real data will be implemented when contractual restrictions permit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-8 border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="p-4 bg-gray-50 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0 p-2 bg-blue-50 rounded-md mr-3">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                  </div>
                  <h2 className="text-base font-medium text-gray-900">Indicators</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="relative">
                    <select 
                      className="appearance-none pl-3 pr-10 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-700 font-medium"
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                      <option>All Categories</option>
                      <option>Economic</option>
                      <option>Environmental</option>
                      <option>Social</option>
                      <option>Political</option>
                      <option>Technological</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                  
                  <div className="relative">
                    <select 
                      className="appearance-none pl-3 pr-10 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50 text-gray-700 font-medium"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option>All Statuses</option>
                      <option>Normal</option>
                      <option>Warning</option>
                      <option>Alert</option>
                      <option>Critical</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <ChevronDown className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-5">
              <div className="space-y-4">
                {filteredIndicators.map((indicator, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
                    <div className="p-3 bg-gray-50 border-b border-gray-200 flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <h3 className="text-base font-medium text-gray-900">{indicator.description}</h3>
                        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                          {indicator.category || 'Economic'}
                        </span>
                      </div>
                      <div className={`px-2 py-0.5 rounded-full text-xs font-medium 
                        ${indicator.status === 'Normal' ? 'bg-green-100 text-green-800' : ''}
                        ${indicator.status === 'Warning' ? 'bg-yellow-100 text-yellow-800' : ''}
                        ${indicator.status === 'Alert' ? 'bg-orange-100 text-orange-800' : ''}
                        ${indicator.status === 'Critical' ? 'bg-red-100 text-red-800' : ''}
                        ${!indicator.status ? 'bg-gray-100 text-gray-800' : ''}
                      `}>
                        {indicator.status || 'Monitoring'}
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Current Value</div>
                          <div className="text-base font-medium text-gray-900">{indicator.currentValue || '—'}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Threshold</div>
                          <div className="text-base font-medium text-gray-900">{indicator.threshold || '—'}</div>
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">Trend</div>
                          <div className={`text-base font-medium
                            ${indicator.trend === 'Improving' ? 'text-green-600' : ''}
                            ${indicator.trend === 'Stable' ? 'text-blue-600' : ''}
                            ${indicator.trend === 'Worsening' ? 'text-orange-600' : ''}
                            ${indicator.trend === 'Rapidly Worsening' ? 'text-red-600' : ''}
                          `}>
                            {indicator.trend || 'Stable'}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <div className="flex ml-2mb-1">
                          <span className="text-sm text-gray-500">Progress to Threshold</span>
                          <span className="text-sm font-medium text-gray-700">{indicator.percentToThreshold || 0}%</span>
                        </div>
                        <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden">
                          <div className={`absolute h-full ${
                            indicator.percentToThreshold >= 90 ? 'bg-red-500' :
                            indicator.percentToThreshold >= 75 ? 'bg-orange-500' :
                            indicator.percentToThreshold >= 50 ? 'bg-yellow-500' :
                            'bg-blue-500'
                          }`} style={{ width: `${indicator.percentToThreshold || 0}%` }}></div>
                        </div>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded border border-gray-200">
                        <div className="text-sm font-medium text-gray-700 mb-1">Implications:</div>
                        <p className="text-base text-gray-700 leading-relaxed">
                          {indicator.implications || 'No implications data available.'}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {filteredIndicators.length === 0 && (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
                    <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-gray-100">
                      <Search className="h-6 w-6 text-gray-400" />
                    </div>
                    <h3 className="mt-2 text-base font-medium text-gray-900">No matching indicators</h3>
                    <p className="mt-1 text-base text-gray-500">
                      Try changing your filters to see more results.
                    </p>
                    <div className="mt-6">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={() => {
                          setCategoryFilter('All Categories')
                          setStatusFilter('All Statuses')
                        }}
                      >
                        Reset filters
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="p-4 bg-gray-50 border-t border-gray-200 flex ml-2items-center">
              <span className="text-sm text-gray-500">Last updated: 26.3.2025</span>
            </div>
          </section>
        </div>
      )}

      {/* Research Report Modal */}
      <ResearchReportModal
        riskId={selectedReportId || ''}
        isOpen={reportModalOpen}
        onClose={() => {
          setReportModalOpen(false);
          setShowPromptModal(false);
        }}
        isPrompt={showPromptModal}
      />
    </div>
  )
}

