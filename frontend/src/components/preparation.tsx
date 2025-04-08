import { useState } from 'react'
import { Clipboard, Check } from 'lucide-react'
import { frameworks, categories } from '../data/preparationData'

export default function Preparation() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<string>("all")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [showBeginnerGuide, setShowBeginnerGuide] = useState<boolean>(false)
  
  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setCopiedPrompt(id)
        setTimeout(() => setCopiedPrompt(null), 2000)
      })
      .catch(err => {
        console.error('Failed to copy text: ', err)
      })
  }

  const filteredFrameworks = frameworks.filter(framework => {
    const matchesCategory = activeTab === "all" || framework.category === activeTab
    const matchesSearch = searchQuery === "" || 
      framework.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      framework.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="max-w-5xl mx-auto p-2 md:p-6">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 sm:tracking-tight">
        Preparation <span className="text-blue-600">Framework</span>
      </h1>      
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 my-6">
        <h3 className="font-medium text-blue-800 mb-2">About This Framework</h3>
        <p className="text-blue-800 mb-3">
          This preparation framework helps individuals and families navigate complex challenges through personalized AI conversations. Each card below contains a prompt you can copy and paste into ChatGPT, Claude, or other AI assistants to get guidance tailored to your specific situation.
        </p>
        
        <div className="flex flex-wrap gap-3 mt-4">
          <button 
            onClick={() => setShowBeginnerGuide(!showBeginnerGuide)}
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
          >
            {showBeginnerGuide ? "Hide Beginner Guide" : "I'm New Here - Where to Start?"}
          </button>
        </div>
      </div>
      
      {showBeginnerGuide && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-green-800 mb-2">Recommended Starting Point</h3>
          <p className="text-green-800 mb-3">
            If you're new to preparation, we recommend starting with the <strong>Personal Risk Assessment</strong> framework. This will help you identify which risks are most relevant to your specific situation before diving into more specialized preparations.
          </p>
          <div className="bg-white rounded-lg border border-green-200 p-4 mb-3">
            <h4 className="font-medium text-gray-900 mb-2">Personal Risk Assessment</h4>
            <p className="text-gray-600 mb-3">Evaluate which global risks are most likely to affect you personally</p>
            <div className="prose prose-sm max-w-none text-gray-700 max-h-32 overflow-y-auto mb-4 text-sm">
              {frameworks[0].prompt}
            </div>
            <button 
              onClick={() => handleCopy("beginner-risk", frameworks[0].prompt)}
              className="inline-flex items-center px-3 py-1.5 border border-green-300 shadow-sm text-sm font-medium rounded-md text-green-700 bg-white hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors"
            >
              {copiedPrompt === "beginner-risk" ? (
                <>
                  <Check className="h-4 w-4 mr-1.5 text-green-500" />
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <Clipboard className="h-4 w-4 mr-1.5" />
                  <span>Copy This Prompt</span>
                </>
              )}
            </button>
          </div>
          <p className="text-green-800 mb-1">After completing your risk assessment, you'll have a better idea of which other frameworks will be most helpful for your situation.</p>
        </div>
      )}
      
      <div className="mb-6 space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search frameworks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-2.5 text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          )}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                activeTab === category.id
                  ? "bg-blue-100 text-blue-800 border border-blue-200"
                  : "bg-gray-100 text-gray-700 border border-gray-200 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      {filteredFrameworks.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">No frameworks match your search criteria.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredFrameworks.map((framework) => (
            <div key={framework.id} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
              <div className="p-5 border-b border-gray-200">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold text-gray-900">{framework.title}</h2>
                  <span className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-600">
                    {categories.find(c => c.id === framework.category)?.name.split(' ')[0]}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{framework.description}</p>
              </div>
              
              <div className="p-5 bg-gray-50 relative flex-grow">
                <div className="prose prose-sm max-w-none text-gray-700 max-h-48 overflow-y-auto mb-4">
                  {framework.prompt}
                </div>
                
                <div className="mt-auto flex justify-end">
                  <button 
                    onClick={() => handleCopy(framework.id, framework.prompt)}
                    className="inline-flex items-center px-3 py-1.5 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    {copiedPrompt === framework.id ? (
                      <>
                        <Check className="h-4 w-4 mr-1.5 text-green-500" />
                        <span className="text-green-600">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Clipboard className="h-4 w-4 mr-1.5" />
                        <span>Copy Prompt</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      
      <div className="mt-12 bg-yellow-50 border border-yellow-200 rounded-lg p-6 text-center">
        <h3 className="font-medium text-yellow-800 text-lg mb-2">Have a Framework to Contribute?</h3>
        <p className="text-yellow-700 mb-4">
          We welcome community contributions! If you've created an effective preparation prompt that could help others, consider sharing it with the community.
        </p>
        <a 
          href="https://github.com/samim23/polycrisis/issues/new?template=framework_suggestion.md"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 bg-yellow-600 text-white text-sm font-medium rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
        >
          Contribute on GitHub
        </a>
      </div>
    </div>
  )
} 